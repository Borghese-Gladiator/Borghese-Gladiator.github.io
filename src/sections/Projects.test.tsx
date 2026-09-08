import { describe, expect, it } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Projects } from './Projects';
import { projectData } from '../content/projects';

describe('Projects', () => {
  it('renders one closed card per project', () => {
    render(<Projects />);

    expect(screen.getAllByRole('button', { expanded: false })).toHaveLength(
      projectData.length,
    );
    projectData.forEach((project) => {
      expect(screen.getByRole('button', { name: project.name })).toBeVisible();
    });
  });

  it('reveals the detail and the link of a project on a click', async () => {
    const project = projectData.find((entry) => entry.href)!;
    render(<Projects />);

    const trigger = screen.getByRole('button', { name: project.name });
    await userEvent.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');

    const region = document.getElementById(trigger.getAttribute('aria-controls')!)!;
    expect(within(region).getByText(project.detail)).toBeVisible();
    expect(
      within(region).getByRole('link', { name: 'Open the project' }),
    ).toHaveAttribute('href', project.href);
  });
});
