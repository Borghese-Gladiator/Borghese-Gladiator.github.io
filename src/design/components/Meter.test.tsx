import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Meter } from './Meter';

describe('Meter', () => {
  it.each([
    { value: 8, max: 10, expected: '8' },
    { value: 80, max: 100, expected: '80' },
  ])('reports $value of $max to the accessibility tree', ({ value, max, expected }) => {
    render(<Meter value={value} max={max} label="Python proficiency" />);

    const meter = screen.getByRole('meter', { name: 'Python proficiency' });
    expect(meter).toHaveAttribute('aria-valuenow', expected);
    expect(meter).toHaveAttribute('aria-valuemax', String(max));
  });
});
