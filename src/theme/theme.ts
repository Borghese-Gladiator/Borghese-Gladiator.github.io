import type { ColorMode } from '../design/tokens';

const STORAGE_KEY = 'theme';
const DARK_QUERY = '(prefers-color-scheme: dark)';

/**
 * The color mode store.
 *
 * There are 2 modes, light and dark. The system does not add a third. It
 * decides the default, and it keeps deciding until the visitor picks a mode.
 *
 * The store sits outside React because `useSceneColors` runs inside the
 * `<Canvas>` tree, which is a separate reconciler. A module store returns the
 * same value to every tree. A context above the canvas does not.
 */
let picked: ColorMode | null = readPicked();
const listeners = new Set<() => void>();

/** Null means the visitor has not picked. A private window throws, so it reads null. */
function readPicked(): ColorMode | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'light' || stored === 'dark' ? stored : null;
  } catch {
    return null;
  }
}

function systemMode(): ColorMode {
  return window.matchMedia(DARK_QUERY).matches ? 'dark' : 'light';
}

/** The mode to paint. The system sets it until the visitor picks. */
export function resolveMode(): ColorMode {
  return picked ?? systemMode();
}

/** The CSS keys off this attribute, so every change has to write it. */
export function applyMode(): void {
  document.documentElement.dataset.theme = resolveMode();
}

export function setMode(next: ColorMode): void {
  picked = next;
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // The mode still holds for this page. It just does not persist.
  }
  applyMode();
  listeners.forEach((listener) => listener());
}

export function toggleMode(): void {
  setMode(resolveMode() === 'dark' ? 'light' : 'dark');
}

export function subscribe(listener: () => void): () => void {
  listeners.add(listener);

  // Follow the system until the visitor picks a mode.
  const list = window.matchMedia(DARK_QUERY);
  const onSystemChange = () => {
    if (picked !== null) return;
    applyMode();
    listener();
  };
  list.addEventListener('change', onSystemChange);

  return () => {
    listeners.delete(listener);
    list.removeEventListener('change', onSystemChange);
  };
}
