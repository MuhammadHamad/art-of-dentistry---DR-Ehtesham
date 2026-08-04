"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { SITE } from "@/lib/site";

/**
 * Performance-first map: a styled facade until the visitor asks for the
 * real thing. Keeps Google's iframe (and its ~1MB of JS) off the critical
 * path and out of Lighthouse's way.
 */
export function MapEmbed() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative h-full min-h-[24rem] overflow-hidden rounded-3xl border border-line shadow-soft">
      {loaded ? (
        <iframe
          title={`Map showing the location of ${SITE.legalName} in ${SITE.city}`}
          src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.mapsEmbedQuery)}&output=embed`}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <div className="absolute inset-0">
          {/* abstract street-map artwork */}
          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 800 560"
            preserveAspectRatio="xMidYMid slice"
          >
            <rect width="800" height="560" fill="#F0EBDD" />
            {/* street grid */}
            <g stroke="#C9C2AF" strokeWidth="2">
              <path d="M 0 140 H 800 M 0 300 H 800 M 0 440 H 800" />
              <path d="M 160 0 V 560 M 380 0 V 560 M 620 0 V 560" />
            </g>
            <g stroke="#D8D2C0" strokeWidth="1">
              <path d="M 0 80 H 800 M 0 220 H 800 M 0 380 H 800 M 0 500 H 800" />
              <path d="M 80 0 V 560 M 270 0 V 560 M 500 0 V 560 M 720 0 V 560" />
            </g>
            {/* main road */}
            <path
              d="M 0 310 Q 260 280 430 300 T 800 260"
              stroke="#B5975A"
              strokeWidth="4"
              fill="none"
              opacity="0.65"
            />
            {/* park block */}
            <rect x="500" y="330" width="120" height="90" rx="10" fill="#2F7A5B" opacity="0.16" />
            {/* pin shadow ring */}
            <circle cx="400" cy="288" r="36" fill="#0C1826" opacity="0.07" />
            <circle cx="400" cy="288" r="18" fill="#0C1826" opacity="0.1" />
          </svg>

          {/* pin */}
          <span className="absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-[80%] items-center justify-center rounded-full bg-[#0C1826] text-[#C4A76B] shadow-lift">
            <MapPin aria-hidden="true" className="size-5" strokeWidth={1.8} />
          </span>

          {/* actions */}
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center gap-3 bg-gradient-to-t from-black/25 to-transparent p-6 sm:flex-row sm:justify-center">
            <button
              type="button"
              onClick={() => setLoaded(true)}
              className="inline-flex h-11 items-center rounded-full bg-white px-5 text-[0.88rem] font-medium text-[#101E30] shadow-lift transition-transform duration-200 hover:-translate-y-px"
            >
              Load interactive map
            </button>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center rounded-full border border-white/70 bg-white/15 px-5 text-[0.88rem] font-medium text-white backdrop-blur-md transition-colors duration-200 hover:bg-white/25"
            >
              Open in Google Maps
            </a>
          </div>

          <p className="absolute top-4 left-4 rounded-full bg-white/78 px-3 py-1 text-[0.7rem] font-medium text-[#54606E] backdrop-blur-md">
            Map loads on request — nothing tracks you until you ask it to
          </p>
        </div>
      )}
    </div>
  );
}
