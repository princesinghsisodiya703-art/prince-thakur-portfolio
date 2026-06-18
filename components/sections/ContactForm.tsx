"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { budgetOptions, contactServiceOptions, deadlineOptions } from "@/lib/data";
import { MagneticButton } from "@/components/ui/MagneticButton";

type InquiryFormState = {
  name: string;
  email: string;
  phone: string;
  serviceRequired: string;
  budget: string;
  deadline: string;
  projectDetails: string;
  companyWebsite: string;
};

type InquiryFormErrors = Partial<Record<keyof InquiryFormState, string>>;

interface ContactFormProps {
  selectedServiceRequest: {
    service: string;
    requestId: number;
  };
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const initialFormState: InquiryFormState = {
  name: "",
  email: "",
  phone: "",
  serviceRequired: "",
  budget: "",
  deadline: "",
  projectDetails: "",
  companyWebsite: "",
};

function validateForm(formState: InquiryFormState) {
  const errors: InquiryFormErrors = {};

  if (formState.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }

  if (!emailPattern.test(formState.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!formState.serviceRequired) {
    errors.serviceRequired = "Please select a service.";
  }

  if (formState.projectDetails.trim().length < 20) {
    errors.projectDetails = "Please share at least 20 characters about the project.";
  }

  return errors;
}

export function ContactForm({ selectedServiceRequest }: ContactFormProps) {
  const [formState, setFormState] = useState<InquiryFormState>(initialFormState);
  const [errors, setErrors] = useState<InquiryFormErrors>({});
  const [focused, setFocused] = useState<string | null>(null);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [statusMessage, setStatusMessage] = useState("");

  const serviceOptions = useMemo(
    () => ["", ...contactServiceOptions, "Other"],
    []
  );

  useEffect(() => {
    if (!selectedServiceRequest.service) return;

    setFormState((current) => ({
      ...current,
      serviceRequired: selectedServiceRequest.service,
    }));
    setErrors((current) => ({ ...current, serviceRequired: undefined }));
    setFocused("serviceRequired");
  }, [selectedServiceRequest]);

  const updateField = (field: keyof InquiryFormState, value: string) => {
    setFormState((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validateForm(formState);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitStatus("error");
      setStatusMessage("Please fix the highlighted fields.");
      return;
    }

    setSubmitStatus("loading");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong. Please try again.");
      }

      setSubmitStatus("success");
      setStatusMessage("Inquiry sent successfully. I will review it soon.");
      setFormState(initialFormState);
      setErrors({});
    } catch (error) {
      setSubmitStatus("error");
      setStatusMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="glass-strong rounded-2xl p-6 md:p-8 lg:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="hidden" aria-hidden="true">
          <label htmlFor="companyWebsite">Company Website</label>
          <input
            id="companyWebsite"
            name="companyWebsite"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={formState.companyWebsite}
            onChange={(e) => updateField("companyWebsite", e.target.value)}
          />
        </div>

        <TextField
          id="name"
          label="Full Name *"
          type="text"
          value={formState.name}
          error={errors.name}
          focused={focused}
          placeholder="Your full name"
          required
          onFocus={setFocused}
          onBlur={() => setFocused(null)}
          onChange={(value) => updateField("name", value)}
        />
        <TextField
          id="email"
          label="Email Address *"
          type="email"
          value={formState.email}
          error={errors.email}
          focused={focused}
          placeholder="you@example.com"
          required
          onFocus={setFocused}
          onBlur={() => setFocused(null)}
          onChange={(value) => updateField("email", value)}
        />
        <TextField
          id="phone"
          label="Phone Number"
          type="tel"
          value={formState.phone}
          focused={focused}
          placeholder="+91 00000 00000"
          onFocus={setFocused}
          onBlur={() => setFocused(null)}
          onChange={(value) => updateField("phone", value)}
        />
        <SelectField
          id="serviceRequired"
          label="Service Required *"
          value={formState.serviceRequired}
          error={errors.serviceRequired}
          focused={focused}
          options={serviceOptions}
          placeholder="Select a Service"
          required
          onFocus={setFocused}
          onBlur={() => setFocused(null)}
          onChange={(value) => updateField("serviceRequired", value)}
        />
        <SelectField
          id="budget"
          label="Budget"
          value={formState.budget}
          focused={focused}
          options={budgetOptions}
          placeholder="Select budget"
          onFocus={setFocused}
          onBlur={() => setFocused(null)}
          onChange={(value) => updateField("budget", value)}
        />
        <SelectField
          id="deadline"
          label="Project Deadline"
          value={formState.deadline}
          focused={focused}
          options={deadlineOptions}
          placeholder="Select timeline"
          onFocus={setFocused}
          onBlur={() => setFocused(null)}
          onChange={(value) => updateField("deadline", value)}
        />
      </div>

      <div className="mt-5">
        <TextAreaField
          id="projectDetails"
          label="Project Details *"
          value={formState.projectDetails}
          error={errors.projectDetails}
          focused={focused}
          placeholder="Tell me what you want to build, automate, improve, or launch..."
          required
          minLength={20}
          onFocus={setFocused}
          onBlur={() => setFocused(null)}
          onChange={(value) => updateField("projectDetails", value)}
        />
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <MagneticButton
          type="submit"
          variant="primary"
          disabled={submitStatus === "loading"}
          className="w-full sm:w-auto"
        >
          {submitStatus === "loading" ? (
            <>
              <Loader2 size={16} className="animate-spin" /> Sending Inquiry
            </>
          ) : submitStatus === "success" ? (
            <>
              <CheckCircle2 size={16} /> Inquiry Sent
            </>
          ) : (
            <>
              <Send size={16} /> Send Inquiry
            </>
          )}
        </MagneticButton>
        <p className="text-xs text-white/35">Typically responds within 24 hours</p>
      </div>

      {statusMessage && (
        <p
          className={`mt-5 flex items-center gap-2 text-sm ${
            submitStatus === "success" ? "text-cyan/80" : "text-red-300"
          }`}
          role={submitStatus === "error" ? "alert" : "status"}
          aria-live="polite"
        >
          {submitStatus === "success" ? <CheckCircle2 size={15} /> : <AlertCircle size={15} />}
          {statusMessage}
        </p>
      )}
    </motion.form>
  );
}

function fieldClass(hasError: boolean) {
  return `w-full rounded-xl border bg-white/[0.03] px-4 py-4 text-white placeholder:text-white/20 outline-none transition-all duration-300 hover:border-cyan/25 focus:border-cyan/40 focus:shadow-neon-cyan ${
    hasError ? "border-red-400/40" : "border-white/[0.08]"
  }`;
}

function FloatingLabel({
  htmlFor,
  label,
  active,
}: {
  htmlFor: string;
  label: string;
  active: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={`absolute left-4 transition-all duration-300 font-mono text-xs pointer-events-none ${
        active ? "-top-2.5 text-cyan bg-surface px-2" : "top-4 text-white/30"
      }`}
    >
      {label}
    </label>
  );
}

function FieldError({ id, error }: { id: string; error?: string }) {
  if (!error) return null;
  return (
    <p id={`${id}-error`} className="mt-2 text-xs text-red-300">
      {error}
    </p>
  );
}

function TextField({
  id,
  label,
  type,
  value,
  error,
  focused,
  placeholder,
  required = false,
  onFocus,
  onBlur,
  onChange,
}: {
  id: keyof InquiryFormState;
  label: string;
  type: string;
  value: string;
  error?: string;
  focused: string | null;
  placeholder: string;
  required?: boolean;
  onFocus: (field: string) => void;
  onBlur: () => void;
  onChange: (value: string) => void;
}) {
  return (
    <div className="relative">
      <FloatingLabel htmlFor={id} label={label} active={focused === id || Boolean(value)} />
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => onFocus(id)}
        onBlur={onBlur}
        placeholder={placeholder}
        className={fieldClass(Boolean(error))}
      />
      <FieldError id={id} error={error} />
    </div>
  );
}

function SelectField({
  id,
  label,
  value,
  error,
  focused,
  options,
  placeholder,
  required = false,
  onFocus,
  onBlur,
  onChange,
}: {
  id: keyof InquiryFormState;
  label: string;
  value: string;
  error?: string;
  focused: string | null;
  options: string[];
  placeholder: string;
  required?: boolean;
  onFocus: (field: string) => void;
  onBlur: () => void;
  onChange: (value: string) => void;
}) {
  return (
    <div className="relative">
      <FloatingLabel htmlFor={id} label={label} active={focused === id || Boolean(value)} />
      <select
        id={id}
        required={required}
        value={value}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => onFocus(id)}
        onBlur={onBlur}
        className={`${fieldClass(Boolean(error))} cursor-pointer appearance-none pr-11 ${
          value ? "text-white" : "text-white/30"
        }`}
      >
        <option value="" className="bg-surface text-white">
          {placeholder}
        </option>
        {options
          .filter((option) => option)
          .map((option) => (
            <option key={option} value={option} className="bg-surface text-white">
              {option}
            </option>
          ))}
      </select>
      <span className="pointer-events-none absolute right-4 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-b border-r border-cyan/70" />
      <FieldError id={id} error={error} />
    </div>
  );
}

function TextAreaField({
  id,
  label,
  value,
  error,
  focused,
  placeholder,
  required,
  minLength,
  onFocus,
  onBlur,
  onChange,
}: {
  id: keyof InquiryFormState;
  label: string;
  value: string;
  error?: string;
  focused: string | null;
  placeholder: string;
  required: boolean;
  minLength: number;
  onFocus: (field: string) => void;
  onBlur: () => void;
  onChange: (value: string) => void;
}) {
  return (
    <div className="relative">
      <FloatingLabel htmlFor={id} label={label} active={focused === id || Boolean(value)} />
      <textarea
        id={id}
        required={required}
        rows={6}
        minLength={minLength}
        value={value}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => onFocus(id)}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`${fieldClass(Boolean(error))} resize-none`}
      />
      <FieldError id={id} error={error} />
    </div>
  );
}
