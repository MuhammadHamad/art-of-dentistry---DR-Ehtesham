"use client";

import { useEffect, useRef } from "react";
import {
  useInView,
  useMotionValue,
  useReducedMotion,
  animate,
} from "framer-motion";
import { EASE } from "@/lib/motion";

/**
 * Animated counter. Server-renders the final value (SEO/no-JS safe),
 * then counts up from zero when scrolled into view.
 * `decimals` supports figures like 4.9.
 */
export function CountUp({
  value,
  decimals = 0,
  duration = 1.6,
}: {
  value: number;
  decimals?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const motionValue = useMotionValue(0);

  useEffect(() => {
    if (!inView || reduce) return;
    const node = ref.current;
    if (!node) return;

    const controls = animate(motionValue, value, {
      duration,
      ease: EASE,
      onUpdate: (latest) => {
        node.textContent = latest.toLocaleString("en-US", {
          minimumFractionDigits: decimals,
          maximumFractionDigits: decimals,
        });
      },
    });
    return () => controls.stop();
  }, [inView, reduce, value, decimals, duration, motionValue]);

  return (
    <span ref={ref} className="tabular-nums">
      {value.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
    </span>
  );
}
