import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemeToggle() {
const { dark, toggleTheme } = useContext(ThemeContext);

return ( <button onClick={toggleTheme}>
{dark ? 'Light Mode' : 'Dark Mode'} </button>
);
}

export default ThemeToggle;
