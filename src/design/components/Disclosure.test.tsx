import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Disclosure } from './Disclosure';

function setup() {
  render(
    <Disclosure heading="Software Engineer" meta={<p>A summary.</p>}>
      <p>The detail.</p>
    </Disclosure>,
  );
  return screen.getByRole('button', { name: /Software Engineer/ });
}

describe('Disclosure', () => {
  it('starts closed and keeps the region out of the tab order', () => {
    const trigger = setup();

    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    expect(screen.getByText('A summary.')).toBeVisible();
    expect(
      document.getElementById(trigger.getAttribute('aria-controls')!),
    ).toHaveAttribute('inert');
  });

  it('opens on a click and closes on a second click', async () => {
    const trigger = setup();
    const region = document.getElementById(trigger.getAttribute('aria-controls')!);

    await userEvent.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    expect(region).not.toHaveAttribute('inert');

    await userEvent.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    expect(region).toHaveAttribute('inert');
  });
});
