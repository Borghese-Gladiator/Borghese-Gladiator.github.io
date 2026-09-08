# Plan: add color, flair, and reveal on demand

## Brief

The site reads drab for 3 reasons. Each one gets a fix here.

| Cause                                                                             | Fix                                                             |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| One accent hue does all the work. The `warm` ramp in `tokens.ts` has no importer. | An 8 hue tag palette. A chip takes its color from its own name. |
| The page is one flat fill, edge to edge.                                          | A fixed wash of 3 soft radial gradients behind the whole page.  |
| The hero is one centered object on black.                                         | An aurora shader backdrop and 250 instanced shapes.             |

Two behavior changes come with it:

- A chip carries the same color everywhere, so Python is the same hue in the
  timeline, in the project cards, and in the skill groups.
- The timeline and the project cards hold their detail back. A pointer opens a
  card on hover. A click pins it open. The keyboard opens it with Enter.

## Changes

### The tag palette

- `tokens.ts` gains `tagHues` and a `tag` record with a light value and a dark
  value for each of the 8 hues.
- `tokens.css` mirrors them as `--tag-amber` and so on, once for light and
  once for dark.
- `src/design/tagHue.ts` maps a tag name to a hue. A language gets an explicit
  hue. Every other name hashes to one of the 8. The same name always returns
  the same hue, so the color is stable across sections and across reloads.
- `src/design/components/Tag.tsx` renders the chip. It reads one hue variable
  and derives the fill and the border with `color-mix`.
- `Badge` stays for a chip that carries no technology name.

### The page wash

`global.css` paints 3 radial gradients on a fixed `body::before` layer, at 8
to 10 percent of the accent, the violet, and the teal. The layer sits behind
the content and takes no pointer events.

### The section accent

`Section` gains an `accent` prop. It draws a short colored rule above the
title. About is violet, Experience is sky, Projects is amber, Skills is
emerald.

### The hero scene

`HeroScene.tsx` holds both parts, because they are one scene.

- **Aurora.** One large plane with a fragment shader. 3 blobs move on
  independent sine paths and mix into the base color. A dither term removes
  the banding. The colors come from `useSceneColors`.
- **Swarm.** `<Instances>` with 250 members. Each one takes a position, a
  scale, and a color from the tag palette, so the hero and the chips share one
  set of hues. The group rotates and bobs, which is 1 matrix update per frame
  rather than 250.
- **Parallax.** The pointer moves the camera. The lerp mutates the camera and
  allocates nothing inside the frame loop.
- Reduced motion stops the group, the aurora clock, and the parallax.

Cost: 2 draw calls.

### Reveal on demand

`src/design/components/Disclosure.tsx`:

- The trigger is a `button` with `aria-expanded` and `aria-controls`.
- The region animates with `grid-template-rows` from `0fr` to `1fr`.
- The region takes `inert` when it is closed, so a screen reader and the Tab
  key skip the hidden text.
- `open` is true when the card is pinned or when a fine pointer is over it.
  A coarse pointer, which means a phone, only pins.

`Experience` and `Projects` both use it. The summary and the chips stay
visible. The bullet list and the long description hide until the visitor asks.

### Layering

Move `useMediaQuery` from `src/three/hooks/` to `src/hooks/`. The design system
needs it and must not import from `src/three/`.

## Tests

### Unit

- `tagHue` returns the explicit hue for a language, returns the same hue for
  the same name twice, and returns a hue from the list for an unknown name.
- `Tag` sets the hue variable for the name that it renders.
- `Disclosure` reports `aria-expanded` false, then true after a click, and
  marks the region `inert` only while it is closed.
- `Experience` renders one trigger per role, and opens one role on a click.
- `Projects` links only a project that has a link.

### Manual

Run `npm run dev`, then in the browser:

1. Load `/`. Confirm the aurora moves and the shapes drift.
2. Move the mouse across the hero. Confirm the camera follows and lags.
3. Read the `r3f-perf` HUD. Confirm 2 calls and 60 fps.
4. Find Python in the timeline and in Skills. Confirm both chips match.
5. Hover a timeline role. Confirm the bullets open, and close on exit.
6. Click a role. Confirm it stays open, and closes on a second click.
7. Tab to a role. Confirm the outline shows and Enter opens it.
8. Switch the OS to dark mode. Confirm the wash, the chips, and the scene
   follow.
9. Set the OS to reduce motion. Reload. Confirm the scene holds still.
10. Set the window to 375px. Confirm no sideways scroll, and that a tap opens
    a card.
