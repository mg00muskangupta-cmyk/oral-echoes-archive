import { BadgeCheck, Clock } from "lucide-react";

export function VerificationBadge({ verified }: { verified: boolean }) {
  return verified ? (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-sage/40 bg-sage/12 px-2.5 py-1 text-[11px] font-medium tracking-wide text-sage">
      <BadgeCheck className="h-3.5 w-3.5" /> Community Verified
    </span>
  ) : (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted px-2.5 py-1 text-[11px] font-medium tracking-wide text-muted-foreground">
      <Clock className="h-3.5 w-3.5" /> Awaiting Verification
    </span>
  );
}

export function DemoBadge({ label = "Demo Content" }: { label?: string }) {
  return (
    <span className="eyebrow inline-flex items-center rounded-full border border-gold/50 bg-gold/15 px-2.5 py-1 text-gold-foreground">
      {label}
    </span>
  );
}
