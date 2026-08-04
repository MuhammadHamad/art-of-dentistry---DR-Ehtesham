import { cn } from "@/lib/utils";

export function Chip({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1 text-[0.78rem] font-medium text-ink-soft",
        className
      )}
    >
      {children}
    </span>
  );
}

/** Small pulsing status dot (e.g. "Accepting new patients"). */
export function StatusDot({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "size-1.5 shrink-0 rounded-full bg-emerald animate-pulse-dot motion-reduce:animate-none",
        className
      )}
    />
  );
}
