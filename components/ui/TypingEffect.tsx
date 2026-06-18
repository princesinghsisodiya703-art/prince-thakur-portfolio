"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface TypingEffectProps {
  words: string[];
  className?: string;
}

export function TypingEffect({ words, className = "" }: TypingEffectProps) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (displayed.length < word.length) {
            setDisplayed(word.slice(0, displayed.length + 1));
          } else {
            setTimeout(() => setDeleting(true), 2000);
          }
        } else {
          if (displayed.length > 0) {
            setDisplayed(displayed.slice(0, -1));
          } else {
            setDeleting(false);
            setIndex((i) => (i + 1) % words.length);
          }
        }
      },
      deleting ? 50 : 80
    );
    return () => clearTimeout(timeout);
  }, [displayed, deleting, index, words]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={displayed}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-gradient font-semibold"
        >
          {displayed}
        </motion.span>
      </AnimatePresence>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity }}
        className="ml-1 inline-block h-[1em] w-[2px] bg-cyan"
      />
    </span>
  );
}
