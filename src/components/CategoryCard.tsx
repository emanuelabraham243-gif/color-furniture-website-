import Link from "next/link";
import type { Category } from "@/data/categories";
import CoverImage from "./CoverImage";

export default function CategoryCard({
  category,
  size = "md",
}: {
  category: Category;
  size?: "sm" | "md" | "lg";
}) {
  return (
    <Link href="/products" className="group relative block overflow-hidden bg-charcoal">
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
          label={category.name}
          eyebrow="Category"
          className="opacity-90 transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="font-display text-2xl text-ivory">{category.name}</h3>
        <span className="link-underline mt-2 inline-block text-[12px] uppercase tracking-[0.14em] text-ivory/90">
          Explore
        </span>
      </div>
    </Link>
  );
}
