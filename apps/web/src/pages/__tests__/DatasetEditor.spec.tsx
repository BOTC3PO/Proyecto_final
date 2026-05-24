import { describe, expect, it, vi, beforeEach } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

const getDataset = vi.fn();
const addRows = vi.fn();
const updateRow = vi.fn();
const deleteRow = vi.fn();
const updateDataset = vi.fn();

vi.mock("../../domain/vblang/datasetApi", () => ({
  getDataset: (...a: unknown[]) => getDataset(...a),
  addRows: (...a: unknown[]) => addRows(...a),
  updateRow: (...a: unknown[]) => updateRow(...a),
  deleteRow: (...a: unknown[]) => deleteRow(...a),
  updateDataset: (...a: unknown[]) => updateDataset(...a),
}));

const fakeDataset = {
  id: "ds1",
  nombre: "paises",
  descripcion: "lista",
  visibility: "privada" as const,
  ownerUserId: "u1",
  columnas: { nombre: "string", capital: "string" },
  filas: [
    { id: "f1", datos: { nombre: "Argentina", capital: "Buenos Aires" } },
    { id: "f2", datos: { nombre: "Brasil", capital: "Brasilia" } },
  ],
  createdAt: "2026-01-01T00:00:00Z",
  updatedAt: "2026-01-01T00:00:00Z",
};

async function renderEditor() {
  const { default: DatasetEditor } = await import("../DatasetEditor");
  return render(
    <MemoryRouter initialEntries={["/datasets/ds1"]}>
      <Routes>
        <Route path="/datasets/:id" element={<DatasetEditor />} />
      </Routes>
    </MemoryRouter>,
  );
}

describe("DatasetEditor (smoke)", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    getDataset.mockResolvedValue(fakeDataset);
    addRows.mockResolvedValue({ ok: true, added: 1 });
  });

  it("carga el dataset y muestra la tabla con las filas", async () => {
    await renderEditor();
    await waitFor(() => expect(screen.getByTestId("dataset-table")).toBeTruthy());
    expect(screen.getByTestId("dataset-row-f1")).toBeTruthy();
    expect(screen.getByTestId("dataset-row-f2")).toBeTruthy();
    expect(
      (screen.getByTestId("dataset-cell-f1-nombre") as HTMLInputElement).value,
    ).toBe("Argentina");
  });

  it("agregar fila dispara addRows + recarga", async () => {
    await renderEditor();
    await waitFor(() => screen.getByTestId("dataset-add-row"));
    fireEvent.click(screen.getByTestId("dataset-add-row"));
    await waitFor(() => expect(addRows).toHaveBeenCalledTimes(1));
    // Tras addRows, hace getDataset de nuevo (recarga).
    expect(getDataset).toHaveBeenCalledTimes(2);
  });
});
