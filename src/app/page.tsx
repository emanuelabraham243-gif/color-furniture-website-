import Link from "next/link";
import Hero from "@/components/home/Hero";
import CategoryRail from "@/components/home/CategoryRail";
import CategoryGrid from "@/components/home/CategoryGrid";
import WhyColorFurniture from "@/components/home/WhyColorFurniture";
import VisitUs from "@/components/home/VisitUs";
import InstagramGallery from "@/components/home/InstagramGallery";
import FinalCta from "@/components/FinalCta";
import ProductRail from "@/components/ProductRail";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { products } from "@/data/products";

export default function Home() {
  const newArrivals = products.filter((p) => p.isNew).slice(0, 8);
  const bestSellers = products.filter((p) => p.isBestSeller).slice(0, 8);

  return (
    <>
      <Hero />

      <CategoryRail />

      {newArrivals.length > 0 && (
        <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
          <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Just Landed"
              title="New Arrivals"
              description="The latest pieces to arrive at our Addis Ababa branches, fresh off the workshop floor."
            />
            <Link href="/catalog?sort=newest" className="link-underline whitespace-nowrap text-[13px] uppercase tracking-[0.12em] text-wood-dark">
              Shop New Arrivals →
            </Link>
          </Reveal>
          <div className="mt-12">
            <ProductRail products={newArrivals} />
          </div>
        </section>
      )}

      {bestSellers.length > 0 && (
        <section className="border-y border-line bg-cream">
          <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
            <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <SectionHeading
                eyebrow="Customer Favorites"
                title="Best Sellers"
                description="The pieces our customers return to us for, again and again."
              />
              <Link href="/catalog?sort=featured" className="link-underline whitespace-nowrap text-[13px] uppercase tracking-[0.12em] text-wood-dark">
                Shop Best Sellers →
              </Link>
            </Reveal>
            <div className="mt-12">
              <ProductRail products={bestSellers} />
            </div>
          </div>
        </section>
      )}

      <CategoryGrid />

      <WhyColorFurniture />

      <VisitUs />

      <InstagramGallery />

      <FinalCta
        eyebrow="Ready When You Are"
        title="Let's Furnish Something Beautiful."
        description="Browse our product categories online, or come see the furniture in person at one of our Addis Ababa branches — our team is ready to help."
        imageSeed="color-final-cta"
      />
    </>
  );
}
