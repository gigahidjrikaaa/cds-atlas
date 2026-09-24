export function SequenceSteps({ steps }: { steps: string[] }) {
  return (
    <ol className="relative ml-3 space-y-0 border-l border-line">
      {steps.map((step, i) => (
        <li key={i} className="relative py-2 pl-7">
          <span
            aria-hidden
            className="tnum absolute top-2.5 -left-[13px] grid size-6 place-items-center rounded-full border border-line bg-card font-mono text-[10px] text-ink-soft"
          >
            {i + 1}
          </span>
          <p className="text-sm leading-snug text-ink-soft">{step}</p>
        </li>
      ))}
    </ol>
  );
}
