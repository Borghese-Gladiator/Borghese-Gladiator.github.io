import { Disclosure, ExternalLink, Section, Tag, Text } from '../design/components';
import { projectData } from '../content/projects';

export function Projects() {
  return (
    <Section id="projects" title="Projects" accent="amber">
      <div className="grid items-start gap-6 md:grid-cols-2">
        {projectData.map((project) => (
          <Disclosure
            key={project.name}
            heading={project.name}
            meta={
              <>
                <Text className="mt-2">{project.summary}</Text>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <li key={item}>
                      <Tag name={item} />
                    </li>
                  ))}
                </ul>
              </>
            }
          >
            <div className="border-t border-[var(--color-border)] pt-4">
              <Text muted>{project.detail}</Text>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                {project.href ? (
                  <ExternalLink href={project.href}>Open the project</ExternalLink>
                ) : null}
                {project.event ? (
                  <ExternalLink href={project.event.href}>
                    {project.event.name}
                  </ExternalLink>
                ) : null}
              </div>
            </div>
          </Disclosure>
        ))}
      </div>
    </Section>
  );
}
