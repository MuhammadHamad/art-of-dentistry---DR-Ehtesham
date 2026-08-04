/**
 * The first-visit journey — the site's core fear-reduction device.
 * Steps describe the clinic's intended standard of care; have the clinic
 * confirm each behavioural promise before launch (see README checklist).
 */

export interface JourneyStep {
  number: string;
  title: string;
  description: string;
}

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    number: "01",
    title: "We listen first",
    description:
      "Your first minutes are a conversation, not a chair. What hurts, what worries you, what you want to change — and what past visits got wrong.",
  },
  {
    number: "02",
    title: "A proper look",
    description:
      "A careful examination with [digital imaging] where needed. You see everything we see, on screen, explained in plain language.",
  },
  {
    number: "03",
    title: "A plan you can hold",
    description:
      "Options, our recommendation, and a written itemised estimate. You take it home if you want to think — no one is closed in a chair.",
  },
  {
    number: "04",
    title: "Treatment, at your pace",
    description:
      "We numb before we begin and confirm it worked. Raise a hand at any moment and we stop. Appointments are paced so nothing is ever rushed.",
  },
  {
    number: "05",
    title: "We stay in touch",
    description:
      "Written aftercare, and a direct WhatsApp line for the 'is this normal?' questions. Care doesn't end when the chair comes up.",
  },
];

/** The anxiety protocol — shown beside the journey. */
export const ANXIETY_PROTOCOL = {
  title: "Nervous? Say so. You won't be the first.",
  intro:
    "Dental anxiety is the most ordinary thing we see, and we have a standing protocol for it — not dramatic, just how it works here:",
  points: [
    "Tell us when you book. No explanation needed, ever.",
    "Your first visit can be talk-only — examination when you're ready.",
    "We numb first, then verify it worked before starting.",
    "Raise a hand and everything stops. Every time. No questions.",
  ],
};
