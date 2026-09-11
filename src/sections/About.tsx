import { Section, Text } from '../design/components';
import { aboutText } from '../content/about';

export function About() {
  return (
    <Section id="about" title="About" accent="violet">
      <div className="max-w-2xl space-y-5">
        {aboutText.map((paragraph) => (
          <Text key={paragraph} muted>
            {paragraph}
          </Text>
        ))}
      </div>
    </Section>
  );
}
