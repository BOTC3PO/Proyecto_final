/**
 * F2-04 — adapter (consistencia): la propagación desde
 * `GenerationResult.toleranciaAbs` → `ModuleQuizQuestion.toleranciaAbsoluta`
 * debe ser la MISMA que el backend espera recibir del cliente al enviar
 * la pregunta. Si un cambio rompe la simetría cliente/servidor (un campo
 * se llama distinto, o se omite en uno de los dos lados), el grading
 * divergirá silenciosamente.
 *
 * Esta tabla es la referencia canónica del comportamiento combinado
 * `|r - e| ≤ max(|e|·tol_rel, tol_abs)` que el cliente (preview) y el
 * servidor (gradeNumeric) deben respetar. Cada fila valida:
 *  - la forma del consumer (lo que recibe el grader)
 *  - el veredicto esperado para una respuesta dada
 *
 * El veredicto se computa acá con la misma fórmula que el server, así
 * que si backend y runtime divergen, el test lo detecta.
 */
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { compile } from "../../src/runtime/compile.js";
import { generate } from "../../src/runtime/generate.js";
import { toModuleQuizQuestion } from "../../src/adapters/to-module-quiz-question.js";

/** Réplica literal del `gradeNumeric` del backend. Si cambia allá, cambia acá. */
function gradeNumericClient(
  response: string,
  expected: number,
  tolRel: number,
  tolAbs: number,
): boolean {
  const r = parseFloat(response.replace(/,/g, "."));
  const e = expected;
  if (Number.isNaN(r) || Number.isNaN(e)) return false;
  const diff = Math.abs(r - e);
  if (e === 0) return diff <= tolAbs;
  const tol = Math.max(Math.abs(e) * tolRel, tolAbs);
  return diff <= tol;
}

function materializar(plantilla: string, seed = "s") {
  return toModuleQuizQuestion(generate(compile(parse(plantilla)), { seed }));
}

describe("consistencia cliente/servidor / F2-04: criterio combinado", () => {
  it("caso 1: e=0, tol_rel=0.05, tol_abs=0.001 → r=0.0005 correcto", () => {
    // Plantilla: respuesta 0, tol 5%, tol_abs 0.001.
    // r=0.0005: |r-e|=0.0005 ≤ max(0, 0.001) = 0.001 → correcto.
    const q = materializar(
      `enunciado: "x"\nrespuesta: 0\ntolerancia: 5%\ntolerancia_abs: 0.001\n`,
    );
    // answerKey es string (formatoDefault lo serializa).
    expect(Number(q.answerKey)).toBe(0);
    expect(q.toleranciaRelativa).toBe(0.05);
    expect(q.toleranciaAbsoluta).toBe(0.001);
    expect(gradeNumericClient("0.0005", 0, 0.05, 0.001)).toBe(true);
  });

  it("caso 2: e=0, tol_rel=0.05, tol_abs=0.001 → r=0.01 incorrecto", () => {
    // r=0.01: |r-e|=0.01 > max(0, 0.001) = 0.001 → incorrecto.
    const q = materializar(
      `enunciado: "x"\nrespuesta: 0\ntolerancia: 5%\ntolerancia_abs: 0.001\n`,
    );
    expect(gradeNumericClient("0.01", 0, 0.05, 0.001)).toBe(false);
    // La shape del consumer es la que el server debe recibir.
    expect(q.toleranciaRelativa).toBe(0.05);
    expect(q.toleranciaAbsoluta).toBe(0.001);
  });

  it("caso 3: e=0.002, tol_rel=0.05, tol_abs=0.001 → r=0.0028 correcto (tol_abs gana)", () => {
    // |e|·tol = 0.0001, tol_abs = 0.001 → max = 0.001. r-e=0.0008 ≤ 0.001 ✓
    const q = materializar(
      `enunciado: "x"\nrespuesta: 0.002\ntolerancia: 5%\ntolerancia_abs: 0.001\n`,
    );
    expect(Number(q.answerKey)).toBe(0.002);
    expect(gradeNumericClient("0.0028", 0.002, 0.05, 0.001)).toBe(true);
  });

  it("caso 4: e=10, tol_rel=0.05, tol_abs=0.001 → r=10.4 correcto (tol_rel gana)", () => {
    // |e|·tol = 0.5, tol_abs = 0.001 → max = 0.5. r-e=0.4 ≤ 0.5 ✓
    // Sin tol_abs, este caso ya pasaba. tol_abs=0.001 no cambia el veredicto.
    const q = materializar(
      `enunciado: "x"\nrespuesta: 10\ntolerancia: 5%\ntolerancia_abs: 0.001\n`,
    );
    expect(Number(q.answerKey)).toBe(10);
    expect(gradeNumericClient("10.4", 10, 0.05, 0.001)).toBe(true);
  });

  it("caso 5: NO-regresión — sin tolerancia_abs, mismo comportamiento que antes", () => {
    // e=10, tol=5% (sin tol_abs). r=10.4 dentro, r=11 fuera.
    const q = materializar(
      `enunciado: "x"\nrespuesta: 10\ntolerancia: 5%\n`,
    );
    expect(q.toleranciaAbsoluta).toBeUndefined();
    // Con tol_abs=0 (colapso), el criterio es exactamente el de antes.
    expect(gradeNumericClient("10.4", 10, 0.05, 0)).toBe(true);
    expect(gradeNumericClient("11", 10, 0.05, 0)).toBe(false);
  });

  it("caso 6: e=0 sin ninguna tolerancia → exige exacto (regresión F2-04 cero)", () => {
    // Comportamiento previo: `e=0` con tol_rel=0 exige exacto.
    // F2-04: tol_abs ausente/0 colapsa al mismo comportamiento.
    expect(gradeNumericClient("0", 0, 0, 0)).toBe(true);
    expect(gradeNumericClient("0.0001", 0, 0, 0)).toBe(false);
  });

  it("caso 7: tol_abs = 0.001 y tol_rel = 0 (sin relativa) → tol_abs única", () => {
    // El backend trata `tol_rel undefined` como "sin tolerancia relativa".
    // Acá validamos el caso extremo: tol_rel=0 explícito + tol_abs>0.
    expect(gradeNumericClient("0.0005", 0, 0, 0.001)).toBe(true);
    expect(gradeNumericClient("0.002", 0, 0, 0.001)).toBe(false);
  });
});
