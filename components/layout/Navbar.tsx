"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <nav
          className={cn(
            "mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 transition-all duration-500 rounded-2xl",
            scrolled
              ? "glass-strong py-3 shadow-glass"
              : "py-2"
          )}
          aria-label="Main navigation"
        >
          <Link href="#home" className="group flex items-center gap-2" data-cursor="pointer">
            <div className="relative h-8 w-8 rounded-lg bg-gradient-to-br from-electric to-neon p-[1px]">
              <div className="relative h-full w-full overflow-hidden rounded-lg bg-void">
                <Image
                  src={siteConfig.profileImage}
                  alt={siteConfig.name}
                  fill
                  sizes="32px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <span className="hidden text-sm font-medium text-white/80 group-hover:text-white sm:block">
              {siteConfig.name.split(" ")[0]}
            </span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  data-cursor="pointer"
                  className={cn(
                    "relative px-3 py-2 text-sm transition-colors duration-300 lg:px-4",
                    activeSection === link.href
                      ? "text-white"
                      : "text-white/50 hover:text-white/80"
                  )}
                >
                  {link.label}
                  {activeSection === link.href && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-full bg-white/[0.06] border border-white/10"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          <a
            href={siteConfig.resumePath}
            download={siteConfig.resumeFileName}
            data-cursor="pointer"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-electric/80 to-neon/80 px-4 py-2 text-sm font-medium text-white shadow-neon hover:shadow-neon-cyan transition-shadow duration-300 lg:px-5"
          >
            Download Resume
          </a>

          <button
            className="md:hidden p-2 text-white/70 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            data-cursor="pointer"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-20 z-40 glass-strong rounded-2xl p-6 md:hidden"
          >
            <ul className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-xl px-4 py-3 text-white/70 hover:bg-white/5 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
