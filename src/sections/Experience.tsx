import { Badge, Section, Text } from '../design/components';
import { experienceData } from '../content/experience';

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="relative space-y-12 border-l border-[var(--color-border)] pl-6 sm:pl-8">
        {experienceData.map((role) => (
          <li key={`${role.company} ${role.title}`} className="relative">
            <span
              aria-hidden="true"
              className="absolute top-2 -left-[1.9rem] h-3 w-3 rounded-full bg-[var(--color-accent)] sm:-left-[2.4rem]"
            />
            <div className="flex flex-wrap items-baseline gap-x-3">
              <h3 className="text-xl font-medium tracking-tight">{role.title}</h3>
              <p className="text-[var(--color-accent)]">{role.company}</p>
            </div>
            <p className="mt-1 text-sm text-[var(--color-text-muted)]">
              {role.dateText} · {role.location} · {role.team}
            </p>
            <Text className="mt-3">{role.summary}</Text>

            <ul className="mt-4 list-disc space-y-2 pl-5">
              {role.highlights.map((highlight) => (
                <li key={highlight} className="text-[var(--color-text-muted)]">
                  {highlight}
                </li>
              ))}
            </ul>

            <ul className="mt-4 flex flex-wrap gap-2">
              {role.skills.map((skill) => (
                <li key={skill}>
                  <Badge>{skill}</Badge>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
