import type { HTMLAttributes } from 'react';
import { cn } from '../cn';
import { Container } from './Container';
import type { TagHue } from '../tokens';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  /** Draws a short colored rule above the title. */
  accent?: TagHue;
}

export function Section({ title, accent, className, children, ...rest }: SectionProps) {
  return (
    <section className={cn('py-24', className)} {...rest}>
      <Container>
        {title ? (
          <div className="mb-8">
            {accent ? (
              <span
                aria-hidden="true"
                className="mb-4 block h-1 w-12 rounded-full"
                style={{ backgroundColor: `var(--color-tag-${accent})` }}
              />
            ) : null}
            <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
          </div>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
