/**
 * FIX-PLANTILLA-DUP — clicks múltiples en "Guardar" duplicaban la
 * plantilla. El botón tiene `disabled={saveStatus === "saving"}` (que
 * SÍ evita clicks a posteriori del re-render), pero entre el primer
 * click y el re-render React puede procesar 1-2 clicks más y todos
 * terminan llamando a `createPlantilla` (modo `isNew`).
 *
 * Fix: `useRef<boolean>` (`isSavingRef`) seteada SÍNCRONAMENTE al
 * entrar a `handleSave`. La ref se chequea antes que el estado de
 * React, así que clicks repetidos dentro del mismo ciclo de render
 * se descartan. Reset en `finally` para no bloquear el botón si la
 * promesa rejected.
 *
 * Cubre:
 *  (d1) Click rápido 3 veces en Guardar (modo creación) →
 *       `createPlantilla` se llama UNA sola vez.
 *  (d2) El botón "Guardar" tiene `disabled=true` durante el save.
 *  (d3) Si la promesa de `createPlantilla` rechaza, el botón se
 *       vuelve a habilitar (ref se resetea en `finally`).
 *  (d4) Modo edición: dos saves consecutivos llaman `updatePlantilla`
 *       dos veces (no crean duplicados — el id ya está fijo en la URL
 *       y el handler hace PUT al mismo id).
 */

