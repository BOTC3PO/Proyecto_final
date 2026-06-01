/**
 * Test del render del visual "Circuito" en VisualizerRenderer (WO11). Antes
 * mostraba un placeholder "Próximamente"; ahora dibuja un esquema SVG accesible.
 */
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import VisualizerRenderer from "../VisualizerRenderer";
import type { CircuitSpec } from "../../../generadoresV2/core/types";

describe("VisualizerRenderer · circuit", () => {
  it("renderiza un SVG accesible con los elementos del circuito", () => {
    const spec: CircuitSpec = {
      kind: "circuit",
      elements: [
        { id: "b1", type: "batería", value: 9, unit: "V" },
        { id: "r1", type: "resistencia", value: 220, unit: "Ω" },
      ],
    };
    render(<VisualizerRenderer spec={spec} />);
    const img = screen.getByRole("img");
    expect(img.getAttribute("aria-label")).toMatch(/circuito en serie con 2 elementos/i);
    // Ya no muestra el placeholder de "próximamente".
    expect(screen.queryByText(/próximamente/i)).toBeNull();
  });

  it("maneja un circuito vacío sin romperse", () => {
    render(<VisualizerRenderer spec={{ kind: "circuit", elements: [] }} />);
    expect(screen.getByText(/circuito vacío/i)).toBeTruthy();
  });
});
