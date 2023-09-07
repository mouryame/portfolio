/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "black-900": "#000000",
      "black-700": "#222222",
      white: "#ffffff",
      "gray-100": "#efefef",
      "green-100": "#4df77a",
      "green-700": "#0aab35",
    },
    extend: {},
  },
  plugins: [],
};
