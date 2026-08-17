import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — LOKVAANI" },
      { name: "description", content: "LOKVAANI is an AI-assisted living digital archive for India's oral cultural heritage." },
      { property: "og:title", content: "About — LOKVAANI" },
      { property: "og:description", content: "Preserve, understand, connect and discover India's oral heritage." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 lg:py-24">
      <p className="eyebrow text-accent">About</p>
      <h1 className="mt-4 text-display text-4xl text-foreground sm:text-5xl">A living digital museum of India.</h1>
      <p className="mt-6 font-serif text-xl leading-relaxed text-foreground/85">
        LOKVAANI preserves the voices that carry India's culture — folk tales, songs, oral histories and
        everyday knowledge — and uses AI to make them understandable, connected and discoverable.
      </p>
      <div className="gold-rule my-12" />
      <div className="grid gap-6 sm:grid-cols-2">
        {[
          ["Preserve", "Communities record stories in their own language and voice."],
          ["Understand", "AI assists with transcription, translation and thematic tagging."],
          ["Connect", "Shared themes reveal how traditions echo across regions."],
          ["Discover", "Semantic search lets anyone find meaning, not just keywords."],
        ].map(([t, d]) => (
          <div key={t} className="surface-card rounded-xl p-6">
            <h2 className="font-serif text-2xl text-foreground">{t}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
      <p className="mt-12 rounded-xl border border-gold/40 bg-gold/10 p-6 text-sm leading-relaxed text-foreground">
        This is a Smart India Hackathon demo prototype. All archive entries, transcripts and statistics are
        fictional demo content and are not presented as verified historical fact.
      </p>
      <Link to="/contribute" className="mt-10 inline-flex rounded-full bg-primary px-7 py-3.5 text-sm text-primary-foreground transition hover:bg-primary/90">
        Contribute a story
      </Link>
    </div>
  );
}
