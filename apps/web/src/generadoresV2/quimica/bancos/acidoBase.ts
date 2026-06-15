/**
 * F6-03 — Bancos estáticos de AcidoBase (química).
 *
 * Extraído de `apps/web/src/generadoresV2/quimica/AcidoBase.ts` (NO
 * modificado). Sólo `fuerza_acidos_bases` es BANCO (lookup puro); los
 * demás 7 subtipos son PARAMétricos (randFloat, generarOpcionesIncorrectas).
 */

import type { MCQuestion } from "../../basic/types";

function tags(subtipo: string, dificultad: string): string[] {
  return ["quimica", "quimica-acido-base", `subtipo:${subtipo}`, `dificultad:${dificultad}`];
}

function mc(opts: {
  id: string;
  prompt: string;
  opciones: string[];
  indiceCorrecto: number;
  explicacion: string;
  subtipo: string;
  dificultad: string;
}): MCQuestion {
  return {
    id: opts.id,
    type: "mc",
    prompt: opts.prompt,
    options: opts.opciones.map((text, i) => ({
      text,
      correct: i === opts.indiceCorrecto,
      because: "",
    })),
    explanation: opts.explicacion,
    tags: tags(opts.subtipo, opts.dificultad),
  };
}

// ── 1) fuerza_acidos_bases (5 preguntas) ──────────────────────────

const FUERZA_ACIDOS_BASES_RAW: { nombre: string; tipo: "fuerte" | "débil"; razon: string; dificultad: string }[] = [
  { nombre: "HCl",     tipo: "fuerte", razon: "se disocia completamente en agua",                          dificultad: "basico" },
  { nombre: "H₂SO₄",  tipo: "fuerte", razon: "se disocia completamente en agua",                          dificultad: "intermedio" },
  { nombre: "CH₃COOH", tipo: "débil",  razon: "se disocia parcialmente (Ka = 1.8×10⁻⁵)",                dificultad: "intermedio" },
  { nombre: "HF",      tipo: "débil",  razon: "se disocia parcialmente (Ka = 6.8×10⁻⁴)",                dificultad: "avanzado" },
  { nombre: "HNO₃",   tipo: "fuerte", razon: "se disocia completamente en agua",                          dificultad: "basico" },
];

export const FUERZA_ACIDOS_BASES: MCQuestion[] = FUERZA_ACIDOS_BASES_RAW.map((c, i) => {
  const opcion = c.tipo === "fuerte" ? "Ácido fuerte" : "Ácido débil";
  const otras = c.tipo === "fuerte"
    ? ["Ácido débil", "Base fuerte", "Base débil"]
    : ["Ácido fuerte", "Base fuerte", "Base débil"];
  return mc({
    id: `quimica_acido_base_fuerza_acidos_bases_${i + 1}`,
    prompt: `¿Cómo se clasifica el ${c.nombre} según su fuerza?`,
    opciones: [opcion, ...otras],
    indiceCorrecto: 0,
    explicacion: `${c.nombre} es un ácido ${c.tipo} porque ${c.razon}.`,
    subtipo: "fuerza_acidos_bases",
    dificultad: c.dificultad,
  });
});

export const BANCOS_ACIDO_BASE: ReadonlyArray<readonly [string, MCQuestion[]]> = [
  ["quimica_acido_base_fuerza_acidos_bases", FUERZA_ACIDOS_BASES],
] as const;
