import type { CategorySlug } from "./categories";

export type Availability = "In Stock" | "Made to Order" | "Out of Stock";

export interface ProductColor {
  name: string;
  hex: string;
}

export interface Dimensions {
  width: number;
  depth: number;
  height: number;
  unit: "cm";
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: CategorySlug;
  tagline: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  currency: "ETB";
  availability: Availability;
  leadTime?: string;
  materials: string[];
  colors: ProductColor[];
  dimensions: Dimensions;
  care: string[];
  images: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
  isFeatured?: boolean;
  createdAt: string;
}

// No individual products have been provided yet — the client will send
// product names, details, and photos, or ask to publish categories only.
// Every page that lists products (home rails, catalog, collection detail,
// product detail) is already built and will populate automatically once
// real entries are added here.
export const products: Product[] = [];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product, count = 4) {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, count)
    .concat(products.filter((p) => p.id !== product.id && p.category !== product.category))
    .slice(0, count);
}

export function formatPrice(amount: number) {
  return `ETB ${amount.toLocaleString("en-US")}`;
}

export const allMaterials = Array.from(new Set(products.flatMap((p) => p.materials))).sort();

export const allColors = Array.from(
  new Map(products.flatMap((p) => p.colors).map((c) => [c.name, c])).values()
).sort((a, b) => a.name.localeCompare(b.name));
