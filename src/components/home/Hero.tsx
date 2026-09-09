"use client";

import Button from "@/components/Button";
import CoverImage from "@/components/CoverImage";
import { site, whatsappLink } from "@/data/site";
import { useT } from "@/lib/i18n/LanguageProvider";

export default function Hero() {
  const t = useT();

  return (
    <section className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-noir">
      <CoverImage seed="color-hero-workshop" label={site.name} eyebrow="Addis Ababa" />
      <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/25 to-noir/40" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-20 pt-40 md:px-10 md:pb-28">
        <p className="eyebrow mb-6 text-[11px] font-medium uppercase text-snow/80">{t("home.hero.eyebrow")}</p>
        <h1 className="max-w-3xl font-display text-[13vw] font-light leading-[1.02] text-snow sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          {t("home.hero.titleLine1")} <span className="italic">{t("home.hero.titleEm")}</span>
          <br />
          {t("home.hero.titleLine2")}
        </h1>
        <p className="mt-7 max-w-md text-[16px] leading-relaxed text-snow/75">{t("site.description")}</p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href="/catalog" variant="light" size="lg">
            {t("home.hero.explore")}
          </Button>
          <Button
            href={whatsappLink("Hi, I'd like to ask about your furniture.")}
            target="_blank"
            rel="noreferrer"
            variant="outline-light"
            size="lg"
          >
            {t("common.whatsappUs")}
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 right-6 hidden flex-col items-center gap-2 text-snow/60 md:right-10 md:flex">
        <span className="eyebrow text-[10px]">{t("home.hero.scroll")}</span>
        <span className="h-10 w-px bg-snow/40" />
      </div>
    </section>
  );
}
