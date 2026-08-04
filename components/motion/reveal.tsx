"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE, DURATION } from "@/lib/motion";

/**
 * The site-wide entrance: rise + fade + slight blur, once, on view.
 * Falls back to static rendering under prefers-reduced-motion.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 18,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "span" | "li" | "figure" | "header";
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as];

  if (reduce) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: DURATION.base, ease: EASE, delay }}
    >
      {children}
    </Tag>
  );
}

/**
 * Parent that staggers its <StaggerItem> children as they enter the viewport.
 */
export function Stagger({
  children,
  className,
  stagger = 0.08,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 16,
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y, filter: "blur(4px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: DURATION.base, ease: EASE },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
