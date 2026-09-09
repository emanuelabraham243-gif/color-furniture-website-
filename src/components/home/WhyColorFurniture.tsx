import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const reasons = [
  {
    n: "01",
    title: "Manufacturing",
    text: "Furniture is built in our own workshop, not sourced and resold.",
  },
  {
    n: "02",
    title: "Retail Branches",
    text: "Two branches in Addis Ababa where our furniture is on display and available for purchase.",
  },
  {
    n: "03",
    title: "Import & Export",
    text: "We import and export furniture and materials alongside our own production.",
  },
  {
    n: "04",
    title: "Project & Infrastructure Supply",
    text: "We supply furniture and infrastructure services to other businesses and projects.",
  },
];

export default function WhyColorFurniture() {
  return (
    <section className="border-y border-line bg-cream">
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Why Color Furniture"
            title="Built on Manufacturing, Not Just Retail"
            description="Color Furniture operates two branches and a dedicated workshop in Addis Ababa, with the organization continuing to grow."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <Reveal key={r.n} delay={i * 90}>
              <span className="font-display text-sm text-wood">{r.n}</span>
              <h3 className="mt-4 font-display text-xl text-charcoal">{r.title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-charcoal-soft/75">{r.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
