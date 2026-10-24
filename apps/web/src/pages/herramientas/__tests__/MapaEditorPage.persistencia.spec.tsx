/**
 * Tests del wrapper de ruta /herramientas/mapa-editor (M8v2).
 *
 * El wrapper conserva el comportamiento standalone: carga la config desde
 * sessionStorage según ?sskey= (misma pestaña) y, al Guardar, persiste la
 * config vigente de vuelta bajo la misma clave. Cancelar no escribe nada.
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

import MapaEditorPage from "../MapaEditorPage";

function cfgConMarcador() {
  return {
    tool: "mapa",
    titulo: "Mi mapa",
    modo: "political",
    escala: "110m",
    capas: [{ id: "default", nombre: "Anotaciones", color: "#1a1a1a", visible: true }],
    anotaciones: [
      { id: "m1", tipo: "marcador", lat: 0, lon: 0, etiqueta: "Casa", capaId: "default" },
    ],
  };
}

function renderPage(ssKey = "wrap-test") {
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
}

describe("MapaEditorPage — persistencia standalone (M8v2)", () => {
  it("carga la config desde sessionStorage según ?sskey=", async () => {
    sessionStorage.setItem("mapa-doc:wrap-test", JSON.stringify(cfgConMarcador()));
    renderPage();
    await esperarListo();
    // El título y la anotación pre-cargada aparecen en el editor.
    expect(screen.getByLabelText("Título")).toHaveValue("Mi mapa");
    expect(screen.getAllByText("Casa").length).toBeGreaterThan(0);
  });

  it("sin doc en sessionStorage arranca con config vacía", async () => {
    renderPage("sin-doc");
    await esperarListo();
    expect(screen.getByLabelText("Título")).toHaveValue("");
    expect(screen.getByText(/Sin anotaciones aún/)).toBeInTheDocument();
  });

  it("Guardar persiste la config vigente bajo la misma clave", async () => {
    sessionStorage.setItem("mapa-doc:wrap-test", JSON.stringify(cfgConMarcador()));
    renderPage();
    await esperarListo();
    fireEvent.change(screen.getByLabelText("Título"), { target: { value: "Editado" } });
    fireEvent.click(screen.getByRole("button", { name: "Guardar" }));
    const raw = sessionStorage.getItem("mapa-doc:wrap-test");
    expect(raw).toBeTruthy();
    const stored = JSON.parse(raw!);
    expect(stored.titulo).toBe("Editado");
    expect(stored.anotaciones).toHaveLength(1);
  });

  it("Volver con cambios pide confirmación y no escribe si se cancela", async () => {
    sessionStorage.setItem("mapa-doc:wrap-test", JSON.stringify(cfgConMarcador()));
    // happy-dom no expone window.confirm; lo definimos manualmente.
    const confirmSpy = vi.fn().mockReturnValue(false);
    (globalThis as { confirm?: unknown }).confirm = confirmSpy;
    renderPage();
    await esperarListo();
    fireEvent.change(screen.getByLabelText("Título"), { target: { value: "Editado" } });
    fireEvent.click(screen.getByRole("button", { name: "Volver sin guardar" }));
    expect(confirmSpy).toHaveBeenCalledWith("¿Descartar los cambios del mapa?");
    // No se persistió el cambio.
    const stored = JSON.parse(sessionStorage.getItem("mapa-doc:wrap-test")!);
    expect(stored.titulo).toBe("Mi mapa");
    // El editor sigue montado (la confirmación canceló la salida).
    expect(screen.getByTestId("mapa-hint")).toBeInTheDocument();
  });

  it("Volver sin cambios no pide confirmación", async () => {
    sessionStorage.setItem("mapa-doc:wrap-test", JSON.stringify(cfgConMarcador()));
    const confirmSpy = vi.fn();
    (globalThis as { confirm?: unknown }).confirm = confirmSpy;
    renderPage();
    await esperarListo();
    fireEvent.click(screen.getByRole("button", { name: "Volver sin guardar" }));
    expect(confirmSpy).not.toHaveBeenCalled();
  });
});
