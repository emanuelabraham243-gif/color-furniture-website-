import Link from "next/link";
import { categories } from "@/data/categories";
import { site, whatsappLink, mapsLink } from "@/data/site";
import { CategoryIcons, ArrowRightIcon, MapPinIcon, PhoneIcon, WhatsAppGlyph } from "@/components/icons";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="brand-gradient absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-20 blur-3xl" />
        <div className="brand-gradient absolute -bottom-40 -left-24 h-80 w-80 rounded-full opacity-10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="eyebrow text-[12px] font-semibold uppercase tracking-[0.18em] text-orange-dark">
            Addis Ababa · Manufactured Locally
          </p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-[1.1] text-ink text-balance sm:text-5xl">
            Furniture, Crafted for Every Home.
          </h1>
          <p className="mt-5 max-w-lg text-[15.5px] leading-relaxed text-charcoal-soft">
            Color Furniture designs and builds sofas, dining sets, bedroom and storage furniture —
            manufactured in our own workshop and available across our branches in Addis Ababa.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/products"
              className="flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[13.5px] font-semibold text-paper transition-colors hover:bg-charcoal"
            >
              Explore Products
              <ArrowRightIcon width={15} height={15} />
            </Link>
            <a
              href={whatsappLink("Hi, I'd like to ask about your furniture.")}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-line bg-paper px-6 py-3.5 text-[13.5px] font-semibold text-ink transition-colors hover:border-green hover:text-green-dark"
            >
              <WhatsAppGlyph width={16} height={16} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange-dark">What We Build</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl">Our Product Range</h2>
          </div>
          <Link href="/products" className="hidden text-[13.5px] font-semibold text-green hover:text-green-dark sm:block">
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((c) => {
            const Icon = CategoryIcons[c.slug];
            return (
              <Link
                key={c.slug}
                href="/products"
                className="group flex flex-col items-center gap-3 rounded-2xl border border-line bg-paper p-6 text-center transition-all hover:-translate-y-1 hover:border-orange hover:shadow-lg hover:shadow-orange/5"
              >
                <span className="brand-gradient flex h-14 w-14 items-center justify-center rounded-full text-paper opacity-90 transition-transform group-hover:scale-105">
                  <Icon width={26} height={26} />
                </span>
                <span className="font-display text-[14px] font-semibold text-ink">{c.name}</span>
              </Link>
            );
          })}
        </div>

        <Link href="/products" className="mt-8 flex items-center justify-center gap-1.5 text-[13.5px] font-semibold text-green sm:hidden">
          View all products →
        </Link>
      </section>

      {/* About teaser */}
      <section className="border-y border-line bg-paper">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-orange-dark">About Color Furniture</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-ink sm:text-3xl">
              Built on manufacturing, not just retail.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-charcoal-soft">
              Color Furniture operates two branches and a dedicated workshop in Addis Ababa, where we
              manufacture our furniture rather than simply reselling it. Alongside our showroom
              collection, we import and export furniture and materials, and supply furniture and
              infrastructure services for other businesses and projects.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 font-display text-[13.5px] font-semibold text-green hover:text-green-dark"
            >
              Learn more about us
              <ArrowRightIcon width={14} height={14} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Branches", value: "2" },
              { label: "Workshop", value: "1" },
              { label: "Manufacturing", value: "In-house" },
              { label: "Import & Export", value: "Yes" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-line bg-cream p-6">
                <p className="font-display text-2xl font-bold text-ink">{stat.value}</p>
                <p className="mt-1 text-[12.5px] uppercase tracking-wide text-charcoal-soft">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="brand-gradient flex flex-col items-start gap-6 rounded-3xl p-8 sm:flex-row sm:items-center sm:justify-between sm:p-12">
          <div>
            <h2 className="font-display text-2xl font-bold text-paper sm:text-3xl">Visit our showroom</h2>
            <p className="mt-2 flex items-center gap-2 text-[14px] text-paper/90">
              <MapPinIcon width={16} height={16} />
              {site.address.line1}, {site.address.line2}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 rounded-full bg-paper px-5 py-3 text-[13.5px] font-semibold text-ink hover:bg-cream"
            >
              <PhoneIcon width={15} height={15} />
              {site.phoneDisplay}
            </a>
            <a
              href={mapsLink()}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-paper/60 px-5 py-3 text-[13.5px] font-semibold text-paper hover:bg-paper/10"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
