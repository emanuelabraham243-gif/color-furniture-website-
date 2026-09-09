"use client";

import Link from "next/link";
import { categories, getCategory } from "@/data/categories";
import { products } from "@/data/products";
import { whatsappLink } from "@/data/site";
import ProductCard from "@/components/ProductCard";
import FinalCta from "@/components/FinalCta";
import CoverImage from "@/components/CoverImage";
import Reveal from "@/components/Reveal";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import OrderForm from "@/components/OrderForm";
import { useT } from "@/lib/i18n/LanguageProvider";

export default function CollectionDetailContent({ slug }: { slug: string }) {
  const t = useT();
  const category = getCategory(slug);
  if (!category) return null;

  const name = t(`categories.${category.slug}.name`);
  const shortName = t(`categories.${category.slug}.shortName`);
  const categoryProducts = products.filter((p) => p.category === category.slug);
  const otherCategories = categories.filter((c) => c.slug !== category.slug).slice(0, 3);

  return (
    <div>
      <section className="relative flex h-[70vh] min-h-[440px] items-end overflow-hidden bg-noir">
        <CoverImage seed={category.heroImage} label={name} eyebrow={t("collectionDetail.breadcrumb")} className="opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/20 to-noir/40" />
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-16 md:px-10">
          <nav aria-label="Breadcrumb" className="mb-5 flex gap-2 text-[12px] uppercase tracking-[0.08em] text-snow/60">
            <Link href="/collections" className="hover:text-snow">
              {t("collectionDetail.breadcrumb")}
            </Link>
            <span>/</span>
            <span className="text-snow">{name}</span>
          </nav>
          <h1 className="font-display text-4xl text-snow md:text-6xl">{name}</h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-snow/75">{t(`categories.${category.slug}.description`)}</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-display text-xl italic leading-relaxed text-charcoal-soft/80 md:text-2xl">
            &ldquo;{t(`categories.${category.slug}.editorial`)}&rdquo;
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 pb-28 md:px-10">
        <div className="mb-10 flex items-center justify-between border-b border-line pb-6">
          <h2 className="font-display text-2xl text-charcoal">
            {t("collectionDetail.pieces", { count: categoryProducts.length })}
          </h2>
          <Link href={`/catalog?category=${category.slug}`} className="link-underline text-[13px] uppercase tracking-[0.12em] text-wood-dark">
            {t("collectionDetail.filterSort")}
          </Link>
        </div>

        {categoryProducts.length === 0 ? (
          <div className="flex flex-col items-center gap-4 py-16 text-center">
            <p className="text-[15px] text-charcoal-soft/70">{t("collectionDetail.comingSoon")}</p>
            <a
              href={whatsappLink(`Hi, I'm interested in your ${category.name.toLowerCase()}.`)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-green hover:text-green-dark"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              {t("collectionDetail.askAbout", { name })}
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-3">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      <section className="mx-auto max-w-2xl px-6 pb-28 md:px-10">
        <OrderForm categorySlug={category.slug} categoryName={name} />
      </section>

      <section className="border-t border-line bg-cream py-20">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <h2 className="font-display text-2xl text-charcoal">{t("collectionDetail.exploreMore")}</h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {otherCategories.map((c) => {
              const otherName = t(`categories.${c.slug}.name`);
              return (
                <Link key={c.slug} href={`/collections/${c.slug}`} className="group relative block aspect-[4/3] overflow-hidden bg-noir">
                  <CoverImage
                    seed={c.heroImage}
                    label={otherName}
                    eyebrow={t("collectionDetail.breadcrumb")}
                    className="opacity-85 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/25" />
                  <span className="absolute inset-x-0 bottom-0 p-5 font-display text-lg text-snow">{otherName}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCta
        title={t("collectionDetail.bringHome", { name: shortName })}
        description={t("collectionDetail.bringHomeDesc")}
        imageSeed={category.heroImage}
      />
    </div>
  );
}
