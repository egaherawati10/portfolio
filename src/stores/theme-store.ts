import { create } from "zustand"
import { persist } from "zustand/middleware"

type Theme = "dark" | "light"

type ThemeState = {
  theme: Theme
  hydrated: boolean
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
  setHydrated: () => void
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: "dark",
      hydrated: false,

      toggleTheme: () => {
        const newTheme = get().theme === "dark" ? "light" : "dark"
        set({ theme: newTheme })
      },

      setTheme: (theme) => set({ theme }),

      setHydrated: () => set({ hydrated: true }),
    }),
    {
      name: "theme-storage",

      onRehydrateStorage: () => (state) => {
        state?.setHydrated()
      },
    }
  )
)