import { cx } from "@/lib/utils";

const PALETTES = [
  { from: "#e8ddc8", to: "#c8791f", line: "#5c4229" },
  { from: "#f0d9a8", to: "#2f7d38", line: "#faf7f2" },
  { from: "#e3d5be", to: "#a5621a", line: "#faf7f2" },
  { from: "#efe7da", to: "#1d5c28", line: "#34302b" },
  { from: "#ddceb8", to: "#c8791f", line: "#faf7f2" },
  { from: "#e3d5be", to: "#8a7a68", line: "#211d1a" },
];

function hash(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (h << 5) - h + seed.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

/**
 * Deterministic, network-free placeholder used in place of real product
 * photography. Swap for actual photos by rendering an <Image> with the same
 * className instead — every call site expects a fill-style cover element.
 */
export default function CoverImage({
  seed,
  label,
  eyebrow,
  className,
}: {
  seed: string;
  label?: string;
  eyebrow?: string;
  className?: string;
}) {
  const h = hash(seed);
  const palette = PALETTES[h % PALETTES.length];
  const rotation = h % 2 === 0 ? 1 : -1;
  const rectY = 60 + (h % 5) * 8;

  return (
    <div className={cx("absolute inset-0 overflow-hidden", className)} aria-hidden="true">
      <svg
        viewBox="0 0 400 500"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
        role="img"
        aria-label={[eyebrow, label].filter(Boolean).join(" — ") || "Color Furniture"}
      >
        <defs>
          <linearGradient id={`g-${seed}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={palette.from} />
            <stop offset="100%" stopColor={palette.to} />
          </linearGradient>
        </defs>
        <rect width="400" height="500" fill={`url(#g-${seed})`} />
        <g opacity="0.5" stroke={palette.line} strokeWidth="1">
          <rect
            x="70"
            y={rectY}
            width="260"
            height="260"
            transform={`rotate(${rotation * 8} 200 ${rectY + 130})`}
            fill="none"
          />
          <line x1="70" y1={rectY + 260} x2="330" y2={rectY + 260} />
        </g>
      </svg>
    </div>
  );
}
