import Image from "next/image";
import { Camera } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Real photography used across the site. Images are relevant, licensed
 * stock photography (Pexels — free for commercial use) chosen to depict
 * the correct setting or treatment, not this specific clinic's own
 * interiors or people. The caption says so honestly rather than implying
 * otherwise. Replace `src` with the clinic's own photography when
 * available — see README → "Replacing stock photography".
 */
export function PhotoFrame({
  src,
  alt,
  caption,
  className,
  priority,
  sizes = "100vw",
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden bg-[#F3EFE5]",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover"
      />
      {caption && (
        <span
          title="Stock photography, chosen for relevance — will be replaced with the clinic's own photography"
          className="absolute bottom-3 left-3 z-10 inline-flex cursor-help items-center gap-1.5 rounded-full border border-black/8 bg-white/78 px-2.5 py-1 text-[0.67rem] font-medium text-[#54606E] backdrop-blur-md"
        >
          <Camera aria-hidden="true" className="size-3" strokeWidth={1.7} />
          {caption}
        </span>
      )}
    </div>
  );
}
