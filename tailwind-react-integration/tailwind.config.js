/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Added for older Tailwind compatibility
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Actual Tailwind v3 config
  theme: {
    extend: {},
  },
  variants: {
    extend: {}, // Add variants if needed (not required in Tailwind v3)
  },
  darkMode: "class",
  plugins: [],
};
