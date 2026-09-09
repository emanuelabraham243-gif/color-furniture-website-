"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import type { Availability, Product } from "@/data/products";
import { allColors, allMaterials, formatPrice } from "@/data/products";
import type { Category } from "@/data/categories";
import ProductCard from "@/components/ProductCard";
import { cx } from "@/lib/utils";

type SortKey = "featured" | "newest" | "price-asc" | "price-desc";

const availabilityOptions: Availability[] = ["In Stock", "Made to Order", "Out of Stock"];

const sortLabels: Record<SortKey, string> = {
  featured: "Featured",
  newest: "Newest",
  "price-asc": "Price: Low to High",
  "price-desc": "Price: High to Low",
};

export default function CatalogClient({
  products,
  categories,
}: {
  products: Product[];
  categories: Category[];
}) {
  const searchParams = useSearchParams();
  const initialSort = (searchParams.get("sort") as SortKey) || "featured";
  const initialCategory = searchParams.get("category") || "all";

  const priceBounds = useMemo(() => {
    if (products.length === 0) return { min: 0, max: 0 };
    const prices = products.map((p) => p.price);
    return { min: Math.min(...prices), max: Math.max(...prices) };
  }, [products]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>(initialCategory);
  const [materials, setMaterials] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [availability, setAvailability] = useState<Availability[]>([]);
  const [minPrice, setMinPrice] = useState(priceBounds.min);
  const [maxPrice, setMaxPrice] = useState(priceBounds.max);
  const [sort, setSort] = useState<SortKey>(initialSort);
  const [filtersOpen, setFiltersOpen] = useState(false);

  function toggle<T>(list: T[], value: T, setList: (v: T[]) => void) {
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  }

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (materials.length && !materials.some((m) => p.materials.includes(m))) return false;
      if (colors.length && !colors.some((c) => p.colors.some((pc) => pc.name === c))) return false;
      if (availability.length && !availability.includes(p.availability)) return false;
      if (p.price < minPrice || p.price > maxPrice) return false;
      if (search.trim()) {
        const q = search.trim().toLowerCase();
        if (
          !p.name.toLowerCase().includes(q) &&
          !p.tagline.toLowerCase().includes(q) &&
          !p.category.toLowerCase().includes(q)
        ) {
          return false;
        }
      }
      return true;
    });

    list = [...list].sort((a, b) => {
      switch (sort) {
        case "newest":
          return +new Date(b.createdAt) - +new Date(a.createdAt);
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        default:
          return Number(b.isFeatured) - Number(a.isFeatured) || Number(b.isBestSeller) - Number(a.isBestSeller);
      }
    });

    return list;
  }, [products, category, materials, colors, availability, minPrice, maxPrice, search, sort]);

  function resetFilters() {
    setCategory("all");
    setMaterials([]);
    setColors([]);
    setAvailability([]);
    setMinPrice(priceBounds.min);
    setMaxPrice(priceBounds.max);
    setSearch("");
  }

  const activeFilterCount =
    (category !== "all" ? 1 : 0) +
    materials.length +
    colors.length +
    availability.length +
    (minPrice !== priceBounds.min || maxPrice !== priceBounds.max ? 1 : 0);

  if (products.length === 0) {
    return (
      <div className="mx-auto max-w-[1440px] px-6 pb-28 pt-32 md:px-10 md:pt-40">
        <div className="border-b border-line pb-10">
          <p className="eyebrow mb-4 text-[11px] font-medium uppercase text-wood-dark">The Full Collection</p>
          <h1 className="font-display text-4xl text-charcoal md:text-5xl">Shop All Furniture</h1>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 py-32 text-center">
          <p className="font-display text-2xl text-charcoal">The full catalog is coming soon</p>
          <p className="max-w-md text-[14px] leading-relaxed text-charcoal-soft/70">
            Individual product photos and pricing are being added. In the meantime, browse by category or ask
            us directly.
          </p>
          <Link
            href="/collections"
            className="mt-2 border border-charcoal px-6 py-3 text-[12px] uppercase tracking-[0.12em] text-charcoal hover:bg-charcoal hover:text-ivory"
          >
            Browse Categories
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1440px] px-6 pb-28 pt-32 md:px-10 md:pt-40">
      <div className="flex flex-col gap-6 border-b border-line pb-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow mb-4 text-[11px] font-medium uppercase text-wood-dark">The Full Collection</p>
          <h1 className="font-display text-4xl text-charcoal md:text-5xl">Shop All Furniture</h1>
        </div>
        <div className="relative w-full max-w-sm">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search sofas, tables, chairs…"
            aria-label="Search products"
            className="w-full border border-line bg-ivory px-4 py-3 text-[14px] text-charcoal placeholder:text-charcoal-soft/50 focus:border-charcoal focus:outline-none"
          />
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 py-6 md:hidden">
        <button
          onClick={() => setFiltersOpen(true)}
          className="border border-charcoal px-5 py-2.5 text-[12px] uppercase tracking-[0.12em] text-charcoal"
        >
          Filters {activeFilterCount > 0 && `(${activeFilterCount})`}
        </button>
        <SortSelect value={sort} onChange={setSort} />
      </div>

      <div className="mt-2 grid grid-cols-1 gap-12 md:mt-10 md:grid-cols-[240px_1fr]">
        <aside
          className={cx(
            "fixed inset-0 z-50 overflow-y-auto bg-ivory p-6 transition-transform duration-300 md:relative md:inset-auto md:z-auto md:translate-x-0 md:overflow-visible md:bg-transparent md:p-0",
            filtersOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          )}
        >
          <div className="mb-6 flex items-center justify-between md:hidden">
            <span className="font-display text-xl text-charcoal">Filters</span>
            <button onClick={() => setFiltersOpen(false)} aria-label="Close filters" className="text-2xl leading-none">
              ×
            </button>
          </div>

          <FilterGroup title="Category">
            <label className="flex cursor-pointer items-center gap-2 py-1.5 text-[14px] text-charcoal-soft">
              <input
                type="radio"
                name="category"
                checked={category === "all"}
                onChange={() => setCategory("all")}
                className="accent-wood-dark"
              />
              All Categories
            </label>
            {categories.map((c) => (
              <label key={c.slug} className="flex cursor-pointer items-center gap-2 py-1.5 text-[14px] text-charcoal-soft">
                <input
                  type="radio"
                  name="category"
                  checked={category === c.slug}
                  onChange={() => setCategory(c.slug)}
                  className="accent-wood-dark"
                />
                {c.name}
              </label>
            ))}
          </FilterGroup>

          <FilterGroup title="Price Range">
            <div className="flex items-center gap-3 text-[13px] text-charcoal-soft">
              <input
                type="number"
                value={minPrice}
                min={priceBounds.min}
                max={maxPrice}
                onChange={(e) => setMinPrice(Number(e.target.value) || priceBounds.min)}
                className="w-full border border-line bg-ivory px-2 py-2 focus:border-charcoal focus:outline-none"
                aria-label="Minimum price"
              />
              <span>–</span>
              <input
                type="number"
                value={maxPrice}
                min={minPrice}
                max={priceBounds.max}
                onChange={(e) => setMaxPrice(Number(e.target.value) || priceBounds.max)}
                className="w-full border border-line bg-ivory px-2 py-2 focus:border-charcoal focus:outline-none"
                aria-label="Maximum price"
              />
            </div>
            <p className="mt-2 text-[12px] text-charcoal-soft/60">
              {formatPrice(priceBounds.min)} – {formatPrice(priceBounds.max)}
            </p>
          </FilterGroup>

          <FilterGroup title="Material">
            {allMaterials.map((m) => (
              <label key={m} className="flex cursor-pointer items-center gap-2 py-1.5 text-[14px] text-charcoal-soft">
                <input
                  type="checkbox"
                  checked={materials.includes(m)}
                  onChange={() => toggle(materials, m, setMaterials)}
                  className="accent-wood-dark"
                />
                {m}
              </label>
            ))}
          </FilterGroup>

          <FilterGroup title="Color">
            <div className="flex flex-wrap gap-2">
              {allColors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => toggle(colors, c.name, setColors)}
                  title={c.name}
                  aria-pressed={colors.includes(c.name)}
                  aria-label={c.name}
                  className={cx(
                    "h-8 w-8 rounded-full border-2 transition-transform",
                    colors.includes(c.name) ? "border-wood-dark scale-110" : "border-transparent"
                  )}
                  style={{ backgroundColor: c.hex }}
                />
              ))}
            </div>
          </FilterGroup>

          <FilterGroup title="Availability" last>
            {availabilityOptions.map((a) => (
              <label key={a} className="flex cursor-pointer items-center gap-2 py-1.5 text-[14px] text-charcoal-soft">
                <input
                  type="checkbox"
                  checked={availability.includes(a)}
                  onChange={() => toggle(availability, a, setAvailability)}
                  className="accent-wood-dark"
                />
                {a}
              </label>
            ))}
          </FilterGroup>

          <button
            onClick={resetFilters}
            className="mt-8 text-[12px] uppercase tracking-[0.12em] text-wood-dark underline underline-offset-4"
          >
            Reset Filters
          </button>

          <button
            onClick={() => setFiltersOpen(false)}
            className="mt-8 w-full bg-charcoal py-3 text-[12px] uppercase tracking-[0.12em] text-ivory md:hidden"
          >
            Show {filtered.length} Results
          </button>
        </aside>

        <div>
          <div className="mb-8 hidden items-center justify-between md:flex">
            <p className="text-[13px] text-charcoal-soft/70">
              {filtered.length} {filtered.length === 1 ? "piece" : "pieces"}
            </p>
            <SortSelect value={sort} onChange={setSort} />
          </div>

          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-32 text-center">
              <p className="font-display text-2xl text-charcoal">No pieces match those filters</p>
              <p className="mt-3 text-[14px] text-charcoal-soft/70">Try widening your search or resetting filters.</p>
              <button
                onClick={resetFilters}
                className="mt-6 border border-charcoal px-6 py-3 text-[12px] uppercase tracking-[0.12em] text-charcoal"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function FilterGroup({ title, children, last = false }: { title: string; children: React.ReactNode; last?: boolean }) {
  return (
    <div className={cx("py-6", !last && "border-b border-line")}>
      <h3 className="mb-3 text-[12px] font-medium uppercase tracking-[0.1em] text-charcoal">{title}</h3>
      {children}
    </div>
  );
}

function SortSelect({ value, onChange }: { value: SortKey; onChange: (v: SortKey) => void }) {
  return (
    <label className="flex items-center gap-2 text-[13px] text-charcoal-soft">
      <span className="hidden sm:inline">Sort by</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortKey)}
        className="border border-line bg-ivory px-3 py-2.5 text-[13px] text-charcoal focus:border-charcoal focus:outline-none"
      >
        {(Object.keys(sortLabels) as SortKey[]).map((key) => (
          <option key={key} value={key}>
            {sortLabels[key]}
          </option>
        ))}
      </select>
    </label>
  );
}
