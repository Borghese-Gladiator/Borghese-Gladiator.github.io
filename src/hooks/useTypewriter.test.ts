import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { act, renderHook } from '@testing-library/react';
import { useTypewriter } from './useTypewriter';

const WORDS = ['One.', 'Two.'] as const;
const HOLD_MS = 1600;
const ERASE_MS = 35;
const TYPE_MS = 70;

/** One call advances one step. React flushes the next timer when act returns. */
const tick = (ms: number) => act(() => void vi.advanceTimersByTime(ms));

describe('useTypewriter', () => {
  beforeEach(() => vi.useFakeTimers());
  afterEach(() => vi.useRealTimers());

  it('starts with the first word in full', () => {
    const { result } = renderHook(() => useTypewriter(WORDS));
    expect(result.current).toBe('One.');
  });

  it('erases the first word, then types the second one', () => {
    const { result } = renderHook(() => useTypewriter(WORDS));

    tick(HOLD_MS);
    expect(result.current).toBe('One.');

    for (let step = 0; step < WORDS[0].length; step += 1) tick(ERASE_MS);
    expect(result.current).toBe('');

    tick(TYPE_MS);
    tick(TYPE_MS);
    expect(result.current).toBe('Tw');
  });
});
