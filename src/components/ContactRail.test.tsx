import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ContactRail } from './ContactRail';
import { links } from '../content/profile';

describe('ContactRail', () => {
  it.each(links)('links to $label with an icon and a label', (link) => {
    render(<ContactRail />);

    const anchor = screen.getByRole('link', { name: link.label });
    expect(anchor).toHaveAttribute('href', link.href);
    expect(anchor.querySelector('svg')).toHaveAttribute('data-icon', link.icon);
  });

  it('opens a web link in a new tab and keeps a mailto in the tab', () => {
    render(<ContactRail />);

    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'target',
      '_blank',
    );
    expect(screen.getByRole('link', { name: 'Email' })).not.toHaveAttribute('target');
  });

  it('holds the theme toggle, because the nav scrolls away', () => {
    render(<ContactRail />);

    expect(screen.getByRole('button', { name: /Switch to/ })).toBeInTheDocument();
  });
});
