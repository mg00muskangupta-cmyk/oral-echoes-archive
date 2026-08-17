import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-storyteller.jpg";
import { categories, images, stories } from "@/data/archive";
import { Reveal } from "@/components/lokvaani/Reveal";
import { Waveform } from "@/components/lokvaani/Waveform";
import { StoryCard } from "@/components/lokvaani/StoryCard";
import { CategoryCard } from "@/components/lokvaani/CategoryCard";
import { IndiaMap } from "@/components/lokvaani/IndiaMap";
import { AudioPlayer } from "@/components/lokvaani/AudioPlayer";
import { DemoBadge } from "@/components/lokvaani/VerificationBadge";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LOKVAANI — India's Living Oral Heritage Archive" },
      { name: "description", content: "Discover, preserve and connect India's living oral heritage through stories, songs, languages and traditions." },
      { property: "og:title", content: "LOKVAANI — India's Living Oral Heritage Archive" },
      { property: "og:description", content: "An AI-assisted living digital archive of India's folk stories, songs and oral histories." },
    ],
  }),
  component: Home,
});

function SectionHeading({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="eyebrow text-accent">{eyebrow}</p>
      <h2 className="mt-4 text-display text-4xl text-foreground sm:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{sub}</p>}
      <div className="gold-rule mx-auto mt-8 w-32" />
    </div>
  );
}

function Home() {
  const feature = stories[0];
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:py-24">
          <div className="animate-fade-up">
            <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-gold/50 bg-gold/12 px-3.5 py-1.5 text-gold-foreground">
              <Sparkles className="h-3.5 w-3.5" /> AI-Powered Living Archive
            </span>
            <h1 className="mt-7 text-display text-[2.6rem] leading-[1.03] text-foreground sm:text-6xl xl:text-[4.4rem]">
              Every voice carries<br className="hidden sm:block" /> a piece of{" "}
              <span className="italic text-primary">history.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Discover, preserve and connect India's living oral heritage through stories, songs,
              languages and traditions.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/explore" className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm tracking-wide text-primary-foreground transition hover:bg-primary/90">
                Explore Heritage <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <Link to="/contribute" className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-7 py-3.5 text-sm tracking-wide text-foreground transition hover:border-gold hover:bg-gold/10">
                Share a Story
              </Link>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <Waveform playing className="max-w-[240px]" bars={32} />
              <div className="text-xs leading-relaxed text-muted-foreground">
                Preserve → Understand<br />→ Connect → Discover
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] border border-gold/25" aria-hidden />
            <div className="relative overflow-hidden rounded-[1.6rem] border border-border">
              <img src={heroImg} alt="A folk storyteller singing under a harvest moon in Rajasthan" width={1536} height={1024} className="h-[300px] w-full object-cover sm:h-[420px] lg:h-[540px]" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
                <div>
                  <p className="eyebrow text-gold">Sample Archive Entry</p>
                  <p className="mt-1 font-serif text-lg text-parchment">Voices of the Thar</p>
                </div>
                <Waveform playing className="w-28 sm:w-40" bars={20} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TODAY'S VOICE */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <Reveal>
          <div className="surface-card grid overflow-hidden rounded-2xl lg:grid-cols-2">
            <div className="relative min-h-[280px] overflow-hidden group">
              <img src={images.harvestMoon} alt="Harvest night under a golden moon" loading="lazy" className="h-full w-full object-cover transition duration-[1200ms] group-hover:scale-105" />
              <div className="absolute left-4 top-4"><DemoBadge /></div>
            </div>
            <div className="p-7 sm:p-10">
              <p className="eyebrow text-accent">Today's Voice</p>
              <h2 className="mt-3 text-display text-4xl text-foreground sm:text-5xl">The Harvest Moon</h2>
              <p className="mt-2 text-sm text-muted-foreground">Rajasthan · Marwari · Folk Tale</p>
              <p className="mt-6 font-serif text-lg italic leading-relaxed text-foreground/85">
                “When the moon rose, the village did not sleep. A lamp was placed in every courtyard…”
              </p>
              <AudioPlayer duration="6:42" className="mt-7" title="The Harvest Moon · demo recording" />
              <Link to="/stories/$slug" params={{ slug: "harvest-moon" }} className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground transition hover:bg-primary/90">
                Explore Story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-20">
        <Reveal><SectionHeading eyebrow="Collections" title="Explore India's Living Heritage" /></Reveal>
        <Reveal delay={120}>
          <div className="mt-12 flex snap-x gap-5 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-3">
            {categories.map((c) => (
              <CategoryCard key={c.title} title={c.title} desc={c.desc} image={c.image} />
            ))}
          </div>
        </Reveal>
      </section>

      {/* MAP */}
      <section className="border-y border-border bg-parchment/60 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal><SectionHeading eyebrow="Across India" title="Voices mapped by region" sub="Select a region to see the traditions, languages and demo entries held in the archive." /></Reveal>
          <Reveal delay={100}><div className="mt-14"><IndiaMap /></div></Reveal>
        </div>
      </section>

      {/* FEATURED */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <Reveal><SectionHeading eyebrow="Featured" title="Stories from the archive" /></Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stories.slice(0, 4).map((s, i) => (
            <Reveal key={s.slug} delay={i * 90}><StoryCard story={s} /></Reveal>
          ))}
        </div>
      </section>

      {/* CONNECTED CULTURES */}
      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-24">
        <Reveal>
          <div className="ink-panel overflow-hidden rounded-2xl px-6 py-14 sm:px-12">
            <p className="eyebrow text-gold">Connected Cultures</p>
            <h2 className="mt-4 max-w-2xl text-display text-4xl sm:text-5xl">
              One tradition can echo across many cultures.
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                ["Rajasthan", "Harvest", "Folk Song"],
                ["Punjab", "Harvest", "Folk Tradition"],
                ["Bihar", "Harvest", "Oral Story"],
              ].map((chain, i) => (
                <div key={i} className="relative rounded-xl border border-parchment/20 bg-parchment/8 p-6 text-center">
                  {chain.map((c, j) => (
                    <div key={c}>
                      <p className={j === 0 ? "font-serif text-2xl text-parchment" : "text-sm text-parchment/75"}>{c}</p>
                      {j < 2 && <p className="my-2 text-gold">↓</p>}
                    </div>
                  ))}
                  {i < 2 && <span className="absolute -right-4 top-1/2 hidden text-gold md:block">↔</span>}
                </div>
              ))}
            </div>
            <p className="mt-10 max-w-2xl text-sm leading-relaxed text-parchment/75">
              LOKVAANI discovers relationships between stories, traditions, languages and regions.
            </p>
            <Link to="/stories/$slug" params={{ slug: "harvest-moon" }} hash="connections" className="mt-7 inline-flex items-center gap-2 rounded-full border border-gold/60 bg-gold/20 px-6 py-3 text-sm text-parchment transition hover:bg-gold/30">
              Explore Connections <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* CLOSING */}
      <section className="relative overflow-hidden border-y border-border">
        <img src={images.river} alt="" aria-hidden loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="relative mx-auto max-w-4xl px-5 py-24 text-center lg:py-32">
          <Reveal>
            <p className="text-display text-3xl leading-[1.35] text-foreground sm:text-[2.6rem]">
              India's heritage does not live only in monuments and manuscripts.
              <br />
              <span className="italic text-primary">It lives in voices.</span>
              <br />
              LOKVAANI helps those voices travel across generations.
            </p>
            <Link to="/explore" className="mt-12 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm tracking-wide text-primary-foreground transition hover:bg-primary/90">
              Begin Exploring <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
