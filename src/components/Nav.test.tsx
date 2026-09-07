import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Nav } from './Nav';
import { sections } from '../content/sections';

describe('Nav', () => {
  it('renders one link per section', () => {
    render(<Nav />);

    const nav = screen.getByRole('navigation', { name: 'Sections' });
    expect(nav.querySelectorAll('a')).toHaveLength(sections.length);

    sections.forEach((section) => {
      expect(screen.getByRole('link', { name: section.label })).toHaveAttribute(
        'href',
        `#${section.id}`,
      );
    });
  });
});
