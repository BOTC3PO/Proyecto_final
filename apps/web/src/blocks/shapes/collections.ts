import type { ShapeBlock } from "../types"

// ─── Básica ───────────────────────────────────────────────────────────────────

const basicaShapes: ShapeDef[] = [
  {
    id: "rectangulo",
    label: "Rectángulo",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <rect x="4" y="14" width="52" height="32" rx="2" fill="#e2e8f0" stroke="#1e293b" stroke-width="2"/>
  <text x="30" y="33" font-size="9" text-anchor="middle" dominant-baseline="middle" fill="#1e293b" font-family="sans-serif">texto</text>
</svg>`,
  },
  {
    id: "elipse",
    label: "Elipse",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="30" cy="30" rx="27" ry="18" fill="#e2e8f0" stroke="#1e293b" stroke-width="2"/>
  <text x="30" y="30" font-size="9" text-anchor="middle" dominant-baseline="middle" fill="#1e293b" font-family="sans-serif">texto</text>
</svg>`,
  },
  {
    id: "rombo",
    label: "Rombo",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <polygon points="30,4 56,30 30,56 4,30" fill="#e2e8f0" stroke="#1e293b" stroke-width="2"/>
  <text x="30" y="30" font-size="9" text-anchor="middle" dominant-baseline="middle" fill="#1e293b" font-family="sans-serif">texto</text>
</svg>`,
  },
  {
    id: "triangulo",
    label: "Triángulo",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <polygon points="30,4 57,56 3,56" fill="#e2e8f0" stroke="#1e293b" stroke-width="2"/>
</svg>`,
  },
  {
    id: "flecha_derecha",
    label: "Flecha →",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <polygon points="4,22 40,22 40,12 56,30 40,48 40,38 4,38" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
</svg>`,
  },
  {
    id: "flecha_abajo",
    label: "Flecha ↓",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <polygon points="22,4 22,40 12,40 30,56 48,40 38,40 38,4" fill="#93c5fd" stroke="#1e293b" stroke-width="1.5"/>
</svg>`,
  },
]

export type ShapeDef = {
  id: string
  label: string
  svg: string   // SVG completo con viewBox="0 0 60 60", sin width/height fijos
}

export type CollectionDef = {
  id: string
  label: string
  shapes: ShapeDef[]
}

// ─── Física ──────────────────────────────────────────────────────────────────

