"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CalendarPlus, MessageCircle } from "lucide-react";
import { EASE } from "@/lib/motion";
import { ANCHORS, DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from "@/lib/site";

/**
 * Floating actions: WhatsApp + Book. Appears after the hero, retires while
 * the booking section is on screen (no point advertising the room you're in).
 */
export function FloatingCta() {
  const [pastHero, setPastHero] = useState(false);
  const [bookingVisible, setBookingVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const booking = document.getElementById(ANCHORS.book);
    if (!booking) return;
    const observer = new IntersectionObserver(
      ([entry]) => setBookingVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(booking);
    return () => observer.disconnect();
  }, []);

  const show = pastHero && !bookingVisible;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 16, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.96 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="fixed right-4 bottom-4 z-40 flex items-center gap-2.5 sm:right-6 sm:bottom-6"
        >
          <a
            href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message the clinic on WhatsApp"
            title="WhatsApp us — number is a placeholder until the clinic's real number is added"
            className="inline-flex size-12 items-center justify-center rounded-full bg-emerald text-white shadow-lift transition-transform duration-200 ease-out-expo hover:-translate-y-0.5"
          >
            <MessageCircle aria-hidden="true" className="size-[1.35rem]" strokeWidth={1.8} />
          </a>
          <a
            href={`#${ANCHORS.book}`}
            className="inline-flex h-12 items-center gap-2 rounded-full bg-ink px-5 text-[0.92rem] font-medium text-bg shadow-lift transition-transform duration-200 ease-out-expo hover:-translate-y-0.5 dark:bg-on-navy dark:text-navy"
          >
            <CalendarPlus aria-hidden="true" className="size-[1.05rem]" strokeWidth={1.8} />
            Book a visit
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
