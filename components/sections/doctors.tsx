import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { ArtFrame } from "@/components/art/art-frame";
import { Ph } from "@/components/ui/ph";
import { ANCHORS } from "@/lib/site";
import { DOCTORS } from "@/lib/data/doctors";

export function Doctors() {
  return (
    <section id={ANCHORS.doctors} className="bg-bg">
      <Container className="py-24 md:py-32">
        <SectionHeading
          eyebrow="The doctors"
          title="The steadiest thing in the room should be the"
          accent="hands."
          lede="Credentials matter — but so does the person explaining your X-ray. Here's both."
        />

        <Stagger className="mt-14 grid gap-6 md:grid-cols-2" stagger={0.1}>
          {DOCTORS.map((doctor, i) => (
            <StaggerItem key={doctor.name}>
              <article className="group grid h-full overflow-hidden rounded-3xl border border-line bg-surface shadow-soft transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:shadow-lift sm:grid-cols-[0.72fr_1.28fr]">
                <figure className="relative aspect-[4/5] sm:aspect-auto sm:h-full">
                  <ArtFrame uid={`doctor-${i}`} />
                  <figcaption className="sr-only">
                    Placeholder reserved for a professional portrait of{" "}
                    {doctor.name}.
                  </figcaption>
                </figure>

                <div className="flex flex-col p-7 md:p-8">
                  <h3 className="font-display text-[1.35rem] leading-tight font-bold tracking-[-0.02em] text-ink">
                    <Ph text={doctor.name} />
                  </h3>
                  <p className="mt-1 text-[0.85rem] font-medium text-gold-strong">
                    {doctor.role}
                  </p>
                  <p className="mt-3 text-[0.83rem] leading-[1.6] text-ink-soft">
                    <Ph text={doctor.credentials} /> ·{" "}
                    <Ph text={doctor.experience} />
                  </p>

                  <p className="mt-4 text-[0.9rem] leading-[1.7] text-ink-soft">
                    <Ph text={doctor.bio} />
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {doctor.interests.map((interest) => (
                      <span
                        key={interest}
                        className="rounded-full border border-line bg-bg-soft px-2.5 py-1 text-[0.72rem] font-medium text-ink-soft"
                      >
                        <Ph text={interest} />
                      </span>
                    ))}
                  </div>

                  <blockquote className="mt-auto border-t border-line-soft pt-5">
                    <p className="serif-accent text-[1.02rem] leading-[1.55] text-ink">
                      &ldquo;<Ph text={doctor.quote} />&rdquo;
                    </p>
                  </blockquote>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
