/**
 * F6-01 — UI de plantillas oficiales en la biblioteca.
 *
 * Verifica que una plantilla oficial (esOficial:true) muestra el badge "Oficial"
 * y el botón "Usar como base", y que al pulsarlo se llama a `clonarPlantilla` y
 * se navega a la copia. Una plantilla no-oficial mantiene el botón "Fork".
 */

import { describe, expect, it, vi, beforeEach } from "vitest";
import { act, render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

const navigateMock = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<typeof import("react-router-dom")>(
    "react-router-dom",
  );
  return { ...actual, useNavigate: () => navigateMock };
});

const listPlantillas = vi.fn();
const clonarPlantilla = vi.fn();
const forkPlantilla = vi.fn();
const deletePlantilla = vi.fn();
vi.mock("../../domain/vblang/plantillaApi", () => ({
  listPlantillas: (...a: unknown[]) => listPlantillas(...a),
  clonarPlantilla: (...a: unknown[]) => clonarPlantilla(...a),
  forkPlantilla: (...a: unknown[]) => forkPlantilla(...a),
  deletePlantilla: (...a: unknown[]) => deletePlantilla(...a),
}));

function makeItem(over: Record<string, unknown> = {}) {
  return {
    id: "of-1",
    nombre: "Oficial MRU",
    materia: "fisica",
    visibility: "publica",
    publicAprobado: true,
    esOficial: true,
    ownerUserId: "system",
    version: 1,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    ...over,
  };
}

async function renderBiblioteca() {
  const { default: PlantillasIndex } = await import("../PlantillasIndex");
  return render(
    <MemoryRouter initialEntries={["/plantillas/biblioteca"]}>
      <PlantillasIndex mode="biblioteca" />
    </MemoryRouter>,
  );
}

describe("PlantillasIndex — plantillas oficiales (F6-01)", () => {
  beforeEach(() => {
    navigateMock.mockReset();
    listPlantillas.mockReset();
    clonarPlantilla.mockReset();
    forkPlantilla.mockReset();
  });

  it("una oficial muestra badge y 'Usar como base'; clonar navega a la copia", async () => {
    listPlantillas.mockResolvedValue({ items: [makeItem()], total: 1 });
    clonarPlantilla.mockResolvedValue({ id: "clon-9" });

    await act(async () => {
      await renderBiblioteca();
    });

    await screen.findByText("Oficial MRU");
    expect(screen.getByTestId("plantilla-oficial-badge")).toBeTruthy();
    const btn = screen.getByTestId("plantilla-usar-como-base");
    expect(btn.textContent).toContain("Usar como base");

    await act(async () => {
      fireEvent.click(btn);
    });

    await waitFor(() => expect(clonarPlantilla).toHaveBeenCalledWith("of-1"));
    expect(navigateMock).toHaveBeenCalledWith("/plantillas/clon-9");
  });

  // Las 132 plantillas oficiales entran por la biblioteca, y el server corta en
  // 50 por defecto: como matemáticas son 76, el docente veía SÓLO matemáticas y
  // el resto de las materias no aparecía sin filtrar a mano.
  it("la biblioteca pide el tope alto: si no, sólo se ve matemáticas", async () => {
    listPlantillas.mockResolvedValue({ items: [makeItem()], total: 1 });

    await act(async () => {
      await renderBiblioteca();
    });

    await screen.findByText("Oficial MRU");
    expect(listPlantillas).toHaveBeenCalledWith(
      expect.objectContaining({ owner: "otros", limit: 200 }),
    );
  });

  it("una no-oficial muestra 'Fork' y no el badge", async () => {
    listPlantillas.mockResolvedValue({
      items: [makeItem({ id: "p-2", esOficial: false, ownerUserId: "teacher-9", nombre: "Comunitaria" })],
      total: 1,
    });

    await act(async () => {
      await renderBiblioteca();
    });

    await screen.findByText("Comunitaria");
    expect(screen.queryByTestId("plantilla-oficial-badge")).toBeNull();
    expect(screen.queryByTestId("plantilla-usar-como-base")).toBeNull();
    expect(screen.getByText("Fork")).toBeTruthy();
  });
});
