/**
 * PLAN-G §1 (item 25) — GuardarComoMaterial.
 *
 * Verifica:
 *  - Primera vez (sin materialId): pide título, llama POST /api/materiales/guardados.
 *  - Segunda vez (con materialId): NO pide título, llama directo
 *    POST /api/materiales/guardados/:id/versiones.
 *  - Error de red muestra mensaje de error, no rompe el editor.
 */

import { describe, expect, it, vi, beforeEach } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

const mockPost = vi.fn();
vi.mock("../../../lib/api", () => ({
  apiPost: (...args: unknown[]) => mockPost(...args),
}));

import { GuardarComoMaterial } from "../GuardarComoMaterial";

beforeEach(() => {
  mockPost.mockReset();
});

describe("GuardarComoMaterial", () => {
  it("sin materialId: pide título y crea un material nuevo", async () => {
    mockPost.mockResolvedValue({ materialId: "mat-1", versionId: "v-1", versionNumber: 1 });
    const onSaved = vi.fn();
    render(
      <GuardarComoMaterial tipo="mapa" getContenido={() => ({ capas: [] })} onSaved={onSaved} />,
    );

    fireEvent.click(screen.getByRole("button", { name: /guardar como material/i }));
    expect(screen.getByRole("dialog")).toBeTruthy();

    fireEvent.change(screen.getByLabelText(/título/i), { target: { value: "Mi mapa" } });
    fireEvent.click(screen.getByRole("button", { name: /^guardar$/i }));

    await waitFor(() => expect(onSaved).toHaveBeenCalledWith({
      materialId: "mat-1", versionId: "v-1", versionNumber: 1,
    }));
    expect(mockPost).toHaveBeenCalledWith("/api/materiales/guardados", {
      tipo: "mapa",
      titulo: "Mi mapa",
      contenido: { capas: [] },
    });
    expect(await screen.findByText(/guardado/i)).toBeTruthy();
  });

  it("con materialId: no pide título, versiona directo", async () => {
    mockPost.mockResolvedValue({ materialId: "mat-1", versionId: "v-2", versionNumber: 2 });
    const onSaved = vi.fn();
    render(
      <GuardarComoMaterial
        tipo="mapa"
        materialId="mat-1"
        getContenido={() => ({ capas: ["a"] })}
        onSaved={onSaved}
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: /guardar como material/i }));
    expect(screen.queryByRole("dialog")).toBeNull();

    await waitFor(() => expect(onSaved).toHaveBeenCalledWith({
      materialId: "mat-1", versionId: "v-2", versionNumber: 2,
    }));
    expect(mockPost).toHaveBeenCalledWith("/api/materiales/guardados/mat-1/versiones", {
      contenido: { capas: ["a"] },
    });
  });

  it("muestra error si el guardado falla", async () => {
    mockPost.mockRejectedValue(new Error("network error"));
    render(
      <GuardarComoMaterial tipo="mapa" materialId="mat-1" getContenido={() => ({})} />,
    );

    fireEvent.click(screen.getByRole("button", { name: /guardar como material/i }));

    expect(await screen.findByText(/no se pudo guardar/i)).toBeTruthy();
  });

  it("PLAN-M: autoOpen abre el diálogo ya al montar, sin click previo", () => {
    render(
      <GuardarComoMaterial
        tipo="mapa"
        defaultTitulo="Recuperado"
        getContenido={() => ({})}
        autoOpen
      />,
    );

    expect(screen.getByRole("dialog")).toBeTruthy();
    expect(screen.getByLabelText(/título/i)).toHaveValue("Recuperado");
  });
});
