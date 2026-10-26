/**
 * Tests de AsignarModulosModal (Tarea 16b).
 *
 * Verifica:
 *  - Carga los modulos del docente y marca los asignados al aula.
 *  - Toggle en checkbox dispara POST (asignar) o DELETE (desasignar).
 *  - Filtra por título al escribir en la búsqueda.
 *  - Cierra con Escape y con el botón ✕.
 */

import { describe, expect, it, vi, beforeEach } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import AsignarModulosModal from "../AsignarModulosModal";

const mockModulos = [
  { id: "m-1", title: "Suma de fracciones", subject: "Matemática" },
  { id: "m-2", title: "Lectura comprensiva", subject: "Lengua" },
  { id: "m-3", title: "Historia argentina", subject: "Historia" },
];

const mockAsignados = { items: [{ moduloId: "m-2", assignedAt: "2025-01-01", required: false }] };

const mockApiGet = vi.fn();
const mockApiPost = vi.fn().mockResolvedValue({ ok: true });
const mockApiDelete = vi.fn().mockResolvedValue({ ok: true });

vi.mock("../../../lib/api", () => ({
  apiGet: (...args: unknown[]) => mockApiGet(...args),
  apiPost: (...args: unknown[]) => mockApiPost(...args),
  apiDelete: (...args: unknown[]) => mockApiDelete(...args),
}));

beforeEach(() => {
  mockApiGet.mockReset();
  mockApiPost.mockReset().mockResolvedValue({ ok: true });
  mockApiDelete.mockReset().mockResolvedValue({ ok: true });
  mockApiGet.mockImplementation((url: string) => {
    if (url === "/api/modulos") {
      return Promise.resolve({ items: mockModulos });
    }
    if (url === "/api/aulas/aula-1/modulos") {
      return Promise.resolve(mockAsignados);
    }
    return Promise.resolve({ items: [] });
  });
});

function renderModal(onClose = vi.fn(), onChange = vi.fn()) {
  return render(
    <AsignarModulosModal
      classroomId="aula-1"
      classroomName="5°B"
      onClose={onClose}
      onChange={onChange}
    />,
  );
}

describe("AsignarModulosModal", () => {
  it("carga modulos y muestra los asignados marcados", async () => {
    renderModal();
    await waitFor(() => {
      expect(screen.getByTestId("asignar-modulos-list")).toBeInTheDocument();
    });
    // 3 modulos
    expect(screen.getByTestId("asignar-modulos-row-m-1")).toBeInTheDocument();
    expect(screen.getByTestId("asignar-modulos-row-m-2")).toBeInTheDocument();
    expect(screen.getByTestId("asignar-modulos-row-m-3")).toBeInTheDocument();
    // m-2 viene como asignado
    const cb2 = screen.getByTestId("asignar-modulos-checkbox-m-2") as HTMLInputElement;
    expect(cb2.checked).toBe(true);
    // m-1 y m-3 NO asignados
    const cb1 = screen.getByTestId("asignar-modulos-checkbox-m-1") as HTMLInputElement;
    expect(cb1.checked).toBe(false);
  });

  it("filtra la lista al escribir en el buscador", async () => {
    renderModal();
    await waitFor(() => {
      expect(screen.getByTestId("asignar-modulos-list")).toBeInTheDocument();
    });
    const search = screen.getByTestId("asignar-modulos-search");
    fireEvent.change(search, { target: { value: "fracciones" } });
    expect(screen.getByTestId("asignar-modulos-row-m-1")).toBeInTheDocument();
    expect(screen.queryByTestId("asignar-modulos-row-m-2")).not.toBeInTheDocument();
    expect(screen.queryByTestId("asignar-modulos-row-m-3")).not.toBeInTheDocument();
  });

  it("al tildar un modulo no asignado llama POST", async () => {
    renderModal();
    await waitFor(() => {
      expect(screen.getByTestId("asignar-modulos-list")).toBeInTheDocument();
    });
    const cb1 = screen.getByTestId("asignar-modulos-checkbox-m-1");
    fireEvent.click(cb1);
    await waitFor(() => {
      expect(mockApiPost).toHaveBeenCalledWith(
        "/api/aulas/aula-1/modulos",
        { moduloId: "m-1", required: false },
      );
    });
    // tras POST, el checkbox queda tildado
    await waitFor(() => {
      const cb = screen.getByTestId("asignar-modulos-checkbox-m-1") as HTMLInputElement;
      expect(cb.checked).toBe(true);
    });
  });

  it("al destildar un modulo asignado llama DELETE", async () => {
    renderModal();
    await waitFor(() => {
      expect(screen.getByTestId("asignar-modulos-list")).toBeInTheDocument();
    });
    const cb2 = screen.getByTestId("asignar-modulos-checkbox-m-2");
    fireEvent.click(cb2);
    await waitFor(() => {
      expect(mockApiDelete).toHaveBeenCalledWith(
        "/api/aulas/aula-1/modulos/m-2",
      );
    });
  });

  it("cierra con la tecla Escape", async () => {
    const onClose = vi.fn();
    renderModal(onClose);
    await waitFor(() => {
      expect(screen.getByTestId("asignar-modulos-list")).toBeInTheDocument();
    });
    // C3 (PLAN-CORRECCIONES): el átomo `Modal` (ui/Modal.tsx) engancha el
    // ESC con `document.addEventListener("keydown", ..., true)`, no en
    // `window` — despachar el evento en `window` nunca llegaba a ese
    // listener (mismo patrón que `NuevaPlantillaWizard.spec.tsx`).
    fireEvent.keyDown(document, { key: "Escape" });
    expect(onClose).toHaveBeenCalled();
  });

  it("cierra con el boton ✕", async () => {
    const onClose = vi.fn();
    renderModal(onClose);
    await waitFor(() => {
      expect(screen.getByTestId("asignar-modulos-list")).toBeInTheDocument();
    });
    fireEvent.click(screen.getByRole("button", { name: /cerrar modal/i }));
    expect(onClose).toHaveBeenCalled();
  });

  it("llama onChange tras una asignacion exitosa", async () => {
    const onChange = vi.fn();
    renderModal(vi.fn(), onChange);
    await waitFor(() => {
      expect(screen.getByTestId("asignar-modulos-list")).toBeInTheDocument();
    });
    fireEvent.click(screen.getByTestId("asignar-modulos-checkbox-m-1"));
    await waitFor(() => {
      expect(onChange).toHaveBeenCalled();
    });
  });
});
