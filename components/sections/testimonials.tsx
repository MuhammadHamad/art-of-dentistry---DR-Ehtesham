import { ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { Stars } from "@/components/ui/stars";
import { Ph } from "@/components/ui/ph";
import { CountUp } from "@/components/motion/count-up";
import { ANCHORS, SITE } from "@/lib/site";
import { TESTIMONIALS } from "@/lib/data/testimonials";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const featured = TESTIMONIALS.find((t) => t.featured) ?? TESTIMONIALS[0];
  const rest = TESTIMONIALS.filter((t) => t !== featured);

  return (
    <section id={ANCHORS.stories} className="bg-bg-soft">
      <Container className="py-24 md:py-32">
        <SectionHeading
          eyebrow="Patient stories"
          title="What patients say when we're"
          accent="not in the room."
          lede="Sample quotes shown below are placeholders — before launch they'll be replaced word-for-word with real Google reviews, with each patient's permission."
        />

        <Stagger className="mt-14 grid gap-5 lg:grid-cols-3" stagger={0.08}>
          {/* Featured quote */}
          <StaggerItem className="lg:col-span-2 lg:row-span-2">
            <figure className="flex h-full flex-col rounded-3xl border border-line bg-surface p-8 shadow-soft md:p-12">
              <span aria-hidden="true" className="serif-accent text-[3.4rem] leading-none text-gold">
                &ldquo;
              </span>
              <blockquote className="mt-2">
                <p className="serif-accent text-[1.5rem] leading-[1.5] text-ink md:text-[1.8rem]">
                  <Ph text={featured.quote} />
                </p>
              </blockquote>
              <figcaption className="mt-auto flex items-center justify-between gap-4 pt-10">
                <div>
                  <p className="font-display text-[0.95rem] font-bold text-ink">
                    <Ph text={featured.name} />
                  </p>
                  <p className="mt-0.5 text-[0.82rem] text-ink-soft">
                    {featured.context}
                  </p>
                </div>
                <Stars />
              </figcaption>
            </figure>
          </StaggerItem>

          {/* Rating summary card */}
          <StaggerItem>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col justify-between rounded-3xl bg-navy p-8 text-on-navy shadow-soft transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:shadow-lift"
            >
              <div className="flex items-center justify-between">
                <Stars />
                <ExternalLink
                  aria-hidden="true"
                  className="size-4 text-on-navy-soft transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={1.6}
                />
              </div>
              <div className="pt-8">
                <p className="font-display text-[3rem] leading-none font-extrabold tracking-[-0.03em]">
                  <span
                    className="ph-mark"
                    title="Placeholder figure — replace with the clinic's live Google rating"
                  >
                    <CountUp value={4.9} decimals={1} />
                  </span>
                </p>
                <p className="mt-3 text-[0.9rem] leading-[1.6] text-on-navy-soft">
                  Average of <Ph text={SITE.metrics.reviewCount} /> public
                  Google reviews — read them all on our profile.
                </p>
              </div>
            </a>
          </StaggerItem>

          {/* Remaining quotes */}
          {rest.map((testimonial, i) => (
            <StaggerItem
              key={i}
              className={cn(i === rest.length - 1 && "lg:col-span-2")}
            >
              <figure className="flex h-full flex-col rounded-3xl border border-line bg-surface p-7 shadow-soft transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:shadow-lift">
                <blockquote>
                  <p className="text-[0.97rem] leading-[1.75] text-ink-soft">
                    &ldquo;<Ph text={testimonial.quote} />&rdquo;
                  </p>
                </blockquote>
                <figcaption className="mt-auto flex items-center justify-between gap-4 pt-6">
                  <div>
                    <p className="text-[0.88rem] font-semibold text-ink">
                      <Ph text={testimonial.name} />
                    </p>
                    <p className="mt-0.5 text-[0.78rem] text-ink-soft">
                      {testimonial.context}
                    </p>
                  </div>
                  <Stars size={10} />
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
