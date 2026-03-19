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
}
