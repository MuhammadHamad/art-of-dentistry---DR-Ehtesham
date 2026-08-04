import { cn } from "@/lib/utils";

/**
 * The clinic mark: a fine gold arch on deep navy — an archway (the "art"
 * reference), a crown silhouette, and an "A", all in one gesture.
 * Fixed colors so it holds on any background in both themes.
 */
export function Monogram({
  className,
  size = 38,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      aria-hidden="true"
      className={cn("shrink-0", className)}
    >
      <rect width="48" height="48" rx="12" fill="#0C1826" />
      <path
        d="M15 34.5V25c0-8.6 18-8.6 18 0v9.5"
        fill="none"
        stroke="#C4A76B"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M11.5 34.5h25"
        fill="none"
        stroke="#C4A76B"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.55"
      />
      <circle cx="24" cy="12.5" r="1.7" fill="#C4A76B" />
    </svg>
  );
}

export function Wordmark({
  className,
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <Monogram size={36} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.02rem] font-bold tracking-[-0.01em]",
            dark ? "text-on-navy" : "text-ink"
          )}
        >
          Art of Dentistry
        </span>
        <span className="mt-1 text-[0.62rem] font-medium tracking-[0.3em] uppercase text-gold-strong">
          Peshawar
        </span>
      </span>
    </span>
  );
}
