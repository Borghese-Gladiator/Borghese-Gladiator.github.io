# Plan: a theme control in the nav

## Brief

The site reads `prefers-color-scheme` and offers no choice. A visitor who
wants the other mode has to change the setting of the operating system.

Add a control at the top right of the nav. It holds 3 states, not 2, because
"follow the system" is the current behavior and must survive.

| State  | Result                                                         |
| ------ | -------------------------------------------------------------- |
| System | Follow `prefers-color-scheme`, and follow a later change to it |
| Light  | Light, whatever the system says                                |
| Dark   | Dark, whatever the system says                                 |

One button cycles System, Light, Dark. The choice persists in
`localStorage`.

## The problem to solve first

3 things read the color mode and they must agree:

1. The CSS tokens, through a media query.
2. `useSceneColors`, through `matchMedia` in React.
3. The new control.

A media query cannot read a stored choice, so the CSS has to key off an
attribute instead.

## Changes

### The attribute, not the media query

- `tokens.css` moves the dark values from
  `@media (prefers-color-scheme: dark)` to `:root[data-theme='dark']`.
- `index.html` gains a small inline script that sets `data-theme` before the
  first paint. Without it the page paints light and then flips.
- The script is the only reason the media query can go. The site is a React
  page, so a visitor with no JavaScript sees nothing at all. A dark fallback
  for that case would protect nobody, and keeping the media query would mean 3
  copies of the same token block.
- `global.css` sets `color-scheme` from the attribute, so the scrollbar and
  the form controls follow the choice.

### One source of truth

`src/theme/theme.ts` holds a small store:

- `getChoice`, `setChoice`, `subscribe`, `resolve`.
- `resolve` returns light or dark. It reads `matchMedia` only while the choice
  is System.
- `useThemeChoice` and `useColorMode` read it with `useSyncExternalStore`.

The store sits outside React, not in a context, because `useSceneColors` runs
inside the `<Canvas>` tree. That tree is a separate reconciler, so a context
above it is not reliable. A module store is the same value for every tree.

`useSceneColors` reads `useColorMode` from the store rather than calling
`matchMedia` itself. The scene then follows an explicit choice.

### The control

`src/components/ThemeToggle.tsx`. A circled icon button that matches the
reveal control: a sun, a moon, or a monitor. The label names the state and the
next state, so a screen reader announces both.

`Nav` puts it at the right end, after the section list. The section list
already shrinks and scrolls on a phone, so the button keeps its size.

## Tests

### Unit

- `resolve` returns the stored choice, and reads the system only for System.
- `setChoice` writes `data-theme` on the root element.
- `setChoice` survives a `localStorage` that throws, which is a private
  window.
- `ThemeToggle` cycles System, Light, Dark, System on 3 clicks.

### Manual

Run `npm run dev`, then in the browser:

1. Click the control 3 times. Confirm the page turns light, dark, then back
   to the system mode.
2. Confirm the hero scene changes with the page, not only the DOM.
3. Reload after a choice. Confirm the choice holds and the page does not
   flash the other mode first.
4. Set the choice to System, then change the OS mode. Confirm the page
   follows without a reload.
5. Confirm the control is at 375px wide and does not push the nav.
