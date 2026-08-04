import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

/**
 * The recurring "engraved plaque" heading motif: gold eyebrow, display
 * title (with optional serif-italic accent), and a measured lede.
 */
export function SectionHeading({
  eyebrow,
  title,
  accent,
  titleAfter,
  lede,
  align = "left",
  dark = false,
  className,
}: {
  eyebrow: string;
  /** Text before the serif accent. */
  title: string;
  /** Serif-italic accent phrase (the one "art" gesture per section). */
  accent?: string;
  /** Text after the serif accent. */
  titleAfter?: string;
  lede?: React.ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <p className={cn("eyebrow", dark && "text-gold")}>{eyebrow}</p>
      <h2
        className={cn(
          "mt-4 font-display text-[2rem] leading-[1.12] font-bold tracking-[-0.025em] text-balance sm:text-[2.6rem] md:text-[3rem]",
          dark ? "text-on-navy" : "text-ink"
        )}
      >
        {title}
        {accent && (
          <>
            {" "}
            <em className={cn("serif-accent font-medium", dark ? "text-gold" : "text-gold-strong")}>
              {accent}
            </em>
          </>
        )}
        {titleAfter && <> {titleAfter}</>}
      </h2>
      {lede && (
        <p
          className={cn(
            "mt-5 max-w-2xl text-[1.04rem] leading-[1.75]",
            align === "center" && "mx-auto",
            dark ? "text-on-navy-soft" : "text-ink-soft"
          )}
        >
          {lede}
        </p>
      )}
    </Reveal>
  );
}
