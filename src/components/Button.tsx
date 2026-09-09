import Link from "next/link";
import type { ReactNode } from "react";
import { cx } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline-light" | "light";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans text-[13px] uppercase tracking-[0.14em] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wood disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-charcoal text-ivory hover:bg-wood-dark",
  secondary: "bg-transparent text-charcoal border border-charcoal hover:bg-charcoal hover:text-ivory",
  ghost: "bg-transparent text-charcoal hover:text-wood-dark underline-offset-4 hover:underline",
  "outline-light": "bg-transparent text-ivory border border-ivory/60 hover:bg-ivory hover:text-charcoal",
  light: "bg-ivory text-charcoal border border-ivory hover:bg-transparent hover:text-ivory",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-3",
  lg: "px-8 py-4 text-[13px]",
};

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  onClick,
  type = "button",
  target,
  rel,
}: ButtonProps) {
  const classes = cx(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
