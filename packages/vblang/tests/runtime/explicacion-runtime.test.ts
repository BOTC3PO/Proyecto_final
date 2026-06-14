/**
 * F2-03 — runtime: materialización de `explicacion:`.
 *
 * Cubre:
 * 1. Interpolación con variables del ejercicio.
 * 2. Determinismo: misma explicación para misma seed.
 * 3. No-regresión: plantillas sin `explicacion:` → GenerationResult.explicacion
 *    undefined y la secuencia del PRNG NO cambia.
 * 4. Propagación a todos los tipos (básicos, abierta, los 4 especiales).
 */
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { compile } from "../../src/runtime/compile.js";
import { generate } from "../../src/runtime/generate.js";

function cargar(src: string) {
  return compile(parse(src));
}

const PLANTILLA_EXPLICACION = `variables:
  a: random(1, 1000)
  b: random(1, 1000)
enunciado: "Cuanto es {a} + {b}?"
explicacion: "Se suman {a} y {b}, dando {a + b}."
respuesta: a + b
`;

const PLANTILLA_SIN_EXPLICACION = `variables:
  a: random(1, 1000)
  b: random(1, 1000)
enunciado: "Cuanto es {a} + {b}?"
respuesta: a + b
`;

describe("runtime / F2-03: explicacion materializada", () => {
  it("interpola la explicacion con las variables del ejercicio", () => {
    const compiled = cargar(PLANTILLA_EXPLICACION);
    const r = generate(compiled, { seed: "s1" });
    expect(r.explicacion).toBeDefined();
    const a = r.variables.a as number;
    const b = r.variables.b as number;
    expect(r.explicacion).toBe(`Se suman ${a} y ${b}, dando ${a + b}.`);
  });

  it("determinismo: misma seed → misma explicacion", () => {
    const compiled = cargar(PLANTILLA_EXPLICACION);
    const a = generate(compiled, { seed: "det" });
    const b = generate(compiled, { seed: "det" });
    expect(a.explicacion).toBe(b.explicacion);
  });

  it("string multilinea con | se materializa preservando estructura", () => {
    const compiled = cargar(
      `variables:\n  a: random(1, 100)\nenunciado: "x {a}"\nexplicacion: |\n  Linea 1\n  Linea 2 con {a}\nrespuesta: a\n`,
    );
    const r = generate(compiled, { seed: "ml" });
    expect(r.explicacion).toBeDefined();
    expect(r.explicacion).toContain(`Linea 2 con ${r.variables.a as number}`);
  });
});

describe("runtime / F2-03: no-regresión sin explicacion", () => {
  it("plantilla sin explicacion: → GenerationResult.explicacion undefined", () => {
    const r = generate(cargar(PLANTILLA_SIN_EXPLICACION), { seed: "x" });
    expect(r.explicacion).toBeUndefined();
  });

  it("agregar explicacion: NO altera la secuencia PRNG de las variables", () => {
    // La explicacion se interpola DESPUÉS de declarar variables y resolver
    // restricciones/respuesta. Con la misma seed, `a` y `b` deben ser
    // idénticas haya o no bloque `explicacion:`.
    const conExp = generate(cargar(PLANTILLA_EXPLICACION), { seed: "sameseed" });
    const sinExp = generate(cargar(PLANTILLA_SIN_EXPLICACION), {
      seed: "sameseed",
    });
    expect(conExp.variables.a).toBe(sinExp.variables.a);
    expect(conExp.variables.b).toBe(sinExp.variables.b);
    expect(conExp.enunciado).toBe(sinExp.enunciado);
  });
});

describe("runtime / F2-03: propagacion a tipos especiales", () => {
  it("tipo ordenar: lleva explicacion", () => {
    const src = `enunciado: "Ordená"
tipo: ordenar
opciones_explicitas: ["c", "a", "b"]
respuesta_orden: ["a", "b", "c"]
explicacion: "El orden alfabetico es a, b, c."
`;
    const r = generate(cargar(src), { seed: "ord" });
    expect(r.tipo).toBe("ordenar");
    expect(r.explicacion).toBe("El orden alfabetico es a, b, c.");
  });

  it("tipo marcar_mapa: lleva explicacion", () => {
    const src = `enunciado: "Marcá Argentina"
mapa: world_countries
respuesta_iso: "ARG"
explicacion: "Argentina está en el Cono Sur."
`;
    const r = generate(cargar(src), { seed: "mm" });
    expect(r.tipo).toBe("marcar_mapa");
    expect(r.explicacion).toBe("Argentina está en el Cono Sur.");
  });

  it("tipo analisis_sintactico: lleva explicacion", () => {
    const src = `enunciado: "Analizá"
texto_analizar: "el gato duerme"
etiquetas_pedidas:
  - { palabra: "gato", etiqueta: "sustantivo" }
explicacion: "El sujeto es 'el gato'."
`;
    const r = generate(cargar(src), { seed: "as" });
    expect(r.tipo).toBe("analisis_sintactico");
    expect(r.explicacion).toBe("El sujeto es 'el gato'.");
  });

  it("tipo identificar_palabras: lleva explicacion", () => {
    const src = `enunciado: "Marcá sustantivos"
tipo: identificar_palabras
texto_analizar: "el gato come pescado"
respuestas_validas:
  - "gato"
  - "pescado"
explicacion: "Los sustantivos son palabras que nombran objetos."
`;
    const r = generate(cargar(src), { seed: "ip" });
    expect(r.tipo).toBe("identificar_palabras");
    expect(r.explicacion).toBe("Los sustantivos son palabras que nombran objetos.");
  });

  it("tipo abierta: lleva explicacion", () => {
    const src = `enunciado: "Explicá"
tipo: abierta
correccion: manual
explicacion: "Espera que el profe corrija."
`;
    const r = generate(cargar(src), { seed: "ab" });
    expect(r.tipo).toBe("abierta");
    expect(r.explicacion).toBe("Espera que el profe corrija.");
  });

  it("tipo mc basico: lleva explicacion", () => {
    const src = `enunciado: "Capital de Argentina"
tipo: mc
opciones_explicitas:
  - "Buenos Aires"
  - "Córdoba"
respuesta: "Buenos Aires"
explicacion: "La capital de Argentina es Buenos Aires."
`;
    const r = generate(cargar(src), { seed: "mc" });
    expect(r.tipo).toBe("mc");
    expect(r.explicacion).toBe("La capital de Argentina es Buenos Aires.");
  });
});
