"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

/** Hairline gold reading-progress bar along the very top edge. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 32,
    restDelta: 0.001,
  });
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-gold"
    />
  );
}
