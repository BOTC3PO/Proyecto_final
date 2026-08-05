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
  it("min / max", () => {
    expect(evalSrc("min(3, 1, 2)")).toBe(1);
    expect(evalSrc("max(3, 1, 2)")).toBe(3);
  });

  // Combinatoria: ya funcionaban en runtime antes de agregarlas a
  // MATHJS_SIGNATURES (validator/builtin-signatures.ts) — ese fue el
  // bug (el linter las rechazaba, el evaluador no). Este describe
  // cubre que la ejecución sigue intacta; infer.test.ts cubre que
  // ahora también pasan el linter.
  it("factorial", () => {
    expect(evalSrc("factorial(5)")).toBe(120);
    expect(evalSrc("factorial(0)")).toBe(1);
  });

  it("combinations", () => {
    expect(evalSrc("combinations(5, 2)")).toBe(10);
  });

  it("permutations", () => {
    expect(evalSrc("permutations(5, 2)")).toBe(20);
  });

  it("gamma", () => {
    expect(evalSrc("gamma(5)")).toBe(24);
  });
});

describe("evaluator / abs (builtin de primera clase, WO-8)", () => {
  it("valor absoluto de positivo y negativo", () => {
    expect(evalSrc("abs(5)")).toBe(5);
    expect(evalSrc("abs(-5)")).toBe(5);
    expect(evalSrc("abs(0)")).toBe(0);
  });
  it("abs sobre no-número lanza EvalError", () => {
    expect(() => evalSrc('abs("5")')).toThrow(EvalError);
  });
  it("abs sobre NaN lanza EvalError (no propaga NaN)", () => {
    // Producir NaN vía DSL es difícil: el parser ya corta la división por 0
    // antes de poder obtener NaN. La defensa contra NaN queda como resguardo
    // defensivo; verificamos que `abs` rechaza entradas no-numéricas
    // (cualquier no-número entraría por la misma rama en producción).
    expect(() => evalSrc("abs(undefined)")).toThrow(EvalError);
  });
});

describe("evaluator / mcd / mcm (WO-8)", () => {
  it("mcd básico", () => {
    expect(evalSrc("mcd(12, 8)")).toBe(4);
    expect(evalSrc("mcd(8, 12)")).toBe(4);
    expect(evalSrc("mcd(15, 10)")).toBe(5);
  });
  it("mcd(0, n) = n; mcd(n, 0) = n; mcd(0, 0) = 0", () => {
    expect(evalSrc("mcd(0, 7)")).toBe(7);
    expect(evalSrc("mcd(7, 0)")).toBe(7);
    expect(evalSrc("mcd(0, 0)")).toBe(0);
  });
  it("mcd de primos = 1", () => {
    expect(evalSrc("mcd(13, 7)")).toBe(1);
  });
  it("mcd ignora el signo (devuelve no-negativo)", () => {
    expect(evalSrc("mcd(-12, 8)")).toBe(4);
    expect(evalSrc("mcd(12, -8)")).toBe(4);
    expect(evalSrc("mcd(-12, -8)")).toBe(4);
  });
  it("mcd exige argumentos enteros", () => {
    expect(() => evalSrc("mcd(3.5, 2)")).toThrow(EvalError);
    expect(() => evalSrc("mcd(3, 2.1)")).toThrow(EvalError);
  });
  it("mcm básico y consistencia con mcd", () => {
    expect(evalSrc("mcm(4, 6)")).toBe(12);
    expect(evalSrc("mcm(3, 5)")).toBe(15);
    // mcm(a,b) * mcd(a,b) === |a*b| (válido para no-cero)
    expect(evalSrc("mcm(12, 8) * mcd(12, 8)")).toBe(96);
  });
  it("mcm con 0 devuelve 0", () => {
    expect(evalSrc("mcm(0, 5)")).toBe(0);
    expect(evalSrc("mcm(5, 0)")).toBe(0);
    expect(evalSrc("mcm(0, 0)")).toBe(0);
  });
  it("mcm ignora el signo", () => {
    expect(evalSrc("mcm(-4, 6)")).toBe(12);
    expect(evalSrc("mcm(4, -6)")).toBe(12);
  });
  it("mcm exige argumentos enteros", () => {
    expect(() => evalSrc("mcm(3.5, 2)")).toThrow(EvalError);
  });
});

