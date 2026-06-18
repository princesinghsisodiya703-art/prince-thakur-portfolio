"use client";

import { motion } from "framer-motion";
import { aboutHighlights, timeline } from "@/lib/data";
import { RobotVisual } from "@/components/effects/RobotVisual";
import { GlassCard } from "@/components/ui/GlassCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="relative section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="About Me"
          title="AI Learning Journey"
          description="A grounded introduction to my path in artificial intelligence, full stack development, and real-world problem solving."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-white/60 leading-relaxed mb-6">
              Hi, I&apos;m <span className="text-white font-medium">Prince Thakur</span>, an{" "}
              <span className="text-white font-medium">
                Artificial Intelligence undergraduate
              </span>{" "}
              passionate about creating intelligent systems and impactful digital solutions.
            </p>
            <p className="text-base text-white/40 leading-relaxed mb-6">
              I enjoy learning new technologies, solving complex problems, and applying AI to
              real-world challenges.
            </p>
            <p className="text-base text-white/40 leading-relaxed">
              My interests span artificial intelligence, machine learning, full stack development,
              robotics, and modern web technologies that can create meaningful impact.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {["AI Undergraduate", "Full Stack Developer", "Continuous Learner"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full glass px-4 py-1.5 font-mono text-xs text-cyan/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            <div className="relative h-80 w-64 md:h-96 md:w-72">
              <RobotVisual className="h-full w-full" />
            </div>
            <div className="absolute inset-0 bg-gradient-radial from-neon/10 to-transparent blur-3xl" />
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-20">
          {aboutHighlights.map((item, i) => (
            <GlassCard key={item.title} delay={i * 0.1}>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-electric/20 to-neon/20">
                <item.icon size={24} className="text-cyan" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{item.description}</p>
            </GlassCard>
          ))}
        </div>

        <div className="relative">
          <h3 className="mb-10 text-center font-mono text-xs uppercase tracking-[0.3em] text-white/30">
            Education Journey
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-electric/50 via-neon/30 to-transparent hidden md:block" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className={`flex flex-col md:flex-row items-center gap-6 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <GlassCard hover3d={false} className="inline-block w-full md:max-w-md">
                      <span className="font-mono text-xs text-cyan/70">{item.year}</span>
                      <h4 className="mt-1 text-lg font-semibold text-white">{item.title}</h4>
                      <p className="text-sm text-neon/80">{item.org}</p>
                      <p className="mt-2 text-sm text-white/40">{item.description}</p>
                    </GlassCard>
                  </div>

                  <div className="relative z-10 hidden md:flex h-4 w-4 items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-gradient-to-r from-electric to-cyan shadow-neon-cyan" />
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
