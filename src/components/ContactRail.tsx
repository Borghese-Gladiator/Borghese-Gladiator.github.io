import { cn } from '../design/cn';
import { Icon } from '../design/components';
import { isWebLink } from '../design/isWebLink';
import { links } from '../content/profile';
import { ThemeToggle } from './ThemeToggle';

/**
 * A fixed column of contact icons in the left gutter.
 *
 * The rail holds the theme toggle, because the nav scrolls away and takes its
 * own controls with it.
 *
 * The gutter only exists on a wide screen, so the rail hides below 1024 px.
 * `MobileMenu` carries the same links there. Every link also appears in the
 * `Contact` footer, so no route to an address depends on this column.
 */
export function ContactRail() {
  return (
    <div className="fixed bottom-0 left-8 z-10 hidden flex-col items-center gap-5 lg:flex">
      <nav aria-label="Contact links">
        <ul className="flex flex-col items-center gap-4">
          {links.map((link) => {
            const external = isWebLink(link.href);

            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noreferrer noopener' : undefined}
                  title={link.label}
                  aria-label={link.label}
                  className={cn(
                    'flex h-9 w-9 items-center justify-center rounded-md',
                    'text-[var(--color-text-muted)]',
                    'transition-[color,transform] duration-[var(--duration-base)] ease-(--ease-out-soft)',
                    'hover:-translate-y-1 hover:text-[var(--color-accent)]',
                    'focus-visible:-translate-y-1 focus-visible:text-[var(--color-accent)]',
                  )}
                >
                  <Icon name={link.icon} />
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <span aria-hidden="true" className="h-px w-6 bg-[var(--color-border)]" />

      <ThemeToggle />

      <span aria-hidden="true" className="h-24 w-px bg-[var(--color-border)]" />
    </div>
  );
}
