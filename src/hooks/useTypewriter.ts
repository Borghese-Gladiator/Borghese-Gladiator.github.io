import { useEffect, useState } from 'react';
import { useReducedMotion } from '../three/hooks/useReducedMotion';

const TYPE_MS = 70;
const ERASE_MS = 35;
const HOLD_MS = 1600;

interface Step {
  word: number;
  chars: number;
  erasing: boolean;
}

/**
 * Cycles a list of strings and types each one out.
 *
 * Returns the first string in full when the visitor asks for reduced motion.
 * Pass a stable array. A new array on every render restarts the animation.
 */
export function useTypewriter(words: readonly string[]): string {
  const reducedMotion = useReducedMotion();
  const [step, setStep] = useState<Step>(() => ({
    word: 0,
    chars: words[0]?.length ?? 0,
    erasing: false,
  }));

  useEffect(() => {
    if (reducedMotion || words.length === 0) return;

    const word = words[step.word] ?? '';
    let next: Step;
    let delay: number;

    if (!step.erasing && step.chars >= word.length) {
      next = { ...step, erasing: true };
      delay = HOLD_MS;
    } else if (step.erasing && step.chars === 0) {
      next = { word: (step.word + 1) % words.length, chars: 1, erasing: false };
      delay = TYPE_MS;
    } else {
      next = { ...step, chars: step.chars + (step.erasing ? -1 : 1) };
      delay = step.erasing ? ERASE_MS : TYPE_MS;
    }

    const timer = window.setTimeout(() => setStep(next), delay);
    return () => window.clearTimeout(timer);
  }, [reducedMotion, step, words]);

  if (reducedMotion) return words[0] ?? '';
  return (words[step.word] ?? '').slice(0, step.chars);
}
