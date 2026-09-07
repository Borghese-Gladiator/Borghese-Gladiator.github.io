import { Container, ExternalLink } from '../design/components';
import { links, profile } from '../content/profile';

export function Contact() {
  return (
    <footer
      id="contact"
      className="border-t border-[var(--color-border)] bg-[var(--color-surface)] py-24"
    >
      <Container>
        <h2 className="max-w-md text-3xl font-semibold tracking-tight">
          {profile.footerTagline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h2>

        <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          {links.map((link) => (
            <li key={link.label}>
              <p className="text-sm text-[var(--color-text-muted)]">{link.label}</p>
              <ExternalLink href={link.href}>{link.handle}</ExternalLink>
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
