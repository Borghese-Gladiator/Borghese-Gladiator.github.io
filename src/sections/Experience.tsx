import { Disclosure, Section, Tag, Text } from '../design/components';
import { experienceData } from '../content/experience';

export function Experience() {
  return (
    <Section id="experience" title="Experience" accent="sky">
      <ol className="space-y-6 border-l border-[var(--color-border)] pl-6 sm:pl-10">
        {experienceData.map((role) => (
          <li key={`${role.company} ${role.title}`} className="relative">
            <span
              aria-hidden="true"
              className="absolute top-7 -left-[1.9rem] h-3 w-3 rounded-full bg-[var(--color-tag-sky)] sm:-left-[2.9rem]"
            />
            <Disclosure
              label={`${role.title} at ${role.company}`}
              heading={
                <>
                  {role.title}{' '}
                  <span className="text-[var(--color-tag-sky)]">{role.company}</span>
                </>
              }
              meta={
                <>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    {role.dateText} · {role.location} · {role.team}
                  </p>
                  <Text className="mt-3">{role.summary}</Text>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {role.skills.map((skill) => (
                      <li key={skill}>
                        <Tag name={skill} />
                      </li>
                    ))}
                  </ul>
                </>
              }
            >
              <ul className="list-disc space-y-2 border-t border-[var(--color-border)] pt-4 pl-5">
                {role.highlights.map((highlight) => (
                  <li key={highlight} className="text-[var(--color-text-muted)]">
                    {highlight}
                  </li>
                ))}
              </ul>
            </Disclosure>
          </li>
        ))}
      </ol>
    </Section>
  );
}
