import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Projects } from './Projects';
import { projectData } from '../content/projects';

describe('Projects', () => {
  it('links only the projects that have a link', () => {
    render(<Projects />);

    const expected = projectData.filter((project) => project.href).length;
    expect(screen.getAllByRole('link', { name: 'Open the project' })).toHaveLength(
      expected,
    );
  });

  it('names every project', () => {
    render(<Projects />);

    projectData.forEach((project) => {
      expect(screen.getByRole('heading', { name: project.name, level: 3 })).toBeVisible();
    });
  });
});
