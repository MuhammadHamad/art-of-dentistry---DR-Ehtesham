import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button, ButtonArrow } from "@/components/ui/button";
import { Stars } from "@/components/ui/stars";
import { StatusDot } from "@/components/ui/chip";
import { Ph } from "@/components/ui/ph";
import { ArtFrame } from "@/components/art/art-frame";
import { Stagger, StaggerItem, Reveal } from "@/components/motion/reveal";
import { Parallax } from "@/components/motion/parallax";
import { CountUp } from "@/components/motion/count-up";
import { ANCHORS, SITE } from "@/lib/site";
import { TREATMENT_COUNT } from "@/lib/data/treatments";

const STATS: Array<{
  value: number;
  decimals?: number;
  suffix: string;
  label: string;
  placeholder: boolean;
}> = [
  { value: 12, suffix: "+", label: "Years in practice", placeholder: true },
  { value: 15000, suffix: "+", label: "Patient visits", placeholder: true },
  { value: 4.9, decimals: 1, suffix: " / 5", label: "Google rating", placeholder: true },
  { value: TREATMENT_COUNT, suffix: "", label: "Treatments under one roof", placeholder: false },
];

export function Hero() {
  return (
    <section id={ANCHORS.top} className="relative overflow-hidden">
      {/* ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-40 right-[-14rem] size-[38rem] rounded-full bg-bg-soft blur-3xl dark:opacity-40" />
        <svg
          className="absolute -bottom-24 left-[-10rem] w-[42rem] opacity-[0.5] dark:opacity-[0.14]"
          viewBox="0 0 600 400"
          fill="none"
          aria-hidden="true"
        >
          {[0, 1, 2].map((i) => (
            <path
              key={i}
              d={`M -40 ${300 - i * 44} Q 300 ${180 - i * 40}, 640 ${310 - i * 44}`}
              stroke="var(--gold)"
              strokeWidth="1"
              opacity={0.5 - i * 0.13}
            />
          ))}
        </svg>
      </div>

      <Container className="pt-32 md:pt-40">
        <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.88fr] lg:gap-10">
          {/* Copy */}
          <Stagger stagger={0.09} className="max-w-2xl">
            <StaggerItem>
              <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-[0.78rem] font-medium text-ink-soft">
                <StatusDot />
                Accepting new patients · {SITE.city}
              </p>
            </StaggerItem>

            <StaggerItem>
              <h1 className="mt-7 font-display text-[2.85rem] leading-[1.05] font-extrabold tracking-[-0.035em] text-balance text-ink sm:text-[3.6rem] md:text-[4.15rem] xl:text-[4.6rem]">
                Dentistry, practiced{" "}
                <span className="whitespace-nowrap">
                  as <em className="serif-accent font-medium text-gold-strong">an art.</em>
                </span>
              </h1>
            </StaggerItem>

            <StaggerItem>
              <p className="mt-6 max-w-xl text-[1.06rem] leading-[1.75] text-ink-soft md:text-[1.13rem]">
                A private clinic in {SITE.city} for careful, unhurried dental
                care — modern equipment, gentle technique, and honest advice.
                Most first visits here are simply a conversation.
              </p>
            </StaggerItem>

            <StaggerItem>
              <div className="mt-9 flex flex-wrap items-center gap-3.5">
                <Button href={`#${ANCHORS.book}`} size="lg">
                  Book a consultation
                  <ButtonArrow />
                </Button>
                <Button href={`#${ANCHORS.treatments}`} size="lg" variant="secondary">
                  Explore treatments
                </Button>
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-2.5 text-[0.85rem] text-ink-soft">
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 transition-colors hover:text-ink"
                >
                  <Stars />
                  <span>
                    <span className="font-semibold text-ink">
                      <Ph text={SITE.metrics.rating} />
                    </span>{" "}
                    · <Ph text={SITE.metrics.reviewCount} /> Google reviews
                  </span>
                </a>
                <span aria-hidden="true" className="hidden size-1 rounded-full bg-line sm:block" />
                <span>
                  <Ph text="[Same-day]" /> emergency appointments
                </span>
              </div>
            </StaggerItem>
          </Stagger>

          {/* Artwork */}
          <Reveal delay={0.2} className="relative mx-auto w-full max-w-[26rem] lg:max-w-none">
            {/* offset gold arch behind the frame */}
            <div
              aria-hidden="true"
              className="absolute -top-6 -right-4 hidden h-full w-full rounded-t-full rounded-b-[2rem] border border-gold/35 sm:block"
            />
            <Parallax distance={26}>
              <figure className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[2rem] shadow-lift ring-1 ring-line">
                <ArtFrame
                  variant="clinic"
                  uid="hero"
                  label="Clinic photography · 4:5"
                />
                <figcaption className="sr-only">
                  Placeholder artwork reserved for a photograph of the clinic
                  interior.
                </figcaption>
              </figure>
            </Parallax>

            {/* floating rating card */}
            <div className="glass absolute -left-3 top-10 hidden rounded-2xl px-4 py-3 sm:block lg:-left-10">
              <div className="flex items-center gap-3">
                <Stars size={11} />
                <p className="text-[0.8rem] font-semibold text-ink">
                  <Ph text={SITE.metrics.rating} />
                </p>
              </div>
              <p className="mt-1 text-[0.72rem] text-ink-soft">
                from <Ph text={SITE.metrics.reviewCount} /> Google reviews
              </p>
            </div>

            {/* floating sterile chip */}
            <div className="glass absolute -bottom-5 right-4 flex items-center gap-2.5 rounded-2xl px-4 py-3 sm:right-8">
              <ShieldCheck aria-hidden="true" className="size-[1.15rem] text-emerald" strokeWidth={1.7} />
              <p className="text-[0.78rem] font-medium text-ink">
                Sealed, sterilised instruments
                <span className="block text-[0.68rem] font-normal text-ink-soft">
                  opened at the chair, every patient
                </span>
              </p>
            </div>
          </Reveal>
        </div>

        {/* Stats bar */}
        <Stagger
          stagger={0.07}
          className="mt-20 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-line py-10 md:mt-24 md:grid-cols-4 md:py-12"
        >
          {STATS.map((stat) => (
            <StaggerItem key={stat.label}>
              <p className="font-display text-[2.1rem] leading-none font-bold tracking-[-0.02em] text-ink md:text-[2.5rem]">
                {stat.placeholder ? (
                  <span
                    className="ph-mark"
                    title="Placeholder figure — replace with the clinic's verified number"
                  >
                    <CountUp value={stat.value} decimals={stat.decimals ?? 0} />
                    {stat.suffix}
                  </span>
                ) : (
                  <>
                    <CountUp value={stat.value} decimals={stat.decimals ?? 0} />
                    {stat.suffix}
                  </>
                )}
              </p>
              <p className="mt-2.5 text-[0.85rem] text-ink-soft">{stat.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
