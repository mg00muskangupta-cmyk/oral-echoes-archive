import { Link } from "@tanstack/react-router";
import { Play } from "lucide-react";
import type { Story } from "@/data/archive";
import { DemoBadge, VerificationBadge } from "./VerificationBadge";

export function StoryCard({ story }: { story: Story }) {
  return (
    <article className="surface-card group flex h-full flex-col overflow-hidden rounded-xl transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_28px_60px_-32px_oklch(0.3_0.08_40/0.6)]">
      <Link to="/stories/$slug" params={{ slug: story.slug }} className="relative block aspect-[4/3] overflow-hidden">
        <img
          src={story.image}
          alt={story.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-[900ms] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/5 to-transparent" />
        <div className="absolute left-3 top-3"><DemoBadge /></div>
        <span className="absolute bottom-3 right-3 rounded-full bg-background/90 px-2 py-1 text-[11px] tabular-nums text-foreground">
          {story.duration}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="eyebrow text-accent">{story.category}</p>
        <h3 className="mt-2 font-serif text-xl leading-tight text-foreground">
          <Link to="/stories/$slug" params={{ slug: story.slug }} className="transition hover:text-primary">
            {story.title}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {story.region} · {story.language}
        </p>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{story.description}</p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <VerificationBadge verified={story.verified} />
          <Link
            to="/stories/$slug"
            params={{ slug: story.slug }}
            aria-label={`Play ${story.title}`}
            className="grid h-9 w-9 place-items-center rounded-full border border-border text-foreground transition hover:border-gold hover:bg-gold/15"
          >
            <Play className="ml-0.5 h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
