import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Wordmark } from "@/components/art/monogram";
import { Ph } from "@/components/ui/ph";
import { ANCHORS, NAV_LINKS, SITE } from "@/lib/site";
import { TREATMENTS } from "@/lib/data/treatments";

const footerTreatments = TREATMENTS.slice(0, 6);

export function Footer() {
  return (
    <footer className="bg-navy text-on-navy">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Wordmark dark />
            <p className="mt-5 max-w-xs text-[0.92rem] leading-[1.7] text-on-navy-soft">
              A quieter kind of dental clinic in {SITE.city} — careful work,
              honest advice, modern tools.
            </p>
            <div className="mt-6 flex gap-3">
              {SITE.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  title={`${social.label} — link pending: ${social.note}`}
                  className="inline-flex h-9 items-center rounded-full border border-line-on-navy px-4 text-[0.8rem] font-medium text-on-navy-soft transition-colors duration-200 hover:border-gold hover:text-on-navy"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Treatments */}
          <nav aria-label="Footer — treatments">
            <p className="eyebrow text-gold">Treatments</p>
            <ul className="mt-5 space-y-2.5">
              {footerTreatments.map((t) => (
                <li key={t.slug}>
                  <a
                    href={`#${ANCHORS.treatments}`}
                    className="text-[0.92rem] text-on-navy-soft transition-colors duration-200 hover:text-on-navy"
                  >
                    {t.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Clinic */}
          <nav aria-label="Footer — clinic">
            <p className="eyebrow text-gold">Clinic</p>
            <ul className="mt-5 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[0.92rem] text-on-navy-soft transition-colors duration-200 hover:text-on-navy"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`#${ANCHORS.book}`}
                  className="text-[0.92rem] text-on-navy-soft transition-colors duration-200 hover:text-on-navy"
                >
                  Book a visit
                </a>
              </li>
            </ul>
          </nav>

          {/* Visit */}
          <div>
            <p className="eyebrow text-gold">Visit</p>
            <ul className="mt-5 space-y-3.5 text-[0.92rem] text-on-navy-soft">
              <li className="flex gap-2.5">
                <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={1.6} />
                <span>
                  <Ph text={SITE.address.street} />, <Ph text={SITE.address.area} />,{" "}
                  {SITE.city}
                </span>
              </li>
              <li className="flex gap-2.5">
                <Clock aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={1.6} />
                <span>
                  {SITE.hours[0].days}: <Ph text={SITE.hours[0].time} />
                </span>
              </li>
              <li className="flex gap-2.5">
                <Phone aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={1.6} />
                <span>
                  <Ph text={SITE.phoneDisplay} />
                </span>
              </li>
              <li className="flex gap-2.5">
                <Mail aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-gold" strokeWidth={1.6} />
                <span>
                  <Ph text={SITE.email} />
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line-on-navy pt-7 text-[0.8rem] text-on-navy-soft sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {SITE.legalName}, {SITE.city}. All
            rights reserved.
          </p>
          <p className="max-w-md text-[0.75rem] leading-relaxed opacity-75">
            Treatment outcomes vary by individual. Nothing on this site is a
            substitute for an in-person clinical examination.
          </p>
        </div>
      </Container>
    </footer>
  );
}
