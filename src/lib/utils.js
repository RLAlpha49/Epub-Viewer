import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

```
/**
 * Combines and merges CSS class names using the clsx and twMerge utilities.
 * @param {...(string|object|array)} inputs - CSS class names or objects to be combined.
 * @returns {string} A string of merged and deduplicated CSS class names.
 */
```
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
