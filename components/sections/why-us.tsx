import {
  Hand,
  ShieldCheck,
  Microscope,
  ReceiptText,
  Stethoscope,
  Armchair,
  Check,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { PhotoFrame } from "@/components/art/photo-frame";
import { Ph } from "@/components/ui/ph";
import { ANCHORS } from "@/lib/site";
import { cn } from "@/lib/utils";

const STERILE_STEPS = [
  "Instruments cleaned, then sealed in sterilisation pouches",
  "Autoclaved at hospital-grade temperature and pressure",
  "Pouches opened in front of you, at the chair",
  "Needles, gloves and tips — single-use, every patient",
];

function CellIcon({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <span className="inline-flex size-10 items-center justify-center rounded-xl bg-gold-soft text-gold-strong">
      <Icon aria-hidden="true" className="size-[1.15rem]" strokeWidth={1.6} />
    </span>
  );
}

function Cell({
  className,
  padded = true,
  children,
}: {
  className?: string;
  padded?: boolean;
  children: React.ReactNode;
}) {
  return (
    <StaggerItem className={cn("h-full", className)}>
      <div
        className={cn(
          "group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-surface shadow-soft transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:shadow-lift",
          padded && "p-7 md:p-8"
        )}
      >
        {children}
      </div>
    </StaggerItem>
  );
}

export function WhyUs() {
  return (
    <section id={ANCHORS.why} className="bg-bg">
      <Container className="py-24 md:py-32">
        <SectionHeading
          eyebrow="Why patients choose us"
          title="Six things we refuse to"
          accent="compromise."
          lede="Not a list of features — a list of standards. Each one exists because its absence is exactly what people fear about dental clinics."
        />

        <Stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
          {/* 1 — Pain management (large) */}
          <Cell className="lg:col-span-2">
            <div className="flex items-start justify-between gap-4">
              <CellIcon icon={Hand} />
              <span className="eyebrow mt-2.5 hidden sm:block">Pain, managed properly</span>
            </div>
            <h3 className="mt-5 font-display text-[1.45rem] leading-snug font-bold tracking-[-0.02em] text-ink">
              Gentle isn't a luxury here. It's the protocol.
            </h3>
            <p className="mt-3 max-w-xl text-[0.95rem] leading-[1.75] text-ink-soft">
              We anaesthetise before we begin and verify it has worked before
              touching anything. Appointments are paced so no one is ever
              treated in a hurry — rushing is where rough dentistry comes from.
            </p>
            <p className="mt-auto pt-6 text-[0.95rem] font-medium text-ink">
              And one standing agreement with every patient:{" "}
              <span className="text-gold-strong">
                raise a hand, and everything stops.
              </span>
            </p>
          </Cell>

          {/* 2 — Sterilization (tall) */}
          <Cell className="lg:row-span-2">
            <CellIcon icon={ShieldCheck} />
            <h3 className="mt-5 font-display text-[1.45rem] leading-snug font-bold tracking-[-0.02em] text-ink">
              Sterile enough to show you.
            </h3>
            <p className="mt-3 text-[0.95rem] leading-[1.75] text-ink-soft">
              Hygiene is the quiet fear nobody voices at a clinic. So we make
              it visible instead:
            </p>
            <ul className="mt-6 space-y-4">
              {STERILE_STEPS.map((step, i) => (
                <li key={i} className="flex gap-3 text-[0.92rem] leading-[1.65] text-ink-soft">
                  <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-emerald-soft">
                    <Check aria-hidden="true" className="size-3 text-emerald" strokeWidth={2.2} />
                  </span>
                  <span>
                    <Ph text={step} />
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-auto pt-6 text-[0.88rem] text-ink-soft">
              Want to see the sterilisation area? Ask. We take it as a
              compliment.
            </p>
          </Cell>

          {/* 3 — Precision */}
          <Cell>
            <CellIcon icon={Microscope} />
            <h3 className="mt-5 font-display text-[1.2rem] leading-snug font-bold tracking-[-0.02em] text-ink">
              You see what we see.
            </h3>
            <p className="mt-3 text-[0.92rem] leading-[1.7] text-ink-soft">
              <Ph text="[Digital imaging]" /> and{" "}
              <Ph text="[intraoral cameras]" /> put your tooth on a screen,
              magnified. Decisions get made from evidence you've looked at
              yourself — not from a mirror you never saw into.
            </p>
          </Cell>

          {/* 4 — Transparent pricing */}
          <Cell>
            <CellIcon icon={ReceiptText} />
            <h3 className="mt-5 font-display text-[1.2rem] leading-snug font-bold tracking-[-0.02em] text-ink">
              The price is part of the plan.
            </h3>
            <p className="mt-3 text-[0.92rem] leading-[1.7] text-ink-soft">
              A written, itemised estimate before treatment begins — and
              nothing added without your approval. You should never learn the
              cost of dentistry from the receipt.
            </p>
          </Cell>

          {/* 5 — Experience */}
          <Cell>
            <CellIcon icon={Stethoscope} />
            <h3 className="mt-5 font-display text-[1.2rem] leading-snug font-bold tracking-[-0.02em] text-ink">
              Calm hands, thousands of cases.
            </h3>
            <p className="mt-3 text-[0.92rem] leading-[1.7] text-ink-soft">
              Led by Dr. Ehtesham with{" "}
              <Ph text="[12]+" /> years in practice — the steadiness you feel
              in the chair is pattern recognition earned over{" "}
              <Ph text="[15,000]+" /> patient visits.
            </p>
          </Cell>

          {/* 6 — Comfort (wide, with photo) */}
          <Cell className="lg:col-span-2" padded={false}>
            <div className="grid h-full sm:grid-cols-[1.3fr_1fr]">
              <div className="flex flex-col p-7 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <CellIcon icon={Armchair} />
                  <span className="eyebrow mt-2.5 hidden sm:block">Designed for calm</span>
                </div>
                <h3 className="mt-5 font-display text-[1.45rem] leading-snug font-bold tracking-[-0.02em] text-ink">
                  A clinic designed to lower your shoulders.
                </h3>
                <p className="mt-3 max-w-xl text-[0.95rem] leading-[1.75] text-ink-soft">
                  Soft light instead of glare. A waiting room that doesn't
                  smell like a warning. Appointments spaced so you're never
                  stacked behind a crowd. The absence of stress is something
                  we design for as deliberately as the dentistry itself.
                </p>
              </div>
              <figure className="relative hidden min-h-[14rem] sm:block">
                <PhotoFrame
                  src="/images/comfort-child.jpg"
                  alt="A relaxed child smiling in the dental chair"
                  caption="Representative photography"
                  sizes="(min-width: 1024px) 20vw, 40vw"
                />
              </figure>
            </div>
          </Cell>
        </Stagger>
      </Container>
    </section>
  );
}
