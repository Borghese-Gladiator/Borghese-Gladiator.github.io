import { describe, expect, it } from 'vitest';
import { tagHue } from './tagHue';
import { tagHues } from './tokens';

describe('tagHue', () => {
  it.each([
    { name: 'Python', hue: 'amber' },
    { name: 'python', hue: 'amber' },
    { name: 'JavaScript', hue: 'orange' },
    { name: 'Java', hue: 'rose' },
  ])('gives $name the explicit hue $hue', ({ name, hue }) => {
    expect(tagHue(name)).toBe(hue);
  });

  it('gives every tag a visitor scans for a hue of its own', () => {
    const scanned = [
      'Python',
      'JavaScript',
      'TypeScript',
      'Java',
      'Ruby',
      'Jira',
      'Docker',
      'Git',
      'React',
      'Jenkins',
      'Linux',
      'Selenium',
    ];
    expect(new Set(scanned.map(tagHue)).size).toBe(scanned.length);
  });

  it('returns a hue from the list for a name it does not know', () => {
    expect(tagHues).toContain(tagHue('Kubernetes'));
  });

  it('returns the same hue for the same name', () => {
    expect(tagHue('Beautiful Soup')).toBe(tagHue('Beautiful Soup'));
  });
});
