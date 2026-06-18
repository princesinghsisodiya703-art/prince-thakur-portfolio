"use client";

import { motion } from "framer-motion";

export function RobotVisual({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden>
      <motion.svg
        viewBox="0 0 200 240"
        fill="none"
        className="h-full w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <defs>
          <linearGradient id="robotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.8" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.rect
          x="60" y="20" width="80" height="70" rx="12"
          stroke="url(#robotGrad)" strokeWidth="1.5" fill="rgba(59,130,246,0.08)"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.circle cx="85" cy="50" r="6" fill="#22d3ee" filter="url(#glow)"
          animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.circle cx="115" cy="50" r="6" fill="#22d3ee" filter="url(#glow)"
          animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }}
        />
        <rect x="75" y="65" width="50" height="4" rx="2" fill="url(#robotGrad)" opacity="0.5" />

        <motion.rect
          x="50" y="95" width="100" height="90" rx="8"
          stroke="url(#robotGrad)" strokeWidth="1.5" fill="rgba(139,92,246,0.06)"
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{ transformOrigin: "100px 140px" }}
        />

        {[0, 1, 2].map((i) => (
          <motion.rect
            key={i}
            x={65 + i * 28} y="110" width="20" height="30" rx="3"
            stroke="url(#robotGrad)" strokeWidth="1" fill="rgba(34,211,238,0.05)"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
          />
        ))}

        <motion.line x1="30" y1="120" x2="50" y2="130" stroke="url(#robotGrad)" strokeWidth="1.5"
          animate={{ x1: [30, 25, 30] }} transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.line x1="170" y1="120" x2="150" y2="130" stroke="url(#robotGrad)" strokeWidth="1.5"
          animate={{ x1: [170, 175, 170] }} transition={{ duration: 3, repeat: Infinity }}
        />

        <motion.rect x="70" y="190" width="25" height="40" rx="6" stroke="url(#robotGrad)" strokeWidth="1.5" fill="rgba(59,130,246,0.05)"
          animate={{ y: [190, 188, 190] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }}
        />
        <motion.rect x="105" y="190" width="25" height="40" rx="6" stroke="url(#robotGrad)" strokeWidth="1.5" fill="rgba(59,130,246,0.05)"
          animate={{ y: [190, 188, 190] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />

        <motion.circle cx="100" cy="130" r="20" stroke="url(#robotGrad)" strokeWidth="1" fill="none" strokeDasharray="4 4"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "100px 130px" }}
        />
      </motion.svg>

      <motion.div
        className="absolute inset-0 rounded-full bg-cyan/5 blur-2xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
    </div>
  );
}
