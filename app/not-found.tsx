import { Monogram } from "@/components/art/monogram";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-bg px-6 text-center">
      <Monogram size={52} />
      <p className="eyebrow mt-10">Page not found</p>
      <h1 className="mt-4 font-display text-[2.2rem] leading-[1.15] font-bold tracking-[-0.03em] text-balance text-ink sm:text-[2.8rem]">
        This page seems to have{" "}
        <em className="serif-accent font-medium text-gold-strong">wandered off.</em>
      </h1>
      <p className="mt-5 max-w-md text-[0.98rem] leading-[1.7] text-ink-soft">
        The good news: everything you were probably looking for lives on one
        calm, well-organised page.
      </p>
      <a
        href="/"
        className="mt-9 inline-flex h-12 items-center rounded-full bg-ink px-7 text-[0.95rem] font-medium text-bg shadow-soft transition-all duration-200 hover:-translate-y-px hover:shadow-lift dark:bg-on-navy dark:text-navy"
      >
        Back to the clinic
      </a>
    </main>
  );
}
