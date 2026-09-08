import { scene } from '../../design/tokens';
import { useColorMode } from '../../theme/useTheme';

/**
 * Returns the scene palette for the active color mode.
 *
 * The mode comes from the theme store, not from `matchMedia`, so a scene
 * follows an explicit choice in the nav as well as the system setting.
 * Never hard code a hex value inside a scene. Read it from here.
 */
export function useSceneColors() {
  return scene[useColorMode()];
}
