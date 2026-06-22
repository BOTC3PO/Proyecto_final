/**
 * WO-8 — Plantilla de cobertura de los builtins nuevos.
 *
 * Verificación end-to-end de la expansión del DSL introducida en WO-8
 * (builtins numéricos/aritméticos: abs, mcd, mcm, es_primo, divisores,
 * factorizar, mediana, moda, fraccion). La plantilla vive en
 * `src/templates/matematicas-wo8-oficiales.ts` y NO es pedagógica: existe
 * exclusivamente como gate de aceptación de WO-8 ("una plantilla que use cada
 * builtin nuevo parsea, typechequea y evalúa"). El porting real de los
 * subtipos `divisibilidad` / `numeros_primos` / `estadistica_basica` /
 * `enteros_negativos` / `probabilidad_simple` es la 2ª ola de WO-7b.
 */
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { lint } from "../../src/validator/linter.js";
import { compile } from "../../src/runtime/compile.js";
import { generate } from "../../src/runtime/generate.js";
import { validate } from "../../src/validator/validator.js";
import { toModuleQuizQuestion } from "../../src/adapters/to-module-quiz-question.js";
import { MATEMATICAS_WO8_OFICIALES } from "../../src/templates/matematicas-wo8-oficiales.js";
import { EvalError } from "../../src/evaluator/errors.js";
import { evalSrc, makeCtx } from "../evaluator/_helpers.js";

describe("WO-8: MATEMATICAS_WO8_OFICIALES", () => {
  it("expone exactamente 1 plantilla (cobertura_builtins)", () => {
    expect(MATEMATICAS_WO8_OFICIALES).toHaveLength(1);
    expect(MATEMATICAS_WO8_OFICIALES.map((p) => p.subtipoOriginal)).toEqual([
      "wo8_cobertura_builtins",
    ]);
  });

  for (const plantilla of MATEMATICAS_WO8_OFICIALES) {
    describe(plantilla.id, () => {
      it("parsea, lintea sin errores, compila y pasa 100 simulaciones", () => {
        const ast = parse(plantilla.codigoDsl);
        const lintReport = lint(ast);
        expect(lintReport.errors, JSON.stringify(lintReport.errors)).toEqual(
          [],
        );

        const compiled = compile(ast);
        const report = validate(compiled, {
          iterations: 100,
          seedPrefix: `wo8-${plantilla.subtipoOriginal}`,
        });
        expect(
          report.errors,
          `errores: ${report.errors.map((e) => e.message).join(" | ")}`,
        ).toEqual([]);
        expect(report.pass).toBe(true);
        expect(report.passedSimulations).toBe(100);
      });
    });
  }

  describe("oficial-matematicas-wo8-cobertura-builtins", () => {
    const plantilla = MATEMATICAS_WO8_OFICIALES[0];
    const compiled = compile(parse(plantilla.codigoDsl));

    it("usa los nueve builtins nuevos de WO-8 sin type-mismatch", () => {
      // Si la inferencia de tipos fallara, el lint lo reportaría. Volvemos a
      // correrlo y verificamos explícitamente.
      const ast = parse(plantilla.codigoDsl);
      const lintReport = lint(ast);
      expect(lintReport.errors.map((e) => e.code)).not.toContain(
        "type-mismatch",
      );
      expect(lintReport.errors.map((e) => e.code)).not.toContain("fun-undef");
      expect(lintReport.errors.map((e) => e.code)).not.toContain("arity");
    });

    it("los valores generados satisfacen las invariantes de cada builtin", () => {
      for (const seed of ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10"]) {
        const r = generate(compiled, { seed });
        const v = r.variables as Record<string, unknown>;

        // abs
        const x = v.x as number;
        const distancia_al_5 = v.distancia_al_5 as number;
        expect(distancia_al_5).toBe(Math.abs(x - 5));

        // mcd / mcm: mcd * mcm === |a*b| cuando ambos no-cero
        const a_div = v.a_div as number;
        const b_div = v.b_div as number;
        const max_comun_divisor = v.max_comun_divisor as number;
        const min_comun_multiplo = v.min_comun_multiplo as number;
        expect(max_comun_divisor).toBe(
          Math.abs(Number.isInteger(a_div) && Number.isInteger(b_div) ? gcdRef(a_div, b_div) : 0),
        );
        if (a_div !== 0 && b_div !== 0) {
          expect(max_comun_divisor * min_comun_multiplo).toBe(
            Math.abs(a_div * b_div),
          );
        }

        // es_primo / divisores
        const n_primo = v.n_primo as number;
        const es_n_primo = v.es_n_primo as boolean;
        expect(es_n_primo).toBe(esPrimoRef(n_primo));

        const lista_divisores = v.lista_divisores as number[];
        // Coincide con la lista esperada de divisores positivos de n_primo
        const esperado = divisoresRef(n_primo);
        expect(lista_divisores).toEqual(esperado);

        // factorizar
        const factores = v.factores as number[];
        const compuesto = Number(factores[0] >= 1); // dummy
        // El factorizar del template se hace sobre uno_de([12,18,24,30,36,48]);
        // el producto de los factores debe reconstruirlo.
        const producto = factores.reduce((acc, f) => acc * f, 1);
        expect([12, 18, 24, 30, 36, 48]).toContain(producto);

        // mediana
        const datos = v.datos as number[];
        const med = v.med as number;
        expect(med).toBe(medianaRef(datos));

        // moda
        const mod = v.mod as unknown;
        expect(mod).toBe(modaRef(datos));

        // fraccion — respuesta string
        const caso_prob = v.caso_prob as { fav: number; tot: number };
        const fraccion_prob = v.fraccion_prob as string;
        expect(fraccion_prob).toBe(fraccionStrRef(caso_prob.fav, caso_prob.tot));
        expect(r.respuesta).toBe(fraccion_prob);
        expect(typeof r.respuesta).toBe("string");
      }
    });

    it("adapter: tipo input, answerKey = fracción string, pasos interpolados", () => {
      const r = generate(compiled, { seed: "adapter-wo8" });
      const q = toModuleQuizQuestion(r, { id: "wo8-q1" });
      expect(q.questionType).toBe("input");
      expect(typeof q.answerKey).toBe("string");
      const caso = r.variables.caso_prob as { fav: number; tot: number };
      // El enunciado del template incluye {caso_prob.fav} y {caso_prob.tot}
      // ya interpolados, y los pasos la fracción simplificada.
      expect(r.pasos?.join("\n")).toContain(fraccionStrRef(caso.fav, caso.tot));
      expect(q.answerKey).toBe(r.respuesta);
    });
  });
});

