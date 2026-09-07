# Borghese-Gladiator.github.io

Personal portfolio for Timothy Shee. React, Vite, TypeScript, and Three.js.
GitHub Pages serves the repo at the domain root, so the Vite `base` stays `/`.

## Commands

```
npm install        # install the dependencies
npm run dev        # start the dev server on http://localhost:5173
npm run build      # typecheck, then build to dist/
npm run preview    # serve dist/
npm run test       # vitest, one run
npm run lint       # oxlint
npm run format     # prettier
```

## Layout

```
src/
  design/            design system (tokens are the source of truth)
  styles/            CSS token mirror and global styles
  three/             the canvas shell, the scenes, and the scene hooks
  sections/          page sections that join the UI and the 3D
  App.tsx
```

`src/design/tokens.ts` and `src/styles/tokens.css` hold the same values.
Change both together. Three.js cannot read CSS, so a scene imports from
`tokens.ts`.

`Hero3D` is lazy loaded. This keeps the Three.js chunk out of the first load.

See `CLAUDE.md` for the design system rules and the Three.js invariants.