const fisicaShapes: ShapeDef[] = [
  {
    id: "masa",
    label: "Masa",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <rect x="10" y="18" width="40" height="32" rx="2" fill="#94a3b8" stroke="#1e293b" stroke-width="2"/>
  <text x="30" y="38" font-size="11" text-anchor="middle" fill="#1e293b" font-family="sans-serif" font-weight="bold">m</text>
</svg>`,
  },
  {
    id: "resorte",
    label: "Resorte",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <line x1="30" y1="3" x2="30" y2="12" stroke="#1e293b" stroke-width="2"/>
  <polyline points="30,12 18,17 42,23 18,29 42,35 18,41 30,46" fill="none" stroke="#1e293b" stroke-width="2" stroke-linejoin="round"/>
  <line x1="30" y1="46" x2="30" y2="57" stroke="#1e293b" stroke-width="2"/>
</svg>`,
  },
  {
    id: "polea",
    label: "Polea",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <line x1="5" y1="10" x2="55" y2="10" stroke="#1e293b" stroke-width="2.5"/>
  <line x1="30" y1="10" x2="30" y2="20" stroke="#1e293b" stroke-width="2"/>
  <circle cx="30" cy="38" r="18" fill="#e2e8f0" stroke="#1e293b" stroke-width="2"/>
  <circle cx="30" cy="38" r="5" fill="#94a3b8" stroke="#1e293b" stroke-width="1.5"/>
</svg>`,
  },
  {
    id: "pendulo",
    label: "Péndulo",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <line x1="5" y1="5" x2="55" y2="5" stroke="#1e293b" stroke-width="2.5"/>
  <line x1="30" y1="5" x2="44" y2="44" stroke="#1e293b" stroke-width="1.5"/>
  <circle cx="44" cy="52" r="7" fill="#94a3b8" stroke="#1e293b" stroke-width="2"/>
</svg>`,
  },
  {
    id: "plano_inclinado",
    label: "Plano inclinado",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <polygon points="5,55 55,55 5,12" fill="#cbd5e1" stroke="#1e293b" stroke-width="2"/>
  <line x1="5" y1="12" x2="5" y2="18" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="5" y1="18" x2="11" y2="18" stroke="#1e293b" stroke-width="1.5"/>
</svg>`,
  },
  {
    id: "flecha_fuerza",
    label: "Fuerza",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <polygon points="5,24 37,24 37,14 55,30 37,46 37,36 5,36" fill="#2563eb" stroke="#1e293b" stroke-width="1.5"/>
</svg>`,
  },
  {
    id: "vector",
    label: "Vector",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <line x1="6" y1="42" x2="48" y2="16" stroke="#1e293b" stroke-width="2"/>
  <polygon points="48,16 37,16 40,25" fill="#1e293b"/>
  <text x="30" y="55" font-size="8" text-anchor="middle" fill="#1e293b" font-family="sans-serif">|v|</text>
</svg>`,
  },
  {
    id: "carga_positiva",
    label: "Carga +",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <circle cx="30" cy="30" r="22" fill="#dbeafe" stroke="#1e293b" stroke-width="2"/>
  <line x1="20" y1="30" x2="40" y2="30" stroke="#1e293b" stroke-width="2.5"/>
  <line x1="30" y1="20" x2="30" y2="40" stroke="#1e293b" stroke-width="2.5"/>
</svg>`,
  },
  {
    id: "carga_negativa",
    label: "Carga -",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <circle cx="30" cy="30" r="22" fill="#fce7f3" stroke="#1e293b" stroke-width="2"/>
  <line x1="20" y1="30" x2="40" y2="30" stroke="#1e293b" stroke-width="2.5"/>
</svg>`,
  },
  {
    id: "pared",
    label: "Pared (soporte)",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <line x1="14" y1="6" x2="14" y2="54" stroke="#1e293b" stroke-width="3"/>
  <line x1="14" y1="12" x2="4" y2="22" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="14" y1="20" x2="4" y2="30" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="14" y1="28" x2="4" y2="38" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="14" y1="36" x2="4" y2="46" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="14" y1="44" x2="4" y2="54" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="14" y1="30" x2="56" y2="30" stroke="#1e293b" stroke-width="2"/>
</svg>`,
  },
  {
    id: "termometro",
    label: "Termómetro",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <rect x="26" y="6" width="8" height="34" rx="4" fill="#e2e8f0" stroke="#1e293b" stroke-width="2"/>
  <rect x="28" y="20" width="4" height="20" rx="2" fill="#ef4444"/>
  <circle cx="30" cy="48" r="9" fill="#ef4444" stroke="#1e293b" stroke-width="2"/>
</svg>`,
  },
  {
    id: "lupa",
    label: "Lupa",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <circle cx="23" cy="23" r="17" fill="#e2e8f0" stroke="#1e293b" stroke-width="2"/>
  <circle cx="23" cy="23" r="11" fill="white" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="35" y1="35" x2="54" y2="54" stroke="#1e293b" stroke-width="3.5" stroke-linecap="round"/>
</svg>`,
  },
]

// ─── Eléctrica ────────────────────────────────────────────────────────────────

