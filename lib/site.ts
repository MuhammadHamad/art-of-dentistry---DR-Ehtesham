/**
 * ─────────────────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH for every real-world fact about the clinic.
 *
 *  Anything wrapped in [square brackets] is a PLACEHOLDER awaiting a
 *  verified detail from the clinic. Placeholders render with a dotted gold
 *  underline on the site. Replace the bracketed text (brackets included)
 *  and the marker disappears automatically.
 *
 *  Full replacement checklist: README.md → "Before going live".
 * ─────────────────────────────────────────────────────────────────────────
 */

export const SITE = {
  name: "Art of Dentistry",
  legalName: "Art of Dentistry Dental Clinic",
  city: "Peshawar",
  country: "Pakistan",
  tagline: "Dentistry, practiced as an art.",
  description:
    "Art of Dentistry is a private dental clinic in Peshawar offering careful, modern dental care — implants, root canals, braces, aligners, whitening and cosmetic dentistry — with transparent pricing and a gentle, unhurried approach.",

  /** TODO: replace with the production domain before deploying. */
  url: "https://artofdentistry-peshawar.example.com",

  /** Real Google Maps listing (provided by the clinic). */
  mapsUrl:
    "https://www.google.com/maps/place/Art+of+Dentistry+Dental+Clinic/",
  mapsEmbedQuery: "Art of Dentistry Dental Clinic, Peshawar",

  // ── Contact (all placeholders — replace with real numbers) ──────────
  phoneDisplay: "[+92 300 0000000]",
  /** International format, digits only — used to build wa.me / tel: links. */
  phoneIntl: "923000000000",
  whatsappIntl: "923000000000",
  email: "[hello@artofdentistry.pk]",

  // ── Address (verified via the clinic's Google Maps listing) ─────────
  address: {
    street: "Office 55, 2nd Floor, Uhad Tower, University Road",
    area: "Shaheen Town",
    landmark: "[Nearby landmark — e.g. opposite City Tower]",
    postalCode: "25120",
    city: "Peshawar",
    region: "Khyber Pakhtunkhwa",
    country: "Pakistan",
  },

  // ── Hours (placeholders — confirm with clinic) ──────────────────────
  hours: [
    { days: "Monday — Saturday", time: "[11:00 am — 9:00 pm]" },
    { days: "Friday break", time: "[1:00 — 3:00 pm]" },
    { days: "Sunday", time: "[By appointment]" },
  ],

  // ── Trust metrics — rating/reviewCount verified via Google Maps;
  //    years/patientVisits remain placeholders (unverifiable from Maps) ─
  metrics: {
    rating: "5.0",
    reviewCount: "10",
    yearsInPractice: "[12]+",
    patientVisits: "[15,000]+",
  },

  // ── Social (placeholders) ───────────────────────────────────────────
  socials: [
    { label: "Instagram", href: "#", note: "[Instagram profile URL]" },
    { label: "Facebook", href: "#", note: "[Facebook page URL]" },
  ],
} as const;

/** Compose a WhatsApp deep link with a pre-filled message. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${SITE.whatsappIntl}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hello Art of Dentistry — I'd like to book an appointment.";

/** Section anchor ids — keep in sync with app/page.tsx. */
export const ANCHORS = {
  top: "top",
  philosophy: "philosophy",
  why: "why",
  treatments: "treatments",
  technology: "technology",
  experience: "experience",
  gallery: "gallery",
  doctors: "doctors",
  stories: "stories",
  pricing: "pricing",
  faq: "faq",
  book: "book",
  visit: "visit",
} as const;

export const NAV_LINKS = [
  { label: "Philosophy", href: `#${ANCHORS.philosophy}` },
  { label: "Treatments", href: `#${ANCHORS.treatments}` },
  { label: "Experience", href: `#${ANCHORS.experience}` },
  { label: "Doctors", href: `#${ANCHORS.doctors}` },
  { label: "Pricing", href: `#${ANCHORS.pricing}` },
  { label: "Visit us", href: `#${ANCHORS.visit}` },
] as const;
