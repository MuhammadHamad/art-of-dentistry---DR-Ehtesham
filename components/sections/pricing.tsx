import { Banknote, CreditCard, FileText, Landmark } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Ph } from "@/components/ui/ph";
import { ANCHORS } from "@/lib/site";

const ESTIMATE_STEPS = [
  {
    title: "Examination first",
    body: "No pricing theatre — we look properly before we quote anything. Consultation fees are stated when you book.",
  },
  {
    title: "A written, itemised estimate",
    body: "Every procedure, every material, every rupee — on paper, before treatment begins. Take it home if you want to think.",
  },
  {
    title: "You approve. Then we begin.",
    body: "The final bill matches the estimate. If anything unexpected appears mid-treatment, work pauses until you've said yes.",
  },
];

export function Pricing() {
  return (
    <section id={ANCHORS.pricing} className="bg-bg">
      <Container className="py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Pricing & insurance"
              title="Clear about"
              accent="money."
              lede="Dentistry has a pricing problem — treatment that starts before a cost is ever mentioned. We solve it the boring way: in writing, in advance, every time."
            />

            <Stagger className="mt-10 space-y-0" stagger={0.08}>
              {ESTIMATE_STEPS.map((step, i) => (
                <StaggerItem key={step.title}>
                  <div className="flex gap-5 border-t border-line py-6 last:border-b">
                    <span className="font-display text-[0.85rem] font-bold text-gold-strong tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-[1.05rem] font-bold tracking-[-0.01em] text-ink">
                        {step.title}
                      </h3>
                      <p className="mt-1.5 max-w-lg text-[0.92rem] leading-[1.7] text-ink-soft">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <div className="flex flex-col justify-center gap-5">
            <Reveal>
              <div className="rounded-3xl border border-line bg-surface p-8 shadow-soft">
                <p className="eyebrow">How you can pay</p>
                <ul className="mt-6 grid gap-4 sm:grid-cols-3">
                  {[
                    { icon: Banknote, label: "Cash" },
                    { icon: CreditCard, label: "[Card]" },
                    { icon: Landmark, label: "[Bank transfer]" },
                  ].map(({ icon: Icon, label }) => (
                    <li
                      key={label}
                      className="flex flex-col items-start gap-3 rounded-2xl bg-bg-soft p-4"
                    >
                      <Icon aria-hidden="true" className="size-5 text-gold-strong" strokeWidth={1.6} />
                      <span className="text-[0.88rem] font-medium text-ink">
                        <Ph text={label} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-line bg-surface p-8 shadow-soft">
                <p className="eyebrow">Insurance & corporate panels</p>
                <p className="mt-4 text-[0.95rem] leading-[1.75] text-ink-soft">
                  We currently work with{" "}
                  <Ph text="[insurance / corporate panel partners — confirm list with clinic]" />
                  . Covered elsewhere? We'll prepare the itemised documentation
                  your insurer needs — most patients find the claim easier than
                  they expected.
                </p>
                <p className="mt-4 flex items-start gap-2.5 rounded-2xl bg-emerald-soft p-4 text-[0.85rem] leading-[1.65] text-ink">
                  <FileText aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-emerald" strokeWidth={1.7} />
                  No coverage? Most of our patients pay directly — the written
                  estimate protects you either way.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
