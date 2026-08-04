import { SITE } from "@/lib/site";

/** The live Google Maps embed for the clinic — loads with the section. */
export function MapEmbed() {
  return (
    <div className="relative h-full min-h-[24rem] overflow-hidden rounded-3xl border border-line shadow-soft">
      <iframe
        title={`Map showing the location of ${SITE.legalName} in ${SITE.city}`}
        src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.mapsEmbedQuery)}&output=embed`}
        className="absolute inset-0 h-full w-full border-0 grayscale-[15%]"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
