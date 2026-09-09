import type { Metadata } from "next";
import { site, whatsappLink } from "@/data/site";
import { WhatsAppGlyph } from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description: "Color Furniture is an Addis Ababa furniture manufacturer with two branches, a workshop, and import/export and project supply capability.",
};

const capabilities = [
  {
    title: "Manufacturing",
    description: "Furniture is built in our own workshop, not sourced and resold.",
  },
  {
    title: "Retail Branches",
    description: "Two branches in Addis Ababa where our furniture is on display and available for purchase.",
  },
  {
    title: "Import & Export",
    description: "We import and export furniture and materials alongside our own production.",
  },
  {
    title: "Project & Infrastructure Supply",
    description: "We supply furniture and infrastructure services to other businesses and projects.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-line bg-paper">
        <div className="mx-auto max-w-4xl px-5 py-16 text-center sm:px-8 sm:py-20">
          <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange-dark">About Us</p>
          <h1 className="mt-2 font-display text-3xl font-bold text-ink sm:text-4xl">
            A furniture manufacturer, growing across Addis Ababa.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[15.5px] leading-relaxed text-charcoal-soft">
            Color Furniture operates two branches and a dedicated workshop in Addis Ababa. We
            manufacture our own furniture, supply and support other furniture businesses and
            infrastructure projects, and import and export furniture and materials — with the
            organization continuing to grow.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <h2 className="text-center font-display text-2xl font-bold text-ink sm:text-3xl">What We Do</h2>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {capabilities.map((c) => (
            <div key={c.title} className="rounded-2xl border border-line bg-paper p-7">
              <h3 className="font-display text-lg font-semibold text-ink">{c.title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-charcoal-soft">{c.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-paper">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-5 py-16 text-center sm:px-8 sm:py-20">
          <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">Want to work with us?</h2>
          <p className="max-w-lg text-[14.5px] text-charcoal-soft">
            Whether you&apos;re furnishing a home or need furniture for a larger project, get in
            touch and we&apos;ll help.
          </p>
          <a
            href={whatsappLink("Hi, I'd like to know more about Color Furniture.")}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-green px-6 py-3.5 text-[13.5px] font-semibold text-paper hover:bg-green-dark"
          >
            <WhatsAppGlyph width={16} height={16} />
            Chat With Us
          </a>
          <a href={site.phoneHref} className="text-[13.5px] font-medium text-charcoal-soft hover:text-ink">
            or call {site.phoneDisplay}
          </a>
        </div>
      </section>
    </div>
  );
}
