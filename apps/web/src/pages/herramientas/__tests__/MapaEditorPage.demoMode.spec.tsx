/**
 * PLAN-L — modo demo del editor de mapas para guests.
 *
 * `/herramientas/mapa-editor` es pública: antes de este plan, un guest sin
 * sesión veía el botón "Guardar" (persiste a sessionStorage, no rompe, pero
 * le miente al guest) y "Guardar como material" (pegaría a la API → 401).
 *
 * Verifica:
 *  - Sin sesión (`user: null`): no hay "Guardar" ni "Guardar como material";
 *    en su lugar, un CTA "Registrate para guardar tu mapa" + banner
 *    descartable. El lienzo sigue disponible (dibujar no depende de sesión).
 *  - Con sesión: todo igual que siempre (Guardar + Guardar como material,
 *    sin banner ni CTA).
 *
 * PLAN-M — el CTA ya no es un <Link> (necesita guardar el borrador en
 * localStorage ANTES de navegar, ver mapa-draft.ts): clickearlo guarda el
 * borrador y navega a /register con returnTo de vuelta a esta misma ruta.
 */
import { describe, expect, it, vi, afterEach } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route, useLocation } from "react-router-dom";

vi.mock("../../../domain/vblang/datasetApi", () => ({
  listDatasets: vi.fn().mockResolvedValue({ items: [] }),
  getDataset: vi.fn().mockResolvedValue({ id: "x", nombre: "x", columnas: [] }),
}));

const { mockUser } = vi.hoisted(() => ({ mockUser: { current: null as { id: string } | null } }));
vi.mock("../../../auth/use-auth", () => ({
  useAuth: () => ({ user: mockUser.current }),
}));

import MapaEditorPage from "../MapaEditorPage";

function LocationProbe() {
  const loc = useLocation();
  return <div data-testid="location-probe">{loc.pathname}{loc.search}</div>;
}

function renderPage() {
  return render(
    <MemoryRouter initialEntries={["/herramientas/mapa-editor"]}>
      <Routes>
        <Route path="/herramientas/mapa-editor" element={<MapaEditorPage />} />
        <Route path="/register" element={<LocationProbe />} />
      </Routes>
    </MemoryRouter>,
  );
}

afterEach(() => {
  cleanup();
  mockUser.current = null;
  localStorage.clear();
});

describe("MapaEditorPage — modo demo (PLAN-L)", () => {
  it("sin sesión: no ofrece Guardar ni Guardar como material, sí el CTA de registro", () => {
    mockUser.current = null;
    renderPage();

    expect(screen.queryByRole("button", { name: "Guardar" })).toBeNull();
    expect(screen.queryByText(/Guardar como material/i)).toBeNull();
    expect(screen.getByRole("button", { name: /Registrate para guardar tu mapa/i })).toBeInTheDocument();
  });

  it("sin sesión: muestra el banner de demo y se puede descartar", () => {
    mockUser.current = null;
    renderPage();

    const banner = screen.getByText(/Estás probando el editor/i);
    expect(banner).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Descartar aviso" }));
    expect(screen.queryByText(/Estás probando el editor/i)).toBeNull();
  });

  it("con sesión: muestra Guardar y no el banner ni el CTA de registro", () => {
    mockUser.current = { id: "user-1" };
    renderPage();

    expect(screen.getByRole("button", { name: "Guardar" })).toBeInTheDocument();
    expect(screen.queryByText(/Estás probando el editor/i)).toBeNull();
    expect(screen.queryByRole("button", { name: /Registrate para guardar tu mapa/i })).toBeNull();
  });

  it("PLAN-M: click en el CTA guarda un borrador y navega a /register con returnTo de vuelta", () => {
    mockUser.current = null;
    renderPage();

    fireEvent.click(screen.getByRole("button", { name: /Registrate para guardar tu mapa/i }));

    expect(screen.getByTestId("location-probe")).toHaveTextContent(
      "/register?returnTo=%2Fherramientas%2Fmapa-editor%3Fdraft%3D1",
    );
    expect(localStorage.getItem("vb:mapa-draft:v1")).toBeTruthy();
  });
});
