import { describe, expect, it } from "vitest";
import { antecesores, buscar, dibujarSeccion, sucesores, ubicaciones, type DatosMapa, type ModuloMapa } from "../mapaTemario";

// a → b → d, a → c → d, x (de otra sección) → c
const M: Record<string, ModuloMapa> = {
  a: { t: "Conteo", m: "matematica" },
  b: { t: "Suma y resta", m: "matematica", d: ["a"] },
  c: { t: "Multiplicación", m: "matematica", d: ["a", "x"] },
  d: { t: "División", m: "matematica", d: ["b", "c"] },
  x: { t: "Números enteros", m: "matematica" },
  e: { t: "Examen de aritmética", m: "matematica", x: 1, d: ["d"] },
};

describe("dibujarSeccion", () => {
  it("cada módulo en la columna de su camino más largo; los de otras secciones no se dibujan", () => {
    const { posiciones, aristas } = dibujarSeccion(["a", "b", "c", "d"], M);
    const col = (id: string) => posiciones.get(id)!.x;
    expect(col("a")).toBeLessThan(col("b"));
    expect(col("b")).toBe(col("c"));
    expect(col("c")).toBeLessThan(col("d"));
    expect(posiciones.has("x")).toBe(false);
    expect(aristas).toHaveLength(4);
    expect(aristas.some((a) => a.desde === "x")).toBe(false);
  });

  it("un ciclo en los datos no la cuelga", () => {
    const ciclo: Record<string, ModuloMapa> = { p: { t: "P", m: "m", d: ["q"] }, q: { t: "Q", m: "m", d: ["p"] } };
    const { posiciones } = dibujarSeccion(["p", "q"], ciclo);
    expect(posiciones.size).toBe(2);
  });
});

describe("recorridos", () => {
  it("antecesores: todo lo que hace falta antes, también de otras secciones", () => {
    expect([...antecesores("d", M)].sort()).toEqual(["a", "b", "c", "x"]);
    expect(antecesores("a", M).size).toBe(0);
  });

  it("sucesores: todo lo que habilita, incluido el examen", () => {
    expect([...sucesores("a", M)].sort()).toEqual(["b", "c", "d", "e"]);
  });
});

describe("buscar", () => {
  it("sin tildes ni mayúsculas; primero los que empiezan con lo buscado", () => {
    expect(buscar("divi", M)).toEqual(["d"]);
    expect(buscar("MULTIPLICACION", M)).toEqual(["c"]);
    expect(buscar("en", M)[0]).toBe("x"); // «Números enteros» contiene «en»; ninguno empieza con «en»
    expect(buscar("s", M)).toEqual([]); // menos de 2 letras no busca
  });
});

describe("ubicaciones", () => {
  it("camino y sección de cada módulo", () => {
    const datos: DatosMapa = {
      formato: 1,
      caminos: [{ id: "numerico", titulo: "Numérico", secciones: [{ id: "general", titulo: null, modulos: ["a", "b"] }] }],
      modulos: M,
    };
    expect(ubicaciones(datos).get("b")).toEqual({ camino: "numerico", seccion: "general" });
  });
});
