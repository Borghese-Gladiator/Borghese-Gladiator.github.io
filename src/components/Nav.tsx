import { Container } from '../design/components';
import { cn } from '../design/cn';
import { sections } from '../content/sections';
import { profile } from '../content/profile';
import { useActiveSection } from '../hooks/useActiveSection';
import { ThemeToggle } from './ThemeToggle';

const IDS = sections.map((section) => section.id);

export function Nav() {
  const active = useActiveSection(IDS);

  return (
    <header className="sticky top-0 z-10 border-b border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-background)_85%,transparent)] backdrop-blur">
      <Container className="flex h-14 items-center justify-between gap-4">
        <a
          href="#home"
          className="text-sm font-semibold tracking-tight whitespace-nowrap"
        >
          {profile.name}
        </a>
        <nav aria-label="Sections" className="min-w-0 grow">
          <ul className="flex items-center gap-1 overflow-x-auto sm:justify-end sm:gap-2">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  aria-current={active === section.id ? 'true' : undefined}
                  className={cn(
                    'inline-block rounded-md px-2 py-1 text-sm whitespace-nowrap',
                    'transition-colors duration-[var(--duration-fast)]',
                    active === section.id
                      ? 'text-[var(--color-accent)]'
                      : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]',
                  )}
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle />
      </Container>
    </header>
  );
}
