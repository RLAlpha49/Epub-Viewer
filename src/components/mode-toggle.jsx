import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button.jsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu.jsx";
import { useTheme } from "./theme-provider.jsx";

/**
 * Renders a dropdown menu component for toggling between light, dark, and system themes.
 * @returns {JSX.Element} A DropdownMenu component with theme toggle functionality.
 */
export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          /**
           * Sets the theme to light mode
           * @param {Function} onClick - The function to be called when the menu item is clicked
           * @returns {JSX.Element} A dropdown menu item component for switching to light theme
           */
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        /**
         * Sets the theme to dark mode
         * @param {void} - This function doesn't accept any parameters
         * @returns {void} This function doesn't return a value
         */
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        ```
        /**
         * Sets the theme to "system"
         * @param {Function} onClick - The function to be called when the menu item is clicked
         * @returns {JSX.Element} A DropdownMenuItem component with an onClick handler to set the theme to "system"
         */
        ```
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}