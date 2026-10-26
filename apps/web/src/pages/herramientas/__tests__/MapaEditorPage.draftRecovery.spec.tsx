/**
 * PLAN-M — puente demo→cuenta del editor de mapas.
 *
 * Al volver logueado con `?draft=1` (tras el CTA "Registrate para guardar
 * tu mapa" de PLAN-L → /register?returnTo=... → login), MapaEditorPage debe
 * restaurar el borrador guardado en localStorage (mapa-draft.ts), mostrar el
 * banner "Recuperamos tu mapa", abrir directo el diálogo de "Guardar como
 * material", y limpiar el borrador una vez guardado.
 */
import { describe, expect, it, vi, afterEach, beforeEach } from "vitest";
import { render, screen, cleanup, fireEvent, waitFor, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { saveDraft } from "../mapa-draft";
import type { MapaConfig } from "../../../components/modulos/standalone/types";

vi.mock("../../../domain/vblang/datasetApi", () => ({
  listDatasets: vi.fn().mockResolvedValue({ items: [] }),
  getDataset: vi.fn().mockResolvedValue({ id: "x", nombre: "x", columnas: [] }),
}));

const { mockUser } = vi.hoisted(() => ({ mockUser: { current: { id: "user-1" } as { id: string } | null } }));
vi.mock("../../../auth/use-auth", () => ({
  useAuth: () => ({ user: mockUser.current }),
}));

const mockPost = vi.fn();
vi.mock("../../../lib/api", () => ({
  apiGet: vi.fn(),
  apiPost: (...args: unknown[]) => mockPost(...args),
}));

import MapaEditorPage from "../MapaEditorPage";

function draftConfig(): MapaConfig {
  return {
    tool: "mapa",
    titulo: "Mapa de guest",
    modo: "political",
    escala: "110m",
    capas: [{ id: "default", nombre: "Anotaciones", color: "#1a1a1a", visible: true }],
    anotaciones: [{ id: "m1", tipo: "marcador", lat: 10, lon: 20, etiqueta: "Casa" }],
  };
}

function renderPage(path = "/herramientas/mapa-editor?draft=1") {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <MapaEditorPage />
    </MemoryRouter>,
  );
}

beforeEach(() => {
  mockUser.current = { id: "user-1" };
  mockPost.mockReset();
});

afterEach(() => {
  cleanup();
  localStorage.clear();
});

describe("MapaEditorPage — recuperación de borrador (PLAN-M)", () => {
  it("con borrador válido y sesión: restaura la config, banner, y abre Guardar como material", () => {
    saveDraft(draftConfig());
    renderPage();

    // "Título" etiqueta tanto el campo del mapa como el del diálogo (ver más
    // abajo): el del mapa tiene id estable `map-titulo`.
    expect(document.getElementById("map-titulo")).toHaveValue("Mapa de guest");
    expect(screen.getAllByText("Casa").length).toBeGreaterThan(0);
    expect(screen.getByText(/Recuperamos tu mapa/i)).toBeInTheDocument();

    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();
    expect(within(dialog).getByLabelText(/título/i)).toHaveValue("Mapa de guest");
  });

  it("guardar el material recuperado limpia el borrador de localStorage", async () => {
    saveDraft(draftConfig());
    mockPost.mockResolvedValue({ materialId: "mat-1", versionId: "v-1", versionNumber: 1 });
    renderPage();

    expect(localStorage.getItem("vb:mapa-draft:v1")).toBeTruthy();
    const dialog = screen.getByRole("dialog");
    fireEvent.click(within(dialog).getByRole("button", { name: /^guardar$/i }));

    await waitFor(() => expect(mockPost).toHaveBeenCalled());
    await waitFor(() => expect(localStorage.getItem("vb:mapa-draft:v1")).toBeNull());
  });

  it("sin borrador guardado (expirado o inexistente): arranca vacío, sin banner ni diálogo", () => {
    renderPage();

    expect(screen.getByLabelText("Título")).toHaveValue("");
    expect(screen.queryByText(/Recuperamos tu mapa/i)).toBeNull();
    expect(screen.queryByRole("dialog")).toBeNull();
  });

  it("sin ?draft=1: ignora cualquier borrador presente (comportamiento normal)", () => {
    saveDraft(draftConfig());
    renderPage("/herramientas/mapa-editor");

    expect(screen.getByLabelText("Título")).toHaveValue("");
    expect(screen.queryByText(/Recuperamos tu mapa/i)).toBeNull();
  });
});
