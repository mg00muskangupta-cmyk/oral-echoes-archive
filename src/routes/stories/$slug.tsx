import { useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { storyBySlug, stories, transcripts } from "@/data/archive";
import { AudioPlayer } from "@/components/lokvaani/AudioPlayer";
import { CulturalGraph } from "@/components/lokvaani/CulturalGraph";
import { Reveal } from "@/components/lokvaani/Reveal";
import { DemoBadge, VerificationBadge } from "@/components/lokvaani/VerificationBadge";
import { StoryCard } from "@/components/lokvaani/StoryCard";

export const Route = createFileRoute("/stories/$slug")({
  loader: ({ params }) => {
    const story = storyBySlug(params.slug);
    if (!story) throw notFound();
    return story;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Story"} — LOKVAANI` },
      { name: "description", content: loaderData?.description ?? "A demo entry from the LOKVAANI oral heritage archive." },
      { property: "og:title", content: `${loaderData?.title ?? "Story"} — LOKVAANI` },
      { property: "og:description", content: loaderData?.description ?? "A demo entry from the LOKVAANI oral heritage archive." },
    ],
  }),
  component: StoryDetail,
});

const tabs = ["Original", "हिंदी", "English"] as const;

function StoryDetail() {
  const story = Route.useLoaderData();
  const [tab, setTab] = useState<(typeof tabs)[number]>("Original");
  const related = stories.filter((s) => s.slug !== story.slug).slice(0, 3);

  return (
    <article className="pb-24">
      {/* HERO */}
      <header className="relative h-[62vh] min-h-[420px] w-full overflow-hidden">
        <img src={story.image} alt={story.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/92 via-charcoal/50 to-charcoal/25" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-5xl px-5 pb-10 lg:px-8">
          <DemoBadge label="Demo Story" />
          <h1 className="mt-4 text-display text-4xl uppercase tracking-[0.06em] text-parchment sm:text-6xl">
            {story.title}
          </h1>
          <p className="mt-3 font-serif text-lg italic text-parchment/85">
            A {story.language} {story.category} from {story.region}
          </p>
          <p className="mt-2 text-sm text-parchment/70">
            {story.region} · {story.language} · {story.category}
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="-mt-8 relative z-10">
          <AudioPlayer duration={story.duration} title={`${story.title} · demo recording`} />
        </div>

        {/* SUMMARY */}
        <Reveal>
          <section className="mt-16">
            <p className="eyebrow text-accent">Story Summary</p>
            <p className="mt-5 font-serif text-2xl leading-[1.6] text-foreground sm:text-[1.7rem]">
              {story.summary}
            </p>
          </section>
        </Reveal>

        <div className="gold-rule my-14" />

        {/* ORIGINAL VOICE */}
        <Reveal>
          <section className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="eyebrow text-accent">Original Voice</p>
              <h2 className="mt-3 font-serif text-3xl text-foreground">Original Language: {story.language}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{story.contributor}</p>
              <div className="mt-4"><VerificationBadge verified={story.verified} /></div>
            </div>
            <AudioPlayer duration={story.duration} compact />
          </section>
        </Reveal>

        {/* TRANSCRIPT */}
        <Reveal>
          <section className="mt-16">
            <p className="eyebrow text-accent">Transcript</p>
            <div className="mt-4 flex gap-1 border-b border-border">
              {tabs.map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`-mb-px border-b-2 px-4 py-3 text-sm transition ${tab === t ? "border-gold text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`}
                >
                  {t}
                </button>
              ))}
            </div>
            <div className="surface-card mt-6 rounded-xl p-7 sm:p-9">
              <p className="font-serif text-xl leading-[1.9] text-foreground/90">{transcripts[tab]}</p>
              <p className="mt-6 text-xs text-muted-foreground">
                Demo transcript · AI-assisted transcription and translation are simulated in this prototype.
              </p>
            </div>
          </section>
        </Reveal>

        {/* CULTURAL CONTEXT */}
        <Reveal>
          <section className="mt-16">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <p className="eyebrow text-accent">Cultural Context</p>
              <span className="text-xs text-muted-foreground">Demo metadata</span>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Region", story.region],
                ["Language", story.language],
                ["Tradition", "Folk storytelling"],
                ["Occasion", "Harvest"],
              ].map(([k, v]) => (
                <div key={k} className="surface-card rounded-xl p-5">
                  <p className="eyebrow text-muted-foreground">{k}</p>
                  <p className="mt-2 font-serif text-xl text-foreground">{v}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {story.tags.map((t) => (
                <span key={t} className="rounded-full border border-accent/35 bg-accent/10 px-3 py-1.5 text-xs text-accent">{t}</span>
              ))}
            </div>
          </section>
        </Reveal>

        {/* CONNECTIONS */}
        <Reveal>
          <section id="connections" className="mt-20 scroll-mt-24">
            <p className="eyebrow text-accent">Cultural Connections</p>
            <h2 className="mt-3 text-display text-4xl text-foreground">How India's traditions connect</h2>
            <div className="mt-8"><CulturalGraph /></div>
          </section>
        </Reveal>

        {/* VERIFICATION */}
        <Reveal>
          <section className="surface-card mt-16 rounded-xl p-7">
            <p className="inline-flex items-center gap-2 font-serif text-xl text-foreground">🟢 Community Verified</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              AI assists with transcription, translation, organization and discovery. Cultural context is
              preserved with source information and human/community verification.
            </p>
          </section>
        </Reveal>

        {/* RELATED */}
        <section className="mt-20">
          <p className="eyebrow text-accent">Continue listening</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => <StoryCard key={s.slug} story={s} />)}
          </div>
          <Link to="/explore" className="mt-10 inline-flex rounded-full border border-border px-6 py-3 text-sm transition hover:border-gold">
            ← Back to search
          </Link>
        </section>
      </div>

      {/* STICKY MOBILE PLAYER */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur lg:hidden">
        <AudioPlayer duration={story.duration} compact />
      </div>
    </article>
  );
}
