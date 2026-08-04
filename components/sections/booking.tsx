"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { Ph } from "@/components/ui/ph";
import { EASE } from "@/lib/motion";
import { ANCHORS, SITE, whatsappLink } from "@/lib/site";
import { TREATMENTS } from "@/lib/data/treatments";
import { cn, stripPh } from "@/lib/utils";

const TIME_OPTIONS = ["First available", "Morning", "Afternoon", "Evening"];

const BOOKING_STEPS = [
  { title: "Tell us what you need", body: "One minute, four fields. No account, no payment." },
  { title: "We confirm on WhatsApp", body: "A human replies with your time — not an auto-responder." },
  { title: "Walk in — we're expecting you", body: "Your slot is protected. No waiting-room roulette." },
];

interface FormState {
  name: string;
  phone: string;
  treatment: string;
  time: string;
  note: string;
}

type Errors = Partial<Record<"name" | "phone", string>>;

export function Booking() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    treatment: "",
    time: TIME_OPTIONS[0],
    note: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const reduce = useReducedMotion();

  // Treatment cards deep-link into this form.
  useEffect(() => {
    function onPrefill(e: Event) {
      const slug = (e as CustomEvent<string>).detail;
      const match = TREATMENTS.find((t) => t.slug === slug);
      if (match) {
        setForm((f) => ({ ...f, treatment: match.name }));
        setSent(false);
      }
    }
    window.addEventListener("aod:prefill-treatment", onPrefill);
    return () => window.removeEventListener("aod:prefill-treatment", onPrefill);
  }, []);

  function validate(): boolean {
    const next: Errors = {};
    if (form.name.trim().length < 2) {
      next.name = "Please tell us your name.";
    }
    const digits = form.phone.replace(/[^\d+]/g, "");
    if (!/^(\+?92|0)?3\d{9}$/.test(digits)) {
      next.phone = "Please enter a valid Pakistani mobile number, e.g. 0300 1234567.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    const lines = [
      "Hello Art of Dentistry — I'd like to book an appointment.",
      "",
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      form.treatment ? `Treatment: ${stripPh(form.treatment)}` : null,
      `Preferred time: ${form.time}`,
      form.note.trim() ? `Note: ${form.note.trim()}` : null,
    ].filter((line): line is string => line !== null);

    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  const inputClasses = (invalid?: boolean) =>
    cn(
      "h-12 w-full rounded-xl border bg-navy-raise px-4 text-[0.95rem] text-on-navy placeholder:text-on-navy-soft/60 transition-colors duration-200 focus:outline-none",
      invalid
        ? "border-danger focus:border-danger"
        : "border-line-on-navy focus:border-gold"
    );

  return (
    <section id={ANCHORS.book} className="bg-navy">
      <Container className="py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Pitch */}
          <div>
            <SectionHeading
              dark
              eyebrow="Book a visit"
              title="The hardest part of dentistry is booking it. So we made that part"
              accent="effortless."
              lede="No portals, no passwords, no phone queue. Tell us what you need and the confirmation arrives where you already live: WhatsApp."
            />

            <div className="mt-10 space-y-0">
              {BOOKING_STEPS.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.06}>
                  <div className="flex gap-5 border-t border-line-on-navy py-5 last:border-b">
                    <span className="font-display text-[0.85rem] font-bold text-gold tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-[1rem] font-bold text-on-navy">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-[0.88rem] leading-[1.65] text-on-navy-soft">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`tel:+${SITE.phoneIntl}`}
                  title="Phone number is a placeholder until the clinic's real number is added"
                  className="inline-flex h-12 items-center gap-2.5 rounded-full border border-line-on-navy px-5 text-[0.9rem] font-medium text-on-navy transition-colors duration-200 hover:border-gold"
                >
                  <Phone aria-hidden="true" className="size-4 text-gold" strokeWidth={1.7} />
                  <Ph text={SITE.phoneDisplay} />
                </a>
                <span className="inline-flex h-12 items-center rounded-full border border-line-on-navy px-5 text-[0.85rem] text-on-navy-soft">
                  {`${SITE.hours[0].days} · `}
                  <Ph text={SITE.hours[0].time} />
                </span>
              </div>
            </Reveal>
          </div>

          {/* Form card */}
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl border border-line-on-navy bg-navy-raise/60 p-7 shadow-lift backdrop-blur-sm md:p-9">
              <AnimatePresence mode="wait" initial={false}>
                {sent ? (
                  <motion.div
                    key="success"
                    initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
                    transition={{ duration: 0.45, ease: EASE }}
                    className="flex min-h-[26rem] flex-col items-center justify-center text-center"
                  >
                    <span className="inline-flex size-14 items-center justify-center rounded-full bg-emerald-soft">
                      <Check aria-hidden="true" className="size-6 text-emerald" strokeWidth={2} />
                    </span>
                    <h3 className="mt-6 font-display text-[1.4rem] font-bold text-on-navy">
                      One tap to go.
                    </h3>
                    <p className="mt-3 max-w-sm text-[0.92rem] leading-[1.7] text-on-navy-soft">
                      WhatsApp should have opened with your details pre-filled —
                      just press <strong className="text-on-navy">Send</strong> and
                      we'll confirm your appointment shortly.
                    </p>
                    <p className="mt-6 text-[0.85rem] text-on-navy-soft">
                      Didn't open? Call us directly at{" "}
                      <a
                        href={`tel:+${SITE.phoneIntl}`}
                        className="font-medium text-gold underline-offset-4 hover:underline"
                      >
                        <Ph text={SITE.phoneDisplay} />
                      </a>
                    </p>
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="mt-8 text-[0.85rem] font-medium text-on-navy-soft underline-offset-4 hover:text-on-navy hover:underline"
                    >
                      Start over
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={submit}
                    noValidate
                    initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? { opacity: 0 } : { opacity: 0, y: -10 }}
                    transition={{ duration: 0.45, ease: EASE }}
                    className="space-y-5"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="booking-name"
                          className="mb-2 block text-[0.8rem] font-medium text-on-navy-soft"
                        >
                          Your name
                        </label>
                        <input
                          id="booking-name"
                          type="text"
                          autoComplete="name"
                          placeholder="Full name"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          aria-invalid={!!errors.name}
                          className={inputClasses(!!errors.name)}
                        />
                        {errors.name && (
                          <p className="mt-1.5 text-[0.78rem] text-danger">{errors.name}</p>
                        )}
                      </div>
                      <div>
                        <label
                          htmlFor="booking-phone"
                          className="mb-2 block text-[0.8rem] font-medium text-on-navy-soft"
                        >
                          WhatsApp number
                        </label>
                        <input
                          id="booking-phone"
                          type="tel"
                          autoComplete="tel"
                          placeholder="03xx xxxxxxx"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          aria-invalid={!!errors.phone}
                          className={inputClasses(!!errors.phone)}
                        />
                        {errors.phone && (
                          <p className="mt-1.5 text-[0.78rem] text-danger">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="booking-treatment"
                        className="mb-2 block text-[0.8rem] font-medium text-on-navy-soft"
                      >
                        What do you need? <span className="opacity-60">(optional)</span>
                      </label>
                      <select
                        id="booking-treatment"
                        value={form.treatment}
                        onChange={(e) => setForm({ ...form, treatment: e.target.value })}
                        className={cn(inputClasses(), "appearance-none")}
                      >
                        <option value="">Not sure yet — just a check-up</option>
                        {TREATMENTS.map((t) => (
                          <option key={t.slug} value={t.name}>
                            {t.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <fieldset>
                      <legend className="mb-2 block text-[0.8rem] font-medium text-on-navy-soft">
                        Preferred time
                      </legend>
                      <div className="flex flex-wrap gap-2">
                        {TIME_OPTIONS.map((option) => {
                          const active = form.time === option;
                          return (
                            <button
                              key={option}
                              type="button"
                              onClick={() => setForm({ ...form, time: option })}
                              aria-pressed={active}
                              className={cn(
                                "h-10 rounded-full border px-4 text-[0.85rem] font-medium transition-all duration-200",
                                active
                                  ? "border-gold bg-gold-soft text-on-navy"
                                  : "border-line-on-navy text-on-navy-soft hover:border-gold/60 hover:text-on-navy"
                              )}
                            >
                              {option}
                            </button>
                          );
                        })}
                      </div>
                    </fieldset>

                    <div>
                      <label
                        htmlFor="booking-note"
                        className="mb-2 block text-[0.8rem] font-medium text-on-navy-soft"
                      >
                        Anything we should know? <span className="opacity-60">(optional)</span>
                      </label>
                      <textarea
                        id="booking-note"
                        rows={3}
                        placeholder="Pain, anxiety, past experiences — anything that helps us prepare for you."
                        value={form.note}
                        onChange={(e) => setForm({ ...form, note: e.target.value })}
                        className={cn(inputClasses(), "h-auto resize-none py-3")}
                      />
                    </div>

                    <button
                      type="submit"
                      className="group inline-flex h-[3.25rem] w-full items-center justify-center gap-2.5 rounded-full bg-emerald text-[0.98rem] font-medium text-white shadow-soft transition-all duration-200 ease-out-expo hover:-translate-y-px hover:shadow-lift active:scale-[0.99]"
                    >
                      <MessageCircle aria-hidden="true" className="size-[1.15rem]" strokeWidth={1.8} />
                      Continue on WhatsApp
                    </button>

                    <p className="text-center text-[0.75rem] leading-[1.6] text-on-navy-soft">
                      No payment, no obligation — this only opens a pre-filled
                      WhatsApp message you can review before sending.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
