/**
 * PLAN-G3 Fase 1: las diapositivas con `blockSpec` deben renderizar el bloque
 * en el presenter (la vista del alumno), no sólo en el editor.
 * Bug original: SlideContent manejaba toolSpec pero nunca blockSpec, y el
 * contenido desaparecía al presentar.
 */

import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import SlidePresenter from "../SlidePresenter";
import type { Slide } from "../TheorySlideEditor";
import type { Block } from "../../../blocks/types";

const TABLE_BLOCK: Block = {
  id: "b1",
  type: "table",
  headers: ["Elemento", "Símbolo"],
  rows: [["Hidrógeno", "H"]],
};

const SLIDE_CON_BLOQUE: Slide = {
  id: "s1",
  layout: "top",
  heading: "Tabla de elementos",
  subtitle: "Primeros elementos",
  blockSpec: TABLE_BLOCK,
};

describe("SlidePresenter con blockSpec", () => {
  it("renderiza heading, subtitle y el bloque (tabla) en el presenter", () => {
    render(
      <SlidePresenter
        slides={[SLIDE_CON_BLOQUE]}
        theme="minimal"
        title="Presentación de prueba"
        onClose={vi.fn()}
      />,
    );

    expect(screen.getByText("Tabla de elementos")).toBeInTheDocument();
    expect(screen.getByText("Primeros elementos")).toBeInTheDocument();
    expect(screen.getByText("Hidrógeno")).toBeInTheDocument();
    expect(screen.getByText("H")).toBeInTheDocument();
  });

  it("blockSpec gana sobre toolSpec (misma precedencia que el editor)", () => {
    const slide: Slide = {
      ...SLIDE_CON_BLOQUE,
      // toolSpec presente pero blockSpec debe ganar
      toolSpec: { kind: "chart" } as never,
    };
    render(
      <SlidePresenter
        slides={[slide]}
        theme="minimal"
        title="Presentación de prueba"
        onClose={vi.fn()}
      />,
    );
    expect(screen.getByText("Hidrógeno")).toBeInTheDocument();
  });
});
