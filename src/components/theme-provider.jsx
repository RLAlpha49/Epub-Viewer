import { createContext, useContext, useEffect, useState } from "react";

const ThemeProviderContext = createContext({
  theme: "system",
  /**
   * Sets the theme for the application.
   * @returns {null} This method doesn't return anything.
   */
  setTheme: () => null,
});

/**
 * Provides a theme context for the application, managing theme state and updates.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be wrapped by the ThemeProvider.
 * @param {string} [props.defaultTheme="system"] - The default theme to use if none is stored.
 * @param {string} [props.storageKey="vite-ui-theme"] - The key used to store the theme in localStorage.
 * @returns {JSX.Element} A ThemeProviderContext.Provider wrapping the children with the current theme value.
 */
export function ThemeProvider({ children, defaultTheme = "system", storageKey = "vite-ui-theme", ...props }) {
  ```
  /**
   * Custom React hook to manage and persist the theme state
   * @param {void} No parameters
   * @returns {[string, function]} A tuple containing the current theme value and a function to update it
   */
  ```
  const [theme, setTheme] = useState(() => localStorage.getItem(storageKey) || defaultTheme);

  /**
   * Updates the document's root element class based on the current theme
   * @param {string} theme - The current theme ('light', 'dark', or 'system')
   * @returns {void} This effect does not return a value
   */
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    /**
     * Sets the theme and stores it in local storage
     * @param {string} theme - The theme to be set
     * @returns {void} This function doesn't return a value
     */
    setTheme: (theme) => {
      localStorage.setItem(storageKey, theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      /**
       * Custom hook to access the current theme context
       * @returns {Object} The current theme context
       * @throws {Error} If used outside of a ThemeProvider
       */
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};