"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="
        inline-flex items-center justify-center
        h-10 w-10 rounded-full
        border border-black/10 bg-white text-black
        hover:bg-black/5 transition
        dark:border-white/10 dark:bg-black dark:text-white dark:hover:bg-white/10
      "
      title={isDark ? "Switch to Light" : "Switch to Dark"}
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}
