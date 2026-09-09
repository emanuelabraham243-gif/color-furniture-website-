import { cx } from "@/lib/utils";

/**
 * Temporary text-based stand-in for the real Color Furniture logo file.
 * The client's actual logo (a gradient orange/green "CF" mark) hasn't been
 * added to this repo yet — drop it in `public/logo.png` (or .svg) and swap
 * this component's markup for an <Image> tag once it's there.
 */
export default function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span className="brand-gradient flex h-9 w-9 shrink-0 items-center justify-center rounded-lg font-display text-base font-bold text-paper">
        CF
      </span>
      <span
        className={cx(
          "font-display text-[17px] font-bold uppercase leading-none tracking-wide",
          tone === "dark" ? "text-ink" : "text-paper"
        )}
      >
        Color
        <br />
        Furniture
      </span>
    </span>
  );
}
