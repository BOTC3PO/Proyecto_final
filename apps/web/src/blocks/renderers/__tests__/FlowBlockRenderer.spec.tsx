import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import { FlowBlockRenderer, dividirEtiqueta, puntoEnBorde } from "../FlowBlockRenderer";

describe("FlowBlockRenderer", () => {
  it("parte las etiquetas largas en varias líneas sin cortar palabras", () => {
    expect(dividirEtiqueta("Planificar los objetivos del año")).toEqual(["Planificar los", "objetivos del año"]);
    expect(dividirEtiqueta("Corto")).toEqual(["Corto"]);
  });

  it("las flechas terminan en el borde del nodo y no en su centro (si no quedan tapadas)", () => {
    const a = { x: 0, y: 0 };
    const p = puntoEnBorde(a, { cx: 300, cy: 26 }); // nodo de 150×52 a la izquierda de otro
    expect(p.x).toBeCloseTo(150);
    expect(p.y).toBeCloseTo(26);
    const q = puntoEnBorde({ x: 0, y: 0, shape: "diamond" }, { cx: 75, cy: 200 });
    expect(q.x).toBeCloseTo(75);
    expect(q.y).toBeCloseTo(52);
  });

  it("escala con el ancho (viewBox) y dibuja una línea por arista", () => {
    const { container } = render(
      <FlowBlockRenderer
        block={{
          id: "f", type: "flow",
          nodes: [{ id: "a", label: "Uno", x: 0, y: 0 }, { id: "b", label: "Dos", x: 200, y: 0 }],
          edges: [{ id: "e", fromId: "a", toId: "b" }],
        }}
      />,
    );
    expect(container.querySelector("svg")?.getAttribute("viewBox")).toBe("-20 -20 390 92");
    expect(container.querySelectorAll("line").length).toBe(1);
  });
});
