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

  it("con código inválido tras una versión válida, modo visual retiene el form y muestra banner", async () => {
    const result = await renderEditor();
    await act(async () => {
      vi.advanceTimersByTime(700);
    });
    // La plantilla inicial es válida, así que el ref lastValidPlantillaRef
    // ya está poblado tras el primer debounce.
    // Rompemos el código vía el textarea del CodeEditor (no el de MetadataPanel).
    const codeEditor = result.getByTestId("vblang-code-editor");
    const ta = codeEditor.querySelector("textarea") as HTMLTextAreaElement;
    await act(async () => {
      fireEvent.change(ta, { target: { value: "variables:\n  a: random(" } });
      vi.advanceTimersByTime(700);
    });
    fireEvent.click(result.getByTestId("vblang-modo-visual"));
    // El formulario DEBE seguir rendizándose (retenido) con un banner visible.
    expect(result.queryByTestId("vblang-form-tipo")).not.toBeNull();
    expect(
      result.getByTestId("vblang-form-retenido-banner"),
    ).toBeInTheDocument();
    // Y el fallback "no disponible" NO debe estar presente.
    expect(result.queryByTestId("vblang-form-no-disponible")).toBeNull();
  });

  it("editar el form retenido rescata el código y elimina el banner", async () => {
    const result = await renderEditor();
    await act(async () => {
      vi.advanceTimersByTime(700);
    });
    // Rompemos el código para entrar al estado "retenido".
    const codeEditor = result.getByTestId("vblang-code-editor");
    const ta = codeEditor.querySelector("textarea") as HTMLTextAreaElement;
    await act(async () => {
      fireEvent.change(ta, { target: { value: "variables:\n  a: random(" } });
      vi.advanceTimersByTime(700);
    });
    fireEvent.click(result.getByTestId("vblang-modo-visual"));
    expect(
      result.getByTestId("vblang-form-retenido-banner"),
    ).toBeInTheDocument();

    // Cambiamos el `tipo` desde el form retenido. Esto serializa y pisa el
    // código, reemplazando la versión rota por una válida.
    const tipoSelect = result.getByTestId(
      "vblang-form-tipo",
    ) as HTMLSelectElement;
    await act(async () => {
      fireEvent.change(tipoSelect, { target: { value: "mc" } });
      vi.advanceTimersByTime(700);
    });
    // El banner debe haber desaparecido.
    expect(result.queryByTestId("vblang-form-retenido-banner")).toBeNull();
    // El form sigue presente.
    expect(result.queryByTestId("vblang-form-tipo")).not.toBeNull();

    // Volvemos al modo código y verificamos que el código quedó válido
    // (contiene `tipo: mc` y ya no tiene la apertura de paréntesis rota).
    fireEvent.click(result.getByTestId("vblang-modo-codigo"));
    const codeEditor2 = result.getByTestId("vblang-code-editor");
    const ta2 = codeEditor2.querySelector("textarea") as HTMLTextAreaElement;
    expect(ta2.value).toMatch(/tipo:\s*mc/);
    expect(ta2.value).not.toMatch(/random\(\s*$/m);
  });

  it("plantilla nueva con código inválido desde el primer render muestra el fallback", async () => {
    // Sin avanzar timers, escribimos código inválido en el textarea ANTES
    // de que el debounce inicial se dispare. Así, la primera compilación
    // ve código roto y `lastValidPlantillaRef` nunca se puebla.
    const result = await renderEditor();
    const codeEditor = result.getByTestId("vblang-code-editor");
    const ta = codeEditor.querySelector("textarea") as HTMLTextAreaElement;
    await act(async () => {
      fireEvent.change(ta, { target: { value: "variables:\n  a: random(" } });
      vi.advanceTimersByTime(700);
    });
    fireEvent.click(result.getByTestId("vblang-modo-visual"));
    // Como nunca hubo una versión válida, debe verse el fallback.
    expect(result.queryByTestId("vblang-form-tipo")).toBeNull();
    expect(
      result.getByTestId("vblang-form-no-disponible"),
    ).toBeInTheDocument();
    // Y NO debe haber banner de retención.
    expect(result.queryByTestId("vblang-form-retenido-banner")).toBeNull();
  });

  it("con código válido, el form se rendiza sin banner", async () => {
    const result = await renderEditor();
    await act(async () => {
      vi.advanceTimersByTime(700);
    });
    fireEvent.click(result.getByTestId("vblang-modo-visual"));
    // Form presente, banner ausente.
    expect(result.queryByTestId("vblang-form-tipo")).not.toBeNull();
    expect(result.queryByTestId("vblang-form-retenido-banner")).toBeNull();
  });

  it('botón "Copiar prompt para IA" abre el drawer correspondiente', async () => {
    const result = await renderEditor();
    await act(async () => {
      vi.advanceTimersByTime(700);
    });
    expect(result.queryByRole("dialog", { name: "Copiar prompt para IA" })).toBeNull();
    fireEvent.click(result.getByRole("button", { name: "Copiar prompt para IA" }));
    expect(result.getByRole("dialog", { name: "Copiar prompt para IA" })).toBeInTheDocument();
  });
});
