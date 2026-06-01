/**
 * Test invariante de round-trip del formulario visual (Fase 0).
 *
 * El formulario nunca debe forzar a "ir a código": su modelo es el AST de la
 * plantilla y emite `serialize(ast)` en cada cambio. Este test fija la
 * invariante de que, para cada ejemplo y para los edge cases que históricamente
 * rompían el form, el ciclo:
 *
 *     cargar en el modelo (parse) → serializar a DSL (serialize)
 *
 * produce código que (1) re-parsea a un AST equivalente y (2) pasa `validate`
 * sin errores. Cubre además los dos bugs de Fase 0: mínimo negativo y bloque
 * `generador`.
 */

import { describe, expect, it } from "vitest";
import { compile, lint, parse, serialize, validate } from "@vb/vblang";
import type { Plantilla } from "@vb/vblang";
import { SPRINT_9B_EXAMPLES } from "../examples";
import { generadorAsistidoProvider } from "../provider";

/** Clona el AST quitando los `loc`, para comparar estructura sin posiciones. */
function stripLoc(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(stripLoc);
  if (value && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      if (k === "loc") continue;
      out[k] = stripLoc(v);
    }
    return out;
  }
  return value;
}

interface Caso {
  nombre: string;
  dsl: string;
  /** Usa generador asistido (validate necesita el provider). */
  usaGenerador?: boolean;
}

const EDGE_CASES: Caso[] = [
  {
    nombre: "edge: variable con mínimo negativo",
    dsl: `variables:
  temperatura: random(-20, 40)
enunciado: "La temperatura es {temperatura} grados."
respuesta: temperatura
tipo: input
`,
  },
  {
    nombre: "edge: mínimo negativo decimal en random_float",
    dsl: `variables:
  x: random_float(-1.5, 1.5, 2)
enunciado: "x vale {x}"
respuesta: x
tipo: input
`,
  },
  {
    nombre: "edge: plantilla con bloque generador (salida limpia del form)",
    dsl: `generador: fisica/cinematica/MRU
enunciado: ""
`,
    usaGenerador: true,
  },
  {
    nombre: "edge: bloque lista opciones_explicitas (mc)",
    dsl: `variables:
  correcta: uno_de(["rojo", "verde", "azul"])
enunciado: "¿Cuál eligió?"
tipo: mc
opciones_explicitas: ["rojo", "verde", "azul"]
respuesta: correcta
`,
  },
  {
    nombre: "edge: bloque lista respuestas_validas",
    dsl: `variables:
  oracion: "El gato duerme en la cama"
enunciado: "Marcá los sustantivos:"
tipo: identificar_palabras
texto_analizar: oracion
respuestas_validas:
  - "gato"
  - "cama"
`,
  },
];

const CASOS: Caso[] = [
  ...SPRINT_9B_EXAMPLES.map((e) => ({ nombre: `ejemplo: ${e.titulo}`, dsl: e.codigoDsl })),
  ...EDGE_CASES,
];

describe("round-trip del form: parse → serialize → re-parse equivalente + validate", () => {
  for (const caso of CASOS) {
    it(`"${caso.nombre}" round-trip estable`, () => {
      // 1. Cargar en el modelo del form.
      const ast = parse(caso.dsl) as Plantilla;

      // 2. Serializar a DSL (lo que el form emite en cada onChange).
      const dsl = serialize(ast);

      // 3a. Re-parsea a un AST equivalente (ignorando loc).
      const reparsed = parse(dsl) as Plantilla;
      expect(stripLoc(reparsed)).toEqual(stripLoc(ast));

      // 3b. No hay errores de lint (lo que el editor surface como bloqueante).
      const lintReport = lint(reparsed);
      expect(lintReport.errors).toEqual([]);

      // 3c. Pasa validate sin errores (con provider para los generadores).
      const report = validate(compile(reparsed), {
        iterations: 25,
        provider: caso.usaGenerador ? generadorAsistidoProvider : undefined,
      });
      expect(report.errors).toEqual([]);
    });
  }
});
