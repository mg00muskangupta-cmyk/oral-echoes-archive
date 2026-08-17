import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { regions } from "@/data/archive";

export function IndiaMap() {
  const [active, setActive] = useState(regions[0]);

  return (
    <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
      <div className="relative mx-auto w-full max-w-xl">
        <svg viewBox="0 0 100 100" className="w-full drop-shadow-[0_20px_40px_oklch(0.3_0.08_40/0.18)]" role="img" aria-label="Stylised map of India with region markers">
          <defs>
            <linearGradient id="lvmap" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.72 0.11 78 / 0.35)" />
              <stop offset="100%" stopColor="oklch(0.62 0.14 46 / 0.28)" />
            </linearGradient>
          </defs>
          <path
            d="M30 8 L44 6 L52 12 L62 9 L70 14 L80 13 L88 20 L92 30 L86 36 L88 44 L78 46 L74 54 L66 58 L58 70 L50 82 L44 92 L38 86 L34 74 L28 62 L20 50 L16 38 L20 26 L26 18 Z"
            fill="url(#lvmap)"
            stroke="oklch(0.35 0.12 22 / 0.55)"
            strokeWidth="0.6"
            strokeLinejoin="round"
          />
          {regions.map((r) => {
            const isActive = active.name === r.name;
            return (
              <g key={r.name} onClick={() => setActive(r)} className="cursor-pointer">
                <circle cx={r.x} cy={r.y} r={isActive ? 3.4 : 2.2} fill="oklch(0.35 0.12 22)" opacity={isActive ? 0.25 : 0.15} />
                <circle
                  cx={r.x}
                  cy={r.y}
                  r={isActive ? 1.5 : 1.1}
                  fill={isActive ? "oklch(0.62 0.14 46)" : "oklch(0.35 0.12 22)"}
                  className="transition-all"
                />
                <text x={r.x} y={r.y - 3.4} textAnchor="middle" className="fill-foreground" style={{ fontSize: 2.4, letterSpacing: 0.1 }}>
                  {r.name}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div>
        <div className="surface-card rounded-xl p-6">
          <p className="eyebrow text-accent">Region</p>
          <h3 className="mt-2 font-serif text-3xl text-foreground">{active.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{active.languages}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{active.note}</p>
          <p className="mt-4 text-sm text-foreground">
            <span className="font-serif text-2xl text-primary">{active.stories}</span>{" "}
            <span className="text-muted-foreground">demo archive entries</span>
          </p>
          <Link
            to="/regions"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground transition hover:bg-primary/90"
          >
            Open region page →
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          {[
            ["1,248", "Stories"],
            ["386", "Folk Songs"],
            ["17", "Languages"],
            ["42", "Traditions"],
          ].map(([n, l]) => (
            <div key={l} className="rounded-lg border border-border bg-card/60 px-4 py-4 text-center">
              <p className="font-serif text-2xl text-primary">{n}</p>
              <p className="eyebrow mt-1 text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {regions.map((r) => (
            <button
              key={r.name}
              onClick={() => setActive(r)}
              className={`rounded-full border px-3 py-1.5 text-xs transition ${active.name === r.name ? "border-gold bg-gold/15 text-foreground" : "border-border text-muted-foreground hover:border-gold"}`}
            >
              {r.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