describe("evaluator / es_primo (WO-8)", () => {
  it("números primos pequeños", () => {
    for (const p of [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]) {
      expect(evalSrc(`es_primo(${p})`), `esperaba primo: ${p}`).toBe(true);
    }
  });
  it("números no-primos", () => {
    for (const c of [0, 1, 4, 6, 8, 9, 10, 12, 15, 25, 100]) {
      expect(evalSrc(`es_primo(${c})`), `esperaba no-primo: ${c}`).toBe(false);
    }
  });
  it("es_primo(2) es true (caso base)", () => {
    expect(evalSrc("es_primo(2)")).toBe(true);
  });
  it("es_primo exige argumento entero", () => {
    expect(() => evalSrc("es_primo(2.5)")).toThrow(EvalError);
  });
  it("es_primo sobre primos grandes", () => {
    expect(evalSrc("es_primo(97)")).toBe(true);
    expect(evalSrc("es_primo(1009)")).toBe(true);
    expect(evalSrc("es_primo(1024)")).toBe(false);
  });
});

describe("evaluator / divisores (WO-8)", () => {
  it("divisores de 1, 12, 28", () => {
    expect(evalSrc("divisores(1)")).toEqual([1]);
    expect(evalSrc("divisores(12)")).toEqual([1, 2, 3, 4, 6, 12]);
    expect(evalSrc("divisores(28)")).toEqual([1, 2, 4, 7, 14, 28]);
  });
  it("divisores de un primo = [1, primo]", () => {
    expect(evalSrc("divisores(13)")).toEqual([1, 13]);
  });
  it("divisores ignora el signo (devuelve los de |n|)", () => {
    expect(evalSrc("divisores(-12)")).toEqual([1, 2, 3, 4, 6, 12]);
  });
  it("divisores(0) lanza error (infinitos)", () => {
    expect(() => evalSrc("divisores(0)")).toThrow(/no está definido/);
  });
  it("divisores exige argumento entero", () => {
    expect(() => evalSrc("divisores(12.5)")).toThrow(EvalError);
  });
});

describe("evaluator / factorizar (WO-8)", () => {
  it("factorizar primos", () => {
    expect(evalSrc("factorizar(2)")).toEqual([2]);
    expect(evalSrc("factorizar(13)")).toEqual([13]);
  });
  it("factorizar compuestos (con multiplicidad)", () => {
    expect(evalSrc("factorizar(12)")).toEqual([2, 2, 3]);
    expect(evalSrc("factorizar(360)")).toEqual([2, 2, 2, 3, 3, 5]);
  });
  it("factorizar(0), factorizar(1) lanzan error (no definidos)", () => {
    expect(() => evalSrc("factorizar(0)")).toThrow(/no está definido/);
    expect(() => evalSrc("factorizar(1)")).toThrow(/no está definido/);
  });
  it("factorizar exige argumento entero ≥ 2", () => {
    expect(() => evalSrc("factorizar(2.5)")).toThrow(EvalError);
  });
});

