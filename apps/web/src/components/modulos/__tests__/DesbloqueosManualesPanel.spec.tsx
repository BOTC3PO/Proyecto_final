/**
 * "Niveles por aula con mapa de flujo" — DesbloqueosManualesPanel.tsx.
 *
 * Cubre:
 *  (a) Lista los desbloqueos existentes (aula/alumno).
 *  (b) Agregar un desbloqueo por aula llama a crearModuloDesbloqueo con
 *      { aulaId } y recarga la lista.
 *  (c) Quitar un desbloqueo llama a eliminarModuloDesbloqueo y lo saca
 *      de la lista.
 */
import { describe, expect, it, vi, afterEach } from "vitest";
import { render, screen, cleanup, fireEvent, waitFor } from "@testing-library/react";

const mockFetch = vi.fn();
const mockCrear = vi.fn();
const mockEliminar = vi.fn();
vi.mock("../../../services/modulo-desbloqueos", () => ({
  fetchModuloDesbloqueos: (...args: unknown[]) => mockFetch(...args),
  crearModuloDesbloqueo: (...args: unknown[]) => mockCrear(...args),
  eliminarModuloDesbloqueo: (...args: unknown[]) => mockEliminar(...args),
}));

vi.mock("../../../services/aulas", () => ({
  fetchClassrooms: vi.fn().mockResolvedValue({ items: [{ id: "aula-1", name: "3° A" }] }),
}));

vi.mock("../../../services/progreso-aula", () => ({
  fetchAulaMatriz: vi.fn().mockResolvedValue({
    modulos: [],
    alumnos: [{ id: "alumno-1", name: "Juan Pérez", progresos: {} }],
  }),
}));

import DesbloqueosManualesPanel from "../DesbloqueosManualesPanel";

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

describe("DesbloqueosManualesPanel", () => {
  it("(a) lista los desbloqueos existentes", async () => {
    mockFetch.mockResolvedValue([
      { id: "d1", usuarioId: null, usuarioNombre: null, aulaId: "aula-1", aulaNombre: "3° A", otorgadoPor: "d", createdAt: "" },
      { id: "d2", usuarioId: "alumno-1", usuarioNombre: "Juan Pérez", aulaId: null, aulaNombre: null, otorgadoPor: "d", createdAt: "" },
    ]);

    render(<DesbloqueosManualesPanel moduloId="mod-1" />);

    expect(await screen.findByText("🏫 3° A")).toBeInTheDocument();
    expect(screen.getByText(/Juan Pérez/)).toBeInTheDocument();
  });

  it("(b) agregar por aula llama a crearModuloDesbloqueo con aulaId y recarga", async () => {
    mockFetch.mockResolvedValueOnce([]).mockResolvedValueOnce([
      { id: "d1", usuarioId: null, usuarioNombre: null, aulaId: "aula-1", aulaNombre: "3° A", otorgadoPor: "d", createdAt: "" },
    ]);
    mockCrear.mockResolvedValue({ id: "d1" });

    render(<DesbloqueosManualesPanel moduloId="mod-1" />);

    await screen.findByTestId("desbloqueo-agregar");
    fireEvent.change(screen.getByLabelText("Elegir aula"), { target: { value: "aula-1" } });
    fireEvent.click(screen.getByTestId("desbloqueo-agregar"));

    await waitFor(() => {
      expect(mockCrear).toHaveBeenCalledWith("mod-1", { aulaId: "aula-1" });
    });
    expect(await screen.findByText("🏫 3° A")).toBeInTheDocument();
  });

  it("(c) quitar un desbloqueo lo saca de la lista", async () => {
    mockFetch.mockResolvedValue([
      { id: "d1", usuarioId: null, usuarioNombre: null, aulaId: "aula-1", aulaNombre: "3° A", otorgadoPor: "d", createdAt: "" },
    ]);
    mockEliminar.mockResolvedValue(undefined);

    render(<DesbloqueosManualesPanel moduloId="mod-1" />);

    await screen.findByText("🏫 3° A");
    fireEvent.click(screen.getByTestId("desbloqueo-quitar-d1"));

    await waitFor(() => {
      expect(mockEliminar).toHaveBeenCalledWith("mod-1", "d1");
    });
    await waitFor(() => {
      expect(screen.queryByText("🏫 3° A")).not.toBeInTheDocument();
    });
  });
});
