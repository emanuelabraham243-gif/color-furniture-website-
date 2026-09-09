import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { themeInitScript } from "@/components/ThemeToggle";
import { languageInitScript, LanguageProvider } from "@/lib/i18n/LanguageProvider";
import { site } from "@/data/site";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "furniture Addis Ababa",
    "Color Furniture",
    "furniture manufacturer Ethiopia",
    "sofa Addis Ababa",
    "bedroom furniture Ethiopia",
  ],
  openGraph: {
    title: site.name,
    description: site.description,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${fraunces.variable} ${manrope.variable} h-full`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script dangerouslySetInnerHTML={{ __html: languageInitScript }} />
      </head>
      <body className="flex min-h-full flex-col bg-ivory text-ink antialiased">
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFab />
        </LanguageProvider>
      </body>
    </html>
  );
}
