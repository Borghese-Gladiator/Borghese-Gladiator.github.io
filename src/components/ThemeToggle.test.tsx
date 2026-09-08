import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeToggle } from './ThemeToggle';
import { setChoice } from '../theme/theme';

describe('ThemeToggle', () => {
  beforeEach(() => {
    localStorage.clear();
    setChoice('system');
  });

  it('cycles System, Light, Dark, and back', async () => {
    render(<ThemeToggle />);
    const control = () => screen.getByRole('button');

    expect(control()).toHaveAccessibleName('Theme: system. Change to light.');

    await userEvent.click(control());
    expect(control()).toHaveAccessibleName('Theme: light. Change to dark.');
    expect(document.documentElement.dataset.theme).toBe('light');

    await userEvent.click(control());
    expect(control()).toHaveAccessibleName('Theme: dark. Change to system.');
    expect(document.documentElement.dataset.theme).toBe('dark');

    await userEvent.click(control());
    expect(control()).toHaveAccessibleName('Theme: system. Change to light.');
  });
});
