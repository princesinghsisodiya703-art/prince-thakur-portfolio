"use client";

import { motion } from "framer-motion";
import { achievements } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

export function Achievements() {
  return (
    <section id="achievements" className="relative section-padding">
      <div className="absolute inset-0 bg-gradient-to-b from-neon/[0.02] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <SectionHeading
          label="Milestones"
          title="Authentic Achievements"
          description="Only real milestones: verified learning, one live project, and a focused AI plus full stack growth path."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <GlassCard className="h-full">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-electric/20 to-cyan/15 border border-white/10">
                  <a.icon size={22} className="text-cyan" />
                </div>
                <h3 className="text-lg font-semibold text-white">{a.title}</h3>
                <p className="mt-2 text-sm text-white/40 leading-relaxed">
                  {a.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

