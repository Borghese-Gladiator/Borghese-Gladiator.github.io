import type { ColorMode } from '../design/tokens';

export type ThemeChoice = 'system' | 'light' | 'dark';

const STORAGE_KEY = 'theme';
const DARK_QUERY = '(prefers-color-scheme: dark)';

/**
 * The color mode store.
 *
 * It sits outside React because `useSceneColors` runs inside the `<Canvas>`
 * tree, which is a separate reconciler. A module store returns the same value
 * to every tree. A context above the canvas does not.
 */
let choice: ThemeChoice = readChoice();
const listeners = new Set<() => void>();

/** A private window throws on every storage call. Treat that as System. */
function readChoice(): ThemeChoice {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'light' || stored === 'dark' ? stored : 'system';
  } catch {
    return 'system';
  }
}

function writeChoice(next: ThemeChoice): void {
  try {
    if (next === 'system') localStorage.removeItem(STORAGE_KEY);
    else localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // The choice still holds for this page. It just does not persist.
  }
}

export function getChoice(): ThemeChoice {
  return choice;
}

/**
 * Returns the mode to paint. It reads the system setting only while the
 * choice is System.
 */
export function resolveMode(): ColorMode {
  if (choice !== 'system') return choice;
  return window.matchMedia(DARK_QUERY).matches ? 'dark' : 'light';
}

/** The CSS keys off this attribute, so every change has to write it. */
export function applyMode(): void {
  document.documentElement.dataset.theme = resolveMode();
}

export function setChoice(next: ThemeChoice): void {
  choice = next;
  writeChoice(next);
  applyMode();
  listeners.forEach((listener) => listener());
}

export const NEXT_CHOICE: Record<ThemeChoice, ThemeChoice> = {
  system: 'light',
  light: 'dark',
  dark: 'system',
};

export function subscribe(listener: () => void): () => void {
  listeners.add(listener);

  // A System choice has to follow a later change to the system setting.
  const list = window.matchMedia(DARK_QUERY);
  const onSystemChange = () => {
    if (choice !== 'system') return;
    applyMode();
    listener();
  };
  list.addEventListener('change', onSystemChange);

  return () => {
    listeners.delete(listener);
    list.removeEventListener('change', onSystemChange);
  };
}
