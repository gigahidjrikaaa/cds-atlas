import Image from "next/image";
import type { Story } from "@/lib/data";
import { DomainChip } from "@/components/domain-chip";
import { InvolvementMeter } from "@/components/involvement-meter";
import { SequenceSteps } from "@/components/sequence-steps";

/**
 * One dimension row of the dossier: mono number + label in a fixed left
 * column, content on the right — a spec-sheet hierarchy with clear
 * separation between fields.
 */
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
    <section className="grid gap-x-6 gap-y-2 border-t border-line px-6 py-5 sm:grid-cols-[10.5rem_1fr] sm:gap-y-0 sm:px-8">
      <p className="font-mono text-[10px] leading-5 tracking-[0.16em] text-ink-faint uppercase">
        <span aria-hidden className="tnum mr-2 text-accent">
          {n}
        </span>
        {label}
      </p>
      <div className="space-y-2 text-[14.5px] leading-relaxed">{children}</div>
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

function ProductPhoto({ story }: { story: Story }) {
  if (story.image) {
    return (
      <div className="relative aspect-square overflow-hidden border border-line bg-paper-deep">
        <Image
          src={story.image}
          alt={story.imageAlt ?? story.product}
          fill
          sizes="(min-width: 768px) 168px, 128px"
          className="object-cover"
        />
      </div>
    );
  }
  /* designed placeholder when no photo exists */
  return (
    <div
      aria-hidden
      className="relative flex aspect-square flex-col items-center justify-center border border-line bg-paper-deep p-3 text-center"
    >
      <span className="font-display text-4xl leading-none font-semibold text-line">
        {story.product.slice(0, 1)}
      </span>
      {story.imageNote && (
        <span className="mt-2 font-mono text-[8.5px] leading-snug tracking-[0.08em] text-ink-faint uppercase">
          {story.imageNote}
        </span>
      )}
    </div>
  );
}

export function StoryDossier({
  story,
  index,
  caseCode,
}: {
  story: Story;
  index: number;
  caseCode: string;
}) {
  const pp = story.postPurchase;
  return (
    <article className="shadow-sheet border border-line bg-card">
      {/* story band */}
      <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b-2 border-ink px-6 pt-5 pb-4 sm:px-8">
        <p className="font-mono text-[10px] tracking-[0.16em] text-ink-faint uppercase">
          <span className="tnum mr-2 text-accent">
            {String(index + 1).padStart(2, "0")}
          </span>
          {caseCode} · Purchase story
        </p>
        <p className="font-mono text-[10px] tracking-[0.16em] text-ink-faint uppercase">
          Story {index + 1} of 2
        </p>
      </header>

      {/* respondent */}
      <header className="px-6 pt-5 pb-5 sm:px-8">
        <h3 className="font-display text-3xl font-semibold tracking-tight">
          {story.respondent}
        </h3>
        <p className="mt-1.5 font-mono text-[11px] leading-relaxed text-ink-soft">
          {story.profile.join(" · ")}
        </p>
      </header>

      {/* product block: photo + identity */}
      <section className="mx-6 mb-6 grid grid-cols-[7rem_1fr] gap-4 border border-line bg-paper p-4 sm:mx-8 sm:grid-cols-[8.5rem_1fr] sm:gap-5">
        <ProductPhoto story={story} />
        <div className="min-w-0">
          <p className="font-mono text-[10px] tracking-[0.16em] text-ink-faint uppercase">
            <span aria-hidden className="tnum mr-2 text-accent">
              02
            </span>
            The product
          </p>
          <p className="font-display mt-1.5 text-xl leading-snug font-semibold tracking-tight text-balance">
            {story.product}
          </p>
          <p className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <DomainChip domain={story.domain} />
            {story.price && (
              <span className="tnum font-mono text-xs text-ink-soft">
                {story.price}
              </span>
            )}
          </p>
        </div>
      </section>

      {/* involvement */}
      <section className="grid gap-x-6 gap-y-2 border-t border-line px-6 py-5 sm:grid-cols-[10.5rem_1fr] sm:gap-y-0 sm:px-8">
        <p className="font-mono text-[10px] leading-5 tracking-[0.16em] text-ink-faint uppercase">
          <span aria-hidden className="tnum mr-2 text-accent">
            03
          </span>
          Involvement
        </p>
        <div className="space-y-2">
          <p>
            <InvolvementMeter level={story.involvement.level} />
          </p>
          <p className="text-[14.5px] leading-relaxed text-ink-soft">
            {story.involvement.text}
          </p>
        </div>
      </section>

      <Field n="04" label="Buying center (DMU)">
        <p>{story.dmu.roles}</p>
        {story.dmu.influencer && (
          <p>
            <MonoLabel>Influencers · </MonoLabel>
            <span className="text-ink-soft">{story.dmu.influencer}</span>
          </p>
        )}
      </Field>

      <Field n="05" label="Trigger & source">
        <p>
          <MonoLabel>Need · </MonoLabel>
          <span className="text-ink-soft">{story.trigger.need}</span>
        </p>
        <p>
          <MonoLabel>Source · </MonoLabel>
          <span className="text-ink-soft">{story.trigger.source}</span>
        </p>
      </Field>

      <Field n="06" label="Alternatives evaluated">
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

      <Field n="07" label="Channel & sequence">
        <p className="font-medium">{story.channel.name}</p>
        <SequenceSteps steps={story.channel.steps} />
      </Field>

      <Field n="08" label="Post-purchase & metaphor">
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
