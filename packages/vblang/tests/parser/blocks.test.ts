import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import type {
  BloqueKind,
  Plantilla,
  VariablesBloque,
} from "../../src/parser/ast.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const FIXTURE_DIR = resolve(__dirname, "../fixtures/valid");

function load(name: string): Plantilla {
  const src = readFileSync(resolve(FIXTURE_DIR, name), "utf8");
  return parse(src);
}

function kindsOf(p: Plantilla): BloqueKind[] {
  return p.bloques.map((b) => b.kind);
}

function varNamesOf(p: Plantilla): string[] {
  const variables = p.bloques.find(
    (b) => b.kind === "variables",
  ) as VariablesBloque | undefined;
  return variables ? variables.declaraciones.map((d) => d.nombre) : [];
}

describe("parser / fixture 16.1 MRU sin generador", () => {
  const p = load("16_1_mru.vblang");
  it("parsea sin errores", () => {
    expect(p.kind).toBe("plantilla");
  });
  it("bloques esperados", () => {
    expect(kindsOf(p).sort()).toEqual(
      [
        "metadata",
        "variables",
        "restricciones",
        "enunciado",
        "respuesta",
        "unidad",
        "tolerancia",
      ].sort(),
    );
  });
  it("variables: v, t", () => {
    expect(varNamesOf(p)).toEqual(["v", "t"]);
  });
  it("tipo inferido: input", () => {
    expect(p.tipoInferido).toBe("input");
  });
});

describe("parser / fixture 16.2 MRU con generador", () => {
  const p = load("16_2_mru_generador.vblang");
  it("parsea sin errores", () => {
    expect(p.kind).toBe("plantilla");
  });
  it("incluye generador con id correcto", () => {
    const gen = p.bloques.find((b) => b.kind === "generador");
    expect(gen).toBeDefined();
    if (gen && gen.kind === "generador") {
      expect(gen.id).toBe("fisica/cinematica/MRU");
    }
  });
  it("tipo inferido por defecto: input (no hay campos de respuesta especiales)", () => {
    expect(p.tipoInferido).toBe("input");
  });
});

describe("parser / fixture 16.3 cuadrática con respuestas_validas", () => {
  const p = load("16_3_cuadratica.vblang");
  it("parsea sin errores", () => {
    expect(p.kind).toBe("plantilla");
  });
  it("respuestas_validas contiene 2 items", () => {
    const rv = p.bloques.find((b) => b.kind === "respuestas_validas");
    expect(rv).toBeDefined();
    if (rv && rv.kind === "respuestas_validas") {
      expect(rv.items).toHaveLength(2);
    }
  });
  it("variables: a, b, c", () => {
    expect(varNamesOf(p)).toEqual(["a", "b", "c"]);
  });
  it("tipo inferido: input", () => {
    expect(p.tipoInferido).toBe("input");
  });
});

describe("parser / fixture 16.4 energía con pasos", () => {
  const p = load("16_4_energia.vblang");
  it("parsea sin errores", () => {
    expect(p.kind).toBe("plantilla");
  });
  it("pasos tiene 3 ítems", () => {
    const pasos = p.bloques.find((b) => b.kind === "pasos");
    expect(pasos).toBeDefined();
    if (pasos && pasos.kind === "pasos") {
      expect(pasos.pasos).toHaveLength(3);
    }
  });
  it("tolerancia con porcentaje", () => {
    const tol = p.bloques.find((b) => b.kind === "tolerancia");
    expect(tol).toBeDefined();
    if (tol && tol.kind === "tolerancia") {
      expect(tol.valor).toBe(5);
      expect(tol.esPorcentaje).toBe(true);
    }
  });
  it("tipo inferido: input", () => {
    expect(p.tipoInferido).toBe("input");
  });
});

describe("parser / fixture 16.5 capitales (mc + dataset)", () => {
  const p = load("16_5_capitales.vblang");
  it("parsea sin errores", () => {
    expect(p.kind).toBe("plantilla");
  });
  it("incluye dataset y opciones", () => {
    const kinds = kindsOf(p);
    expect(kinds).toContain("dataset");
    expect(kinds).toContain("opciones");
    expect(kinds).toContain("tipo");
  });
  it("opciones: 4", () => {
    const op = p.bloques.find((b) => b.kind === "opciones");
    if (op && op.kind === "opciones") {
      expect(op.cantidad).toBe(4);
    }
  });
  it("tipo declarado y final: mc", () => {
    expect(p.tipoInferido).toBe("mc");
  });
});

describe("parser / fixture 16.6 marcar país en mapa", () => {
  const p = load("16_6_mapa.vblang");
  it("parsea sin errores", () => {
    expect(p.kind).toBe("plantilla");
  });
  it("incluye mapa y respuesta_iso", () => {
    const kinds = kindsOf(p);
    expect(kinds).toContain("mapa");
    expect(kinds).toContain("respuesta_iso");
  });
  it("nombre del mapa válido", () => {
    const mapa = p.bloques.find((b) => b.kind === "mapa");
    if (mapa && mapa.kind === "mapa") {
      expect(mapa.nombre).toBe("world_countries");
    }
  });
  it("tipo inferido: marcar_mapa", () => {
    expect(p.tipoInferido).toBe("marcar_mapa");
  });
});

describe("parser / fixture 16.7 análisis sintáctico", () => {
  const p = load("16_7_analisis.vblang");
  it("parsea sin errores", () => {
    expect(p.kind).toBe("plantilla");
  });
  it("etiquetas_pedidas con 3 etiquetas y campos correctos", () => {
    const e = p.bloques.find((b) => b.kind === "etiquetas_pedidas");
    expect(e).toBeDefined();
    if (e && e.kind === "etiquetas_pedidas") {
      expect(e.etiquetas).toHaveLength(3);
      const ids = e.etiquetas.map((x) => x.id);
      expect(ids).toEqual(["sujeto", "verbo", "od"]);
      expect(e.etiquetas[0].campos.find((c) => c.key === "nombre")).toBeDefined();
    }
  });
  it("incluye texto_analizar", () => {
    expect(kindsOf(p)).toContain("texto_analizar");
  });
  it("tipo inferido: analisis_sintactico", () => {
    expect(p.tipoInferido).toBe("analisis_sintactico");
  });
});

describe("parser / fixture 16.8 ordenar eventos", () => {
  const p = load("16_8_ordenar.vblang");
  it("parsea sin errores", () => {
    expect(p.kind).toBe("plantilla");
  });
  it("incluye respuesta_orden y opciones_explicitas", () => {
    const kinds = kindsOf(p);
    expect(kinds).toContain("respuesta_orden");
    expect(kinds).toContain("opciones_explicitas");
  });
  it("variables: eventos", () => {
    expect(varNamesOf(p)).toEqual(["eventos"]);
  });
  it("tipo inferido: ordenar", () => {
    expect(p.tipoInferido).toBe("ordenar");
  });
});

describe("parser / propiedades generales", () => {
  it("loc.line de cada bloque es coherente", () => {
    const p = load("16_1_mru.vblang");
    for (const b of p.bloques) {
      expect(b.loc.line).toBeGreaterThanOrEqual(1);
      expect(b.loc.endLine).toBeGreaterThanOrEqual(b.loc.line);
    }
  });
});
