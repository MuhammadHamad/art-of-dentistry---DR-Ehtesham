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

### Already verified (pulled from the clinic's real Google Maps listing)

- [x] Street address, area, postal code (`SITE.address`) — "Office 55, 2nd
      Floor, Uhad Tower, University Road, Shaheen Town, Peshawar, 25120"
- [x] Google rating & review count (`SITE.metrics.rating/reviewCount`) —
      **5.0 from 10 reviews** at the time of writing. This is a small review
      count — re-check it periodically and update the figure (and the
      `aggregateRating` it feeds in `lib/schema.ts`) as it grows.

### The checklist

**Identity & contact** (`lib/site.ts`)
- [ ] Real phone number (`phoneDisplay`, `phoneIntl`, `whatsappIntl` — intl digits, no `+`)
- [ ] Email address
- [ ] Nearby landmark (street address is already verified — see above)
- [ ] Opening hours (all three rows)
- [ ] Production domain (`url`) — also referenced by sitemap/robots/OG
- [ ] Instagram / Facebook URLs (`socials[].href`)

**Trust figures** (`lib/site.ts → metrics`)
- [ ] Years in practice, patient-visit count (also mirrored in `components/sections/hero.tsx → STATS`) — rating/review count are already verified, see above

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
- `aggregateRating` is now included automatically (rating/review count are
  verified — see above); it disappears on its own if those ever revert to
  bracketed placeholders. `openingHoursSpecification` is still omitted until
  hours are confirmed.

## Photography

Real photography is used throughout (`public/images/*.jpg`) — free, licensed
stock (Pexels, free for commercial use, no attribution required) chosen to be
genuinely relevant to each section, not the clinic's own photos. Each is
captioned honestly on-site ("Representative interior/consultation/…") via
`components/art/photo-frame.tsx`, so nothing implies it depicts this specific
clinic. Swap the file in `public/images/` (keep the same filename, or update
the `src` in the section component) once real, consented clinic photography
exists:

| File | Used in | Shows |
|---|---|---|
| `hero-clinic.jpg` | Hero | A bright, minimal treatment room |
| `philosophy-consultation.jpg` | Philosophy | A dentist talking through a plan with a patient |
| `comfort-child.jpg` | Why Us → Comfort cell | A relaxed child in the chair |
| `technology-operatory.jpg` | Technology | A fully equipped operatory |
| `experience-calm.jpg` | Experience → anxiety-protocol card | A calm, reclined patient |
| `gallery-smile-reveal.jpg` | Smile gallery | One photo; the "before" state is a CSS filter (desaturate/sepia/darken) on the *same* image, not a second real outcome — see the comment in `components/sections/gallery.tsx` |

**Doctors are the one exception.** Their portrait slot stays an abstract
illustration (`components/art/art-frame.tsx`) rather than a stock photo,
because attaching a stranger's face to a real, named person (Dr. Ehtesham,
the associate doctor) would misrepresent who they are. Replace it with an
actual verified portrait, not stock photography, when one is available.

## Notable engineering details

- **Dark mode**: class strategy + no-flash inline script; toggle persists to
  `localStorage("aod-theme")`; both themes are designed, not inverted.
- **Booking**: validates name + Pakistani mobile format, then opens
  `wa.me/<number>` with a structured message. Treatment cards prefill the form
  via a `aod:prefill-treatment` CustomEvent.
- **Map**: the real, live Google Maps embed for the clinic loads with the
  section (`components/sections/map-embed.tsx`) — no click required.
- **SEO**: metadata API, OG image generated at build (`app/opengraph-image.tsx`),
  `robots.ts`, `sitemap.ts`, JSON-LD (`Dentist` + `FAQPage`).
- **Accessibility**: skip link, landmarks, labeled controls, `aria-expanded`
  accordions, keyboard-operable compare slider (arrow keys), gold focus rings,
  `prefers-reduced-motion` renders everything static.
- **Performance**: fully static prerender, self-hosted fonts, responsive
  `next/image` throughout.
