import { Card, Section, Tag, Text } from '../design/components';
import { aboutText, approachData } from '../content/about';

export function About() {
  return (
    <Section id="about" title="About" accent="violet">
      <div className="max-w-2xl space-y-4">
        {aboutText.map((paragraph) => (
          <Text key={paragraph} muted>
            {paragraph}
          </Text>
        ))}
      </div>

      <h3 className="mt-16 mb-6 text-xl font-medium tracking-tight">How I work</h3>
      <div className="grid gap-6 md:grid-cols-3">
        {approachData.map((approach) => (
          <Card key={approach.title} className="flex flex-col">
            <h4 className="text-lg font-medium">{approach.title}</h4>
            <Text muted className="mt-2 grow">
              {approach.summary}
            </Text>
            <p className="mt-4 text-sm font-medium">{approach.practice}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {approach.tools.map((tool) => (
                <li key={tool}>
                  <Tag name={tool} />
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}
