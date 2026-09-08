import { cn } from '../design/cn';
import { toggleMode } from '../theme/theme';
import { useColorMode } from '../theme/useTheme';

/** A crescent, then a sun. The icon shows the mode that a click gives. */
const MOON = 'M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z';
const SUN =
  'M12 5v-2 M12 21v-2 M5 12H3 M21 12h-2 M6.3 6.3 4.9 4.9 M19.1 19.1l-1.4-1.4 M6.3 17.7l-1.4 1.4 M19.1 4.9l-1.4 1.4';

/**
 * Switches between light and dark.
 *
 * The system decides which one the visitor starts on. It is the default, not
 * a third state, so the control carries no "system" position.
 */
export function ThemeToggle() {
  const mode = useColorMode();
  const next = mode === 'dark' ? 'light' : 'dark';

  return (
    <button
      type="button"
      onClick={toggleMode}
      title={`Switch to ${next} mode`}
      aria-label={`Switch to ${next} mode`}
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
        {next === 'light' ? <circle cx="12" cy="12" r="4" /> : null}
        <path d={next === 'dark' ? MOON : SUN} />
      </svg>
    </button>
  );
}