const electricaShapes: ShapeDef[] = [
  {
    id: "resistencia",
    label: "Resistencia",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <line x1="3" y1="30" x2="17" y2="30" stroke="#1e293b" stroke-width="2"/>
  <rect x="17" y="20" width="26" height="20" fill="#fef9c3" stroke="#1e293b" stroke-width="2"/>
  <line x1="43" y1="30" x2="57" y2="30" stroke="#1e293b" stroke-width="2"/>
</svg>`,
  },
  {
    id: "capacitor",
    label: "Capacitor",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <line x1="3" y1="30" x2="24" y2="30" stroke="#1e293b" stroke-width="2"/>
  <line x1="24" y1="14" x2="24" y2="46" stroke="#1e293b" stroke-width="3"/>
  <line x1="36" y1="14" x2="36" y2="46" stroke="#1e293b" stroke-width="3"/>
  <line x1="36" y1="30" x2="57" y2="30" stroke="#1e293b" stroke-width="2"/>
</svg>`,
  },
  {
    id: "inductor",
    label: "Inductor",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <line x1="3" y1="30" x2="11" y2="30" stroke="#1e293b" stroke-width="2"/>
  <path d="M11,30 A6,6 0 0,1 23,30" fill="none" stroke="#1e293b" stroke-width="2"/>
  <path d="M23,30 A6,6 0 0,1 35,30" fill="none" stroke="#1e293b" stroke-width="2"/>
  <path d="M35,30 A6,6 0 0,1 47,30" fill="none" stroke="#1e293b" stroke-width="2"/>
  <line x1="47" y1="30" x2="57" y2="30" stroke="#1e293b" stroke-width="2"/>
</svg>`,
  },
  {
    id: "fuente_dc",
    label: "Fuente DC",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <line x1="3" y1="30" x2="14" y2="30" stroke="#1e293b" stroke-width="2"/>
  <circle cx="30" cy="30" r="16" fill="#f0fdf4" stroke="#1e293b" stroke-width="2"/>
  <line x1="22" y1="27" x2="28" y2="27" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="25" y1="24" x2="25" y2="30" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="32" y1="27" x2="38" y2="27" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="46" y1="30" x2="57" y2="30" stroke="#1e293b" stroke-width="2"/>
</svg>`,
  },
  {
    id: "led",
    label: "LED",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <line x1="3" y1="30" x2="17" y2="30" stroke="#1e293b" stroke-width="2"/>
  <polygon points="17,18 17,42 37,30" fill="#fde68a" stroke="#1e293b" stroke-width="2"/>
  <line x1="37" y1="18" x2="37" y2="42" stroke="#1e293b" stroke-width="2"/>
  <line x1="37" y1="30" x2="57" y2="30" stroke="#1e293b" stroke-width="2"/>
  <line x1="41" y1="20" x2="49" y2="12" stroke="#1e293b" stroke-width="1.5" stroke-linecap="round"/>
  <line x1="45" y1="24" x2="53" y2="16" stroke="#1e293b" stroke-width="1.5" stroke-linecap="round"/>
  <polyline points="47,12 49,12 49,14" fill="none" stroke="#1e293b" stroke-width="1.5" stroke-linecap="round"/>
  <polyline points="51,16 53,16 53,18" fill="none" stroke="#1e293b" stroke-width="1.5" stroke-linecap="round"/>
</svg>`,
  },
  {
    id: "switch",
    label: "Switch",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <line x1="3" y1="30" x2="18" y2="30" stroke="#1e293b" stroke-width="2"/>
  <circle cx="18" cy="30" r="3" fill="#1e293b"/>
  <line x1="21" y1="30" x2="40" y2="18" stroke="#1e293b" stroke-width="2"/>
  <circle cx="42" cy="30" r="3" fill="#1e293b"/>
  <line x1="42" y1="30" x2="57" y2="30" stroke="#1e293b" stroke-width="2"/>
</svg>`,
  },
  {
    id: "tierra",
    label: "Tierra",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <line x1="30" y1="4" x2="30" y2="26" stroke="#1e293b" stroke-width="2"/>
  <line x1="10" y1="26" x2="50" y2="26" stroke="#1e293b" stroke-width="2.5"/>
  <line x1="16" y1="34" x2="44" y2="34" stroke="#1e293b" stroke-width="2"/>
  <line x1="22" y1="42" x2="38" y2="42" stroke="#1e293b" stroke-width="2"/>
  <line x1="27" y1="50" x2="33" y2="50" stroke="#1e293b" stroke-width="2"/>
</svg>`,
  },
  {
    id: "voltimetro",
    label: "Voltímetro",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <line x1="3" y1="30" x2="12" y2="30" stroke="#1e293b" stroke-width="2"/>
  <circle cx="30" cy="30" r="18" fill="#fef3c7" stroke="#1e293b" stroke-width="2"/>
  <text x="30" y="35" font-size="16" text-anchor="middle" fill="#1e293b" font-family="sans-serif" font-weight="bold">V</text>
  <line x1="48" y1="30" x2="57" y2="30" stroke="#1e293b" stroke-width="2"/>
</svg>`,
  },
  {
    id: "amperimetro",
    label: "Amperímetro",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <line x1="3" y1="30" x2="12" y2="30" stroke="#1e293b" stroke-width="2"/>
  <circle cx="30" cy="30" r="18" fill="#dcfce7" stroke="#1e293b" stroke-width="2"/>
  <text x="30" y="35" font-size="16" text-anchor="middle" fill="#1e293b" font-family="sans-serif" font-weight="bold">A</text>
  <line x1="48" y1="30" x2="57" y2="30" stroke="#1e293b" stroke-width="2"/>
</svg>`,
  },
  {
    id: "fusible",
    label: "Fusible",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <line x1="3" y1="30" x2="13" y2="30" stroke="#1e293b" stroke-width="2"/>
  <rect x="13" y="22" width="34" height="16" fill="#fef9c3" stroke="#1e293b" stroke-width="2"/>
  <path d="M18,30 Q22,22 26,30 Q30,38 34,30 Q38,22 42,30" fill="none" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="47" y1="30" x2="57" y2="30" stroke="#1e293b" stroke-width="2"/>
</svg>`,
  },
  {
    id: "motor",
    label: "Motor",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <line x1="3" y1="30" x2="12" y2="30" stroke="#1e293b" stroke-width="2"/>
  <circle cx="30" cy="30" r="18" fill="#dbeafe" stroke="#1e293b" stroke-width="2"/>
  <text x="30" y="35" font-size="16" text-anchor="middle" fill="#1e293b" font-family="sans-serif" font-weight="bold">M</text>
  <line x1="48" y1="30" x2="57" y2="30" stroke="#1e293b" stroke-width="2"/>
</svg>`,
  },
  {
    id: "transformador",
    label: "Transformador",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <line x1="3" y1="30" x2="11" y2="30" stroke="#1e293b" stroke-width="2"/>
  <path d="M11,22 A8,8 0 0,1 11,38" fill="none" stroke="#1e293b" stroke-width="2"/>
  <path d="M11,30 A4,4 0 0,1 19,30" fill="none" stroke="#1e293b" stroke-width="2"/>
  <path d="M19,30 A4,4 0 0,1 27,30" fill="none" stroke="#1e293b" stroke-width="2"/>
  <line x1="29" y1="14" x2="29" y2="46" stroke="#1e293b" stroke-width="2"/>
  <line x1="33" y1="14" x2="33" y2="46" stroke="#1e293b" stroke-width="2"/>
  <path d="M49,22 A8,8 0 0,0 49,38" fill="none" stroke="#1e293b" stroke-width="2"/>
  <path d="M41,30 A4,4 0 0,0 49,30" fill="none" stroke="#1e293b" stroke-width="2"/>
  <path d="M33,30 A4,4 0 0,0 41,30" fill="none" stroke="#1e293b" stroke-width="2"/>
  <line x1="49" y1="30" x2="57" y2="30" stroke="#1e293b" stroke-width="2"/>
</svg>`,
  },
]

