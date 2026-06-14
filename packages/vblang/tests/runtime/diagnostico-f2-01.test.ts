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

describe("F2-01 diagnostico datasets con nombres con espacios", () => {
  // Simula el nombre REAL del seed:
  //   nombre: "Capitales de América"
  // Filas tienen columnas: lat, lon, nombre (string).
  const filasCapitales = [
    { nombre: "Buenos Aires", lat: -34.61, lon: -58.38 },
    { nombre: "Brasilia", lat: -15.79, lon: -47.88 },
    { nombre: "Santiago", lat: -33.45, lon: -70.66 },
  ];

  it("A) dataset con comillas + uno_de como string LITERAL falla", () => {
    // Esto es lo que el usuario "naturalmente" escribiría al seguir
    // la guía del DatasetExplorer: `dataset: "Capitales de América"`
    const src = `
dataset: "Capitales de América"
variables:
  fila: uno_de("Capitales de América")
enunciado: "Decí el nombre de la capital: {fila.nombre}"
respuesta: fila.nombre
tipo: completar
`;
    const provider = providerConDatasets({ "Capitales de América": filasCapitales });
    const compiled = compile(parse(src));
    try {
      generate(compiled, { seed: "s-1", provider });
      // Si NO lanza, es inesperado (el bug está corregido).
      expect.unreachable("debió lanzar EvalError");
    } catch (err) {
      // Documentamos qué pasa.
      console.log("A) resultado:", (err as Error).message);
      expect(err).toBeInstanceOf(EvalError);
    }
  });

  it("B) dataset con comillas + variable local con guion bajo", () => {
    // Workaround que el usuario podría intentar: usar un alias
    // sintáctico. La realidad es que el scope se popula con el NOMBRE
    // del dataset, no con un alias que elija el usuario.
    const src = `
dataset: "Capitales de América"
variables:
  fila: uno_de(Capitales_de_America)
enunciado: "Capital: {fila.nombre}"
respuesta: fila.nombre
tipo: completar
`;
    const provider = providerConDatasets({ "Capitales de América": filasCapitales });
    const compiled = compile(parse(src));
    try {
      generate(compiled, { seed: "s-1", provider });
      expect.unreachable("debió lanzar");
    } catch (err) {
      console.log("B) resultado:", (err as Error).message);
      expect(err).toBeInstanceOf(EvalError);
    }
  });

  it("C) el ejemplo de la fixture 16_5_capitales.vblang (dataset: capitales_mundo + uno_de(dataset))", () => {
    // El archivo de fixture usa literalmente `uno_de(dataset)`.
    // La variable `dataset` (palabra clave) NO está en scope; lo que
    // está en scope es el NOMBRE del dataset (`capitales_mundo`).
    const src = `
dataset: capitales_mundo
variables:
  pais: uno_de(dataset)
enunciado: "Cual es la capital de {pais.nombre}?"
tipo: mc
opciones: 4
respuesta: pais.capital
`;
    const provider = providerConDatasets({
      capitales_mundo: [
        { nombre: "Argentina", capital: "Buenos Aires" },
        { nombre: "Brasil", capital: "Brasilia" },
        { nombre: "Chile", capital: "Santiago" },
        { nombre: "Perú", capital: "Lima" },
        { nombre: "Uruguay", capital: "Montevideo" },
      ],
    });
    const compiled = compile(parse(src));
    try {
      generate(compiled, { seed: "s-1", provider });
      expect.unreachable("debió lanzar");
    } catch (err) {
      console.log("C) resultado:", (err as Error).message);
      expect(err).toBeInstanceOf(EvalError);
    }
  });

  it("D) caso que SÍ funciona: nombre simple, mismo nombre en uno_de", () => {
    // Caso "feliz": el nombre es un IDENT válido (sin espacios).
    const src = `
dataset: capitales
variables:
  fila: uno_de(capitales)
enunciado: "Capital: {fila.nombre}"
respuesta: fila.nombre
tipo: completar
`;
    const provider = providerConDatasets({ capitales: filasCapitales });
    const compiled = compile(parse(src));
    const result = generate(compiled, { seed: "s-1", provider });
    expect(result.tipo).toBe("completar");
    expect((result.respuesta as string).length).toBeGreaterThan(0);
    console.log("D) enunciado:", result.enunciado, "respuesta:", result.respuesta);
  });

  it("E) caso idéntico al anterior pero con string en dataset", () => {
    // Si el usuario usa comillas, el scope se popula con el MISMO string
    // "capitales". ¿Sigue funcionando `uno_de(capitales)`?
    const src = `
dataset: "capitales"
variables:
  fila: uno_de(capitales)
enunciado: "Capital: {fila.nombre}"
respuesta: fila.nombre
tipo: completar
`;
    const provider = providerConDatasets({ capitales: filasCapitales });
    const compiled = compile(parse(src));
    try {
      const result = generate(compiled, { seed: "s-1", provider });
      console.log("E) OK enunciado:", result.enunciado, "respuesta:", result.respuesta);
    } catch (err) {
      console.log("E) FAIL:", (err as Error).message);
    }
  });

  it("F) string literal en uno_de NO funciona (confirma que el scope usa el nombre como IDENT)", () => {
    // Aunque el dataset esté declarado como "Capitales de América"
    // y el scope tenga scope.set("Capitales de América", filas),
    // el evaluador requiere un IDENT (no STRING) para resolver la variable.
    const src = `
dataset: "Capitales de América"
variables:
  fila: uno_de(Capitales_de_America)
enunciado: "Capital: {fila.nombre}"
respuesta: fila.nombre
tipo: completar
`;
    const provider = providerConDatasets({ "Capitales de América": filasCapitales });
    const compiled = compile(parse(src));
    try {
      generate(compiled, { seed: "s-1", provider });
      expect.unreachable("debió lanzar (variable indefinida)");
    } catch (err) {
      console.log("F) resultado:", (err as Error).message);
      expect((err as Error).message).toMatch(/variable indefinida|Capitales_de_America/i);
    }
  });
});
