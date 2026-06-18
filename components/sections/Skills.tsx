"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

export function Skills() {
  return (
    <section id="skills" className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <SectionHeading
          label="Skills"
          title="Technical Toolkit"
          description="A recruiter-friendly view of the technologies I am learning and applying across AI, full stack development, and modern product builds."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <GlassCard className="h-full hover:border-cyan/20" delay={0} hover3d>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-electric/20 to-neon/20 border border-white/10">
                    <category.icon size={22} className="text-cyan" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white">{category.title}</h3>
                    <p className="mt-1 text-xs text-white/35">
                      {category.skills.length} technologies
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ y: -2 }}
                      className="rounded-lg border border-white/[0.08] bg-white/[0.04] px-3 py-2 font-mono text-xs text-white/55 transition-colors hover:border-cyan/25 hover:text-cyan"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
