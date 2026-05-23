import { describe, expect, it, vi } from "vitest";
import { EvalError } from "../../src/evaluator/errors.js";
import { parse } from "../../src/parser/parser.js";
import { compile } from "../../src/runtime/compile.js";
import { generate } from "../../src/runtime/generate.js";
import type {
  GeneradorAsistidoEjercicio,
  GeneradorAsistidoProvider,
} from "../../src/runtime/provider.js";

function mockNumericProvider(): GeneradorAsistidoProvider {
  return {
    generar: vi.fn((_id, _seed, _dif) => ({
      enunciado: "Mock numerico",
      datos: { x: 42 },
      resultado: 100,
      unidades: { resultado: "km" },
      toleranciaRelativa: 0.05,
    })) as unknown as GeneradorAsistidoProvider["generar"],
  };
}

describe("generador asistido / shape numerico", () => {
  it("plantilla con sólo generador + enunciado: usa el del generador", () => {
    const src = `
generador: foo/bar
enunciado: ""
`;
    // El parser exige enunciado no vacío en algunos casos; usamos "X" en lugar.
    const src2 = `
generador: foo/bar
enunciado: "X"
`;
    void src;
    const compiled = compile(parse(src2));
    const provider = mockNumericProvider();
    const result = generate(compiled, { seed: "s1", provider });
    expect(result.tipo).toBe("input");
    expect(result.respuesta).toBe(100);
    expect(result.unidad).toBe("km");
    // toleranciaRelativa del provider (ya ratio) se guarda como porcentaje
    // equivalente para que el adapter recupere el ratio original.
    expect(result.tolerancia).toEqual({ valor: 5, esPorcentaje: true });
    // enunciado: "X" gana sobre el del generador.
    expect(result.enunciado).toBe("X");
  });

  it("enunciado: interpola con datos del provider", () => {
    const src = `
generador: foo/bar
enunciado: "Valor: {x}"
`;
    const compiled = compile(parse(src));
    const provider = mockNumericProvider();
    const result = generate(compiled, { seed: "s2", provider });
    expect(result.enunciado).toBe("Valor: 42");
  });
});

describe("generador asistido / errores", () => {
  it("plantilla con generador y sin provider → EvalError", () => {
    const src = `
generador: foo/bar
enunciado: "X"
`;
    const compiled = compile(parse(src));
    expect(() => generate(compiled, { seed: "s" })).toThrow(EvalError);
    expect(() => generate(compiled, { seed: "s" })).toThrow(
      /no se proveyó provider/,
    );
  });

  it("provider devuelve null → EvalError no existe", () => {
    const src = `
generador: inexistente
enunciado: "X"
`;
    const compiled = compile(parse(src));
    const provider: GeneradorAsistidoProvider = { generar: () => null };
    expect(() => generate(compiled, { seed: "s", provider })).toThrow(
      /no existe/,
    );
  });
});

describe("generador asistido / dificultad", () => {
  it("metadata dificultad 3 → provider recibe 'avanzado'", () => {
    const src = `
metadata:
  dificultad: 3

generador: foo/bar
enunciado: "X"
`;
    const compiled = compile(parse(src));
    const generar = vi.fn(
      (_id: string, _s: string, _d?: string): GeneradorAsistidoEjercicio => ({
        enunciado: "Y",
        resultado: 1,
      }),
    );
    generate(compiled, { seed: "s", provider: { generar } });
    expect(generar).toHaveBeenCalledWith("foo/bar", "s", "avanzado");
  });

  it("metadata dificultad 'basico' → provider recibe 'basico'", () => {
    const src = `
metadata:
  dificultad: "basico"

generador: foo/bar
enunciado: "X"
`;
    const compiled = compile(parse(src));
    const generar = vi.fn(
      (_id: string, _s: string, _d?: string): GeneradorAsistidoEjercicio => ({
        enunciado: "Y",
        resultado: 1,
      }),
    );
    generate(compiled, { seed: "s", provider: { generar } });
    expect(generar).toHaveBeenCalledWith("foo/bar", "s", "basico");
  });

  it("sin dificultad → 'intermedio' por default", () => {
    const src = `
generador: foo/bar
enunciado: "X"
`;
    const compiled = compile(parse(src));
    const generar = vi.fn(
      (_id: string, _s: string, _d?: string): GeneradorAsistidoEjercicio => ({
        enunciado: "Y",
        resultado: 1,
      }),
    );
    generate(compiled, { seed: "s", provider: { generar } });
    expect(generar).toHaveBeenCalledWith("foo/bar", "s", "intermedio");
  });
});

describe("generador asistido / shape quiz", () => {
  it("opciones + indiceCorrecto → tipo mc", () => {
    const src = `
generador: foo/quiz
enunciado: "X"
`;
    const compiled = compile(parse(src));
    const provider: GeneradorAsistidoProvider = {
      generar: () => ({
        enunciado: "Y",
        opciones: ["a", "b", "c"],
        indiceCorrecto: 1,
      }),
    };
    const result = generate(compiled, { seed: "s", provider });
    expect(result.tipo).toBe("mc");
    expect(result.opciones).toHaveLength(3);
    expect(result.opciones![1].correcta).toBe(true);
    expect(result.opciones![0].correcta).toBe(false);
  });
});

describe("generador asistido / shape completar", () => {
  it("respuestaCorrecta → tipo completar", () => {
    const src = `
generador: foo/completar
enunciado: "X"
`;
    const compiled = compile(parse(src));
    const provider: GeneradorAsistidoProvider = {
      generar: () => ({
        enunciado: "Y",
        respuestaCorrecta: "respuesta",
      }),
    };
    const result = generate(compiled, { seed: "s", provider });
    expect(result.tipo).toBe("completar");
    expect(result.respuesta).toBe("respuesta");
  });
});
