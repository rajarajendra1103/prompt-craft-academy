import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

const COLOR_THEMES = [
  { id: 'glacier', name: 'Glacier', color: 'hsl(199, 89%, 48%)' },
  { id: 'harvest', name: 'Harvest', color: 'hsl(25, 95%, 53%)' },
  { id: 'emerald', name: 'Emerald', color: 'hsl(160, 84%, 39%)' },
  { id: 'amethyst', name: 'Amethyst', color: 'hsl(270, 70%, 55%)' },
  { id: 'rose', name: 'Rose', color: 'hsl(350, 89%, 60%)' },
  { id: 'sunset', name: 'Sunset', color: 'hsl(15, 95%, 55%)' },
  { id: 'ocean', name: 'Ocean', color: 'hsl(200, 98%, 39%)' },
];

export function ThemeProvider({ children }) {
  // Mode State (Light/Dark)
  const [mode, setMode] = useState(() => {
    return localStorage.getItem('promptcraft-mode') || 'light';
  });

  // Color Theme State
  const [colorTheme, setColorTheme] = useState(() => {
    return localStorage.getItem('promptcraft-color') || 'glacier';
  });

  // Apply Mode
  useEffect(() => {
    const root = document.documentElement;
    if (mode === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('promptcraft-mode', mode);
  }, [mode]);

  // Apply Color Theme
  useEffect(() => {
    const root = document.documentElement;
    // Remove old theme classes
    COLOR_THEMES.forEach(t => root.classList.remove(`theme-${t.id}`));
    // Add new theme class
    root.classList.add(`theme-${colorTheme}`);
    localStorage.setItem('promptcraft-color', colorTheme);
  }, [colorTheme]);

  const toggleMode = () => {
    setMode(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{
      mode,
      setMode,
      toggleMode,
      colorTheme,
      setColorTheme,
      themes: COLOR_THEMES
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
