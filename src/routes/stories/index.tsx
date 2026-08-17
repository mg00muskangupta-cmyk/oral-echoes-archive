import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { stories } from "@/data/archive";
import { StoryCard } from "@/components/lokvaani/StoryCard";
import { Reveal } from "@/components/lokvaani/Reveal";

export const Route = createFileRoute("/stories/")({
  head: () => ({
    meta: [
      { title: "Stories — LOKVAANI Archive" },
      { name: "description", content: "Browse demo folk tales, oral histories and traditional knowledge from across India." },
      { property: "og:title", content: "Stories — LOKVAANI Archive" },
      { property: "og:description", content: "Folk tales, oral histories and traditional knowledge from nine Indian regions." },
    ],
  }),
  component: Stories,
});

function Stories() {
  const cats = ["All", ...Array.from(new Set(stories.map((s) => s.category)))];
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? stories : stories.filter((s) => s.category === cat);

  return (
    <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
      <p className="eyebrow text-accent">Archive</p>
      <h1 className="mt-4 text-display text-4xl text-foreground sm:text-5xl">Stories & Recordings</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Every entry below is demo content created for this prototype.
      </p>
      <div className="mt-8 flex flex-wrap gap-2">
        {cats.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`rounded-full border px-4 py-2 text-xs transition ${cat === c ? "border-gold bg-gold/15 text-foreground" : "border-border text-muted-foreground hover:border-gold"}`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((s, i) => (
          <Reveal key={s.slug} delay={i * 70}><StoryCard story={s} /></Reveal>
        ))}
      </div>
    </div>
  );
}