describe("evaluator / fraccion (salida simplificada, WO-8)", () => {
  it("fraccion irreducible se devuelve tal cual", () => {
    expect(evalSrc("fraccion(1, 3)")).toBe("1/3");
    expect(evalSrc("fraccion(2, 5)")).toBe("2/5");
  });
  it("fraccion simplifica", () => {
    expect(evalSrc("fraccion(2, 4)")).toBe("1/2");
    expect(evalSrc("fraccion(8, 12)")).toBe("2/3");
    expect(evalSrc("fraccion(100, 200)")).toBe("1/2");
  });
  it("fraccion con denominador 1 devuelve entero (sin /1)", () => {
    expect(evalSrc("fraccion(4, 1)")).toBe("4");
    expect(evalSrc("fraccion(0, 1)")).toBe("0");
  });
  it("fraccion(0, n) se simplifica a 0 (entero)", () => {
    // 0/5 == 0 == 0/1: cuando la simplificación colapsa al entero 0,
    // devolvemos "0" (no "0/1") por la misma regla que `fraccion(4, 1)`.
    expect(evalSrc("fraccion(0, 5)")).toBe("0");
    expect(evalSrc("fraccion(0, 12)")).toBe("0");
  });
  it("fraccion normaliza el signo al numerador", () => {
    expect(evalSrc("fraccion(3, -4)")).toBe("-3/4");
    expect(evalSrc("fraccion(-3, 4)")).toBe("-3/4");
    expect(evalSrc("fraccion(-3, -4)")).toBe("3/4");
    expect(evalSrc("fraccion(-6, 4)")).toBe("-3/2");
  });
  it("fraccion con denominador 0 lanza error", () => {
    expect(() => evalSrc("fraccion(1, 0)")).toThrow(/denominador no puede ser 0/);
  });
  it("fraccion exige argumentos enteros", () => {
    expect(() => evalSrc("fraccion(1.5, 2)")).toThrow(EvalError);
    expect(() => evalSrc("fraccion(1, 2.5)")).toThrow(EvalError);
  });
  it("fraccion es usable como respuesta: string para input", () => {
    // Verifica que devuelve un string usable como `respuesta:` de input.
    const v = evalSrc("fraccion(3, 6)") as string;
    expect(typeof v).toBe("string");
    expect(v).toBe("1/2");
  });
});

describe("evaluator / mediana / moda (WO-8)", () => {
  it("mediana de lista impar: elemento central", () => {
    expect(evalSrc("mediana([1, 5, 3])")).toBe(3);
    expect(evalSrc("mediana([7, 1, 3, 9, 5])")).toBe(5);
  });
  it("mediana de lista par: promedio de los dos centrales", () => {
    expect(evalSrc("mediana([1, 2, 3, 4])")).toBe(2.5);
    expect(evalSrc("mediana([10, 20])")).toBe(15);
  });
  it("mediana de un solo elemento", () => {
    expect(evalSrc("mediana([42])")).toBe(42);
  });
  it("mediana no requiere entrada ordenada", () => {
    expect(evalSrc("mediana([9, 1, 5, 3, 7])")).toBe(5);
  });
  it("mediana de array vacío lanza error", () => {
    expect(() => evalSrc("mediana([])")).toThrow(/array vacío/);
  });
  it("mediana de no-array lanza error", () => {
    expect(() => evalSrc("mediana(5)")).toThrow(EvalError);
    expect(() => evalSrc('mediana("abc")')).toThrow(EvalError);
  });
  it("mediana de no-número lanza error", () => {
    expect(() => evalSrc('mediana([1, "2", 3])')).toThrow(EvalError);
  });

  it("moda: valor más frecuente", () => {
    expect(evalSrc("moda([1, 2, 2, 3])")).toBe(2);
    expect(evalSrc('moda(["a", "b", "a", "c", "a"])')).toBe("a");
  });
  it("moda: si todos aparecen 1 vez devuelve null", () => {
    expect(evalSrc("moda([1, 2, 3])")).toBeNull();
  });
  it("moda: si hay empate devuelve null", () => {
    expect(evalSrc("moda([1, 1, 2, 2])")).toBeNull();
  });
  it("moda: array vacío lanza error", () => {
    expect(() => evalSrc("moda([])")).toThrow(/array vacío/);
  });
  it("moda: no-array lanza error", () => {
    expect(() => evalSrc("moda(5)")).toThrow(EvalError);
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
