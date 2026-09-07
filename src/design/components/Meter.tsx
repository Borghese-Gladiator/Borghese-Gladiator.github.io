import { cn } from '../cn';

export interface MeterProps {
  /** The filled amount, from 0 to `max`. */
  value: number;
  max?: number;
  /** Names the meter for a screen reader. */
  label: string;
  className?: string;
}

export function Meter({ value, max = 100, label, className }: MeterProps) {
  const percent = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div
      role="meter"
      aria-label={label}
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      className={cn(
        'h-2 w-full overflow-hidden rounded-full bg-[var(--color-border)]',
        className,
      )}
    >
      <div
        className="h-full rounded-full bg-[var(--color-accent)] transition-[width] duration-[var(--duration-slow)] ease-(--ease-out-soft)"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
