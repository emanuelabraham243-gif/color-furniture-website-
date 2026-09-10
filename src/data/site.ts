export const site = {
  name: "Color Furniture",
  instagramHandle: "@colorfurniture",
  tagline: "Furniture, Crafted for Every Home.",
  description:
    "Color Furniture is an Addis Ababa furniture manufacturer and retailer — sofas, dining, bedroom and storage pieces, built locally and backed by import/export and project supply capability.",
  phone: "0911229324",
  phoneDisplay: "+251 91 122 9324",
  phoneHref: "tel:+251911229324",
  whatsappNumber: "251911229324",
  // Additional lines from the company's registered profile document — kept
  // separate from the primary WhatsApp number above since it's unconfirmed
  // which of these is WhatsApp-enabled.
  additionalPhones: ["0913545454", "0963424242", "0944312145"],
  email: "sgfurniture2010@gmail.com",
  address: {
    line1: "Gotera, Kirkos Sub-City, Woreda 03",
    line2: "House No. 512-513, Addis Ababa, Ethiopia",
    mapsQuery: "Gotera Kirkos Sub City Addis Ababa Ethiopia",
  },
  social: {
    facebook: "https://web.facebook.com/profile.php?id=100065746470661",
    instagram: "https://www.instagram.com/colorfurniture?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==",
    tiktok: "https://www.tiktok.com/@color_furniture?is_from_webapp=1&sender_device=pc",
  },
  // The client has 3 pinned TikTok videos that should be embedded on the
  // site. Add each video's URL here once shared (e.g.
  // "https://www.tiktok.com/@colorfurniture/video/1234567890123456789") —
  // the Contact page embeds up to 3 automatically and shows a "coming soon"
  // placeholder while this stays empty.
  tiktokVideos: [] as string[],
} as const;

export function whatsappLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${site.whatsappNumber}?text=${encoded}`;
}

export function mapsLink() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.mapsQuery)}`;
}
