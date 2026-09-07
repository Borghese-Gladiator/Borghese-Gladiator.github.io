import { Badge, Meter, Section, Text } from '../design/components';
import { skillsData } from '../content/skills';
import { languageData } from '../content/languages';

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-10 md:grid-cols-3">
        {skillsData.map((group) => (
          <div key={group.name}>
            <div className="flex items-baseline justify-between">
              <h3 className="text-lg font-medium">{group.name}</h3>
              <span className="text-sm text-[var(--color-text-muted)]">
                {group.score} / 10
              </span>
            </div>
            <Meter
              className="mt-3"
              value={group.score}
              max={10}
              label={`${group.name} proficiency`}
            />
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.tools.map((tool) => (
                <li key={tool}>
                  <Badge>{tool}</Badge>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h3 className="mt-16 mb-6 text-xl font-medium tracking-tight">Spoken languages</h3>
      <ul className="max-w-xl space-y-6">
        {languageData.map((language) => (
          <li key={language.name}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="font-medium">{language.name}</p>
              <Text muted className="text-sm">
                {language.proficiency}
              </Text>
            </div>
            <Meter
              className="mt-2"
              value={language.level}
              label={`${language.name} level`}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
