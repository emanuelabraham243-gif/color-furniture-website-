import { cx } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div className={cx("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p
          className={cx(
            "eyebrow mb-4 text-[11px] font-medium uppercase",
            tone === "dark" ? "text-wood-dark" : "text-beige"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cx(
          "font-display text-3xl leading-[1.1] text-balance sm:text-4xl md:text-[2.75rem]",
          tone === "dark" ? "text-charcoal" : "text-ivory"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cx(
            "mt-5 text-[15px] leading-relaxed",
            tone === "dark" ? "text-charcoal-soft/80" : "text-ivory/75"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
