import type { InvolvementLevel } from "@/lib/data";
import { involvementFill, involvementLabel } from "@/lib/data";

export function InvolvementMeter({
  level,
  compact = false,
}: {
  level: InvolvementLevel;
  compact?: boolean;
}) {
  const fill = involvementFill[level];
  return (
    <span className="inline-flex items-center gap-2">
      <span
        aria-hidden
        className="flex w-16 items-center gap-1"
      >
        {[1, 2, 3].map((seg) => (
          <span
            key={seg}
            className={`h-1.5 flex-1 rounded-full ${
              seg <= fill ? "bg-ink" : "bg-line-soft"
            }`}
          />
        ))}
      </span>
      {!compact && (
        <span className="font-mono text-[10px] tracking-[0.12em] text-ink-soft uppercase">
          {involvementLabel[level]}
        </span>
      )}
      <span className="sr-only">
        Involvement level: {involvementLabel[level]}
      </span>
    </span>
  );
}
