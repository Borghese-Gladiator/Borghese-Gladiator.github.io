import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Experience } from './Experience';
import { experienceData } from '../content/experience';

describe('Experience', () => {
  it('renders one heading per role, in order', () => {
    render(<Experience />);

    const headings = screen
      .getAllByRole('heading', { level: 3 })
      .map((heading) => heading.textContent);

    expect(headings).toEqual(experienceData.map((role) => role.title));
  });

  it('renders every highlight', () => {
    render(<Experience />);

    experienceData.forEach((role) => {
      role.highlights.forEach((highlight) => {
        expect(screen.getByText(highlight)).toBeVisible();
      });
    });
  });
});
