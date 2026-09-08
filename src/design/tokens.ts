/**
 * Single source of truth for the design tokens.
 *
 * `src/styles/tokens.css` mirrors these values as CSS variables for Tailwind.
 * If you change a value here, change the same value there.
 *
 * Three.js does not read CSS. Import from this file for every material color,
 * every light color, and every fog color.
 */

export type ColorMode = 'light' | 'dark';

export const palette = {
  ink: {
    50: '#f6f6f7',
    100: '#e3e3e6',
    200: '#c6c7cd',
    300: '#9fa1ab',
    400: '#74767f',
    500: '#585a63',
    600: '#43444b',
    700: '#33343a',
    800: '#212227',
    900: '#141519',
    950: '#0a0b0d',
  },
  accent: {
    300: '#8fd0ff',
    400: '#4fb2ff',
    500: '#1f92f5',
    600: '#0f74cc',
    700: '#0d5a9e',
  },
  warm: {
    400: '#ffb35c',
    500: '#f5912b',
    600: '#cc6f14',
  },
} as const;

/**
 * The tag hues. A chip takes one of these from its own name, so the same
 * technology carries the same color in every section.
 *
 * Each hue has a light value and a dark value. A light mode chip needs a dark
 * ink to read on white. A dark mode chip needs the opposite.
 */
export const tagHues = [
  'amber',
  'orange',
  'rose',
  'fuchsia',
  'violet',
  'indigo',
  'blue',
  'sky',
  'cyan',
  'teal',
  'emerald',
  'lime',
] as const;

export type TagHue = (typeof tagHues)[number];

export const tag: Record<ColorMode, Record<TagHue, string>> = {
  light: {
    amber: '#b45309',
    orange: '#c2410c',
    rose: '#be123c',
    fuchsia: '#a21caf',
    violet: '#6d28d9',
    indigo: '#4338ca',
    blue: '#1d4ed8',
    sky: '#0369a1',
    cyan: '#0e7490',
    teal: '#0f766e',
    emerald: '#047857',
    lime: '#4d7c0f',
  },
  dark: {
    amber: '#fbbf24',
    orange: '#fb923c',
    rose: '#fb7185',
    fuchsia: '#e879f9',
    violet: '#a78bfa',
    indigo: '#818cf8',
    blue: '#60a5fa',
    sky: '#38bdf8',
    cyan: '#22d3ee',
    teal: '#2dd4bf',
    emerald: '#34d399',
    lime: '#a3e635',
  },
};

export const semantic = {
  light: {
    background: palette.ink[50],
    surface: '#ffffff',
    border: palette.ink[200],
    text: palette.ink[900],
    textMuted: palette.ink[500],
    accent: palette.accent[600],
    accentContrast: '#ffffff',
  },
  dark: {
    background: palette.ink[950],
    surface: palette.ink[900],
    border: palette.ink[700],
    text: palette.ink[50],
    textMuted: palette.ink[300],
    accent: palette.accent[400],
    accentContrast: palette.ink[950],
  },
} as const;

/** Colors that Three.js scenes use. Keep every scene inside this set. */
export const scene = {
  light: {
    background: palette.ink[50],
    fog: palette.ink[100],
    keyLight: '#ffffff',
    fillLight: palette.accent[300],
    material: palette.accent[600],
    materialAlt: palette.warm[500],
    /** The aurora backdrop. `base` is the fill that the blobs sit on. */
    auroraBase: palette.ink[50],
    auroraBlobs: ['#bcd4ff', '#dccbff', '#bfe9e2'],
    /** The swarm takes these in order. They are the tag hues. */
    swarm: ['#0369a1', '#6d28d9', '#b45309', '#0f766e', '#be123c', '#1d4ed8', '#4d7c0f'],
  },
  dark: {
    background: palette.ink[950],
    fog: palette.ink[900],
    keyLight: '#ffffff',
    fillLight: palette.accent[500],
    material: palette.accent[400],
    materialAlt: palette.warm[400],
    auroraBase: palette.ink[950],
    auroraBlobs: ['#1e5ec0', '#5b2fb5', '#0d7a6b'],
    swarm: ['#38bdf8', '#a78bfa', '#fbbf24', '#2dd4bf', '#fb7185', '#e879f9', '#a3e635'],
  },
} as const;

export const space = {
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  6: '1.5rem',
  8: '2rem',
  12: '3rem',
  16: '4rem',
  24: '6rem',
} as const;

export const radius = {
  sm: '0.25rem',
  md: '0.5rem',
  lg: '1rem',
  full: '9999px',
} as const;

export const motion = {
  fast: 120,
  base: 220,
  slow: 420,
} as const;
