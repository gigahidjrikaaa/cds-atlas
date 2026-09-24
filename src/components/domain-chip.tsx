import type { Domain } from "@/lib/data";
import { domainLabels } from "@/lib/data";

export const domainStyles: Record<
  Domain,
  { dot: string; text: string; chip: string }
> = {
  tech: { dot: "bg-tech", text: "text-tech", chip: "border-line bg-card text-tech" },
  fashion: { dot: "bg-fashion", text: "text-fashion", chip: "border-line bg-card text-fashion" },
  grooming: { dot: "bg-grooming", text: "text-grooming", chip: "border-line bg-card text-grooming" },
  beauty: { dot: "bg-beauty", text: "text-beauty", chip: "border-line bg-card text-beauty" },
  consumable: { dot: "bg-consumable", text: "text-consumable", chip: "border-line bg-card text-consumable" },
  sports: { dot: "bg-sports", text: "text-sports", chip: "border-line bg-card text-sports" },
};

/** Archival specimen tag: sharp corners, hairline border, square swatch. */
export function DomainChip({
  domain,
  className = "",
}: {
  domain: Domain;
  className?: string;
}) {
  const s = domainStyles[domain];
  return (
    <span
      className={`inline-flex items-center gap-1.5 border px-2 py-0.5 font-mono text-[10px] tracking-[0.12em] uppercase ${s.chip} ${className}`}
    >
      <span aria-hidden className={`size-1.5 ${s.dot}`} />
      {domainLabels[domain]}
    </span>
  );
}

export function DomainDot({ domain }: { domain: Domain }) {
  return (
    <span
      aria-hidden
      className={`inline-block size-1.5 ${domainStyles[domain].dot}`}
    />
  );
}
