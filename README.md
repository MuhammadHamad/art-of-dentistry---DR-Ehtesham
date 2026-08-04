# Art of Dentistry — Peshawar

A premium single-page website for **Art of Dentistry Dental Clinic**, Peshawar.
Design language: quiet luxury — deep navy, warm ivory, muted gold, editorial
typography, Apple-calm motion. The full brand strategy, palette, UX reasoning
and copywriting rationale live in [DESIGN.md](DESIGN.md).

## Stack

- **Next.js 15** (App Router, fully static output) + **TypeScript**
- **Tailwind CSS v4** (design tokens in `app/globals.css`)
- **Framer Motion** (one easing curve site-wide, reduced-motion safe)
- **Lucide** icons · `next/font` (Manrope, Inter, Fraunces)
- No backend: booking composes a pre-filled **WhatsApp** message

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (all routes prerender statically)
```

## How content is organised

Every editable fact lives in two places only:

| File | Contains |
|---|---|
| `lib/site.ts` | Name, phone, WhatsApp, email, address, hours, metrics, socials, anchors |
| `lib/data/*.ts` | Treatments, FAQs, testimonials, doctors, first-visit journey, equipment |

Sections (`components/sections/*`) read from these files — you should almost
never need to edit a component to change content.

## Replacing placeholders (IMPORTANT — before going live)

Anything in **`[square brackets]`** in `lib/site.ts` or `lib/data/*` is an
unverified placeholder. On the site it renders with a **dotted gold underline**
and a tooltip so the demo stays honest. Replace the bracketed text (brackets
included) and the marker disappears automatically.

Find them all with:

```bash
grep -rn "\[" lib/site.ts lib/data
```

### The checklist

**Identity & contact** (`lib/site.ts`)
- [ ] Real phone number (`phoneDisplay`, `phoneIntl`, `whatsappIntl` — intl digits, no `+`)
- [ ] Email address
- [ ] Street address, area, landmark
- [ ] Opening hours (all three rows)
- [ ] Production domain (`url`) — also referenced by sitemap/robots/OG
- [ ] Instagram / Facebook URLs (`socials[].href`)

**Trust figures** (`lib/site.ts → metrics`)
- [ ] Google rating & review count (copy the live values; update occasionally)
- [ ] Years in practice, patient-visit count (also mirrored in `components/sections/hero.tsx → STATS`)

**People** (`lib/data/doctors.ts`)
- [ ] Dr. Ehtesham's surname, degrees, university, postgraduate qualification, years
- [ ] Second doctor — fill in or delete the template entry

**Clinical claims to confirm with the clinic** — these are written as the
intended standard of care; confirm each is true in practice or soften it:
- [ ] Sterilisation protocol (autoclave class, sealed pouches opened at chair) — `lib/data/technology.ts`, `components/sections/why-us.tsx`, FAQ
- [ ] Equipment list — every item in `lib/data/technology.ts`
- [ ] Same-day emergency availability — hero, treatments, FAQ, location
- [ ] Payment methods & insurance/corporate panels — `components/sections/pricing.tsx`, FAQ
- [ ] Root canal visit counts, whitening claims — `lib/data/treatments.ts`, FAQ

**Social proof** (`lib/data/testimonials.ts`)
- [ ] Replace ALL sample quotes with real Google reviews (verbatim, with each
      patient's permission). Never launch with the samples.

**Schema** (`lib/schema.ts`)
- `aggregateRating` and `openingHoursSpecification` are deliberately omitted —
  add them only once real values exist.

## Replacing placeholder artwork

Photography slots are rendered by `components/art/art-frame.tsx` as abstract
brand-palette compositions, each labelled on-site. Swap each `<ArtFrame …>` for
a `next/image` `<Image>` when real photos exist:

| Slot | Where | Suggested shot |
|---|---|---|
| `clinic` (4:5) | Hero | Signature interior — reception or operatory, natural light |
| `portrait` ×2 (4:5) | Doctors | Consistent portraits, same background & light |
| `smile-before` / `smile-after` | Gallery slider | Consented before/after cases, identical framing |
| Map facade | Location | Loads the real Google embed on click — no change needed |

## Notable engineering details

- **Dark mode**: class strategy + no-flash inline script; toggle persists to
  `localStorage("aod-theme")`; both themes are designed, not inverted.
- **Booking**: validates name + Pakistani mobile format, then opens
  `wa.me/<number>` with a structured message. Treatment cards prefill the form
  via a `aod:prefill-treatment` CustomEvent.
- **Map**: click-to-load facade — Google's iframe never touches first paint.
- **SEO**: metadata API, OG image generated at build (`app/opengraph-image.tsx`),
  `robots.ts`, `sitemap.ts`, JSON-LD (`Dentist` + `FAQPage`).
- **Accessibility**: skip link, landmarks, labeled controls, `aria-expanded`
  accordions, keyboard-operable compare slider (arrow keys), gold focus rings,
  `prefers-reduced-motion` renders everything static.
- **Performance**: fully static prerender, inline SVG art (zero image
  requests), self-hosted fonts, ~183 kB first-load JS.
