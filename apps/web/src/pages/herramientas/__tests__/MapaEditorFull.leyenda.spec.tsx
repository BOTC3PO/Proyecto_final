/**
 * PLAN-G ítem 45.d — la leyenda del editor de mapa mostraba el nombre de la
 * capa SIN ningún swatch de color visible. Causa: el `<span>` del swatch en
 * la leyenda usaba `className="sw"` (string literal), pero el CSS que le da
 * tamaño/forma (`.canvasLegend .sw { width: 12px; ... }`) vive en
 * `MapaEditorFull.module.css` — un CSS Module, que hashea `.sw` a una clase
 * que sólo un elemento con `className={styles.sw}` recibe. El swatch de la
 * lista de capas (que sí es visible) usa una clase GLOBAL distinta
 * (`.vb-layer .sw` en index.css), así que nunca se notó que el de la
 * leyenda estaba roto.
 */
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { render, screen, cleanup, waitFor } from "@testing-library/react";
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

// PLAN-L — MapaEditorPage ahora lee useAuth() para decidir demoMode.
// Sesión logueada acá: preserva el comportamiento full-featured que
// estos tests ya asumían antes de PLAN-L.
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
  sessionStorage.setItem(
    "mapa-doc:leyenda-test",
    JSON.stringify({
      tool: "mapa",
      titulo: "",
      modo: "political",
      escala: "110m",
      capas: [{ id: "default", nombre: "Anotaciones", color: "#1a1a1a", visible: true }],
      anotaciones: [
        { id: "m1", tipo: "marcador", lat: 0, lon: 0, etiqueta: "Casa", color: "#ff0000", capaId: "default" },
      ],
    }),
  );
});

afterEach(() => {
  cleanup();
  sessionStorage.clear();
  vi.restoreAllMocks();
});

function renderEditor() {
  return render(
    <MemoryRouter initialEntries={["/herramientas/mapa-editor?sskey=leyenda-test"]}>
      <MapaEditorPage />
    </MemoryRouter>,
  );
}

describe("MapaEditorFull — leyenda (ítem 45.d)", () => {
  it("el swatch de color de la leyenda NO usa la clase global literal 'sw' (bug: quedaba sin estilos, invisible)", async () => {
    renderEditor();
    await waitFor(() => {
      expect(screen.getByText("Leyenda")).toBeInTheDocument();
    });
    const leyenda = screen.getByText("Leyenda").closest("aside") as HTMLElement;
    const swatch = leyenda.querySelector("li > span:first-child") as HTMLElement;
    expect(swatch).toBeTruthy();
    // El bug: className literal "sw" (sin scope de CSS Module) no matchea
    // ninguna regla real → 0x0, invisible. El fix usa `styles.sw`.
    expect(swatch.className).not.toBe("sw");
    expect(swatch.getAttribute("style")).toMatch(/background/);
  });
});
