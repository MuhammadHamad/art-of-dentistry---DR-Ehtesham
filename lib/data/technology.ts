/**
 * Equipment list — EVERY item is a bracketed placeholder until the clinic
 * confirms exactly what it operates. The "meaning" copy translates each
 * machine into patient benefit (the only reason equipment belongs on a
 * marketing site at all).
 */

export interface TechnologyItem {
  name: string;
  meaning: string;
}

export const TECHNOLOGY_ITEMS: TechnologyItem[] = [
  {
    name: "[Digital X-ray (RVG)]",
    meaning:
      "Sharper images in seconds, with a fraction of the radiation of film — and you review them on screen with us, not squinting at a negative.",
  },
  {
    name: "[Intraoral camera]",
    meaning:
      "A pen-sized camera that shows you your own tooth, magnified, before and after. You approve work based on what you saw — not what you were told.",
  },
  {
    name: "[Class B autoclave sterilisation]",
    meaning:
      "Hospital-grade sterilisation for every reusable instrument, sealed in pouches that are opened in front of you at the chair.",
  },
  {
    name: "[Rotary endodontic system]",
    meaning:
      "The instrument that changed root canals: smoother, faster, more precise cleaning of the canal — shorter appointments, calmer experience.",
  },
  {
    name: "[Ultrasonic scaler]",
    meaning:
      "Removes years of tartar with fine vibration instead of scraping force. Cleanings feel like maintenance, not punishment.",
  },
  {
    name: "[LED whitening system]",
    meaning:
      "Professionally supervised in-clinic whitening with enamel assessed first — honest expectations, measurable results.",
  },
];
