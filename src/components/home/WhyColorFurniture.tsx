"use client";

import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { useT } from "@/lib/i18n/LanguageProvider";

export default function WhyColorFurniture() {
  const t = useT();
  const reasons = [0, 1, 2, 3].map((i) => ({
    n: `0${i + 1}`,
    title: t(`home.why.reasons.${i}.title`),
    text: t(`home.why.reasons.${i}.text`),
  }));

  return (
    <section className="border-y border-line bg-cream">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow={t("home.why.eyebrow")}
            title={t("home.why.title")}
            description={t("home.why.description")}
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <Reveal key={r.n} delay={i * 90}>
              <span className="font-display text-sm text-wood">{r.n}</span>
              <h3 className="mt-4 font-display text-xl text-charcoal">{r.title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-charcoal-soft/75">{r.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
