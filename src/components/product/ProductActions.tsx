"use client";

import { useState } from "react";
import type { Product } from "@/data/products";
import { formatPrice } from "@/data/products";
import { site, whatsappLink } from "@/data/site";
import { availabilityTone, cx } from "@/lib/utils";
import Button from "@/components/Button";
import WhatsAppIcon from "@/components/WhatsAppIcon";

export default function ProductActions({ product }: { product: Product }) {
  const [color, setColor] = useState(product.colors[0]?.name ?? "");

  const orderMessage = `Hello ${site.name}, I'd like to order the ${product.name}${
    color ? ` in ${color}` : ""
  } (${formatPrice(product.price)}). Is it available?`;

  const infoMessage = `Hello ${site.name}, I'd like more information about the ${product.name}.`;

  return (
    <div>
      <p className="mt-1 text-2xl text-charcoal">{formatPrice(product.price)}</p>
      <p className={cx("mt-2 text-[13px] font-medium uppercase tracking-[0.08em]", availabilityTone(product.availability))}>
        {product.availability}
        {product.leadTime && product.availability === "Made to Order" && (
          <span className="ml-1 font-normal normal-case text-charcoal-soft/60">· {product.leadTime}</span>
        )}
      </p>

      {product.colors.length > 0 && (
        <div className="mt-8">
          <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-charcoal">
            Color: <span className="font-normal normal-case text-charcoal-soft/70">{color}</span>
          </p>
          <div className="mt-3 flex flex-wrap gap-2.5">
            {product.colors.map((c) => (
              <button
                key={c.name}
                onClick={() => setColor(c.name)}
                aria-pressed={color === c.name}
                aria-label={c.name}
                title={c.name}
                className={cx(
                  "h-9 w-9 rounded-full border-2 transition-transform",
                  color === c.name ? "scale-110 border-wood-dark" : "border-transparent hover:scale-105"
                )}
                style={{ backgroundColor: c.hex }}
              />
            ))}
          </div>
        </div>
      )}

      <div className="mt-9 flex flex-col gap-3">
        <Button
          href={whatsappLink(orderMessage)}
          target="_blank"
          rel="noopener noreferrer"
          size="lg"
          className="w-full !bg-[#25D366] !text-white hover:!bg-[#1ebc59]"
        >
          <WhatsAppIcon className="h-4 w-4" />
          Order on WhatsApp
        </Button>
        <div className="grid grid-cols-2 gap-3">
          <Button href="/showroom" variant="secondary" size="lg" className="w-full">
            Visit a Branch
          </Button>
          <Button
            href={whatsappLink(infoMessage)}
            target="_blank"
            rel="noopener noreferrer"
            variant="ghost"
            size="lg"
            className="w-full border border-line"
          >
            Request Info
          </Button>
        </div>
      </div>
    </div>
  );
}
