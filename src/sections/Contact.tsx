import type { CSSProperties } from 'react';
import { cn } from '../design/cn';
import { Container, Icon } from '../design/components';
import { links, profile } from '../content/profile';
import type { ProfileLink } from '../content/profile';

/** A `mailto:` stays in the tab. Only a web link opens a new one. */
function isWebLink(href: string): boolean {
  return href.startsWith('http');
}

function ContactCard({ link }: { link: ProfileLink }) {
  const hue = `var(--color-tag-${link.hue})`;
  const external = isWebLink(link.href);

  return (
    <a
      href={link.href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer noopener' : undefined}
      style={{ '--hue': hue } as CSSProperties}
      className={cn(
        'group relative flex h-full items-center gap-4 overflow-hidden rounded-lg border p-5',
        'border-[var(--color-border)] bg-[var(--color-background)] no-underline',
        'transition-[transform,border-color,box-shadow] duration-[var(--duration-base)] ease-(--ease-out-soft)',
        'hover:-translate-y-1 hover:border-[var(--hue)]',
        'focus-visible:-translate-y-1 focus-visible:border-[var(--hue)]',
      )}
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 opacity-0 transition-opacity duration-[var(--duration-base)] group-hover:opacity-100 group-focus-visible:opacity-100"
        style={{
          background: `radial-gradient(20rem 12rem at 20% 0%, color-mix(in srgb, ${hue} 16%, transparent), transparent 70%)`,
        }}
      />

      <span
        aria-hidden="true"
        className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-transform duration-[var(--duration-base)] ease-(--ease-out-soft) group-hover:scale-110"
        style={{
          color: hue,
          backgroundColor: `color-mix(in srgb, ${hue} 15%, transparent)`,
          borderColor: `color-mix(in srgb, ${hue} 40%, transparent)`,
        }}
      >
        <Icon name={link.icon} />
      </span>

      <span className="relative min-w-0">
        <span className="block text-sm text-[var(--color-text-muted)]">{link.label}</span>
        <span className="mt-0.5 flex min-w-0 items-center gap-1 font-medium text-[var(--color-text)]">
          <span className="truncate">{link.handle}</span>
          <Icon
            name="arrowUpRight"
            className="h-4 w-4 shrink-0 -translate-x-1 opacity-0 transition-[opacity,transform] duration-[var(--duration-base)] group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
            style={{ color: hue }}
          />
        </span>
      </span>
    </a>
  );
}

export function Contact() {
  return (
    <footer
      id="contact"
      className="relative border-t border-[var(--color-border)] bg-[var(--color-surface)] py-24"
    >
      {/* A lit top edge separates the footer from the last section. */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent"
      />

      <Container>
        <span
          aria-hidden="true"
          className="mb-4 block h-1 w-12 rounded-full bg-[var(--color-accent)]"
        />
        <h2 className="max-w-md text-3xl font-semibold tracking-tight text-balance">
          {profile.footerTagline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <li key={link.label}>
              <ContactCard link={link} />
            </li>
          ))}
        </ul>

        <p className="mt-16 text-sm text-[var(--color-text-muted)]">
          Built with React, Vite, and Three.js. © {new Date().getFullYear()}{' '}
          {profile.name}.
        </p>
      </Container>
    </footer>
  );
}
