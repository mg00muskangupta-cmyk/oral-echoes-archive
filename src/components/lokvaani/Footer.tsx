import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="ink-panel mt-24">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-serif text-3xl tracking-[0.18em]">LOKVAANI</p>
            <p className="mt-3 font-serif text-lg italic opacity-80">Preserving voices. Connecting cultures.</p>
            <p className="mt-6 max-w-sm text-sm opacity-60">
              An AI-assisted living digital archive for India's oral cultural heritage.
              All entries shown are demo content created for prototype purposes.
            </p>
          </div>
          <div className="text-sm">
            <p className="eyebrow mb-4 opacity-60">Archive</p>
            <ul className="space-y-2.5 opacity-85">
              <li><Link to="/explore" className="hover:text-gold">Explore</Link></li>
              <li><Link to="/stories" className="hover:text-gold">Stories</Link></li>
              <li><Link to="/folk-songs" className="hover:text-gold">Folk Songs</Link></li>
              <li><Link to="/regions" className="hover:text-gold">Regions</Link></li>
            </ul>
          </div>
          <div className="text-sm">
            <p className="eyebrow mb-4 opacity-60">Participate</p>
            <ul className="space-y-2.5 opacity-85">
              <li><Link to="/contribute" className="hover:text-gold">Contribute a Story</Link></li>
              <li><Link to="/about" className="hover:text-gold">About LOKVAANI</Link></li>
            </ul>
          </div>
        </div>
        <div className="gold-rule my-10 opacity-40" />
        <p className="text-xs tracking-[0.2em] uppercase opacity-55">Smart India Hackathon · Demo Prototype</p>
      </div>
    </footer>
  );
}
