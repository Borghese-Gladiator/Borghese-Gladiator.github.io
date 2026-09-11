import { describe, expect, it } from 'vitest';
import { splitEmphasis } from './splitEmphasis';

describe('splitEmphasis', () => {
  it.each([
    [
      'plain text',
      'I work on reporting.',
      [{ text: 'I work on reporting.', strong: false }],
    ],
    [
      'one marked name',
      'I work at **Klaviyo** now.',
      [
        { text: 'I work at ', strong: false },
        { text: 'Klaviyo', strong: true },
        { text: ' now.', strong: false },
      ],
    ],
    [
      'two marked names',
      '**Rewst** and **Dell EMC**',
      [
        { text: 'Rewst', strong: true },
        { text: ' and ', strong: false },
        { text: 'Dell EMC', strong: true },
      ],
    ],
    [
      'a marker that never closes',
      'I work at **Klaviyo now.',
      [{ text: 'I work at **Klaviyo now.', strong: false }],
    ],
  ])('handles %s', (_name, input, expected) => {
    expect(splitEmphasis(input)).toEqual(expected);
  });

  it('drops the empty segment when a name opens the string', () => {
    expect(splitEmphasis('**Klaviyo** pays me.')).toEqual([
      { text: 'Klaviyo', strong: true },
      { text: ' pays me.', strong: false },
    ]);
  });
});
