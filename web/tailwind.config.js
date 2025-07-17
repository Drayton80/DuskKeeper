/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: {
          DEFAULT: "hsl(var(--text) / <alpha-value>)",
          muted: "hsl(var(--text-muted) / <alpha-value>)",
          inverted: "hsl(var(--background) / <alpha-value>)",
        },
        background: {
          DEFAULT: "hsl(var(--background) / <alpha-value>)",
          surface: "hsl(var(--background-surface) / <alpha-value>)",
          hover: "hsl(var(--background-hover) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          hover: "hsl(var(--primary-hover) / <alpha-value>)",
          active: "hsl(var(--primary-active) / <alpha-value>)",
          disabled: "hsl(var(--primary-disabled) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          hover: "hsl(var(--secondary-hover) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          hover: "hsl(var(--accent-hover) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
        },
        border: {
          DEFAULT: "hsl(var(--border) / <alpha-value>)",
          focus: "hsl(var(--border-focus) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          hover: "hsl(var(--destructive-hover) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        success: {
          DEFAULT: "hsl(var(--success) / <alpha-value>)",
          hover: "hsl(var(--success-hover) / <alpha-value>)",
          foreground: "hsl(var(--success-foreground) / <alpha-value>)",
        },
      },
    },
  },
  plugins: [],
};
