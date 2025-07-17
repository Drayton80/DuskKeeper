/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        "background-primary": "var(--color-background)",
        "background-secondary": "var(--color-foreground)",
        "background-tertiary": "var(--color-surface)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        destructive: "var(--color-destructive)",
        highlight: "var(--color-highlight)",
        muted: "var(--color-muted)",
        border: "var(--color-border)",
        "focus-ring": "var(--color-focus-ring)",
        shadow: "var(--color-shadow)",
      },
    },
  },
  plugins: [],
};
