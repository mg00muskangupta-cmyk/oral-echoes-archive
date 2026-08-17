import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Loader2, Play, Search, SlidersHorizontal, Sparkles } from "lucide-react";
import { stories } from "@/data/archive";
import { Reveal } from "@/components/lokvaani/Reveal";
import { DemoBadge, VerificationBadge } from "@/components/lokvaani/VerificationBadge";

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
      { title: "Explore the Archive — LOKVAANI" },
      { name: "description", content: "Search India's oral heritage by meaning, not just keywords. Semantic discovery across stories, songs and traditions." },
      { property: "og:title", content: "Explore the Archive — LOKVAANI" },
      { property: "og:description", content: "Semantic discovery across India's folk stories, songs and oral histories." },
    ],
  }),
  component: Explore,
});

const filters = {
  Region: ["Rajasthan", "Punjab", "Bihar", "Assam", "Kerala", "Maharashtra"],
  Language: ["Marwari", "Punjabi", "Bhojpuri", "Assamese", "Tamil"],
  "Content Type": ["Folk Tale", "Folk Song", "Oral Story", "Oral History"],
  Theme: ["Harvest", "Family", "Community", "Nature", "Ritual"],
  Verification: ["Community Verified", "Awaiting Verification"],
};

const resultSlugs = ["harvest-moon", "song-of-the-golden-fields", "grandmothers-courtyard", "the-first-grain"];

function Explore() {
  const [query, setQuery] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");
  const [openFilters, setOpenFilters] = useState(false);
  const [active, setActive] = useState<string[]>([]);

  const results = stories.filter((s) => resultSlugs.includes(s.slug));

  const run = () => {
    setState("loading");
    setTimeout(() => setState("done"), 1100);
  };

  return (
    <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <p className="eyebrow text-accent">Semantic Discovery</p>
        <h1 className="mt-4 text-display text-4xl text-foreground sm:text-5xl">
          Discover by meaning, not just keywords.
        </h1>
        <p className="mt-4 text-muted-foreground">
          LOKVAANI understands themes, occasions and regions — not only the words you type.
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-3xl">
        <form
          onSubmit={(e) => { e.preventDefault(); run(); }}
          className="surface-card flex flex-col gap-3 rounded-2xl p-3 sm:flex-row sm:items-center"
        >
          <Search className="ml-3 hidden h-5 w-5 shrink-0 text-muted-foreground sm:block" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Try: Find stories about harvest traditions in Rajasthan"
            className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm outline-none placeholder:text-muted-foreground/80"
          />
          <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm text-primary-foreground transition hover:bg-primary/90">
            <Sparkles className="h-4 w-4" /> Search meaning
          </button>
        </form>
        <div className="mt-3 flex flex-wrap justify-center gap-2">
          {["harvest traditions", "songs sung while working", "monsoon and rivers", "grandmother stories"].map((q) => (
            <button key={q} onClick={() => { setQuery(q); run(); }} className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition hover:border-gold hover:text-foreground">
              {q}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-[260px_1fr]">
        <aside>
          <button onClick={() => setOpenFilters((o) => !o)} className="flex w-full items-center justify-between rounded-lg border border-border px-4 py-3 text-sm lg:hidden">
            <span className="inline-flex items-center gap-2"><SlidersHorizontal className="h-4 w-4" /> Filters</span>
            <span>{openFilters ? "−" : "+"}</span>
          </button>
          <div className={`${openFilters ? "block" : "hidden"} mt-4 space-y-7 lg:mt-0 lg:block`}>
            {Object.entries(filters).map(([group, opts]) => (
              <div key={group}>
                <p className="eyebrow text-muted-foreground">{group}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {opts.map((o) => {
                    const on = active.includes(o);
                    return (
                      <button
                        key={o}
                        onClick={() => setActive((a) => (on ? a.filter((x) => x !== o) : [...a, o]))}
                        className={`rounded-full border px-3 py-1.5 text-xs transition ${on ? "border-gold bg-gold/15 text-foreground" : "border-border text-muted-foreground hover:border-gold"}`}
                      >
                        {o}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </aside>

        <div>
          {state === "idle" && (
            <div className="surface-card rounded-2xl px-8 py-16 text-center">
              <p className="font-serif text-2xl text-foreground">Ask the archive a question.</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Semantic results are simulated for this prototype using demo archive entries.
              </p>
            </div>
          )}
          {state === "loading" && (
            <div className="surface-card flex items-center gap-3 rounded-2xl px-8 py-16">
              <Loader2 className="h-5 w-5 animate-spin text-accent" />
              <p className="text-sm text-muted-foreground">Interpreting meaning, themes and regions…</p>
            </div>
          )}
          {state === "done" && (
            <>
              <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-border pb-4">
                <p className="font-serif text-2xl text-foreground">42 semantic matches found</p>
                <p className="text-xs text-muted-foreground">Showing 4 demo entries · sorted by meaning</p>
              </div>
              <div className="mt-6 space-y-5">
                {results.map((s, i) => (
                  <Reveal key={s.slug} delay={i * 80}>
                    <article className="surface-card group grid gap-5 rounded-xl p-4 transition hover:-translate-y-1 sm:grid-cols-[200px_1fr]">
                      <Link to="/stories/$slug" params={{ slug: s.slug }} className="relative block h-40 overflow-hidden rounded-lg sm:h-full">
                        <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                        <span className="absolute bottom-2 right-2 rounded-full bg-background/90 px-2 py-0.5 text-[11px] tabular-nums">{s.duration}</span>
                      </Link>
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-accent/12 px-2.5 py-1 text-[11px] text-accent">Semantic Match · {s.match}%</span>
                          <DemoBadge />
                        </div>
                        <h2 className="mt-3 font-serif text-2xl text-foreground">
                          <Link to="/stories/$slug" params={{ slug: s.slug }} className="hover:text-primary">{s.title}</Link>
                        </h2>
                        <p className="mt-1 text-sm text-muted-foreground">{s.region} · {s.language} · {s.category}</p>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          <span className="eyebrow mr-2 text-gold-foreground">AI summary</span>{s.summary}
                        </p>
                        <div className="mt-4 flex flex-wrap items-center gap-2">
                          {s.tags.map((t) => (
                            <span key={t} className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted-foreground">{t}</span>
                          ))}
                          <VerificationBadge verified={s.verified} />
                          <Link to="/stories/$slug" params={{ slug: s.slug }} className="ml-auto inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs transition hover:border-gold hover:bg-gold/10">
                            <Play className="h-3.5 w-3.5" /> Listen
                          </Link>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
