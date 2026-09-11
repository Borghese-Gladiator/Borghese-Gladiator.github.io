import { Section, Text } from '../design/components';
import { splitEmphasis } from '../design/splitEmphasis';
import { aboutBlocks, aboutFacts, aboutLead } from '../content/about';

/** Lifts a marked name out of the muted body text. */
function Prose({ text }: { text: string }) {
  return (
    <>
      {splitEmphasis(text).map((segment) =>
        segment.strong ? (
          <strong key={segment.text} className="font-medium text-[var(--color-text)]">
            {segment.text}
          </strong>
        ) : (
          <span key={segment.text}>{segment.text}</span>
        ),
      )}
    </>
  );
}

export function About() {
  return (
    <Section id="about" title="About" accent="violet">
      <div className="max-w-2xl">
        <p className="text-xl leading-relaxed text-balance">{aboutLead}</p>

        <dl className="mt-12 space-y-10">
          {aboutBlocks.map((block) => (
            <div key={block.label} className="sm:grid sm:grid-cols-[7rem_1fr] sm:gap-8">
              <dt className="text-xs tracking-widest text-[var(--color-text-muted)] uppercase sm:mt-1.5">
                {block.label}
              </dt>
              <dd className="mt-2 space-y-4 sm:mt-0">
                {block.paragraphs.map((paragraph) => (
                  <Text key={paragraph} muted>
                    <Prose text={paragraph} />
                  </Text>
                ))}
              </dd>
            </div>
          ))}
        </dl>

        <ul className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-[var(--color-border)] pt-6 text-sm text-[var(--color-text-muted)]">
          {aboutFacts.map((fact, index) => (
            <li key={fact} className="flex items-center gap-3">
              {index > 0 ? (
                <span aria-hidden="true" className="text-[var(--color-border)]">
                  ·
                </span>
              ) : null}
              {fact}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
