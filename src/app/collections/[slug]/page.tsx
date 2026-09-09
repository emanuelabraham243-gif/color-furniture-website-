import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories, getCategory } from "@/data/categories";
import CollectionDetailContent from "@/components/collections/CollectionDetailContent";

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

  return <CollectionDetailContent slug={slug} />;
}
