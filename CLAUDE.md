# Borghese-Gladiator.github.io

Personal portfolio. React + Vite + TypeScript + Three.js.
GitHub Pages serves the repo at the domain root, so `base` stays `/`.

## Context

This is a developer portfolio. The audience is a recruiter, a hiring manager,
or another engineer. Most visits are short and many are on a phone.

Two results follow:

- The 3D work is the demonstration, not decoration. A scene that shows a skill
  earns its cost.
- The first paint competes with the 3D. `Hero3D` is lazy loaded for this reason.
  Keep the Three.js chunk out of the first load.

## Commands

```
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
  design/            design system
    tokens.ts          palette, spacing, radius, motion  (source of truth)
    cn.ts              class name join
    components/        Button, Card, Container, Section, Text
  styles/
    tokens.css         CSS mirror of tokens.ts, read by Tailwind @theme
    global.css         Tailwind import, base styles, reduced motion
  three/
    SceneCanvas.tsx    the one <Canvas> shell for the whole site
    scenes/            one file per animation
    hooks/             useReducedMotion, useSceneColors, useMediaQuery
  sections/            page sections that join UI and 3D
  App.tsx
```

## Design system rules

- `src/design/tokens.ts` is the source of truth. `src/styles/tokens.css` mirrors
  the same hex values. Change both together.
- Components read the semantic CSS variables, not the raw palette.
  Use `var(--color-text)`, not `var(--color-ink-900)`.
- Three.js cannot read CSS. Scenes import from `tokens.ts`.
- Add a new primitive to `src/design/components/` and export it from
  `components/index.ts`.
- Do not add a component library. These primitives cover the site.

## Three.js: invariants

These hold for any scene. They are properties of the engine, not preferences.

1. **Animate with `delta`.** Write `ref.current.rotation.y += delta * 0.3`.
   A fixed per frame step runs twice as fast on a 120 Hz display.
2. **Never call `setState` inside `useFrame`.** Mutate refs. A `setState` call
   there re-renders every frame.
3. **Allocate outside the frame loop.** Do not build a `Vector3`, a `Color`, or
   a geometry inside `useFrame`. Hoist it to a `useMemo` or a module constant.
   The garbage collector causes the stutter, not the math.
4. **JSX disposes itself. `new` does not.** If you build an object with `new`,
   dispose it in a `useEffect` cleanup.
5. **A canvas is not readable.** Screen readers see nothing inside WebGL. Text
   that carries meaning lives in the DOM.

## Three.js: defaults for this repo

These are starting points. Change any of them when the scene needs it. Say what
you changed and why.

- **One canvas per page.** `SceneCanvas` is the shell. For several scenes on one
  page, first try `<View>` from drei, which shares one renderer across several
  viewports. A second `<Canvas>` is allowed when `<View>` does not fit. Two
  renderers cost two WebGL contexts, so the choice needs a reason.
- **Colors come from `useSceneColors()`.** This keeps a scene in step with light
  and dark mode for free. A scene may introduce its own color when the effect
  needs it. If the color appears in a second scene, move it into `tokens.ts`.
- **A scene is one file** in `src/three/scenes/`. `HeroScene.tsx` is the
  reference. Copy it.
- **Reduced motion stops the motion.** Every scene reads `useReducedMotion()`.
  This one is close to an invariant. Some visitors get sick otherwise.
- **`<Instances>` from drei for many copies of one mesh.** The gain starts to
  matter in the low hundreds. Read the draw call count in the `r3f-perf` HUD
  rather than a threshold in this file.

## Three.js: open questions

I have not decided these. Ask before you assume an answer.

- **The performance target.** The site has no measured budget yet. Name the
  weakest device that must hold 60 fps, then set a draw call and a triangle
  budget from a measurement on that device.
- **Mobile.** A portfolio gets opened on a phone. Decide per scene: the full
  scene, a lighter scene, or a static image.
- **The asset budget.** No size limit is set. A recruiter may load the site on a
  weak connection, so the first paint matters more than the model detail.
- **How much of the site is 3D.** One hero, a scene per project, or a background
  that runs the whole page. Each answer leads to a different shell.

## Assets

Put `.glb` files in `public/models/` and textures in `public/textures/`.
Load them with `useGLTF` and `useTexture` from drei.
Compress a `.glb` with `gltf-transform` before you commit it.

## How to ask for a scene

A useful request names these five things:

1. The subject. "A field of 200 floating cubes."
2. The motion. "They drift up and reset at the top."
3. The interaction. "The mouse position tilts the camera."
4. The mood. "Dark, slow, matte, no bloom."
5. The placement. "Behind the hero text, full width, 80vh."

## Testing

- Vitest with jsdom. jsdom has no WebGL context, so do not render a `<Canvas>`
  in a unit test.
- Unit test the design system components and the pure helpers.
- Verify a scene by hand in the browser, or with a Playwright screenshot.

## Workflow

- Write `plan.md` before a non-trivial change.
- Do not commit unless the user asks.
- Do not push unless the user asks.
