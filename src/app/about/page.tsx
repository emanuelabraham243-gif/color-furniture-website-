import type { Metadata } from "next";
import AboutPageContent from "@/components/pages/AboutPageContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Color Furniture is an Addis Ababa furniture manufacturer with two branches, a workshop, and import/export and project supply capability.",
};

export default function AboutPage() {
  return <AboutPageContent />;
}
