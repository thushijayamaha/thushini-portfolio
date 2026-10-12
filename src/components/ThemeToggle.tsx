
"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

const THEME_KEY = "portfolio-theme";
const THEME_EVENT = "portfolio-theme-change";

function subscribe(callback: () => void) {
  window.addEventListener(THEME_EVENT, callback);
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener(THEME_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot() {
  return document.documentElement.classList.contains("dark");
}

function getServerSnapshot() {
  return false;
}

export default function ThemeToggle() {
  const dark = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  function toggleTheme() {
    const next = !document.documentElement.classList.contains("dark");

    document.documentElement.classList.toggle("dark", next);

    localStorage.setItem(
      THEME_KEY,
      next ? "dark" : "light"
    );

    window.dispatchEvent(new Event(THEME_EVENT));
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Light Mode" : "Dark Mode"}
      className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-200 bg-violet-50 text-violet-600 transition-all duration-300 hover:bg-violet-100 dark:border-violet-500/30 dark:bg-[#21172F] dark:text-violet-300 dark:hover:bg-[#302044]"
    >
      {dark ? <Sun size={21} /> : <Moon size={21} />}
    </button>
  );
}
