export function HeroDiagram() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <svg
        viewBox="0 0 420 480"
        className="w-full"
        role="img"
        aria-label="Diagram showing a request flowing from the client, through a FastAPI application, to a PostgreSQL database"
      >
        <defs>
          <linearGradient id="nodeGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.14" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* connector path client -> api */}
        <path
          id="path-1"
          d="M 210 108 L 210 188"
          stroke="var(--border-strong)"
          strokeWidth="1.5"
          fill="none"
        />
        {/* connector path api -> db */}
        <path
          id="path-2"
          d="M 210 292 L 210 372"
          stroke="var(--border-strong)"
          strokeWidth="1.5"
          fill="none"
        />

        {/* Client node */}
        <g>
          <rect x="90" y="40" width="240" height="68" rx="8" fill="var(--surface)" stroke="var(--border-strong)" />
          <text x="210" y="68" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" fill="var(--subtle)" letterSpacing="1">
            CLIENT
          </text>
          <text x="210" y="90" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="13" fill="var(--foreground)">
            GET /api/products
          </text>
        </g>

        {/* Arrow marker between client and api */}
        <polygon points="204,182 216,182 210,192" fill="var(--accent)" />

        {/* FastAPI node (highlighted) */}
        <g>
          <rect x="60" y="192" width="300" height="100" rx="10" fill="url(#nodeGlow)" />
          <rect x="60" y="192" width="300" height="100" rx="10" fill="var(--surface)" stroke="var(--accent-border)" strokeWidth="1.5" />
          <circle cx="90" cy="220" r="4" fill="var(--accent)" />
          <text x="106" y="224" fontFamily="var(--font-mono)" fontSize="11" fill="var(--accent)" letterSpacing="1">
            FASTAPI
          </text>
          <text x="210" y="252" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="16" fontWeight="600" fill="var(--foreground)">
            Application Layer
          </text>
          <text x="210" y="273" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" fill="var(--subtle)">
            routing · validation · auth
          </text>
        </g>

        {/* Arrow marker between api and db */}
        <polygon points="204,366 216,366 210,376" fill="var(--accent)" />

        {/* Database node */}
        <g>
          <rect x="90" y="376" width="240" height="72" rx="8" fill="var(--surface)" stroke="var(--border-strong)" />
          <text x="210" y="402" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" fill="var(--subtle)" letterSpacing="1">
            DATABASE
          </text>
          <text x="210" y="424" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="13" fill="var(--foreground)">
            PostgreSQL
          </text>
        </g>

        {/* animated pulse traveling down both connectors */}
        <circle r="3.5" fill="var(--accent-strong)" style={{ offsetPath: "path('M 210 108 L 210 188')", animation: "pulse-travel 2.2s ease-in-out infinite" }} />
        <circle r="3.5" fill="var(--accent-strong)" style={{ offsetPath: "path('M 210 292 L 210 372')", animation: "pulse-travel 2.2s ease-in-out infinite 1.1s" }} />
      </svg>
    </div>
  );
}
