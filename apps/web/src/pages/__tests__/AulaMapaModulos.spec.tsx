/**
 * "Niveles por aula con mapa de flujo" — página AulaMapaModulos.tsx.
 *
 * Cubre:
 *  (a) Carga y muestra el mapa con los módulos del aula.
 *  (b) Aula sin módulos asignados → mensaje de vacío, sin el SVG.
 *  (c) Error del back → Alert de error.
 *  (d) Click en un nodo disponible navega a /modulos/:id.
 */
import { describe, expect, it, vi, afterEach } from "vitest";
import { render, screen, cleanup, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

const mockFetchAulaMapaModulos = vi.fn();
vi.mock("../../services/clase-modulos", () => ({
  fetchAulaMapaModulos: (...args: unknown[]) => mockFetchAulaMapaModulos(...args),
}));

vi.mock("../../services/aulas", () => ({
  fetchClassroomDetail: vi.fn().mockResolvedValue({ id: "aula-mapa-1", name: "3° A" }),
}));

const mockNavigate = vi.fn();
vi.mock("react-router-dom", async (importOriginal) => {
  const actual = await importOriginal<typeof import("react-router-dom")>();
  return { ...actual, useNavigate: () => mockNavigate };
});

import AulaMapaModulosPage from "../AulaMapaModulos";

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

function renderAt() {
  return render(
    <MemoryRouter initialEntries={["/clases/aula-mapa-1/mapa"]}>
      <Routes>
        <Route path="/clases/:aulaId/mapa" element={<AulaMapaModulosPage />} />
      </Routes>
    </MemoryRouter>
  );
}

describe("AulaMapaModulos", () => {
  it("(a) carga y muestra el mapa con los módulos del aula", async () => {
    mockFetchAulaMapaModulos.mockResolvedValue({
      modulos: [
        { id: "mod-1", title: "Módulo 1", subject: "Mate", status: "completado", isLocked: false, missingDependencies: [] },
        { id: "mod-2", title: "Módulo 2", subject: "Mate", status: "no_iniciado", isLocked: true, missingDependencies: [{ id: "mod-1", title: "Módulo 1" }] },
      ],
      links: [{ id: "mod-1->mod-2", sourceId: "mod-1", targetId: "mod-2" }],
    });

    renderAt();

    expect(await screen.findByText("Módulo 1")).toBeInTheDocument();
    expect(screen.getByText("Módulo 2")).toBeInTheDocument();
    expect(screen.getByTestId("aula-flow-map")).toBeInTheDocument();
  });

  it("(b) sin módulos asignados muestra el mensaje de vacío", async () => {
    mockFetchAulaMapaModulos.mockResolvedValue({ modulos: [], links: [] });

    renderAt();

    expect(await screen.findByText(/todavía no tiene módulos asignados/i)).toBeInTheDocument();
    expect(screen.queryByTestId("aula-flow-map")).not.toBeInTheDocument();
  });

  it("(c) error del back muestra un Alert", async () => {
    mockFetchAulaMapaModulos.mockRejectedValue(new Error("boom"));

    renderAt();

    expect(await screen.findByText("boom")).toBeInTheDocument();
  });

  it("(d) click en un nodo disponible navega a /modulos/:id", async () => {
    mockFetchAulaMapaModulos.mockResolvedValue({
      modulos: [
        { id: "mod-1", title: "Módulo 1", subject: "Mate", status: "completado", isLocked: false, missingDependencies: [] },
      ],
      links: [],
    });

    renderAt();
    await screen.findByText("Módulo 1");
    fireEvent.click(screen.getByTestId("mapa-nodo-mod-1"));

    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith(expect.stringContaining("/modulos/mod-1"));
    });
  });
});
