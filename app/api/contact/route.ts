import { NextRequest, NextResponse } from "next/server";
import { budgetOptions, contactServiceOptions, deadlineOptions } from "@/lib/data";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  serviceRequired?: unknown;
  budget?: unknown;
  deadline?: unknown;
  projectDetails?: unknown;
  companyWebsite?: unknown;
};

type Inquiry = {
  name: string;
  email: string;
  phone: string;
  serviceRequired: string;
  budget: string;
  deadline: string;
  projectDetails: string;
  submittedAt: string;
};

type RateLimitRecord = {
  count: number;
  resetAt: number;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const rateLimitStore = new Map<string, RateLimitRecord>();
const rateLimitWindowMs = 10 * 60 * 1000;
const rateLimitMaxRequests = 5;

function cleanText(value: unknown, maxLength = 1200) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = rateLimitStore.get(ip);

  if (!current || current.resetAt < now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + rateLimitWindowMs });
    return false;
  }

  if (current.count >= rateLimitMaxRequests) {
    return true;
  }

  rateLimitStore.set(ip, { ...current, count: current.count + 1 });
  return false;
}

function validateInquiry(inquiry: Inquiry) {
  if (inquiry.name.length < 2) {
    return "Please enter your full name.";
  }

  if (!emailPattern.test(inquiry.email)) {
    return "Please enter a valid email address.";
  }

  if (
    !inquiry.serviceRequired ||
    ![...contactServiceOptions, "Other"].includes(inquiry.serviceRequired)
  ) {
    return "Please select a valid service.";
  }

  if (inquiry.budget && !budgetOptions.includes(inquiry.budget)) {
    return "Please select a valid budget range.";
  }

  if (inquiry.deadline && !deadlineOptions.includes(inquiry.deadline)) {
    return "Please select a valid project deadline.";
  }

  if (inquiry.projectDetails.length < 20) {
    return "Please share at least 20 characters about the project.";
  }

  return null;
}

function getResendConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    return null;
  }

  return { apiKey, toEmail, fromEmail };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function buildPlainText(inquiry: Inquiry) {
  return [
    "New portfolio inquiry",
    "",
    `Name: ${inquiry.name}`,
    `Email: ${inquiry.email}`,
    `Phone: ${inquiry.phone || "Not provided"}`,
    `Service: ${inquiry.serviceRequired}`,
    `Budget: ${inquiry.budget || "Not provided"}`,
    `Deadline: ${inquiry.deadline || "Not provided"}`,
    `Submission Timestamp: ${inquiry.submittedAt}`,
    "",
    "Project Details:",
    inquiry.projectDetails,
  ].join("\n");
}

function buildHtml(inquiry: Inquiry) {
  const rows = [
    ["Name", inquiry.name],
    ["Email", inquiry.email],
    ["Phone", inquiry.phone || "Not provided"],
    ["Service", inquiry.serviceRequired],
    ["Budget", inquiry.budget || "Not provided"],
    ["Deadline", inquiry.deadline || "Not provided"],
    ["Submission Timestamp", inquiry.submittedAt],
  ];

  return `
    <div style="font-family:Arial,sans-serif;color:#111827;line-height:1.6">
      <h2>New portfolio inquiry</h2>
      <table style="border-collapse:collapse;width:100%;max-width:680px">
        ${rows
          .map(
            ([label, value]) => `
              <tr>
                <td style="border:1px solid #e5e7eb;padding:8px;font-weight:700">${escapeHtml(label)}</td>
                <td style="border:1px solid #e5e7eb;padding:8px">${escapeHtml(value)}</td>
              </tr>
            `
          )
          .join("")}
      </table>
      <h3>Project Details</h3>
      <p>${escapeHtml(inquiry.projectDetails).replace(/\n/g, "<br />")}</p>
    </div>
  `;
}

async function sendInquiryEmail(inquiry: Inquiry) {
  const config = getResendConfig();

  if (!config) {
    throw new Error(
      "Contact delivery is not configured. Set RESEND_API_KEY, CONTACT_TO_EMAIL, and CONTACT_FROM_EMAIL."
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: config.fromEmail,
      to: [config.toEmail],
      subject: `🚀 New Portfolio Inquiry | ${inquiry.serviceRequired}`,
      reply_to: inquiry.email,
      text: buildPlainText(inquiry),
      html: buildHtml(inquiry),
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    console.error("Resend delivery failed", {
      status: response.status,
      statusText: response.statusText,
      body,
    });
    throw new Error("Unable to send inquiry. Please try again later.");
  }
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many inquiries. Please try again later." },
      { status: 429 }
    );
  }

  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (cleanText(payload.companyWebsite)) {
    return NextResponse.json({ ok: true });
  }

  const inquiry: Inquiry = {
    name: cleanText(payload.name, 120),
    email: cleanText(payload.email, 160).toLowerCase(),
    phone: cleanText(payload.phone, 40),
    serviceRequired: cleanText(payload.serviceRequired, 80),
    budget: cleanText(payload.budget, 40),
    deadline: cleanText(payload.deadline, 40),
    projectDetails: cleanText(payload.projectDetails, 2000),
    submittedAt: new Date().toISOString(),
  };

  const validationError = validateInquiry(inquiry);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  try {
    await sendInquiryEmail(inquiry);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact inquiry failed", {
      error: error instanceof Error ? error.message : error,
      serviceRequired: inquiry.serviceRequired,
      submittedAt: inquiry.submittedAt,
    });

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Unable to send inquiry. Please try again later.",
      },
      { status: 502 }
    );
  }
}
