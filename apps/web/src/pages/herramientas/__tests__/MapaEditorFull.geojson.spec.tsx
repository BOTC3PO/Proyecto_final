/**
 * Tests de import + render de capas GeoJSON en el editor (M5).
 *
 * Cubre:
 *   - Validación unitaria (geojson-import.spec.ts) — separación de errores.
 *   - Import válido: agregar capa + render de N paths en el SVG.
 *   - Archivo inválido: error visible, no se toca la config.
 *   - Toggle de visibilidad: la capa se oculta del SVG.
 *   - Eliminar capa GeoJSON.
 */
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { render, fireEvent, screen, cleanup, waitFor, within } from "@testing-library/react";
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

// M8v2: la carga por ?sskey= + sessionStorage vive en el wrapper de ruta.
import MapaEditorPage from "../MapaEditorPage";

// ─── Fixtures inline ───────────────────────────────────────────────────────

/** GeoJSON con 2 features (1 Point + 1 Polygon). Total < 1 KB. */
const GEOJSON_DOS_FEATURES = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: { type: "Point", coordinates: [0, 0] },
      properties: { name: "Origen" },
    },
    {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [[[-10, -10], [10, -10], [10, 10], [-10, 10], [-10, -10]]],
      },
      properties: { name: "Cuadrado" },
    },
  ],
};

function geojsonText(): string {
  return JSON.stringify(GEOJSON_DOS_FEATURES);
}

function cfgVacio() {
  return {
    tool: "mapa",
    titulo: "",
    modo: "political",
    escala: "110m",
    capas: [{ id: "default", nombre: "Anotaciones", color: "#1a1a1a", visible: true }],
    anotaciones: [],
  };
}

function renderEditor(ssKey = "gj-test") {
  return render(
    <MemoryRouter initialEntries={[`/herramientas/mapa-editor?sskey=${ssKey}`]}>
      <MapaEditorPage />
    </MemoryRouter>,
  );
}

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
  sessionStorage.setItem("mapa-doc:gj-test", JSON.stringify(cfgVacio()));
});

afterEach(() => {
  cleanup();
  sessionStorage.clear();
  vi.restoreAllMocks();
});

async function esperarListo() {
  await waitFor(() => {
    expect(screen.getByTestId("mapa-hint")).toBeInTheDocument();
  });
  await waitFor(() => {
    expect(document.querySelector('svg[role="application"]')).toBeTruthy();
  });
}

/** Simula la selección de un archivo en el input escondido. */
function importarArchivo(text: string, name = "lugares.geojson") {
  const file = new File([text], name, { type: "application/geo+json" });
  const input = screen.getByTestId("importar-geojson-input") as HTMLInputElement;
  // DataTransfer es readonly; simulamos el change con un FileList sintético.
  Object.defineProperty(input, "files", { value: [file], configurable: true });
  fireEvent.change(input);
}

describe("Importar capa GeoJSON (M5)", () => {
  it("import válido: agrega la capa y dibuja N elementos en el SVG", async () => {
    renderEditor();
    await esperarListo();
    importarArchivo(geojsonText());
    // Aparece la nueva capa en la lista.
    await waitFor(() => {
      const list = screen.getByRole("list", { name: /Lista de capas/i });
      expect(within(list).getByText(/lugares/i)).toBeInTheDocument();
    });
    // El SVG tiene 1 polygon (cuadrado) + 1 circle (punto) = 2 elementos geo.
    const gj = document.querySelectorAll('[data-gj-layer] [data-gj]');
    expect(gj.length).toBe(2);
    expect(document.querySelectorAll('[data-gj="polygon"]').length).toBe(1);
    expect(document.querySelectorAll('[data-gj="point"]').length).toBe(1);
  });

  it("archivo inválido: muestra error y NO toca la config", async () => {
    renderEditor();
    await esperarListo();
    // GeoJSON con type incorrecto.
    importarArchivo(JSON.stringify({ type: "Feature", geometry: { type: "Point", coordinates: [0, 0] } }));
    expect(await screen.findByTestId("geojson-error")).toBeInTheDocument();
    // La lista de capas sigue teniendo solo la default.
    const list = screen.getByRole("list", { name: /Lista de capas/i });
    expect(within(list).queryByText(/lugares/i)).toBeNull();
  });

  it("archivo con JSON malformado muestra error en español", async () => {
    renderEditor();
    await esperarListo();
    importarArchivo("{no es json");
    const alert = await screen.findByTestId("geojson-error");
    expect(alert.textContent).toMatch(/JSON/);
  });

  it("archivo sin features válidas muestra error específico", async () => {
    renderEditor();
    await esperarListo();
    importarArchivo(JSON.stringify({
      type: "FeatureCollection",
      features: [{ type: "Feature", geometry: { type: "Point", coordinates: [0] } }],
    }));
    const alert = await screen.findByTestId("geojson-error");
    expect(alert.textContent).toMatch(/soportada|geometr/i);
  });

  it("toggle de visibilidad oculta la capa del SVG", async () => {
    renderEditor();
    await esperarListo();
    importarArchivo(geojsonText());
    await waitFor(() => {
      const list = screen.getByRole("list", { name: /Lista de capas/i });
      expect(within(list).getByText(/lugares/i)).toBeInTheDocument();
    });
    // Antes de ocultar, hay 2 elementos geo en el SVG.
    expect(document.querySelectorAll('[data-gj-layer] [data-gj]').length).toBe(2);
    // Toggle: click en el botón "Ocultar capa lugares" (la nueva importada).
    const ocultar = screen.getByRole("button", { name: /Ocultar capa lugares/i });
    fireEvent.click(ocultar);
    await waitFor(() => {
      // Tras ocultar, no hay elementos geo en el SVG.
      expect(document.querySelectorAll('[data-gj-layer] [data-gj]').length).toBe(0);
      expect(screen.getByRole("button", { name: /Mostrar capa lugares/i })).toBeInTheDocument();
    });
  });

  it("eliminar capa GeoJSON: pide confirmación, retira del SVG y de la lista", async () => {
    // happy-dom no expone window.confirm; lo definimos manualmente.
    const confirmSpy = vi.fn(() => true);
    (globalThis as any).confirm = confirmSpy;
    renderEditor();
    await esperarListo();
    importarArchivo(geojsonText());
    await waitFor(() => {
      const list = screen.getByRole("list", { name: /Lista de capas/i });
      expect(within(list).getByText(/lugares/i)).toBeInTheDocument();
    });
    const eliminar = screen.getByRole("button", { name: /Eliminar capa lugares/i });
    fireEvent.click(eliminar);
    expect(confirmSpy).toHaveBeenCalled();
    await waitFor(() => {
      const list = screen.getByRole("list", { name: /Lista de capas/i });
      expect(within(list).queryByText(/lugares/i)).toBeNull();
    });
  });
});
