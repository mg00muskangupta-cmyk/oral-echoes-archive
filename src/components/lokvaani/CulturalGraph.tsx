import { useState } from "react";

type Node = { id: string; label: string; x: number; y: number; note: string };

const nodes: Node[] = [
  { id: "rajasthan", label: "Rajasthan", x: 18, y: 20, note: "Demo region · 184 archive entries with harvest and desert narratives." },
  { id: "marwari", label: "Marwari", x: 12, y: 55, note: "Demo language record · spoken across western Rajasthan." },
  { id: "harvest", label: "Harvest", x: 50, y: 12, note: "Demo theme · appears in 128 entries across nine regions." },
  { id: "folktale", label: "Folk Tale", x: 84, y: 22, note: "Demo content type · narrative told rather than sung." },
  { id: "festival", label: "Harvest Festival", x: 88, y: 58, note: "Demo tradition · seasonal celebration marking the first grain." },
  { id: "punjab", label: "Punjab", x: 66, y: 86, note: "Demo region · harvest songs sung in call and response." },
  { id: "bihar", label: "Bihar", x: 40, y: 90, note: "Demo region · courtyard storytelling before grain storage." },
  { id: "maharashtra", label: "Maharashtra", x: 16, y: 86, note: "Demo region · first-grain offering accounts." },
];

export function CulturalGraph() {
  const [active, setActive] = useState<Node | null>(null);

  return (
    <div className="ink-panel relative overflow-hidden rounded-2xl p-6 sm:p-10">
      <div className="relative h-[420px] w-full sm:h-[460px]">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
          {nodes.map((n) => (
            <line key={n.id} x1="50" y1="50" x2={n.x} y2={n.y} stroke="oklch(0.72 0.11 78 / 0.35)" strokeWidth="0.25" strokeDasharray="1.5 1.5" />
          ))}
        </svg>

        <button
          onClick={() => setActive(null)}
          className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/60 bg-gold/20 px-5 py-4 text-center backdrop-blur-sm animate-pulse-ring"
        >
          <span className="block font-serif text-lg leading-tight text-parchment">The Harvest Moon</span>
          <span className="eyebrow block text-gold/90">Centre node</span>
        </button>

        {nodes.map((n, i) => (
          <button
            key={n.id}
            onClick={() => setActive(n)}
            style={{ left: `${n.x}%`, top: `${n.y}%`, animationDelay: `${i * 0.4}s` }}
            className={`animate-float absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border px-3.5 py-2 text-xs transition ${
              active?.id === n.id
                ? "border-gold bg-gold/25 text-parchment"
                : "border-parchment/25 bg-parchment/10 text-parchment/85 hover:border-gold hover:bg-gold/20"
            }`}
          >
            {n.label}
          </button>
        ))}
      </div>

      <div className="mt-4 rounded-lg border border-parchment/20 bg-charcoal/30 p-5">
        {active ? (
          <>
            <p className="eyebrow text-gold">{active.label}</p>
            <p className="mt-2 text-sm text-parchment/80">{active.note}</p>
          </>
        ) : (
          <p className="text-sm text-parchment/70">
            Select any node to see how this demo entry connects to regions, languages, themes and traditions.
          </p>
        )}
      </div>
    </div>
  );
}
