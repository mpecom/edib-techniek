/* Realistische SVG-render van een Daikin wandmodel (binnenunit, vooraanzicht).
 * Geen externe afbeeldingen: volledig vector, schaalt scherp op elk scherm.
 * `tone` bepaalt de afwerking, `sculpted` geeft het Emura-achtige geprofileerde front. */

type Tone = "white" | "silver" | "graphite";

const TONES: Record<
  Tone,
  { top: string; bottom: string; edge: string; louvre1: string; louvre2: string; slat: string; text: string; disp: string }
> = {
  white: {
    top: "#ffffff",
    bottom: "#e8edf3",
    edge: "#d5dde6",
    louvre1: "#eef2f7",
    louvre2: "#d2dae3",
    slat: "#c2ccd7",
    text: "#9aa7b5",
    disp: "#7f8b9a",
  },
  silver: {
    top: "#f2f5f8",
    bottom: "#c7d0da",
    edge: "#aeb8c3",
    louvre1: "#dee4eb",
    louvre2: "#c0c9d3",
    slat: "#a9b3bf",
    text: "#8b97a4",
    disp: "#6b7684",
  },
  graphite: {
    top: "#333d4b",
    bottom: "#1a2230",
    edge: "#0e131c",
    louvre1: "#2a3340",
    louvre2: "#1c2430",
    slat: "#141b26",
    text: "#8a97a6",
    disp: "#63d6cf",
  },
};

export default function AircoUnit({
  tone = "white",
  sculpted = false,
  className = "",
}: {
  tone?: Tone;
  sculpted?: boolean;
  className?: string;
}) {
  const c = TONES[tone];
  // unieke gradient-ids per instantie-combinatie voorkomen id-botsingen
  const uid = `${tone}${sculpted ? "-s" : ""}`;

  return (
    <svg
      viewBox="0 0 400 150"
      className={className}
      role="img"
      aria-label={`Daikin wandmodel airco (${tone})`}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id={`body-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={c.top} />
          <stop offset="1" stopColor={c.bottom} />
        </linearGradient>
        <linearGradient id={`louvre-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={c.louvre1} />
          <stop offset="1" stopColor={c.louvre2} />
        </linearGradient>
        <linearGradient id={`sheen-${uid}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0" />
          <stop offset="0.5" stopColor="#ffffff" stopOpacity={tone === "graphite" ? "0.10" : "0.55"} />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <filter id={`shadow-${uid}`} x="-20%" y="-20%" width="140%" height="160%">
          <feDropShadow dx="0" dy="10" stdDeviation="12" floodColor="#0b1526" floodOpacity="0.16" />
        </filter>
      </defs>

      {/* zachte grondschaduw */}
      <ellipse cx="200" cy="140" rx="150" ry="9" fill="#0b1526" opacity="0.08" />

      <g filter={`url(#shadow-${uid})`}>
        {/* hoofdbehuizing */}
        <rect x="18" y="20" width="364" height="96" rx="22" fill={`url(#body-${uid})`} stroke={c.edge} strokeWidth="1.5" />

        {/* geprofileerde frontlijn (Emura) of subtiele topaccent */}
        {sculpted ? (
          <path d="M18 52 C 120 40, 280 40, 382 52" fill="none" stroke={c.edge} strokeOpacity="0.55" strokeWidth="1.4" />
        ) : (
          <path d="M30 34 H 370" stroke="#ffffff" strokeOpacity={tone === "graphite" ? "0.06" : "0.5"} strokeWidth="1.4" />
        )}

        {/* sheen over het front */}
        <rect x="18" y="20" width="364" height="44" rx="22" fill={`url(#sheen-${uid})`} />

        {/* uitblaaslamel onderin */}
        <rect x="34" y="90" width="332" height="18" rx="9" fill={`url(#louvre-${uid})`} stroke={c.edge} strokeOpacity="0.6" strokeWidth="1" />
        <line x1="46" y1="99" x2="354" y2="99" stroke={c.slat} strokeWidth="2" strokeLinecap="round" opacity="0.7" />

        {/* status-display rechts */}
        <circle cx="352" cy="80" r="2.6" fill={c.disp} />

        {/* wordmerk */}
        <text
          x="40"
          y="82"
          fontFamily="var(--font-mono), monospace"
          fontSize="9"
          letterSpacing="3"
          fill={c.text}
        >
          DAIKIN
        </text>
      </g>
    </svg>
  );
}
