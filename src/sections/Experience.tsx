import { Disclosure, Section, Tag, Text } from '../design/components';
import { experienceData } from '../content/experience';
import { education } from '../content/education';

/** Marks one item on the timeline rule. School takes its own hue. */
function Dot({ hue }: { hue: string }) {
  return (
    <span
      aria-hidden="true"
      className="absolute top-7 -left-[1.9rem] h-3 w-3 rounded-full sm:-left-[2.9rem]"
      style={{ backgroundColor: `var(--color-tag-${hue})` }}
    />
  );
}

function SkillTags({ skills }: { skills: string[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {skills.map((skill) => (
        <li key={skill}>
          <Tag name={skill} />
        </li>
      ))}
    </ul>
  );
}

export function Experience() {
  return (
    <Section id="experience" title="Experience" accent="sky">
      <ol className="space-y-6 border-l border-[var(--color-border)] pl-6 sm:pl-10">
        {experienceData.map((role) => (
          <li key={`${role.company} ${role.title}`} className="relative">
            <Dot hue="sky" />
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
                  <SkillTags skills={role.skills} />
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

        <li className="relative">
          <Dot hue="amber" />
          <Disclosure
            label={`Internships during the ${education.degree}`}
            heading={
              <>
                {education.degree}{' '}
                <span className="text-[var(--color-tag-amber)]">{education.school}</span>
              </>
            }
            meta={
              <>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                  {education.dateText} · {education.location} · {education.detail}
                </p>
                <Text className="mt-3">
                  {education.degree} in {education.field}. I spent every summer of the
                  degree on an internship.
                </Text>
              </>
            }
          >
            <ol className="space-y-6 border-t border-[var(--color-border)] pt-4">
              {education.internships.map((internship) => (
                <li key={`${internship.company} ${internship.title}`}>
                  <h4 className="font-medium">
                    {internship.title}{' '}
                    <span className="text-[var(--color-tag-amber)]">
                      {internship.company}
                    </span>
                  </h4>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                    {internship.dateText}
                  </p>
                  <Text muted className="mt-2">
                    {internship.summary}
                  </Text>
                  <SkillTags skills={internship.skills} />
                </li>
              ))}
            </ol>
          </Disclosure>
        </li>
      </ol>
    </Section>
  );
}
