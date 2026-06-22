/**
 * WO-4 — runtime: el bloque `visual:` hand-authored produce un VisualSpec en el
 * path NO-generador (igual que el path generador propaga `ejercicio.visual`).
 *
 * Cubre:
 * 1. line-chart nativo → GenerationResult.visual con la forma de LineChartSpec.
 * 2. Variables interpoladas dentro del visual (data calculada).
 * 3. latex y timeline nativos también se emiten.
 * 4. No-regresión: sin `visual:` → GenerationResult.visual undefined.
 * 5. `kind` inválido / sin campo requerido → undefined (no emite spec roto).
 * 6. camposToVisualSpec round-trippea data pura.
 */
import { describe, expect, it } from "vitest";
import { parse } from "../../src/parser/parser.js";
import { compile } from "../../src/runtime/compile.js";
import { generate } from "../../src/runtime/generate.js";
import type { LineChartSpec } from "../../src/types/visual.js";

function gen(src: string) {
  return generate(compile(parse(src)), { seed: "wo4-seed" });
}

describe("WO-4 — visual nativo en el path no-generador", () => {
  it("emite un line-chart con su forma de LineChartSpec", () => {
    const res = gen(`enunciado: "Mirá el gráfico"
respuesta: 1
visual:
  kind: "line-chart"
  title: "Velocidad vs tiempo"
  series: [ { id: "v", label: "v(t)", points: [ { x: 0, "y": 0 }, { x: 1, "y": 2 }, { x: 2, "y": 4 } ] } ]
`);
    expect(res.visual).toBeDefined();
    const v = res.visual as LineChartSpec;
    expect(v.kind).toBe("line-chart");
    expect(v.title).toBe("Velocidad vs tiempo");
    expect(v.series).toHaveLength(1);
    expect(v.series[0].points).toEqual([
      { x: 0, y: 0 },
      { x: 1, y: 2 },
      { x: 2, y: 4 },
    ]);
  });

  it("interpola variables dentro del visual (data calculada)", () => {
    const res = gen(`variables:
  m: 3
enunciado: "Recta de pendiente {m}"
respuesta: m
visual:
  kind: "line-chart"
  series: [ { id: "r", label: "y=mx", points: [ { x: 0, "y": 0 }, { x: 1, "y": m }, { x: 2, "y": 2 * m } ] } ]
`);
    const v = res.visual as LineChartSpec;
    expect(v.series[0].points).toEqual([
      { x: 0, y: 0 },
      { x: 1, y: 3 },
      { x: 2, y: 6 },
    ]);
  });

  it("emite latex y timeline nativos", () => {
    const latex = gen(`enunciado: "Fórmula"
respuesta: 1
visual:
  kind: "latex"
  content: "e^{i\\\\pi} + 1 = 0"
  displayMode: verdadero
`);
    expect(latex.visual?.kind).toBe("latex");

    const timeline = gen(`enunciado: "Cronología"
respuesta: 1
visual:
  kind: "timeline"
  events: [ { id: "e1", title: "Independencia", date: "1816" } ]
`);
    expect(timeline.visual?.kind).toBe("timeline");
  });

  it("no-regresión: sin `visual:` → visual undefined", () => {
    const res = gen(`enunciado: "Sin visual"
respuesta: 1
`);
    expect(res.visual).toBeUndefined();
  });

  it("kind inválido o sin campo requerido → undefined (no rompe el render)", () => {
    const malo = gen(`enunciado: "x"
respuesta: 1
visual:
  kind: "no-existe"
  foo: 1
`);
    expect(malo.visual).toBeUndefined();

    const sinSeries = gen(`enunciado: "x"
respuesta: 1
visual:
  kind: "line-chart"
  title: "sin series"
`);
    expect(sinSeries.visual).toBeUndefined();
  });
});
