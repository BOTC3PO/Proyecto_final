/**
 * Login.tsx — verifica que `cuentaVinculada` del payload de login
 * se propaga al contexto de autenticación.
 */
import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";

const { mockSetAuthToken, mockSetRefreshToken } = vi.hoisted(() => ({
  mockSetAuthToken: vi.fn(),
  mockSetRefreshToken: vi.fn(),
}));

vi.mock("../../lib/api", () => ({
  setAuthToken: mockSetAuthToken,
  setRefreshToken: mockSetRefreshToken,
  getAuthToken: vi.fn(() => "tok"),
}));

import { AuthProvider } from "../../auth/auth-provider";
import { useAuth } from "../../auth/use-auth";

const STORAGE_KEY = "auth.user";

const wrap: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);

describe("Login → cuentaVinculada en AuthContext", () => {
  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
    mockSetAuthToken.mockReset();
    mockSetRefreshToken.mockReset();
  });

  it("login() con cuentaVinculada poblada queda en el contexto", () => {
    const { result } = renderHook(() => useAuth(), { wrapper: wrap });

    act(() => {
      result.current.login(
        {
          id: "prof-1",
          name: "Profe Test",
          role: "TEACHER",
          roles: ["TEACHER"],
          cuentaVinculada: { destinoUsuarioId: "espejo-1", tipoDestino: "ALUMNO" },
        },
        "access-tok",
        "refresh-tok",
        { remember: true },
      );
    });

    expect(result.current.user?.cuentaVinculada).toEqual({
      destinoUsuarioId: "espejo-1",
      tipoDestino: "ALUMNO",
    });
  });

  it("login() sin cuentaVinculada deja el campo como null/undefined", () => {
    const { result } = renderHook(() => useAuth(), { wrapper: wrap });

    act(() => {
      result.current.login(
        {
          id: "prof-2",
          name: "Sin espejo",
          role: "TEACHER",
          roles: ["TEACHER"],
          cuentaVinculada: null,
        },
        "access-tok",
        null,
        { remember: false },
      );
    });

    expect(result.current.user?.cuentaVinculada).toBeNull();
  });

  it("cuentaVinculada se persiste en storage y se rehidrata al recargar", () => {
    const { result, unmount } = renderHook(() => useAuth(), { wrapper: wrap });

    act(() => {
      result.current.login(
        {
          id: "prof-1",
          name: "Profe Test",
          role: "TEACHER",
          roles: ["TEACHER"],
          cuentaVinculada: { destinoUsuarioId: "espejo-1", tipoDestino: "ALUMNO" },
        },
        "access-tok",
        null,
        { remember: true },
      );
    });

    unmount();

    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY)!);
    expect(stored.cuentaVinculada).toEqual({
      destinoUsuarioId: "espejo-1",
      tipoDestino: "ALUMNO",
    });

    const { result: result2 } = renderHook(() => useAuth(), { wrapper: wrap });
    expect(result2.current.user?.cuentaVinculada).toEqual({
      destinoUsuarioId: "espejo-1",
      tipoDestino: "ALUMNO",
    });
  });
});
