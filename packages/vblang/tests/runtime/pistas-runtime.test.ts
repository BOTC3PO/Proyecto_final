/**
 * F2-02 — runtime: materialización de pistas escalonadas.
 *
 * Cubre:
 * 1. Interpolación con variables del ejercicio (en orden).
 * 2. Determinismo: mismas pistas para misma seed.
 * 3. No-regresión: plantillas sin `pistas:` → GenerationResult.pistas undefined
 *    y la secuencia del PRNG (variables) NO cambia.
 * 4. Propagación a todos los tipos (incluye un especial: ordenar).
 */
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { compile } from "../../src/runtime/compile.js";
import { generate } from "../../src/runtime/generate.js";

function cargar(src: string) {
  return compile(parse(src));
}

const PLANTILLA_PISTAS = `variables:
  a: random(1, 1000)
  b: random(1, 1000)
enunciado: "Cuanto es {a} + {b}?"
pistas:
  - "Pensá en {a}"
  - "Sumale {b}"
  - "El total es {a + b}"
respuesta: a + b
`;

const PLANTILLA_SIN_PISTAS = `variables:
  a: random(1, 1000)
  b: random(1, 1000)
enunciado: "Cuanto es {a} + {b}?"
respuesta: a + b
`;

describe("runtime / F2-02: pistas materializadas", () => {
  it("interpola las pistas con las variables del ejercicio, en orden", () => {
    const compiled = cargar(PLANTILLA_PISTAS);
    const r = generate(compiled, { seed: "s1" });
    expect(r.pistas).toBeDefined();
    expect(r.pistas).toHaveLength(3);
    const a = r.variables.a as number;
    const b = r.variables.b as number;
    expect(r.pistas![0]).toBe(`Pensá en ${a}`);
    expect(r.pistas![1]).toBe(`Sumale ${b}`);
    expect(r.pistas![2]).toBe(`El total es ${a + b}`);
  });

  it("determinismo: misma seed → mismas pistas", () => {
    const compiled = cargar(PLANTILLA_PISTAS);
    const a = generate(compiled, { seed: "det" });
    const b = generate(compiled, { seed: "det" });
    expect(a.pistas).toEqual(b.pistas);
  });

  it("pista unica inline también se materializa", () => {
    const compiled = cargar(
      `variables:\n  a: random(1, 100)\nenunciado: "x {a}"\npistas: "La clave es {a}"\nrespuesta: a\n`,
    );
    const r = generate(compiled, { seed: "u1" });
    expect(r.pistas).toHaveLength(1);
    expect(r.pistas![0]).toBe(`La clave es ${r.variables.a as number}`);
  });

  it("propaga pistas en tipos especiales (ordenar)", () => {
    const src = `enunciado: "Ordená"
tipo: ordenar
opciones_explicitas: ["c", "a", "b"]
respuesta_orden: ["a", "b", "c"]
pistas:
  - "Empezá por la a"
`;
    const r = generate(cargar(src), { seed: "ord" });
    expect(r.tipo).toBe("ordenar");
    expect(r.pistas).toEqual(["Empezá por la a"]);
  });
});

describe("runtime / F2-02: no-regresión sin pistas", () => {
  it("plantilla sin pistas: → GenerationResult.pistas undefined", () => {
    const r = generate(cargar(PLANTILLA_SIN_PISTAS), { seed: "x" });
    expect(r.pistas).toBeUndefined();
  });

  it("agregar pistas: NO altera la secuencia PRNG de las variables", () => {
    // Las pistas se interpolan DESPUÉS de declarar variables y resolver
    // restricciones/respuesta. Con la misma seed, `a` y `b` deben ser
    // idénticas haya o no bloque `pistas:`.
    const conPistas = generate(cargar(PLANTILLA_PISTAS), { seed: "sameseed" });
    const sinPistas = generate(cargar(PLANTILLA_SIN_PISTAS), {
      seed: "sameseed",
    });
    expect(conPistas.variables.a).toBe(sinPistas.variables.a);
    expect(conPistas.variables.b).toBe(sinPistas.variables.b);
    expect(conPistas.enunciado).toBe(sinPistas.enunciado);
  });
});
