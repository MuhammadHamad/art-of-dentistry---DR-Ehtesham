import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem, Reveal } from "@/components/motion/reveal";
import { Ph } from "@/components/ui/ph";
import { ANCHORS } from "@/lib/site";
import { TECHNOLOGY_ITEMS } from "@/lib/data/technology";

export function Technology() {
  return (
    <section id={ANCHORS.technology} className="bg-navy">
      <Container className="py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              dark
              eyebrow="Technology"
              title="The machines matter less than"
              accent="why we bought them."
              lede="Every piece of equipment here had to answer one question before it was allowed in: does it make your visit shorter, safer, or more comfortable? Here's what passed — and what each one means for you."
            />
            <Reveal delay={0.15}>
              <p className="mt-8 max-w-md rounded-2xl border border-line-on-navy bg-navy-raise p-5 text-[0.85rem] leading-[1.7] text-on-navy-soft">
                Radiation-conscious by design: digital imaging is used only
                when it changes a decision — and you'll always be told why
                before it's taken.
              </p>
            </Reveal>
          </div>

          <Stagger className="divide-y divide-line-on-navy border-y border-line-on-navy" stagger={0.06}>
            {TECHNOLOGY_ITEMS.map((item, i) => (
              <StaggerItem key={item.name}>
                <div className="group grid gap-2 py-6 sm:grid-cols-[3.2rem_1fr] sm:gap-6 md:py-7">
                  <span className="font-display text-[0.85rem] font-semibold tracking-[0.08em] text-gold tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-[1.12rem] font-bold tracking-[-0.01em] text-on-navy">
                      <Ph text={item.name} />
                    </h3>
                    <p className="mt-2 max-w-xl text-[0.93rem] leading-[1.7] text-on-navy-soft">
                      {item.meaning}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </section>
  );
}
