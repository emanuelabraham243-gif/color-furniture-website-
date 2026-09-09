import Button from "./Button";
import CoverImage from "./CoverImage";
import Reveal from "./Reveal";

export default function FinalCta({
  eyebrow = "Start Here",
  title,
  description,
  primaryHref = "/products",
  primaryLabel = "Explore Products",
  secondaryHref = "/contact",
  secondaryLabel = "Contact Us",
  imageSeed,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  imageSeed: string;
}) {
  return (
    <section className="relative overflow-hidden bg-charcoal py-28 md:py-36">
      <CoverImage seed={imageSeed} className="opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/40" />
      <Reveal className="relative mx-auto max-w-2xl px-6 text-center">
        <p className="eyebrow mb-5 text-[11px] font-medium uppercase text-beige">{eyebrow}</p>
        <h2 className="font-display text-4xl leading-[1.1] text-ivory text-balance md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-[15px] leading-relaxed text-ivory/70">
          {description}
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href={primaryHref} variant="light" size="lg">
            {primaryLabel}
          </Button>
          <Button href={secondaryHref} variant="outline-light" size="lg">
            {secondaryLabel}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
