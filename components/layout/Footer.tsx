"use client";

import { motion } from "framer-motion";
import { ArrowUp, Heart } from "lucide-react";
import Link from "next/link";
import { navLinks, siteConfig, socialLinks } from "@/lib/data";

const currentYear = 2026;

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/[0.06] bg-surface/50">
      <div className="absolute inset-0 bg-gradient-to-t from-electric/5 to-transparent pointer-events-none" />

      <div className="section-padding relative max-w-6xl mx-auto">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-electric to-neon p-[1px]">
                <div className="flex h-full w-full items-center justify-center rounded-lg bg-void">
                  <span className="font-mono text-xs font-bold text-cyan">PT</span>
                </div>
              </div>
              <span className="font-semibold text-white">{siteConfig.name}</span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs uppercase tracking-widest text-white/30">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-cyan transition-colors"
                    data-cursor="pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-mono text-xs uppercase tracking-widest text-white/30">
              Connect
            </h4>
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  data-cursor="pointer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="flex h-10 w-10 items-center justify-center rounded-xl glass text-white/50 hover:text-cyan hover:border-cyan/30 transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.06] pt-8">
          <p className="flex items-center gap-1 text-xs text-white/30">
            Built with <Heart size={12} className="text-neon" /> by {siteConfig.name} (c) {currentYear}
          </p>
          <motion.button
            onClick={scrollTop}
            data-cursor="pointer"
            whileHover={{ y: -4 }}
            className="flex items-center gap-2 rounded-full glass px-4 py-2 text-xs text-white/50 hover:text-cyan transition-colors"
            aria-label="Scroll to top"
          >
            Back to top <ArrowUp size={14} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
