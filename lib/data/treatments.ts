/**
 * The complete treatment catalogue. Copy follows the voice rules in
 * DESIGN.md §1: name the fear, answer it concretely, no medical guarantees.
 * Bracketed text = placeholder awaiting clinic confirmation.
 */

export type TreatmentCategory =
  | "restore"
  | "enhance"
  | "align"
  | "everyday";

export const TREATMENT_CATEGORIES: Array<{
  id: TreatmentCategory | "all";
  label: string;
}> = [
  { id: "all", label: "All treatments" },
  { id: "restore", label: "Restore" },
  { id: "enhance", label: "Enhance" },
  { id: "align", label: "Align" },
  { id: "everyday", label: "Everyday & urgent" },
];

export interface Treatment {
  slug: string;
  name: string;
  category: TreatmentCategory;
  tagline: string;
  description: string;
  benefits: string[];
  idealFor: string;
}

export const TREATMENTS: Treatment[] = [
  // ── Restore ──────────────────────────────────────────────────────────
  {
    slug: "dental-implants",
    name: "Dental Implants",
    category: "restore",
    tagline: "A missing tooth, permanently answered.",
    description:
      "A titanium root placed in the jaw, finished with a crown matched to its neighbours. It is the closest modern dentistry comes to growing a tooth back — fixed, quiet, and yours.",
    benefits: [
      "Looks, feels and chews like a natural tooth",
      "Preserves the jawbone where the root once was",
      "No grinding down of healthy neighbouring teeth",
    ],
    idealFor:
      "Anyone missing one or more teeth who wants a fixed, long-term answer rather than a removable one.",
  },
  {
    slug: "root-canal",
    name: "Root Canal Treatment",
    category: "restore",
    tagline: "The tooth-saver with an unfair reputation.",
    description:
      "Done with modern rotary instruments and proper anaesthesia, a root canal feels closer to a long filling than to the stories you've heard. The infection goes; the tooth stays.",
    benefits: [
      "Removes the source of the pain, not just the symptom",
      "Keeps your natural tooth — always the first choice",
      "Typically completed in [one to two] visits",
    ],
    idealFor:
      "Deep decay, lingering sensitivity, or anyone told a painful tooth 'has to come out' — often it doesn't.",
  },
  {
    slug: "crowns",
    name: "Dental Crowns",
    category: "restore",
    tagline: "Armour for a tooth that has been through a lot.",
    description:
      "A precisely fitted cap that restores a cracked, root-treated or heavily filled tooth to full strength — shaded and shaped so it disappears among its neighbours.",
    benefits: [
      "Protects a weakened tooth from fracture",
      "Shade-matched so it doesn't announce itself",
      "Restores comfortable, confident chewing",
    ],
    idealFor:
      "Teeth after root canal treatment, large fillings, cracks, or significant wear.",
  },
  {
    slug: "bridges",
    name: "Dental Bridges",
    category: "restore",
    tagline: "A fixed answer to the gap in between.",
    description:
      "A row of connected crowns anchored on the teeth either side of a gap. No surgery, no removable plate — a fixed restoration completed in a handful of visits.",
    benefits: [
      "Fixed in place — nothing to take out at night",
      "Restores chewing and keeps neighbouring teeth from drifting",
      "A proven alternative where an implant isn't the right fit",
    ],
    idealFor:
      "One or more missing teeth with healthy teeth on either side of the space.",
  },

  // ── Enhance ──────────────────────────────────────────────────────────
  {
    slug: "smile-makeover",
    name: "Smile Makeover",
    category: "enhance",
    tagline: "Your smile, redesigned on purpose.",
    description:
      "Not one procedure but a plan: the deliberate sequence of treatments — alignment, shaping, shade — designed as a whole before anything begins, with the finished result agreed on paper first.",
    benefits: [
      "One coherent design, not piecemeal fixes",
      "Sequenced properly so each step supports the next",
      "Full written plan and cost before you commit",
    ],
    idealFor:
      "Anyone unhappy with their smile as a whole and tired of guessing which treatment they actually need.",
  },
  {
    slug: "veneers",
    name: "Dental Veneers",
    category: "enhance",
    tagline: "Fine porcelain. Quiet transformation.",
    description:
      "Wafer-thin porcelain shells bonded to the front of the teeth to correct shape, chips, gaps and colour. Done well, veneers don't look like veneers — they look like luck.",
    benefits: [
      "Corrects shape, small gaps and stubborn discolouration at once",
      "Porcelain resists staining better than natural enamel",
      "Designed tooth by tooth — never a one-size 'set'",
    ],
    idealFor:
      "Front teeth with chips, uneven edges or colour that whitening can't fix — and people who want 'natural', not 'done'.",
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    category: "enhance",
    tagline: "Brighter — without the horror stories.",
    description:
      "Professionally supervised whitening that lifts years of tea, coffee and time. We assess your enamel first and are honest about the result you can expect — including the possibility of temporary sensitivity.",
    benefits: [
      "Supervised by a dentist, not a salon attendant",
      "Enamel assessed first; sensitivity managed honestly",
      "Noticeable, natural-looking brightness — not neon",
    ],
    idealFor:
      "Healthy teeth dulled by tea, coffee or age. Often the single highest-impact cosmetic step.",
  },
  {
    slug: "cosmetic-dentistry",
    name: "Cosmetic Bonding & Contouring",
    category: "enhance",
    tagline: "Small corrections, disproportionate confidence.",
    description:
      "Chips smoothed, small gaps closed, edges evened — often in a single visit, often with no drilling at all. The least invasive corner of cosmetic dentistry, and the most underrated.",
    benefits: [
      "Frequently completed in one appointment",
      "Little to no removal of natural tooth",
      "Immediate, visible refinement",
    ],
    idealFor:
      "Minor chips, rough edges and small gaps that catch your eye in photographs.",
  },

  // ── Align ────────────────────────────────────────────────────────────
  {
    slug: "braces",
    name: "Braces",
    category: "align",
    tagline: "Classic, reliable alignment — at any age.",
    description:
      "Fixed orthodontics remain the most dependable way to move teeth, and modern brackets are smaller and kinder than the ones you remember from school. Reviewed and adjusted on a planned schedule.",
    benefits: [
      "Handles complex alignment that aligners can't",
      "Predictable, continuously monitored progress",
      "Options from classic metal to [ceramic / low-visibility] brackets",
    ],
    idealFor:
      "Teens and adults with crowding, rotation or bite issues that need dependable mechanics.",
  },
  {
    slug: "clear-aligners",
    name: "Clear Aligners",
    category: "align",
    tagline: "Straighter teeth. Invisible process.",
    description:
      "A series of clear, removable trays that move teeth gradually — no brackets, no wires, nothing to see in meetings or photographs. You change trays at home; we monitor the plan.",
    benefits: [
      "Nearly invisible in daily life",
      "Removable for eating, brushing and occasions",
      "Digital plan — see the projected result before you start",
    ],
    idealFor:
      "Adults and older teens with mild to moderate crowding who'd rather nobody knew.",
  },

  // ── Everyday & urgent ────────────────────────────────────────────────
  {
    slug: "scaling-polishing",
    name: "Scaling & Polishing",
    category: "everyday",
    tagline: "The reset your gums have been asking for.",
    description:
      "Professional removal of the tartar that brushing can't reach, finished with a polish. The most routine visit we do — and the one that quietly prevents the expensive ones.",
    benefits: [
      "Healthier gums, fresher breath, less bleeding",
      "Early warning on problems while they're still small",
      "Quick, comfortable, ultrasonic-based cleaning",
    ],
    idealFor:
      "Everyone, roughly every six months — and anyone noticing bleeding gums or persistent bad breath.",
  },
  {
    slug: "children-dentistry",
    name: "Children's Dentistry",
    category: "everyday",
    tagline: "First visits that don't create a fear of second ones.",
    description:
      "A child's first dental memories decide the next forty years of their dental health. First visits here are short, unforced and mostly about trust — the dentistry follows when they're ready.",
    benefits: [
      "Gentle pacing — nothing is forced on a frightened child",
      "Prevention first: check-ups, [fluoride, fissure sealants]",
      "Parents stay in the room, always",
    ],
    idealFor:
      "Children from their first teeth onward — especially ones (or parents) who are nervous.",
  },
  {
    slug: "wisdom-tooth-removal",
    name: "Wisdom Tooth Removal",
    category: "everyday",
    tagline: "When the last tooth causes the most trouble.",
    description:
      "Impacted or troublesome wisdom teeth, assessed with proper imaging and removed under thorough local anaesthesia — with honest advice first about whether yours actually needs to go.",
    benefits: [
      "Imaging-led assessment before any decision",
      "Thorough anaesthesia and unhurried surgical time",
      "Clear written aftercare, and a direct line if you're worried",
    ],
    idealFor:
      "Recurring pain, swelling or food-trapping at the back of the mouth — or a referral in hand.",
  },
  {
    slug: "emergency-dentistry",
    name: "Emergency Dentistry",
    category: "everyday",
    tagline: "Pain doesn't book ahead. We keep room for it.",
    description:
      "Severe toothache, swelling, a broken tooth, a knocked-out tooth — message us first thing and we will fit you in [the same day where possible]. Priority one is out of pain; the plan comes after.",
    benefits: [
      "[Same-day] slots held for genuine emergencies",
      "Pain managed first, decisions made calmly after",
      "WhatsApp triage — send a photo, get honest guidance",
    ],
    idealFor:
      "Anyone in pain right now. If you're unsure whether it's an emergency, message us — that's what it's for.",
  },
];

export const TREATMENT_COUNT = TREATMENTS.length;
