/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      paytone: ["Paytone One", "sans-serif"],
    },
    extend: {
      colors: {
        accent: "var(--color-accent)",
        accent_hover: "var(--color-accent-hover)",
      },
    },
    keyframes: {
      shimmer: {
        "100%": { transform: "translateX(100%)" },
      },
    },
  },
  plugins: [],
};
