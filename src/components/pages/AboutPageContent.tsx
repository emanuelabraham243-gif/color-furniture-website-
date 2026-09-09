"use client";

import Reveal from "@/components/Reveal";
import FinalCta from "@/components/FinalCta";
import CoverImage from "@/components/CoverImage";
import { site } from "@/data/site";
import { useT } from "@/lib/i18n/LanguageProvider";

const pillarSeeds = ["color-about-manufacturing", "color-about-branches", "color-about-supply"];

export default function AboutPageContent() {
  const t = useT();
  const stats = [0, 1, 2, 3].map((i) => ({
    value: t(`about.stats.${i}.value`),
    label: t(`about.stats.${i}.label`),
  }));
  const pillars = [0, 1, 2].map((i) => ({
    title: t(`about.pillars.${i}.title`),
    text: t(`about.pillars.${i}.text`),
    seed: pillarSeeds[i],
  }));

  return (
    <div>
      <section className="relative flex h-[75vh] min-h-[480px] items-end overflow-hidden bg-noir">
        <CoverImage seed="color-about-hero" label={site.name} eyebrow={t("about.eyebrow")} className="opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/20 to-noir/40" />
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-16 md:px-10">
          <p className="eyebrow mb-5 text-[11px] font-medium uppercase text-snow/80">{t("about.eyebrow")}</p>
          <h1 className="max-w-2xl font-display text-4xl leading-[1.1] text-snow md:text-6xl">{t("about.title")}</h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
        <Reveal>
          <p className="font-display text-2xl leading-relaxed text-charcoal text-balance md:text-3xl">
            {t("about.introQuote")}
          </p>
          <p className="mt-8 text-[15px] leading-relaxed text-charcoal-soft/75">{t("about.introText")}</p>
        </Reveal>
      </section>

      <section className="border-y border-line bg-cream">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-6 px-6 py-16 md:grid-cols-4 md:px-10">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="text-center">
              <p className="font-display text-4xl text-wood-dark md:text-5xl">{s.value}</p>
              <p className="mt-2 text-[12px] uppercase tracking-[0.1em] text-charcoal-soft/70">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
        <div className="space-y-24 md:space-y-32">
          {pillars.map((pillar, i) => (
            <div key={pillar.title} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
              <Reveal className={`relative aspect-[4/5] overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <CoverImage seed={pillar.seed} label={pillar.title} eyebrow={site.name} />
              </Reveal>
              <Reveal className={i % 2 === 1 ? "lg:order-1" : ""}>
                <span className="font-display text-sm text-wood">{`0${i + 1}`}</span>
                <h2 className="mt-4 font-display text-3xl text-charcoal text-balance md:text-4xl">{pillar.title}</h2>
                <p className="mt-6 max-w-md text-[15px] leading-relaxed text-charcoal-soft/80">{pillar.text}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <FinalCta
        eyebrow={t("home.visitUs.eyebrow")}
        title={t("about.ctaTitle")}
        description={t("about.ctaDescription")}
        imageSeed="color-about-cta"
      />
    </div>
  );
}
