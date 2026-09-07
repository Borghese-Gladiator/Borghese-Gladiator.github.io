import '@testing-library/jest-dom/vitest';

// jsdom has no matchMedia. The hooks in src/three/hooks need it.
if (!window.matchMedia) {
  window.matchMedia = (query: string) =>
    ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
    }) as MediaQueryList;
}

// jsdom has no IntersectionObserver. useActiveSection needs it.
class NoopIntersectionObserver {
  root = null;
  rootMargin = '';
  scrollMargin = '';
  thresholds: ReadonlyArray<number> = [];
  disconnect() {}
  observe() {}
  unobserve() {}
  takeRecords(): IntersectionObserverEntry[] {
    return [];
  }
}

window.IntersectionObserver ??=
  NoopIntersectionObserver as unknown as typeof IntersectionObserver;
