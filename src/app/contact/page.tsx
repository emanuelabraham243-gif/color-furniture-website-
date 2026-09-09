import type { Metadata } from "next";
import { site, whatsappLink, mapsLink } from "@/data/site";
import {
  FacebookGlyph,
  InstagramGlyph,
  MapPinIcon,
  TikTokGlyph,
} from "@/components/icons";
import Button from "@/components/Button";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import TikTokEmbed from "@/components/TikTokEmbed";
import { cx } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Color Furniture in Addis Ababa — call, WhatsApp, or visit our showroom.",
};

function SocialLink({
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
      className={cx(
        "flex items-center gap-3 border border-line bg-paper px-4 py-3.5 transition-colors",
        pending ? "cursor-default opacity-50" : "hover:border-wood"
      )}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream text-charcoal-soft">
        <Icon width={16} height={16} />
      </span>
      <span className="text-[13.5px] font-medium text-ink">{pending ? `${label} — coming soon` : label}</span>
    </a>
  );
}

export default function ContactPage() {
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    `${site.address.plusCode} Addis Ababa Ethiopia`
  )}&output=embed`;

  return (
    <div className="mx-auto max-w-[1440px] px-6 pb-28 pt-32 md:px-10 md:pt-40">
      <div className="max-w-2xl">
        <p className="eyebrow mb-5 text-[11px] font-medium uppercase text-wood-dark">Get in Touch</p>
        <h1 className="font-display text-4xl text-charcoal md:text-5xl">Contact Us</h1>
        <p className="mt-6 text-[15px] leading-relaxed text-charcoal-soft/75">
          Call, message us on WhatsApp, or visit our showroom in Addis Ababa — we&apos;re happy to help.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <a
            href={whatsappLink("Hi, I'd like to get in touch with Color Furniture.")}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 bg-[#25D366] px-6 py-5 text-white transition-opacity hover:opacity-90"
          >
            <WhatsAppIcon className="h-6 w-6" />
            <div>
              <p className="font-display text-[15px] font-semibold">Chat on WhatsApp</p>
              <p className="text-[13px] text-white/80">Fastest way to reach us</p>
            </div>
          </a>

          <a
            href={site.phoneHref}
            className="flex items-center gap-4 border border-line bg-paper px-6 py-5 transition-colors hover:border-wood"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cream text-wood-dark">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5L16 13l4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4Z" />
              </svg>
            </span>
            <div>
              <p className="font-display text-[15px] font-semibold text-ink">{site.phoneDisplay}</p>
              <p className="text-[13px] text-charcoal-soft">Call us directly</p>
            </div>
          </a>

          <div className="flex items-center gap-4 border border-line bg-paper px-6 py-5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cream text-wood-dark">
              <MapPinIcon width={20} height={20} />
            </span>
            <div>
              <p className="font-display text-[15px] font-semibold text-ink">{site.address.line1}</p>
              <p className="text-[13px] text-charcoal-soft">{site.address.line2}</p>
            </div>
          </div>

          <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <SocialLink href={site.social.facebook} label="Facebook" icon={FacebookGlyph} />
            <SocialLink href={site.social.instagram} label="Instagram" icon={InstagramGlyph} />
            <SocialLink href={site.social.tiktok} label="TikTok" icon={TikTokGlyph} />
          </div>

          <Button href={mapsLink()} target="_blank" rel="noreferrer" variant="ghost" className="mt-2 self-start border border-line">
            Get Directions →
          </Button>
        </div>

        <div className="overflow-hidden border border-line">
          <iframe
            title="Color Furniture location"
            src={mapEmbedSrc}
            className="h-full min-h-[380px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* TikTok videos */}
      <div className="mt-24">
        <div className="mb-8 flex items-center gap-2">
          <TikTokGlyph width={20} height={20} className="text-charcoal" />
          <h2 className="font-display text-2xl text-charcoal">Follow Us on TikTok</h2>
        </div>

        {site.tiktokVideos.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {site.tiktokVideos.slice(0, 3).map((url) => (
              <TikTokEmbed key={url} url={url} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="flex aspect-[9/16] flex-col items-center justify-center gap-2 border border-dashed border-line bg-paper text-center"
              >
                <TikTokGlyph width={28} height={28} className="text-charcoal-soft/40" />
                <p className="px-6 text-[12.5px] text-charcoal-soft/70">Video {n} — coming soon</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
