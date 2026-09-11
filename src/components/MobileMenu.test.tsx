import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MobileMenu } from './MobileMenu';
import { links } from '../content/profile';
import { sections } from '../content/sections';

function trigger() {
  return screen.getByRole('button', { name: 'Menu' });
}

describe('MobileMenu', () => {
  it('holds every link closed until a click opens the panel', async () => {
    render(<MobileMenu />);

    expect(trigger()).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByRole('link')).not.toBeInTheDocument();

    await userEvent.click(trigger());

    expect(trigger()).toHaveAttribute('aria-expanded', 'true');

    sections.forEach((section) => {
      expect(screen.getByRole('link', { name: section.label })).toHaveAttribute(
        'href',
        `#${section.id}`,
      );
    });
    links.forEach((link) => {
      expect(screen.getByRole('link', { name: link.label })).toHaveAttribute(
        'href',
        link.href,
      );
    });
    expect(screen.getByRole('button', { name: /Switch to/ })).toBeInTheDocument();
  });

  it('moves the focus into the panel on open', async () => {
    render(<MobileMenu />);
    await userEvent.click(trigger());

    expect(screen.getByRole('link', { name: sections[0].label })).toHaveFocus();
  });

  it.each([
    ['a press of Escape', async () => userEvent.keyboard('{Escape}')],
    [
      'a click on a section link',
      async () => userEvent.click(screen.getByRole('link', { name: sections[0].label })),
    ],
    [
      'a click outside the panel',
      async () => userEvent.click(screen.getByRole('button', { name: 'Close the menu' })),
    ],
  ])('closes on %s and returns the focus', async (_name, act) => {
    render(<MobileMenu />);
    await userEvent.click(trigger());

    await act();

    expect(screen.queryByRole('link')).not.toBeInTheDocument();
    expect(trigger()).toHaveFocus();
  });
});
