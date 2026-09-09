"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { categories } from "@/data/categories";
import { site, whatsappLink } from "@/data/site";
import { cx } from "@/lib/utils";
import { useT } from "@/lib/i18n/LanguageProvider";

export default function Header() {
  const pathname = usePathname();
  const t = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  const navLinks = [
    { href: "/catalog", label: t("nav.shop") },
    { href: "/about", label: t("nav.about") },
    { href: "/showroom", label: t("nav.showroom") },
    { href: "/contact", label: t("nav.contact") },
  ];

  const isHome = pathname === "/";
  const solid = scrolled || !isHome || open;

  // Close menus on navigation. Adjusting state during render (rather than in
  // an effect) avoids an extra render pass after each route change.
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
    setCollectionsOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cx(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
          solid ? "bg-ivory/95 shadow-[0_1px_0_0_var(--color-line)] backdrop-blur-sm" : "bg-transparent"
        )}
      >
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 md:px-10">
          <Link href="/" className="shrink-0">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-9 md:flex">
            <div
              className="group relative"
              onMouseEnter={() => setCollectionsOpen(true)}
              onMouseLeave={() => setCollectionsOpen(false)}
            >
              <Link
                href="/collections"
                className={cx(
                  "text-[13px] uppercase tracking-[0.12em] transition-colors",
                  solid ? "text-charcoal hover:text-wood-dark" : "text-ivory hover:text-beige"
                )}
              >
                {t("nav.collections")}
              </Link>
              <div
                className={cx(
                  "absolute left-1/2 top-full grid w-[420px] -translate-x-1/2 grid-cols-2 gap-x-6 gap-y-3 bg-ivory p-6 shadow-xl transition-all duration-200",
                  collectionsOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"
                )}
              >
                {categories.map((c) => (
                  <Link key={c.slug} href={`/collections/${c.slug}`} className="text-[13px] text-charcoal-soft hover:text-wood-dark">
                    {t(`categories.${c.slug}.name`)}
                  </Link>
                ))}
                <Link
                  href="/collections"
                  className="col-span-2 mt-2 border-t border-line pt-3 text-[12px] uppercase tracking-[0.12em] text-wood-dark"
                >
                  {t("nav.viewAllCollections")}
                </Link>
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cx(
                  "text-[13px] uppercase tracking-[0.12em] transition-colors",
                  solid ? "text-charcoal hover:text-wood-dark" : "text-ivory hover:text-beige"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <ThemeToggle tone={solid ? "default" : "on-dark"} />
            <LanguageToggle tone={solid ? "default" : "on-dark"} />
            <a
              href={site.phoneHref}
              className={cx(
                "text-[13px] transition-colors",
                solid ? "text-charcoal-soft hover:text-ink" : "text-ivory/85 hover:text-ivory"
              )}
            >
              {site.phoneDisplay}
            </a>
            <a
              href={whatsappLink("Hi, I'd like to ask about your furniture.")}
              target="_blank"
              rel="noreferrer"
              className={cx(
                "border px-5 py-2.5 text-[12px] uppercase tracking-[0.14em] transition-colors",
                solid
                  ? "border-charcoal text-charcoal hover:bg-charcoal hover:text-ivory"
                  : "border-ivory/70 text-ivory hover:bg-ivory hover:text-charcoal"
              )}
            >
              {t("common.whatsappUs")}
            </a>
          </div>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={cx(
                "h-px w-6 transition-transform duration-300",
                solid ? "bg-charcoal" : "bg-ivory",
                open && "translate-y-[3.5px] rotate-45"
              )}
            />
            <span
              className={cx(
                "h-px w-6 transition-transform duration-300",
                solid ? "bg-charcoal" : "bg-ivory",
                open && "-translate-y-[3.5px] -rotate-45"
              )}
            />
          </button>
        </div>
      </header>

      <div
        className={cx(
          "fixed inset-x-0 top-20 bottom-0 z-40 bg-ivory transition-transform duration-500 md:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex h-full flex-col gap-1 overflow-y-auto px-6 py-8">
          <p className="eyebrow mb-2 text-[11px] text-charcoal-soft/60">{t("nav.collections")}</p>
          {categories.map((c) => (
            <Link key={c.slug} href={`/collections/${c.slug}`} className="border-b border-line py-3 font-display text-xl text-charcoal">
              {t(`categories.${c.slug}.name`)}
            </Link>
          ))}
          <p className="eyebrow mb-2 mt-6 text-[11px] text-charcoal-soft/60">{t("nav.menu")}</p>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="border-b border-line py-3 font-display text-xl text-charcoal">
              {link.label}
            </Link>
          ))}
          <div className="mt-6 flex items-center justify-between">
            <a href={site.phoneHref} className="py-2 text-[14px] text-charcoal-soft">
              {site.phoneDisplay}
            </a>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </div>
          <a
            href={whatsappLink("Hi, I'd like to ask about your furniture.")}
            target="_blank"
            rel="noreferrer"
            className="mt-2 flex items-center justify-center gap-2 bg-charcoal px-5 py-3.5 text-[13px] uppercase tracking-[0.14em] text-ivory"
          >
            {t("common.whatsappUs")}
          </a>
        </nav>
      </div>
    </>
  );
}
