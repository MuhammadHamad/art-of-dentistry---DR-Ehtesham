# Art of Dentistry — Design & Brand Strategy

This document is the thinking behind the website. Every decision in the codebase traces back
to a line here. Read it before changing copy, colors, or layout — the site is a system, not
a collection of sections.

---

## 1. Brand Strategy

### The core insight

People in Peshawar do not avoid dentists because they don't care about their teeth.
They avoid dentists because of three specific fears:

1. **Fear of pain** — usually from one bad experience, often decades old.
2. **Fear of hidden cost** — treatment that starts before a price is ever mentioned.
3. **Fear of hygiene** — quiet doubt about how instruments are cleaned.

Almost every dental website ignores these fears and shouts "your smile is our priority."
This brand does the opposite: it **names the fears and dismantles them, one by one, calmly.**

### Positioning statement

> Art of Dentistry is the dental practice for people who want to be treated like adults:
> told what's happening, told what it costs, and treated gently — in a clinic that looks
> and behaves like the standard of care they'd expect abroad.

### Brand idea

The clinic's own name is the thesis: **dentistry practiced as a craft.**
A craftsman is unhurried, precise, honest about materials and price, and proud of finish
work no one else will ever see. Every section of the site expresses one facet of craft:
precision, patience, transparency, restraint.

### Brand personality

| Is | Is not |
|---|---|
| Calm, assured, quiet | Loud, salesy, urgent |
| Precise, specific | Vague, superlative-heavy |
| Warm, human, plain-spoken | Clinical-cold or cutesy |
| Confident enough to under-claim | Boastful ("best in Pakistan!") |

### Voice rules (used for all copy)

- Short sentences. One idea each.
- Name the fear before answering it. ("You've heard root canal stories. Here's ours.")
- Concrete beats abstract: "a written estimate before we begin" beats "transparent pricing."
- No exclamation marks. No "!", no "😁", no "state-of-the-art" without saying *which* state.
- Honesty is the luxury signal: "Whitening can cause temporary sensitivity" builds more
  trust than "pain-free whitening guaranteed."
- Never fabricate. Anything unverified is a bracketed placeholder — see §10.

---

## 2. Color Palette

The palette is "private clinic in a converted townhouse," not "hospital corridor."
Warm paper tones, ink-dark navy, and one metal: muted gold. Never a bright blue, never a
saturated gradient.

### Light theme

| Token | Value | Role |
|---|---|---|
| `--bg` | `#FAF8F4` | Page — warm white, like good paper stock |
| `--bg-soft` | `#F2EEE4` | Ivory bands — alternating section rhythm |
| `--surface` | `#FFFFFF` | Cards |
| `--ink` | `#101E30` | Deep navy — all primary text (not black: black is harsh) |
| `--ink-soft` | `#54606E` | Slate — body copy, secondary text |
| `--navy` | `#0C1826` | Dark sections (Technology, Booking, Footer) |
| `--gold` | `#B5975A` | Accent — eyebrows, rules, icons, focus rings |
| `--gold-strong` | `#8A7140` | Gold that passes AA as small text on light bg |
| `--emerald` | `#2F7A5B` | Success, "open now", WhatsApp affordances |

### Dark theme

Same relationships, inverted with care: page `#070D16`, cards `#0E1826`, text `#EDE9DF`
(warm ivory, not white), gold brightens to `#C9AD75` because dark grounds swallow muted
metals. Dark sections become slightly *lighter* than the page so the rhythm survives.

### Rules

- Gold is **never** a large fill. It is jewelry: hairlines, eyebrows, icons, one word in a
  headline. Overused gold reads as mustard; rationed gold reads as money.
- Emerald appears only where something is alive or affirmative: open hours, success states,
  WhatsApp. Scarcity keeps its meaning.
- Every text/background pair was checked for WCAG AA (≥ 4.5:1 body, ≥ 3:1 large text).

---

## 3. Typography System

| Role | Face | Why |
|---|---|---|
| Display / headings | **Manrope** (600–800) | Geometric warmth; tight tracking at display sizes reads engineered, like Apple's SF at weight |
| Accent words | **Fraunces** italic (350–500) | The single "art" gesture — an old-style serif italic inside sans headlines. It is the typographic voice of the clinic's name |
| Body / UI | **Inter** | Invisible excellence; superb at 15–18px |

### Scale & rules

- Hero display: `clamp(2.9rem → 5.2rem)`, tracking `-0.035em`, line-height ~1.05.
- Section titles: `clamp(2rem → 3rem)`, `text-balance` so lines break like a designer set them.
- Body: 16–18px, line-height 1.7, max measure ~65ch. Long-form copy never spans full width.
- Eyebrows: 11–12px, uppercase, letter-spacing `0.22em`, gold — the "engraved plaque" motif
  that recurs through the whole site and stitches it together.
- Numbers use `tabular-nums` so animated counters don't jitter.
- Fraunces italic is rationed to roughly one phrase per screen. More would be perfume-ad.

