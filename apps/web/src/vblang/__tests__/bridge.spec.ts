import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { generadorAsistidoProvider } from "../provider";
import { runPlantilla } from "../runPlantilla";

const __dirname = dirname(fileURLToPath(import.meta.url));
// Las fixtures viven en packages/vblang/tests/fixtures/valid/. Subimos tres
// niveles desde apps/web/src/vblang/__tests__/ y reentramos.
const FIXTURE_DIR = resolve(
  __dirname,
  "../../../../../packages/vblang/tests/fixtures/valid",
);

function loadFixture(name: string): string {
  return readFileSync(resolve(FIXTURE_DIR, name), "utf8");
}

describe("bridge / runPlantilla sin generador (fixture 16.1 MRU)", () => {
  it("devuelve ModuleQuizQuestion completo", () => {
    const src = loadFixture("16_1_mru.vblang");
    const q = runPlantilla(src, { seed: "demo-1", focus: "fisica/cinematica/MRU" });
    expect(q.prompt.length).toBeGreaterThan(0);
    expect(q.questionType).toBe("input");
    expect(q.answerKey).toBeDefined();
    expect(q.focus).toBe("fisica/cinematica/MRU");
    expect(q.unidades?.resultado).toBe("km");
  });
});

describe("bridge / provider con generadoresV2", () => {
  it("provider.generar('fisica/cinematica', seed) devuelve un ejercicio", () => {
    const e = generadorAsistidoProvider.generar(
      "fisica/cinematica",
      "bridge-1",
      "intermedio",
    );
    expect(e).not.toBeNull();
    // Cinematica devuelve numerico o quiz dependiendo del subtipo;
    // chequeamos algún shape.
    if (e) {
      const hasOpciones = Array.isArray(e.opciones);
      const hasResultado = typeof e.resultado === "number";
      const hasRespuesta = e.respuestaCorrecta !== undefined;
      expect(hasOpciones || hasResultado || hasRespuesta).toBe(true);
      expect(typeof e.enunciado).toBe("string");
    }
  });

  it("provider.generar('inexistente') devuelve null", () => {
    const e = generadorAsistidoProvider.generar("no/existe", "s", "basico");
    expect(e).toBeNull();
  });
});

describe("bridge / runPlantilla con generador asistido", () => {
  it("runPlantilla con plantilla que usa generador real produce ModuleQuizQuestion", () => {
    const src = `
generador: fisica/cinematica
enunciado: ""
`;
    // Para evitar enunciado vacío del parser, usamos placeholder
    const src2 = `
generador: fisica/cinematica
enunciado: "X"
`;
    void src;
    const q = runPlantilla(src2, { seed: "bridge-real-1" });
    expect(q.prompt.length).toBeGreaterThan(0);
    // El enunciado de la plantilla gana sobre el del generador → debería ser "X".
    expect(q.prompt).toBe("X");
    expect(q.questionType).toBeDefined();
  });
});
