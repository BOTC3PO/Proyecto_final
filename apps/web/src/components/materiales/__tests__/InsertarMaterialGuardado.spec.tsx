/**
 * PLAN-G §1 (item 25) — InsertarMaterialGuardado.
 *
 * Verifica:
 *  - Al abrir, lista sólo items con origen "material" (no módulos).
 *  - Seleccionar uno hace GET /guardados/:id y llama onInsert con el
 *    contenido ya resuelto.
 */

import { describe, expect, it, vi, beforeEach } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

const mockGet = vi.fn();
vi.mock("../../../lib/api", () => ({
  apiGet: (...args: unknown[]) => mockGet(...args),
}));

import { InsertarMaterialGuardado } from "../InsertarMaterialGuardado";

beforeEach(() => {
  mockGet.mockReset();
});

describe("InsertarMaterialGuardado", () => {
  it("lista sólo materiales guardados (origen 'material'), no módulos", async () => {
    mockGet.mockResolvedValueOnce({
      items: [
        { id: "mat-1", titulo: "Mapa X", tipo: "mapa", origen: "material" },
        { id: "mod-1", titulo: "Cuestionario Y", tipo: "cuestionario", origen: "modulo" },
      ],
    });
    render(<InsertarMaterialGuardado onInsert={vi.fn()} />);

    fireEvent.click(screen.getByRole("button", { name: /insertar material guardado/i }));

    expect(await screen.findByText(/mapa x/i)).toBeTruthy();
    expect(screen.queryByText(/cuestionario y/i)).toBeNull();
  });

  it("seleccionar un material llama onInsert con el contenido resuelto", async () => {
    mockGet.mockResolvedValueOnce({
      items: [{ id: "mat-1", titulo: "Mapa X", tipo: "mapa", origen: "material" }],
    });
    mockGet.mockResolvedValueOnce({
      id: "mat-1",
      tipo: "mapa",
      titulo: "Mapa X",
      version: { contenido: { tool: "mapa", capas: [] } },
    });
    const onInsert = vi.fn();
    render(<InsertarMaterialGuardado onInsert={onInsert} />);

    fireEvent.click(screen.getByRole("button", { name: /insertar material guardado/i }));
    fireEvent.click(await screen.findByText(/mapa x/i));

    await waitFor(() => expect(onInsert).toHaveBeenCalledWith({
      id: "mat-1", tipo: "mapa", titulo: "Mapa X", contenido: { tool: "mapa", capas: [] },
    }));
    expect(mockGet).toHaveBeenCalledWith("/api/materiales/guardados/mat-1");
  });
});
