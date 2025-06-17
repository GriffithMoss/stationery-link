/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7ec4cf', // pastel blue
        secondary: '#f7b2ad', // pastel pink
        accent: '#ffe066', // pastel yellow
        background: '#f9f9f9',
        foreground: '#22223b',
        card: '#fff1f1',
        info: '#a3c9a8', // pastel green
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
