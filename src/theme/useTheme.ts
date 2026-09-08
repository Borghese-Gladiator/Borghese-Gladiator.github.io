import { useSyncExternalStore } from 'react';
import type { ColorMode } from '../design/tokens';
import { getChoice, resolveMode, subscribe, type ThemeChoice } from './theme';

/** The state that the control shows: System, Light, or Dark. */
export function useThemeChoice(): ThemeChoice {
  return useSyncExternalStore(subscribe, getChoice, () => 'system');
}

/** The mode to paint. Every scene reads this, never `matchMedia`. */
export function useColorMode(): ColorMode {
  return useSyncExternalStore(subscribe, resolveMode, () => 'light');
}
