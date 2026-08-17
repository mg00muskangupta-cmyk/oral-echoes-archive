import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Bookmark, Globe, Menu, Search, User, X } from "lucide-react";

const nav = [
  { label: "Home", to: "/" },
  { label: "Explore", to: "/explore" },
  { label: "Stories", to: "/stories" },
  { label: "Folk Songs", to: "/folk-songs" },
  { label: "Regions", to: "/regions" },
  { label: "Contribute", to: "/contribute" },
  { label: "About", to: "/about" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("EN");

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-5 lg:h-[72px] lg:px-8">
        <Link to="/" className="group flex items-baseline gap-2">
          <span className="font-serif text-xl tracking-[0.16em] text-primary lg:text-2xl">LOKVAANI</span>
          <span className="hidden text-[10px] tracking-[0.22em] text-muted-foreground xl:inline">
            ORAL HERITAGE ARCHIVE
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "text-primary" }}
              className="relative text-[13px] tracking-wide text-foreground/75 transition hover:text-primary after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-1.5 lg:flex">
          <button
            onClick={() => setLang((l) => (l === "EN" ? "हि" : l === "हि" ? "বাং" : "EN"))}
            className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs transition hover:border-gold"
          >
            <Globe className="h-3.5 w-3.5" /> {lang}
          </button>
          <Link to="/explore" aria-label="Search" className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-secondary">
            <Search className="h-4 w-4" />
          </Link>
          <Link to="/stories" aria-label="Saved" className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-secondary">
            <Bookmark className="h-4 w-4" />
          </Link>
          <Link to="/about" aria-label="Profile" className="grid h-9 w-9 place-items-center rounded-full border border-border transition hover:border-gold">
            <User className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <Link to="/explore" aria-label="Search" className="grid h-10 w-10 place-items-center rounded-full">
            <Search className="h-5 w-5" />
          </Link>
          <button aria-label="Menu" onClick={() => setOpen((o) => !o)} className="grid h-10 w-10 place-items-center rounded-full">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1 px-5 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 font-serif text-lg text-foreground transition hover:bg-secondary"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
