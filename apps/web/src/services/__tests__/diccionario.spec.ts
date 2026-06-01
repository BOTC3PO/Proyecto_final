/**
 * Helpers puros del diccionario usados por los editores (WO09): normalización
 * de definiciones y sugerencia de categoría gramatical.
 */
import { describe, expect, it } from "vitest";
import {
  normalizeDefiniciones,
  sugerirCategoriaGramatical,
} from "../diccionario";

describe("normalizeDefiniciones", () => {
  it("acepta array, string suelto y JSON serializado", () => {
    expect(normalizeDefiniciones(["a", "b"])).toEqual(["a", "b"]);
    expect(normalizeDefiniciones("hola")).toEqual(["hola"]);
    expect(normalizeDefiniciones('["x","y"]')).toEqual(["x", "y"]);
    expect(normalizeDefiniciones(undefined)).toEqual([]);
  });
});

describe("sugerirCategoriaGramatical", () => {
  it("infiere sustantivo desde el género (m./f.)", () => {
    expect(
      sugerirCategoriaGramatical({ definitions: ["m. Animal mamífero."] }),
    ).toBe("sustantivo");
    expect(
      sugerirCategoriaGramatical({ definitions: ["f. Construcción para vivir."] }),
    ).toBe("sustantivo");
  });

  it("infiere verbo desde tr./intr./prnl.", () => {
    expect(
      sugerirCategoriaGramatical({ definitions: ["tr. Realizar una acción."] }),
    ).toBe("verbo");
  });

  it("infiere adjetivo y adverbio", () => {
    expect(
      sugerirCategoriaGramatical({ definitions: ["adj. Que tiene color."] }),
    ).toBe("adjetivo");
    expect(
      sugerirCategoriaGramatical({ definitions: ["adv. De modo rápido."] }),
    ).toBe("adverbio");
  });

  it("devuelve null si no reconoce marcador o no hay entrada", () => {
    expect(sugerirCategoriaGramatical(null)).toBeNull();
    expect(sugerirCategoriaGramatical({ definitions: [] })).toBeNull();
    expect(
      sugerirCategoriaGramatical({ definitions: ["Sin marcador reconocible"] }),
    ).toBeNull();
  });
});
