import { describe, expect, it, vi } from "vitest";
import { EvalError } from "../../src/evaluator/errors.js";
import { parse } from "../../src/parser/parser.js";
import { compile } from "../../src/runtime/compile.js";
import { generate } from "../../src/runtime/generate.js";
import type { GeneradorAsistidoProvider } from "../../src/runtime/provider.js";

function providerConDatasets(
  datasets: Record<string, Array<Record<string, unknown>> | null>,
): GeneradorAsistidoProvider {
  return {
    generar: vi.fn(() => null),
    obtenerDataset: vi.fn((nombre: string) => {
      if (nombre in datasets) return datasets[nombre];
      return null;
    }) as unknown as GeneradorAsistidoProvider["obtenerDataset"],
  };
}

describe("generate / dataset (Sprint 10A)", () => {
  it("plantilla con dataset: <nombre> usa filas reales del provider", () => {
    const src = `
dataset: paises
variables:
  pais: uno_de(paises)
enunciado: "Capital de {pais.nombre}"
respuesta: pais.nombre
tipo: completar
`;
    const provider = providerConDatasets({
      paises: [
        { nombre: "Argentina", iso: "ARG" },
        { nombre: "Brasil", iso: "BRA" },
      ],
    });
    const compiled = compile(parse(src));
    const result = generate(compiled, { seed: "s-1", provider });
    expect(result.tipo).toBe("completar");
    // El enunciado debe haber interpolado un nombre del dataset.
    expect(
      result.enunciado === "Capital de Argentina" ||
        result.enunciado === "Capital de Brasil",
    ).toBe(true);
    expect(["Argentina", "Brasil"]).toContain(result.respuesta as string);
  });

  it("dataset inexistente lanza EvalError mencionando el nombre", () => {
    const src = `
dataset: noexiste
variables:
  x: uno_de(noexiste)
enunciado: "{x}"
respuesta: x
tipo: completar
`;
    const provider = providerConDatasets({});
    const compiled = compile(parse(src));
    expect(() => generate(compiled, { seed: "s-2", provider })).toThrow(
      EvalError,
    );
    try {
      generate(compiled, { seed: "s-2", provider });
    } catch (err) {
      expect((err as EvalError).message).toContain("noexiste");
    }
  });

  it("dataset sin provider lanza EvalError con mensaje claro", () => {
    const src = `
dataset: paises
variables:
  x: uno_de(paises)
enunciado: "{x}"
respuesta: x
tipo: completar
`;
    const compiled = compile(parse(src));
    expect(() => generate(compiled, { seed: "s-3" })).toThrow(EvalError);
    try {
      generate(compiled, { seed: "s-3" });
    } catch (err) {
      expect((err as EvalError).message).toContain("paises");
    }
  });
});
