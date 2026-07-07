/**
 * PLAN-N §3 — capa "División provincial de [país]" en el editor de mapas.
 *
 * El dato ya existía (`GET /api/maps/provincias/:pais`, usado por el camino
 * de cuestionario de MarcarMapaRenderer) pero el editor libre no ofrecía
 * ninguna capa con esta división pese a estar servido. Cubre: catálogo de
 * países se carga, elegir uno + "Agregar capa" trae el TopoJSON, lo
 * convierte a GeoJSON, y lo agrega como una MapaCapa (visible en la lista
 * de capas y dibujada vía GeoJsonLayer).
 */
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { render, fireEvent, screen, cleanup, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

const topoMundo = {
  type: "Topology",
  objects: { countries: { type: "GeometryCollection", geometries: [
    { type: "Polygon", arcs: [[0]], properties: { NAME: "Testland", ISO_A3: "TST" } },
  ] } },
  arcs: [[[-180, -90], [180, -90], [180, 90], [-180, 90], [-180, -90]]],
  transform: undefined,
};

const topoProvinciasAR = {
  type: "Topology",
  objects: { provincias: { type: "GeometryCollection", geometries: [
    { type: "Polygon", arcs: [[0]], properties: { name: "Buenos Aires" } },
    { type: "Polygon", arcs: [[0]], properties: { name: "Córdoba" } },
  ] } },
  arcs: [[[-65, -35], [-64, -35], [-64, -34], [-65, -34], [-65, -35]]],
  transform: undefined,
};

vi.mock("../../../domain/vblang/datasetApi", () => ({
  listDatasets: vi.fn().mockResolvedValue({ items: [] }),
  getDataset: vi.fn().mockResolvedValue({ id: "x", nombre: "x", columnas: [] }),
}));

const { listPaisesMock, fetchTopoMock } = vi.hoisted(() => ({
  listPaisesMock: vi.fn(),
  fetchTopoMock: vi.fn(),
}));
vi.mock("../../../lib/maps/provinciasApi", () => ({
  listPaisesConProvincias: listPaisesMock,
  fetchProvinciasTopo: fetchTopoMock,
}));

vi.mock("../../../auth/use-auth", () => ({
  useAuth: () => ({ user: { id: "test-user", name: "Test User", role: "USER", roles: ["USER"] } }),
}));

import MapaEditorPage from "../MapaEditorPage";

beforeEach(() => {
  globalThis.fetch = vi.fn().mockResolvedValue({
    ok: true,
    json: async () => topoMundo,
  }) as unknown as typeof fetch;
  listPaisesMock.mockReset().mockResolvedValue([
    { pais: "AR", nombre: "Argentina", divisiones: 24 },
    { pais: "BR", nombre: "Brasil", divisiones: 27 },
  ]);
  fetchTopoMock.mockReset().mockResolvedValue(topoProvinciasAR);
});

afterEach(() => {
  cleanup();
  sessionStorage.clear();
  vi.restoreAllMocks();
});

function renderEditor() {
  return render(
    <MemoryRouter initialEntries={["/herramientas/mapa-editor?sskey=provincias-test"]}>
      <MapaEditorPage />
    </MemoryRouter>,
  );
}

async function esperarListo() {
  await waitFor(() => {
    expect(screen.getByTestId("mapa-hint")).toBeInTheDocument();
  });
}

describe("MapaEditorFull — División provincial (PLAN-N §3)", () => {
  it("carga el catálogo de países en el select", async () => {
    renderEditor();
    await esperarListo();

    await waitFor(() => {
      expect(screen.getByRole("option", { name: "Argentina" })).toBeInTheDocument();
    });
    expect(screen.getByRole("option", { name: "Brasil" })).toBeInTheDocument();
  });

  it("elegir un país y Agregar trae el TopoJSON y agrega una capa nueva", async () => {
    renderEditor();
    await esperarListo();
    await waitFor(() => expect(screen.getByRole("option", { name: "Argentina" })).toBeInTheDocument());

    fireEvent.change(screen.getByLabelText("País"), { target: { value: "AR" } });
    fireEvent.click(screen.getByRole("button", { name: /Agregar capa de provincias/i }));

    await waitFor(() => {
      expect(fetchTopoMock).toHaveBeenCalledWith("AR");
    });
    // Ancorado al inicio: "Subir/Bajar/Eliminar capa Provincias de Argentina"
    // también contienen la substring "capa Provincias de Argentina".
    expect(
      await screen.findByRole("button", { name: /^Capa Provincias de Argentina/i }),
    ).toBeInTheDocument();
  });

  it("país sin catálogo cargado: el botón queda deshabilitado sin selección", async () => {
    renderEditor();
    await esperarListo();
    expect(screen.getByRole("button", { name: /Agregar capa de provincias/i })).toBeDisabled();
  });

  it("error al traer el TopoJSON muestra un mensaje y no rompe el editor", async () => {
    fetchTopoMock.mockRejectedValue(new Error("network error"));
    renderEditor();
    await esperarListo();
    await waitFor(() => expect(screen.getByRole("option", { name: "Argentina" })).toBeInTheDocument());

    fireEvent.change(screen.getByLabelText("País"), { target: { value: "AR" } });
    fireEvent.click(screen.getByRole("button", { name: /Agregar capa de provincias/i }));

    expect(await screen.findByRole("alert")).toHaveTextContent(/No se pudo cargar/i);
  });
});
