import Hero from "@/components/home/Hero";
import CategoryRail from "@/components/home/CategoryRail";
import CategoryGrid from "@/components/home/CategoryGrid";
import WhyColorFurniture from "@/components/home/WhyColorFurniture";
import VisitUs from "@/components/home/VisitUs";
import InstagramGallery from "@/components/home/InstagramGallery";
import FinalCta from "@/components/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryRail />
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
