/**
 * One easing curve for the entire site (DESIGN.md §7): fast start, long settle.
 * Using a single curve everywhere is what makes motion feel like a system.
 */
export const EASE = [0.22, 1, 0.36, 1] as const;

export const DURATION = {
  fast: 0.35,
  base: 0.7,
  slow: 1.0,
} as const;

/** Standard reveal: rise + fade + slight blur. */
export const revealVariants = {
  hidden: { opacity: 0, y: 18, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: DURATION.base, ease: EASE },
  },
};

export const staggerContainer = (stagger = 0.08, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});
