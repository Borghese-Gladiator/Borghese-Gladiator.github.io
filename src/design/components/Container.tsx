import type { HTMLAttributes } from 'react';
import { cn } from '../cn';

export function Container({
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('mx-auto w-full max-w-5xl px-6', className)} {...rest} />
  );
}