// ─── Lógica ───────────────────────────────────────────────────────────────────

const logicaShapes: ShapeDef[] = [
  {
    id: "and_gate",
    label: "AND",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <line x1="3" y1="22" x2="18" y2="22" stroke="#1e293b" stroke-width="2"/>
  <line x1="3" y1="38" x2="18" y2="38" stroke="#1e293b" stroke-width="2"/>
  <path d="M18,14 L18,46 Q50,46 50,30 Q50,14 18,14 Z" fill="#dbeafe" stroke="#1e293b" stroke-width="2"/>
  <line x1="50" y1="30" x2="57" y2="30" stroke="#1e293b" stroke-width="2"/>
</svg>`,
  },
  {
    id: "or_gate",
    label: "OR",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <line x1="3" y1="22" x2="18" y2="22" stroke="#1e293b" stroke-width="2"/>
  <line x1="3" y1="38" x2="18" y2="38" stroke="#1e293b" stroke-width="2"/>
  <path d="M14,14 Q24,30 14,46 Q36,43 52,30 Q36,17 14,14 Z" fill="#dcfce7" stroke="#1e293b" stroke-width="2"/>
  <line x1="52" y1="30" x2="57" y2="30" stroke="#1e293b" stroke-width="2"/>
</svg>`,
  },
  {
    id: "not_gate",
    label: "NOT",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <line x1="3" y1="30" x2="14" y2="30" stroke="#1e293b" stroke-width="2"/>
  <polygon points="14,14 14,46 44,30" fill="#fce7f3" stroke="#1e293b" stroke-width="2"/>
  <circle cx="48" cy="30" r="4" fill="white" stroke="#1e293b" stroke-width="2"/>
  <line x1="52" y1="30" x2="57" y2="30" stroke="#1e293b" stroke-width="2"/>
</svg>`,
  },
  {
    id: "nand_gate",
    label: "NAND",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <line x1="3" y1="22" x2="16" y2="22" stroke="#1e293b" stroke-width="2"/>
  <line x1="3" y1="38" x2="16" y2="38" stroke="#1e293b" stroke-width="2"/>
  <path d="M16,14 L16,46 Q45,46 45,30 Q45,14 16,14 Z" fill="#dbeafe" stroke="#1e293b" stroke-width="2"/>
  <circle cx="49" cy="30" r="4" fill="white" stroke="#1e293b" stroke-width="2"/>
  <line x1="53" y1="30" x2="57" y2="30" stroke="#1e293b" stroke-width="2"/>
</svg>`,
  },
  {
    id: "nor_gate",
    label: "NOR",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <line x1="3" y1="22" x2="16" y2="22" stroke="#1e293b" stroke-width="2"/>
  <line x1="3" y1="38" x2="16" y2="38" stroke="#1e293b" stroke-width="2"/>
  <path d="M12,14 Q22,30 12,46 Q34,43 48,30 Q34,17 12,14 Z" fill="#dcfce7" stroke="#1e293b" stroke-width="2"/>
  <circle cx="52" cy="30" r="4" fill="white" stroke="#1e293b" stroke-width="2"/>
  <line x1="56" y1="30" x2="57" y2="30" stroke="#1e293b" stroke-width="2"/>
</svg>`,
  },
  {
    id: "xor_gate",
    label: "XOR",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <line x1="3" y1="22" x2="18" y2="22" stroke="#1e293b" stroke-width="2"/>
  <line x1="3" y1="38" x2="18" y2="38" stroke="#1e293b" stroke-width="2"/>
  <path d="M9,14 Q19,30 9,46" fill="none" stroke="#1e293b" stroke-width="2"/>
  <path d="M14,14 Q24,30 14,46 Q36,43 52,30 Q36,17 14,14 Z" fill="#fef3c7" stroke="#1e293b" stroke-width="2"/>
  <line x1="52" y1="30" x2="57" y2="30" stroke="#1e293b" stroke-width="2"/>
</svg>`,
  },
  {
    id: "buffer",
    label: "Buffer",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <line x1="3" y1="30" x2="14" y2="30" stroke="#1e293b" stroke-width="2"/>
  <polygon points="14,14 14,46 46,30" fill="#dbeafe" stroke="#1e293b" stroke-width="2"/>
  <line x1="46" y1="30" x2="57" y2="30" stroke="#1e293b" stroke-width="2"/>
</svg>`,
  },
  {
    id: "xnor_gate",
    label: "XNOR",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <line x1="3" y1="22" x2="16" y2="22" stroke="#1e293b" stroke-width="2"/>
  <line x1="3" y1="38" x2="16" y2="38" stroke="#1e293b" stroke-width="2"/>
  <path d="M9,14 Q19,30 9,46" fill="none" stroke="#1e293b" stroke-width="2"/>
  <path d="M14,14 Q24,30 14,46 Q34,43 48,30 Q34,17 14,14 Z" fill="#fef3c7" stroke="#1e293b" stroke-width="2"/>
  <circle cx="52" cy="30" r="4" fill="white" stroke="#1e293b" stroke-width="2"/>
  <line x1="56" y1="30" x2="57" y2="30" stroke="#1e293b" stroke-width="2"/>
</svg>`,
  },
  {
    id: "flip_flop",
    label: "Flip-Flop D",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <rect x="16" y="8" width="30" height="44" fill="#ede9fe" stroke="#1e293b" stroke-width="2"/>
  <line x1="3" y1="18" x2="16" y2="18" stroke="#1e293b" stroke-width="1.5"/>
  <text x="19" y="22" font-size="7" fill="#1e293b" font-family="sans-serif">D</text>
  <line x1="3" y1="36" x2="16" y2="36" stroke="#1e293b" stroke-width="1.5"/>
  <polyline points="16,32 22,36 16,40" fill="none" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="46" y1="20" x2="57" y2="20" stroke="#1e293b" stroke-width="1.5"/>
  <text x="36" y="18" font-size="7" fill="#1e293b" font-family="sans-serif">Q</text>
</svg>`,
  },
  {
    id: "multiplexor",
    label: "Multiplexor",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <polygon points="8,6 8,54 46,46 46,14" fill="#dcfce7" stroke="#1e293b" stroke-width="2"/>
  <line x1="3" y1="16" x2="8" y2="16" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="3" y1="28" x2="8" y2="28" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="3" y1="40" x2="8" y2="40" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="46" y1="30" x2="57" y2="30" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="27" y1="50" x2="27" y2="57" stroke="#1e293b" stroke-width="1.5"/>
  <text x="27" y="32" font-size="7" text-anchor="middle" fill="#1e293b" font-family="sans-serif">MUX</text>
</svg>`,
  },
  {
    id: "demultiplexor",
    label: "Demultiplexor",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <polygon points="14,14 14,46 52,54 52,6" fill="#fce7f3" stroke="#1e293b" stroke-width="2"/>
  <line x1="3" y1="30" x2="14" y2="30" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="52" y1="16" x2="57" y2="16" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="52" y1="28" x2="57" y2="28" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="52" y1="40" x2="57" y2="40" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="33" y1="50" x2="33" y2="57" stroke="#1e293b" stroke-width="1.5"/>
  <text x="33" y="32" font-size="6" text-anchor="middle" fill="#1e293b" font-family="sans-serif">DEMUX</text>
</svg>`,
  },
  {
    id: "registro",
    label: "Registro",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <rect x="6" y="18" width="48" height="24" fill="#ede9fe" stroke="#1e293b" stroke-width="2"/>
  <line x1="18" y1="18" x2="18" y2="42" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="30" y1="18" x2="30" y2="42" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="42" y1="18" x2="42" y2="42" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="12" y1="8" x2="12" y2="18" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="24" y1="8" x2="24" y2="18" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="36" y1="8" x2="36" y2="18" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="48" y1="8" x2="48" y2="18" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="30" y1="42" x2="30" y2="52" stroke="#1e293b" stroke-width="1.5"/>
</svg>`,
  },
]

