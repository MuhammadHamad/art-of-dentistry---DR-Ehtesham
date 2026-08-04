import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Content placeholders are written as "[bracketed text]" in lib/site.ts and
 * lib/data/*. `stripPh` removes the brackets for plain-text contexts
 * (aria labels, metadata, JSON-LD). The visual treatment lives in
 * components/ui/ph.tsx.
 */
export function stripPh(text: string): string {
  return text.replace(/\[([^\]]+)\]/g, "$1");
}

/** Split copy into literal and placeholder segments for rendering. */
export function segmentPh(
  text: string
): Array<{ type: "text" | "ph"; value: string }> {
  const segments: Array<{ type: "text" | "ph"; value: string }> = [];
  const re = /\[([^\]]+)\]/g;
  let last = 0;
  let match: RegExpExecArray | null;
  while ((match = re.exec(text)) !== null) {
    if (match.index > last) {
      segments.push({ type: "text", value: text.slice(last, match.index) });
    }
    segments.push({ type: "ph", value: match[1] });
    last = re.lastIndex;
  }
  if (last < text.length) {
    segments.push({ type: "text", value: text.slice(last) });
  }
  return segments;
}
