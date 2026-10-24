/**
 * Tests del wizard "Nueva plantilla".
 *
 * Cubre:
 *  - Se muestra en modo creación (`isNew=true`) con un ejemplo por tipo.
 *  - Elegir un ejemplo carga su `codigoDsl` en el editor (vía onPick).
 *  - "Empezar en blanco" llama onBlank sin tocar el codigo.
 *  - Esc y el botón X cierran el wizard (equivalente a blank).
 *  - Cuando se monta con isNew=false, NO se renderiza (test del padre).
 */

import { describe, expect, it, vi } from "vitest";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import NuevaPlantillaWizard from "../NuevaPlantillaWizard";
import type { VblangExample } from "../../../vblang/examples";

vi.mock("../../../domain/vblang/plantillaApi", () => ({
  getPlantilla: vi.fn().mockRejectedValue(new Error("should not be called")),
  createPlantilla: vi.fn(),
  updatePlantilla: vi.fn(),
  DslApiError: class extends Error {
    line?: number;
    col?: number;
  },
}));

// Tres ejemplos minimos (uno por tipo) para que el test no dependa del set
// completo de SPRINT_9B_EXAMPLES.
const TEST_EXAMPLES: VblangExample[] = [
  {
    id: "ex-input",
    titulo: "Input demo",
    descripcion: "Plantilla de input numerico.",
    codigoDsl: `variables:
  a: random(1, 10)

enunciado: "Cuanto es {a}?"
respuesta: a
tipo: input
`,
  },
  {
    id: "ex-ordenar",
    titulo: "Ordenar demo",
    descripcion: "Plantilla de ordenar.",
    codigoDsl: `variables:
  items: ["A", "B", "C"]

enunciado: "Ordená"
tipo: ordenar
opciones_explicitas: items
respuesta_orden: items
`,
  },
  {
    id: "ex-mapa",
    titulo: "Mapa demo",
    descripcion: "Plantilla de mapa.",
    codigoDsl: `mapa: world_countries

variables:
  pais: "Argentina"

enunciado: "Marcá {pais}"
tipo: marcar_mapa
respuesta_iso: "ARG"
respuesta_nombre: "Argentina"
`,
  },
];

describe("NuevaPlantillaWizard", () => {
  it("muestra una grilla con los ejemplos agrupados por tipo", () => {
    const onPick = vi.fn();
    const onBlank = vi.fn();
    const onClose = vi.fn();
    render(
      <NuevaPlantillaWizard
        onPick={onPick}
        onBlank={onBlank}
        onClose={onClose}
        examples={TEST_EXAMPLES}
      />,
    );
    // Un grupo por cada tipo presente.
    expect(
      screen.getByTestId("vblang-wizard-group-input"),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("vblang-wizard-group-ordenar"),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("vblang-wizard-group-marcar_mapa"),
    ).toBeInTheDocument();
    // Tarjeta del ejemplo de input visible.
    expect(screen.getByTestId("vblang-wizard-pick-ex-input")).toBeInTheDocument();
    // Botón "Empezar en blanco" presente.
    expect(screen.getByTestId("vblang-wizard-blank")).toBeInTheDocument();
  });

  it("elegir un ejemplo invoca onPick con su codigoDsl", () => {
    const onPick = vi.fn();
    const onBlank = vi.fn();
    const onClose = vi.fn();
    render(
      <NuevaPlantillaWizard
        onPick={onPick}
        onBlank={onBlank}
        onClose={onClose}
        examples={TEST_EXAMPLES}
      />,
    );
    fireEvent.click(screen.getByTestId("vblang-wizard-pick-ex-ordenar"));
    expect(onPick).toHaveBeenCalledTimes(1);
    expect(onPick).toHaveBeenCalledWith(TEST_EXAMPLES[1].codigoDsl);
    expect(onBlank).not.toHaveBeenCalled();
  });

  it("'Empezar en blanco' invoca onBlank sin pasar codigoDsl", () => {
    const onPick = vi.fn();
    const onBlank = vi.fn();
    const onClose = vi.fn();
    render(
      <NuevaPlantillaWizard
        onPick={onPick}
        onBlank={onBlank}
        onClose={onClose}
        examples={TEST_EXAMPLES}
      />,
    );
    fireEvent.click(screen.getByTestId("vblang-wizard-blank"));
    expect(onBlank).toHaveBeenCalledTimes(1);
    expect(onPick).not.toHaveBeenCalled();
  });

  it("Esc cierra el wizard (invoca onClose)", () => {
    const onClose = vi.fn();
    render(
      <NuevaPlantillaWizard
        onPick={vi.fn()}
        onBlank={vi.fn()}
        onClose={onClose}
        examples={TEST_EXAMPLES}
      />,
    );
    fireEvent.keyDown(document, { key: "Escape" });
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("el boton X cierra el wizard (invoca onClose)", () => {
    const onClose = vi.fn();
    render(
      <NuevaPlantillaWizard
        onPick={vi.fn()}
        onBlank={vi.fn()}
        onClose={onClose}
        examples={TEST_EXAMPLES}
      />,
    );
    fireEvent.click(screen.getByRole("button", { name: /cerrar wizard/i }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("es un dialog accesible con role/aria-modal/aria-labelledby", () => {
    render(
      <NuevaPlantillaWizard
        onPick={vi.fn()}
        onBlank={vi.fn()}
        onClose={vi.fn()}
        examples={TEST_EXAMPLES}
      />,
    );
    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveAttribute("aria-modal", "true");
    const labelledBy = dialog.getAttribute("aria-labelledby");
    expect(labelledBy).toBeTruthy();
    expect(
      document.getElementById(labelledBy as string)?.textContent,
    ).toMatch(/nueva plantilla/i);
  });
});

/* ---------- Integración con PlantillaEditor: solo en isNew ---------- */

describe("PlantillaEditor + wizard", () => {
  async function renderEditor(path: string) {
    const { default: PlantillaEditor } = await import("../../../pages/PlantillaEditor");
    return render(
      <MemoryRouter initialEntries={[path]}>
        <Routes>
          <Route path="/plantillas/nueva" element={<PlantillaEditor />} />
          <Route path="/plantillas/:id" element={<PlantillaEditor />} />
        </Routes>
      </MemoryRouter>,
    );
  }

  it("en modo creacion (/plantillas/nueva) se muestra el wizard", async () => {
    const result = await renderEditor("/plantillas/nueva");
    await act(async () => {
      // El editor no hace fetch en isNew, pero avanzamos timers por si las dudas.
    });
    expect(
      result.getByTestId("vblang-wizard"),
    ).toBeInTheDocument();
  });

  it("en modo edicion (/plantillas/abc) NO se muestra el wizard", async () => {
    const result = await renderEditor("/plantillas/abc");
    // El editor intenta fetch (mockeado como reject). Eso lleva a loadStatus=error
    // y el componente renderiza un mensaje, no el wizard.
    await act(async () => {
      await Promise.resolve();
    });
    expect(result.queryByTestId("vblang-wizard")).toBeNull();
  });
});