// ─── Matemática ───────────────────────────────────────────────────────────────

const matematicaShapes: ShapeDef[] = [
  {
    id: "eje_cartesiano",
    label: "Eje cartesiano",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <line x1="8" y1="44" x2="54" y2="44" stroke="#1e293b" stroke-width="2"/>
  <polygon points="54,44 48,41 48,47" fill="#1e293b"/>
  <line x1="16" y1="52" x2="16" y2="6" stroke="#1e293b" stroke-width="2"/>
  <polygon points="16,6 13,12 19,12" fill="#1e293b"/>
  <text x="56" y="48" font-size="8" fill="#1e293b" font-family="sans-serif">x</text>
  <text x="18" y="8" font-size="8" fill="#1e293b" font-family="sans-serif">y</text>
  <circle cx="16" cy="44" r="2" fill="#1e293b"/>
  <text x="8" y="54" font-size="7" fill="#1e293b" font-family="sans-serif">0</text>
</svg>`,
  },
  {
    id: "vector_2d",
    label: "Vector 2D",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <line x1="8" y1="50" x2="54" y2="50" stroke="#94a3b8" stroke-width="1"/>
  <polygon points="54,50 50,48 50,52" fill="#94a3b8"/>
  <line x1="8" y1="54" x2="8" y2="6" stroke="#94a3b8" stroke-width="1"/>
  <polygon points="8,6 6,10 10,10" fill="#94a3b8"/>
  <line x1="8" y1="50" x2="44" y2="14" stroke="#2563eb" stroke-width="2"/>
  <polygon points="44,14 38,17 41,23" fill="#2563eb"/>
  <line x1="8" y1="14" x2="44" y2="14" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,2"/>
  <line x1="44" y1="50" x2="44" y2="14" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,2"/>
</svg>`,
  },
  {
    id: "angulo",
    label: "Ángulo",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <line x1="10" y1="48" x2="54" y2="48" stroke="#1e293b" stroke-width="2"/>
  <line x1="10" y1="48" x2="46" y2="12" stroke="#1e293b" stroke-width="2"/>
  <path d="M28,48 A18,18 0 0,0 20,32" fill="none" stroke="#e11d48" stroke-width="1.5"/>
  <text x="33" y="46" font-size="10" fill="#e11d48" font-family="serif">θ</text>
</svg>`,
  },
  {
    id: "triangulo_rectangulo",
    label: "Triángulo rect.",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <polygon points="8,54 8,10 54,54" fill="#e2e8f0" stroke="#1e293b" stroke-width="2"/>
  <polyline points="8,44 18,44 18,54" fill="none" stroke="#1e293b" stroke-width="2"/>
</svg>`,
  },
  {
    id: "circunferencia",
    label: "Circunferencia",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <circle cx="30" cy="30" r="22" fill="#f0f9ff" stroke="#1e293b" stroke-width="2"/>
  <circle cx="30" cy="30" r="2.5" fill="#1e293b"/>
  <line x1="30" y1="30" x2="52" y2="30" stroke="#2563eb" stroke-width="1.5"/>
  <text x="41" y="27" font-size="8" fill="#2563eb" font-family="sans-serif">r</text>
  <text x="25" y="28" font-size="7" fill="#1e293b" font-family="sans-serif">O</text>
</svg>`,
  },
  {
    id: "integral",
    label: "Integral",
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
  <line x1="8" y1="50" x2="58" y2="50" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="12" y1="54" x2="12" y2="6" stroke="#1e293b" stroke-width="1.5"/>
  <path d="M18,50 Q22,22 32,20 Q44,18 48,8 L48,50 Z" fill="#bfdbfe" opacity="0.7"/>
  <path d="M18,50 Q22,22 32,20 Q44,18 48,8" fill="none" stroke="#2563eb" stroke-width="2"/>
  <text x="2" y="48" font-size="22" fill="#1e293b" font-family="serif">∫</text>
</svg>`,
  },
]

// ─── Export ───────────────────────────────────────────────────────────────────

export const COLLECTIONS: Record<ShapeBlock["collection"], CollectionDef> = {
  basica: {
    id: "basica",
    label: "Básica",
    shapes: basicaShapes,
  },
  fisica: {
    id: "fisica",
    label: "Física",
    shapes: fisicaShapes,
  },
  electrica: {
    id: "electrica",
    label: "Eléctrica",
    shapes: electricaShapes,
  },
  logica: {
    id: "logica",
    label: "Lógica",
    shapes: logicaShapes,
  },
  matematica: {
    id: "matematica",
    label: "Matemática",
    shapes: matematicaShapes,
  },
}
