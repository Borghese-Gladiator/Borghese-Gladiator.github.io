import { cn } from '../cn';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

const VARIANT: Record<Variant, string> = {
  primary:
    'bg-[var(--color-accent)] text-[var(--color-accent-contrast)] hover:opacity-90',
  secondary:
    'border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] hover:border-[var(--color-accent)]',
  ghost: 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]',
};

const SIZE: Record<Size, string> = {
  sm: 'h-8 px-3 text-sm',
  md: 'h-10 px-4 text-base',
  lg: 'h-12 px-6 text-lg',
};

export interface ButtonStyleProps {
  variant?: Variant;
  size?: Size;
  className?: string;
}

/**
 * The button styles as a class string.
 *
 * Use this for an anchor that must look like a button. An anchor navigates
 * and a button acts, so the element stays correct for the keyboard.
 */
export function buttonClass({
  variant = 'primary',
  size = 'md',
  className,
}: ButtonStyleProps = {}): string {
  return cn(
    'inline-flex items-center justify-center rounded-md font-medium no-underline',
    'transition-[opacity,border-color,color] duration-[var(--duration-base)] ease-(--ease-out-soft)',
    'disabled:pointer-events-none disabled:opacity-50',
    VARIANT[variant],
    SIZE[size],
    className,
  );
}
