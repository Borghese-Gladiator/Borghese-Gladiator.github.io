import { useId, useState, type ReactNode } from 'react';
import { cn } from '../cn';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export interface DisclosureProps {
  /** The card title. It becomes the control that opens the card. */
  heading: ReactNode;
  /** Stays visible next to the heading. Put a link here, not in the heading. */
  meta?: ReactNode;
  /** Hidden until the visitor opens the card. */
  children: ReactNode;
  /** Names the control when the heading text repeats across cards. */
  label?: string;
  className?: string;
}

/**
 * A card that holds its detail back.
 *
 * A fine pointer opens it on hover. A click pins it, so it stays open when the
 * pointer leaves. A coarse pointer, which means a phone, only pins.
 *
 * The region takes `inert` while it is closed, so the Tab key and a screen
 * reader skip text that the visitor cannot see.
 */
export function Disclosure({
  heading,
  meta,
  children,
  label,
  className,
}: DisclosureProps) {
  const regionId = useId();
  const canHover = useMediaQuery('(hover: hover) and (pointer: fine)');
  const [pinned, setPinned] = useState(false);
  const [hovered, setHovered] = useState(false);
  // The count keys the ring, so React remounts it and the animation replays.
  const [pressCount, setPressCount] = useState(0);
  const open = pinned || (canHover && hovered);

  const onPress = () => {
    setPinned((was) => !was);
    setPressCount((count) => count + 1);
  };

  return (
    <div
      className={cn(
        'rounded-lg border bg-[var(--color-surface)]',
        'transition-colors duration-[var(--duration-base)]',
        open ? 'border-[var(--color-accent)]' : 'border-[var(--color-border)]',
        className,
      )}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
    >
      <div className="p-6">
        <h3 className="text-lg font-medium tracking-tight">
          <button
            type="button"
            aria-expanded={open}
            aria-controls={regionId}
            aria-label={label}
            onClick={onPress}
            className={cn(
              'group flex w-full cursor-pointer items-center justify-between gap-4 rounded-md text-left',
              'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]',
            )}
          >
            <span>{heading}</span>
            <span
              aria-hidden="true"
              className={cn(
                'relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2',
                'transition-[color,border-color,background-color,transform] duration-[var(--duration-base)]',
                'group-active:scale-90',
                'group-focus-visible:border-[var(--color-accent)]',
                pinned
                  ? 'border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-accent-contrast)]'
                  : open
                    ? 'border-[var(--color-accent)] bg-[color-mix(in_srgb,var(--color-accent)_15%,transparent)] text-[var(--color-accent)]'
                    : 'border-[var(--color-border)] text-[var(--color-text-muted)] group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)]',
              )}
            >
              {pressCount > 0 ? (
                <span
                  key={pressCount}
                  className="press-ring absolute inset-0 rounded-full border-2 border-[var(--color-accent)]"
                />
              ) : null}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={cn(
                  'h-5 w-5 transition-transform duration-[var(--duration-base)] ease-(--ease-out-soft)',
                  open && 'rotate-180',
                )}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </span>
          </button>
        </h3>
        {meta}
      </div>

      <div
        id={regionId}
        inert={!open}
        className="grid transition-[grid-template-rows] duration-[var(--duration-slow)] ease-(--ease-out-soft)"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
