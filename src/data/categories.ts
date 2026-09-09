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
  shortName: string;
  blurb: string;
  description: string;
  editorial: string;
  heroImage: string;
}

// Product categories as provided by the client. Individual products, prices,
// and photography have not been provided yet — this page presents categories
// only, ready to be filled in with real inventory once available (Phase 1
// priorities 2 and 3).
export const categories: Category[] = [
  {
    slug: "sofa",
    name: "Sofas",
    shortName: "Sofas",
    blurb: "Living room seating built for everyday comfort.",
    description: "Sofas manufactured in our own workshop, sized for everyday family living rooms.",
    editorial: "A sofa should hold up to real life. Ours are built in-house for daily use, not just for show.",
    heroImage: "sofa",
  },
  {
    slug: "dining-table",
    name: "Dining Tables",
    shortName: "Dining",
    blurb: "Tables sized and built for family meals.",
    description: "Dining tables built to bring the household together, in sizes that fit Addis Ababa homes.",
    editorial: "The dining table is where the household gathers — ours are built to handle it, meal after meal.",
    heroImage: "dining-table",
  },
  {
    slug: "center-table",
    name: "Center Tables",
    shortName: "Center Tables",
    blurb: "Coffee and center tables for the living room.",
    description: "Center and coffee tables sized to complete a living room seating arrangement.",
    editorial: "A small piece can still carry a room. Our center tables are built to complement, not compete.",
    heroImage: "center-table",
  },
  {
    slug: "tv-stand",
    name: "TV Stands",
    shortName: "TV Stands",
    blurb: "Media consoles built to fit the room.",
    description: "TV stands and media consoles built for modern living rooms.",
    editorial: "Storage and display in one piece, built to fit the room it's going into.",
    heroImage: "tv-stand",
  },
  {
    slug: "bed",
    name: "Beds",
    shortName: "Beds",
    blurb: "Bed frames built for lasting daily use.",
    description: "Bed frames manufactured for lasting, everyday use.",
    editorial: "We build bed frames for daily use, not just for a showroom floor.",
    heroImage: "bed",
  },
  {
    slug: "childrens-bed",
    name: "Children's Beds",
    shortName: "Kids' Beds",
    blurb: "Sized and built for kids' rooms.",
    description: "Bed frames sized and built for children's rooms.",
    editorial: "Sized for kids, built with the same care as the rest of our furniture.",
    heroImage: "childrens-bed",
  },
  {
    slug: "wardrobe",
    name: "Wardrobes",
    shortName: "Wardrobes",
    blurb: "Storage built into the bedroom.",
    description: "Wardrobes built for bedroom storage.",
    editorial: "Good storage should disappear into the room — our wardrobes are built to do exactly that.",
    heroImage: "wardrobe",
  },
  {
    slug: "dressing",
    name: "Dressing Tables",
    shortName: "Dressing",
    blurb: "Dressing tables for the bedroom.",
    description: "Dressing tables built for the bedroom.",
    editorial: "A considered dressing table, built for daily use in the bedroom.",
    heroImage: "dressing",
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}
