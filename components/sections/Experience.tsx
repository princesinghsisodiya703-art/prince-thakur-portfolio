"use client";

import { motion } from "framer-motion";
import { Brain, Briefcase, GraduationCap, Rocket, TrendingUp } from "lucide-react";
import { experience } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

function ExperienceIcon({ type }: { type: (typeof experience)[number]["type"] }) {
  if (type === "education") return <GraduationCap size={18} />;
  if (type === "credential") return <Brain size={18} />;
  if (type === "project") return <Rocket size={18} />;
  if (type === "growth") return <TrendingUp size={18} />;
  return <Briefcase size={18} />;
}

export function Experience() {
  return (
    <section id="experience" className="relative section-padding">
      <div className="absolute inset-0 bg-gradient-to-b from-neon/[0.02] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-3xl mx-auto relative">
        <SectionHeading
          label="Journey"
          title="Learning & Build Timeline"
          description="A truthful timeline built around academics, certifications, personal projects, and self-driven technical growth."
        />

        <div className="relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-electric/60 via-neon/40 to-transparent" />

          <div className="space-y-10">
            {experience.map((item, i) => (
              <motion.div
                key={`${item.role}-${item.period}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative pl-16 md:pl-20"
              >
                <div className="absolute left-3 md:left-5 top-1 z-10">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={cn(
                      "flex h-10 w-10 items-center justify-center rounded-xl border shadow-neon",
                      item.type === "education"
                        ? "bg-neon/10 border-neon/30 text-neon"
                        : item.type === "project"
                          ? "bg-cyan/10 border-cyan/30 text-cyan"
                          : "bg-electric/10 border-electric/30 text-electric"
                    )}
                  >
                    <ExperienceIcon type={item.type} />
                  </motion.div>
                </div>

                <div className="glass rounded-2xl p-6 hover:border-cyan/20 transition-colors duration-300 group">
                  <span className="font-mono text-xs text-cyan/60">{item.period}</span>
                  <h3 className="mt-1 text-lg font-semibold text-white group-hover:text-gradient transition-all">
                    {item.role}
                  </h3>
                  <p className="text-sm text-neon/70">{item.company}</p>
                  <p className="mt-3 text-sm text-white/40 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
