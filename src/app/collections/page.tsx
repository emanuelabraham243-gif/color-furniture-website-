import type { Metadata } from "next";
import CollectionsPageContent from "@/components/collections/CollectionsPageContent";

export const metadata: Metadata = {
  title: "Collections",
  description: "Explore Color Furniture's categories — sofas, dining tables, center tables, TV stands, beds, children's beds, wardrobes and dressing tables.",
};

export default function CollectionsPage() {
  return <CollectionsPageContent />;
}
