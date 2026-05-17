
// Import custom theme if it exists
let customTheme = null;
try {
  // Try to load the custom theme directly
  const custom = require('./custom/custom');
  customTheme = custom.customTheme;
} catch (error) {
  // Custom theme not found, that's okay - use a fallback
  customTheme = {
    primary: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
      950: "#020617"
    },
    highlight: {
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d",
      950: "#450a0a"
    }
  };
}

// Theme color definitions
export const themes = {
  gruvbox: {
    primary: {
      50: '#fbf1c7',
      100: '#f2e5bc',
      200: '#ebdbb2',
      300: '#d5c4a1',
      400: '#bdae93',
      500: '#a89984',
      600: '#928374',
      700: '#7c6f64',
      800: '#504945',
      900: '#3c3836',
      950: '#1d2021',
    },
    highlight: {
      50: 'oklch(0.95 0.196 109.119)',
      100: 'oklch(0.881 0.182 109.119)',
      200: 'oklch(0.811 0.167 109.119)',
      300: 'oklch(0.742 0.153 109.119)',
      400: 'oklch(0.673 0.139 109.119)',
      500: 'oklch(0.603 0.124 109.119)',
      600: 'oklch(0.534 0.11 109.119)',
      700: 'oklch(0.464 0.096 109.119)',
      800: 'oklch(0.395 0.081 109.119)',
      900: 'oklch(0.256 0.053 109.119)',
    }
  },
  ...(customTheme ? { custom: customTheme } : {})
} as const;

// Valid theme names type
export type ThemeName = keyof typeof themes;

// Helper function to get theme
export function getTheme(themeName: ThemeName) {
  return themes[themeName];
}

// Get all theme names
export function getThemeNames(): ThemeName[] {
  return Object.keys(themes) as ThemeName[];
}

// Check if a theme name is a custom theme (not in built-in themes)
export function isCustomTheme(themeName: string): boolean {
  const builtInThemes = [
    'minimal', 'oxygen', 'atom', 'ayu', 'catppuccin', 'charcoal', 'dracula', 
    'everforest', 'flexoki', 'gruvbox', 'macos', 'nord', 'obsidian', 
    'rose-pine', 'sky', 'solarized', 'things', 'custom'
  ];
  return !builtInThemes.includes(themeName);
}

// Load a custom theme by filename (for dynamic loading)
export async function loadCustomTheme(themeName: string) {
  try {
    const customTheme = await import(`./custom/${themeName}`);
    return customTheme.customTheme;
  } catch (error) {
    console.warn(`Custom theme "${themeName}" not found in themes/custom/`);
    return null;
  }
}