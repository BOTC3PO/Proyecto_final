/**
 * Tests del tab "estilo" del inspector de mapa (M4).
 *
 * Foco: cambios de estilo pasan por el historial de undo/redo (no escriben
 * directo al estado). La estrategia es montar el editor, tener una anotación
 * seleccionada (ya sea creada con la herramienta o pre-poblada vía
 * sessionStorage), abrir la pestaña "estilo", modificar un campo, y verificar
 * que Ctrl+Z revierte.
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

// PLAN-L — MapaEditorPage ahora lee useAuth() para decidir demoMode.
// Sesión logueada acá: preserva el comportamiento full-featured que
// estos tests ya asumían antes de PLAN-L.
vi.mock("../../../auth/use-auth", () => ({
  useAuth: () => ({ user: { id: "test-user", name: "Test User", role: "USER", roles: ["USER"] } }),
}));

// M8v2: la carga por ?sskey= + sessionStorage vive en el wrapper de ruta.
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

/** Pre-pobla sessionStorage con un mapa que tiene un marcador seleccionado. */
function precargarConMarcador(colorInicial: string) {
  const cfg = {
    tool: "mapa",
    titulo: "",
    modo: "political",
    escala: "110m",
    capas: [{ id: "default", nombre: "Anotaciones", color: "#1a1a1a", visible: true }],
    anotaciones: [
      { id: "m1", tipo: "marcador", lat: 0, lon: 0, etiqueta: "Casa", color: colorInicial, capaId: "default" },
    ],
  };
  sessionStorage.setItem("mapa-doc:style-test", JSON.stringify(cfg));
}

function renderEditor(ssKey = "style-test") {
  return render(
    <MemoryRouter initialEntries={[`/herramientas/mapa-editor?sskey=${ssKey}`]}>
      <MapaEditorPage />
    </MemoryRouter>,
  );
}

async function esperarListo() {
  await waitFor(() => {
    expect(screen.getByTestId("mapa-hint")).toBeInTheDocument();
  });
  await waitFor(() => {
    expect(document.querySelector('svg[role="application"]')).toBeTruthy();
  });
}

/** Abre la pestaña "estilo" del inspector (solo si hay anotación seleccionada). */
function abrirTabEstilo() {
  const tab = screen.getByRole("tab", { name: /Estilo/ });
  fireEvent.click(tab);
}

/** Click en la primera anotación de la lista lateral para seleccionarla. */
function seleccionarPrimeraAnno() {
  const list = screen.getByRole("list", { name: /Lista de anotaciones/i });
  const item = list.querySelector('[role="listitem"]') as HTMLElement;
  fireEvent.click(item);
}

/** Clickea un color del picker (busca el swatch por aria-label). */
function setColor(nombre: string) {
  const swatch = screen.getByRole("button", { name: new RegExp(`^Color ${nombre}$`) });
  fireEvent.click(swatch);
}

function fireCtrlZ() {
  fireEvent.keyDown(window, { key: "z", ctrlKey: true });
}

function fireCtrlShiftZ() {
  fireEvent.keyDown(window, { key: "z", ctrlKey: true, shiftKey: true });
}

