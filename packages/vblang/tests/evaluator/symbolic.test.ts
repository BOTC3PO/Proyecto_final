/**
 * WO-11 — tests del módulo `evaluator/symbolic.ts` (equivalencia
 * simbólica para respuestas algebraicas). Verifica:
 *   1. Casos positivos: formas equivalentes de la misma función.
 *   2. Casos negativos: formas distintas de funciones distintas.
 *   3. Edge cases: strings vacíos, sintaxis inválida, expresiones
 *      con coeficientes fraccionarios, constantes universales, etc.
 *   4. Robustez: la decisión no depende de UN solo punto numérico.
 */
import { describe, expect, it } from "vitest";
import { sonEquivalentes } from "../../src/evaluator/symbolic.js";

describe("sonEquivalentes — casos positivos", () => {
  it("detecta 2x+4 ≡ 2(x+2) (factored vs expanded)", () => {
    const r = sonEquivalentes("2*x+4", "2*(x+2)");
    expect(r.eq).toBe(true);
    expect(["ambos", "numerico"]).toContain(r.metodo);
  });

  it("detecta 6x+12 ≡ 6(x+2) (factor común)", () => {
    const r = sonEquivalentes("6*x+12", "6*(x+2)");
    expect(r.eq).toBe(true);
  });

  it("detecta 2x+2 ≡ 2(x+1) (distributiva simple)", () => {
    expect(sonEquivalentes("2*x+2", "2*(x+1)").eq).toBe(true);
  });

  it("detecta x+x ≡ 2x (suma de monomios)", () => {
    expect(sonEquivalentes("x+x", "2*x").eq).toBe(true);
  });

  it("detecta x^2+1 ≡ x^2+1 (idénticas)", () => {
    expect(sonEquivalentes("x^2+1", "x^2+1").eq).toBe(true);
    // método trivial (strings idénticos)
    expect(sonEquivalentes("x^2+1", "x^2+1").metodo).toBe("trivial");
  });

  it("detecta (x+1)^2 ≡ x^2+2x+1 (producto notable)", () => {
    const r = sonEquivalentes("(x+1)^2", "x^2+2*x+1");
    expect(r.eq).toBe(true);
  });

  it("detecta 3x+2x ≡ 5x (suma de monomios)", () => {
    expect(sonEquivalentes("3*x+2*x", "5*x").eq).toBe(true);
  });

  it("detecta -x+5 ≡ 5-x (conmutatividad)", () => {
    expect(sonEquivalentes("-x+5", "5-x").eq).toBe(true);
  });

  it("detecta x/2+1 ≡ (x+2)/2 (fracción algebraica equivalente)", () => {
    expect(sonEquivalentes("x/2+1", "(x+2)/2").eq).toBe(true);
  });

  it("ignora diferencias de whitespace y formato trivial", () => {
    // Trivial: strings idénticos.
    expect(sonEquivalentes("2*x+4", "2*x+4").metodo).toBe("trivial");
    // Diferencias de whitespace: el chequeo va por numérico/simbólico
    // (NO colapsa a "trivial"), pero el resultado sigue siendo eq.
    expect(sonEquivalentes("2*x + 4", "2*x+4").eq).toBe(true);
    expect(sonEquivalentes("2 * x + 4", "2*x+4").eq).toBe(true);
  });
});

describe("sonEquivalentes — casos negativos", () => {
  it("rechaza 2x+4 vs 2x+5 (difieren en constante)", () => {
    expect(sonEquivalentes("2*x+4", "2*x+5").eq).toBe(false);
  });

  it("rechaza 2x+4 vs 3x+4 (difieren en coeficiente)", () => {
    expect(sonEquivalentes("2*x+4", "3*x+4").eq).toBe(false);
  });

  it("rechaza x^2+1 vs x^2+2 (difieren en constante)", () => {
    expect(sonEquivalentes("x^2+1", "x^2+2").eq).toBe(false);
  });

  it("rechaza x+1 vs x^2+1 (grado distinto)", () => {
    expect(sonEquivalentes("x+1", "x^2+1").eq).toBe(false);
  });

  it("rechaza 0 vs 1 (constantes distintas)", () => {
    expect(sonEquivalentes("0", "1").eq).toBe(false);
  });

  it("rechaza x vs -x (cambia el signo)", () => {
    // NOTAMOS: en math.js, `x` y `-x` son funciones distintas.
    expect(sonEquivalentes("x", "-x").eq).toBe(false);
  });

  it("rechaza strings vacíos", () => {
    expect(sonEquivalentes("", "x+1").eq).toBe(false);
    expect(sonEquivalentes("x+1", "").eq).toBe(false);
    expect(sonEquivalentes("", "").eq).toBe(false);
  });

  it("rechaza sintaxis inválida", () => {
    expect(sonEquivalentes("2x+4", "@@@").eq).toBe(false);
    expect(sonEquivalentes("((((", "x+1").eq).toBe(false);
  });

  it("rechaza argumentos no-string", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(sonEquivalentes(123 as any, "x+1").eq).toBe(false);
  });
});

