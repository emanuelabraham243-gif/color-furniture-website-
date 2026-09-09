import Link from "next/link";
import type { Product } from "@/data/products";
import { formatPrice } from "@/data/products";
import { cx } from "@/lib/utils";
import CoverImage from "./CoverImage";

export default function ProductCard({ product }: { product: Product }) {
  const badge = product.isNew
    ? "New"
    : product.isBestSeller
    ? "Best Seller"
    : product.compareAtPrice
    ? "Sale"
    : null;

  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-beige">
        <CoverImage
          seed={product.images[0]}
          label={product.name}
          eyebrow={product.category.replace("-", " ")}
          className="transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        {product.images[1] && (
          <CoverImage
            seed={product.images[1]}
            label={product.name}
            eyebrow={product.category.replace("-", " ")}
            className="opacity-0 transition-opacity duration-700 ease-out group-hover:opacity-100"
          />
        )}
        {badge && (
          <span
            className={cx(
              "absolute left-3 top-3 bg-ivory/95 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-charcoal",
              badge === "Sale" && "bg-wood text-ivory"
            )}
          >
            {badge}
          </span>
        )}
        {product.availability === "Out of Stock" && (
          <span className="absolute inset-x-0 bottom-0 bg-charcoal/85 py-1.5 text-center text-[10px] font-medium uppercase tracking-[0.14em] text-ivory">
            Out of Stock
          </span>
        )}
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-[17px] leading-snug text-charcoal">{product.name}</h3>
          <p className="mt-1 text-[13px] text-charcoal-soft/70">{product.tagline}</p>
        </div>
      </div>
      <div className="mt-2 flex items-center gap-2 text-[14px]">
        <span className="text-charcoal">{formatPrice(product.price)}</span>
        {product.compareAtPrice && (
          <span className="text-charcoal-soft/50 line-through">{formatPrice(product.compareAtPrice)}</span>
        )}
      </div>
    </Link>
  );
}