describe("Inspector — tab estilo (M4)", () => {
  it("cambiar color de un marcador persiste en la anotación", async () => {
    precargarConMarcador("#1a1a1a");
    renderEditor();
    await esperarListo();
    seleccionarPrimeraAnno();
    abrirTabEstilo();
    setColor("Naranja");
    // El swatch Naranja queda aria-pressed.
    const swatch = screen.getByRole("button", { name: /^Color Naranja$/ });
    expect(swatch.getAttribute("aria-pressed")).toBe("true");
  });

  it("Ctrl+Z revierte el cambio de color (undo)", async () => {
    precargarConMarcador("#1a1a1a");
    renderEditor();
    await esperarListo();
    seleccionarPrimeraAnno();
    abrirTabEstilo();
    setColor("Naranja");
    expect(screen.getByRole("button", { name: /^Color Naranja$/ }).getAttribute("aria-pressed")).toBe("true");
    fireCtrlZ();
    // Tras Ctrl+Z, el swatch activo vuelve a ser el original (Negro).
    await waitFor(() => {
      expect(screen.getByRole("button", { name: /^Color Negro$/ }).getAttribute("aria-pressed")).toBe("true");
    });
  });

  it("Ctrl+Shift+Z rehace el cambio de color (redo)", async () => {
    precargarConMarcador("#1a1a1a");
    renderEditor();
    await esperarListo();
    seleccionarPrimeraAnno();
    abrirTabEstilo();
    setColor("Naranja");
    fireCtrlZ();
    // Tras undo, Naranja no está pressed.
    expect(screen.getByRole("button", { name: /^Color Naranja$/ }).getAttribute("aria-pressed")).toBe("false");
    fireCtrlShiftZ();
    await waitFor(() => {
      expect(screen.getByRole("button", { name: /^Color Naranja$/ }).getAttribute("aria-pressed")).toBe("true");
    });
  });

  it("el slider de tamaño de marcador refleja el valor efectivo", async () => {
    const cfg = {
      tool: "mapa",
      modo: "political",
      escala: "110m",
      capas: [{ id: "default", nombre: "Anotaciones", color: "#1a1a1a", visible: true }],
      anotaciones: [
        { id: "m1", tipo: "marcador", lat: 0, lon: 0, etiqueta: "x", capaId: "default" },
      ],
    };
    sessionStorage.setItem("mapa-doc:tam-test", JSON.stringify(cfg));
    renderEditor("tam-test");
    await esperarListo();
    seleccionarPrimeraAnno();
    abrirTabEstilo();
    const slider = screen.getByLabelText(/Escala \(1\.0×\)/);
    expect(slider).toBeInTheDocument();
    expect(slider.getAttribute("aria-valuenow")).toBe("1");
  });

  it("cambiar el slider de marcador entra al historial de undo", async () => {
    const cfg = {
      tool: "mapa",
      modo: "political",
      escala: "110m",
      capas: [{ id: "default", nombre: "Anotaciones", color: "#1a1a1a", visible: true }],
      anotaciones: [
        { id: "m1", tipo: "marcador", lat: 0, lon: 0, etiqueta: "x", capaId: "default" },
      ],
    };
    sessionStorage.setItem("mapa-doc:tam-test", JSON.stringify(cfg));
    renderEditor("tam-test");
    await esperarListo();
    seleccionarPrimeraAnno();
    abrirTabEstilo();
    const slider = screen.getByLabelText(/Escala \(1\.0×\)/) as HTMLInputElement;
    fireEvent.change(slider, { target: { value: "1.5" } });
    // El label refleja el nuevo valor.
    await waitFor(() => {
      expect(screen.getByLabelText(/Escala \(1\.5×\)/)).toBeInTheDocument();
    });
    // Ctrl+Z revierte.
    fireCtrlZ();
    await waitFor(() => {
      expect(screen.getByLabelText(/Escala \(1\.0×\)/)).toBeInTheDocument();
    });
  });

  it("el slider de opacidad de zona respeta el rango 0–0.8", async () => {
    const cfg = {
      tool: "mapa",
      modo: "political",
      escala: "110m",
      capas: [{ id: "default", nombre: "Anotaciones", color: "#1a1a1a", visible: true }],
      anotaciones: [
        { id: "z1", tipo: "zona", puntos: [[0, 0], [1, 0], [1, 1], [0, 1]], etiqueta: "x", capaId: "default" },
      ],
    };
    sessionStorage.setItem("mapa-doc:zona-test", JSON.stringify(cfg));
    renderEditor("zona-test");
    await esperarListo();
    seleccionarPrimeraAnno();
    abrirTabEstilo();
    const slider = screen.getByLabelText(/Opacidad del relleno/);
    expect(slider.getAttribute("min")).toBe("0");
    expect(slider.getAttribute("max")).toBe("0.8");
  });

  it("el slider de grosor de zona respeta el rango 1–8", async () => {
    const cfg = {
      tool: "mapa",
      modo: "political",
      escala: "110m",
      capas: [{ id: "default", nombre: "Anotaciones", color: "#1a1a1a", visible: true }],
      anotaciones: [
        { id: "z1", tipo: "zona", puntos: [[0, 0], [1, 0], [1, 1], [0, 1]], etiqueta: "x", capaId: "default" },
      ],
    };
    sessionStorage.setItem("mapa-doc:zona-g-test", JSON.stringify(cfg));
    renderEditor("zona-g-test");
    await esperarListo();
    seleccionarPrimeraAnno();
    abrirTabEstilo();
    const slider = screen.getByLabelText(/Grosor de borde/);
    expect(slider.getAttribute("min")).toBe("1");
    expect(slider.getAttribute("max")).toBe("8");
  });

  it("toggle de flechaFinal se renderiza para tipo ruta", async () => {
    const cfg = {
      tool: "mapa",
      modo: "political",
      escala: "110m",
      capas: [{ id: "default", nombre: "Anotaciones", color: "#1a1a1a", visible: true }],
      anotaciones: [
        { id: "r1", tipo: "ruta", puntos: [[0, 0], [1, 1]], flechaFinal: true, capaId: "default" },
      ],
    };
    sessionStorage.setItem("mapa-doc:ruta-test", JSON.stringify(cfg));
    renderEditor("ruta-test");
    await esperarListo();
    seleccionarPrimeraAnno();
    abrirTabEstilo();
    const toggle = screen.getByRole("checkbox");
    expect(toggle).toBeChecked();
  });
});
