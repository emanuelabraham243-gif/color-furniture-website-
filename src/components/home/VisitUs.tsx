"use client";

import Button from "@/components/Button";
import CoverImage from "@/components/CoverImage";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";
import { useT } from "@/lib/i18n/LanguageProvider";

export default function VisitUs() {
  const t = useT();

  return (
    <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative order-2 aspect-[4/5] overflow-hidden lg:order-1 lg:aspect-[5/6]">
          <CoverImage seed="color-branch-visit" label={`${site.name} Branch`} eyebrow="Addis Ababa" />
        </Reveal>
        <Reveal className="order-1 lg:order-2">
          <p className="eyebrow mb-5 text-[11px] font-medium uppercase text-wood-dark">{t("home.visitUs.eyebrow")}</p>
          <h2 className="font-display text-3xl leading-[1.15] text-charcoal text-balance md:text-[2.5rem]">
            {t("home.visitUs.title")}
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-charcoal-soft/80">
            {t("home.visitUs.description")}
          </p>
          <ul className="mt-8 space-y-3 text-[14px] text-charcoal-soft/80">
            <li>
              {site.address.line1}, {site.address.line2}
            </li>
            <li>{site.phoneDisplay}</li>
          </ul>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/showroom" size="lg">
              {t("home.visitUs.planVisit")}
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              {t("home.visitUs.requestInfo")}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
