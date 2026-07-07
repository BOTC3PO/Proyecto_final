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
 */
import { describe, expect, it, vi, afterEach } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

vi.mock("../../../domain/vblang/datasetApi", () => ({
  listDatasets: vi.fn().mockResolvedValue({ items: [] }),
  getDataset: vi.fn().mockResolvedValue({ id: "x", nombre: "x", columnas: [] }),
}));

const { mockUser } = vi.hoisted(() => ({ mockUser: { current: null as { id: string } | null } }));
vi.mock("../../../auth/use-auth", () => ({
  useAuth: () => ({ user: mockUser.current }),
}));

import MapaEditorPage from "../MapaEditorPage";

function renderPage() {
  return render(
    <MemoryRouter initialEntries={["/herramientas/mapa-editor"]}>
      <MapaEditorPage />
    </MemoryRouter>,
  );
}

afterEach(() => {
  cleanup();
  mockUser.current = null;
});

describe("MapaEditorPage — modo demo (PLAN-L)", () => {
  it("sin sesión: no ofrece Guardar ni Guardar como material, sí el CTA de registro", () => {
    mockUser.current = null;
    renderPage();

    expect(screen.queryByRole("button", { name: "Guardar" })).toBeNull();
    expect(screen.queryByText(/Guardar como material/i)).toBeNull();
    expect(screen.getByRole("link", { name: /Registrate para guardar tu mapa/i })).toBeInTheDocument();
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
    expect(screen.queryByRole("link", { name: /Registrate para guardar tu mapa/i })).toBeNull();
  });
});
