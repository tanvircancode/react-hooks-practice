import React, { useState } from "react";

export const ThemeContext = React.createContext();
export const ThemeUpdateContext = React.createContext();

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(false);
   function toggleTheme() {
       setDarkTheme(!darkTheme);
     }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
