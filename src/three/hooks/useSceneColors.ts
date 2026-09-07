import { scene, type ColorMode } from '../../design/tokens';
import { useMediaQuery } from './useMediaQuery';

export function useColorMode(): ColorMode {
  return useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light';
}

/**
 * Returns the scene palette for the active color mode.
 * Never hard code a hex value inside a scene. Read it from here.
 */
export function useSceneColors() {
  return scene[useColorMode()];
}
