"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { ChevronsLeftRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Ph } from "@/components/ui/ph";
import { ANCHORS } from "@/lib/site";
import { cn } from "@/lib/utils";

const GALLERY_PHOTO = {
  src: "/images/gallery-smile-reveal.jpg",
  alt: "A patient smiling while looking at her teeth in a hand mirror",
};

const CASES = [
  {
    id: "01",
    treatment: "[Teeth whitening]",
    detail: "[Single visit]",
    note: "Years of tea, lifted — enamel intact.",
  },
  {
    id: "02",
    treatment: "[Porcelain veneers]",
    detail: "[Three visits]",
    note: "Chips and gaps resolved; nobody can point at why it looks better.",
  },
  {
    id: "03",
    treatment: "[Smile makeover]",
    detail: "[Staged plan]",
    note: "Alignment, shape and shade — designed once, executed in sequence.",
  },
];

export function Gallery() {
  const [activeCase, setActiveCase] = useState(0);

  return (
    <section id={ANCHORS.gallery} className="bg-bg-soft">
      <Container className="py-24 md:py-32">
        <SectionHeading
          eyebrow="Smile gallery"
          title="Evidence, not"
          accent="adjectives."
          lede="Drag the divider — it's a simulated brightening effect on one photo, standing in for the idea until real before-and-after cases join here, added only with each patient's written consent."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
          <Reveal>
            <CompareSlider key={activeCase} />
          </Reveal>

          {/* Case list */}
          <div className="flex flex-col justify-center gap-3">
            {CASES.map((caseItem, i) => {
              const active = i === activeCase;
              return (
                <button
                  key={caseItem.id}
                  type="button"
                  onClick={() => setActiveCase(i)}
                  aria-pressed={active}
                  className={cn(
                    "rounded-2xl border p-5 text-left transition-all duration-300 ease-out-expo",
                    active
                      ? "border-gold/60 bg-surface shadow-soft"
                      : "border-line bg-transparent hover:border-line hover:bg-surface/60"
                  )}
                >
                  <p className="flex items-baseline gap-3">
                    <span className="font-display text-[0.78rem] font-bold tracking-[0.1em] text-gold-strong tabular-nums">
                      Case {caseItem.id}
                    </span>
                    <span className="font-display text-[1.02rem] font-bold tracking-[-0.01em] text-ink">
                      <Ph text={caseItem.treatment} />
                    </span>
                  </p>
                  <p className="mt-1.5 text-[0.85rem] leading-[1.6] text-ink-soft">
                    {caseItem.note} · <Ph text={caseItem.detail} />
                  </p>
                </button>
              );
            })}
            <p className="mt-3 px-1 text-[0.78rem] leading-[1.6] text-ink-faint">
              Case photography is shared only with written patient consent, and
              individual results vary.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function CompareSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const percent = useMotionValue(56);
  const clipRight = useTransform(percent, (v) => `${100 - v}%`);
  const clipPath = useMotionTemplate`inset(0 ${clipRight} 0 0)`;
  const handleLeft = useMotionTemplate`${percent}%`;
  const [dragging, setDragging] = useState(false);

  function updateFromPointer(clientX: number) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    percent.set(Math.min(96, Math.max(4, next)));
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowLeft" || e.key === "ArrowRight") {
      e.preventDefault();
      const delta = e.key === "ArrowLeft" ? -5 : 5;
      percent.set(Math.min(96, Math.max(4, percent.get() + delta)));
    }
  }

  return (
    <div
      ref={containerRef}
      onPointerDown={(e) => {
        updateFromPointer(e.clientX);
        setDragging(true);
        try {
          e.currentTarget.setPointerCapture(e.pointerId);
        } catch {
          /* synthetic events may carry an inactive pointerId */
        }
      }}
      onPointerMove={(e) => {
        if (dragging || e.buttons === 1) updateFromPointer(e.clientX);
      }}
      onPointerUp={() => setDragging(false)}
      onPointerCancel={() => setDragging(false)}
      className={cn(
        "relative aspect-[10/7] touch-none overflow-hidden rounded-3xl shadow-lift ring-1 ring-line select-none sm:aspect-[3/2]",
        dragging ? "cursor-grabbing" : "cursor-grab"
      )}
    >
      {/* after (base layer) — the photo, unaltered */}
      <Image
        src={GALLERY_PHOTO.src}
        alt={GALLERY_PHOTO.alt}
        fill
        sizes="(min-width: 1024px) 55vw, 90vw"
        className="object-cover"
      />
      <span className="absolute right-3 bottom-3 rounded-full bg-white/80 px-3 py-1 text-[0.7rem] font-semibold tracking-[0.08em] text-[#54606E] uppercase backdrop-blur-md">
        After
      </span>

      {/* before (clipped layer) — same photo, filtered to simulate a duller smile */}
      <motion.div style={{ clipPath }} className="absolute inset-0">
        <Image
          src={GALLERY_PHOTO.src}
          alt=""
          aria-hidden="true"
          fill
          sizes="(min-width: 1024px) 55vw, 90vw"
          className="object-cover [filter:saturate(0.55)_sepia(0.35)_brightness(0.86)_contrast(0.94)]"
        />
        <span className="absolute bottom-3 left-3 rounded-full bg-white/80 px-3 py-1 text-[0.7rem] font-semibold tracking-[0.08em] text-[#54606E] uppercase backdrop-blur-md">
          Before
        </span>
      </motion.div>

      {/* illustrative tag */}
      <span
        title="A color filter applied to the same photograph — illustrative, not an actual patient's before-and-after"
        className="absolute top-3 left-3 z-10 cursor-help rounded-full border border-black/8 bg-white/78 px-2.5 py-1 text-[0.67rem] font-medium text-[#54606E] backdrop-blur-md"
      >
        Simulated effect, one photo
      </span>

      {/* divider + handle */}
      <motion.div
        style={{ left: handleLeft }}
        className="absolute inset-y-0 z-10 w-px -translate-x-1/2 bg-white/90 shadow-[0_0_12px_rgba(12,24,38,0.25)]"
      >
        <button
          type="button"
          role="slider"
          aria-label="Compare before and after"
          aria-valuemin={4}
          aria-valuemax={96}
          aria-valuenow={Math.round(percent.get())}
          onKeyDown={onKeyDown}
          className="absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-black/8 bg-white text-[#101E30] shadow-lift"
        >
          <ChevronsLeftRight aria-hidden="true" className="size-5" strokeWidth={1.7} />
        </button>
      </motion.div>
    </div>
  );
}
