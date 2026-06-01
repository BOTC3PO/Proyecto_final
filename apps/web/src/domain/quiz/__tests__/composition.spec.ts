import { describe, it, expect } from "vitest";
import {
  parseComposition,
  selectPoolIndices,
  tomarCount,
  answerCount,
  pickVariante,
  pointsFor,
  weightedScore,
  resolveSubtipoPool,
  DEFAULT_COMPOSITION,
  type QuizComposition,
} from "../composition";

describe("resolveSubtipoPool", () => {
  const all = ["MRU", "MRUV", "caida_libre"];

  it("sin params elegidos → todos", () => {
    expect(resolveSubtipoPool(all, undefined)).toEqual(all);
    expect(resolveSubtipoPool(all, {})).toEqual(all);
  });

  it("subtipos elegidos se filtran a los válidos", () => {
    expect(resolveSubtipoPool(all, { subtipos: ["MRU", "MRUV"] })).toEqual(["MRU", "MRUV"]);
    expect(resolveSubtipoPool(all, { subtipos: ["MRU", "inexistente"] })).toEqual(["MRU"]);
  });

  it("ninguno válido → todos (degradación)", () => {
    expect(resolveSubtipoPool(all, { subtipos: ["xx"] })).toEqual(all);
    expect(resolveSubtipoPool(all, { subtipos: [] })).toEqual(all);
  });

  it("compatibilidad con el `subtipo` único legacy", () => {
    expect(resolveSubtipoPool(all, { subtipo: "MRUV" })).toEqual(["MRUV"]);
  });
});

describe("parseComposition", () => {
  it("default cuando el input es vacío o inválido", () => {
    expect(parseComposition(undefined)).toEqual(DEFAULT_COMPOSITION);
    expect(parseComposition(null)).toEqual(DEFAULT_COMPOSITION);
    expect(parseComposition(42)).toEqual(DEFAULT_COMPOSITION);
  });

  it("lee tomar numérico, seleccion, variantes y peso", () => {
    const c = parseComposition({
      tomar: 1,
      seleccion: "elige_alumno",
      variantes: ["A", "B", "  "],
      pesoPorDefecto: 2,
    });
    expect(c.tomar).toBe(1);
    expect(c.seleccion).toBe("elige_alumno");
    expect(c.variantes).toEqual(["A", "B"]); // descarta vacíos
    expect(c.pesoPorDefecto).toBe(2);
  });

  it("seleccion inválida cae a 'fijo' y tomar inválido a 'todas'", () => {
    const c = parseComposition({ tomar: -3, seleccion: "loquesea" });
    expect(c.tomar).toBe("todas");
    expect(c.seleccion).toBe("fijo");
  });
});

describe("tomarCount", () => {
  it("'todas' devuelve el total", () => {
    expect(tomarCount({ ...DEFAULT_COMPOSITION }, 5)).toBe(5);
  });
  it("K se acota entre 1 y total", () => {
    expect(tomarCount({ tomar: 3, seleccion: "fijo" }, 10)).toBe(3);
    expect(tomarCount({ tomar: 99, seleccion: "fijo" }, 4)).toBe(4);
    expect(tomarCount({ tomar: 0 as unknown as number, seleccion: "fijo" }, 4)).toBe(1);
  });
});

describe("selectPoolIndices", () => {
  it("'todas' presenta todos en orden", () => {
    expect(selectPoolIndices(4, { tomar: "todas", seleccion: "fijo" }, "s")).toEqual([0, 1, 2, 3]);
  });

  it("'fijo' toma las primeras K en orden", () => {
    expect(selectPoolIndices(5, { tomar: 2, seleccion: "fijo" }, "s")).toEqual([0, 1]);
  });

  it("'azar' es determinístico por seed y toma K", () => {
    const comp: QuizComposition = { tomar: 2, seleccion: "azar" };
    const a = selectPoolIndices(5, comp, "seed-1");
    const b = selectPoolIndices(5, comp, "seed-1");
    expect(a).toEqual(b); // mismo seed → mismo resultado
    expect(a).toHaveLength(2);
    // índices válidos y ordenados
    expect(a.every((i) => i >= 0 && i < 5)).toBe(true);
    expect([...a].sort((x, y) => x - y)).toEqual(a);
  });

  it("'azar' con seeds distintos produce más de un subconjunto", () => {
    const comp: QuizComposition = { tomar: 3, seleccion: "azar" };
    const distintos = new Set(
      Array.from({ length: 20 }, (_, i) =>
        selectPoolIndices(10, comp, `seed-${i}`).join(","),
      ),
    );
    // Sobre 10 elegir 3 con 20 seeds: prácticamente seguro hay variación.
    expect(distintos.size).toBeGreaterThan(1);
  });

  it("elige_alumno presenta TODO el grupo aunque tomar sea menor", () => {
    // "elegir 1 entre 2": se presentan ambas, el alumno responde 1.
    const comp: QuizComposition = { tomar: 1, seleccion: "elige_alumno" };
    expect(selectPoolIndices(2, comp, "s")).toEqual([0, 1]);
    expect(answerCount(comp, 2)).toBe(1); // solo 1 puntúa
  });

  it("total 0 → []", () => {
    expect(selectPoolIndices(0, DEFAULT_COMPOSITION, "s")).toEqual([]);
  });
});

describe("answerCount", () => {
  it("'todas' = total; K acotado", () => {
    expect(answerCount({ tomar: "todas", seleccion: "fijo" }, 5)).toBe(5);
    expect(answerCount({ tomar: 2, seleccion: "azar" }, 5)).toBe(2);
  });
});

describe("pickVariante", () => {
  it("undefined si no hay variantes", () => {
    expect(pickVariante(undefined, "s")).toBeUndefined();
    expect(pickVariante([], "s")).toBeUndefined();
  });
  it("determinístico por seed e índice", () => {
    const vs = ["uno", "dos", "tres"];
    expect(pickVariante(vs, "seed", 0)).toBe(pickVariante(vs, "seed", 0));
    expect(vs).toContain(pickVariante(vs, "seed", 0));
  });
  it("cubre todas las variantes a lo largo de seeds", () => {
    const vs = ["a", "b", "c"];
    const vistos = new Set(
      Array.from({ length: 30 }, (_, i) => pickVariante(vs, `s${i}`, i)),
    );
    expect(vistos.size).toBe(3);
  });
});

describe("pointsFor / weightedScore", () => {
  it("usa points propio o el default de la composición", () => {
    const comp: QuizComposition = { tomar: "todas", seleccion: "fijo", pesoPorDefecto: 2 };
    expect(pointsFor({ points: 5 }, comp)).toBe(5);
    expect(pointsFor({}, comp)).toBe(2);
    expect(pointsFor({}, { tomar: "todas", seleccion: "fijo" })).toBe(1);
  });

  it("suma ponderada de correctos sobre el total de pesos", () => {
    const r = weightedScore([
      { correct: true, points: 2 },
      { correct: false, points: 2 },
      { correct: true, points: 1 },
    ]);
    expect(r).toEqual({ score: 3, maxScore: 5 });
  });

  it("pesos <= 0 se tratan como 1", () => {
    const r = weightedScore([{ correct: true, points: 0 }]);
    expect(r).toEqual({ score: 1, maxScore: 1 });
  });
});
