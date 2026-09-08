import { cn } from '../design/cn';
import { NEXT_CHOICE, setChoice, type ThemeChoice } from '../theme/theme';
import { useThemeChoice } from '../theme/useTheme';

const LABEL: Record<ThemeChoice, string> = {
  system: 'system',
  light: 'light',
  dark: 'dark',
};

const PATHS: Record<ThemeChoice, string> = {
  // A monitor, for the system setting.
  system: 'M3 5h18v10H3z M8 19h8 M12 15v4',
  // A sun.
  light:
    'M12 5v-2 M12 21v-2 M5 12H3 M21 12h-2 M6.3 6.3 4.9 4.9 M19.1 19.1l-1.4-1.4 M6.3 17.7l-1.4 1.4 M19.1 4.9l-1.4 1.4',
  // A crescent.
  dark: 'M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z',
};

/**
 * Cycles System, Light, Dark.
 *
 * 3 states and not 2, because "follow the system" is the behavior that the
 * site had before the control existed.
 */
export function ThemeToggle() {
  const choice = useThemeChoice();
  const next = NEXT_CHOICE[choice];

  return (
    <button
      type="button"
      onClick={() => setChoice(next)}
      title={`Theme: ${LABEL[choice]}`}
      aria-label={`Theme: ${LABEL[choice]}. Change to ${LABEL[next]}.`}
      className={cn(
        'flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border-2',
        'border-[var(--color-border)] text-[var(--color-text-muted)]',
        'transition-[color,border-color] duration-[var(--duration-base)]',
        'hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]',
        'focus-visible:border-[var(--color-accent)]',
      )}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-[1.15rem] w-[1.15rem]"
      >
        {choice === 'light' ? <circle cx="12" cy="12" r="4" /> : null}
        <path d={PATHS[choice]} />
      </svg>
    </button>
  );
}
