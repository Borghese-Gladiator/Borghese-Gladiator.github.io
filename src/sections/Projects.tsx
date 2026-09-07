import { Badge, Card, ExternalLink, Section, Text } from '../design/components';
import { projectData } from '../content/projects';

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-6 md:grid-cols-2">
        {projectData.map((project) => (
          <Card key={project.name} className="flex flex-col">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-medium">{project.name}</h3>
              {project.event ? (
                <ExternalLink href={project.event.href} className="text-sm">
                  {project.event.name}
                </ExternalLink>
              ) : null}
            </div>
            <Text className="mt-2">{project.summary}</Text>
            <Text muted className="mt-3 grow">
              {project.detail}
            </Text>

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <li key={item}>
                  <Badge>{item}</Badge>
                </li>
              ))}
            </ul>

            {project.href ? (
              <ExternalLink href={project.href} className="mt-4 text-sm">
                Open the project
              </ExternalLink>
            ) : null}
          </Card>
        ))}
      </div>
    </Section>
  );
}
