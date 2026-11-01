import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
const [dark, setDark] = useState(false);

function toggleTheme() {
setDark(!dark);
}

return (
<ThemeContext.Provider value={{ dark, toggleTheme }}>
{children}
</ThemeContext.Provider>
);
}
