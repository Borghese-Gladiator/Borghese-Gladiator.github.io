import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { getChoice, resolveMode, setChoice } from './theme';

function systemPrefersDark(dark: boolean) {
  vi.spyOn(window, 'matchMedia').mockImplementation(
    (query: string) =>
      ({
        matches: dark && query.includes('dark'),
        media: query,
        onchange: null,
        addEventListener: () => {},
        removeEventListener: () => {},
        addListener: () => {},
        removeListener: () => {},
        dispatchEvent: () => false,
      }) as MediaQueryList,
  );
}

describe('the theme store', () => {
  beforeEach(() => {
    localStorage.clear();
    setChoice('system');
  });

  afterEach(() => vi.restoreAllMocks());

  it.each([
    { system: true, mode: 'dark' },
    { system: false, mode: 'light' },
  ])('follows the system while the choice is System', ({ system, mode }) => {
    systemPrefersDark(system);
    setChoice('system');
    expect(resolveMode()).toBe(mode);
  });

  it.each(['light', 'dark'] as const)(
    'ignores the system for the %s choice',
    (choice) => {
      systemPrefersDark(choice === 'light');
      setChoice(choice);

      expect(getChoice()).toBe(choice);
      expect(resolveMode()).toBe(choice);
    },
  );

  it('writes the mode to the root element and stores the choice', () => {
    setChoice('dark');

    expect(document.documentElement.dataset.theme).toBe('dark');
    expect(localStorage.getItem('theme')).toBe('dark');
  });

  it('drops the stored value for the System choice', () => {
    setChoice('dark');
    setChoice('system');

    expect(localStorage.getItem('theme')).toBeNull();
  });

  it('keeps the choice when storage throws, which is a private window', () => {
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('denied');
    });

    expect(() => setChoice('dark')).not.toThrow();
    expect(getChoice()).toBe('dark');
    expect(document.documentElement.dataset.theme).toBe('dark');
  });
});
