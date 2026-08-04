import { cn } from "@/lib/utils";

/**
 * Abstract, identity-safe placeholder for a named doctor's portrait.
 * We deliberately do not attach a stock photo to a real, specific person's
 * name — doing so would misrepresent who they are. See DESIGN.md §10.
 * Replace with a verified `next/image` portrait once one exists.
 */
export function ArtFrame({
  uid,
  className,
}: {
  /** Unique id suffix for SVG gradient defs — pass a distinct literal per usage. */
  uid: string;
  className?: string;
}) {
  const g = (name: string) => `${name}-${uid}`;

  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden bg-[#F3EFE5]",
        className
      )}
    >
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 480"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id={g("bg")} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#F6F2E8" />
            <stop offset="1" stopColor="#EAE3D1" />
          </linearGradient>
          <linearGradient id={g("bust")} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#2C4058" />
            <stop offset="1" stopColor="#13233A" />
          </linearGradient>
        </defs>
        <rect width="400" height="480" fill={`url(#${g("bg")})`} />
        {/* gold halo arc */}
        <circle cx="200" cy="196" r="118" fill="none" stroke="#B5975A" strokeWidth="1.2" opacity="0.5" />
        {/* head + shoulders silhouette */}
        <circle cx="200" cy="180" r="62" fill={`url(#${g("bust")})`} />
        <path
          d="M 88 480 C 88 372 140 330 200 330 C 260 330 312 372 312 480 Z"
          fill={`url(#${g("bust")})`}
        />
        {/* collar hint */}
        <path d="M 172 338 L 200 372 L 228 338" fill="none" stroke="#C4A76B" strokeWidth="1.4" opacity="0.75" />
      </svg>
    </div>
  );
}
