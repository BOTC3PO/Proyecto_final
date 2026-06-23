/**
 * Concordancia schema ↔ parser (WO06).
 *
 * Verifica que los schemas declarativos de los tipos genéricos y el parser/
 * validate de VBLang concuerdan, para que un editor schema-driven pueda armar
 * cada tipo de punta a punta sin sorpresas:
 *
 *  1. El `sampleDsl` de cada schema parsea sin error.
 *  2. El tipo inferido por el parser coincide con `schema.tipo`.
 *  3. No hay errores de lint estructural (sólo se permiten warnings).
 *  4. Round-trip lossless por pieza: parse(serialize(parse(s))) ≡ parse(s).
 *  5. Cada campo OBLIGATORIO del schema materializa un bloque presente en el AST.
 *  6. Cada `field.block` es un BloqueKind real; las listas emiten dash-lists.
 *  7. Los schemas cubren exactamente los 8 tipos de pregunta.
 */
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { serialize } from "../../src/serializer/serialize.js";
import { lint } from "../../src/validator/linter.js";
import type { BloqueKind, TipoPregunta } from "../../src/parser/ast.js";
import {
  ALL_QUESTION_TYPES,
  QUESTION_TYPE_SCHEMAS,
} from "../../src/schema/question-schemas.js";
import { DASH_LIST_BLOCKS } from "../../src/schema/field-types.js";

/** Todos los BloqueKind conocidos por el AST. `satisfies` detecta typos. */
const KNOWN_BLOCK_KINDS = [
  "metadata",
  "variables",
  "restricciones",
  "respuesta",
  "respuesta_expr",
  "respuestas_validas",
  "unidad",
  "tolerancia",
  "opciones",
  "tipo",
  "enunciado",
  "pasos",
  "visual",
  "generador",
  "dataset",
  "mapa",
  "respuesta_iso",
  "respuesta_nombre",
  "respuesta_orden",
  "texto_analizar",
  "etiquetas_pedidas",
  "opciones_explicitas",
  "correccion",
] as const satisfies readonly BloqueKind[];
const KNOWN_BLOCK_SET = new Set<string>(KNOWN_BLOCK_KINDS);

/** Compara dos ASTs estructuralmente ignorando `loc`. */
function stripLoc<T>(value: T): T {
  if (Array.isArray(value)) return value.map(stripLoc) as unknown as T;
  if (value !== null && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const k of Object.keys(value as Record<string, unknown>)) {
      if (k === "loc") continue;
      out[k] = stripLoc((value as Record<string, unknown>)[k]);
    }
    return out as unknown as T;
  }
  return value;
}

const ALL_TIPOS: TipoPregunta[] = [
  "input",
  "mc",
  "vf",
  "completar",
  "ordenar",
  "marcar_mapa",
  "analisis_sintactico",
  "identificar_palabras",
  "abierta",
  // WO-11 — respuesta simbólica.
  "expresion",
];

describe("schema ↔ parser · cobertura", () => {
  it("hay un schema por cada tipo de pregunta y ninguno de más", () => {
    expect(new Set(ALL_QUESTION_TYPES)).toEqual(new Set(ALL_TIPOS));
    expect(Object.keys(QUESTION_TYPE_SCHEMAS).sort()).toEqual(
      [...ALL_TIPOS].sort(),
    );
  });

  it("cada field.block es un BloqueKind real y las listas emiten dash-lists", () => {
    for (const tipo of ALL_TIPOS) {
      const schema = QUESTION_TYPE_SCHEMAS[tipo];
      for (const field of schema.fields) {
        expect(KNOWN_BLOCK_SET.has(field.block)).toBe(true);
        if (field.kind === "list") {
          // Invariante de ListField: el bloque que emite es el que declara…
          expect(field.emits).toBe(field.block);
          // …y es una de las dash-lists soportadas por el parser.
          expect(DASH_LIST_BLOCKS).toContain(field.emits);
        }
      }
    }
  });
});

describe("schema ↔ parser · concordancia por tipo", () => {
  for (const tipo of ALL_TIPOS) {
    const schema = QUESTION_TYPE_SCHEMAS[tipo];

    describe(`tipo ${tipo}`, () => {
      it("schema.tipo coincide con la clave", () => {
        expect(schema.tipo).toBe(tipo);
      });

      it("el sampleDsl parsea e infiere el tipo esperado", () => {
        const plantilla = parse(schema.sampleDsl);
        expect(plantilla.tipoInferido).toBe(tipo);
      });

      it("el sampleDsl no produce errores de lint estructural", () => {
        const plantilla = parse(schema.sampleDsl);
        const report = lint(plantilla);
        expect(report.errors).toEqual([]);
      });

      it("round-trip lossless del sampleDsl", () => {
        const original = parse(schema.sampleDsl);
        const reparsed = parse(serialize(original));
        expect(stripLoc(reparsed)).toEqual(stripLoc(original));
      });

      it("cada campo obligatorio materializa un bloque presente en el AST", () => {
        const plantilla = parse(schema.sampleDsl);
        const presentes = new Set(plantilla.bloques.map((b) => b.kind));
        for (const field of schema.fields) {
          if (field.required) {
            expect(presentes.has(field.block)).toBe(true);
          }
        }
      });
    });
  }
});
