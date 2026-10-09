"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

/** Runs before paint so the page never flashes the wrong theme. */
export const themeScript = `(function(){try{var t=localStorage.getItem("shum-theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme="dark"}})()`;

export function ThemeToggle({ labels }: { labels: { toLight: string; toDark: string } }) {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
  }, []);

  const next: Theme = theme === "light" ? "dark" : "light";
  const label = next === "light" ? labels.toLight : labels.toDark;

  const toggle = () => {
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("shum-theme", next);
    } catch {
      // Private mode: the choice lasts until the tab closes.
    }
    setTheme(next);
  };

  return (
    <button type="button" className="theme-toggle" onClick={toggle} aria-label={label} title={label}>
      <svg viewBox="0 0 7 7" width="18" height="18" shapeRendering="crispEdges" aria-hidden>
        {theme === "light" ? (
          <path d="M2 0h3v1H2zM1 1h1v1H1zM5 1h1v1H5zM0 2h1v3H0zM6 2h1v3H6zM1 5h1v1H1zM5 5h1v1H5zM2 6h3v1H2zM2 2h3v3H2z" />
        ) : (
          <path d="M2 0h3v1H2zM1 1h2v1H1zM0 2h2v3H0zM1 5h2v1H1zM2 6h3v1H2zM5 5h1v1H5zM6 4h1v1H6z" />
        )}
      </svg>
    </button>
  );
}
