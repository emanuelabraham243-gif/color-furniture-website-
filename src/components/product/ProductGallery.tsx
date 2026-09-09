"use client";

import { useState } from "react";
import CoverImage from "@/components/CoverImage";
import { cx } from "@/lib/utils";

export default function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col-reverse gap-4 md:flex-row">
      <div className="flex gap-3 overflow-x-auto md:flex-col md:overflow-visible">
        {images.map((seed, i) => (
          <button
            key={seed}
            onClick={() => setActive(i)}
            aria-label={`View image ${i + 1} of ${name}`}
            aria-current={active === i}
            className={cx(
              "relative h-20 w-16 flex-none overflow-hidden border transition-colors md:h-24 md:w-20",
              active === i ? "border-charcoal" : "border-transparent opacity-70 hover:opacity-100"
            )}
          >
            <CoverImage seed={seed} />
          </button>
        ))}
      </div>
      <div className="relative aspect-[4/5] flex-1 overflow-hidden bg-beige">
        <CoverImage seed={images[active]} label={name} eyebrow="Color Furniture" />
      </div>
    </div>
  );
}
