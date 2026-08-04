import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { PhotoFrame } from "@/components/art/photo-frame";
import { Ph } from "@/components/ui/ph";
import { ANCHORS } from "@/lib/site";

const VALUES = [
  {
    title: "Explain, then treat",
    body: "Nothing happens in the chair that wasn't first explained in plain language — and agreed to.",
  },
  {
    title: "No surprise bills",
    body: "A written, itemised estimate before treatment begins. The final bill matches it.",
  },
  {
    title: "Gentle by default",
    body: "Anaesthesia first, verified working, always. Comfort is protocol here, not a favour.",
  },
  {
    title: "Nothing you don't need",
    body: "If a tooth can wait, we say so. A practice built on referrals can afford honesty.",
  },
];

export function Philosophy() {
  return (
    <section id={ANCHORS.philosophy} className="bg-bg-soft">
      <Container className="py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Sticky heading */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Why this clinic exists"
              title="Most dental fear isn't fear of dentists. It's fear of the"
              accent="unknown."
            />
            <Reveal delay={0.15}>
              <figure className="relative mt-9 aspect-[4/3] overflow-hidden rounded-3xl shadow-soft ring-1 ring-line">
                <PhotoFrame
                  src="/images/philosophy-consultation.jpg"
                  alt="A dentist talking through a treatment plan with a patient before any work begins"
                  caption="Representative consultation"
                  sizes="(min-width: 1024px) 40vw, 90vw"
                />
              </figure>
            </Reveal>
          </div>

          {/* Story */}
          <div>
            <Reveal className="space-y-6 text-[1.04rem] leading-[1.8] text-ink-soft">
              <p>
                People rarely avoid the dentist because they don't care about
                their teeth. They avoid it because, somewhere along the way, a
                visit hurt more than it should have — or cost more than anyone
                explained beforehand. Usually both.
              </p>
              <p>
                Art of Dentistry was built backwards from those complaints.
                Appointments long enough for questions. Estimates in writing
                before any work begins. Equipment chosen for one reason: it
                makes procedures shorter, safer or more comfortable. And a
                simple rule that governs everything —{" "}
                <strong>if it were our own tooth, would we treat it this way?</strong>
              </p>
              <p>
                Founded <Ph text="[in YEAR]" /> by Dr. Ehtesham, the practice has grown the
                way good clinics tend to: quietly, by referral, one reassured
                patient recommending us to the next.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <blockquote className="mt-10 border-l-2 border-gold pl-6">
                <p className="serif-accent text-[1.45rem] leading-[1.5] text-ink md:text-[1.6rem]">
                  Good dentistry shouldn't feel like an emergency. It should
                  feel like being taken care of.
                </p>
              </blockquote>
            </Reveal>

            <Stagger className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2" stagger={0.08}>
              {VALUES.map((value) => (
                <StaggerItem key={value.title}>
                  <div className="border-t border-line pt-5">
                    <h3 className="font-display text-[1.02rem] font-semibold text-ink">
                      {value.title}
                    </h3>
                    <p className="mt-2 text-[0.92rem] leading-[1.7] text-ink-soft">
                      {value.body}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </Container>
    </section>
  );
}
