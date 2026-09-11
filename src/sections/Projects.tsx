import { Disclosure, ExternalLink, Icon, Section, Tag, Text } from '../design/components';
import { projectData } from '../content/projects';

/**
 * The source link for one card.
 *
 * It sits at the end of the tag row, not the top corner, because the
 * disclosure chevron already owns the top right of the card.
 */
function RepoLink({ href, name }: { href: string; name: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={`${name} on GitHub`}
      className="shrink-0 rounded-md p-1 text-[var(--color-text-muted)] transition-colors duration-[var(--duration-fast)] hover:text-[var(--color-accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
    >
      <Icon name="github" />
    </a>
  );
}

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
                <div className="mt-4 flex items-end justify-between gap-4">
                  <ul className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <li key={item}>
                        <Tag name={item} />
                      </li>
                    ))}
                  </ul>
                  <RepoLink href={project.repo} name={project.name} />
                </div>
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
