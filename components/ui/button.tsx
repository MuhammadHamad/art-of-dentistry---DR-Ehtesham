import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "onNavy" | "ghost" | "whatsapp";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-[-0.01em] transition-all duration-200 ease-out-expo select-none active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-bg shadow-soft hover:shadow-lift hover:-translate-y-px dark:bg-on-navy dark:text-navy",
  secondary:
    "border border-line bg-transparent text-ink hover:bg-surface hover:shadow-soft hover:-translate-y-px",
  onNavy:
    "bg-on-navy text-navy shadow-soft hover:shadow-lift hover:-translate-y-px",
  ghost:
    "text-ink-soft hover:text-ink hover:bg-line-soft",
  whatsapp:
    "bg-emerald text-white shadow-soft hover:shadow-lift hover:-translate-y-px",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-6 text-[0.92rem]",
  lg: "h-[3.25rem] px-8 text-[0.98rem]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type AnchorProps = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & {
    href: string;
  };

type NativeButtonProps = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: undefined;
  };

export type ButtonProps = AnchorProps | NativeButtonProps;

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children, ...rest } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in rest && typeof rest.href === "string") {
    const anchorRest = rest as Omit<AnchorProps, keyof CommonProps>;
    return (
      <a {...anchorRest} className={classes}>
        {children}
      </a>
    );
  }

  const buttonRest = rest as Omit<NativeButtonProps, keyof CommonProps | "href">;
  return (
    <button type="button" {...buttonRest} className={classes}>
      {children}
    </button>
  );
}

/** Arrow that nudges right on hover of the parent `group`. */
export function ButtonArrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      className="size-4 transition-transform duration-200 ease-out-expo group-hover:translate-x-0.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 8h11m0 0L9 3.5M13.5 8 9 12.5" />
    </svg>
  );
}
