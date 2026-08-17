const BARS = 56;
const heights = Array.from({ length: BARS }, (_, i) =>
  30 + Math.abs(Math.sin(i * 0.7) * 45) + Math.abs(Math.cos(i * 1.9) * 25),
);

export function Waveform({
  playing = false,
  progress = 0,
  className = "",
  bars = BARS,
  onSeek,
}: {
  playing?: boolean;
  progress?: number;
  className?: string;
  bars?: number;
  onSeek?: (pct: number) => void;
}) {
  return (
    <div
      className={`flex h-12 items-center gap-[3px] ${onSeek ? "cursor-pointer" : ""} ${className}`}
      onClick={(e) => {
        if (!onSeek) return;
        const r = e.currentTarget.getBoundingClientRect();
        onSeek(((e.clientX - r.left) / r.width) * 100);
      }}
    >
      {Array.from({ length: bars }, (_, i) => {
        const pct = (i / bars) * 100;
        const active = pct <= progress;
        return (
          <span
            key={i}
            className={`flex-1 rounded-full transition-colors ${active ? "bg-accent" : "bg-foreground/20"} ${playing ? "animate-wave" : ""}`}
            style={{
              height: `${heights[i % BARS]}%`,
              animationDelay: `${(i % 12) * 0.08}s`,
            }}
          />
        );
      })}
    </div>
  );
}
