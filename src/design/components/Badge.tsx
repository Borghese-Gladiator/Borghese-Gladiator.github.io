import type { HTMLAttributes } from 'react';
import { cn } from '../cn';

export function Badge({ className, ...rest }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-[var(--color-border)]',
        'px-3 py-1 text-sm text-[var(--color-text-muted)]',
        className,
      )}
      {...rest}
    />
  );
}
