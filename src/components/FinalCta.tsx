"use client";

import Button from "./Button";
import CoverImage from "./CoverImage";
import Reveal from "./Reveal";
import { useT } from "@/lib/i18n/LanguageProvider";

export default function FinalCta({
  eyebrow,
  title,
  description,
  primaryHref = "/catalog",
  primaryLabel,
  secondaryHref = "/showroom",
  secondaryLabel,
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
  const t = useT();

  return (
    <section className="relative overflow-hidden bg-noir py-28 md:py-36">
      <CoverImage seed={imageSeed} className="opacity-35" />
      <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/70 to-noir/40" />
      <Reveal className="relative mx-auto max-w-2xl px-6 text-center">
        <p className="eyebrow mb-5 text-[11px] font-medium uppercase text-snow/80">
          {eyebrow ?? t("finalCtaDefaults.eyebrow")}
        </p>
        <h2 className="font-display text-4xl leading-[1.1] text-snow text-balance md:text-5xl">{title}</h2>
        <p className="mx-auto mt-6 max-w-lg text-[15px] leading-relaxed text-snow/70">{description}</p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button href={primaryHref} variant="light" size="lg">
            {primaryLabel ?? t("finalCtaDefaults.primaryLabel")}
          </Button>
          <Button href={secondaryHref} variant="outline-light" size="lg">
            {secondaryLabel ?? t("finalCtaDefaults.secondaryLabel")}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
