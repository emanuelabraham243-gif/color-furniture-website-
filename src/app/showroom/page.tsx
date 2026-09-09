import type { Metadata } from "next";
import ShowroomPageContent from "@/components/pages/ShowroomPageContent";

export const metadata: Metadata = {
  title: "Visit Us",
  description: "Visit Color Furniture in Addis Ababa — address, directions, and everything you need to plan your visit.",
};

export default function ShowroomPage() {
  return <ShowroomPageContent />;
}
