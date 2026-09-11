import { Container } from '../design/components';
import { cn } from '../design/cn';
import { sections } from '../content/sections';
import { profile } from '../content/profile';
import { useActiveSection } from '../hooks/useActiveSection';

const IDS = sections.map((section) => section.id);

/**
 * The nav sits at the top of the page and scrolls away with it.
 *
 * Nothing scrolls under it, so it needs no scrim and no bottom edge. The
 * controls that must stay reachable live in `ContactRail` and in
 * `MobileMenu`, which are both fixed.
 */
export function Nav() {
  const active = useActiveSection(IDS);

  return (
    <header className="relative z-10">
      <Container className="flex h-16 items-center justify-between gap-4">
        <a
          href="#home"
          className="text-sm font-semibold tracking-tight whitespace-nowrap"
        >
          {profile.name}
        </a>
        <nav aria-label="Sections" className="hidden lg:block">
          <ul className="flex items-center gap-2">
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
      </Container>
    </header>
  );
}
