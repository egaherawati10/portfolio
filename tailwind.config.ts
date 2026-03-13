import type { Config } from "tailwindcss"

const config: Config = {

  darkMode: "class",

  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {

    container: {

      center: true,
      padding: "1.5rem",

      screens: {
        "2xl": "1200px",
      },

    },

    extend: {

      colors: {

        background: "var(--bg)",
        surface: "var(--surface)",

        text: "var(--text)",
        muted: "var(--text-muted)",

        border: "var(--border)",

        primary: "var(--primary)",
        secondary: "var(--secondary)",

      },

      borderRadius: {

        lg: "10px",
        xl: "14px",
        "2xl": "20px",

      },

      transitionTimingFunction: {

        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",

      },

      boxShadow: {

        glow: "0 0 40px rgba(56,189,248,0.15)",

      },

    },

  },

  plugins: [],

}

export default config