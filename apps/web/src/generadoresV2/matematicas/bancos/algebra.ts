/**
 * F6-03 — Datos del banco estático de Matemáticas.
 *
 * Extraído de `apps/web/src/generadoresV2/matematicas/Algebra.ts` (NO
 * modificado). El subtipo `lenguaje_algebraico` usa 3 pools hardcoded
 * (basicaPools, intermediaPools, avanzadaPools) con 7+5+5 = 17 filas.
 * El dispatch es por dificultad.
 *
 * F6-03 preserva el split por dificultad: 7 preguntas basico, 5
 * intermedio, 5 avanzado = 17 preguntas con su tag de dificultad.
 *
 * Subtipo NO migrado: `probabilidad_simple` (en Aritmetica.ts, NO en
 * Algebra.ts) — es PARAMETRIZABLE (randInt sobre espacios muestrales).
 *
 * Otros 34 subtipos de Algebra.ts son PARAMétricos (randInt sobre
 * ecuaciones, sistemas, polinomios) — fuera de scope de F6-03.
 */

import type { MCQuestion } from "../../basic/types";

function tags(subtipo: string, dificultad: string): string[] {
  return ["matematicas", `subtipo:${subtipo}`, `dificultad:${dificultad}`];
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

// ── 1) lenguaje_algebraico (7 + 5 + 5 = 17 preguntas) ──────────────

const BASICA_POOLS = [
  { verbal: "el doble de x",                 algebraica: "2x",   incorrectas: ["x + 2", "x/2", "x²"] },
  { verbal: "la mitad de x",                 algebraica: "x/2",  incorrectas: ["2x", "x - 2", "x²"] },
  { verbal: "cinco más x",                   algebraica: "x + 5", incorrectas: ["5x", "x - 5", "5 - x"] },
  { verbal: "x menos tres",                  algebraica: "x - 3", incorrectas: ["3 - x", "x + 3", "3x"] },
  { verbal: "el triple de x",                algebraica: "3x",   incorrectas: ["x + 3", "x/3", "x³"] },
  { verbal: "x más diez",                    algebraica: "x + 10", incorrectas: ["10x", "x - 10", "10 - x"] },
  { verbal: "el cuádruplo de x",             algebraica: "4x",   incorrectas: ["x + 4", "x⁴", "x/4"] },
] as const;

const INTERMEDIA_POOLS = [
  { verbal: "la suma de x e y",              algebraica: "x + y", incorrectas: ["xy", "x - y", "x/y"] },
  { verbal: "el producto de a y b",          algebraica: "ab",    incorrectas: ["a + b", "a - b", "a/b"] },
  { verbal: "x dividido entre y",            algebraica: "x/y",   incorrectas: ["xy", "x + y", "y/x"] },
  { verbal: "tres veces x más dos veces y",  algebraica: "3x + 2y", incorrectas: ["3x - 2y", "2x + 3y", "3x · 2y"] },
  { verbal: "la diferencia entre a y el doble de b", algebraica: "a - 2b", incorrectas: ["2a - b", "a + 2b", "2b - a"] },
] as const;

const AVANZADA_POOLS = [
  { verbal: "el cuadrado de x más tres",                algebraica: "x² + 3",   incorrectas: ["2x + 3", "x + 3²", "(x + 3)²"] },
  { verbal: "el cubo de x",                              algebraica: "x³",        incorrectas: ["3x", "x²", "x · 3"] },
  { verbal: "x al cuadrado menos cinco",                algebraica: "x² - 5",   incorrectas: ["(x - 5)²", "x - 5²", "2x - 5"] },
  { verbal: "el cuadrado de la suma de x más dos",      algebraica: "(x + 2)²", incorrectas: ["x² + 2", "x² + 4", "x² + 2²"] },
  { verbal: "dos veces x al cuadrado más x",            algebraica: "2x² + x",  incorrectas: ["(2x)² + x", "2x² - x", "x² + 2x"] },
] as const;

const LENGUAJE_ALGEBRAICO: MCQuestion[] = [];

BASICA_POOLS.forEach((p, i) =>
  LENGUAJE_ALGEBRAICO.push(
    mc({
      id: `matematicas_algebra_lenguaje_algebraico_${i + 1}`,
      prompt: `Traduce la expresión verbal al lenguaje algebraico: "${p.verbal}"`,
      opciones: [p.algebraica, ...p.incorrectas],
      indiceCorrecto: 0,
      explicacion: `La traducción correcta de "${p.verbal}" es ${p.algebraica}.`,
      subtipo: "lenguaje_algebraico",
      dificultad: "basico",
    }),
  ),
);

INTERMEDIA_POOLS.forEach((p, i) =>
  LENGUAJE_ALGEBRAICO.push(
    mc({
      id: `matematicas_algebra_lenguaje_algebraico_${8 + i}`,
      prompt: `Traduce la expresión verbal al lenguaje algebraico: "${p.verbal}"`,
      opciones: [p.algebraica, ...p.incorrectas],
      indiceCorrecto: 0,
      explicacion: `La traducción correcta de "${p.verbal}" es ${p.algebraica}.`,
      subtipo: "lenguaje_algebraico",
      dificultad: "intermedio",
    }),
  ),
);

AVANZADA_POOLS.forEach((p, i) =>
  LENGUAJE_ALGEBRAICO.push(
    mc({
      id: `matematicas_algebra_lenguaje_algebraico_${13 + i}`,
      prompt: `Traduce la expresión verbal al lenguaje algebraico: "${p.verbal}"`,
      opciones: [p.algebraica, ...p.incorrectas],
      indiceCorrecto: 0,
      explicacion: `La traducción correcta de "${p.verbal}" es ${p.algebraica}.`,
      subtipo: "lenguaje_algebraico",
      dificultad: "avanzado",
    }),
  ),
);

export const BANCOS_MATEMATICAS: ReadonlyArray<readonly [string, MCQuestion[]]> = [
  ["matematicas_algebra_lenguaje_algebraico", LENGUAJE_ALGEBRAICO],
] as const;
