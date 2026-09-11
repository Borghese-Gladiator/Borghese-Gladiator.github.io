import { useEffect, useRef, useState } from 'react';
import { cn } from '../design/cn';
import { Icon } from '../design/components';
import { isWebLink } from '../design/isWebLink';
import { links } from '../content/profile';
import { sections } from '../content/sections';
import { useActiveSection } from '../hooks/useActiveSection';
import { ThemeToggle } from './ThemeToggle';

const IDS = sections.map((section) => section.id);

const PANEL_ID = 'mobile-menu-panel';

const ROW =
  'flex items-center gap-3 rounded-md px-3 py-2 text-sm no-underline transition-colors duration-[var(--duration-fast)]';

/**
 * The narrow screen replacement for the nav and for `ContactRail`.
 *
 * A fixed round button opens a panel that holds the section links, the
 * contact links, and the theme toggle. The nav scrolls away and the rail
 * needs a gutter, so without this panel a phone loses every control after
 * the first scroll.
 *
 * The panel unmounts when it closes, so it leaves no hidden Tab stop behind.
 */
export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(IDS);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  function close() {
    setOpen(false);
    buttonRef.current?.focus();
  }

  useEffect(() => {
    if (!open) return;

    firstLinkRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== 'Escape') return;
      setOpen(false);
      buttonRef.current?.focus();
    }

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <div className="lg:hidden">
      {open ? (
        <>
          <button
            type="button"
            aria-label="Close the menu"
            onClick={close}
            className="fixed inset-0 z-20 cursor-default bg-[color-mix(in_srgb,var(--color-ink-950)_35%,transparent)]"
          />

          <div
            id={PANEL_ID}
            className={cn(
              'fixed bottom-24 left-5 z-30 w-60 rounded-lg border p-2',
              'max-h-[70vh] overflow-y-auto',
              'border-[var(--color-border)] bg-[var(--color-surface)] shadow-lg',
            )}
          >
            <nav aria-label="Sections">
              <ul>
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <a
                      ref={index === 0 ? firstLinkRef : undefined}
                      href={`#${section.id}`}
                      aria-current={active === section.id ? 'true' : undefined}
                      onClick={close}
                      className={cn(
                        ROW,
                        active === section.id
                          ? 'text-[var(--color-accent)]'
                          : 'text-[var(--color-text)]',
                      )}
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <span
              aria-hidden="true"
              className="my-2 block h-px bg-[var(--color-border)]"
            />

            <nav aria-label="Contact links">
              <ul>
                {links.map((link) => {
                  const external = isWebLink(link.href);

                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={external ? '_blank' : undefined}
                        rel={external ? 'noreferrer noopener' : undefined}
                        onClick={close}
                        className={cn(ROW, 'text-[var(--color-text)]')}
                      >
                        <Icon
                          name={link.icon}
                          className="h-4 w-4 text-[var(--color-text-muted)]"
                        />
                        {link.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <span
              aria-hidden="true"
              className="my-2 block h-px bg-[var(--color-border)]"
            />

            <div className="flex items-center justify-between px-3 py-1">
              <span className="text-sm text-[var(--color-text-muted)]">Theme</span>
              <ThemeToggle />
            </div>
          </div>
        </>
      ) : null}

      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={PANEL_ID}
        aria-label="Menu"
        onClick={() => setOpen(!open)}
        className={cn(
          'fixed bottom-5 left-5 z-30 flex h-12 w-12 cursor-pointer items-center justify-center',
          'rounded-full border-2 border-[var(--color-accent)]',
          'bg-[var(--color-surface)] text-[var(--color-accent)] shadow-lg',
          'transition-transform duration-[var(--duration-base)] ease-(--ease-out-soft)',
          'hover:scale-105',
        )}
      >
        <Icon name={open ? 'close' : 'menu'} />
      </button>
    </div>
  );
}
