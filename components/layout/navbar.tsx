"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Wordmark } from "@/components/art/monogram";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import { EASE } from "@/lib/motion";
import { ANCHORS, NAV_LINKS } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "transition-all duration-300 ease-out-expo",
          scrolled ? "glass" : "border-b border-transparent bg-transparent"
        )}
      >
        <nav
          aria-label="Main"
          className="mx-auto flex h-[4.4rem] w-full max-w-[76rem] items-center justify-between px-5 sm:px-8"
        >
          <a
            href={`#${ANCHORS.top}`}
            aria-label="Art of Dentistry — back to top"
            className="rounded-lg"
          >
            <Wordmark />
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3.5 py-2 text-[0.88rem] font-medium text-ink-soft transition-colors duration-200 hover:bg-line-soft hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2.5">
            <ThemeToggle className="hidden sm:inline-flex" />
            <Button
              href={`#${ANCHORS.book}`}
              size="md"
              className="hidden sm:inline-flex"
            >
              Book a visit
            </Button>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="inline-flex size-10 items-center justify-center rounded-full border border-line text-ink lg:hidden"
            >
              <Menu aria-hidden="true" className="size-5" strokeWidth={1.6} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex flex-col bg-bg lg:hidden"
          >
            <div className="mx-auto flex h-[4.4rem] w-full max-w-[76rem] items-center justify-between px-5 sm:px-8">
              <Wordmark />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex size-10 items-center justify-center rounded-full border border-line text-ink"
              >
                <X aria-hidden="true" className="size-5" strokeWidth={1.6} />
              </button>
            </div>

            <motion.nav
              aria-label="Mobile"
              className="flex flex-1 flex-col justify-center gap-1 px-8"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05, delayChildren: 0.08 } },
              }}
            >
              {NAV_LINKS.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  variants={{
                    hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 14 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: EASE },
                    },
                  }}
                  className="border-b border-line-soft py-4 font-display text-[1.7rem] font-semibold tracking-[-0.02em] text-ink"
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.nav>

            <div className="flex items-center gap-3 px-8 pb-10">
              <Button
                href={`#${ANCHORS.book}`}
                size="lg"
                className="flex-1"
                onClick={() => setOpen(false)}
              >
                Book a visit
              </Button>
              <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
