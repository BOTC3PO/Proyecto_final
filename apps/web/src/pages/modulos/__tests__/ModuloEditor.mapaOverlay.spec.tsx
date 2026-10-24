/**
 * Tests de integración del overlay módulo↔editor de mapas (M8v2).
 *
 * El flujo reemplaza al viejo handoff por sessionStorage + window.open (que
 * no podía funcionar entre pestañas): "Editar mapa" monta MapaEditorFull en
 * un portal full-screen dentro de la misma pestaña, con la config en memoria.
 *
 * Cubre:
 *  - Abrir el overlay desde una herramienta mapa existente.
 *  - Agregar un marcador + Guardar → la herramienta del módulo refleja el
 *    cambio al instante (sin recargar, sin storage).
 *  - Cancelar con cambios pide confirmación; si se confirma, no toca nada.
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

// Red: solo necesitamos que las llamadas de mount no exploten. Las materias
// caen al fallback local cuando apiGet rechaza.
vi.mock("../../../lib/api", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../../lib/api")>();
  return {
    ...actual,
    apiGet: vi.fn().mockRejectedValue(new Error("sin red en tests")),
    apiPost: vi.fn(),
    apiPatch: vi.fn(),
  };
});

vi.mock("../../../auth/use-auth", () => ({
  useAuth: () => ({
    user: { id: "docente-1", name: "Docente Demo", role: "TEACHER", schoolId: "escuela-1" },
  }),
}));

vi.mock("../../../bookEditor/services/booksApi", () => ({
  fetchBooks: vi.fn().mockResolvedValue({ items: [] }),
}));

vi.mock("../../../domain/vblang/datasetApi", () => ({
  listDatasets: vi.fn().mockResolvedValue({ items: [] }),
  getDataset: vi.fn().mockResolvedValue({ id: "x", nombre: "x", columnas: [] }),
}));

import ModuloEditor from "../ModuloEditor";

function mapaCfgVacio() {
  return {
    tool: "mapa",
    titulo: "",
    modo: "political",
    escala: "110m",
    capas: [{ id: "default", nombre: "Anotaciones", color: "#1a1a1a", visible: true }],
    anotaciones: [],
  };
}

/** Pre-carga el borrador de módulo nuevo con una herramienta mapa. */
function seedDraftConMapa() {
  sessionStorage.setItem(
    "modulo-draft:new",
    JSON.stringify({
      form: {
        title: "Módulo con mapa",
        description: "desc",
        subject: "geografia",
        category: "sin-categoria",
        level: "1",
        durationMinutes: 30,
        visibility: "publico",
        visibilitySchoolId: "",
        dependencies: [],
      },
      theoryItems: [
        {
          id: "th-mapa-1",
          title: "Mapa de prueba",
          type: "HerramientaStandalone",
          detail: JSON.stringify(mapaCfgVacio()),
        },
      ],
      quizzes: [],
      savedAt: Date.now(),
    }),
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
  seedDraftConMapa();
});

afterEach(() => {
  cleanup();
  sessionStorage.clear();
  vi.restoreAllMocks();
});

function renderEditor() {
  return render(
    <MemoryRouter initialEntries={["/modulos/crear"]}>
      <ModuloEditor />
    </MemoryRouter>,
  );
}

/** Abre el overlay del editor de mapa y espera a que el lienzo esté listo. */
async function abrirOverlay() {
  const abrir = await screen.findByRole("button", { name: "Abrir editor de mapa" });
  fireEvent.click(abrir);
  const overlay = screen.getByTestId("mapa-editor-overlay");
  await waitFor(() => {
    expect(within(overlay).getByTestId("mapa-hint")).toBeInTheDocument();
  });
  await waitFor(() => {
    expect(overlay.querySelector('svg[role="application"]')).toBeTruthy();
  });
  return overlay;
}

/** Agrega un marcador con la herramienta M + click en el lienzo del overlay. */
async function agregarMarcador(overlay: HTMLElement) {
  fireEvent.keyDown(window, { key: "m" });
  const svg = overlay.querySelector('svg[role="application"]') as SVGSVGElement;
  fireEvent.click(svg, { clientX: 100, clientY: 100 });
  await waitFor(() => {
    expect(within(overlay).getAllByText(/Sin etiqueta/i).length).toBeGreaterThan(0);
  });
}

describe("ModuloEditor — overlay de editor de mapa (M8v2)", () => {
  it("abre el overlay en la misma pestaña, sin window.open", async () => {
    const openSpy = vi.spyOn(window, "open");
    renderEditor();
    const overlay = await abrirOverlay();
    expect(overlay).toBeInTheDocument();
    expect(openSpy).not.toHaveBeenCalled();
  });

  it("marcador + Guardar → la herramienta del módulo refleja el cambio al instante", async () => {
    renderEditor();
    expect(await screen.findByText("Mapa político · 0 anotaciones")).toBeInTheDocument();

    const overlay = await abrirOverlay();
    await agregarMarcador(overlay);
    fireEvent.click(within(overlay).getByRole("button", { name: "Guardar" }));

    // El overlay se cierra y el resumen de la herramienta se actualiza en
    // memoria, sin recargar ni pasar por storage.
    await waitFor(() => {
      expect(screen.queryByTestId("mapa-editor-overlay")).not.toBeInTheDocument();
    });
    expect(screen.getByText("Mapa político · 1 anotación")).toBeInTheDocument();
  });

  it("Cancelar con cambios pide confirmación; al confirmar no toca la herramienta", async () => {
    // happy-dom no expone window.confirm; lo definimos manualmente.
    const confirmSpy = vi.fn().mockReturnValue(false);
    (globalThis as { confirm?: unknown }).confirm = confirmSpy;
    renderEditor();
    const overlay = await abrirOverlay();
    await agregarMarcador(overlay);

    // Primer intento: el usuario se arrepiente del descarte → sigue editando.
    fireEvent.click(within(overlay).getByRole("button", { name: "Volver sin guardar" }));
    expect(confirmSpy).toHaveBeenCalledWith("¿Descartar los cambios del mapa?");
    expect(screen.getByTestId("mapa-editor-overlay")).toBeInTheDocument();

    // Segundo intento: confirma el descarte → overlay cerrado, módulo intacto.
    confirmSpy.mockReturnValue(true);
    fireEvent.click(within(overlay).getByRole("button", { name: "Volver sin guardar" }));
    await waitFor(() => {
      expect(screen.queryByTestId("mapa-editor-overlay")).not.toBeInTheDocument();
    });
    expect(screen.getByText("Mapa político · 0 anotaciones")).toBeInTheDocument();
  });

  it("Cancelar sin cambios cierra sin pedir confirmación", async () => {
    const confirmSpy = vi.fn();
    (globalThis as { confirm?: unknown }).confirm = confirmSpy;
    renderEditor();
    const overlay = await abrirOverlay();
    fireEvent.click(within(overlay).getByRole("button", { name: "Volver sin guardar" }));
    expect(confirmSpy).not.toHaveBeenCalled();
    await waitFor(() => {
      expect(screen.queryByTestId("mapa-editor-overlay")).not.toBeInTheDocument();
    });
  });
});
