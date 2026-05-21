import { describe, expect, it } from "vitest";
import { EvalError } from "../../src/evaluator/errors.js";
import { evalSrc, makeCtx } from "./_helpers.js";

describe("evaluator / builtins de aleatoriedad", () => {
  it("random(1, 10) devuelve entero en rango", () => {
    const ctx = makeCtx("test-builtins");
    for (let i = 0; i < 50; i++) {
      const v = evalSrc("random(1, 10)", {}, ctx) as number;
      expect(Number.isInteger(v)).toBe(true);
      expect(v).toBeGreaterThanOrEqual(1);
      expect(v).toBeLessThanOrEqual(10);
    }
  });

  it("uno_de([10, 20, 30]) devuelve uno de los tres", () => {
    const ctx = makeCtx("uno-de");
    for (let i = 0; i < 30; i++) {
      const v = evalSrc("uno_de([10, 20, 30])", {}, ctx);
      expect([10, 20, 30]).toContain(v);
    }
  });

  it("n_de devuelve array de n únicos", () => {
    const ctx = makeCtx("n-de");
    const v = evalSrc("n_de([1,2,3,4,5], 3)", {}, ctx) as number[];
    expect(v).toHaveLength(3);
    expect(new Set(v).size).toBe(3);
  });

  it("mezclar permuta el array", () => {
    const ctx = makeCtx("mezclar");
    const v = evalSrc("mezclar([1,2,3])", {}, ctx) as number[];
    expect(v.sort((a, b) => a - b)).toEqual([1, 2, 3]);
  });
});

describe("evaluator / builtins de strings", () => {
  it("capitalizar", () => {
    expect(evalSrc('capitalizar("hola")')).toBe("Hola");
  });
  it("mayusculas", () => {
    expect(evalSrc('mayusculas("hola")')).toBe("HOLA");
  });
  it("minusculas", () => {
    expect(evalSrc('minusculas("HOLA")')).toBe("hola");
  });
  it("concatenar", () => {
    expect(evalSrc('concatenar("a", "b", "c")')).toBe("abc");
  });
  it("longitud de string", () => {
    expect(evalSrc('longitud("hola")')).toBe(4);
  });
  it("longitud de array", () => {
    expect(evalSrc("longitud([1, 2, 3])")).toBe(3);
  });
  it("longitud sobre número lanza error", () => {
    expect(() => evalSrc("longitud(5)")).toThrow(EvalError);
  });
});

describe("evaluator / builtins aritméticos", () => {
  it("raiz cúbica", () => {
    expect(evalSrc("raiz(8, 3)")).toBeCloseTo(2, 9);
  });
  it("redondear a 2 decimales", () => {
    expect(evalSrc("redondear(3.14159, 2)")).toBe(3.14);
  });
  it("redondear sin decimales (default 0)", () => {
    expect(evalSrc("redondear(3.7)")).toBe(4);
  });
  it("signo de positivo / negativo / cero", () => {
    expect(evalSrc("signo(5)")).toBe(1);
    expect(evalSrc("signo(-5)")).toBe(-1);
    expect(evalSrc("signo(0)")).toBe(0);
  });
  it("sqrt en negativo lanza error", () => {
    expect(() => evalSrc("sqrt(-4)")).toThrow(/no es real/);
  });
});

describe("evaluator / builtins de arrays", () => {
  it("largo", () => {
    expect(evalSrc("largo([1,2,3])")).toBe(3);
  });
  it("primero / ultimo", () => {
    expect(evalSrc("primero([10, 20, 30])")).toBe(10);
    expect(evalSrc("ultimo([10, 20, 30])")).toBe(30);
  });
  it("sumar", () => {
    expect(evalSrc("sumar([1, 2, 3])")).toBe(6);
  });
  it("promedio", () => {
    expect(evalSrc("promedio([1, 2, 3, 4])")).toBe(2.5);
  });
  it("ordenar numérico", () => {
    expect(evalSrc("ordenar([3, 1, 2])")).toEqual([1, 2, 3]);
  });
  it("ordenar_por objeto", () => {
    const v = evalSrc(
      'ordenar_por([{x: 3}, {x: 1}, {x: 2}], "x")',
    ) as Array<{ x: number }>;
    expect(v.map((o) => o.x)).toEqual([1, 2, 3]);
  });
  it("unico", () => {
    expect(evalSrc("unico([1, 2, 2, 3, 3])")).toEqual([1, 2, 3]);
  });
});

