import { Camera } from "lucide-react";
import { cn } from "@/lib/utils";

type ArtVariant = "clinic" | "chair" | "portrait" | "smile-before" | "smile-after";

/**
 * Placeholder "photography" — abstract compositions in the brand palette
 * that hold the layout with intent until real, consented photos exist.
 * Compositions stay in fixed warm tones in both themes (as a photo would).
 * Swap by replacing this component's usage with <Image> — slots are listed
 * in README → "Replacing placeholder artwork".
 */
export function ArtFrame({
  variant,
  uid,
  label,
  className,
  showTag = true,
}: {
  variant: ArtVariant;
  /** Unique id suffix for SVG gradient defs — pass a distinct literal per usage. */
  uid: string;
  label?: string;
  className?: string;
  showTag?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden bg-[#F3EFE5]",
        className
      )}
    >
      <ArtComposition variant={variant} uid={uid} />
      {showTag && label && (
        <span
          title="Placeholder artwork — replace with real clinic photography"
          className="absolute bottom-3 left-3 z-10 inline-flex cursor-help items-center gap-1.5 rounded-full border border-black/8 bg-white/78 px-2.5 py-1 text-[0.67rem] font-medium text-[#54606E] backdrop-blur-md"
        >
          <Camera aria-hidden="true" className="size-3" strokeWidth={1.7} />
          {label}
        </span>
      )}
    </div>
  );
}

function ArtComposition({ variant, uid }: { variant: ArtVariant; uid: string }) {
  const g = (name: string) => `${name}-${uid}`;

  if (variant === "clinic") {
    return (
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 600 750"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id={g("sky")} x1="0" y1="0" x2="0.4" y2="1">
            <stop offset="0" stopColor="#FAF7F0" />
            <stop offset="0.55" stopColor="#F1ECDF" />
            <stop offset="1" stopColor="#E9E2D0" />
          </linearGradient>
          <linearGradient id={g("arch")} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#16273D" />
            <stop offset="1" stopColor="#0C1826" />
          </linearGradient>
        </defs>
        <rect width="600" height="750" fill={`url(#${g("sky")})`} />
        {/* contour "smile" curves */}
        {[0, 1, 2, 3, 4].map((i) => (
          <path
            key={i}
            d={`M -60 ${240 + i * 34} Q 300 ${140 + i * 30}, 660 ${250 + i * 34}`}
            fill="none"
            stroke="#B5975A"
            strokeWidth="1.1"
            opacity={0.42 - i * 0.07}
          />
        ))}
        {/* the arch — architectural echo of the monogram */}
        <path
          d="M 150 750 V 470 C 150 340, 450 340, 450 470 V 750 Z"
          fill={`url(#${g("arch")})`}
        />
        <path
          d="M 190 750 V 485 C 190 380, 410 380, 410 485 V 750"
          fill="none"
          stroke="#C4A76B"
          strokeWidth="1.3"
          opacity="0.6"
        />
        <circle cx="300" cy="300" r="3.2" fill="#B5975A" opacity="0.85" />
        {/* grounding shadow */}
        <ellipse cx="300" cy="748" rx="290" ry="26" fill="#0C1826" opacity="0.08" />
      </svg>
    );
  }

  if (variant === "chair") {
    return (
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 800 500"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id={g("room")} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#F7F3E9" />
            <stop offset="1" stopColor="#EAE3D1" />
          </linearGradient>
        </defs>
        <rect width="800" height="500" fill={`url(#${g("room")})`} />
        {/* window light */}
        <rect x="70" y="60" width="200" height="290" rx="100" fill="#FDFBF5" opacity="0.85" />
        <rect x="70" y="60" width="200" height="290" rx="100" fill="none" stroke="#B5975A" strokeWidth="1.1" opacity="0.4" />
        {/* abstract chair silhouette */}
        <path
          d="M 380 330 Q 400 240 480 232 L 620 222 Q 660 220 662 252 Q 664 282 626 288 L 500 300 Q 470 350 420 356 L 360 360 Q 330 360 334 336 Z"
          fill="#13233A"
          opacity="0.92"
        />
        <path d="M 470 356 L 468 420 M 540 296 L 560 420" stroke="#13233A" strokeWidth="10" strokeLinecap="round" opacity="0.9" />
        <ellipse cx="500" cy="440" rx="180" ry="16" fill="#0C1826" opacity="0.1" />
        {/* overhead lamp arm */}
        <path d="M 640 60 Q 560 70 540 150" fill="none" stroke="#8C7B55" strokeWidth="3" opacity="0.55" />
        <circle cx="540" cy="158" r="16" fill="#C4A76B" opacity="0.8" />
      </svg>
    );
  }

  if (variant === "portrait") {
    return (
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
    );
  }

  if (variant === "smile-before") {
    return (
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 600 420"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id={g("dull")} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#DCD6C8" />
            <stop offset="1" stopColor="#C6BEAC" />
          </linearGradient>
        </defs>
        <rect width="600" height="420" fill={`url(#${g("dull")})`} />
        {[0, 1, 2].map((i) => (
          <path
            key={i}
            d={`M 40 ${180 + i * 42} Q 300 ${120 + i * 44}, 560 ${190 + i * 42}`}
            fill="none"
            stroke="#54606E"
            strokeWidth="1.4"
            strokeDasharray="7 9"
            opacity={0.5 - i * 0.12}
          />
        ))}
        <circle cx="300" cy="210" r="86" fill="none" stroke="#54606E" strokeWidth="1.2" strokeDasharray="3 7" opacity="0.55" />
      </svg>
    );
  }

  // smile-after
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 600 420"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={g("bright")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FBF8F1" />
          <stop offset="1" stopColor="#F0EADA" />
        </linearGradient>
      </defs>
      <rect width="600" height="420" fill={`url(#${g("bright")})`} />
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M 40 ${180 + i * 42} Q 300 ${120 + i * 44}, 560 ${190 + i * 42}`}
          fill="none"
          stroke="#B5975A"
          strokeWidth="1.4"
          opacity={0.75 - i * 0.18}
        />
      ))}
      <circle cx="300" cy="210" r="86" fill="none" stroke="#B5975A" strokeWidth="1.3" opacity="0.7" />
      <circle cx="300" cy="210" r="3" fill="#B5975A" />
    </svg>
  );
}
