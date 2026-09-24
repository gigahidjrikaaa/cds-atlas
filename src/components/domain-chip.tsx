import type { Domain } from "@/lib/data";
import { domainLabels } from "@/lib/data";

export const domainStyles: Record<
  Domain,
  { dot: string; text: string; chip: string }
> = {
  tech: {
    dot: "bg-tech",
    text: "text-tech",
    chip: "border-tech/25 bg-tech/8 text-tech",
  },
  fashion: {
    dot: "bg-fashion",
    text: "text-fashion",
    chip: "border-fashion/25 bg-fashion/8 text-fashion",
  },
  grooming: {
    dot: "bg-grooming",
    text: "text-grooming",
    chip: "border-grooming/25 bg-grooming/8 text-grooming",
  },
  beauty: {
    dot: "bg-beauty",
    text: "text-beauty",
    chip: "border-beauty/25 bg-beauty/8 text-beauty",
  },
  consumable: {
    dot: "bg-consumable",
    text: "text-consumable",
    chip: "border-consumable/25 bg-consumable/8 text-consumable",
  },
  sports: {
    dot: "bg-sports",
    text: "text-sports",
    chip: "border-sports/25 bg-sports/8 text-sports",
  },
};

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
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] tracking-[0.12em] uppercase ${s.chip} ${className}`}
    >
      <span aria-hidden className={`size-1.5 rounded-full ${s.dot}`} />
      {domainLabels[domain]}
    </span>
  );
}

export function DomainDot({ domain }: { domain: Domain }) {
  return (
    <span
      className={`inline-block size-1.5 rounded-full ${domainStyles[domain].dot}`}
    />
  );
}
