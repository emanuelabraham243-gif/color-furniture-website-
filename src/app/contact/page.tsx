import type { Metadata } from "next";
import ContactPageContent from "@/components/pages/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Color Furniture in Addis Ababa — call, WhatsApp, or visit our showroom.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
