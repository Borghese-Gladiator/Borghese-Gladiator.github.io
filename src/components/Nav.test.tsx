import { afterEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Nav } from './Nav';
import { sections } from '../content/sections';

const REAL_OBSERVER = window.IntersectionObserver;

/**
 * Drives `useScrolledPast` without a scroll. The setup file installs a noop
 * observer, which never reports anything, so each test states for itself
 * whether the hero still fills the viewport.
 */
function reportHero({ onScreen }: { onScreen: boolean }) {
  class StubObserver {
    callback: IntersectionObserverCallback;

    constructor(callback: IntersectionObserverCallback) {
      this.callback = callback;
    }

    observe(target: Element) {
      this.callback(
        [{ target, isIntersecting: onScreen } as IntersectionObserverEntry],
        this as unknown as IntersectionObserver,
      );
    }

    unobserve() {}
    disconnect() {}
  }

  window.IntersectionObserver = StubObserver as unknown as typeof IntersectionObserver;
}

/** The nav hides behind `#home`, so every test needs that element. */
function renderNav() {
  render(
    <>
      <div id="home" />
      <Nav />
    </>,
  );
  return screen.getByRole('banner');
}

afterEach(() => {
  window.IntersectionObserver = REAL_OBSERVER;
});

describe('Nav', () => {
  it('renders one link per section once the hero scrolls away', () => {
    reportHero({ onScreen: false });
    const header = renderNav();

    expect(header).not.toHaveAttribute('inert');

    const nav = screen.getByRole('navigation', { name: 'Sections' });
    expect(nav.querySelectorAll('a')).toHaveLength(sections.length);

    sections.forEach((section) => {
      expect(screen.getByRole('link', { name: section.label })).toHaveAttribute(
        'href',
        `#${section.id}`,
      );
    });
  });

  it('holds itself inert while the hero fills the viewport', () => {
    reportHero({ onScreen: true });

    expect(renderNav()).toHaveAttribute('inert');
  });
});
