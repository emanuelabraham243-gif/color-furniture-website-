"use client";

import Link from "next/link";
import { categories } from "@/data/categories";
import { site, whatsappLink, mapsLink } from "@/data/site";
import { useT } from "@/lib/i18n/LanguageProvider";

export default function Footer() {
  const t = useT();

  return (
    <footer className="bg-noir text-snow">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-20">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2">
            <Link href="/" className="font-display text-3xl">
              {site.name}
            </Link>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-snow/60">{t("site.description")}</p>
            <div className="mt-6 flex gap-4 text-[12px] uppercase tracking-[0.12em] text-snow/70">
              <a href={site.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-snow">
                Facebook
              </a>
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-snow">
                Instagram
              </a>
              <a href={site.social.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-snow">
                TikTok
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow text-[11px] text-snow/50">{t("footer.shop")}</p>
            <ul className="mt-4 space-y-2.5 text-[14px] text-snow/75">
              {categories.slice(0, 5).map((c) => (
                <li key={c.slug}>
                  <Link href={`/collections/${c.slug}`} className="hover:text-snow">
                    {t(`categories.${c.slug}.name`)}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/catalog" className="hover:text-snow">
                  {t("footer.allProducts")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-[11px] text-snow/50">{t("footer.company")}</p>
            <ul className="mt-4 space-y-2.5 text-[14px] text-snow/75">
              <li>
                <Link href="/about" className="hover:text-snow">
                  {t("footer.aboutUs")}
                </Link>
              </li>
              <li>
                <Link href="/showroom" className="hover:text-snow">
                  {t("footer.showroom")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-snow">
                  {t("footer.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-[11px] text-snow/50">{t("footer.visitUs")}</p>
            <ul className="mt-4 space-y-2.5 text-[14px] text-snow/75">
              <li>
                <a href={mapsLink()} target="_blank" rel="noreferrer" className="hover:text-snow">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className="hover:text-snow">
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink(`Hello ${site.name}, I'd like some help.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-snow"
                >
                  {t("footer.whatsappUs")}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-snow/15 pt-8 text-[12px] text-snow/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. {t("footer.rightsReserved")}
          </p>
          <p>{t("footer.manufacturedIn")}</p>
        </div>
      </div>
    </footer>
  );
}
