import React, { createContext, useContext, useState } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

interface ThemeContextProps {
  theme: Theme;
  setAppTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: Theme.LIGHT,
  setAppTheme: () => {}
});

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  const setAppTheme = () => {
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK);
  };

  return (
    <ThemeContext.Provider value={{ theme, setAppTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useAppTheme = () => useContext(ThemeContext);
