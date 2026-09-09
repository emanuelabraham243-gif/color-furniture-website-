import { Suspense } from "react";
import type { Metadata } from "next";
import CatalogClient from "@/components/catalog/CatalogClient";
import { products } from "@/data/products";
import { categories } from "@/data/categories";

export const metadata: Metadata = {
  title: "Shop All Furniture",
  description: "Browse the full Color Furniture collection — sofas, dining, bedroom and storage pieces, manufactured in Addis Ababa.",
};

export default function CatalogPage() {
  return (
    <Suspense>
      <CatalogClient products={products} categories={categories} />
    </Suspense>
  );
}
