import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, Manrope } from "next/font/google";
import { dentistSchema, faqSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Dental Clinic in ${SITE.city} | Implants, Braces, Cosmetic Dentistry`,
    template: `%s | ${SITE.name}, ${SITE.city}`,
  },
  description: `${SITE.name} is a private dental clinic in ${SITE.city} for careful, modern dentistry — implants, root canals, braces, aligners, whitening and cosmetic treatment, with transparent pricing and a gentle, unhurried approach.`,
  keywords: [
    `dentist ${SITE.city}`,
    `dental clinic ${SITE.city}`,
    `best dentist in ${SITE.city}`,
    "dental implants",
    "root canal treatment",
    "braces",
    "clear aligners",
    "teeth whitening",
    "cosmetic dentistry",
    "emergency dentist",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Dentistry, practiced as an art`,
    description: `Careful, modern dental care in ${SITE.city}. Transparent pricing, gentle technique, honest advice — most first visits are simply a conversation.`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Dental Clinic in ${SITE.city}`,
    description: `Careful, modern dental care in ${SITE.city}. Transparent pricing, gentle technique, honest advice.`,
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "healthcare",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF8F4" },
    { media: "(prefers-color-scheme: dark)", color: "#070D16" },
  ],
  width: "device-width",
  initialScale: 1,
};

/** Applies the saved (or system) theme before first paint — no flash. */
const themeScript = `(function(){try{var t=localStorage.getItem("aod-theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;document.documentElement.classList.toggle("dark",d);}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema()) }}
        />
      </head>
      <body
        className={`${manrope.variable} ${inter.variable} ${fraunces.variable} font-sans antialiased`}
      >
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:text-bg"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