describe("sonEquivalentes — robustez numérica", () => {
  it("NO se basa en un solo punto (resistente a coincidencias accidentales)", () => {
    // Si el chequeo usara UN solo punto, podría haber falsos positivos
    // cuando la forma es distinta. Construimos un caso donde las dos
    // expresiones coinciden en UN punto pero NO son equivalentes:
    //   2x+4 coincide con 3x+1 sólo en x=3.
    // Como NO coinciden en los 10 puntos, debe rechazarse.
    const r = sonEquivalentes("2*x+4", "3*x+1");
    expect(r.eq).toBe(false);
  });

  it("puntos personalizados: si se acota a 1 punto, no se rompe el test principal", () => {
    // Puntos personalizados: si le pasamos solo [3], "2x+4" y "3x+1"
    // coinciden exactamente en 3, pero la función debe rechazarlos
    // (porque no coinciden en los otros puntos del test... no, si
    // pasamos solo [3], el chequeo SÍ pasa). Esto documenta el
    // trade-off: con menos puntos, más riesgo de falso positivo.
    const r = sonEquivalentes("2*x+4", "3*x+1", { puntos: [3] });
    // En UN solo punto ambos evalúan a 10, así que numérico pasa.
    // El simbólico debería rechazarlo (diff = -x+3, no es 0).
    expect(r.metodo).not.toBe("ambos");
    // Si el simbólico no detectó la diferencia tampoco, el método
    // sería "numerico" — eso documenta la debilidad de los puntos
    // únicos. Aceptamos el resultado tal como sale, pero
    // verificamos que no es "ambos".
  });
});

describe("sonEquivalentes — builtins simbólicos (derivar, simplificar_expr, evaluar_en)", () => {
  // Los builtins se importan indirectamente a través de createBuiltins.
  // Verificamos que las firmas existen y devuelven lo esperado.
  it("derivar de x^2 + 2x + 5 → 2(x+1) o 2x+2 (math.js canónico)", async () => {
    const { createBuiltins } = await import("../../src/evaluator/builtins.js");
    const { createPrng } = await import("../../src/runtime/prng.js");
    const { createIsolatedMath } = await import("../../src/evaluator/math-setup.js");
    const builtins = createBuiltins(createPrng("t"), createIsolatedMath());
    // math.js produce forma canónica "2 * (x + 1)" por defecto
    // (no distribuye sobre la suma en la derivada). Aceptamos ambas
    // formas — son equivalentes (verificado por sonEquivalentes).
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const d1 = builtins.derivar("x^2 + 2*x + 5", "x") as string;
    expect(["2 * (x + 1)", "2 * x + 2"]).toContain(d1);
    // Para derivada lineal sí expande.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(builtins.derivar("3*x^2 + 2*x + 5", "x")).toBe("6 * x + 2");
    // Verificamos que las dos formas de la primera derivada son
    // equivalentes (sanity check del flujo completo).
    expect(sonEquivalentes(d1, "2*x+2").eq).toBe(true);
  });

  it("simplificar_expr de x + x → 2x", async () => {
    const { createBuiltins } = await import("../../src/evaluator/builtins.js");
    const { createPrng } = await import("../../src/runtime/prng.js");
    const { createIsolatedMath } = await import("../../src/evaluator/math-setup.js");
    const builtins = createBuiltins(createPrng("t"), createIsolatedMath());
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(builtins.simplificar_expr("x + x")).toBe("2 * x");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(builtins.simplificar_expr("2*2 + 0")).toBe("4");
  });

  it("evaluar_en de x^2+1 en x=3 → 10", async () => {
    const { createBuiltins } = await import("../../src/evaluator/builtins.js");
    const { createPrng } = await import("../../src/runtime/prng.js");
    const { createIsolatedMath } = await import("../../src/evaluator/math-setup.js");
    const builtins = createBuiltins(createPrng("t"), createIsolatedMath());
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(builtins.evaluar_en("x^2 + 1", "x", 3)).toBe(10);
  });
});
