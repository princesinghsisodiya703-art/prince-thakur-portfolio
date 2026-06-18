"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  description,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "mb-16 md:mb-20",
        align === "center" && "text-center mx-auto max-w-2xl",
        className
      )}
    >
      <span className="mb-4 inline-block font-mono text-xs uppercase tracking-[0.3em] text-cyan/80">
        {label}
      </span>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {description && (
        <p className="mt-4 text-base text-white/50 md:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
