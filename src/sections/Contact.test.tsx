import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Contact } from './Contact';
import { links } from '../content/profile';

describe('Contact', () => {
  it('renders one card per link, and the whole card is the target', () => {
    render(<Contact />);

    expect(screen.getAllByRole('link')).toHaveLength(links.length);
    links.forEach((link) => {
      expect(
        screen.getByRole('link', { name: new RegExp(link.handle, 'i') }),
      ).toHaveAttribute('href', link.href);
    });
  });

  it.each(links.filter((link) => link.href.startsWith('http')))(
    'opens $label in a new tab with a safe rel',
    (link) => {
      render(<Contact />);
      const anchor = screen.getByRole('link', { name: new RegExp(link.handle, 'i') });

      expect(anchor).toHaveAttribute('target', '_blank');
      expect(anchor).toHaveAttribute('rel', 'noreferrer noopener');
    },
  );

  it('keeps the mail link in the same tab', () => {
    render(<Contact />);
    const mail = links.find((link) => link.href.startsWith('mailto:'))!;
    const anchor = screen.getByRole('link', { name: new RegExp(mail.handle, 'i') });

    expect(anchor).not.toHaveAttribute('target');
    expect(anchor).not.toHaveAttribute('rel');
  });

  it('hides every icon from a screen reader', () => {
    const { container } = render(<Contact />);

    container.querySelectorAll('svg').forEach((svg) => {
      expect(svg).toHaveAttribute('aria-hidden', 'true');
    });
  });
});
