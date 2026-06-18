"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig, socialLinks } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";

interface ContactProps {
  selectedServiceRequest: {
    service: string;
    requestId: number;
  };
}

const trustBadges = ["Quick Response", "Custom Solutions", "Professional Support"];

export function Contact({ selectedServiceRequest }: ContactProps) {
  return (
    <section id="contact" className="relative overflow-hidden section-padding">
      <div className="absolute inset-0 bg-gradient-to-t from-electric/[0.04] via-transparent to-transparent pointer-events-none" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-28 top-24 h-96 w-96 rounded-full bg-neon/10 blur-[120px]"
        animate={{ opacity: [0.25, 0.45, 0.25], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto relative">
        <SectionHeading
          label="Contact"
          title="Project Inquiry"
          description="Share your project requirements, budget, timeline, and service needs so I can understand the best way to help."
        />

        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-6 md:p-8"
          >
            <h3 className="text-2xl font-semibold text-white md:text-3xl">
              Let&apos;s Build Something Great
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/45 md:text-base">
              Have an idea, product, automation workflow, AI feature, or portfolio need? Send the
              details and I&apos;ll help shape it into a practical next step.
            </p>

            <div className="mt-8 space-y-4">
              <ContactLink
                icon={Mail}
                label="Email"
                value={siteConfig.email}
                href={`mailto:${siteConfig.email}`}
              />
              <ContactLink icon={Phone} label="Phone" value="Available on request" />
              <ContactLink icon={MapPin} label="Location" value={siteConfig.location} />
            </div>

            <div className="mt-8">
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.24em] text-white/30">
                Social Links
              </p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    data-cursor="pointer"
                    whileHover={{ y: -4, scale: 1.08 }}
                    className="flex h-11 w-11 items-center justify-center rounded-xl glass text-white/50 transition-all hover:text-cyan hover:shadow-neon-cyan"
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-3">
              {trustBadges.map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3"
                >
                  <CheckCircle2 size={17} className="text-cyan" />
                  <span className="text-sm text-white/60">{badge}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <ContactForm selectedServiceRequest={selectedServiceRequest} />
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl glass text-cyan">
        <Icon size={18} />
      </div>
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/30">
          {label}
        </p>
        <p className="mt-1 text-sm text-white/60">{value}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        data-cursor="pointer"
        className="flex items-center gap-3 transition-colors hover:text-cyan"
      >
        {content}
      </a>
    );
  }

  return <div className="flex items-center gap-3">{content}</div>;
}
