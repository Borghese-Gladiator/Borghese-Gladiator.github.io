import type { AnchorHTMLAttributes } from 'react';
import { cn } from '../cn';

/** An anchor that opens a new tab and sets the safe rel value once. */
export function ExternalLink({
  className,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      target="_blank"
      rel="noreferrer noopener"
      className={cn(
        'text-[var(--color-accent)] underline decoration-1 underline-offset-4',
        'transition-opacity duration-[var(--duration-fast)] hover:opacity-70',
        className,
      )}
      {...rest}
    />
  );
}
