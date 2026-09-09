import Link from "next/link";
import { categories } from "@/data/categories";
import CategoryCard from "@/components/CategoryCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function CategoryRail() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 pt-28 md:px-10 md:pt-36">
      <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="What We Build"
          title="Eight Categories. One Workshop."
          description="Every piece is manufactured in-house in Addis Ababa — mix categories freely, or furnish a whole room from a single line."
        />
        <Link href="/collections" className="link-underline whitespace-nowrap text-[13px] uppercase tracking-[0.12em] text-wood-dark">
          View All Collections →
        </Link>
      </Reveal>

      <div className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2">
        {categories.map((c, i) => (
          <Reveal key={c.slug} delay={i * 60} className="w-[70vw] flex-none snap-start sm:w-[42vw] lg:w-[26vw]">
            <CategoryCard category={c} size="sm" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
