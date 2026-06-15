/**
 * F7-01 — Referencia DSL auto-generada (drift-test).
 *
 * Garantiza que `src/reference/*` no quede desactualizada respecto del
 * parser/evaluador/schemas reales:
 *
 *  1. Todo bloque reconocido por el lexer (`BLOCK_KEYWORDS`) tiene un resumen
 *     en `RESUMENES_BLOQUES`, y viceversa.
 *  2. Todo builtin invocable (propios + math.js curado) tiene firma en
 *     `BUILTIN_SIGNATURES`/`MATHJS_SIGNATURES`, y viceversa.
 *  3. Si se "agrega" un bloque o builtin ficticio, el diff lo detecta como
 *     faltante (reproduce el escenario "alguien agregó algo al DSL y se
 *     olvidó de documentarlo").
 *  4. Hay un ejemplo por tipo de pregunta y cada uno parsea al tipo correcto.
 *  5. `generarReferenciaDsl()` incluye todos los bloques y builtins reales.
 */
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { BLOCK_KEYWORDS } from "../../src/lexer/tokens.js";
import {
  BUILTIN_SIGNATURES,
  MATHJS_SIGNATURES,
} from "../../src/validator/builtin-signatures.js";
import { ALL_QUESTION_TYPES } from "../../src/schema/question-schemas.js";
import {
  diffBloques,
  diffBuiltins,
  generarReferenciaDsl,
  listaEjemplos,
  nombresBuiltinsDisponibles,
} from "../../src/reference/index.js";

describe("referencia DSL · drift de bloques", () => {
  it("todos los bloques del lexer están documentados (y no hay de más)", () => {
    const { faltantes, sobrantes } = diffBloques(Object.keys(BLOCK_KEYWORDS));
    expect(faltantes, `bloques sin resumen: ${faltantes.join(", ")}`).toEqual(
      [],
    );
    expect(
      sobrantes,
      `resúmenes de bloques inexistentes: ${sobrantes.join(", ")}`,
    ).toEqual([]);
  });

  it("detecta un bloque ficticio agregado al lexer pero no documentado", () => {
    const { faltantes } = diffBloques([
      ...Object.keys(BLOCK_KEYWORDS),
      "bloque_ficticio_f7_01",
    ]);
    expect(faltantes).toEqual(["bloque_ficticio_f7_01"]);
  });
});

describe("referencia DSL · drift de builtins", () => {
  it("todos los builtins invocables tienen firma documentada (y no hay de más)", () => {
    const { faltantes, sobrantes } = diffBuiltins();
    expect(
      faltantes,
      `builtins sin firma documentada: ${faltantes.join(", ")}`,
    ).toEqual([]);
    expect(
      sobrantes,
      `firmas de builtins inexistentes: ${sobrantes.join(", ")}`,
    ).toEqual([]);
  });

  it("detecta un builtin ficticio agregado al registro pero no documentado", () => {
    const { faltantes } = diffBuiltins([
      ...nombresBuiltinsDisponibles(),
      "builtin_ficticio_f7_01",
    ]);
    expect(faltantes).toEqual(["builtin_ficticio_f7_01"]);
  });

  it("BUILTIN_SIGNATURES y MATHJS_SIGNATURES no se pisan entre sí", () => {
    const propios = new Set(Object.keys(BUILTIN_SIGNATURES));
    const mathjs = Object.keys(MATHJS_SIGNATURES);
    const solapados = mathjs.filter((n) => propios.has(n));
    expect(solapados).toEqual([]);
  });
});

describe("referencia DSL · ejemplos por tipo de pregunta", () => {
  it("hay exactamente un ejemplo por tipo, y cada uno parsea al tipo esperado", () => {
    const ejemplos = listaEjemplos();
    expect(ejemplos.map((e) => e.tipo).sort()).toEqual(
      [...ALL_QUESTION_TYPES].sort(),
    );
    for (const { tipo, dsl } of ejemplos) {
      const plantilla = parse(dsl);
      expect(plantilla.tipoInferido, `tipo ${tipo}`).toBe(tipo);
    }
  });
});

describe("referencia DSL · render", () => {
  it("generarReferenciaDsl() incluye todos los bloques y builtins reales", () => {
    const md = generarReferenciaDsl();
    expect(md.length).toBeGreaterThan(0);

    for (const bloque of Object.keys(BLOCK_KEYWORDS)) {
      expect(md, `falta el bloque \`${bloque}\` en la referencia`).toContain(
        `\`${bloque}\``,
      );
    }
    for (const fn of nombresBuiltinsDisponibles()) {
      expect(md, `falta el builtin \`${fn}\` en la referencia`).toContain(
        `\`${fn}`,
      );
    }
  });
});
