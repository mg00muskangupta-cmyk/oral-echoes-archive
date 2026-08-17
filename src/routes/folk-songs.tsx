import { createFileRoute } from "@tanstack/react-router";
import { stories } from "@/data/archive";
import { StoryCard } from "@/components/lokvaani/StoryCard";
import { AudioPlayer } from "@/components/lokvaani/AudioPlayer";
import { Reveal } from "@/components/lokvaani/Reveal";

export const Route = createFileRoute("/folk-songs")({
  head: () => ({
    meta: [
      { title: "Folk Songs — LOKVAANI" },
      { name: "description", content: "Harvest songs, work songs and celebration songs from India's regions." },
      { property: "og:title", content: "Folk Songs — LOKVAANI" },
      { property: "og:description", content: "Listen to demo recordings of India's folk song traditions." },
    ],
  }),
  component: FolkSongs,
});

function FolkSongs() {
  const songs = stories.filter((s) => ["Folk Song", "Festival & Ritual", "Ritual Account"].includes(s.category));
  return (
    <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20">
      <p className="eyebrow text-accent">Listening Room</p>
      <h1 className="mt-4 text-display text-4xl text-foreground sm:text-5xl">Folk Songs</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">
        Songs of celebration, work and memory. All recordings are demo content.
      </p>
      <div className="mt-10 space-y-4">
        {songs.map((s) => (
          <Reveal key={s.slug}>
            <div className="surface-card rounded-xl p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="font-serif text-2xl text-foreground">{s.title}</h2>
                <p className="text-sm text-muted-foreground">{s.region} · {s.language}</p>
              </div>
              <AudioPlayer duration={s.duration} className="mt-4" compact />
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {songs.map((s) => <StoryCard key={s.slug} story={s} />)}
      </div>
    </div>
  );
}
