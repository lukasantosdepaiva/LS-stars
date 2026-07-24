export const colors = {
  brand: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
    950: '#172554',
  },
  accent: {
    50: '#fefce8',
    100: '#fef9c3',
    200: '#fef08a',
    300: '#fde047',
    400: '#facc15',
    500: '#eab308',
    600: '#ca8a04',
    700: '#a16207',
    800: '#854d0e',
    900: '#713f12',
    950: '#422006',
  },
  slate: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617',
  },
  emerald: {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981',
    600: '#059669',
  },
  red: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
  },
} as const;

export const colorPalette = {
  ...colors,
  white: '#ffffff',
  transparent: 'transparent',
} as const;

export const semanticColors = {
  light: {
    background: {
      primary: colorPalette.slate[50],
      secondary: colorPalette.white,
      tertiary: colorPalette.slate[100],
      inverse: colorPalette.slate[950],
    },
    text: {
      primary: colorPalette.slate[950],
      secondary: colorPalette.slate[600],
      tertiary: colorPalette.slate[400],
      inverse: colorPalette.white,
      brand: colorPalette.brand[600],
      accent: colorPalette.accent[600],
      success: colorPalette.emerald[600],
      error: colorPalette.red[600],
    },
    border: {
      light: colorPalette.slate[200],
      medium: colorPalette.slate[300],
      dark: colorPalette.slate[400],
      brand: colorPalette.brand[300],
      accent: colorPalette.accent[300],
    },
    surface: {
      default: colorPalette.white,
      hover: colorPalette.slate[50],
      active: colorPalette.slate[100],
      brand: colorPalette.brand[50],
      accent: colorPalette.accent[50],
    },
    shadow: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      brand: '0 0 0 3px rgb(37 99 235 / 0.4)',
    },
  },
  dark: {
    background: {
      primary: colorPalette.slate[950],
      secondary: colorPalette.slate[900],
      tertiary: colorPalette.slate[800],
      inverse: colorPalette.slate[50],
    },
    text: {
      primary: colorPalette.white,
      secondary: colorPalette.slate[300],
      tertiary: colorPalette.slate[500],
      inverse: colorPalette.slate[950],
      brand: colorPalette.brand[400],
      accent: colorPalette.accent[400],
      success: colorPalette.emerald[400],
      error: colorPalette.red[400],
    },
    border: {
      light: colorPalette.slate[700],
      medium: colorPalette.slate[600],
      dark: colorPalette.slate[500],
      brand: colorPalette.brand[600],
      accent: colorPalette.accent[600],
    },
    surface: {
      default: colorPalette.slate[900],
      hover: colorPalette.slate[800],
      active: colorPalette.slate[700],
      brand: colorPalette.brand[900],
      accent: colorPalette.accent[900],
    },
    shadow: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.3)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.4), 0 2px 4px -2px rgb(0 0 0 / 0.3)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.4), 0 4px 6px -4px rgb(0 0 0 / 0.3)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.4), 0 8px 10px -6px rgb(0 0 0 / 0.3)',
      brand: '0 0 0 3px rgb(59 130 246 / 0.4)',
    },
  },
} as const;

export const spacing = {
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  32: '8rem',
} as const;

export const typography = {
  fontFamilies: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    display: ['Cal Sans', 'Inter', 'system-ui', 'sans-serif'],
    mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeights: {
    tight: 1.1,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  letterSpacings: {
    tight: '-0.02em',
    normal: '0',
    wide: '0.02em',
    wider: '0.04em',
    widest: '0.1em',
  },
} as const;

export const borderRadius = {
  none: '0',
  sm: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  full: '9999px',
} as const;

export const transitions = {
  fast: '150ms ease',
  normal: '200ms ease',
  slow: '300ms ease',
  slower: '500ms ease',
} as const;

export const zIndices = {
  hide: -1,
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  modal: 1300,
  popover: 1400,
  toast: 1500,
  tooltip: 1600,
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  brand: '0 0 0 3px rgb(37 99 235 / 0.4)',
  accent: '0 0 0 3px rgb(234 179 8 / 0.4)',
} as const;

export const tokens = {
  colors,
  colorPalette,
  semanticColors,
  spacing,
  typography,
  borderRadius,
  transitions,
  zIndices,
  breakpoints,
  shadows,
} as const;

export type Colors = typeof colors;
export type ColorPalette = typeof colorPalette;
export type SemanticColors = typeof semanticColors;
export type Spacing = typeof spacing;
export type Typography = typeof typography;
export type BorderRadius = typeof borderRadius;
export type Transitions = typeof transitions;
export type ZIndices = typeof zIndices;
export type Breakpoints = typeof breakpoints;
export type Shadows = typeof shadows;
export type Tokens = typeof tokens;