---

## 4. UX Reasoning

### The five-second test

Within one viewport a visitor must absorb, without reading carefully:
trustworthy (rating badge, "accepting new patients" pulse) · premium (whitespace, type,
restraint) · competent (specific language, precise UI) · easy to book (two CTAs + floating
WhatsApp) · modern (dark-mode aware, buttery motion).

### Audience → design responses

| Audience | Design response |
|---|---|
| Fearful patients | A dedicated anxiety protocol card; "first visit is a conversation"; FAQ answers that answer honestly |
| High-income professionals | Editorial layout, no clutter, transparent-pricing section, WhatsApp-first booking |
| Parents | Children's dentistry treatment card, kid-specific FAQ, testimonial from a parent |
| Cosmetic patients | Smile gallery with before/after interaction, veneers/makeover copy about restraint ("don't look done") |
| Emergency cases | Emergency signposted in hero microcopy, treatments, FAQ, and floating CTA — reachable from anywhere in one tap |

### Why a single page

A local clinic's site has one job: create enough trust to produce one WhatsApp message.
Every extra route is a place to lose momentum. One page = the narrative controls pacing,
the booking CTA is always one scroll away, and nothing 404s. The build is fully
componentized, so any section can be promoted to its own route later without rework.

### Narrative arc (section order is an argument, not a list)

