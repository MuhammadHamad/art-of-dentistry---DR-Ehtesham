"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MessageCircle, Plus } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Ph } from "@/components/ui/ph";
import { EASE } from "@/lib/motion";
import { ANCHORS, DEFAULT_WHATSAPP_MESSAGE, whatsappLink } from "@/lib/site";
import { FAQS } from "@/lib/data/faqs";
import { cn } from "@/lib/utils";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const reduce = useReducedMotion();

  return (
    <section id={ANCHORS.faq} className="bg-bg-soft">
      <Container className="py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Questions, answered honestly"
              title="The things people actually"
              accent="want to ask."
              lede="Straight answers — including the ones about pain, money and hygiene that clinic websites usually dance around."
            />
            <div className="mt-8 rounded-3xl border border-line bg-surface p-6 shadow-soft">
              <p className="font-display text-[1.02rem] font-bold text-ink">
                Question we haven't covered?
              </p>
              <p className="mt-2 text-[0.9rem] leading-[1.7] text-ink-soft">
                Message us on WhatsApp — a human answers, usually quickly.
              </p>
              <a
                href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex h-11 items-center gap-2 rounded-full bg-emerald px-5 text-[0.9rem] font-medium text-white shadow-soft transition-all duration-200 ease-out-expo hover:-translate-y-px hover:shadow-lift"
              >
                <MessageCircle aria-hidden="true" className="size-[1.05rem]" strokeWidth={1.8} />
                Ask on WhatsApp
              </a>
            </div>
          </div>

          <div className="divide-y divide-line border-y border-line">
            {FAQS.map((faq, i) => {
              const isOpen = open === i;
              const contentId = `faq-answer-${i}`;
              return (
                <div key={i}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    className="group flex w-full items-start justify-between gap-5 py-6 text-left"
                  >
                    <span
                      className={cn(
                        "font-display text-[1.05rem] leading-snug font-bold tracking-[-0.01em] transition-colors duration-200 md:text-[1.12rem]",
                        isOpen ? "text-ink" : "text-ink-soft group-hover:text-ink"
                      )}
                    >
                      {faq.question}
                    </span>
                    <span
                      className={cn(
                        "mt-0.5 inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-line text-ink-soft transition-all duration-300 ease-out-expo group-hover:border-gold group-hover:text-gold-strong",
                        isOpen && "rotate-45 border-gold text-gold-strong"
                      )}
                    >
                      <Plus aria-hidden="true" className="size-3.5" strokeWidth={1.8} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={contentId}
                        initial={reduce ? { opacity: 1 } : { opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-7 text-[0.95rem] leading-[1.8] text-ink-soft">
                          <Ph text={faq.answer} />
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
