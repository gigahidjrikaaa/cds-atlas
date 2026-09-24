import type { Story } from "@/lib/data";
import { DomainChip } from "@/components/domain-chip";
import { InvolvementMeter } from "@/components/involvement-meter";
import { SequenceSteps } from "@/components/sequence-steps";

function Field({
  n,
  label,
  children,
}: {
  n: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-line-soft px-6 py-5 sm:px-8">
      <p className="flex items-baseline gap-2">
        <span aria-hidden className="tnum font-mono text-[10px] text-accent">
          {n}
        </span>
        <span className="font-mono text-[10px] tracking-[0.16em] text-ink-faint uppercase">
          {label}
        </span>
      </p>
      <div className="mt-2.5 space-y-2 text-[14.5px] leading-relaxed">
        {children}
      </div>
    </section>
  );
}

function MonoLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[10px] tracking-[0.14em] text-accent uppercase">
      {children}
    </span>
  );
}

export function StoryDossier({
  story,
  index,
}: {
  story: Story;
  index: number;
}) {
  const pp = story.postPurchase;
  return (
    <article className="shadow-sheet flex flex-col border border-line bg-card">
      {/* respondent header */}
      <header className="px-6 pt-6 pb-5 sm:px-8">
        <p className="font-mono text-[10px] tracking-[0.16em] text-ink-faint uppercase">
          Story {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="font-display mt-1.5 text-2xl font-semibold tracking-tight text-balance">
          {story.respondent}
        </h3>
        <p className="mt-2 font-mono text-[11px] leading-relaxed text-ink-soft">
          {story.profile.join(" · ")}
        </p>

        {/* product line */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border border-line bg-paper px-4 py-3">
          <span className="font-semibold">{story.product}</span>
          <span className="flex items-center gap-3">
            <DomainChip domain={story.domain} />
            {story.price && (
              <span className="tnum font-mono text-xs text-ink-soft">
                {story.price}
              </span>
            )}
          </span>
        </div>

        {/* involvement */}
        <div className="mt-4">
          <p className="flex items-center gap-3">
            <MonoLabel>Involvement</MonoLabel>
            <InvolvementMeter level={story.involvement.level} />
          </p>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            {story.involvement.text}
          </p>
        </div>
      </header>

      <Field n="04" label="Buying Center (DMU)">
        <p>{story.dmu.roles}</p>
        {story.dmu.influencer && (
          <p>
            <MonoLabel>Influencers · </MonoLabel>
            <span className="text-ink-soft">{story.dmu.influencer}</span>
          </p>
        )}
      </Field>

      <Field n="05" label="Trigger & Source">
        <p>
          <MonoLabel>Need · </MonoLabel>
          <span className="text-ink-soft">{story.trigger.need}</span>
        </p>
        <p>
          <MonoLabel>Source · </MonoLabel>
          <span className="text-ink-soft">{story.trigger.source}</span>
        </p>
      </Field>

      <Field n="06" label="Alternatives Evaluated">
        <p>
          <MonoLabel>Considered · </MonoLabel>
          <span className="text-ink-soft">
            {story.alternatives.considered}
          </span>
        </p>
        <p>
          <MonoLabel>Outcome · </MonoLabel>
          <span className="text-ink-soft">{story.alternatives.outcome}</span>
        </p>
      </Field>

      <Field n="07" label="Purchase Channel & Sequence">
        <p className="font-medium">{story.channel.name}</p>
        <SequenceSteps steps={story.channel.steps} />
      </Field>

      <Field n="08" label="Post-purchase & Metaphor">
        {pp.scores && (
          <p className="tnum font-mono text-[11px] tracking-[0.08em] text-accent-deep uppercase">
            {pp.scores.join(" · ")}
          </p>
        )}
        <p>
          <MonoLabel>Satisfaction · </MonoLabel>
          <span className="text-ink-soft">{pp.satisfaction}</span>
        </p>
        {pp.notes?.map((n) => (
          <p key={n} className="text-ink-soft">
            {n}
          </p>
        ))}
        {pp.gapNote && (
          <p className="border-l-2 border-line pl-3 text-xs text-ink-faint italic">
            {pp.gapNote}
          </p>
        )}
        {pp.metaphor && (
          <div className="mt-1 border-l-4 border-accent bg-ink p-4 text-paper">
            <p className="font-mono text-[10px] tracking-[0.16em] text-paper/50 uppercase">
              Relationship metaphor
            </p>
            <p className="font-display mt-1 text-xl font-semibold italic">
              “{pp.metaphor}”
            </p>
            {pp.metaphorMeaning && (
              <p className="mt-1.5 text-[13px] leading-relaxed text-paper/70">
                {pp.metaphorMeaning}
              </p>
            )}
          </div>
        )}
        {pp.quote && (
          <blockquote className="border-l-2 border-accent pl-4 text-[15px] leading-relaxed italic">
            “{pp.quote}”
          </blockquote>
        )}
      </Field>
    </article>
  );
}
