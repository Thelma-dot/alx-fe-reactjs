/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Specify files to scan for classes
  theme: {
    extend: {}, // Customize Tailwind here if needed
  },
  darkMode: "class", // Use "media" for system preference or "class" for manual toggle
  plugins: [], // Add Tailwind plugins here if needed
};

  
