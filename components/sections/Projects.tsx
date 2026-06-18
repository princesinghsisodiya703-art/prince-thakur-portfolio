"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Layers, Lightbulb, Rocket, Sparkles, Target, UserCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

function DetailPanel({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof Layers;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="glass rounded-2xl p-6 md:p-7">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] text-cyan">
          <Icon size={18} />
        </div>
        <h4 className="text-sm font-semibold text-white">{title}</h4>
      </div>
      {children}
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-sm leading-relaxed text-white/60">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan/80" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Projects() {
  const featuredProject = projects[0];
  const techGroups = Object.entries(featuredProject.techStack);

  return (
    <section id="projects" className="relative section-padding">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <SectionHeading
          label="Portfolio"
          title="Featured Case Study"
          description="A real deployed project presented with context, role clarity, implementation details, and lessons learned."
        />

        <motion.article
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="glass gradient-border overflow-hidden rounded-2xl"
        >
          <div className={cn("relative overflow-hidden bg-gradient-to-br p-6 md:p-8", featuredProject.gradient)}>
            <motion.div
              aria-hidden
              className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-cyan/10 blur-[80px]"
              animate={{ opacity: [0.18, 0.36, 0.18], scale: [1, 1.08, 1] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative z-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <div className="mb-5 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-gradient-to-r from-electric to-neon px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white">
                    {featuredProject.priority}
                  </span>
                  <span className="rounded-full border border-cyan/20 bg-cyan/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-cyan">
                    {featuredProject.status}
                  </span>
                </div>

                <h3 className="max-w-2xl text-2xl font-semibold tracking-tight text-white md:text-4xl">
                  {featuredProject.title}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/65 md:text-base">
                  {featuredProject.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href={featuredProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="pointer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-electric to-neon px-5 py-2.5 text-sm font-medium text-white shadow-neon transition-shadow hover:shadow-neon-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </Link>
                  <Link
                    href={featuredProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="pointer"
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium text-white/80 transition-colors hover:text-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
                  >
                    <Github size={16} /> GitHub Repository
                  </Link>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-void/60 p-5 shadow-glass">
                <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-cyan/70">
                  Overview
                </p>
                <div className="mt-5 space-y-4">
                  <CaseCopy title="Problem" copy={featuredProject.overview.problem} />
                  <CaseCopy title="Solution" copy={featuredProject.overview.solution} />
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5 p-5 md:grid-cols-2 md:p-6">
            <DetailPanel icon={UserCheck} title="My Role">
              <BulletList items={featuredProject.role} />
            </DetailPanel>

            <DetailPanel icon={Layers} title="Tech Stack">
              <div className="grid gap-4 sm:grid-cols-2">
                {techGroups.map(([group, items]) => (
                  <div key={group}>
                    <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-white/35">
                      {group}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {items.map((item) => (
                        <span
                          key={item}
                          className="rounded-lg border border-white/[0.08] bg-white/[0.04] px-2.5 py-1.5 font-mono text-[11px] text-white/65"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </DetailPanel>

            <DetailPanel icon={Sparkles} title="Features & User Benefits">
              <BulletList items={featuredProject.features} />
            </DetailPanel>

            <DetailPanel icon={Lightbulb} title="Challenges & Solutions">
              <div className="space-y-4">
                {featuredProject.challenges.map((item) => (
                  <div key={item.challenge} className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
                    <p className="text-sm font-medium text-white">{item.challenge}</p>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">{item.solution}</p>
                  </div>
                ))}
              </div>
            </DetailPanel>

            <DetailPanel icon={Target} title="Results">
              <BulletList items={featuredProject.impact} />
            </DetailPanel>

            <DetailPanel icon={Rocket} title="Learnings">
              <BulletList items={featuredProject.learnings} />
            </DetailPanel>
          </div>

          {featuredProject.screenshots.length > 0 ? (
            <div className="border-t border-white/[0.08] p-5 md:p-6">
              <h4 className="mb-5 text-lg font-semibold text-white">Screenshots</h4>
              <div className="grid gap-5 md:grid-cols-2">
                {featuredProject.screenshots.map((screenshot) => (
                  <figure key={screenshot.src} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      width={screenshot.width}
                      height={screenshot.height}
                      className="h-auto w-full object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <figcaption className="px-4 py-3 text-sm text-white/55">
                      {screenshot.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          ) : null}
        </motion.article>
      </div>
    </section>
  );
}

function CaseCopy({ title, copy }: { title: string; copy: string }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-white">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-white/60">{copy}</p>
    </div>
  );
}
