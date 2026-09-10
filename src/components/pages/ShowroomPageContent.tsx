"use client";

import Button from "@/components/Button";
import Reveal from "@/components/Reveal";
import CoverImage from "@/components/CoverImage";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { mapsLink, site, whatsappLink } from "@/data/site";
import { useT } from "@/lib/i18n/LanguageProvider";

const galleryImages = ["color-branch-1", "color-branch-2", "color-branch-3", "color-branch-4"];

export default function ShowroomPageContent() {
  const t = useT();
  const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.address.mapsQuery)}&output=embed`;

  const experienceSteps = [0, 1, 2].map((i) => ({
    n: `0${i + 1}`,
    title: t(`showroom.steps.${i}.title`),
    text: t(`showroom.steps.${i}.text`),
  }));

  return (
    <div>
      <section className="relative flex h-[75vh] min-h-[480px] items-end overflow-hidden bg-noir">
        <CoverImage seed="color-branch-hero" label={site.name} eyebrow={t("showroom.eyebrow")} className="opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/20 to-noir/40" />
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-16 md:px-10">
          <p className="eyebrow mb-5 text-[11px] font-medium uppercase text-snow/80">{t("showroom.eyebrow")}</p>
          <h1 className="max-w-2xl font-display text-4xl leading-[1.1] text-snow md:text-6xl">{t("showroom.title")}</h1>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <Reveal>
            <h2 className="font-display text-3xl text-charcoal">{t("showroom.planVisit")}</h2>
            <dl className="mt-8 space-y-7 text-[15px] text-charcoal-soft/85">
              <div>
                <dt className="text-[11px] font-medium uppercase tracking-[0.1em] text-charcoal-soft/50">{t("showroom.address")}</dt>
                <dd className="mt-2">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-medium uppercase tracking-[0.1em] text-charcoal-soft/50">{t("showroom.phone")}</dt>
                <dd className="mt-2">
                  <a href={site.phoneHref} className="link-underline">
                    {site.phoneDisplay}
                  </a>
                  {site.additionalPhones.length > 0 && (
                    <p className="mt-1 text-[13px] text-charcoal-soft/70">{site.additionalPhones.join(" · ")}</p>
                  )}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] font-medium uppercase tracking-[0.1em] text-charcoal-soft/50">{t("showroom.email")}</dt>
                <dd className="mt-2">
                  <a href={`mailto:${site.email}`} className="link-underline">
                    {site.email}
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button
                href={whatsappLink(`Hello ${site.name}, I'd like to plan a visit to your branch.`)}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                className="!bg-[#25D366] !text-white hover:!bg-[#1ebc59]"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {t("common.whatsappUs")}
              </Button>
              <Button href={mapsLink()} target="_blank" rel="noopener noreferrer" variant="secondary" size="lg">
                {t("contact.getDirections").replace(" →", "")}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={100} className="aspect-[4/3] w-full overflow-hidden border border-line lg:aspect-auto">
            <iframe
              title="Color Furniture location"
              src={mapEmbedSrc}
              className="h-full min-h-[360px] w-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 pb-24 md:px-10">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {galleryImages.map((seed, i) => (
            <Reveal
              key={seed}
              delay={i * 80}
              className={`relative aspect-[3/4] overflow-hidden ${i === 0 ? "col-span-2 row-span-2 md:col-span-2 md:row-span-2" : ""}`}
            >
              <CoverImage seed={seed} label={site.name} eyebrow={t("showroom.eyebrow")} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-cream">
        <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32">
          <Reveal className="max-w-2xl">
            <p className="eyebrow mb-5 text-[11px] font-medium uppercase text-wood-dark">{t("showroom.whatToExpectEyebrow")}</p>
            <h2 className="font-display text-3xl text-charcoal md:text-4xl">{t("showroom.whatToExpectTitle")}</h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10">
            {experienceSteps.map((step, i) => (
              <Reveal key={step.n} delay={i * 100}>
                <span className="font-display text-sm text-wood">{step.n}</span>
                <h3 className="mt-4 font-display text-xl text-charcoal">{step.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-charcoal-soft/75">{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
