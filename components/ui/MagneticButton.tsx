"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode, useRef } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  download?: string | boolean;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export function MagneticButton({
  children,
  href,
  download,
  onClick,
  variant = "primary",
  className,
  type = "button",
  disabled = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.2);
    y.set((e.clientY - centerY) * 0.2);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const variants = {
    primary:
      "bg-gradient-to-r from-electric to-neon text-white shadow-neon hover:shadow-neon-cyan",
    secondary:
      "glass text-white border-white/10 hover:border-cyan/30 hover:bg-white/[0.08]",
    ghost: "text-white/70 hover:text-white hover:bg-white/5",
  };

  const content = (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.97 }}
      data-cursor="pointer"
      className={cn(
        "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300",
        disabled && "pointer-events-none opacity-60",
        variants[variant],
        className
      )}
    >
      {children}
    </motion.div>
  );

  if (href) {
    const isFileDownload = href.endsWith(".pdf") || download;

    if (isFileDownload) {
      return (
        <a
          href={href}
          download={typeof download === "string" ? download : true}
          className="inline-block"
          data-cursor="pointer"
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="inline-block border-0 bg-transparent p-0 disabled:cursor-not-allowed"
    >
      {content}
    </button>
  );
}
