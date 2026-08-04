import { segmentPh } from "@/lib/utils";

/**
 * Renders copy that may contain [bracketed placeholders].
 * Placeholder segments get a dotted gold underline and an explanatory
 * tooltip, so demo screenshots stay honest without looking broken.
 * Replace the bracketed text in lib/site.ts or lib/data/* and the
 * marker disappears automatically.
 */
export function Ph({ text }: { text: string }) {
  const segments = segmentPh(text);
  if (segments.length === 1 && segments[0].type === "text") {
    return <>{text}</>;
  }
  return (
    <>
      {segments.map((segment, i) =>
        segment.type === "ph" ? (
          <span
            key={i}
            className="ph-mark"
            title="Placeholder — replace with the clinic's verified detail"
          >
            {segment.value}
          </span>
        ) : (
          <span key={i}>{segment.value}</span>
        )
      )}
    </>
  );
}
