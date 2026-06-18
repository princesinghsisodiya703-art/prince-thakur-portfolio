"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function Spotlight() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 80, damping: 30 });
  const springY = useSpring(y, { stiffness: 80, damping: 30 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y]);

  return (
    <motion.div className="pointer-events-none fixed inset-0 z-[1]">
      <motion.div
        className="absolute h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[100px]"
        style={{
          left: springX,
          top: springY,
          background:
            "radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(139,92,246,0.2) 40%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}
