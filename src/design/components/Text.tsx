import type { HTMLAttributes } from 'react';
import { cn } from '../cn';

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  muted?: boolean;
}

export function Text({ muted = false, className, ...rest }: TextProps) {
  return (
    <p
      className={cn(
        'text-base leading-relaxed',
        muted && 'text-[var(--color-text-muted)]',
        className,
      )}
      {...rest}
    />
  );
}
