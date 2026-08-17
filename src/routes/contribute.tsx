import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mic, Upload } from "lucide-react";
import { AIProcessing } from "@/components/lokvaani/AIProcessing";

export const Route = createFileRoute("/contribute")({
  head: () => ({
    meta: [
      { title: "Contribute a Story — LOKVAANI" },
      { name: "description", content: "Share a story, song or tradition worth preserving and watch LOKVAANI's AI understand it." },
      { property: "og:title", content: "Contribute a Story — LOKVAANI" },
      { property: "og:description", content: "Your voice. Our heritage. Share a story with the next generation." },
    ],
  }),
  component: Contribute,
});

const field = "w-full rounded-lg border border-border bg-card px-4 py-3 text-sm outline-none transition focus:border-gold";

function Contribute() {
  const [submitted, setSubmitted] = useState(false);
  const [mode, setMode] = useState<"upload" | "record">("upload");
  const [anon, setAnon] = useState(false);
  const [permission, setPermission] = useState(false);

  return (
    <div className="mx-auto max-w-4xl px-5 py-14 lg:py-20">
      <div className="text-center">
        <p className="eyebrow text-accent">Contribute</p>
        <h1 className="mt-4 text-display text-4xl text-foreground sm:text-5xl">Your Voice. Our Heritage.</h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Know a story, song or tradition worth preserving? Share it with the next generation.
        </p>
      </div>

      <div className="mt-12">
        {submitted ? (
          <AIProcessing />
        ) : (
          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="surface-card rounded-2xl p-6 sm:p-10"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {(["upload", "record"] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMode(m)}
                  className={`flex flex-col items-center gap-3 rounded-xl border-2 border-dashed px-6 py-10 transition ${mode === m ? "border-gold bg-gold/10" : "border-border hover:border-gold/60"}`}
                >
                  {m === "upload" ? <Upload className="h-6 w-6 text-accent" /> : <Mic className="h-6 w-6 text-accent" />}
                  <span className="font-serif text-lg text-foreground">{m === "upload" ? "Upload Audio" : "Record Voice"}</span>
                  <span className="text-xs text-muted-foreground">Demo only · nothing is uploaded</span>
                </button>
              ))}
            </div>

            <div className="gold-rule my-9" />

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="sm:col-span-2 text-sm">
                <span className="eyebrow text-muted-foreground">Title</span>
                <input required className={`${field} mt-2`} placeholder="The Harvest Moon" />
              </label>
              <label className="text-sm">
                <span className="eyebrow text-muted-foreground">Language</span>
                <input className={`${field} mt-2`} placeholder="Marwari" />
              </label>
              <label className="text-sm">
                <span className="eyebrow text-muted-foreground">Region</span>
                <input className={`${field} mt-2`} placeholder="Rajasthan" />
              </label>
              <label className="text-sm">
                <span className="eyebrow text-muted-foreground">Category</span>
                <select className={`${field} mt-2`} defaultValue="Folk Story">
                  {["Folk Story", "Folk Song", "Oral History", "Traditional Knowledge", "Festival & Ritual"].map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </label>
              <label className="text-sm">
                <span className="eyebrow text-muted-foreground">Occasion</span>
                <input className={`${field} mt-2`} placeholder="Harvest" />
              </label>
              <label className="sm:col-span-2 text-sm">
                <span className="eyebrow text-muted-foreground">Description</span>
                <textarea rows={4} className={`${field} mt-2 resize-none`} placeholder="What is this story about, and who told it to you?" />
              </label>
              <label className="text-sm">
                <span className="eyebrow text-muted-foreground">Contributor</span>
                <input disabled={anon} className={`${field} mt-2 disabled:opacity-50`} placeholder="Your name" />
              </label>
              <div className="flex items-end">
                <label className="flex cursor-pointer items-center gap-3 text-sm">
                  <button
                    type="button"
                    onClick={() => setAnon((a) => !a)}
                    className={`relative h-6 w-11 rounded-full transition ${anon ? "bg-accent" : "bg-muted"}`}
                    aria-pressed={anon}
                  >
                    <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-card transition-all ${anon ? "left-[22px]" : "left-0.5"}`} />
                  </button>
                  Contribute anonymously
                </label>
              </div>
            </div>

            <label className="mt-8 flex items-start gap-3 text-sm text-muted-foreground">
              <input type="checkbox" required checked={permission} onChange={(e) => setPermission(e.target.checked)} className="mt-1 h-4 w-4 accent-[oklch(0.62_0.14_46)]" />
              I have permission to share this recording.
            </label>

            <button type="submit" className="mt-8 w-full rounded-full bg-primary px-8 py-4 text-sm tracking-wide text-primary-foreground transition hover:bg-primary/90">
              Preserve This Story
            </button>
            <p className="mt-4 text-center text-xs text-muted-foreground">
              Prototype demo — no file is uploaded and no data leaves your browser.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
