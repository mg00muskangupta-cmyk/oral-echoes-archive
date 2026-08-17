import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export function CategoryCard({ title, desc, image }: { title: string; desc: string; image: string }) {
  return (
    <Link
      to="/explore"
      className="group relative block h-64 w-[78vw] shrink-0 snap-start overflow-hidden rounded-xl border border-border sm:w-auto sm:shrink"
    >
      <img src={image} alt={title} loading="lazy" className="h-full w-full object-cover transition duration-[900ms] group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/92 via-charcoal/45 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5">
        <div className="mb-3 h-px w-10 bg-gold transition-all duration-500 group-hover:w-20" />
        <h3 className="font-serif text-xl text-parchment">{title}</h3>
        <p className="mt-1 text-sm text-parchment/70">{desc}</p>
      </div>
      <ArrowUpRight className="absolute right-4 top-4 h-5 w-5 text-parchment/70 transition group-hover:text-gold" />
    </Link>
  );
}
