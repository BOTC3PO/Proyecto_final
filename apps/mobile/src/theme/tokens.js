/**
 * PLAN-R Parte 1 — paleta única mapeada desde el tema default de
 * `apps/web/src/index.css` (`:root`). Los 8 temas web NO se portan acá
 * (decisión #5.1 del plan); si hace falta más de una paleta, ese es el
 * momento de revisar esto.
 *
 * CommonJS a propósito: lo lee tanto `tailwind.config.js` (Node puro,
 * sin transpilar) como el código de la app (Metro resuelve .js sin
 * problema). Tipos en `tokens.d.ts` al lado.
 */
const colors = {
  bg: "#f1f5f9",
  surface: "#ffffff",
  border: "#e2e8f0",
  text: "#1e293b",
  muted: "#64748b",
  primary: "#2563eb",
  accent: "#7c3aed",
  success: "#16a34a",
  warning: "#d97706",
  danger: "#dc2626",
  navbg: "#1e40af",
  navtext: "#ffffff",
};

module.exports = { colors };
