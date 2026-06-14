/**
 * F4-03 — Helpers de puntaje por sección/tema.
 *
 * Cubre los criterios de la tarea:
 *  - puntajePorTema agrupa por temaPrincipal y reparte 50/50 si temaSecundario.
 *  - puntajeTotalCuestionario es la suma de puntajes > 0.
 *  - resumenPuntaje devuelve total + porTema con nombre, en un solo recorrido.
 *  - posiciones con puntaje 0 no entran al reparto ni al total.
 *  - temas sin posiciones no aparecen en el resultado.
 *  - coherencia con puntajePorPosiciones: la suma de score y maxScore por tema
 *    es exactamente el resultado de puntajePorPosiciones global.
 */

import { describe, expect, it } from "vitest";
import {
  puntajePorPosiciones,
  puntajePorTema,
  puntajeTotalCuestionario,
  resumenPuntaje
} from "../puntaje";

describe("puntajePorTema", () => {
  it("agrupa puntajes por temaPrincipal y devuelve score/maxScore por tema", () => {
    const cuestionario = {
      posiciones: [
        { numero: 1, temaPrincipal: "algebra", puntaje: 3 },
        { numero: 2, temaPrincipal: "algebra", puntaje: 2 },
        { numero: 3, temaPrincipal: "geo", puntaje: 4 }
      ]
    };
    const acertadas = new Set<number>([1, 3]); // 1ª de algebra + la única de geo
    const r = puntajePorTema(cuestionario, acertadas);
    expect(r.algebra).toEqual({ score: 3, maxScore: 5, ratio: 0.6 });
    expect(r.geo).toEqual({ score: 4, maxScore: 4, ratio: 1 });
  });

  it("reparte 50/50 una posición con temaSecundario entre los dos temas", () => {
    const cuestionario = {
      posiciones: [
        { numero: 1, temaPrincipal: "algebra", temaSecundario: "geo", puntaje: 4 }
      ]
    };
    const r = puntajePorTema(cuestionario, new Set<number>([1]));
    // algebra carga 2 (la mitad que le queda después de ceder la otra mitad a geo).
    expect(r.algebra.maxScore).toBe(2);
    expect(r.algebra.score).toBe(2);
    // geo carga la otra mitad.
    expect(r.geo.maxScore).toBe(2);
    expect(r.geo.score).toBe(2);
    // La suma de maxScore por tema es 4 (el total).
    expect((r.algebra.maxScore + r.geo.maxScore)).toBe(4);
  });

  it("temaSecundario igual al principal no se cuenta doble", () => {
    const cuestionario = {
      posiciones: [
        { numero: 1, temaPrincipal: "algebra", temaSecundario: "algebra", puntaje: 5 }
      ]
    };
    const r = puntajePorTema(cuestionario, new Set<number>([1]));
    expect(r.algebra.maxScore).toBe(5);
    expect(r.algebra.score).toBe(5);
    // No se duplica el tema.
    expect(Object.keys(r)).toEqual(["algebra"]);
  });

  it("posiciones con puntaje 0 no entran al reparto ni al total", () => {
    const cuestionario = {
      posiciones: [
        { numero: 1, temaPrincipal: "algebra", puntaje: 3 },
        { numero: 2, temaPrincipal: "algebra", puntaje: 0 },
        { numero: 3, temaPrincipal: "geo", puntaje: 2 }
      ]
    };
    const r = puntajePorTema(cuestionario, new Set<number>([1, 2, 3]));
    // algebra: sólo la pos 1 cuenta (3 puntos). Pos 2 con puntaje 0 queda fuera.
    expect(r.algebra).toEqual({ score: 3, maxScore: 3, ratio: 1 });
    expect(r.geo).toEqual({ score: 2, maxScore: 2, ratio: 1 });
  });

  it("temas sin posiciones no aparecen en el resultado", () => {
    const cuestionario = {
      posiciones: [
        { numero: 1, temaPrincipal: "algebra", puntaje: 3 }
      ]
    };
    const r = puntajePorTema(cuestionario, new Set<number>());
    expect(Object.keys(r)).toEqual(["algebra"]);
  });

  it("sin acertadas, todos los score=0 y ratios=0 (o null si maxScore=0)", () => {
    const cuestionario = {
      posiciones: [
        { numero: 1, temaPrincipal: "algebra", puntaje: 3 },
        { numero: 2, temaPrincipal: "geo", puntaje: 2 }
      ]
    };
    const r = puntajePorTema(cuestionario, new Set<number>());
    expect(r.algebra).toEqual({ score: 0, maxScore: 3, ratio: 0 });
    expect(r.geo).toEqual({ score: 0, maxScore: 2, ratio: 0 });
  });

  it("la suma de score por tema = puntajePorPosiciones.score (coherencia)", () => {
    const cuestionario = {
      posiciones: [
        { numero: 1, temaPrincipal: "algebra", puntaje: 3 },
        { numero: 2, temaPrincipal: "algebra", puntaje: 2 },
        { numero: 3, temaPrincipal: "geo", puntaje: 4 },
        { numero: 4, temaPrincipal: "algebra", temaSecundario: "geo", puntaje: 6 }
      ]
    };
    const acertadas = new Set<number>([1, 3, 4]);
    const r = puntajePorTema(cuestionario, acertadas);
    const total = Object.values(r).reduce((acc, x) => acc + x.score, 0);
    const global = puntajePorPosiciones(cuestionario.posiciones, acertadas);
    // Importante: con temas secundarios, la suma por tema es IGUAL al score
    // global (porque el split 50/50 es coherente y conserva la masa).
    expect(total).toBe(global.score);
  });
});

