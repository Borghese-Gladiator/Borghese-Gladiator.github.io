# Plan: build the portfolio on the predecessor content

## Brief

Port the content of `2021_Borghese-Gladiator.github.io` onto the new shell.
Keep the content. Drop the implementation.

What the predecessor did well: the section set and the copy. It has 7 sections
and real text for each one.

What the predecessor did badly, and what this plan fixes:

| Problem                                                  | Fix                                      |
| -------------------------------------------------------- | ---------------------------------------- |
| Content and JSX mixed in `src/constants/*.js`            | Typed data in `src/content/*.ts`, no JSX |
| Material UI `makeStyles` in every file                   | The token based design system            |
| 40 third party logo images                               | Text badges. No image assets             |
| 6 runtime dependencies for typing, scroll, and animation | 2 local hooks                            |
| No color scheme, no dark mode                            | The semantic tokens, light and dark      |
| No favicon                                               | An SVG monogram                          |
| No 3D                                                    | The existing `HeroScene`                 |

## Content decisions

Carry over verbatim: the 4 job entries, the 3 approach cards, the skill groups,
the 4 spoken languages, the footer tagline, the Mark Twain quote, the 3 contact
links.

Do not carry over:

- The 2021 status text "an incoming Dell EMC Entry Software Engineer".
- 4 of the 6 project `longDesc` fields. They hold the same Leap Motion
  paragraph, which is a copy paste error in the predecessor.
- 3 project links that point at `hololive.jetri.co`, which does not match the
  project.
- The resume PDF. It is 5 years old.

## Changes

### Content

- `src/content/profile.ts` name, the 3 typed roles, the quote, the links
- `src/content/about.ts` about text, status text, the 3 approach cards
- `src/content/experience.ts` the 4 roles with skills and bullets
- `src/content/projects.ts` the 6 projects
- `src/content/skills.ts` JavaScript, Python, Java and their tools
- `src/content/languages.ts` the 4 spoken languages
- `src/content/sections.ts` the section id and label list that the nav reads

### Design system

- `buttonClass.ts` the button styles as a class string, so an anchor can look
  like a button and stay an anchor
- `Badge.tsx` a skill or tool tag
- `Meter.tsx` a proficiency bar with `role="meter"`
- `ExternalLink.tsx` an anchor with `rel="noreferrer"` set once
- Export all three from `components/index.ts`
- Remove `'Inter'` from `--font-sans`. No font file is loaded, so the token
  lies.

### Hooks

- `src/hooks/useTypewriter.ts` replaces `react-typing-effect`. Returns the
  full text at once when the visitor asks for reduced motion.
- `src/hooks/useActiveSection.ts` replaces `react-scroll`. An
  IntersectionObserver reports the section in view.

### Sections

6 sections, one file each in `src/sections/`. `Nav.tsx` goes in
`src/components/`.

| Section      | Content                                               |
| ------------ | ----------------------------------------------------- |
| `Hero`       | the name, the typed roles, 2 links, the quote, the 3D |
| `About`      | the about text and the 3 approach cards               |
| `Experience` | the 4 roles on a timeline                             |
| `Projects`   | the 6 projects                                        |
| `Skills`     | the 3 skill groups and the 4 spoken languages         |
| `Contact`    | the tagline and the 3 contact links                   |

`sections.ts` holds these 6 ids, so the nav list and the DOM ids cannot drift.

`Hero` keeps the lazy import of `Hero3D`. The Three.js chunk stays out of the
first load.

The hero answers the mobile question for this one scene. A wide screen puts the
scene behind the copy with a scrim. A phone puts the scene in a 280px box under
the copy. `useMediaQuery` picks one, so only one canvas mounts.

### Assets

- `public/favicon.svg` a monogram that uses the accent token
- `index.html` links the favicon and sets `theme-color`

## Tests

### Unit

- `Meter` reports its value to the accessibility tree
- `useTypewriter` types forward, and returns the full text under reduced motion
- `Nav` renders one link per section
- `Experience` renders every role from the content file
- `Projects` renders a link only for a project that has one

### Manual

Run `npm run dev`, then in the browser:

1. Load `/`. Confirm the hero text paints before the 3D.
2. Confirm the role text types and cycles.
3. Click each nav link. Confirm the page scrolls to that section.
4. Scroll by hand. Confirm the nav marks the section in view.
5. Switch the OS to dark mode. Confirm every section and the 3D follow.
6. Set the OS to reduce motion. Reload. Confirm the knot stops and the role
   text does not type.
7. Set the window to 375px wide. Confirm no section scrolls sideways.
8. Confirm the favicon shows in the tab.
