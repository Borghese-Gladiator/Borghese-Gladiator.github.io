/**
 * Reports whether an href leaves the site.
 *
 * A `mailto:` href hands the address to the mail client and stays in the tab.
 * Only a web link needs `target="_blank"`.
 */
export function isWebLink(href: string): boolean {
  return href.startsWith('http');
}
