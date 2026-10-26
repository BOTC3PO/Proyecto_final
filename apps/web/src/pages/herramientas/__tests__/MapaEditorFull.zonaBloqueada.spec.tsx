/**
 * "Limitar/bloquear la zona donde carga el mapa" — botón Bloquear/Quitar
 * zona en el editor de mapa (MapaEditorFull). Ver `useViewBoxZoom` (opción
 * `bounds`) y `MapaConfig.bounds` (fracción 0..1, no píxeles).
 *
 * Cubre:
 *  (a) Sin zona fijada: sólo aparece "Bloquear zona actual".
 *  (b) Fijar zona: el botón cambia a "Quitar bloqueo de zona" y el
 *      zoom-out ya no puede volver al lienzo completo (1000×620).
 *  (c) Quitar zona: el botón vuelve a "Bloquear zona actual" y el
 *      zoom-out vuelve a poder llegar al lienzo completo.
 */
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { render, fireEvent, screen, cleanup, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

const topoConUnPais = {
  type: "Topology",
  objects: { countries: { type: "GeometryCollection", geometries: [
    {
      type: "Polygon",
      arcs: [[0]],
      properties: { NAME: "Testland", ISO_A3: "TST" },
    },
  ] } },
  arcs: [[[-180, -90], [180, -90], [180, 90], [-180, 90], [-180, -90]]],
  transform: undefined,
};

vi.mock("../../../domain/vblang/datasetApi", () => ({
  listDatasets: vi.fn().mockResolvedValue({ items: [] }),
  getDataset: vi.fn().mockResolvedValue({ id: "x", nombre: "x", columnas: [] }),
}));

vi.mock("../../../auth/use-auth", () => ({
  useAuth: () => ({ user: { id: "test-user", name: "Test User", role: "USER", roles: ["USER"] } }),
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
});

afterEach(() => {
  cleanup();
  sessionStorage.clear();
  vi.restoreAllMocks();
});

function renderEditor() {
  return render(
    <MemoryRouter initialEntries={["/herramientas/mapa-editor?sskey=test"]}>
      <MapaEditorPage />
    </MemoryRouter>,
  );
}

async function esperarListo() {
  await waitFor(() => {
    expect(screen.getByTestId("mapa-hint")).toBeInTheDocument();
  });
}

function svgViewBoxWidth(): number {
  const svg = screen.getByRole("application");
  const vb = svg.getAttribute("viewBox") ?? "";
  const parts = vb.split(" ").map(Number);
  return parts[2];
}

describe("MapaEditorFull — Bloquear/Quitar zona (limitar el mapa)", () => {
  it("(a) sin zona fijada, sólo aparece el botón para bloquear", async () => {
    renderEditor();
    await esperarListo();
    expect(screen.getByTestId("mapa-fijar-zona")).toBeInTheDocument();
    expect(screen.queryByTestId("mapa-quitar-zona")).toBeNull();
  });

  it("(b) fijar zona: el botón cambia y el zoom-out satura en la zona fijada", async () => {
    renderEditor();
    await esperarListo();

    // Acercar un par de veces para que la zona a fijar sea más chica que
    // el lienzo completo — si no, "fijar" == "todo el mundo" y el test (c)
    // no podría distinguir el efecto.
    fireEvent.click(screen.getByLabelText("Acercar"));
    fireEvent.click(screen.getByLabelText("Acercar"));
    const wAlFijar = svgViewBoxWidth();
    expect(wAlFijar).toBeLessThan(1000);

    fireEvent.click(screen.getByTestId("mapa-fijar-zona"));

    expect(screen.getByTestId("mapa-quitar-zona")).toBeInTheDocument();
    expect(screen.queryByTestId("mapa-fijar-zona")).toBeNull();

    // Alejar varias veces: no debe volver a superar el ancho fijado.
    for (let i = 0; i < 6; i++) fireEvent.click(screen.getByLabelText("Alejar"));
    expect(svgViewBoxWidth()).toBeCloseTo(wAlFijar, 5);
  });

  it("(c) quitar zona: el botón vuelve y el zoom-out vuelve a llegar al lienzo completo", async () => {
    renderEditor();
    await esperarListo();

    fireEvent.click(screen.getByLabelText("Acercar"));
    fireEvent.click(screen.getByTestId("mapa-fijar-zona"));
    expect(screen.getByTestId("mapa-quitar-zona")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("mapa-quitar-zona"));
    expect(screen.getByTestId("mapa-fijar-zona")).toBeInTheDocument();
    expect(screen.queryByTestId("mapa-quitar-zona")).toBeNull();

    for (let i = 0; i < 6; i++) fireEvent.click(screen.getByLabelText("Alejar"));
    expect(svgViewBoxWidth()).toBeCloseTo(1000, 5);
  });
});
