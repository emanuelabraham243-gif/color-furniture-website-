"use client";

import Link from "next/link";
import type { Category } from "@/data/categories";
import CoverImage from "./CoverImage";
import { useT } from "@/lib/i18n/LanguageProvider";

export default function CategoryCard({
  category,
  size = "md",
}: {
  category: Category;
  size?: "sm" | "md" | "lg";
}) {
  const t = useT();
  const name = t(`categories.${category.slug}.name`);

  return (
    <Link href={`/collections/${category.slug}`} className="group relative block overflow-hidden bg-noir">
      <div
        className={
          size === "lg"
            ? "relative aspect-[16/10]"
            : size === "sm"
            ? "relative aspect-[4/5]"
            : "relative aspect-[3/4]"
        }
      >
        <CoverImage
          seed={category.slug}
          label={name}
          eyebrow={t("collectionDetail.breadcrumb")}
          className="opacity-90 transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="font-display text-2xl text-snow">{name}</h3>
        <span className="link-underline mt-2 inline-block text-[12px] uppercase tracking-[0.14em] text-snow/90">
          {t("common.explore")}
        </span>
      </div>
    </Link>
  );
}
