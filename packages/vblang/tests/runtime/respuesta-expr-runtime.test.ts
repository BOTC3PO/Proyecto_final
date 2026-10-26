/**
 * WO-11 — runtime: materialización de `respuesta_expr:` + tipo `expresion`.
 *
 * Cubre:
 *  1. `respuesta_expr:` infiere `tipoInferido = "expresion"`.
 *  2. `tipo: expresion` es válido y requiere `respuesta_expr:`.
 *  3. `respuesta_expr:` se evalúa a string y se materializa en
 *     `GenerationResult.respuestaExpr` y en `answerKey` (vía adapter).
 *  4. `respuesta:` y `respuesta_expr:` no pueden coexistir (parser).
 *  5. El adapter propaga `questionType: "expresion"` y NO propaga
 *     `toleranciaRelativa` aunque la plantilla la declare.
 *  6. No-regresión: el resto de tipos sigue funcionando igual.
 */
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { compile } from "../../src/runtime/compile.js";
import { generate } from "../../src/runtime/generate.js";
import { toModuleQuizQuestion } from "../../src/adapters/to-module-quiz-question.js";
import { ParseError } from "../../src/parser/errors.js";
import { EvalError } from "../../src/evaluator/errors.js";
import { sonEquivalentes } from "../../src/evaluator/symbolic.js";

function cargar(src: string) {
  return compile(parse(src));
}

describe("runtime / WO-11: respuesta_expr materializada", () => {
  it("respuesta_expr: infiere tipoInferido = 'expresion'", () => {
    const compiled = cargar(
      `enunciado: "Factoriza 6x+12"\nrespuesta_expr: "6*(x+2)"\n`,
    );
    expect(compiled.tipoInferido).toBe("expresion");
  });

  it("respuesta_expr: → GenerationResult.respuestaExpr string", () => {
    const compiled = cargar(
      `enunciado: "x"\nrespuesta_expr: "2*x+4"\n`,
    );
    const r = generate(compiled, { seed: "s1" });
    expect(r.tipo).toBe("expresion");
    expect(r.respuestaExpr).toBe("2*x+4");
  });

  it("el adapter propaga questionType: 'expresion' y answerKey desde respuestaExpr", () => {
    const compiled = cargar(
      `enunciado: "x"\nrespuesta_expr: "2*x+4"\n`,
    );
    const r = generate(compiled, { seed: "s2" });
    const q = toModuleQuizQuestion(r);
    expect(q.questionType).toBe("expresion");
    expect(q.answerKey).toBe("2*x+4");
  });

  it("tipo: expresion es válido y requiere respuesta_expr: (parser)", () => {
    expect(() =>
      cargar(`enunciado: "x"\ntipo: expresion\nrespuesta_expr: "2*x+4"\n`),
    ).not.toThrow();
    // Sin respuesta_expr: el parser rechaza.
    expect(() =>
      cargar(`enunciado: "x"\ntipo: expresion\nrespuesta_expr: "x+1"\n`),
    ).not.toThrow();
    // Tipo declarado pero sin respuesta_expr: error del parser.
    expect(() => cargar(`enunciado: "x"\ntipo: expresion\n`)).toThrow(
      ParseError,
    );
  });

  it("respuesta: y respuesta_expr: NO pueden coexistir (parser)", () => {
    expect(() =>
      cargar(
        `enunciado: "x"\nrespuesta: 1\nrespuesta_expr: "x+1"\n`,
      ),
    ).toThrow(ParseError);
  });

  it("respuesta_expr: que evalúa a número → EvalError en generate()", () => {
    const compiled = cargar(
      `enunciado: "x"\nrespuesta_expr: 42\n`,
    );
    expect(() => generate(compiled, { seed: "bad" })).toThrow(EvalError);
  });

  it("respuesta_expr: con concatenación de variables produce string ensamblado", () => {
    const compiled = cargar(
      `variables:\n  factor: random(2, 6)\n  a: random(1, 5)\nenunciado: "x"\nrespuesta_expr: concatenar(factor, "*(x+", a, ")")\n`,
    );
    const r = generate(compiled, { seed: "conc" });
    // La concatenación arma "k*(x+a)". Verificamos que es string.
    expect(typeof r.respuestaExpr).toBe("string");
    expect(r.respuestaExpr).toMatch(/^\d+\*\(x\+\d+\)$/);
  });

  it("respuesta_expr: con variables factor y a → el string se evalúa como expresión correcta", () => {
    const compiled = cargar(
      `variables:\n  factor: random(2, 6)\n  a: random(1, 5)\nenunciado: "Factoriza"\nrespuesta_expr: concatenar(factor, "*(x+", a, ")")\n`,
    );
    const r = generate(compiled, { seed: "verif" });
    // Extraemos factor y a del string (formato "k*(x+a)"), y
    // verificamos que el string es equivalente a k*x + k*a
    const m = r.respuestaExpr!.match(/^(\d+)\*\(x\+(\d+)\)$/);
    expect(m).not.toBeNull();
    const factor = Number(m![1]);
    const a = Number(m![2]);
    const esperado = `${factor}*x+${factor * a}`;
    expect(sonEquivalentes(r.respuestaExpr!, esperado).eq).toBe(true);
  });

  it("el adapter NO propaga toleranciaRelativa para tipo: expresion", () => {
    const compiled = cargar(
      `enunciado: "x"\nrespuesta_expr: "x+1"\ntolerancia: 5%\n`,
    );
    const r = generate(compiled, { seed: "tol" });
    const q = toModuleQuizQuestion(r);
    expect(q.questionType).toBe("expresion");
    // La tolerancia es irrelevante para tipo simbolico; el adapter
    // la descarta. Ver docs/vblang/wo-11-eje-simbolico.md §6.1.
    expect(q.toleranciaRelativa).toBeUndefined();
  });

  it("determinismo: misma seed → mismo respuesta_expr", () => {
    const compiled = cargar(
      `variables:\n  a: random(1, 5)\n  b: random(1, 5)\nenunciado: "x"\nrespuesta_expr: concatenar("x+", a, "*x+", b)\n`,
    );
    const r1 = generate(compiled, { seed: "det" });
    const r2 = generate(compiled, { seed: "det" });
    expect(r1.respuestaExpr).toBe(r2.respuestaExpr);
  });

  it("no-regresión: tipo: input sigue funcionando como antes", () => {
    const compiled = cargar(
      `enunciado: "x"\nrespuesta: 42\ntolerancia_abs: 0.01\n`,
    );
    const r = generate(compiled, { seed: "reg" });
    const q = toModuleQuizQuestion(r);
    expect(q.questionType).toBe("input");
    expect(q.answerKey).toBe("42");
    // Sin `tolerancia:` (relativa) declarada, el adapter no la
    // emite (comportamiento previo preservado). Sí emite la absoluta.
    expect(q.toleranciaRelativa).toBeUndefined();
    expect(q.toleranciaAbsoluta).toBe(0.01);
    // Y, crucialmente, NO es tipo "expresion" (no-regresión).
    expect(q.questionType).not.toBe("expresion");
  });
});
