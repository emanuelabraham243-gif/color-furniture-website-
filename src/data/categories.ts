export type CategorySlug =
  | "sofa"
  | "dining-table"
  | "center-table"
  | "tv-stand"
  | "bed"
  | "childrens-bed"
  | "wardrobe"
  | "dressing";

export interface Category {
  slug: CategorySlug;
  name: string;
  blurb: string;
}

// Product categories as provided by the client. Individual products, prices,
// and photography have not been provided yet — this page presents categories
// only, ready to be filled in with real inventory once available (Phase 1
// priorities 2 and 3).
export const categories: Category[] = [
  { slug: "sofa", name: "Sofas", blurb: "Living room seating built for everyday comfort." },
  { slug: "dining-table", name: "Dining Tables", blurb: "Tables sized and built for family meals." },
  { slug: "center-table", name: "Center Tables", blurb: "Coffee and center tables for the living room." },
  { slug: "tv-stand", name: "TV Stands", blurb: "Media consoles built to fit the room." },
  { slug: "bed", name: "Beds", blurb: "Bed frames built for lasting daily use." },
  { slug: "childrens-bed", name: "Children's Beds", blurb: "Sized and built for kids' rooms." },
  { slug: "wardrobe", name: "Wardrobes", blurb: "Storage built into the bedroom." },
  { slug: "dressing", name: "Dressing Tables", blurb: "Dressing tables for the bedroom." },
];
