"use client";

import { motion } from "framer-motion";
import { Download, ExternalLink, FileText, ShieldCheck } from "lucide-react";
import { certifications } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

export function Certifications() {
  return (
    <section id="certifications" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-electric/[0.02] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <SectionHeading
          label="Credentials"
          title="Verified Certifications"
          description="Verified credentials with direct badge links and certificate PDF access for recruiters, clients, and reviewers."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
            >
              <GlassCard className="h-full">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan/15 to-neon/15 border border-white/10">
                    <c.icon size={22} className="text-cyan" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan/[0.08] border border-cyan/20 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-cyan/80">
                    <ShieldCheck size={12} /> {c.status}
                  </span>
                </div>

                <h3 className="mt-4 text-base font-semibold leading-snug text-white">
                  {c.title}
                </h3>
                <div className="mt-3 space-y-2 text-sm">
                  <p className="flex items-center justify-between gap-3 text-white/60">
                    <span className="text-white/35">Issuer</span>
                    <span className="text-right">{c.issuer}</span>
                  </p>
                  <p className="flex items-center justify-between gap-3 text-white/60">
                    <span className="text-white/35">Issue Date</span>
                    <span className="text-right">{c.issueDate}</span>
                  </p>
                </div>

                <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="mt-5 flex items-center justify-between gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] px-4 py-3">
                  <span className="font-mono text-xs text-white/35">Credential Badge</span>
                  <span className="rounded-full bg-gradient-to-r from-electric/70 to-neon/70 px-3 py-1 font-mono text-[10px] font-semibold text-white">
                    {c.badge}
                  </span>
                </div>

                <div className="mt-5 grid gap-3">
                  <a
                    href={c.certificatePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="pointer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-electric to-neon px-4 py-2.5 text-sm font-medium text-white shadow-neon transition-shadow hover:shadow-neon-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
                  >
                    <FileText size={15} /> View Certificate
                  </a>
                  <a
                    href={c.certificatePdf}
                    download={c.certificateFileName}
                    data-cursor="pointer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full glass px-4 py-2.5 text-sm font-medium text-white/75 transition-colors hover:text-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
                  >
                    <Download size={15} /> Download Certificate
                  </a>
                  {c.verificationUrl ? (
                    <a
                      href={c.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="pointer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-white/60 transition-colors hover:border-cyan/25 hover:text-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
                    >
                      <ExternalLink size={15} /> Verify Credential
                    </a>
                  ) : null}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

