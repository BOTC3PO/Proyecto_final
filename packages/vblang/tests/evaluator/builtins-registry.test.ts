import { describe, expect, it } from "vitest";
import { BUILTIN_NAMES, builtinNames, createBuiltins } from "../../src/evaluator/builtins.js";
import { createPrng } from "../../src/runtime/prng.js";
import { createIsolatedMath } from "../../src/evaluator/math-setup.js";

describe("evaluator / registro de builtins (autocompletado)", () => {
  it("BUILTIN_NAMES es no-vacío y no contiene duplicados", () => {
    expect(BUILTIN_NAMES.length).toBeGreaterThan(0);
    expect(new Set(BUILTIN_NAMES).size).toBe(BUILTIN_NAMES.length);
  });

  it("BUILTIN_NAMES coincide con las claves reales de createBuiltins()", () => {
    // Test de drift: si alguien agrega un builtin a createBuiltins() y se olvida
    // de sumarlo a BUILTIN_NAMES (o viceversa), este test rompe y avisa.
    const real = new Set(builtinNames(createBuiltins(createPrng("drift"), createIsolatedMath())));
    const listed = new Set(BUILTIN_NAMES);
    const missing = [...real].filter((n) => !listed.has(n));
    const extra = [...listed].filter((n) => !real.has(n));
    expect(missing, `Faltan en BUILTIN_NAMES: ${missing.join(", ")}`).toEqual([]);
    expect(extra, `Sobran en BUILTIN_NAMES: ${extra.join(", ")}`).toEqual([]);
  });

  it("incluye los nombres historicos que el editor espera", () => {
    // Snapshot minimo: si alguien renombra `random` o `uno_de`, esto lo bloquea.
    for (const name of ["random", "uno_de", "sqrt", "largo", "sumar"]) {
      expect(BUILTIN_NAMES).toContain(name);
    }
  });
});
