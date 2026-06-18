"use client";

import { motion } from "framer-motion";

export function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-electric/20 blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -right-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-neon/20 blur-[100px]"
      />
      <motion.div
        animate={{
          x: [0, 50, 0],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-cyan/15 blur-[90px]"
      />
    </div>
  );
}
