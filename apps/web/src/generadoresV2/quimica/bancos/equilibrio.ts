/**
 * F6-03 — Bancos estáticos de Equilibrio (química).
 *
 * Extraído de `apps/web/src/generadoresV2/quimica/Equilibrio.ts` (NO
 * modificado). Sólo `anodo_catodo` es BANCO; los 22 demás subtipos
 * son PARAMétricos.
 *
 * `anodo_catodo` se computa por pares de semi-elementos: el ánodo es
 * el de menor E° (se oxida), el cátodo el de mayor E° (se reduce).
 * El source restringe a ∈ {Zn, Fe, Ni, Sn, H} (5 lowest-E0 half-cells)
 * y b ∈ cells con E° > a.E°. Esto produce 7+6+5+4+3 = 25 pares
 * válidos. Los enumeramos todos en el banco.
 */

import type { MCQuestion } from "../../basic/types";

function tags(subtipo: string, dificultad: string): string[] {
  return ["quimica", "quimica-equilibrio", `subtipo:${subtipo}`, `dificultad:${dificultad}`];
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

// ── 1) anodo_catodo (25 preguntas: 5 anodes × 7/6/5/4/3 cathodes) ─

const HALF_CELLS = [
  { name: "Zn²⁺/Zn", E0: -0.76 },
  { name: "Fe²⁺/Fe", E0: -0.44 },
  { name: "Ni²⁺/Ni", E0: -0.23 },
  { name: "Sn²⁺/Sn", E0: -0.14 },
  { name: "H⁺/H₂",   E0:  0.00 },
  { name: "Cu²⁺/Cu", E0:  0.34 },
  { name: "Ag⁺/Ag",  E0:  0.80 },
  { name: "Au³⁺/Au", E0:  1.50 },
];

const ANODO_BANK_IDS = HALF_CELLS.slice(0, 5);

const ANODO_CATODO: MCQuestion[] = [];
let nAnodoCatodo = 0;
for (const a of ANODO_BANK_IDS) {
  for (const b of HALF_CELLS.filter((c) => c.E0 > a.E0)) {
    nAnodoCatodo += 1;
    ANODO_CATODO.push(
      mc({
        id: `quimica_equilibrio_anodo_catodo_${nAnodoCatodo}`,
        prompt: `En una celda galvánica con los semielementos ${a.name} (E° = ${a.E0} V) y ${b.name} (E° = ${b.E0} V), ¿cuál actúa como ánodo y cuál como cátodo?`,
        opciones: [
          `Ánodo: ${a.name}, Cátodo: ${b.name}`,
          `Ánodo: ${b.name}, Cátodo: ${a.name}`,
          "Ambos actúan como ánodos",
          "Ambos actúan como cátodos",
        ],
        indiceCorrecto: 0,
        explicacion: `El electrodo con menor potencial estándar se oxida → ánodo. ${a.name} (E° = ${a.E0} V) < ${b.name} (E° = ${b.E0} V), por lo que ${a.name} es el ánodo.`,
        subtipo: "anodo_catodo",
        dificultad: "intermedio",
      }),
    );
  }
}

export const ANODO_CATODO_BANK: MCQuestion[] = ANODO_CATODO;

export const BANCOS_EQUILIBRIO: ReadonlyArray<readonly [string, MCQuestion[]]> = [
  ["quimica_equilibrio_anodo_catodo", ANODO_CATODO_BANK],
] as const;
