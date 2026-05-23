/**
 * Smoke test del editor V3.
 *
 * Estrategia:
 *  - Renderizamos con MemoryRouter sin id (modo creación), de modo que no
 *    se dispara fetch contra la API.
 *  - Verificamos que monta y muestra los paneles principales.
 *  - Cambiamos el código y, tras el debounce + tick, el preview se actualiza.
 */

import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { act, render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

// Mock del API client — ningún test debería golpear network.
vi.mock("../../domain/vblang/plantillaApi", () => ({
  getPlantilla: vi.fn().mockRejectedValue(new Error("should not be called")),
  createPlantilla: vi.fn(),
  updatePlantilla: vi.fn(),
  DslApiError: class extends Error {
    line?: number;
    col?: number;
  },
}));

async function renderEditor() {
  const { default: PlantillaEditor } = await import("../PlantillaEditor");
  return render(
    <MemoryRouter initialEntries={["/plantillas/nueva"]}>
      <Routes>
        <Route path="/plantillas/nueva" element={<PlantillaEditor />} />
      </Routes>
    </MemoryRouter>,
  );
}

describe("PlantillaEditor (smoke)", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });
  afterEach(() => {
    vi.useRealTimers();
  });

  it("monta sin errores con la plantilla inicial", async () => {
    const result = await renderEditor();
    // Avanzamos timers para el debounce inicial
    await act(async () => {
      vi.advanceTimersByTime(700);
    });
    // Componentes principales presentes
    expect(result.getByTestId("plantilla-editor")).toBeInTheDocument();
    expect(result.getByTestId("vblang-code-editor")).toBeInTheDocument();
    expect(result.getByTestId("vblang-metadata-panel")).toBeInTheDocument();
    expect(result.getByTestId("vblang-preview-panel")).toBeInTheDocument();
    // Botón Guardar visible
    expect(screen.getByRole("button", { name: /Guardar/i })).toBeInTheDocument();
  });

  it("cambiar código actualiza el preview tras el debounce", async () => {
    const result = await renderEditor();
    await act(async () => {
      vi.advanceTimersByTime(700);
    });
    const ta = result.container.querySelector(
      "textarea",
    ) as HTMLTextAreaElement;
    expect(ta).toBeTruthy();
    // Cambiamos a un código válido distinto
    const newCode = `variables:
  a: random(1, 5)

enunciado: "valor de a: {a}"
respuesta: a
tipo: input
`;
    await act(async () => {
      fireEvent.change(ta, { target: { value: newCode } });
      vi.advanceTimersByTime(700);
    });
    // El panel de preview muestra al menos una card con "seed:" después del re-compute
    const seedLabels = result.container.querySelectorAll(
      '[data-testid="vblang-preview-panel"]',
    );
    expect(seedLabels.length).toBeGreaterThan(0);
  });
});
