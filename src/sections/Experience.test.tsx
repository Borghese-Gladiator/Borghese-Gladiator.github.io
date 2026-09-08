import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Experience } from './Experience';
import { experienceData } from '../content/experience';

describe('Experience', () => {
  it('renders one closed card per role', () => {
    render(<Experience />);

    const triggers = screen.getAllByRole('button', { expanded: false });
    expect(triggers).toHaveLength(experienceData.length);
    expect(triggers.map((trigger) => trigger.getAttribute('aria-label'))).toEqual(
      experienceData.map((role) => `${role.title} at ${role.company}`),
    );
  });

  it('reveals the highlights of one role on a click', async () => {
    const [role] = experienceData;
    render(<Experience />);

    const trigger = screen.getByRole('button', {
      name: `${role.title} at ${role.company}`,
    });
    await userEvent.click(trigger);

    expect(trigger).toHaveAttribute('aria-expanded', 'true');
    role.highlights.forEach((highlight) => {
      expect(screen.getByText(highlight)).toBeVisible();
    });
  });

  it('keeps the summary and the skills visible while a card is closed', () => {
    render(<Experience />);

    experienceData.forEach((role) => {
      expect(screen.getByText(role.summary)).toBeVisible();
      role.skills.forEach((skill) => {
        expect(screen.getAllByText(skill).length).toBeGreaterThan(0);
      });
    });
  });
});
