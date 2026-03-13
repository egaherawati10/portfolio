"use client"

import { Sun, Moon } from "lucide-react"
import { useThemeStore } from "@/stores/theme-store"

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore()

  return (
    <button
      onClick={toggleTheme}
      className="
      flex items-center justify-center
      w-9 h-9
      rounded-lg
      border border-border
      bg-surface/60
      backdrop-blur
      transition-all
      hover:scale-105
      hover:shadow-[0_0_10px_rgba(20,184,166,0.4)]
      "
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  )
}