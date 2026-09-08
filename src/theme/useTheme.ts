import { useSyncExternalStore } from 'react';
import type { ColorMode } from '../design/tokens';
import { resolveMode, subscribe } from './theme';

/** The mode to paint. Every scene reads this, never `matchMedia`. */
export function useColorMode(): ColorMode {
  return useSyncExternalStore(subscribe, resolveMode, () => 'light');
}
