# Plan: icons, and a contact section that carries weight

## Brief

The contact section is the last thing a recruiter reads, and it is the one
part of the page that asks for an action. Today it is 3 underlined links in a
row of plain text. It reads as a list of footnotes, not as an invitation.

The site has no icon set. `ThemeToggle` draws its own inline SVG, which does
not scale to a second use.

## Changes

### 1. An `Icon` primitive

- Add `src/design/components/Icon.tsx`.
- It holds a named set of 24x24 stroke shapes: `mail`, `github`, `linkedin`,
  and `arrowUpRight`.
- The shapes match the `ThemeToggle` style: no fill, `currentColor` stroke,
  width 2, round caps. Color comes from the parent, so a hue or a mode change
  needs no work in the icon.
- The SVG is `aria-hidden`. A screen reader reads the text next to it.
- Export it from `src/design/components/index.ts`.

Do not add an icon package. 4 shapes do not pay for a dependency.

### 2. A hue and an icon on each link

- `ProfileLink` in `src/content/profile.ts` takes `icon` and `hue`.
- Email takes `sky`, GitHub takes `violet`, LinkedIn takes `teal`. These are
  tag hues, so the contact section uses the same palette as the chips.

### 3. The contact section

- The 3 links become 3 cards in a grid. Each card is one anchor, so the whole
  card is the target. One anchor also keeps the card free of a nested control.
- Each card shows the icon in a tinted circle, the label, and the handle.
- A hover lifts the card, turns the border to the hue, and fades in a soft
  wash of the same hue. An arrow slides in at the handle.
- A colored rule sits above the tagline, which matches every other section.
- A gradient hairline crosses the top edge of the footer.
- The `mailto:` link keeps the same tab. Only an `http` link opens a new one.

## Tests

### Unit

`src/sections/Contact.test.tsx`:

- Each link renders as a link, with the correct `href`.
- The 2 web links open a new tab with a safe `rel`. The mail link does not.
- The icons stay out of the accessibility tree.

`src/design/components/Icon.test.tsx`:

- The component draws the shape that the name selects.
- The SVG is `aria-hidden`.

### Manual

1. Run `npm run dev`. Scroll to the contact section.
2. Point at each card. The card must lift, the border must take the hue, and
   the arrow must appear.
3. Press Tab through the 3 cards. Each one must show a focus ring.
4. Click the email card. The mail client must open in the same tab.
5. Click the GitHub card. It must open a new tab.
6. Switch to light mode. The hues and the wash must stay readable.
7. Turn on "Reduce motion" in the OS. The lift must stop.
8. Narrow the window to 375px. The 3 cards must stack, and the email address
   must not overflow.
