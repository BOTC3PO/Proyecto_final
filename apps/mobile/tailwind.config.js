const { colors } = require("./src/theme/tokens");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      // PLAN-R Parte 1 — vb-* para no chocar con las utilidades propias
      // de Tailwind (evita ambigüedad tipo "text-text").
      colors: Object.fromEntries(Object.entries(colors).map(([k, v]) => [`vb-${k}`, v])),
    },
  },
  plugins: [],
};