/**
 * A faint line drawing of a gopuram rising from a pillared mandapa.
 * Stroked with currentColor so each scene can tint it (aged gold, stone).
 */
export function TempleSilhouette({ className }: { className?: string }) {
  const cx = 600;
  const tiers = Array.from({ length: 7 }, (_, i) => i);
  const columns = Array.from({ length: 11 }, (_, i) => 200 + i * 80);
  const topY = 548 - 7 * 56;

  return (
    <svg
      viewBox="0 0 1200 640"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      strokeLinecap="round"
      strokeLinejoin="round"
      preserveAspectRatio="xMidYMax meet"
      aria-hidden="true"
    >
      {/* plinth */}
      <path d="M110 622 H1090" />
      <path d="M160 622 V566 H1040 V622" />

      {/* mandapa colonnade */}
      <path d="M180 478 L204 452 H996 L1020 478 Z" />
      {columns.map((x) => (
        <g key={x}>
          <path d={`M${x} 566 V478`} />
          <path d={`M${x - 9} 478 H${x + 9}`} />
          <path d={`M${x - 6} 566 H${x + 6}`} />
        </g>
      ))}

      {/* gopuram tiers */}
      {tiers.map((i) => {
        const w = 560 - i * 68;
        const h = 48;
        const y = 548 - i * (h + 8);
        const x = cx - w / 2;
        const niches = Math.max(2, 6 - i);
        const gap = w / (niches + 1);
        return (
          <g key={i}>
            <path d={`M${x} ${y} H${x + w} V${y - h} H${x} Z`} />
            <path d={`M${x - 14} ${y - h} H${x + w + 14}`} />
            {Array.from({ length: niches }, (_, n) => {
              const nx = x + gap * (n + 1);
              return <path key={n} d={`M${nx - 7} ${y} V${y - 22} a7 7 0 0 1 14 0 V${y}`} />;
            })}
          </g>
        );
      })}

      {/* kalasha finials */}
      <path d={`M${cx - 26} ${topY} Q${cx} ${topY - 26} ${cx + 26} ${topY}`} />
      <ellipse cx={cx} cy={topY - 24} rx={13} ry={18} />
      <path d={`M${cx} ${topY - 42} V${topY - 74}`} />
      <circle cx={cx} cy={topY - 80} r={4} />
    </svg>
  );
}
