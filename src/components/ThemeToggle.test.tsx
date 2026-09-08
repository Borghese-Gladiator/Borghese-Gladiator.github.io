import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeToggle } from './ThemeToggle';
import { setMode } from '../theme/theme';

describe('ThemeToggle', () => {
  beforeEach(() => {
    localStorage.clear();
    setMode('light');
  });

  it('switches between light and dark, and offers no third state', async () => {
    render(<ThemeToggle />);
    const control = () => screen.getByRole('button');

    expect(control()).toHaveAccessibleName('Switch to dark mode');

    await userEvent.click(control());
    expect(document.documentElement.dataset.theme).toBe('dark');
    expect(control()).toHaveAccessibleName('Switch to light mode');

    await userEvent.click(control());
    expect(document.documentElement.dataset.theme).toBe('light');
    expect(control()).toHaveAccessibleName('Switch to dark mode');
  });
});
