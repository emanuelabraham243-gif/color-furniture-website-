"use client";

import Link from "next/link";
import { categories } from "@/data/categories";
import CategoryCard from "@/components/CategoryCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { useT } from "@/lib/i18n/LanguageProvider";

export default function CategoryRail() {
  const t = useT();

  return (
    <section className="mx-auto max-w-[1440px] px-6 pt-28 md:px-10 md:pt-36">
      <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow={t("home.categoryRail.eyebrow")}
          title={t("home.categoryRail.title")}
          description={t("home.categoryRail.description")}
        />
        <Link href="/collections" className="link-underline whitespace-nowrap text-[13px] uppercase tracking-[0.12em] text-wood-dark">
          {t("home.categoryRail.viewAll")}
        </Link>
      </Reveal>

      <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2">
        {categories.map((c, i) => (
          <Reveal key={c.slug} delay={i * 60} className="w-[70vw] flex-none snap-start sm:w-[42vw] lg:w-[26vw]">
            <CategoryCard category={c} size="sm" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
