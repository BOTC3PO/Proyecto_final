/**
 * WO-BUG — test del helper `resolveMateria` / `resolveCategoria` y del
 * filtro "Sin materia" tolerante del banco multi.
 *
 * Antes la materia se resolvía de 8+ formas distintas por la app
 * (`??` vs `||`, fallback "Sin materia" vs "General" vs "—"). El
 * banco de cuestionarios filtraba client-side con `item.materia` y
 * los cuestionarios sin materia desaparecían en silencio. Este test
 * cubre el helper único (`materia.ts`) y la lógica de filtro del
 * `BancoCuestionariosMulti` (probada vía el helper directamente,
 * porque la integración con la API ya está cubierta por los tests
 * de api/).
 */

import { describe, expect, it } from "vitest";
import { resolveMateria, resolveCategoria, MATERIA_FALLBACK, CATEGORIA_FALLBACK } from "../../../domain/module/materia";

describe("resolveMateria", () => {
  it("devuelve subject cuando está presente", () => {
    expect(resolveMateria({ subject: "Matemáticas" })).toBe("Matemáticas");
  });

  it("cae a category cuando subject es null", () => {
    expect(resolveMateria({ subject: null, category: "general" })).toBe("general");
  });

  it("cae a category cuando subject es undefined", () => {
    expect(resolveMateria({ subject: undefined, category: "general" })).toBe("general");
  });

  it("cae a category cuando subject es string vacío ('')", () => {
    // Caso clave del bug: `subject === ''` rompía con `??` y ahora
    // cae correctamente con `||`.
    expect(resolveMateria({ subject: "", category: "geografia" })).toBe("geografia");
  });

  it("devuelve 'Sin materia' cuando ambos están vacíos", () => {
    expect(resolveMateria({ subject: "", category: "" })).toBe(MATERIA_FALLBACK);
    expect(resolveMateria({ subject: null, category: null })).toBe(MATERIA_FALLBACK);
    expect(resolveMateria({})).toBe(MATERIA_FALLBACK);
  });

  it("devuelve 'Sin materia' cuando el input es null/undefined", () => {
    expect(resolveMateria(null)).toBe(MATERIA_FALLBACK);
    expect(resolveMateria(undefined)).toBe(MATERIA_FALLBACK);
  });

  it("ignora whitespace-only subject (no es válido pero cae)", () => {
    // El helper no hace trim (eso es responsabilidad del front);
    // pero "   " es truthy en JS, así que se mantiene.
    expect(resolveMateria({ subject: "   " })).toBe("   ");
  });
});

describe("resolveCategoria", () => {
  it("devuelve category cuando está presente", () => {
    expect(resolveCategoria({ category: "evaluacion" })).toBe("evaluacion");
  });

  it("cae a subject cuando category es null", () => {
    expect(resolveCategoria({ subject: "Matemáticas", category: null })).toBe("Matemáticas");
  });

  it("cae a subject cuando category es string vacío", () => {
    expect(resolveCategoria({ subject: "Historia", category: "" })).toBe("Historia");
  });

  it("devuelve 'Sin categoría' cuando ambos están vacíos", () => {
    expect(resolveCategoria({ subject: "", category: "" })).toBe(CATEGORIA_FALLBACK);
  });
});

describe("WO-BUG: filtro tolerante del banco", () => {
  // Replicamos la lógica de `BancoCuestionariosMulti` para
  // verificar que los cuestionarios sin materia se mantienen
  // visibles y filtrables (no desaparecen en silencio).
  type Item = { quizId: string; materia?: string };

  const materiaEfectiva = (i: Item) => i.materia || MATERIA_FALLBACK;
  const tieneMateria = (m: string) => m !== MATERIA_FALLBACK;

  it("agrupa cuestionarios sin materia bajo 'Sin materia' y los mantiene visibles", () => {
    const items: Item[] = [
      { quizId: "a", materia: "Matemáticas" },
      { quizId: "b" }, // sin materia
      { quizId: "c", materia: "Historia" },
      { quizId: "d" }, // sin materia
    ];

    const allMaterias = Array.from(new Set(items.map(materiaEfectiva)));
    const materiasConocidas = allMaterias.filter(tieneMateria).sort();
    const hasSinMateria = allMaterias.some((m) => !tieneMateria(m));

    expect(materiasConocidas).toEqual(["Historia", "Matemáticas"]);
    expect(hasSinMateria).toBe(true);

    // Sin filtro: todos los 4 visibles.
    const sinFiltro = items;
    expect(sinFiltro.length).toBe(4);

    // Filtro "Matemáticas": sólo "a".
    const matematicas = items.filter((i) => materiaEfectiva(i) === "Matemáticas");
    expect(matematicas.map((i) => i.quizId)).toEqual(["a"]);

    // Filtro "Sin materia": b y d (los 2 sin materia).
    const sinMateria = items.filter((i) => !tieneMateria(materiaEfectiva(i)));
    expect(sinMateria.map((i) => i.quizId).sort()).toEqual(["b", "d"]);
  });

  it("un cuestionario con materia vacía ('') se trata como 'Sin materia'", () => {
    const items: Item[] = [{ quizId: "x", materia: "" }];
    expect(materiaEfectiva(items[0])).toBe(MATERIA_FALLBACK);
    expect(tieneMateria(materiaEfectiva(items[0]))).toBe(false);
  });
});
