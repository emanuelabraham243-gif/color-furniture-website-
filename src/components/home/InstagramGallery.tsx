import Reveal from "@/components/Reveal";
import CoverImage from "@/components/CoverImage";
import { site } from "@/data/site";

const posts = Array.from({ length: 6 }).map((_, i) => ({
  id: i,
  seed: `color-instagram-${i}`,
}));

export default function InstagramGallery() {
  return (
    <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-28">
      <Reveal className="flex flex-col items-center text-center">
        <p className="eyebrow mb-4 text-[11px] font-medium uppercase text-wood-dark">Follow Along</p>
        <h2 className="font-display text-3xl text-charcoal md:text-4xl">{site.instagramHandle}</h2>
        <a
          href={site.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="link-underline mt-3 text-[13px] uppercase tracking-[0.12em] text-wood-dark"
        >
          Follow us on Instagram
        </a>
      </Reveal>

      <div className="mt-12 grid grid-cols-3 gap-2 md:grid-cols-6 md:gap-3">
        {posts.map((post, i) => (
          <Reveal key={post.id} delay={i * 60} className="relative aspect-square overflow-hidden">
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="group block h-full w-full">
              <CoverImage seed={post.seed} className="transition-transform duration-700 ease-out group-hover:scale-110" />
              <span className="absolute inset-0 bg-charcoal/0 transition-colors duration-300 group-hover:bg-charcoal/20" />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
