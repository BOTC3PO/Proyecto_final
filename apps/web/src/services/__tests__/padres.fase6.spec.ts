/**
 * FASE 6 — servicio front del autoservicio alumno → padre.
 *
 * Cubre que el helper pega al endpoint correcto y normaliza la
 * respuesta (con `tipoDestino: "PADRE"`). La lógica de switch
 * ya está cubierta por `auth/__tests__/switch-cuenta.spec.tsx`.
 */
import { describe, it, expect, vi, beforeEach } from "vitest";

const { mockApiPost } = vi.hoisted(() => ({
  mockApiPost: vi.fn(),
}));

vi.mock("../../lib/api", () => ({
  apiPost: mockApiPost,
}));

import { crearCuentaPadreAlumno } from "../padres";

beforeEach(() => {
  mockApiPost.mockReset();
});

describe("crearCuentaPadreAlumno", () => {
  it("hace POST a /api/alumnos/crear-cuenta-padre y devuelve el padre", async () => {
    const resp = {
      ok: true,
      created: true,
      padre: { id: "padre-1", username: "padre-alumno-abc123", fullName: "Padre Alumno" },
      cuentaVinculada: { destinoUsuarioId: "padre-1", tipoDestino: "PADRE" },
    };
    mockApiPost.mockResolvedValueOnce(resp);

    const out = await crearCuentaPadreAlumno();

    expect(mockApiPost).toHaveBeenCalledWith("/api/alumnos/crear-cuenta-padre", {});
    expect(out.created).toBe(true);
    expect(out.padre.username.startsWith("padre-")).toBe(true);
    expect(out.cuentaVinculada?.tipoDestino).toBe("PADRE");
  });

  it("es idempotente: la segunda llamada devuelve created=false y mismo padre", async () => {
    const resp = {
      ok: true,
      created: false,
      padre: { id: "padre-1", username: "padre-alumno-abc123", fullName: "Padre Alumno" },
      cuentaVinculada: { destinoUsuarioId: "padre-1", tipoDestino: "PADRE" },
    };
    mockApiPost.mockResolvedValueOnce(resp);

    const out = await crearCuentaPadreAlumno();

    expect(out.created).toBe(false);
    expect(out.padre.id).toBe("padre-1");
  });

  it("propaga el error 403 (menor de 18) hacia el caller", async () => {
    mockApiPost.mockRejectedValueOnce(new Error("alumno debe ser mayor de 18 años para crear su cuenta de padre"));

    await expect(crearCuentaPadreAlumno()).rejects.toThrow(/mayor de 18/);
  });
});
