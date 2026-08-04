import { SITE } from "@/lib/site";
import { TREATMENTS } from "@/lib/data/treatments";
import { FAQS } from "@/lib/data/faqs";
import { stripPh } from "@/lib/utils";

/**
 * JSON-LD structured data.
 *
 * Deliberately conservative: no openingHours until the clinic confirms them,
 * and aggregateRating is included only because SITE.metrics.rating/reviewCount
 * are verified figures (pulled from the clinic's own Google Maps listing) —
 * publishing invented review data in schema markup violates Google's
 * guidelines and this project's ethics protocol. If those metrics ever
 * revert to bracketed placeholders, the rating is automatically omitted.
 * TODO before launch: replace remaining placeholders (phone, email, hours)
 * via lib/site.ts — these builders strip the [brackets] automatically.
 */

const hasVerifiedRating =
  !SITE.metrics.rating.includes("[") && !SITE.metrics.reviewCount.includes("[");

export function dentistSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${SITE.url}#clinic`,
    name: SITE.legalName,
    url: SITE.url,
    description: SITE.description,
    slogan: SITE.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: stripPh(SITE.address.street),
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: "PK",
    },
    telephone: stripPh(SITE.phoneDisplay),
    email: stripPh(SITE.email),
    hasMap: SITE.mapsUrl,
    sameAs: [SITE.mapsUrl],
    priceRange: "PKR",
    medicalSpecialty: "Dentistry",
    ...(hasVerifiedRating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: SITE.metrics.rating,
        reviewCount: SITE.metrics.reviewCount,
      },
    }),
    availableService: TREATMENTS.map((t) => ({
      "@type": "MedicalProcedure",
      name: t.name,
      description: stripPh(t.description),
    })),
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: stripPh(faq.question),
      acceptedAnswer: {
        "@type": "Answer",
        text: stripPh(faq.answer),
      },
    })),
  };
}
