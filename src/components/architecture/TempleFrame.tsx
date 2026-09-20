interface Props {
  children: React.ReactNode;
  /** "major" adds a stepped lintel and a double border for hero scenes. */
  variant?: "simple" | "major";
  className?: string;
}

function Corner({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  return (
    <svg className={`frame-corner frame-corner--${pos}`} viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
      <path d="M1 27V1h26" />
      <path d="M7 7l3 3-3 3-3-3z" />
    </svg>
  );
}

/**
 * Stone-and-brass frame inspired by pillar geometry. Kept thin so it
 * never competes with the photograph; ordinary days stay simple.
 */
export function TempleFrame({ children, variant = "simple", className = "" }: Props) {
  return (
    <div className={`temple-frame temple-frame--${variant} ${className}`}>
      <div className="temple-frame__inner">{children}</div>
      <Corner pos="tl" />
      <Corner pos="tr" />
      <Corner pos="bl" />
      <Corner pos="br" />
      {variant === "major" && (
        <svg className="frame-lintel" viewBox="0 0 120 14" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
          <path d="M0 13H40L46 7H74L80 13H120" />
          <circle cx="60" cy="3.5" r="1.6" />
        </svg>
      )}
    </div>
  );
}
