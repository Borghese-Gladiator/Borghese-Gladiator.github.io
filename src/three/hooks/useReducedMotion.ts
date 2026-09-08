import { useMediaQuery } from '../../hooks/useMediaQuery';

/**
 * Every animated scene must read this hook and stop when it returns true.
 */
export function useReducedMotion(): boolean {
  return useMediaQuery('(prefers-reduced-motion: reduce)');
}
