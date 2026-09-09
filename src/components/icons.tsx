import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps) {
  return {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...props,
  };
}

export const SofaIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 14v-1.5A2.5 2.5 0 0 1 6.5 10h11a2.5 2.5 0 0 1 2.5 2.5V14M3.5 14h17v4a1 1 0 0 1-1 1h-1v1.3M4.5 19H4a1 1 0 0 1-1-1v-4M6 19v1.3M18 19v1.3M7 10V8.5A1.5 1.5 0 0 1 8.5 7h7A1.5 1.5 0 0 1 17 8.5V10" />
  </svg>
);

export const DiningTableIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 9h16l-1.4 4.2H5.4L4 9Zm2 4.2L5 20m14-6.8L20 20M9.5 13.2 9 20m5.5-6.8L15 20M4 9c0-2.8 3.6-5 8-5s8 2.2 8 5" />
  </svg>
);

export const CenterTableIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <ellipse cx="12" cy="9" rx="8" ry="2.5" />
    <path d="M6.5 11v5.5M17.5 11v5.5M5 19h14" />
  </svg>
);

export const TvStandIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="4" y="4.5" width="16" height="9.5" rx="1" />
    <path d="M9.5 17.5h5M12 14v3.5" />
    <path d="M4 20h16" />
  </svg>
);

export const BedIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 19v-7.5A2.5 2.5 0 0 1 5.5 9H11v4" />
    <path d="M21 19v-4.5A2.5 2.5 0 0 0 18.5 12H13a2 2 0 0 0-2 2v2" />
    <path d="M3 15.5h18M3 19v1.3M21 19v1.3" />
    <rect x="5" y="9" width="5" height="3" rx="1" />
  </svg>
);

export const ChildrensBedIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 19v-6A2 2 0 0 1 5 11h5v3" />
    <path d="M19 19v-3.5A2 2 0 0 0 17 13.5h-4.5a1.5 1.5 0 0 0-1.5 1.5v1" />
    <path d="M3 16h16M3 19v1M19 19v1" />
    <path d="M6 11V8.5a1 1 0 0 1 1.7-.7L9 9M9.5 6.5l1.2 1.2" />
  </svg>
);

export const WardrobeIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="5" y="3.5" width="14" height="17" rx="1" />
    <path d="M12 3.5v17" />
    <circle cx="10" cy="12" r="0.4" fill="currentColor" />
    <circle cx="14" cy="12" r="0.4" fill="currentColor" />
  </svg>
);

export const DressingIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="7" y="3" width="10" height="13" rx="1" />
    <path d="M9 3v13M15 3v13" />
    <path d="M4 20h16M5 20v-4.5A1.5 1.5 0 0 1 6.5 14h11a1.5 1.5 0 0 1 1.5 1.5V20" />
  </svg>
);

export const PhoneIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6.5 4h3l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5L16 13l4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4.5 6.2 2 2 0 0 1 6.5 4Z" />
  </svg>
);

export const MapPinIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 21s-6.5-5.9-6.5-11A6.5 6.5 0 0 1 18.5 10c0 5.1-6.5 11-6.5 11Z" />
    <circle cx="12" cy="10" r="2.3" />
  </svg>
);

export const MenuIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const XIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m6 6 12 12M18 6 6 18" />
  </svg>
);

export const ArrowRightIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const WhatsAppGlyph = (p: IconProps) => (
  <svg {...base(p)} strokeWidth={0} fill="currentColor">
    <path d="M12 3.5A8.5 8.5 0 0 0 4.3 15.9L3.5 20.5l4.7-1.2A8.5 8.5 0 1 0 12 3.5Zm0 1.6a6.9 6.9 0 0 1 5.9 10.5 6.9 6.9 0 0 1-9.4 2.4l-.4-.2-2.6.7.7-2.5-.2-.4A6.9 6.9 0 0 1 12 5.1Zm-2.9 3.4c-.2 0-.4 0-.6.3-.2.3-.7.8-.7 1.9s.7 2.1.8 2.3c.1.2 1.5 2.4 3.7 3.3 1.9.8 2.2.6 2.6.6.4 0 1.3-.5 1.5-1s.2-.9.1-1c-.1-.1-.2-.2-.5-.3l-1.4-.7c-.2-.1-.4-.1-.5.1l-.6.8c-.1.1-.2.2-.4.1-.2-.1-.8-.3-1.6-1-.6-.5-1-1.2-1.1-1.4-.1-.2 0-.3.1-.4l.4-.5c.1-.2.1-.3 0-.5l-.7-1.6c-.2-.4-.4-.3-.5-.3h-.4Z" />
  </svg>
);

export const FacebookGlyph = (p: IconProps) => (
  <svg {...base(p)} strokeWidth={0} fill="currentColor">
    <path d="M13.5 21v-7.6h2.6l.4-3h-3v-1.9c0-.9.2-1.5 1.5-1.5h1.6V4.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.2H7.9v3h2.6V21h3Z" />
  </svg>
);

export const InstagramGlyph = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);

export const TikTokGlyph = (p: IconProps) => (
  <svg {...base(p)} strokeWidth={0} fill="currentColor">
    <path d="M14.5 3h2.6c.2 1.4 1.1 2.7 2.5 3.3.6.3 1.3.5 2 .5v2.7c-1.4 0-2.8-.4-4-1.2v6.4c0 3.1-2.5 5.6-5.6 5.6S6.4 17.8 6.4 14.7c0-3 2.3-5.4 5.2-5.6v2.8a2.9 2.9 0 1 0 2.9 2.9V3Z" />
  </svg>
);

export const CategoryIcons: Record<string, (p: IconProps) => React.JSX.Element> = {
  sofa: SofaIcon,
  "dining-table": DiningTableIcon,
  "center-table": CenterTableIcon,
  "tv-stand": TvStandIcon,
  bed: BedIcon,
  "childrens-bed": ChildrensBedIcon,
  wardrobe: WardrobeIcon,
  dressing: DressingIcon,
};
