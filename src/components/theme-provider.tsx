"use client"

import { useEffect } from "react"
import { useThemeStore } from "@/stores/theme-store"

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {

  const theme = useThemeStore((s) => s.theme)
  const hydrated = useThemeStore((s) => s.hydrated)

  useEffect(() => {

    if (!hydrated) return

    if (theme === "light") {
      document.documentElement.classList.add("light")
    } else {
      document.documentElement.classList.remove("light")
    }

  }, [theme, hydrated])

  return children
}