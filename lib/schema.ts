import { SITE } from "@/lib/site";
import { TREATMENTS } from "@/lib/data/treatments";
import { FAQS } from "@/lib/data/faqs";
import { stripPh } from "@/lib/utils";

/**
 * JSON-LD structured data.
 *
 * Deliberately conservative: no aggregateRating and no openingHours until the
 * clinic supplies verified figures (publishing invented review data in schema
 * markup violates Google's guidelines and this project's ethics protocol).
 * TODO before launch: replace placeholder address/phone via lib/site.ts —
 * these builders strip the [brackets] automatically.
 */

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
      addressCountry: "PK",
    },
    telephone: stripPh(SITE.phoneDisplay),
    email: stripPh(SITE.email),
    hasMap: SITE.mapsUrl,
    sameAs: [SITE.mapsUrl],
    priceRange: "PKR",
    medicalSpecialty: "Dentistry",
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
