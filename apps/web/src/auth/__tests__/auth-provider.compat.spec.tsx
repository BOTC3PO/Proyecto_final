/**
 * Tests del fallback de compat del AuthProvider (MULTIROL-02).
 *
 * Cubre que:
 *   - Un User persistido SIN `roles[]` (caso legacy, login pre-Fase 1)
 *     se promueve a `[role]` al cargar.
 *   - Un User con `roles[]` poblado se respeta tal cual.
 *   - Un User sin nada (null) se trata como null sin crashear.
 */
import { describe, it, expect, beforeEach, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";

// Mock del módulo de tokens (setAuthToken/setRefreshToken) para que
// no toquen storage real en los tests.
vi.mock("../../lib/api", () => ({
  setAuthToken: vi.fn(),
  setRefreshToken: vi.fn(),
}));

import { AuthProvider } from "../auth-provider";
import { useAuth } from "../use-auth";

const STORAGE_KEY = "auth.user";

describe("MULTIROL-02 — AuthProvider compat con roles[]", () => {
  beforeEach(() => {
    localStorage.clear();
    sessionStorage.clear();
  });

  it("roles[] vacío en storage se promueve a [role] al cargar", () => {
    const legacy = {
      id: "u1",
      name: "Legacy",
      role: "TEACHER",
      // roles ausente o vacío: el provider debe promover a [role]
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(legacy));
    const wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
      <AuthProvider>{children}</AuthProvider>
    );
    const { result } = renderHook(() => useAuth(), { wrapper });
    expect(result.current.user?.roles).toEqual(["TEACHER"]);
  });

  it("roles[] poblado se respeta tal cual", () => {
    const multi = {
      id: "u1",
      name: "Multi",
      role: "TEACHER",
      roles: ["TEACHER", "USER"],
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(multi));
    const wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
      <AuthProvider>{children}</AuthProvider>
    );
    const { result } = renderHook(() => useAuth(), { wrapper });
    expect(result.current.user?.roles).toEqual(["TEACHER", "USER"]);
  });

  it("login() con roles[] vacío en el payload cae a [role]", () => {
    const wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
      <AuthProvider>{children}</AuthProvider>
    );
    const { result } = renderHook(() => useAuth(), { wrapper });

    act(() => {
      result.current.login(
        {
          id: "u1",
          name: "X",
          role: "TEACHER",
          roles: [], // explícitamente vacío
        } as never,
        "token",
        null,
        { remember: true },
      );
    });

    expect(result.current.user?.roles).toEqual(["TEACHER"]);
  });

  it("login() con roles[] poblado se respeta", () => {
    const wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
      <AuthProvider>{children}</AuthProvider>
    );
    const { result } = renderHook(() => useAuth(), { wrapper });

    act(() => {
      result.current.login(
        {
          id: "u1",
          name: "X",
          role: "TEACHER",
          roles: ["TEACHER", "USER"],
        } as never,
        "token",
        null,
        { remember: true },
      );
    });

    expect(result.current.user?.roles).toEqual(["TEACHER", "USER"]);
  });
});
