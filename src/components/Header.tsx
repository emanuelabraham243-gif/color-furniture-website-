"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import { cx } from "@/lib/utils";
import { site, whatsappLink } from "@/data/site";
import { MenuIcon, PhoneIcon, WhatsAppGlyph, XIcon } from "./icons";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-cream/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cx(
                  "text-[14px] font-medium transition-colors",
                  active ? "text-orange-dark" : "text-charcoal-soft hover:text-ink"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={site.phoneHref}
            className="flex items-center gap-1.5 text-[13.5px] font-medium text-charcoal-soft hover:text-ink"
          >
            <PhoneIcon width={15} height={15} />
            {site.phoneDisplay}
          </a>
          <a
            href={whatsappLink("Hi, I'd like to ask about your furniture.")}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-green px-4 py-2.5 text-[13px] font-semibold text-paper transition-colors hover:bg-green-dark"
          >
            <WhatsAppGlyph width={15} height={15} />
            WhatsApp Us
          </a>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-ink md:hidden"
        >
          {open ? <XIcon width={22} height={22} /> : <MenuIcon width={22} height={22} />}
        </button>
      </div>

      <div
        className={cx(
          "overflow-hidden border-t border-line bg-cream transition-[max-height] duration-300 md:hidden",
          open ? "max-h-96" : "max-h-0"
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-ink hover:bg-paper"
            >
              {link.label}
            </Link>
          ))}
          <a href={site.phoneHref} className="flex items-center gap-2 px-3 py-2.5 text-[15px] font-medium text-charcoal-soft">
            <PhoneIcon width={16} height={16} />
            {site.phoneDisplay}
          </a>
          <a
            href={whatsappLink("Hi, I'd like to ask about your furniture.")}
            target="_blank"
            rel="noreferrer"
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-green px-4 py-3 text-[14px] font-semibold text-paper"
          >
            <WhatsAppGlyph width={16} height={16} />
            WhatsApp Us
          </a>
        </nav>
      </div>
    </header>
  );
}
