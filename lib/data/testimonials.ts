/**
 * ⚠️ SAMPLE TESTIMONIALS — illustrative placeholders only.
 * Replace every entry with real, consented patient reviews before launch
 * (copy them verbatim from Google Reviews with the patient's permission).
 * Names are intentionally bracketed placeholders.
 */

export interface Testimonial {
  quote: string;
  name: string;
  context: string;
  featured?: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I'd postponed a root canal for two years because of one bad experience elsewhere. Here, I felt the anaesthetic injection — and that's it. That's the whole story. I kept waiting for the bad part and it never came.",
    name: "[Patient name]",
    context: "Root canal treatment",
    featured: true,
  },
  {
    quote:
      "They wrote down the full cost before touching anything, and the final bill matched it. In this city, that alone is worth the visit.",
    name: "[Patient name]",
    context: "Crown & filling",
  },
  {
    quote:
      "My daughter is five. Her first visit was ten minutes of sitting in the chair 'counting teeth'. She now asks when she can go back — to a dentist.",
    name: "[Patient name]",
    context: "Children's dentistry",
  },
  {
    quote:
      "Cracked a molar on a Friday night, messaged them on WhatsApp, was in the chair [the next morning]. Out of pain by lunchtime.",
    name: "[Patient name]",
    context: "Emergency visit",
  },
  {
    quote:
      "The veneers don't look like veneers — colleagues just think I look rested. That was exactly the brief, and they took it seriously.",
    name: "[Patient name]",
    context: "Veneers",
  },
];