1. **Hero** — emotional claim + proof chips. 2. **Philosophy** — why we exist (fear #1–3 named).
3. **Why us** — six proofs, shown not listed. 4. **Treatments** — what we do, explorable.
5. **Technology** (dark) — the equipment argument. 6. **Experience** — your first visit,
minute by minute (fear killer). 7. **Gallery** — evidence. 8. **Doctors** — who's behind it.
9. **Stories** — patients confirm it. 10. **Pricing clarity** — the money conversation, in
the open. 11. **FAQ** — remaining objections. 12. **Booking** (dark) — the ask, made tiny.
13. **Location** — remove the last friction. 14. **Footer** — recap + trust plumbing.

Trust is built in exactly the order a skeptical patient's questions arrive.

### WhatsApp-first

In Pakistan, WhatsApp *is* the booking system. The form does not pretend to have a backend:
it composes a pre-filled WhatsApp message (with tel: fallback), which is both honest and
genuinely the lowest-friction channel for this market.

---

## 5. Sitemap

```
/                     Single-page experience
├── #top              Hero + trust metrics
├── #philosophy       About / why the clinic exists
├── #why              Why choose us (bento)
├── #treatments       14 treatments, 5 categories, expandable
├── #technology       Equipment & sterilization (dark)
├── #experience       First-visit journey + anxiety protocol
├── #gallery          Smile gallery (before/after slider)
├── #doctors          Doctor profiles
├── #stories          Testimonials + Google rating
├── #pricing          Transparent pricing & insurance
├── #faq              FAQ (accordion, schema.org)
├── #book             Booking (WhatsApp composer)
├── #visit            Location, hours, map
└── footer            Recap, links, legal
/not-found            Styled 404
+ robots.ts · sitemap.ts · manifest.ts · opengraph-image.tsx · JSON-LD (Dentist + FAQPage)
```

---

## 6. Wireframe Rationale (the non-obvious calls)

- **Hero**: asymmetric 7/5 split. Copy left (F-pattern start), tall 4:5 image frame right —
  portrait framing signals "photography direction exists." Two floating glass cards (Google
  rating, accepting-patients pulse) borrow a pattern users already trust from product UI.
  A stats bar closes the viewport so the fold ends on proof.
- **Why us is a bento, not icon cards**: unequal cell sizes let importance drive hierarchy —
  sterilization and pain management get the large cells because they answer the two biggest
  fears. Icon-card grids flatten everything to equal weight, which is a lie.
- **Treatments is an explorer, not a list**: 14 services as static cards would be a wall. Category
  filter + expand-in-place (FLIP animation) keeps users in context, and each expanded card
  carries its own "Book this" CTA that pre-fills the booking form — shortest path from
  interest to action.
- **Technology and Booking are dark sections**: the page breathes light–ivory–light, then
  drops to navy exactly twice — once for authority (equipment), once for commitment
  (booking). Dark = focus. Three dark moments would be theater; two is pacing.
- **Journey is horizontal steps with a rail**: time reads left→right; each step is small
  enough to feel short. The anxiety card sits directly beneath it — the user who most needs
  it has just imagined the visit.
- **Gallery uses a draggable divider**: the before/after comparison is the single most
  persuasive cosmetic artifact; making it tactile turns evidence into play. Keyboard
  accessible (arrow keys) and clearly labeled as placeholder art until real, consented
  photos exist.
- **Booking looks like SaaS onboarding**: three tiny steps ("tell us → we confirm → walk
  in"), four fields, inline validation, success state. The form's only job is to make the
  ask feel smaller than a phone call.

---

## 7. Design System

- **Spacing**: sections `py-24 → py-36`; container `max-w-[76rem]`; a consistent 8-pt
  rhythm. Whitespace is the primary luxury material — nothing sits closer than it must.
- **Radii**: cards `24–28px`, buttons full-round (pill), image frames `32px`. One family,
  no mixing sharp and soft.
- **Borders**: 1px hairlines at ~8–10% ink opacity everywhere. Hairlines, not shadows, do
  most separation work (the Apple/Stripe move).
- **Shadows**: two tokens only — `soft` (ambient, barely there) and `lift` (hover). Shadows
  are tinted navy, never gray, so they feel like depth not dirt.
- **Glass**: `backdrop-blur` + 70% surface + hairline, used only for elements that float
  over imagery (nav, floating cards, chips). Never for whole sections.
- **Motion** (Framer Motion): one easing everywhere — `cubic-bezier(0.22, 1, 0.36, 1)`
  (fast start, long settle: the "expensive" curve). Reveals: 16px rise + fade + 4px blur,
  0.7s, once. Staggers 60–90ms. Counters animate on view. Hover: −2px translate + lift
  shadow, 200ms. Everything respects `prefers-reduced-motion` and renders static.
- **Focus**: 2px gold ring, offset 2px, on every interactive element. Accessibility styled
  as jewelry rather than bolted on.
- **Icons**: Lucide at 1.5px stroke, 16–20px, always accompanied by text. Icons support;
  typography leads.

---

## 8. Copywriting Direction (specimens)

Headline logic: name the brand promise, not the industry. The hero headline is the clinic's
name completed as a sentence — "Dentistry, practiced as an art." — with the serif italic
carrying the word the brand is named for.

Fear-inversion specimens used across the site:

- "Most first visits here are simply a conversation."
- "The price is part of the plan — you'll approve both before we begin."
- "Every instrument that enters your mouth is either sterilized in front of protocol or
  opened from a sealed pouch at the chair."
- "If you're nervous, tell us. You won't be the first."
- "No lectures. You haven't been to a dentist in years? You're our most common patient."

All statistics, credentials, equipment names, addresses, phone numbers, hours, insurance
panels and patient names are **placeholders** — see §10.

---

## 9. Component Hierarchy

```
app/layout.tsx                 fonts, theme script, metadata, JSON-LD
app/page.tsx                   section assembly (server component)
lib/
  site.ts                      every real-world fact in ONE file (phone, address, hours…)
  data/                        treatments, faqs, testimonials, doctors, journey, technology
  motion.ts · utils.ts · schema.ts
components/
  ui/        Button · Container · SectionHeading · Chip · Stars · Ph (placeholder renderer)
  motion/    Reveal · Stagger · CountUp · Parallax
  art/       Monogram · ArtFrame (abstract doctor-portrait placeholder) · PhotoFrame (real, captioned stock photography)
  layout/    Navbar · Footer · ScrollProgress · FloatingCta · ThemeToggle
  sections/  Hero · Philosophy · WhyUs · Treatments · Technology · Journey · Gallery
             · Doctors · Testimonials · Pricing · Faq · Booking · Location
```

Server components by default; `"use client"` only at interactive leaves (nav, explorer,
slider, form, motion wrappers) to keep the JS payload small.

---

## 10. Placeholder & Ethics Protocol

Nothing on this site invents a fact. The rule:

- Any unverified fact is written as `[bracketed text]` in `lib/site.ts` or `lib/data/*`.
- The `<Ph>` renderer displays bracketed content with a dotted gold underline and a
  tooltip ("Placeholder — replace with verified detail"), so the demo looks intentional
  while remaining honest.
- `README.md` carries the full replacement checklist plus a "claims to confirm with the
  clinic" list (sterilization protocol, emergency availability, payment methods…).
- Where a fact *is* verifiable — the clinic's real Google Maps listing gives an exact
  address, a 5.0 rating and a review count — it's used as-is, brackets removed, and
  `aggregateRating` in `lib/schema.ts` includes it automatically. The rule isn't
  "never claim a number," it's "never claim an unverified one."
- Photography (`components/art/photo-frame.tsx`) is real, relevant, licensed stock —
  not this clinic's own interior or people — captioned honestly ("Representative
  interior/consultation/…") rather than left generic. The one exception: named doctors'
  portraits stay an abstract illustration (`ArtFrame`), because attaching a stranger's
  face to a real, specific person's name would misrepresent who they are — a different
  and more serious problem than an unbranded interior shot. The smile-gallery slider
  uses one real photo twice, with a CSS filter simulating the "before" state, so it can
  never be read as two different people's real outcomes.
- No fabricated reviews in schema.org markup: `aggregateRating` only appears when the
  underlying figures are verified (see above), never invented. Testimonials remain
  marked as illustrative samples in code and attributed to `[Patient name]` — a real
  address doesn't make up for a fabricated quote.
- Copy avoids medical guarantees ("painless", "permanent", "100%") in favor of honest
  framing — which is also simply better luxury copywriting.
