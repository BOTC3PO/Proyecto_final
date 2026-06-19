/**
 * StaffSidebar — verifica el comportamiento del item "Ver como alumno"
 * según la presencia de cuentaVinculada.
 */
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import type { AuthContextValue, User } from "../../auth/AuthContex";
import { AuthContext } from "../../auth/AuthContex";

vi.mock("../../auth/use-roles", () => ({
  usePrimaryRole: () => "TEACHER",
}));

vi.mock("../../theme/ThemeContext", () => ({
  useTheme: () => ({
    theme: "clasico-vb",
    setTheme: vi.fn(),
    availableThemes: [],
  }),
}));

import StaffSidebar from "../StaffSidebar";

function renderWithAuth(user: User) {
  const switchCuenta = vi.fn(async () => ({ landing: "/alumno" }));
  const ctx: AuthContextValue = {
    user,
    login: vi.fn(),
    loginAs: vi.fn(),
    logout: vi.fn(),
    switchCuenta,
  };

  const utils = render(
    <MemoryRouter>
      <AuthContext.Provider value={ctx}>
        <StaffSidebar />
      </AuthContext.Provider>
    </MemoryRouter>,
  );

  return { ...utils, switchCuenta };
}

function openUserMenu() {
  const buttons = screen.getAllByRole("button");
  const userBtn = buttons.find((b) => b.textContent?.includes("Docente"));
  if (!userBtn) throw new Error("User menu button not found");
  fireEvent.click(userBtn);
}

describe("StaffSidebar — item espejo", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("con cuentaVinculada ALUMNO muestra 'Entrar como alumno' y dispara switchCuenta", () => {
    const { switchCuenta } = renderWithAuth({
      id: "prof-1",
      name: "Profe Test",
      role: "TEACHER",
      roles: ["TEACHER"],
      cuentaVinculada: { destinoUsuarioId: "espejo-1", tipoDestino: "ALUMNO" },
    });

    openUserMenu();

    const btn = screen.getByText("Entrar como alumno");
    expect(btn).toBeTruthy();
    fireEvent.click(btn);
    expect(switchCuenta).toHaveBeenCalled();
  });

  it("sin cuentaVinculada NO muestra 'Ver como alumno' ni 'Entrar como alumno'", () => {
    renderWithAuth({
      id: "prof-2",
      name: "Sin Espejo",
      role: "TEACHER",
      roles: ["TEACHER"],
      cuentaVinculada: null,
    });

    openUserMenu();

    expect(screen.queryByText("Ver como alumno")).toBeNull();
    expect(screen.queryByText("Entrar como alumno")).toBeNull();
  });

  it("con cuentaVinculada PRINCIPAL (sesión espejo) NO muestra el item", () => {
    renderWithAuth({
      id: "espejo-1",
      name: "Espejo",
      role: "TEACHER",
      roles: ["TEACHER"],
      cuentaVinculada: { destinoUsuarioId: "prof-1", tipoDestino: "PRINCIPAL" },
    });

    openUserMenu();

    expect(screen.queryByText("Ver como alumno")).toBeNull();
    expect(screen.queryByText("Entrar como alumno")).toBeNull();
  });
});
