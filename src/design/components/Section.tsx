import type { HTMLAttributes } from 'react';
import { cn } from '../cn';
import { Container } from './Container';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  title?: string;
}

export function Section({ title, className, children, ...rest }: SectionProps) {
  return (
    <section className={cn('py-24', className)} {...rest}>
      <Container>
        {title ? (
          <h2 className="mb-8 text-3xl font-semibold tracking-tight">{title}</h2>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
