import { tagHues, type TagHue } from './tokens';

/**
 * The tags that a visitor scans for.
 *
 * Every name here owns a hue, so no two of them ever share a color. The list
 * covers each language plus the tools that appear most often in the content.
 * Add a name here when it starts to repeat across sections.
 */
const EXPLICIT: Record<string, TagHue> = {
  python: 'amber',
  javascript: 'orange',
  java: 'rose',
  ruby: 'fuchsia',
  jira: 'violet',
  typescript: 'indigo',
  docker: 'blue',
  git: 'sky',
  react: 'cyan',
  jenkins: 'teal',
  linux: 'emerald',
  selenium: 'lime',
};

/** A stable hash. The same name must return the same hue on every reload. */
function hash(name: string): number {
  let value = 0;
  for (let index = 0; index < name.length; index += 1) {
    value = (value * 31 + name.charCodeAt(index)) % 0xffffffff;
  }
  return value;
}

/**
 * Returns the hue for a tag name.
 *
 * A name that the list above does not hold hashes to one of the 12 hues. This
 * keeps the color stable without a hand written entry for every tool.
 */
export function tagHue(name: string): TagHue {
  const key = name.trim().toLowerCase();
  return EXPLICIT[key] ?? tagHues[hash(key) % tagHues.length];
}
