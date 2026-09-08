import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { resolveMode, setMode, toggleMode } from './theme';

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
    setMode('light');
  });

  afterEach(() => vi.restoreAllMocks());

  it.each([
    { system: true, mode: 'dark' },
    { system: false, mode: 'light' },
  ])('takes the default from the system before a pick', async ({ system, mode }) => {
    localStorage.clear();
    systemPrefersDark(system);

    // The module reads the storage once, at import. Load it again.
    vi.resetModules();
    const fresh = await import('./theme');

    expect(fresh.resolveMode()).toBe(mode);
  });

  it.each(['light', 'dark'] as const)('holds the %s pick against the system', (mode) => {
    systemPrefersDark(mode === 'light');
    setMode(mode);

    expect(resolveMode()).toBe(mode);
    expect(localStorage.getItem('theme')).toBe(mode);
  });

  it('writes the mode to the root element', () => {
    setMode('dark');
    expect(document.documentElement.dataset.theme).toBe('dark');
  });

  it('turns dark into light and back', () => {
    setMode('dark');

    toggleMode();
    expect(resolveMode()).toBe('light');

    toggleMode();
    expect(resolveMode()).toBe('dark');
  });

  it('keeps the mode when storage throws, which is a private window', () => {
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
      throw new Error('denied');
    });

    expect(() => setMode('dark')).not.toThrow();
    expect(resolveMode()).toBe('dark');
    expect(document.documentElement.dataset.theme).toBe('dark');
  });
});
