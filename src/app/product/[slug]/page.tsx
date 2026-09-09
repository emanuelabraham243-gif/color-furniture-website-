import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getProduct, getRelatedProducts, products } from "@/data/products";
import { getCategory } from "@/data/categories";
import ProductGallery from "@/components/product/ProductGallery";
import ProductActions from "@/components/product/ProductActions";
import ProductRail from "@/components/ProductRail";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.tagline,
    openGraph: { title: product.name, description: product.tagline },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const related = getRelatedProducts(product);

  return (
    <div className="mx-auto max-w-[1440px] px-6 pb-28 pt-32 md:px-10 md:pt-40">
      <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-[12px] uppercase tracking-[0.08em] text-charcoal-soft/60">
        <Link href="/" className="hover:text-charcoal">Home</Link>
        <span>/</span>
        <Link href="/catalog" className="hover:text-charcoal">Shop</Link>
        {category && (
          <>
            <span>/</span>
            <Link href={`/collections/${category.slug}`} className="hover:text-charcoal">
              {category.name}
            </Link>
          </>
        )}
        <span>/</span>
        <span className="text-charcoal">{product.name}</span>
      </nav>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <ProductGallery images={product.images} name={product.name} />

        <div className="lg:pt-2">
          {category && (
            <Link href={`/collections/${category.slug}`} className="eyebrow text-[11px] font-medium uppercase text-wood-dark">
              {category.name}
            </Link>
          )}
          <h1 className="mt-3 font-display text-3xl leading-tight text-charcoal md:text-4xl">{product.name}</h1>
          <p className="mt-2 text-[15px] text-charcoal-soft/70">{product.tagline}</p>

          <ProductActions product={product} />

          <div className="mt-14 space-y-10 border-t border-line pt-10">
            <div>
              <h2 className="text-[12px] font-medium uppercase tracking-[0.1em] text-charcoal">Description</h2>
              <p className="mt-3 text-[14px] leading-relaxed text-charcoal-soft/80">{product.description}</p>
            </div>

            <div>
              <h2 className="text-[12px] font-medium uppercase tracking-[0.1em] text-charcoal">Dimensions</h2>
              <dl className="mt-3 grid grid-cols-3 gap-4 text-[14px] text-charcoal-soft/80">
                <div>
                  <dt className="text-[11px] uppercase text-charcoal-soft/50">Width</dt>
                  <dd className="mt-1">{product.dimensions.width} cm</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase text-charcoal-soft/50">Depth</dt>
                  <dd className="mt-1">{product.dimensions.depth} cm</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase text-charcoal-soft/50">Height</dt>
                  <dd className="mt-1">{product.dimensions.height} cm</dd>
                </div>
              </dl>
            </div>

            <div>
              <h2 className="text-[12px] font-medium uppercase tracking-[0.1em] text-charcoal">Materials</h2>
              <p className="mt-3 text-[14px] leading-relaxed text-charcoal-soft/80">{product.materials.join(", ")}</p>
            </div>

            <div>
              <h2 className="text-[12px] font-medium uppercase tracking-[0.1em] text-charcoal">Care Information</h2>
              <ul className="mt-3 space-y-1.5 text-[14px] leading-relaxed text-charcoal-soft/80">
                {product.care.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="text-wood-dark">—</span>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-28 border-t border-line pt-16">
          <Reveal>
            <SectionHeading eyebrow="You May Also Like" title="Related Pieces" />
          </Reveal>
          <div className="mt-10">
            <ProductRail products={related} />
          </div>
        </section>
      )}
    </div>
  );
}
