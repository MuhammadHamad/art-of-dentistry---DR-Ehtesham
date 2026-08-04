import { HeartHandshake } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem, Reveal } from "@/components/motion/reveal";
import { PhotoFrame } from "@/components/art/photo-frame";
import { Ph } from "@/components/ui/ph";
import { ANCHORS } from "@/lib/site";
import { JOURNEY_STEPS, ANXIETY_PROTOCOL } from "@/lib/data/journey";

export function Journey() {
  return (
    <section id={ANCHORS.experience} className="bg-bg">
      <Container className="py-24 md:py-32">
        <SectionHeading
          eyebrow="The patient experience"
          title="Your first visit,"
          accent="minute by minute."
          lede="The visit you're imagining is almost certainly worse than the one that happens. Here is exactly how a first appointment runs — no surprises is the whole point."
        />

        {/* Steps rail */}
        <Stagger
          className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5"
          stagger={0.09}
        >
          {JOURNEY_STEPS.map((step, i) => (
            <StaggerItem key={step.number} className="relative">
              {/* connecting rail (desktop) */}
              {i < JOURNEY_STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute top-[1.05rem] left-[3.2rem] hidden h-px w-[calc(100%-2.4rem)] bg-line lg:block"
                />
              )}
              <span className="relative z-10 inline-flex h-[2.1rem] min-w-[2.6rem] items-center justify-center rounded-full border border-gold/50 bg-bg px-2 font-display text-[0.8rem] font-bold tracking-[0.1em] text-gold-strong tabular-nums">
                {step.number}
              </span>
              <h3 className="mt-4 font-display text-[1.05rem] font-bold tracking-[-0.01em] text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-[0.88rem] leading-[1.7] text-ink-soft">
                <Ph text={step.description} />
              </p>
            </StaggerItem>
          ))}
        </Stagger>

        {/* Anxiety protocol */}
        <Reveal delay={0.1} className="mt-16">
          <div className="grid overflow-hidden rounded-3xl border border-line bg-surface shadow-soft md:grid-cols-[1fr_1.35fr]">
            <div className="relative flex min-h-[16rem] flex-col justify-center gap-4 p-8 md:p-10">
              <PhotoFrame
                src="/images/experience-calm.jpg"
                alt="A patient reclined and at ease during a gentle, unhurried appointment"
                className="absolute inset-0"
                sizes="(min-width: 768px) 30vw, 90vw"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-bg via-bg/85 to-bg/35"
              />
              <span className="relative inline-flex size-11 items-center justify-center rounded-2xl bg-gold-soft text-gold-strong">
                <HeartHandshake aria-hidden="true" className="size-[1.3rem]" strokeWidth={1.6} />
              </span>
              <h3 className="relative font-display text-[1.5rem] leading-[1.25] font-bold tracking-[-0.02em] text-balance text-ink">
                {ANXIETY_PROTOCOL.title}
              </h3>
              <p className="relative text-[0.93rem] leading-[1.7] text-ink-soft">
                {ANXIETY_PROTOCOL.intro}
              </p>
            </div>
            <ol className="grid content-center gap-0 p-4 sm:p-6">
              {ANXIETY_PROTOCOL.points.map((point, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 border-b border-line-soft p-4 last:border-b-0 sm:p-5"
                >
                  <span className="font-display text-[0.8rem] font-bold text-gold-strong tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[0.95rem] leading-[1.65] text-ink">
                    {point}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
