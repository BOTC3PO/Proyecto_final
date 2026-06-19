/**
 * FASE 3 — Tests de switchCuenta() en AuthProvider.
 *
 * Cubre:
 *   - El token del destino va a sessionStorage, NO localStorage.
 *   - El contexto de usuario se actualiza con los datos del destino.
 *   - Se lanza Error si el back responde con error.
 */
import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";

// vi.hoisted: las variables se crean ANTES del hoist de vi.mock.
const { mockSetAuthToken, mockSetRefreshToken, mockGetAuthToken } = vi.hoisted(() => ({
  mockSetAuthToken: vi.fn(),
  mockSetRefreshToken: vi.fn(),
  mockGetAuthToken: vi.fn(() => "token-actual"),
}));

vi.mock("../../lib/api", () => ({
  setAuthToken: mockSetAuthToken,
  setRefreshToken: mockSetRefreshToken,
  getAuthToken: mockGetAuthToken,
}));

import { AuthProvider } from "../auth-provider";
import { useAuth } from "../use-auth";

const STORAGE_KEY = "auth.user";

const wrapProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);

const espejoResponse = {
  accessToken: "espejo-token",
  refreshToken: "espejo-refresh",
  id: "espejo-1",
  name: "Espejo Test",
  role: "USER",
  roles: ["USER"],
  landing: "/alumno",
  cuentaVinculada: { destinoUsuarioId: "prof-1", tipoDestino: "PRINCIPAL" },
};

describe("FASE 3 — AuthProvider: switchCuenta()", () => {
  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
    mockSetAuthToken.mockReset();
    mockSetRefreshToken.mockReset();
    mockGetAuthToken.mockReturnValue("token-actual");
    globalThis.fetch = vi.fn();
  });

  it("switchCuenta() llama al endpoint y actualiza el user en el contexto", async () => {
    (globalThis.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: true,
      json: async () => espejoResponse,
    });

    const { result } = renderHook(() => useAuth(), { wrapper: wrapProvider });

    let landing = "";
    await act(async () => {
      const res = await result.current.switchCuenta();
      landing = res.landing;
    });

    expect(landing).toBe("/alumno");
    expect(result.current.user?.id).toBe("espejo-1");
    expect(result.current.user?.role).toBe("USER");
    expect(result.current.user?.cuentaVinculada?.tipoDestino).toBe("PRINCIPAL");
  });

  it("el token del destino va a sessionStorage (remember=false), NO localStorage", async () => {
    (globalThis.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: true,
      json: async () => espejoResponse,
    });

    const { result } = renderHook(() => useAuth(), { wrapper: wrapProvider });

    await act(async () => {
      await result.current.switchCuenta();
    });

    // setAuthToken y setRefreshToken deben haberse llamado con remember=false.
    expect(mockSetAuthToken).toHaveBeenCalledWith("espejo-token", { remember: false });
    expect(mockSetRefreshToken).toHaveBeenCalledWith("espejo-refresh", { remember: false });

    // El user del espejo va a sessionStorage, no localStorage.
    const inLocal = localStorage.getItem(STORAGE_KEY);
    expect(inLocal).toBeNull();
    const inSession = sessionStorage.getItem(STORAGE_KEY);
    expect(inSession).not.toBeNull();
    const parsed = JSON.parse(inSession!);
    expect(parsed.id).toBe("espejo-1");
  });

  it("switchCuenta() lanza Error si el back responde con error", async () => {
    (globalThis.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: "sin vinculo" }),
    });

    const { result } = renderHook(() => useAuth(), { wrapper: wrapProvider });

    await expect(
      act(async () => { await result.current.switchCuenta(); })
    ).rejects.toThrow("sin vinculo");
  });

  it("switchCuenta() lanza Error si no hay token activo", async () => {
    mockGetAuthToken.mockReturnValue(null);
    const { result } = renderHook(() => useAuth(), { wrapper: wrapProvider });

    await expect(
      act(async () => { await result.current.switchCuenta(); })
    ).rejects.toThrow("No hay sesión activa");
  });
});
