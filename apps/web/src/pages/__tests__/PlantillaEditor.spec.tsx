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
    // El preview debe reflejar el nuevo enunciado ya interpolado (no sólo que
    // el panel exista — el aserto anterior pasaba aunque la recompilación no
    // hubiera disparado). Si el debounce no avanzó, el contenido no contiene
    // el literal del enunciado.
    expect(result.container.textContent).toMatch(/valor de a:/);
  });

  it("toggle visual/código alterna entre el CodeEditor y el formulario", async () => {
    const result = await renderEditor();
    await act(async () => {
      vi.advanceTimersByTime(700);
    });
    // Por default arranca en modo "codigo": el CodeEditor está montado.
    expect(result.queryByTestId("vblang-code-editor")).not.toBeNull();
    expect(result.queryByTestId("vblang-form-tipo")).toBeNull();

    // Click en el toggle a "Formulario": se desmonta el CodeEditor y aparece el form.
    fireEvent.click(result.getByTestId("vblang-modo-visual"));
    expect(result.queryByTestId("vblang-code-editor")).toBeNull();
    expect(result.queryByTestId("vblang-form-tipo")).not.toBeNull();

    // Vuelta a "Código": el CodeEditor reaparece.
    fireEvent.click(result.getByTestId("vblang-modo-codigo"));
    expect(result.queryByTestId("vblang-code-editor")).not.toBeNull();
  });

  it("cambio en el form actualiza el código DSL", async () => {
    const result = await renderEditor();
    await act(async () => {
      vi.advanceTimersByTime(700);
    });
    // Cambiamos a modo visual.
    fireEvent.click(result.getByTestId("vblang-modo-visual"));
    const tipoSelect = result.getByTestId(
      "vblang-form-tipo",
    ) as HTMLSelectElement;
    expect(tipoSelect.value).toBe("input");
    // Cambiamos el tipo a "mc".
    await act(async () => {
      fireEvent.change(tipoSelect, { target: { value: "mc" } });
      vi.advanceTimersByTime(700);
    });
    // Volvemos al modo código y verificamos que el textarea del CodeEditor
    // (no el de MetadataPanel) ahora contiene `tipo: mc`.
    fireEvent.click(result.getByTestId("vblang-modo-codigo"));
    const codeEditor = result.getByTestId("vblang-code-editor");
    const ta = codeEditor.querySelector("textarea") as HTMLTextAreaElement;
    expect(ta).toBeTruthy();
    expect(ta.value).toMatch(/tipo:\s*mc/);
  });

  it("con código inválido, modo visual muestra mensaje y botón para volver", async () => {
    const result = await renderEditor();
    await act(async () => {
      vi.advanceTimersByTime(700);
    });
    // Rompemos el código vía el textarea del CodeEditor (no el de MetadataPanel).
    const codeEditor = result.getByTestId("vblang-code-editor");
    const ta = codeEditor.querySelector("textarea") as HTMLTextAreaElement;
    await act(async () => {
      fireEvent.change(ta, { target: { value: "variables:\n  a: random(" } });
      vi.advanceTimersByTime(700);
    });
    fireEvent.click(result.getByTestId("vblang-modo-visual"));
    // El formulario no debe rendizarse; en su lugar, mensaje de error.
    expect(result.queryByTestId("vblang-form-tipo")).toBeNull();
    expect(
      result.getByTestId("vblang-form-no-disponible"),
    ).toBeInTheDocument();
    // Click en "Volver a Código" lleva al modo código sin tocar el código.
    fireEvent.click(
      screen.getByRole("button", { name: /Volver a Código/i }),
    );
    expect(result.queryByTestId("vblang-code-editor")).not.toBeNull();
  });
});
