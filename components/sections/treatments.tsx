"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, Plus, UserRound } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button, ButtonArrow } from "@/components/ui/button";
import { Ph } from "@/components/ui/ph";
import { EASE } from "@/lib/motion";
import { ANCHORS } from "@/lib/site";
import {
  TREATMENTS,
  TREATMENT_CATEGORIES,
  type Treatment,
  type TreatmentCategory,
} from "@/lib/data/treatments";
import { cn } from "@/lib/utils";

const CATEGORY_LABEL: Record<TreatmentCategory, string> = {
  restore: "Restore",
  enhance: "Enhance",
  align: "Align",
  everyday: "Everyday & urgent",
};

/** Tell the booking form which treatment the visitor is interested in. */
export function prefillBookingTreatment(slug: string) {
  window.dispatchEvent(
    new CustomEvent("aod:prefill-treatment", { detail: slug })
  );
}

export function Treatments() {
  const [category, setCategory] = useState<TreatmentCategory | "all">("all");
  const [expanded, setExpanded] = useState<string | null>(null);
  const reduce = useReducedMotion();

  const visible = useMemo(
    () =>
      category === "all"
        ? TREATMENTS
        : TREATMENTS.filter((t) => t.category === category),
    [category]
  );

  function selectCategory(next: TreatmentCategory | "all") {
    setCategory(next);
    setExpanded(null);
  }

  return (
    <section id={ANCHORS.treatments} className="bg-bg-soft">
      <Container className="py-24 md:py-32">
        <SectionHeading
          eyebrow="Treatments"
          title="Everything your mouth might need, under"
          accent="one roof."
          lede="Fourteen treatments, four disciplines, one standard of care. Open any treatment to see what it involves, who it's for, and why we do it the way we do."
        />

        {/* Category filter */}
        <div
          role="tablist"
          aria-label="Filter treatments by category"
          className="scrollbar-hairline mt-12 flex gap-2 overflow-x-auto pb-1"
        >
          {TREATMENT_CATEGORIES.map((cat) => {
            const active = category === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={active}
                onClick={() => selectCategory(cat.id)}
                className={cn(
                  "relative shrink-0 rounded-full px-4.5 py-2 text-[0.87rem] font-medium whitespace-nowrap transition-colors duration-200",
                  active
                    ? "text-bg"
                    : "border border-line bg-surface text-ink-soft hover:text-ink"
                )}
              >
                {active && (
                  <motion.span
                    layoutId="treatment-tab"
                    transition={
                      reduce ? { duration: 0 } : { duration: 0.45, ease: EASE }
                    }
                    className="absolute inset-0 rounded-full bg-ink"
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Cards */}
        <motion.div layout className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((treatment) => (
              <TreatmentCard
                key={treatment.slug}
                treatment={treatment}
                expanded={expanded === treatment.slug}
                onToggle={() =>
                  setExpanded((current) =>
                    current === treatment.slug ? null : treatment.slug
                  )
                }
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}

function TreatmentCard({
  treatment,
  expanded,
  onToggle,
}: {
  treatment: Treatment;
  expanded: boolean;
  onToggle: () => void;
}) {
  const reduce = useReducedMotion();
  const contentId = `treatment-${treatment.slug}`;

  return (
    <motion.article
      layout={reduce ? false : true}
      initial={reduce ? false : { opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={reduce ? undefined : { opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.45, ease: EASE }}
      className={cn(
        "overflow-hidden rounded-3xl border border-line bg-surface shadow-soft transition-shadow duration-300",
        expanded
          ? "shadow-lift md:col-span-2 lg:col-span-3"
          : "hover:shadow-lift"
      )}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        aria-controls={contentId}
        className="group flex w-full items-start justify-between gap-4 p-6 text-left md:p-7"
      >
        <span>
          <span className="eyebrow block text-[0.62rem]">
            {CATEGORY_LABEL[treatment.category]}
          </span>
          <span className="mt-2.5 block font-display text-[1.18rem] leading-snug font-bold tracking-[-0.015em] text-ink">
            {treatment.name}
          </span>
          <span className="mt-1.5 block text-[0.9rem] leading-[1.6] text-ink-soft">
            {treatment.tagline}
          </span>
        </span>
        <span
          className={cn(
            "mt-1 inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-line text-ink-soft transition-all duration-300 ease-out-expo group-hover:border-gold group-hover:text-gold-strong",
            expanded && "rotate-45 border-gold text-gold-strong"
          )}
        >
          <Plus aria-hidden="true" className="size-4" strokeWidth={1.8} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            id={contentId}
            initial={reduce ? { opacity: 1 } : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <div className="grid gap-8 border-t border-line-soft px-6 py-7 md:grid-cols-[1.2fr_1fr] md:px-7 md:py-8">
              <div>
                <p className="max-w-xl text-[0.98rem] leading-[1.75] text-ink-soft">
                  <Ph text={treatment.description} />
                </p>
                <ul className="mt-6 space-y-3">
                  {treatment.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-[0.92rem] leading-[1.6] text-ink-soft"
                    >
                      <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-soft">
                        <Check
                          aria-hidden="true"
                          className="size-3 text-emerald"
                          strokeWidth={2.2}
                        />
                      </span>
                      <span>
                        <Ph text={benefit} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col rounded-2xl bg-bg-soft p-6">
                <p className="flex items-center gap-2 text-[0.78rem] font-semibold tracking-[0.14em] text-gold-strong uppercase">
                  <UserRound aria-hidden="true" className="size-3.5" strokeWidth={1.8} />
                  Who this is for
                </p>
                <p className="mt-3 text-[0.92rem] leading-[1.7] text-ink-soft">
                  <Ph text={treatment.idealFor} />
                </p>
                <div className="mt-auto pt-6">
                  <Button
                    href={`#${ANCHORS.book}`}
                    onClick={() => prefillBookingTreatment(treatment.slug)}
                    className="w-full"
                  >
                    Book this treatment
                    <ButtonArrow />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}
