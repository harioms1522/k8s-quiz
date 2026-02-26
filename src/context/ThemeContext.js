import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { ACTIVE_THEME, getCSSVariables, THEME_PALETTES } from '../config/themeConfig';

const ThemeContext = createContext(null);

/**
 * Applies CSS custom properties from the active theme onto :root
 * so every CSS file picks them up automatically.
 */
const applyThemeToDOM = (themeKey) => {
  const vars = getCSSVariables(themeKey);
  const root = document.documentElement;

  Object.entries(vars).forEach(([prop, value]) => {
    root.style.setProperty(prop, value);
  });
};

export const ThemeProvider = ({ children, initialTheme }) => {
  const [themeKey, setThemeKey] = useState(initialTheme || ACTIVE_THEME);

  useEffect(() => {
    applyThemeToDOM(themeKey);
  }, [themeKey]);

  const switchTheme = useCallback((newKey) => {
    if (THEME_PALETTES[newKey]) {
      setThemeKey(newKey);
    }
  }, []);

  const value = {
    themeKey,
    themeName: (THEME_PALETTES[themeKey] || THEME_PALETTES[ACTIVE_THEME]).name,
    switchTheme,
    availableThemes: Object.entries(THEME_PALETTES).map(([key, t]) => ({
      key,
      name: t.name,
      description: t.description,
    })),
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return ctx;
};

export default ThemeContext;
