import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategory } from "@/data/categories";
import { products } from "@/data/products";
import { whatsappLink } from "@/data/site";
import ProductCard from "@/components/ProductCard";
import FinalCta from "@/components/FinalCta";
import CoverImage from "@/components/CoverImage";
import Reveal from "@/components/Reveal";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  return { title: category.name, description: category.description };
}

export default async function CollectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const categoryProducts = products.filter((p) => p.category === category.slug);
  const otherCategories = categories.filter((c) => c.slug !== category.slug).slice(0, 3);

  return (
    <div>
      <section className="relative flex h-[70vh] min-h-[440px] items-end overflow-hidden bg-charcoal">
        <CoverImage seed={category.heroImage} label={category.name} eyebrow="Category" className="opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-charcoal/40" />
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-16 md:px-10">
          <nav aria-label="Breadcrumb" className="mb-5 flex gap-2 text-[12px] uppercase tracking-[0.08em] text-ivory/60">
            <Link href="/collections" className="hover:text-ivory">Collections</Link>
            <span>/</span>
            <span className="text-ivory">{category.name}</span>
          </nav>
          <h1 className="font-display text-4xl text-ivory md:text-6xl">{category.name}</h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ivory/75">{category.description}</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="font-display text-xl italic leading-relaxed text-charcoal-soft/80 md:text-2xl">
            &ldquo;{category.editorial}&rdquo;
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 pb-28 md:px-10">
        <div className="mb-10 flex items-center justify-between border-b border-line pb-6">
          <h2 className="font-display text-2xl text-charcoal">
            {categoryProducts.length} {categoryProducts.length === 1 ? "Piece" : "Pieces"}
          </h2>
          <Link href={`/catalog?category=${category.slug}`} className="link-underline text-[13px] uppercase tracking-[0.12em] text-wood-dark">
            Filter &amp; Sort →
          </Link>
        </div>

        {categoryProducts.length === 0 ? (
          <div className="flex flex-col items-center gap-4 py-16 text-center">
            <p className="text-[15px] text-charcoal-soft/70">
              New pieces for this category are arriving soon. In the meantime, ask us directly on WhatsApp.
            </p>
            <a
              href={whatsappLink(`Hi, I'm interested in your ${category.name.toLowerCase()}.`)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-green hover:text-green-dark"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              Ask about {category.name}
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

      <section className="border-t border-line bg-cream py-20">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <h2 className="font-display text-2xl text-charcoal">Explore More Categories</h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {otherCategories.map((c) => (
              <Link key={c.slug} href={`/collections/${c.slug}`} className="group relative block aspect-[4/3] overflow-hidden bg-charcoal">
                <CoverImage
                  seed={c.heroImage}
                  label={c.name}
                  eyebrow="Category"
                  className="opacity-85 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/25" />
                <span className="absolute inset-x-0 bottom-0 p-5 font-display text-lg text-ivory">{c.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        title={`Bring ${category.shortName} Home`}
        description="Visit one of our Addis Ababa branches to see this category in person, or ask us directly on WhatsApp."
        imageSeed={category.heroImage}
      />
    </div>
  );
}
