import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

vi.mock("../../domain/vblang/datasetApi", () => ({
  listDatasets: vi.fn().mockResolvedValue({
    items: [
      {
        id: "ds1",
        nombre: "paises",
        visibility: "privada",
        ownerUserId: "u1",
        columnas: { nombre: "string", capital: "string", iso: "string" },
        filasCount: 3,
        createdAt: "2026-01-01T00:00:00Z",
        updatedAt: "2026-01-02T00:00:00Z",
      },
    ],
    total: 1,
  }),
  createDataset: vi.fn(),
  deleteDataset: vi.fn().mockResolvedValue({ ok: true }),
}));

async function renderIndex() {
  const { default: VblangDatasetsIndex } = await import(
    "../VblangDatasetsIndex"
  );
  return render(
    <MemoryRouter initialEntries={["/datasets"]}>
      <VblangDatasetsIndex />
    </MemoryRouter>,
  );
}

describe("VblangDatasetsIndex (smoke)", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renderiza el listado con la card del dataset mockeado", async () => {
    await renderIndex();
    await waitFor(() => {
      expect(screen.getByTestId("dataset-card")).toBeTruthy();
    });
    expect(screen.getByText("paises")).toBeTruthy();
    expect(screen.getByText(/3 filas/)).toBeTruthy();
  });

  it("muestra el botón + Nuevo dataset", async () => {
    await renderIndex();
    expect(screen.getByTestId("datasets-new-button")).toBeTruthy();
  });
});