import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { act, render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

const { createPlantillaMock, updatePlantillaMock, getPlantillaMock } = vi.hoisted(
  () => ({
    createPlantillaMock: vi.fn(),
    updatePlantillaMock: vi.fn(),
    getPlantillaMock: vi.fn(),
  })
);

vi.mock("../../domain/vblang/plantillaApi", () => ({
  getPlantilla: getPlantillaMock,
  createPlantilla: createPlantillaMock,
  updatePlantilla: updatePlantillaMock,
  DslApiError: class extends Error {
    line?: number;
    col?: number;
  },
}));

async function renderNewEditor() {
  const { default: PlantillaEditor } = await import("../PlantillaEditor");
  return render(
    <MemoryRouter initialEntries={["/plantillas/nueva"]}>
      <Routes>
        <Route path="/plantillas/nueva" element={<PlantillaEditor />} />
        <Route
          path="/plantillas/:id"
          element={<div data-testid="plantilla-detail">detail</div>}
        />
      </Routes>
    </MemoryRouter>
  );
}

async function renderEditEditor(id: string) {
  getPlantillaMock.mockResolvedValue({
    id,
    nombre: "Existente",
    descripcion: "",
    materia: undefined,
    tags: [],
    codigoDsl: "variables:\n  a: random(1, 5)\n\nenunciado: '{a}'\nrespuesta: a\ntipo: input\n",
    visibility: "publico",
    version: 1,
    createdBy: "u-1",
    createdAt: "2026-06-17T00:00:00.000Z",
    updatedAt: "2026-06-17T00:00:00.000Z",
    changelog: null,
  });
  const { default: PlantillaEditor } = await import("../PlantillaEditor");
  return render(
    <MemoryRouter initialEntries={[`/plantillas/${id}`]}>
      <Routes>
        <Route path="/plantillas/:id" element={<PlantillaEditor />} />
      </Routes>
    </MemoryRouter>
  );
}

beforeEach(() => {
  createPlantillaMock.mockReset();
  updatePlantillaMock.mockReset();
  getPlantillaMock.mockReset();
  // `getPlantilla` solo se llama en modo edición; default rejects para
  // no interferir si el test no lo mockea.
  getPlantillaMock.mockRejectedValue(new Error("not mocked in this test"));
});

afterEach(() => {
  vi.useRealTimers();
});

describe("FIX-PLANTILLA-DUP: clicks múltiples en Guardar", () => {
  it("(d1) tres clicks rápidos en Guardar (modo creación) → createPlantilla se llama UNA sola vez", async () => {
    // createPlantilla devuelve una promesa controlada que no resuelve
    // hasta que la liberemos. Mientras está en vuelo, clicks
    // adicionales NO deben disparar más llamadas.
    let resolveCreate: (value: unknown) => void = () => {};
    const createPromise = new Promise((res) => {
      resolveCreate = res;
    });
    createPlantillaMock.mockReturnValue(createPromise);

    const result = await renderNewEditor();
    // Esperar a que el editor termine el debounce inicial.
    await waitFor(() => {
      expect(screen.getByTestId("vblang-metadata-panel")).toBeInTheDocument();
    });

    // El botón "Guardar" debe estar habilitado al inicio.
    const btn = screen.getByRole("button", { name: /guardar/i });
    expect(btn).not.toBeDisabled();

    // El nombre de la plantilla es obligatorio. Hay que tipearlo en
    // el MetadataPanel antes de poder guardar.
    const nombreInput = result.container.querySelector(
      'input[type="text"]'
    ) as HTMLInputElement;
    expect(nombreInput).toBeTruthy();
    fireEvent.change(nombreInput, { target: { value: "Test FIX-PLANTILLA-DUP" } });

    // Tres clicks rápidos. Cada uno en su propio `act` para que React
    // procese el evento, pero el primero todavía no terminó su
    // promesa → el guard debería bloquear los siguientes.
    fireEvent.click(btn);
    fireEvent.click(btn);
    fireEvent.click(btn);

    // Candado: la fix funciona si `createPlantilla` se llamó UNA sola
    // vez, no 3.
    expect(createPlantillaMock).toHaveBeenCalledTimes(1);

    // Liberamos la promesa para no dejar handles colgando.
    resolveCreate({
      id: "p-1",
      nombre: "Test FIX-PLANTILLA-DUP",
      codigoDsl: "",
      version: 1,
    });
  });

  it("(d2) durante el save el botón Guardar está disabled", async () => {
    // createPlantilla devuelve una promesa que NO resuelve hasta
    // que liberemos; mientras tanto, el botón debe estar disabled.
    let resolveCreate: (value: unknown) => void = () => {};
    const createPromise = new Promise((res) => {
      resolveCreate = res;
    });
    createPlantillaMock.mockReturnValue(createPromise);

    const result = await renderNewEditor();
    await waitFor(() => {
      expect(screen.getByTestId("vblang-metadata-panel")).toBeInTheDocument();
    });

    const btn = screen.getByRole("button", { name: /guardar/i });
    const nombreInput = result.container.querySelector(
      'input[type="text"]'
    ) as HTMLInputElement;
    fireEvent.change(nombreInput, { target: { value: "Test d2" } });

    // Antes del click: habilitado.
    expect(btn).not.toBeDisabled();
    // Texto default.
    expect(btn.textContent).toMatch(/guardar/i);

    // Click → el save está en vuelo.
    fireEvent.click(btn);

    // Candado: durante el save, el botón se deshabilita Y cambia el
    // texto a "Guardando…".
    await waitFor(() => {
      expect(btn).toBeDisabled();
    });
    expect(btn.textContent).toMatch(/guardando/i);

    // Liberamos para no dejar la promesa colgando.
    resolveCreate({
      id: "p-1",
      nombre: "Test d2",
      codigoDsl: "",
      version: 1,
    });
  });

  it("(d3) si createPlantilla rechaza, el botón se vuelve a habilitar (finally libera el ref)", async () => {
    let rejectCreate: (err: Error) => void = () => {};
    const createPromise = new Promise((_, rej) => {
      rejectCreate = rej;
    });
    createPlantillaMock.mockReturnValue(createPromise);

    const result = await renderNewEditor();
    await waitFor(() => {
      expect(screen.getByTestId("vblang-metadata-panel")).toBeInTheDocument();
    });

    const btn = screen.getByRole("button", { name: /guardar/i });
    const nombreInput = result.container.querySelector(
      'input[type="text"]'
    ) as HTMLInputElement;
    fireEvent.change(nombreInput, { target: { value: "Test d3" } });

    fireEvent.click(btn);
    // El save está en vuelo: el botón está disabled.
    await waitFor(() => {
      expect(btn).toBeDisabled();
    });

    // Rechazamos la promesa. El `finally` debe liberar el ref.
    await act(async () => {
      rejectCreate(new Error("API caída"));
    });

    // El botón se vuelve a habilitar. Sin esto, un save fallido
    // dejaba el botón bloqueado para siempre.
    await waitFor(() => {
      expect(btn).not.toBeDisabled();
    });

    // El mensaje de error debe estar visible.
    expect(screen.getByText(/API caída/i)).toBeInTheDocument();
  });

  it("(d4) en modo edición, dos saves consecutivos llaman updatePlantilla dos veces al MISMO id (no crean duplicados)", async () => {
    // El id viene de la URL y se mantiene estable. Cada save hace PUT
    // al mismo id, no POST → no se crean duplicados.
    updatePlantillaMock.mockResolvedValue({
      id: "p-existing",
      nombre: "Edit",
      codigoDsl: "",
      version: 2,
    });

    const result = await renderEditEditor("p-existing");
    // Esperar a que cargue.
    await waitFor(() => {
      expect(screen.getByTestId("vblang-metadata-panel")).toBeInTheDocument();
    });

    const btn = screen.getByRole("button", { name: /guardar/i });
    expect(btn).not.toBeDisabled();

    // Primer save: updatePlantilla con id="p-existing".
    fireEvent.click(btn);
    // Esperar a que termine.
    await waitFor(() => {
      expect(updatePlantillaMock).toHaveBeenCalledTimes(1);
    });
    expect(updatePlantillaMock.mock.calls[0][0]).toBe("p-existing");

    // Segundo save (botón ya re-habilitado).
    fireEvent.click(btn);
    await waitFor(() => {
      expect(updatePlantillaMock).toHaveBeenCalledTimes(2);
    });
    expect(updatePlantillaMock.mock.calls[1][0]).toBe("p-existing");

    // Candado: el id es el mismo en ambas llamadas (no se generan
    // duplicados por un click accidental que pase el guard).
    expect(updatePlantillaMock.mock.calls[0][0]).toBe(
      updatePlantillaMock.mock.calls[1][0]
    );
  });

  it("(d5) candado: el botón Guardar conserva `disabled={saveStatus === 'saving'}` además del guard de la ref", async () => {
    // El fix no quita el `disabled` declarativo del botón. Es una
    // defensa EN CAPAS: el ref sincrónico previene clicks repetidos
    // dentro del mismo render; el `disabled` previene clicks cuando
    // el estado ya llegó a "saving" y el botón se re-renderizó.
    let resolveCreate: (value: unknown) => void = () => {};
    createPlantillaMock.mockReturnValue(
      new Promise((res) => {
        resolveCreate = res;
      })
    );

    const result = await renderNewEditor();
    await waitFor(() => {
      expect(screen.getByTestId("vblang-metadata-panel")).toBeInTheDocument();
    });

    const btn = screen.getByRole("button", { name: /guardar/i });
    const nombreInput = result.container.querySelector(
      'input[type="text"]'
    ) as HTMLInputElement;
    fireEvent.change(nombreInput, { target: { value: "Test d5" } });

    // Pre-click: habilitado.
    expect(btn).not.toBeDisabled();

    // Click → save en vuelo.
    fireEvent.click(btn);

    // Mientras la promesa está pendiente, el botón debe estar
    // `disabled` (por el `saveStatus === 'saving'`).
    await waitFor(() => {
      expect(btn).toBeDisabled();
    });

    // Liberamos.
    resolveCreate({
      id: "p-1",
      nombre: "Test d5",
      codigoDsl: "",
      version: 1,
    });
  });
});
