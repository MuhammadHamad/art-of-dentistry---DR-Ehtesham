"use client";

import { Moon, SunMedium } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Class-based theme toggle. The current theme is applied to <html> by the
 * no-flash inline script in app/layout.tsx; this button just flips the class
 * and persists the choice. Icons swap via CSS (no state → no hydration risk).
 */
export function ThemeToggle({ className }: { className?: string }) {
  function toggle() {
    const root = document.documentElement;
    const next = root.classList.contains("dark") ? "light" : "dark";
    root.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("aod-theme", next);
    } catch {
      /* private mode — ignore */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light or dark theme"
      className={cn(
        "inline-flex size-10 items-center justify-center rounded-full border border-line text-ink-soft transition-colors duration-200 hover:bg-line-soft hover:text-ink",
        className
      )}
    >
      <SunMedium aria-hidden="true" className="hidden size-[1.1rem] dark:block" strokeWidth={1.6} />
      <Moon aria-hidden="true" className="size-[1.05rem] dark:hidden" strokeWidth={1.6} />
    </button>
  );
}
