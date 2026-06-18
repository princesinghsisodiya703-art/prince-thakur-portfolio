"use client";

import { motion } from "framer-motion";
import { ArrowDown, CheckCircle2, Download, FileText, Github, Linkedin, Sparkles } from "lucide-react";
import Image from "next/image";
import { heroRoles, heroStats, siteConfig, socialLinks } from "@/lib/data";
import { GridBackground } from "@/components/effects/GridBackground";
import { Particles } from "@/components/effects/Particles";
import { TypingEffect } from "@/components/ui/TypingEffect";

export function Hero() {
  const githubLink = socialLinks.find((link) => link.label === "GitHub");
  const linkedinLink = socialLinks.find((link) => link.label === "LinkedIn");
  const ctaBase =
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all duration-300";
  const primaryCta =
    "bg-gradient-to-r from-electric to-neon text-white shadow-neon hover:shadow-neon-cyan";
  const secondaryCta =
    "glass text-white border-white/10 hover:border-cyan/30 hover:bg-white/[0.08]";
  const iconCta = "glass text-white/70 hover:text-cyan hover:border-cyan/30";

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <GridBackground />
      <Particles count={50} />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-electric/15 blur-[120px]"
        animate={{ x: [0, 60, 0], y: [0, -40, 0], opacity: [0.25, 0.45, 0.25] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-40 bottom-0 h-[620px] w-[620px] rounded-full bg-neon/15 blur-[130px]"
        animate={{ x: [0, -70, 0], y: [0, 50, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />

      <div className="section-padding relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2"
            >
              <Sparkles size={14} className="text-cyan" />
              <span className="font-mono text-xs tracking-wider text-white/60">
                AI STUDENT - FULL STACK - PRODUCT BUILDER
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="mb-2 font-mono text-sm text-white/40"
            >
              Hello, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mb-4 text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl"
            >
              {siteConfig.name.split(" ")[0]}
              <br />
              <span className="text-gradient">
                {siteConfig.name.split(" ").slice(1).join(" ")}
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1 }}
              className="mb-7 text-xl text-white/60 md:text-2xl"
            >
              <TypingEffect words={heroRoles} />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.2 }}
              className="mb-5 max-w-xl text-base leading-relaxed text-white/65"
            >
              I&apos;m an Artificial Intelligence undergraduate from Indore, building practical AI
              products, modern full stack applications, and digital experiences designed for
              real-world impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.22 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.75)]" />
              <CheckCircle2 size={15} aria-hidden="true" />
              Available for Freelance Projects & Collaborations
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.25 }}
              className="mb-8 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4"
            >
              {heroStats.map((stat, i) => (
                <motion.div
                  key={`${stat.value}-${stat.label}`}
                  initial={{ opacity: 0, y: 16, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.35 + i * 0.08 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass rounded-2xl px-4 py-3"
                >
                  <span className="block font-mono text-lg font-semibold text-white">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-[11px] leading-snug text-white/40">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.3 }}
              className="flex flex-wrap items-center gap-3"
            >
              <a
                href={siteConfig.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="pointer"
                className={`${ctaBase} ${primaryCta}`}
              >
                <FileText size={16} /> View Resume
              </a>
              <a
                href={siteConfig.resumePath}
                download={siteConfig.resumeFileName}
                data-cursor="pointer"
                className={`${ctaBase} ${secondaryCta}`}
              >
                <Download size={16} /> Download Resume
              </a>
              {githubLink ? (
                <a
                  href={githubLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="pointer"
                  className={`${ctaBase} ${iconCta}`}
                >
                  <Github size={16} /> GitHub
                </a>
              ) : null}
              {linkedinLink ? (
                <a
                  href={linkedinLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="pointer"
                  className={`${ctaBase} ${iconCta}`}
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
              ) : null}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 flex justify-center lg:order-2"
          >
            <motion.div
              className="group relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
            >
              <motion.div
                aria-hidden
                animate={{ opacity: [0.35, 0.55, 0.35], scale: [1, 1.05, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-8 rounded-full bg-gradient-to-r from-electric/25 via-neon/20 to-cyan/25 blur-3xl"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-5 rounded-full bg-gradient-to-r from-electric via-neon to-cyan opacity-40 blur-2xl"
              />

              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative h-72 w-72 sm:h-80 sm:w-80 md:h-[26rem] md:w-[26rem]"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-[3px] rounded-full bg-gradient-to-r from-electric via-neon to-cyan opacity-80"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-electric/50 via-neon/30 to-cyan/45 p-[2px] shadow-[0_25px_80px_rgba(0,0,0,0.55),0_0_40px_rgba(59,130,246,0.25)]">
                  <div className="relative h-full w-full overflow-hidden rounded-full bg-void ring-1 ring-white/10">
                    <Image
                      src={siteConfig.profileImage}
                      alt={`${siteConfig.name} - ${siteConfig.title}`}
                      fill
                      className="object-cover object-[62%_28%] scale-[1.08] transition-transform duration-700 ease-out group-hover:scale-110"
                      priority
                      sizes="(max-width: 768px) 288px, 416px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-void/30 via-transparent to-void/30" />
                    <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/5" />
                  </div>
                </div>

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-7 rounded-full border border-dashed border-cyan/20"
                />

                {["AI", "ML", "Nexora", "Build"].map((tag, i) => {
                  const angle = (i / 4) * Math.PI * 2;
                  const radius = 168;

                  return (
                    <motion.span
                      key={tag}
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 3.2, repeat: Infinity, delay: i * 0.45 }}
                      className="absolute hidden rounded-full px-3 py-1 font-mono text-xs text-cyan/80 shadow-neon-cyan glass sm:inline-flex"
                      style={{
                        left: `calc(50% + ${Math.cos(angle) * radius}px - 24px)`,
                        top: `calc(50% + ${Math.sin(angle) * radius}px - 14px)`,
                      }}
                    >
                      {tag}
                    </motion.span>
                  );
                })}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/20">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={16} className="text-white/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
