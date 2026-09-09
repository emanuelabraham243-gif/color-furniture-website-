import Button from "@/components/Button";
import CoverImage from "@/components/CoverImage";
import { site, whatsappLink } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-charcoal">
      <CoverImage seed="color-hero-workshop" label={site.name} eyebrow="Addis Ababa" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/25 to-charcoal/40" />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-20 pt-40 md:px-10 md:pb-28">
        <p className="eyebrow mb-6 text-[11px] font-medium uppercase text-beige">
          Addis Ababa — Manufactured Locally
        </p>
        <h1 className="max-w-3xl font-display text-[13vw] font-light leading-[1.02] text-ivory sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          Furniture, <span className="italic">Crafted</span>
          <br />
          for Every Home.
        </h1>
        <p className="mt-7 max-w-md text-[16px] leading-relaxed text-ivory/75">{site.description}</p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button href="/products" variant="light" size="lg">
            Explore Products
          </Button>
          <Button
            href={whatsappLink("Hi, I'd like to ask about your furniture.")}
            target="_blank"
            rel="noreferrer"
            variant="outline-light"
            size="lg"
          >
            WhatsApp Us
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 right-6 hidden flex-col items-center gap-2 text-ivory/60 md:right-10 md:flex">
        <span className="eyebrow text-[10px]">Scroll</span>
        <span className="h-10 w-px bg-ivory/40" />
      </div>
    </section>
  );
}
