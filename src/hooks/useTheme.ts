// The initial theme is applied by an inline script in index.html before first paint,
// so the toggle reads and writes the DOM directly instead of holding React state.
// Icons swap via the `dark:` variant, which keeps prerendered HTML and hydration in sync.
export function useTheme() {
  const toggleTheme = () => {
    const root = document.documentElement;
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    root.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage unavailable (private mode); the theme still applies for this visit.
    }
  };

  return { toggleTheme };
}
