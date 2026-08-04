import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Ph } from "@/components/ui/ph";
import { MapEmbed } from "@/components/sections/map-embed";
import { ANCHORS, SITE } from "@/lib/site";

export function Location() {
  return (
    <section id={ANCHORS.visit} className="bg-bg">
      <Container className="py-24 md:py-32">
        <SectionHeading
          eyebrow="Visit us"
          title="Easy to find. Easier to"
          accent="come back to."
          lede="We're in Peshawar — and if you're coming from anywhere in the city, WhatsApp us and we'll send you a live location pin."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Info card */}
          <Reveal>
            <div className="flex h-full flex-col gap-7 rounded-3xl border border-line bg-surface p-8 shadow-soft">
              <div className="flex gap-4">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-gold-soft text-gold-strong">
                  <MapPin aria-hidden="true" className="size-[1.1rem]" strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="font-display text-[1rem] font-bold text-ink">Address</h3>
                  <p className="mt-1.5 text-[0.92rem] leading-[1.7] text-ink-soft">
                    <Ph text={SITE.address.street} />
                    <br />
                    <Ph text={SITE.address.area} />, {SITE.city}
                    <br />
                    <span className="text-[0.85rem] text-ink-faint">
                      <Ph text={SITE.address.landmark} />
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-gold-soft text-gold-strong">
                  <Clock aria-hidden="true" className="size-[1.1rem]" strokeWidth={1.6} />
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-[1rem] font-bold text-ink">Hours</h3>
                  <dl className="mt-1.5 space-y-1.5">
                    {SITE.hours.map((row) => (
                      <div
                        key={row.days}
                        className="flex items-baseline justify-between gap-4 text-[0.9rem]"
                      >
                        <dt className="text-ink-soft">{row.days}</dt>
                        <dd className="font-medium text-ink">
                          <Ph text={row.time} />
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-gold-soft text-gold-strong">
                  <Phone aria-hidden="true" className="size-[1.1rem]" strokeWidth={1.6} />
                </span>
                <div>
                  <h3 className="font-display text-[1rem] font-bold text-ink">
                    Phone & emergencies
                  </h3>
                  <p className="mt-1.5 text-[0.92rem] leading-[1.7] text-ink-soft">
                    <a
                      href={`tel:+${SITE.phoneIntl}`}
                      className="font-medium text-ink underline-offset-4 hover:underline"
                    >
                      <Ph text={SITE.phoneDisplay} />
                    </a>
                    <br />
                    <span className="text-[0.85rem] text-ink-faint">
                      In pain? Say &ldquo;emergency&rdquo; when you call —
                      we keep <Ph text="[same-day]" /> time for it.
                    </span>
                  </p>
                </div>
              </div>

              <div className="mt-auto border-t border-line-soft pt-6">
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-full bg-ink text-[0.92rem] font-medium text-bg shadow-soft transition-all duration-200 ease-out-expo hover:-translate-y-px hover:shadow-lift dark:bg-on-navy dark:text-navy"
                >
                  <Navigation aria-hidden="true" className="size-4" strokeWidth={1.7} />
                  Get directions on Google Maps
                </a>
              </div>
            </div>
          </Reveal>

          {/* Map */}
          <Reveal delay={0.1}>
            <MapEmbed />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