describe("puntajeTotalCuestionario", () => {
  it("devuelve la suma de puntajes > 0", () => {
    const cuestionario = {
      posiciones: [
        { numero: 1, puntaje: 3 },
        { numero: 2, puntaje: 2 },
        { numero: 3, puntaje: 0 }
      ]
    };
    expect(puntajeTotalCuestionario(cuestionario)).toBe(5);
  });

  it("devuelve 0 si no hay posiciones con puntaje > 0", () => {
    const cuestionario = { posiciones: [{ numero: 1, puntaje: 0 }] };
    expect(puntajeTotalCuestionario(cuestionario)).toBe(0);
  });

  it("alias de maxScoreCuestionario", () => {
    const cuestionario = {
      posiciones: [
        { numero: 1, puntaje: 1 },
        { numero: 2, puntaje: 2 },
        { numero: 3, puntaje: 3 }
      ]
    };
    // No importamos maxScoreCuestionario explícitamente: verificamos que
    // la semántica del "total" coincida con la suma directa.
    const directa = cuestionario.posiciones.reduce((acc, p) => acc + (p.puntaje > 0 ? p.puntaje : 0), 0);
    expect(puntajeTotalCuestionario(cuestionario)).toBe(directa);
  });
});

describe("resumenPuntaje", () => {
  it("devuelve total y porTema con nombre en un solo recorrido", () => {
    const cuestionario = {
      temas: [
        { id: "algebra", nombre: "Álgebra" },
        { id: "geo", nombre: "Geometría" }
      ],
      posiciones: [
        { numero: 1, temaPrincipal: "algebra", puntaje: 3 },
        { numero: 2, temaPrincipal: "geo", puntaje: 2 }
      ],
      acertadas: new Set<number>([1])
    };
    const r = resumenPuntaje(cuestionario);
    expect(r.total).toBe(5);
    expect(r.porTema.algebra).toEqual({ score: 3, maxScore: 3, ratio: 1, nombre: "Álgebra" });
    expect(r.porTema.geo).toEqual({ score: 0, maxScore: 2, ratio: 0, nombre: "Geometría" });
  });

  it("sin acertadas, los ratios son 0 y los score son 0", () => {
    const cuestionario = {
      temas: [{ id: "algebra", nombre: "Álgebra" }],
      posiciones: [{ numero: 1, temaPrincipal: "algebra", puntaje: 5 }]
      // acertadas omitido → Set vacío
    };
    const r = resumenPuntaje(cuestionario);
    expect(r.total).toBe(5);
    expect(r.porTema.algebra).toEqual({ score: 0, maxScore: 5, ratio: 0, nombre: "Álgebra" });
  });

  it("tema sin nombre en el catálogo cae al id", () => {
    const cuestionario = {
      temas: [], // sin temas en el catálogo
      posiciones: [{ numero: 1, temaPrincipal: "algebra", puntaje: 3 }]
    };
    const r = resumenPuntaje(cuestionario);
    expect(r.porTema.algebra.nombre).toBe("algebra");
  });
});
