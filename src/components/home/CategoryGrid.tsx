"use client";

import { categories } from "@/data/categories";
import CategoryCard from "@/components/CategoryCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { useT } from "@/lib/i18n/LanguageProvider";

const featuredSlugs = ["sofa", "bed", "dining-table", "wardrobe", "tv-stand"];

export default function CategoryGrid() {
  const t = useT();
  const items = featuredSlugs.map((slug) => categories.find((c) => c.slug === slug)).filter(Boolean);

  return (
    <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
      <Reveal>
        <SectionHeading
          eyebrow={t("home.categoryGrid.eyebrow")}
          title={t("home.categoryGrid.title")}
          description={t("home.categoryGrid.description")}
        />
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-6 md:grid-rows-2 md:gap-5">
        {items[0] && (
          <Reveal className="col-span-2 md:col-span-4 md:row-span-2">
            <CategoryCard category={items[0]!} size="lg" />
          </Reveal>
        )}
        {items.slice(1, 3).map((c, i) => (
          <Reveal key={c!.slug} delay={i * 100} className="col-span-1 md:col-span-2">
            <CategoryCard category={c!} size="sm" />
          </Reveal>
        ))}
        {items.slice(3, 5).map((c, i) => (
          <Reveal key={c!.slug} delay={i * 100} className="col-span-1 md:col-span-3">
            <CategoryCard category={c!} size="sm" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
