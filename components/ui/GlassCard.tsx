"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover3d?: boolean;
}

export function GlassCard({
  children,
  className,
  delay = 0,
  hover3d = true,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={
        hover3d
          ? {
              y: -8,
              rotateX: 2,
              rotateY: -2,
              transition: { duration: 0.3 },
            }
          : undefined
      }
      className={cn(
        "glass gradient-border rounded-2xl p-6 md:p-8 perspective-1000 preserve-3d",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
