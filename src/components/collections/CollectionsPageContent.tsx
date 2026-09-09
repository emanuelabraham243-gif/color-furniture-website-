"use client";

import { categories } from "@/data/categories";
import { site, whatsappLink } from "@/data/site";
import CategoryCard from "@/components/CategoryCard";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { useT } from "@/lib/i18n/LanguageProvider";

export default function CollectionsPageContent() {
  const t = useT();

  return (
    <div className="mx-auto max-w-[1440px] px-6 pb-28 pt-32 md:px-10 md:pt-40">
      <Reveal className="max-w-2xl">
        <p className="eyebrow mb-5 text-[11px] font-medium uppercase text-wood-dark">{t("collections.eyebrow")}</p>
        <h1 className="font-display text-4xl text-charcoal md:text-5xl">{t("collections.title")}</h1>
        <p className="mt-6 text-[15px] leading-relaxed text-charcoal-soft/75">{t("collections.description")}</p>
      </Reveal>

      <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c, i) => {
          const name = t(`categories.${c.slug}.name`);
          return (
            <Reveal key={c.slug} delay={i * 60}>
              <CategoryCard category={c} />
              <p className="mt-3 text-[13px] leading-relaxed text-charcoal-soft/75">{t(`categories.${c.slug}.blurb`)}</p>
              <a
                href={whatsappLink(`Hi, I'm interested in your ${c.name.toLowerCase()}.`)}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-[13px] font-medium text-green hover:text-green-dark"
              >
                <WhatsAppIcon className="h-3.5 w-3.5" />
                {t("collections.askAbout", { name })}
              </a>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-20 flex flex-col items-center gap-4 border border-dashed border-line bg-cream px-6 py-14 text-center">
        <p className="font-display text-xl text-charcoal">{t("collections.dontSeeTitle")}</p>
        <p className="max-w-md text-[14px] leading-relaxed text-charcoal-soft/80">{t("collections.dontSeeText")}</p>
        <Button href={site.phoneHref} size="lg" className="mt-2">
          {t("common.call")} {site.phoneDisplay}
        </Button>
      </div>
    </div>
  );
}
