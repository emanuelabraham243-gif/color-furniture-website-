import Link from "next/link";
import { categories } from "@/data/categories";
import { site, whatsappLink, mapsLink } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <Link href="/" className="font-display text-3xl">
              {site.name}
            </Link>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-ivory/60">
              {site.description}
            </p>
            <div className="mt-6 flex gap-4 text-[12px] uppercase tracking-[0.12em] text-ivory/70">
              <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-ivory">
                Facebook
              </a>
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-ivory">
                Instagram
              </a>
              <a href={site.social.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-ivory">
                TikTok
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow text-[11px] text-ivory/50">Shop</p>
            <ul className="mt-4 space-y-2.5 text-[14px] text-ivory/75">
              {categories.slice(0, 5).map((c) => (
                <li key={c.slug}>
                  <Link href={`/collections/${c.slug}`} className="hover:text-ivory">
                    {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/catalog" className="hover:text-ivory">
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-[11px] text-ivory/50">Company</p>
            <ul className="mt-4 space-y-2.5 text-[14px] text-ivory/75">
              <li>
                <Link href="/about" className="hover:text-ivory">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/showroom" className="hover:text-ivory">
                  Showroom
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-ivory">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-[11px] text-ivory/50">Visit Us</p>
            <ul className="mt-4 space-y-2.5 text-[14px] text-ivory/75">
              <li>
                <a href={mapsLink()} target="_blank" rel="noreferrer" className="hover:text-ivory">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className="hover:text-ivory">
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink(`Hello ${site.name}, I'd like some help.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ivory"
                >
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-ivory/15 pt-8 text-[12px] text-ivory/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Manufactured in Addis Ababa, Ethiopia.</p>
        </div>
      </div>
    </footer>
  );
}
