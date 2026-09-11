export interface Segment {
  text: string;
  strong: boolean;
}

/**
 * Splits a string on pairs of `**`.
 *
 * The About prose marks a company or a product name this way, so the name
 * reads at full strength inside muted body text. A marker without its pair
 * stays literal, because a half parsed sentence is worse than a visible
 * asterisk.
 */
export function splitEmphasis(text: string): Segment[] {
  const parts = text.split('**');

  // An even count means a marker never closed. Give back the raw text.
  if (parts.length % 2 === 0) return [{ text, strong: false }];

  return parts
    .map((part, index) => ({ text: part, strong: index % 2 === 1 }))
    .filter((segment) => segment.text.length > 0);
}
