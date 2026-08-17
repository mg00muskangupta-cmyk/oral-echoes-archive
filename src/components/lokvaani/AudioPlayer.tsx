import { useEffect, useRef, useState } from "react";
import { Pause, Play, Volume2 } from "lucide-react";
import { Waveform } from "./Waveform";

const toTime = (s: number) =>
  `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

export function AudioPlayer({
  duration = "6:42",
  title,
  compact = false,
  className = "",
}: {
  duration?: string;
  title?: string;
  compact?: boolean;
  className?: string;
}) {
  const parts = duration.split(":").map(Number);
  const total = (parts[0] ?? 0) * 60 + (parts[1] ?? 0);
  const [playing, setPlaying] = useState(false);
  const [pos, setPos] = useState(0);
  const [speed, setSpeed] = useState(1);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => {
      setPos((p) => (p + speed >= total ? (setPlaying(false), total) : p + speed));
    }, 1000);
    return () => window.clearInterval(id);
  }, [playing, speed, total]);
  useEffect(() => () => { if (raf.current) cancelAnimationFrame(raf.current); }, []);

  const progress = (pos / total) * 100;

  return (
    <div className={`surface-card flex items-center gap-4 rounded-lg px-4 py-3 ${className}`}>
      <button
        aria-label={playing ? "Pause demo audio" : "Play demo audio"}
        onClick={() => setPlaying((p) => !p)}
        className={`grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition hover:bg-primary/90 ${playing ? "animate-pulse-ring" : ""}`}
      >
        {playing ? <Pause className="h-4.5 w-4.5" /> : <Play className="ml-0.5 h-4.5 w-4.5" />}
      </button>
      <div className="min-w-0 flex-1">
        {title && !compact && (
          <p className="mb-1 truncate font-serif text-sm text-foreground">{title}</p>
        )}
        <Waveform playing={playing} progress={progress} onSeek={(p) => setPos((p / 100) * total)} bars={compact ? 28 : 56} />
      </div>
      <div className="flex shrink-0 items-center gap-3 text-xs tabular-nums text-muted-foreground">
        <span>{toTime(pos)} / {duration}</span>
        {!compact && (
          <>
            <button
              onClick={() => setSpeed((v) => (v === 1 ? 1.5 : v === 1.5 ? 2 : v === 2 ? 0.75 : 1))}
              className="rounded-full border border-border px-2 py-1 font-medium transition hover:border-gold hover:text-foreground"
            >
              {speed}x
            </button>
            <Volume2 className="hidden h-4 w-4 sm:block" />
          </>
        )}
      </div>
    </div>
  );
}
