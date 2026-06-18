"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { services } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.58,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

interface ServicesProps {
  onBookService: (service: string) => void;
}

export function Services({ onBookService }: ServicesProps) {
  return (
    <section id="services" className="relative overflow-hidden section-padding">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(34,211,238,0.10),transparent_32%),radial-gradient(circle_at_80%_35%,rgba(139,92,246,0.12),transparent_34%),linear-gradient(180deg,transparent,rgba(59,130,246,0.03),transparent)]"
        animate={{ opacity: [0.45, 0.8, 0.45] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan/10 blur-[120px]"
        animate={{ scale: [1, 1.14, 1], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading
            label="Services"
            title="My Services"
            description="I help businesses, startups, and individuals build digital products, automate workflows, leverage AI, and create impactful digital experiences."
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-6 shadow-glass backdrop-blur-xl transition-colors duration-300 hover:border-cyan/25"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-cyan/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-electric/20 via-neon/15 to-cyan/15 text-cyan shadow-neon-cyan transition-transform duration-300 group-hover:scale-105">
                  <service.icon size={26} aria-hidden="true" />
                </div>

                <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-cyan">
                  {service.title}
                </h3>
                <p className="mt-3 min-h-20 text-sm leading-relaxed text-white/42">
                  {service.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {service.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 font-mono text-[11px] text-white/55"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => onBookService(service.title)}
                  data-cursor="pointer"
                  aria-label={`Book ${service.title} service`}
                  className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-white/75 transition-all duration-300 hover:border-cyan/30 hover:text-cyan hover:shadow-neon-cyan"
                >
                  <CalendarCheck size={16} /> Book Service
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-10 flex flex-col items-start justify-between gap-5 rounded-2xl border border-white/10 bg-gradient-to-r from-electric/10 via-white/[0.04] to-cyan/10 p-6 backdrop-blur-xl sm:flex-row sm:items-center"
        >
          <div>
            <h3 className="text-xl font-semibold text-white">Need a custom solution?</h3>
            <p className="mt-2 text-sm text-white/45">Let&apos;s work together.</p>
          </div>
          <a
            href="#contact"
            data-cursor="pointer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-electric to-neon px-5 py-2.5 text-sm font-medium text-white shadow-neon transition-shadow hover:shadow-neon-cyan"
          >
            Start a Conversation <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