describe("evaluator / predicados", () => {
  it("es_numero", () => {
    expect(evalSrc("es_numero(5)")).toBe(true);
    expect(evalSrc('es_numero("5")')).toBe(false);
  });
  it("es_positivo", () => {
    expect(evalSrc("es_positivo(5)")).toBe(true);
    expect(evalSrc("es_positivo(-5)")).toBe(false);
    expect(evalSrc("es_positivo(0)")).toBe(false);
  });
  it("es_entero", () => {
    expect(evalSrc("es_entero(5)")).toBe(true);
    expect(evalSrc("es_entero(5.5)")).toBe(false);
  });
});

describe("evaluator / trigonometría en grados", () => {
  it("sin_deg(90) ≈ 1", () => {
    expect(evalSrc("sin_deg(90)") as number).toBeCloseTo(1, 9);
  });
  it("cos_deg(0) = 1", () => {
    expect(evalSrc("cos_deg(0)")).toBeCloseTo(1, 9);
  });
  it("tan_deg(45) ≈ 1", () => {
    expect(evalSrc("tan_deg(45)") as number).toBeCloseTo(1, 9);
  });
});

describe("evaluator / filtrar (lazy)", () => {
  it("filtrar numérico", () => {
    expect(evalSrc("filtrar([1, 2, 3, 4], item > 2)")).toEqual([3, 4]);
  });

  it("filtrar con campo", () => {
    expect(
      evalSrc("filtrar([{n: 1}, {n: 2}, {n: 3}], item.n != 2)"),
    ).toEqual([{ n: 1 }, { n: 3 }]);
  });

  it("filtrar respeta el scope de iteración", () => {
    expect(
      evalSrc("filtrar(paises, item.iso != pais.iso)", {
        paises: [
          { iso: "AR", nombre: "Argentina" },
          { iso: "BR", nombre: "Brasil" },
          { iso: "CL", nombre: "Chile" },
        ],
        pais: { iso: "BR", nombre: "Brasil" },
      }),
    ).toEqual([
      { iso: "AR", nombre: "Argentina" },
      { iso: "CL", nombre: "Chile" },
    ]);
  });
});

describe("evaluator / error builtin", () => {
  it('error("test") lanza EvalError con message "test"', () => {
    expect(() => evalSrc('error("test")')).toThrow(EvalError);
    expect(() => evalSrc('error("test")')).toThrow(/test/);
  });
});

describe("evaluator / función desconocida sugiere", () => {
  it("typo cercano sugiere", () => {
    expect(() => evalSrc("randomm(1, 10)")).toThrow(/random/);
  });
});

describe("evaluator / math.js fallback", () => {
  it("abs (vía math.js)", () => {
    expect(evalSrc("abs(-5)")).toBe(5);
  });

  it("min / max", () => {
    expect(evalSrc("min(3, 1, 2)")).toBe(1);
    expect(evalSrc("max(3, 1, 2)")).toBe(3);
  });
});

describe("evaluator / aislamiento de math.js", () => {
  it("no se puede llamar evaluate", () => {
    expect(() => evalSrc('evaluate("2+2")')).toThrow();
  });

  it("no se puede llamar parse", () => {
    expect(() => evalSrc('parse("x")')).toThrow();
  });

  it("no se puede llamar import desde el DSL", () => {
    expect(() => evalSrc("import(1)")).toThrow();
  });
});
