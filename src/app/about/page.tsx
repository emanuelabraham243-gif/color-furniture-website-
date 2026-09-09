import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import FinalCta from "@/components/FinalCta";
import CoverImage from "@/components/CoverImage";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Color Furniture is an Addis Ababa furniture manufacturer with two branches, a workshop, and import/export and project supply capability.",
};

const stats = [
  { value: "2", label: "Branches" },
  { value: "1", label: "Workshop" },
  { value: "In-House", label: "Manufacturing" },
  { value: "Yes", label: "Import & Export" },
];

const pillars = [
  {
    title: "Manufacturing",
    text: "Furniture is built in our own workshop, not sourced and resold.",
    seed: "color-about-manufacturing",
  },
  {
    title: "Retail Branches",
    text: "Two branches in Addis Ababa where our furniture is on display and available for purchase.",
    seed: "color-about-branches",
  },
  {
    title: "Import, Export & Project Supply",
    text: "Alongside our own production, we import and export furniture and materials, and supply furniture and infrastructure services to other businesses and projects.",
    seed: "color-about-supply",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="relative flex h-[75vh] min-h-[480px] items-end overflow-hidden bg-charcoal">
        <CoverImage seed="color-about-hero" label={site.name} eyebrow="Our Story" className="opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-charcoal/40" />
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-16 md:px-10">
          <p className="eyebrow mb-5 text-[11px] font-medium uppercase text-beige">Our Story</p>
          <h1 className="max-w-2xl font-display text-4xl leading-[1.1] text-ivory md:text-6xl">
            A Furniture Manufacturer, Growing Across Addis Ababa.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
        <Reveal>
          <p className="font-display text-2xl leading-relaxed text-charcoal text-balance md:text-3xl">
            Color Furniture operates two branches and a dedicated workshop in Addis Ababa.
          </p>
          <p className="mt-8 text-[15px] leading-relaxed text-charcoal-soft/75">
            We manufacture our own furniture rather than simply reselling it. Alongside our branch
            collections, we import and export furniture and materials, and supply furniture and
            infrastructure services for other businesses and projects — with the organization
            continuing to grow.
          </p>
        </Reveal>
      </section>

      <section className="border-y border-line bg-cream">
        <div className="mx-auto grid max-w-[1440px] grid-cols-2 gap-6 px-6 py-16 md:grid-cols-4 md:px-10">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="text-center">
              <p className="font-display text-4xl text-wood-dark md:text-5xl">{s.value}</p>
              <p className="mt-2 text-[12px] uppercase tracking-[0.1em] text-charcoal-soft/70">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
        <div className="space-y-24 md:space-y-32">
          {pillars.map((pillar, i) => (
            <div key={pillar.title} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
              <Reveal className={`relative aspect-[4/5] overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <CoverImage seed={pillar.seed} label={pillar.title} eyebrow={site.name} />
              </Reveal>
              <Reveal className={i % 2 === 1 ? "lg:order-1" : ""}>
                <span className="font-display text-sm text-wood">{`0${i + 1}`}</span>
                <h2 className="mt-4 font-display text-3xl text-charcoal text-balance md:text-4xl">{pillar.title}</h2>
                <p className="mt-6 max-w-md text-[15px] leading-relaxed text-charcoal-soft/80">{pillar.text}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      <FinalCta
        eyebrow="Visit Us"
        title="Want to Work With Us?"
        description="Whether you're furnishing a home or need furniture for a larger project, get in touch and we'll help."
        imageSeed="color-about-cta"
      />
    </div>
  );
}
