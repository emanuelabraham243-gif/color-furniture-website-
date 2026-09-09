import Link from "next/link";
import Logo from "./Logo";
import { site, whatsappLink, mapsLink } from "@/data/site";
import { categories } from "@/data/categories";
import {
  FacebookGlyph,
  InstagramGlyph,
  MapPinIcon,
  PhoneIcon,
  TikTokGlyph,
  WhatsAppGlyph,
} from "./icons";
import { cx } from "@/lib/utils";

function SocialIcon({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: (p: { width?: number; height?: number }) => React.JSX.Element;
}) {
  const pending = !href;
  return (
    <a
      href={pending ? undefined : href}
      target={pending ? undefined : "_blank"}
      rel={pending ? undefined : "noreferrer"}
      aria-disabled={pending}
      title={pending ? `${label} — link coming soon` : label}
      className={cx(
        "flex h-10 w-10 items-center justify-center rounded-full border border-line transition-colors",
        pending ? "cursor-default text-charcoal-soft/40" : "text-charcoal-soft hover:border-orange hover:text-orange-dark"
      )}
    >
      <Icon width={17} height={17} />
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 py-14 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed text-charcoal-soft">
            {site.description}
          </p>
          <div className="mt-5 flex gap-2.5">
            <SocialIcon href={site.social.facebook} label="Facebook" icon={FacebookGlyph} />
            <SocialIcon href={site.social.instagram} label="Instagram" icon={InstagramGlyph} />
            <SocialIcon href={site.social.tiktok} label="TikTok" icon={TikTokGlyph} />
          </div>
        </div>

        <div>
          <p className="font-display text-[13px] font-semibold uppercase tracking-wide text-ink">Products</p>
          <ul className="mt-4 flex flex-col gap-2.5">
            {categories.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <Link href="/products" className="text-[13.5px] text-charcoal-soft hover:text-orange-dark">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-[13px] font-semibold uppercase tracking-wide text-ink">Company</p>
          <ul className="mt-4 flex flex-col gap-2.5">
            <li>
              <Link href="/about" className="text-[13.5px] text-charcoal-soft hover:text-orange-dark">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-[13.5px] text-charcoal-soft hover:text-orange-dark">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="font-display text-[13px] font-semibold uppercase tracking-wide text-ink">Visit Us</p>
          <a
            href={mapsLink()}
            target="_blank"
            rel="noreferrer"
            className="mt-4 flex items-start gap-2 text-[13.5px] text-charcoal-soft hover:text-orange-dark"
          >
            <MapPinIcon width={15} height={15} className="mt-0.5 shrink-0" />
            <span>
              {site.address.line1}
              <br />
              {site.address.line2}
            </span>
          </a>
          <a href={site.phoneHref} className="mt-3 flex items-center gap-2 text-[13.5px] text-charcoal-soft hover:text-orange-dark">
            <PhoneIcon width={15} height={15} />
            {site.phoneDisplay}
          </a>
          <a
            href={whatsappLink("Hi, I'd like to ask about your furniture.")}
            target="_blank"
            rel="noreferrer"
            className="mt-3 flex items-center gap-2 text-[13.5px] font-medium text-green hover:text-green-dark"
          >
            <WhatsAppGlyph width={15} height={15} />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-line py-5 text-center text-[12px] text-charcoal-soft/70">
        © {new Date().getFullYear()} Color Furniture. All rights reserved.
      </div>
    </footer>
  );
}
