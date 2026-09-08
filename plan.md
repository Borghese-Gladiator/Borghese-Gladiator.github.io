# Plan: 3 changes, 3 commits

## 1. The theme control holds 2 states, not 3

The control carried a System position. That was wrong. There are 2 modes,
light and dark. The system does not add a third one. It decides which mode the
visitor starts on, and it keeps deciding until the visitor picks.

- `theme.ts` keeps `picked`, which is a mode or null. Null means no pick, so
  `resolveMode` reads the system. A pick overrides it and persists.
- `setMode` and `toggleMode` replace `setChoice` and `NEXT_CHOICE`.
- `useThemeChoice` goes. The control reads `useColorMode`, the same hook that
  the scene reads.
- The icon shows the mode that a click gives, which is the common pattern for
  a 2 state control. The label says "Switch to dark mode".

Nothing changes in the CSS or in the inline script. Both already key off the
resolved mode and never saw the third state.

## 2. The reveal control answers a click

A click pins a card open, but the control looks the same as it does on hover,
so the click has no feedback.

- The circle presses in on `:active`.
- A ring grows out of the circle and fades once, on the click that pins.
  A counter keys the ring, so React remounts it and the animation replays on
  every pin.
- A pinned circle takes a solid accent fill. A hover keeps the 15 percent
  tint. The 2 states now read differently, which is the point of the click.
- The keyframes live in `global.css`. Reduced motion already cuts every
  animation to 0.01ms there, so the ring does not run.

## 3. The quote

"The secret to getting ahead is getting started." becomes "The secret of
getting ahead is getting started." One line in `content/profile.ts`. That is
also the wording that Mark Twain is quoted with.

## Tests

### Unit

- The store takes its default from the system while nothing is stored.
- A pick holds against the system and persists.
- `toggleMode` turns dark into light and back.
- The control offers 2 names only, and 2 clicks return to the start.

### Manual

Run `npm run dev`, then in the browser:

1. Clear the storage, set the OS to dark, reload. Confirm the page is dark.
2. Set the OS to light, clear the storage, reload. Confirm the page is light.
3. Click the control twice. Confirm it returns to the mode it started in.
4. Click the caret on a card. Confirm the circle presses, a ring grows out,
   and the circle stays filled while the card is pinned.
5. Hover a different card. Confirm the circle tints but does not fill.
6. Read the quote in the hero.
