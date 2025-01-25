import plugin from "tailwindcss/plugin";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#111",
        green: "#0f0",
        blue: "#00f",
        darkGray: "#222",



        background: "var(--background)",
        foreground: "var(--text)",
        primary: {
          light: "var(--primary-light)",
          DEFAULT: "var(--primary)",
          dark: "var(--primary-dark)",
        },
        secondary: {
          light: "var(--secondary-light)",
          DEFAULT: "var(--secondary)",
          dark: "var(--secondary-dark)",
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      const primary = theme("colors.primary");
      const secondary = theme("colors.secondary");

      addComponents({
        ".primary": {
          backgroundColor: primary?.DEFAULT,
          color: theme("colors.foreground"),
          padding: "0.5rem 1rem",
          borderRadius: "0.375rem",
          transition: "background-color 0.3s",
          "&:hover": {
            backgroundColor: primary?.dark,
          },
        },
        ".secondary": {
          backgroundColor: secondary?.DEFAULT,
          color: theme("colors.foreground"),
          padding: "0.5rem 1rem",
          borderRadius: "0.375rem",
          transition: "background-color 0.3s",
          "&:hover": {
            backgroundColor: secondary?.dark,
          },
        },
      });
    }),
  ],
} satisfies Config;
