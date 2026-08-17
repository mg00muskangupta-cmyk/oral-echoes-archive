import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Check, Loader2 } from "lucide-react";

const steps = [
  { icon: "🎙️", running: "Processing audio", done: "Audio processed" },
  { icon: "📝", running: "Generating transcript", done: "Transcript generated" },
  { icon: "🌐", running: "Detecting language", done: "Language detected" },
  { icon: "🏷️", running: "Identifying cultural themes", done: "Cultural themes identified" },
  { icon: "🧬", running: "Finding cultural connections", done: "Connections discovered" },
  { icon: "🔎", running: "Preparing for discovery", done: "Archive entry prepared" },
];

export function AIProcessing() {
  const [step, setStep] = useState(0);
  const done = step >= steps.length;

  useEffect(() => {
    if (done) return;
    const t = setTimeout(() => setStep((s) => s + 1), 1400);
    return () => clearTimeout(t);
  }, [step, done]);

  return (
    <div className="surface-card rounded-2xl p-6 sm:p-10">
      <p className="eyebrow text-accent">AI Simulation · Demo</p>
      <h2 className="mt-3 font-serif text-3xl text-foreground sm:text-4xl">
        {done ? "Your story has been understood." : "Understanding your story…"}
      </h2>

      <div className="mt-6 h-1 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-gradient-to-r from-gold to-accent transition-all duration-700"
          style={{ width: `${(Math.min(step, steps.length) / steps.length) * 100}%` }}
        />
      </div>

      <ul className="mt-8 space-y-3">
        {steps.map((s, i) => {
          const state = i < step ? "done" : i === step ? "running" : "idle";
          return (
            <li
              key={s.done}
              className={`flex items-center gap-3 rounded-lg border px-4 py-3 transition-all duration-500 ${
                state === "idle"
                  ? "border-transparent opacity-35"
                  : state === "running"
                    ? "border-gold/50 bg-gold/10"
                    : "border-sage/30 bg-sage/8"
              }`}
            >
              <span className="text-lg">{s.icon}</span>
              <span className="flex-1 text-sm text-foreground">{state === "done" ? s.done : s.running}</span>
              {state === "running" && <Loader2 className="h-4 w-4 animate-spin text-accent" />}
              {state === "done" && <Check className="h-4 w-4 text-sage" />}
            </li>
          );
        })}
      </ul>

      {done && (
        <div className="animate-fade-up mt-8">
          <div className="gold-rule mb-8" />
          <p className="eyebrow text-muted-foreground">Extracted metadata · demo</p>
          <dl className="mt-4 grid gap-4 sm:grid-cols-3">
            {[
              ["Language", "Marwari"],
              ["Region", "Rajasthan"],
              ["Type", "Folk Story"],
            ].map(([k, v]) => (
              <div key={k} className="rounded-lg border border-border bg-parchment/50 px-4 py-3">
                <dt className="eyebrow text-muted-foreground">{k}</dt>
                <dd className="mt-1 font-serif text-lg text-foreground">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Harvest", "Family", "Community"].map((t) => (
              <span key={t} className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs text-accent">{t}</span>
            ))}
          </div>
          <p className="mt-8 rounded-lg border border-sage/35 bg-sage/10 px-5 py-4 text-sm text-foreground">
            🟡 Your contribution is awaiting community verification.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/stories/$slug" params={{ slug: "harvest-moon" }} className="rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition hover:bg-primary/90">
              See how an entry looks
            </Link>
            <Link to="/explore" className="rounded-full border border-border px-6 py-3 text-sm transition hover:border-gold">
              Explore the archive
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