describe("WO-8: builtins nuevos evaluan en el contexto del evaluator", () => {
  it("abs, mcd, mcm, mediana, moda, es_primo, divisores, factorizar, fraccion", () => {
    // Sanity test final: confirma que cada builtin nuevo es invocable y
    // produce el resultado esperado en el evaluator de referencia (no dentro
    // de un template completo).
    const ctx = makeCtx("wo8-builtins");
    const r = (src: string) => evalSrc(src, {}, ctx);

    expect(r("abs(-7)")).toBe(7);
    expect(r("mcd(12, 18)")).toBe(6);
    expect(r("mcm(4, 6)")).toBe(12);
    expect(r("es_primo(17)")).toBe(true);
    expect(r("divisores(12)")).toEqual([1, 2, 3, 4, 6, 12]);
    expect(r("factorizar(12)")).toEqual([2, 2, 3]);
    expect(r("mediana([1, 2, 3, 4, 5])")).toBe(3);
    expect(r("moda([1, 1, 2, 3])")).toBe(1);
    expect(r("fraccion(3, 6)")).toBe("1/2");
  });

  it("errores de los builtins nuevos son EvalError con mensaje claro", () => {
    const ctx = makeCtx("wo8-errs");
    expect(() => evalSrc("mediana([])", {}, ctx)).toThrow(EvalError);
    expect(() => evalSrc("mcd(2.5, 3)", {}, ctx)).toThrow(EvalError);
    expect(() => evalSrc("fraccion(1, 0)", {}, ctx)).toThrow(EvalError);
    expect(() => evalSrc("divisores(0)", {}, ctx)).toThrow(EvalError);
    expect(() => evalSrc("factorizar(1)", {}, ctx)).toThrow(EvalError);
  });
});

// ----------------- referencias locales (no usar builtin del DSL) -----------------

function gcdRef(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y !== 0) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x;
}

function esPrimoRef(n: number): boolean {
  if (!Number.isInteger(n) || n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  const lim = Math.floor(Math.sqrt(n));
  for (let i = 3; i <= lim; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

function divisoresRef(n: number): number[] {
  const a = Math.abs(n);
  const r: number[] = [];
  const lim = Math.floor(Math.sqrt(a));
  for (let i = 1; i <= lim; i++) {
    if (a % i === 0) {
      r.push(i);
      const c = a / i;
      if (c !== i) r.push(c);
    }
  }
  return r.sort((p, q) => p - q);
}

function medianaRef(arr: number[]): number {
  const s = [...arr].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  if (s.length % 2 === 1) return s[m];
  return (s[m - 1] + s[m]) / 2;
}

function modaRef(arr: number[]): number | null {
  const c = new Map<number, number>();
  for (const v of arr) c.set(v, (c.get(v) ?? 0) + 1);
  let best = 0;
  let bestVal = 0;
  let ties = 0;
  for (const [v, n] of c) {
    if (n > best) {
      best = n;
      bestVal = v;
      ties = 1;
    } else if (n === best) {
      ties++;
    }
  }
  if (best <= 1 || ties > 1) return null;
  return bestVal;
}

function fraccionStrRef(p: number, q: number): string {
  if (q === 0) throw new Error("denominador 0");
  const g = gcdRef(p, q) || 1;
  let num = Math.abs(p) / g;
  let den = Math.abs(q) / g;
  if ((p < 0) !== (q < 0)) num = -num;
  return den === 1 ? `${num}` : `${num}/${den}`;
}
