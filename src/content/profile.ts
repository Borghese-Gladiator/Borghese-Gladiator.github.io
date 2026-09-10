import type { IconName } from '../design/components';
import type { TagHue } from '../design/tokens';

export interface ProfileLink {
  label: string;
  href: string;
  handle: string;
  icon: IconName;
  /** The card takes this hue for the icon, the border, and the wash. */
  hue: TagHue;
}

export const profile = {
  name: 'Timothy Shee',
  roles: ['Full stack developer.', 'DevOps engineer.', 'NLP enthusiast.'],
  quote: {
    text: 'The secret of getting ahead is getting started.',
    author: 'Mark Twain',
  },
  footerTagline: ['Learn, apply, and repeat.', 'The best way to solve problems.'],
} as const;

export const links: ProfileLink[] = [
  {
    label: 'Email',
    href: 'mailto:tim.shee0791@gmail.com',
    handle: 'tim.shee0791@gmail.com',
    icon: 'mail',
    hue: 'sky',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Borghese-Gladiator',
    handle: 'Borghese-Gladiator',
    icon: 'github',
    hue: 'violet',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/timothy-shee-aa46a5170/',
    handle: 'timothy-shee',
    icon: 'linkedin',
    hue: 'teal',
  },
];
