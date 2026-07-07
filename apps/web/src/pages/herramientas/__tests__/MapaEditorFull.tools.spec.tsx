/**
 * Tests de integración del editor de mapa (M3).
 *
 * Foco: verificar que el render refleja correctamente el estado de las
 * herramientas y que Esc/Enter interactúan con el estado pendiente. Los
 * tests de clicks que dependen de geometría SVG (rectWidth real) se cubren
 * indirectamente con el smoke test y los tests de `computeHint`.
 *
 * El problema de fondo es que happy-dom no implementa `getBoundingClientRect`
 * con dimensiones reales para SVGs, lo que hace que `clientToLonLat` retorne
 * `null`. Para no agregar complejidad al setup, validamos contratos que NO
 * dependen de la geometría.
 */
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { render, fireEvent, screen, cleanup, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

// TopoJSON con un único polígono rectangular (necesitamos al menos 1 feature
// para que `inverseProject` no retorne null en los tests que hacen click).
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

// PLAN-L — MapaEditorPage ahora lee useAuth() para decidir demoMode.
// Sesión logueada acá: preserva el comportamiento full-featured que
// estos tests ya asumían antes de PLAN-L.
vi.mock("../../../auth/use-auth", () => ({
  useAuth: () => ({ user: { id: "test-user", name: "Test User", role: "USER", roles: ["USER"] } }),
}));

// M8v2: el editor es un componente controlado; la carga por ?sskey= +
// sessionStorage vive en el wrapper de ruta (MapaEditorPage), que es lo que
// estos tests montan.
import MapaEditorPage from "../MapaEditorPage";

beforeEach(() => {
  globalThis.fetch = vi.fn().mockResolvedValue({
    ok: true,
    json: async () => topoConUnPais,
  }) as unknown as typeof fetch;
  // happy-dom devuelve {0,0} para getBoundingClientRect.
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

function setTool(t: "select" | "marcador" | "ruta" | "area" | "texto" | "medir") {
  const map: Record<string, string> = {
    select: "v",
    marcador: "m",
    ruta: "r",
    area: "a",
    texto: "t",
    medir: "l",
  };
  fireEvent.keyDown(window, { key: map[t] });
}

function fireEscape() {
  fireEvent.keyDown(window, { key: "Escape" });
}

function fireEnter() {
  fireEvent.keyDown(window, { key: "Enter" });
}

async function esperarListo() {
  await waitFor(() => {
    expect(screen.getByTestId("mapa-hint")).toBeInTheDocument();
  });
}

describe("MapaEditorFull — render de hints (M3)", () => {
  it("muestra hint inicial vacío (modo select)", async () => {
    renderEditor();
    await esperarListo();
    expect(screen.getByTestId("mapa-hint").textContent).toMatch(/Arrastrá/);
  });

  it("cambiar a 'marcador' actualiza el hint", async () => {
    renderEditor();
    await esperarListo();
    setTool("marcador");
    expect(screen.getByTestId("mapa-hint").textContent).toMatch(/marcador/i);
  });

  it("cambiar a 'texto' actualiza el hint al inspector", async () => {
    renderEditor();
    await esperarListo();
    setTool("texto");
    expect(screen.getByTestId("mapa-hint").textContent).toMatch(/inspector/);
  });

  it("cambiar a 'ruta' muestra el primer paso", async () => {
    renderEditor();
    await esperarListo();
    setTool("ruta");
    expect(screen.getByTestId("mapa-hint").textContent).toMatch(/empezar/);
  });

  it("cambiar a 'area' muestra el primer paso", async () => {
    renderEditor();
    await esperarListo();
    setTool("area");
    expect(screen.getByTestId("mapa-hint").textContent).toMatch(/empezar/);
  });

  it("cambiar a 'medir' muestra el primer paso", async () => {
    renderEditor();
    await esperarListo();
    setTool("medir");
    expect(screen.getByTestId("mapa-hint").textContent).toMatch(/inicial/);
  });

  it("Esc sin pendientes no rompe (deselecciona)", async () => {
    renderEditor();
    await esperarListo();
    // Sin selección ni pendientes, Esc no debe tirar.
    expect(() => fireEscape()).not.toThrow();
  });
});

describe("MapaEditorFull — handlers de creación (M3)", () => {
  /** Espera a que el SVG del lienzo esté montado. */
  async function esperarSvg() {
    await waitFor(() => {
      expect(document.querySelector('svg[role="application"]')).toBeTruthy();
    });
  }

  function clickSvg(clientX: number, clientY: number) {
    const svg = document.querySelector('svg[role="application"]') as SVGSVGElement;
    fireEvent.click(svg, { clientX, clientY });
  }

  function dblClickSvg(clientX: number, clientY: number) {
    const svg = document.querySelector('svg[role="application"]') as SVGSVGElement;
    fireEvent.doubleClick(svg, { clientX, clientY });
  }

  it("marcador: 1 click crea una anotación", async () => {
    renderEditor();
    await esperarListo();
    await esperarSvg();
    setTool("marcador");
    clickSvg(100, 100);
    // El inspector lateral lista las anotaciones; con etiqueta vacía muestra "Sin etiqueta".
    await waitFor(() => {
      expect(screen.getAllByText(/Sin etiqueta/i).length).toBeGreaterThan(0);
    });
  });

  it("texto: 1 click crea anotación de tipo texto y abre textarea", async () => {
    renderEditor();
    await esperarListo();
    await esperarSvg();
    setTool("texto");
    clickSvg(200, 200);
    const textarea = await screen.findByPlaceholderText("Texto a mostrar en el mapa");
    expect(textarea).toBeInTheDocument();
  });

  it("ruta: 2 clicks + dblclick cierra con flechaFinal", async () => {
    renderEditor();
    await esperarListo();
    await esperarSvg();
    setTool("ruta");
    clickSvg(100, 100);
    clickSvg(200, 200);
    // El hint refleja que ya puede cerrarse.
    expect(screen.getByTestId("mapa-hint").textContent).toMatch(/Doble click/);
    dblClickSvg(200, 200);
    await waitFor(() => {
      // El inspector muestra el header "Ruta" para la anotación seleccionada.
      const headers = screen.getAllByText(/^Ruta$/);
      expect(headers.length).toBeGreaterThan(0);
    });
  });

  it("ITEM-45.c: arrastrar (pan) durante 'ruta' NO agrega un punto, pero un click normal sí", async () => {
    renderEditor();
    await esperarListo();
    await esperarSvg();
    setTool("ruta");
    clickSvg(100, 100);
    clickSvg(200, 200);
    expect(
      screen.getByRole("button", { name: "Cerrar ruta con 2 puntos" }),
    ).toBeInTheDocument();

    // Arrastre (pan): pointerdown + pointermove con desplazamiento > umbral +
    // pointerup + el click nativo que el browser dispara al soltar. Antes
    // esto agregaba un 3er punto en la posición final del arrastre (el pan
    // estaba deshabilitado fuera de la herramienta "Mover", así que el
    // arrastre se interpretaba como un click); ahora debe pasar el mapa
    // (pan) y NO tocar la ruta pendiente.
    const svg = document.querySelector('svg[role="application"]') as SVGSVGElement;
    fireEvent.pointerDown(svg, { clientX: 900, clientY: 400, pointerId: 1 });
    fireEvent.pointerMove(svg, { clientX: 600, clientY: 250, pointerId: 1 });
    fireEvent.pointerUp(svg, { clientX: 600, clientY: 250, pointerId: 1 });
    fireEvent.click(svg, { clientX: 600, clientY: 250 });
    expect(
      screen.getByRole("button", { name: "Cerrar ruta con 2 puntos" }),
    ).toBeInTheDocument();

    // Un click normal (sin arrastre previo) sigue agregando puntos.
    clickSvg(250, 250);
    expect(
      screen.getByRole("button", { name: "Cerrar ruta con 3 puntos" }),
    ).toBeInTheDocument();
  });

  it("ruta: Enter cierra con 2+ puntos", async () => {
    renderEditor();
    await esperarListo();
    await esperarSvg();
    setTool("ruta");
    clickSvg(100, 100);
    clickSvg(200, 200);
    fireEnter();
    await waitFor(() => {
      const headers = screen.getAllByText(/^Ruta$/);
      expect(headers.length).toBeGreaterThan(0);
    });
  });

  it("área: 3 clicks + dblclick crea zona", async () => {
    renderEditor();
    await esperarListo();
    await esperarSvg();
    setTool("area");
    clickSvg(100, 100);
    clickSvg(200, 100);
    clickSvg(150, 200);
    expect(screen.getByTestId("mapa-hint").textContent).toMatch(/Doble click/);
    dblClickSvg(150, 200);
    await waitFor(() => {
      expect(screen.getByText(/Zona/i)).toBeInTheDocument();
    });
  });

  it("área: Esc cancela el pendiente", async () => {
    renderEditor();
    await esperarListo();
    await esperarSvg();
    setTool("area");
    clickSvg(100, 100);
    clickSvg(200, 100);
    expect(screen.getByTestId("mapa-hint").textContent).toMatch(/mínimo 3/);
    fireEscape();
    // Vuelve al estado inicial de área.
    expect(screen.getByTestId("mapa-hint").textContent).toMatch(/empezar/);
  });

  it("medir: 2 clicks producen una medición con km visibles", async () => {
    renderEditor();
    await esperarListo();
    await esperarSvg();
    setTool("medir");
    clickSvg(100, 100);
    clickSvg(500, 500);
    await waitFor(() => {
      expect(screen.getByTestId("mapa-hint").textContent).toMatch(/km/);
    });
  });

  it("Esc cancela todo lo pendiente (universal)", async () => {
    renderEditor();
    await esperarListo();
    await esperarSvg();
    setTool("ruta");
    clickSvg(100, 100);
    clickSvg(200, 200);
    expect(screen.getByTestId("mapa-hint").textContent).toMatch(/Doble click/);
    fireEscape();
    expect(screen.getByTestId("mapa-hint").textContent).toMatch(/empezar/);
  });
});
