/**
 * PLAN-G ítem 45.b — "Buscar lugar" en el editor de mapas.
 *
 * Antes el docente tenía que hacer click "a ojo" sobre un mapamundi de
 * baja resolución para ubicar un país/ciudad. Este spec cubre el flujo:
 * escribir un nombre, elegir un resultado, y verificar que el mapa se
 * centra ahí (viewBox) y se agrega un marcador con el nombre del lugar.
 */
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { render, fireEvent, screen, cleanup, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

const topoConUnPais = {
  type: "Topology",
  objects: { countries: { type: "GeometryCollection", geometries: [
    { type: "Polygon", arcs: [[0]], properties: { NAME: "Testland", ISO_A3: "TST" } },
  ] } },
  arcs: [[[-180, -90], [180, -90], [180, 90], [-180, 90], [-180, -90]]],
  transform: undefined,
};

vi.mock("../../../domain/vblang/datasetApi", () => ({
  listDatasets: vi.fn().mockResolvedValue({ items: [] }),
  getDataset: vi.fn().mockResolvedValue({ id: "x", nombre: "x", columnas: [] }),
}));

const { buscarLugaresMock } = vi.hoisted(() => ({ buscarLugaresMock: vi.fn() }));
vi.mock("../../../lib/maps/geonamesApi", () => ({
  buscarLugares: buscarLugaresMock,
}));

import MapaEditorPage from "../MapaEditorPage";

beforeEach(() => {
  globalThis.fetch = vi.fn().mockResolvedValue({
    ok: true,
    json: async () => topoConUnPais,
  }) as unknown as typeof fetch;
  if (typeof Element !== "undefined" && !(Element.prototype as any).__patchedRect) {
    const orig = Element.prototype.getBoundingClientRect;
    Element.prototype.getBoundingClientRect = function () {
      if (this instanceof SVGSVGElement) {
        return { x: 0, y: 0, top: 0, left: 0, right: 1000, bottom: 620, width: 1000, height: 620, toJSON: () => ({}) };
      }
      return orig.call(this);
    };
    (Element.prototype as any).__patchedRect = true;
  }
  buscarLugaresMock.mockReset();
});

afterEach(() => {
  cleanup();
  sessionStorage.clear();
  vi.restoreAllMocks();
});

function renderEditor() {
  return render(
    <MemoryRouter initialEntries={["/herramientas/mapa-editor?sskey=buscar-lugar-test"]}>
      <MapaEditorPage />
    </MemoryRouter>,
  );
}

async function esperarListo() {
  await waitFor(() => {
    expect(screen.getByTestId("mapa-hint")).toBeInTheDocument();
  });
}

describe("MapaEditorFull — Buscar lugar (ítem 45.b)", () => {
  it("escribir un nombre busca (con debounce) y muestra resultados", async () => {
    buscarLugaresMock.mockResolvedValue([
      { geonameid: 1, nombre: "Mogadiscio", nombreAscii: "Mogadishu", pais: "SO", tipo: "ciudad", lat: 2.03711, lon: 45.34375, poblacion: 2587183 },
    ]);
    renderEditor();
    await esperarListo();

    const input = screen.getByTestId("buscar-lugar-input");
    fireEvent.change(input, { target: { value: "mogadi" } });

    await waitFor(() => {
      expect(buscarLugaresMock).toHaveBeenCalledWith("mogadi");
    });
    expect(await screen.findByText("Mogadiscio")).toBeInTheDocument();
  });

  it("elegir un resultado centra el mapa (viewBox) y agrega un marcador con el nombre", async () => {
    buscarLugaresMock.mockResolvedValue([
      { geonameid: 2, nombre: "Argentina", nombreAscii: "Argentine Republic", pais: "AR", tipo: "pais", lat: -34, lon: -64, poblacion: 44494502 },
    ]);
    renderEditor();
    await esperarListo();
    await waitFor(() => {
      expect(document.querySelector('svg[role="application"]')).toBeTruthy();
    });

    const input = screen.getByTestId("buscar-lugar-input");
    fireEvent.change(input, { target: { value: "argentina" } });

    const resultado = await screen.findByText("Argentina");
    fireEvent.click(resultado);

    // Se agrega un marcador con el nombre del lugar.
    await waitFor(() => {
      expect(screen.getAllByText("Argentina").length).toBeGreaterThan(0);
    });
    const svg = document.querySelector('svg[role="application"]') as SVGSVGElement;
    const [, , w] = svg.getAttribute("viewBox")!.split(" ").map(Number);
    // Zoom de país (300) — mucho más cerrado que el encuadre completo (1000).
    expect(w).toBe(300);

    // El input se limpia tras elegir un resultado.
    expect((input as HTMLInputElement).value).toBe("");
  });

  it("resultado de tipo ciudad usa un zoom más cerrado (120) que país (300)", async () => {
    buscarLugaresMock.mockResolvedValue([
      { geonameid: 3, nombre: "Mogadiscio", nombreAscii: "Mogadishu", pais: "SO", tipo: "ciudad", lat: 2.03711, lon: 45.34375, poblacion: 2587183 },
    ]);
    renderEditor();
    await esperarListo();
    await waitFor(() => {
      expect(document.querySelector('svg[role="application"]')).toBeTruthy();
    });

    fireEvent.change(screen.getByTestId("buscar-lugar-input"), { target: { value: "mogadi" } });
    const resultado = await screen.findByText("Mogadiscio");
    fireEvent.click(resultado);

    await waitFor(() => {
      const svg = document.querySelector('svg[role="application"]') as SVGSVGElement;
      const [, , w] = svg.getAttribute("viewBox")!.split(" ").map(Number);
      expect(w).toBe(120);
    });
  });
});
