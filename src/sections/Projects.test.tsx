import { describe, expect, it } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Projects } from './Projects';
import { projectData, visibleProjects } from '../content/projects';

describe('Projects', () => {
  it('renders one closed card per visible project', () => {
    render(<Projects />);

    expect(screen.getAllByRole('button', { expanded: false })).toHaveLength(
      visibleProjects.length,
    );
    visibleProjects.forEach((project) => {
      expect(screen.getByRole('button', { name: project.name })).toBeVisible();
    });
  });

  it('keeps a draft project out of the page', () => {
    const drafts = projectData.filter((project) => project.draft);
    render(<Projects />);

    drafts.forEach((project) => {
      expect(screen.queryByRole('button', { name: project.name })).toBeNull();
    });
  });

  it('links the source of a project that has a repository', () => {
    render(<Projects />);

    visibleProjects
      .filter((project) => project.repo)
      .forEach((project) => {
        expect(
          screen.getByRole('link', { name: `${project.name} on GitHub` }),
        ).toHaveAttribute('href', project.repo);
      });
  });

  it('shows no source link on a project that has no repository', () => {
    render(<Projects />);

    visibleProjects
      .filter((project) => !project.repo)
      .forEach((project) => {
        expect(
          screen.queryByRole('link', { name: `${project.name} on GitHub` }),
        ).toBeNull();
      });
  });

  it('shows the picture of a project that carries an image', () => {
    render(<Projects />);

    const withImage = visibleProjects.filter((project) => project.image);
    expect(screen.getAllByRole('img')).toHaveLength(withImage.length);
    withImage.forEach((project) => {
      expect(screen.getByRole('img', { name: project.image!.alt })).toHaveAttribute(
        'src',
        project.image!.src,
      );
    });
  });

  it('reveals the detail and the link of a project on a click', async () => {
    const project = visibleProjects.find((entry) => entry.href)!;
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
