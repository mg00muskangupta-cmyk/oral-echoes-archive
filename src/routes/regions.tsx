import { createFileRoute, Link } from "@tanstack/react-router";
import { regions } from "@/data/archive";
import { IndiaMap } from "@/components/lokvaani/IndiaMap";
import { Reveal } from "@/components/lokvaani/Reveal";

export const Route = createFileRoute("/regions")({
  head: () => ({
    meta: [
      { title: "Regions — LOKVAANI" },
      { name: "description", content: "Explore India's oral heritage region by region, from Rajasthan to Kerala." },
      { property: "og:title", content: "Regions — LOKVAANI" },
      { property: "og:description", content: "Nine regions, seventeen languages, one living archive of voices." },
    ],
  }),
  component: Regions,
});

function Regions() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
      <p className="eyebrow text-accent">Across India</p>
      <h1 className="mt-4 text-display text-4xl text-foreground sm:text-5xl">Regions & Voices</h1>
      <div className="mt-12"><IndiaMap /></div>
      <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {regions.map((r, i) => (
          <Reveal key={r.name} delay={i * 60}>
            <div className="surface-card h-full rounded-xl p-6 transition hover:-translate-y-1">
              <h2 className="font-serif text-2xl text-foreground">{r.name}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{r.languages}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{r.note}</p>
              <p className="mt-5 text-sm text-muted-foreground">
                <span className="font-serif text-xl text-primary">{r.stories}</span> demo entries
              </p>
              <Link to="/explore" className="mt-5 inline-flex text-sm text-accent hover:underline">Explore entries →</Link>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
