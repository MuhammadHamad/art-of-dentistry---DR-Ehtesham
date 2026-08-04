/**
 * Doctor profiles. "Dr. Ehtesham" is the principal dentist (from the
 * clinic's own materials); ALL credentials, degrees and experience figures
 * are bracketed placeholders — never publish them unverified.
 * The second entry is a ready-made template for an associate.
 */

export interface Doctor {
  name: string;
  role: string;
  credentials: string;
  experience: string;
  interests: string[];
  quote: string;
  bio: string;
}

export const DOCTORS: Doctor[] = [
  {
    name: "Dr. Ehtesham",
    role: "Founder & Principal Dentist",
    credentials: "[BDS — University] · [Postgraduate qualification / FCPS]",
    experience: "[12]+ years in practice",
    interests: ["Cosmetic dentistry", "Root canal treatment", "Implants"],
    quote:
      "I'd rather explain a treatment three times than have a patient sit in my chair confused once.",
    bio:
      "Dr. Ehtesham founded Art of Dentistry around a conviction: that the standard of care people fly abroad for should exist in Peshawar. Known among patients for unhurried consultations and a steady, deliberate chairside manner, he personally plans every case in the practice.",
  },
  {
    name: "[Associate dentist name]",
    role: "[Associate Dentist / Orthodontist]",
    credentials: "[BDS — University] · [Specialisation]",
    experience: "[X] years in practice",
    interests: ["[Special interest one]", "[Special interest two]"],
    quote:
      "[A short personal line about how this doctor approaches patient care.]",
    bio:
      "[Two or three sentences: where this doctor trained, what they focus on at the clinic, and something human — what patients consistently say about them.]",
  },
];
