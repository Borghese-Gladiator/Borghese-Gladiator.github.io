import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { Icon } from './Icon';
import type { IconName } from './Icon';

describe('Icon', () => {
  it.each<IconName>(['mail', 'github', 'linkedin', 'arrowUpRight', 'menu', 'close'])(
    'draws the %s shape',
    (name) => {
      const { container } = render(<Icon name={name} />);
      const svg = container.querySelector('svg')!;

      expect(svg).toHaveAttribute('data-icon', name);
      expect(svg.querySelectorAll('path, rect, circle').length).toBeGreaterThan(0);
    },
  );

  it('stays out of the accessibility tree', () => {
    const { container } = render(<Icon name="mail" />);
    const svg = container.querySelector('svg')!;

    expect(svg).toHaveAttribute('aria-hidden', 'true');
    expect(svg).toHaveAttribute('focusable', 'false');
  });

  it('keeps the size class that a caller passes', () => {
    const { container } = render(<Icon name="mail" className="h-8 w-8" />);

    expect(container.querySelector('svg')).toHaveClass('h-8', 'w-8');
  });
});
