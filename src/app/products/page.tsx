import type { Metadata } from "next";
import { categories } from "@/data/categories";
import { site, whatsappLink } from "@/data/site";
import { CategoryIcons, WhatsAppGlyph } from "@/components/icons";

export const metadata: Metadata = {
  title: "Products",
  description: "Furniture categories from Color Furniture — sofas, dining, bedroom and storage pieces.",
};

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <div className="max-w-2xl">
        <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange-dark">Products</p>
        <h1 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">Our Product Range</h1>
        <p className="mt-4 text-[15px] leading-relaxed text-charcoal-soft">
          Color Furniture manufactures across the categories below. Full product photos and pricing
          for individual pieces are being added — for now, message us on WhatsApp with the category
          you&apos;re interested in and we&apos;ll help right away.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((c) => {
          const Icon = CategoryIcons[c.slug];
          return (
            <div
              key={c.slug}
              className="flex flex-col rounded-2xl border border-line bg-paper p-7 transition-shadow hover:shadow-lg hover:shadow-orange/5"
            >
              <span className="brand-gradient flex h-14 w-14 items-center justify-center rounded-full text-paper">
                <Icon width={26} height={26} />
              </span>
              <h2 className="mt-5 font-display text-lg font-semibold text-ink">{c.name}</h2>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-charcoal-soft">{c.blurb}</p>
              <a
                href={whatsappLink(`Hi, I'm interested in your ${c.name.toLowerCase()}.`)}
                target="_blank"
                rel="noreferrer"
                className="mt-5 flex items-center gap-2 text-[13px] font-semibold text-green hover:text-green-dark"
              >
                <WhatsAppGlyph width={14} height={14} />
                Ask about {c.name}
              </a>
            </div>
          );
        })}
      </div>

      <div className="mt-14 flex flex-col items-center gap-3 rounded-2xl border border-dashed border-line bg-cream/60 px-6 py-10 text-center">
        <p className="font-display text-lg font-semibold text-ink">Don&apos;t see what you&apos;re looking for?</p>
        <p className="max-w-md text-[13.5px] text-charcoal-soft">
          We also take on custom and project furniture orders. Call or message us and we&apos;ll help
          you find the right piece.
        </p>
        <a
          href={site.phoneHref}
          className="mt-2 rounded-full bg-ink px-6 py-3 text-[13.5px] font-semibold text-paper hover:bg-charcoal"
        >
          Call {site.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
