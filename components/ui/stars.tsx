import { cn } from "@/lib/utils";

export function Stars({
  className,
  size = 12,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <span
      className={cn("inline-flex items-center gap-[3px] text-gold", className)}
      role="img"
      aria-label="Five star rating"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 12 12"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M6 .8l1.55 3.14 3.47.5-2.51 2.45.59 3.45L6 8.71l-3.1 1.63.59-3.45L.98 4.44l3.47-.5L6 .8z" />
        </svg>
      ))}
    </span>
  );
}
