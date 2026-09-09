import type { Product } from "@/data/products";

export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function availabilityTone(availability: Product["availability"]) {
  switch (availability) {
    case "In Stock":
      return "text-green";
    case "Made to Order":
      return "text-wood-dark";
    case "Out of Stock":
      return "text-[#a04a3a]";
    default:
      return "text-charcoal";
  }
}
