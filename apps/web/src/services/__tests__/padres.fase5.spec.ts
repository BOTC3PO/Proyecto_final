/**
 * FASE 5 — servicios del padre: espejo opt-in + aulas del hijo.
 *
 * Cubre que los helpers peguen al endpoint correcto y normalicen la
 * respuesta. La lógica de switch (entrar como alumno) ya está cubierta
 * por `auth/__tests__/switch-cuenta.spec.tsx`.
 */
import { describe, it, expect, vi, beforeEach } from "vitest";

const { mockApiGet, mockApiPost } = vi.hoisted(() => ({
  mockApiGet: vi.fn(),
  mockApiPost: vi.fn(),
}));

vi.mock("../../lib/api", () => ({
  apiGet: mockApiGet,
  apiPost: mockApiPost,
}));

import { crearCuentaAlumnoPadre, fetchAulasHijo } from "../padres";

beforeEach(() => {
  mockApiGet.mockReset();
  mockApiPost.mockReset();
});

describe("crearCuentaAlumnoPadre", () => {
  it("hace POST a /api/padres/crear-cuenta-alumno y devuelve el espejo", async () => {
    const resp = {
      ok: true,
      created: true,
      espejo: { id: "esp-1", username: "espejo-padre-abc123", fullName: "Espejo de Padre" },
      cuentaVinculada: { destinoUsuarioId: "esp-1", tipoDestino: "ALUMNO" },
    };
    mockApiPost.mockResolvedValueOnce(resp);

    const out = await crearCuentaAlumnoPadre();

    expect(mockApiPost).toHaveBeenCalledWith("/api/padres/crear-cuenta-alumno", {});
    expect(out.created).toBe(true);
    expect(out.cuentaVinculada?.tipoDestino).toBe("ALUMNO");
  });
});

describe("fetchAulasHijo", () => {
  it("hace GET a /api/padres/hijos/:id/aulas y devuelve el array", async () => {
    mockApiGet.mockResolvedValueOnce({
      aulas: [{ id: "a1", nombre: "6° B", grado: "6" }],
    });

    const out = await fetchAulasHijo("hijo-1");

    expect(mockApiGet).toHaveBeenCalledWith("/api/padres/hijos/hijo-1/aulas");
    expect(out).toHaveLength(1);
    expect(out[0].nombre).toBe("6° B");
  });

  it("devuelve [] si el back no manda aulas", async () => {
    mockApiGet.mockResolvedValueOnce({});
    const out = await fetchAulasHijo("hijo-1");
    expect(out).toEqual([]);
  });
});
