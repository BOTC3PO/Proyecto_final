/**
 * StaffSidebar — drawer off-canvas < md (PLAN-I §1).
 *
 * Verifica:
 *  - No controlado (sin open/onClose): el botón hamburguesa abre el
 *    drawer (Modal con role="dialog"); Escape lo cierra.
 *  - Controlado (StaffLayout pasa open/onClose): no renderiza su propio
 *    botón; el drawer sigue el prop `open`.
 *  - La instancia desktop (siempre en el DOM) no muestra el diálogo.
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

const USER: User = {
  id: "prof-1",
  name: "Profe Test",
  role: "TEACHER",
  roles: ["TEACHER"],
  cuentaVinculada: null,
};

function renderSidebar(props?: React.ComponentProps<typeof StaffSidebar>) {
  const ctx: AuthContextValue = {
    user: USER,
    login: vi.fn(),
    loginAs: vi.fn(),
    logout: vi.fn(),
    switchCuenta: vi.fn(async () => ({ landing: "/alumno" })),
  };
  return render(
    <MemoryRouter>
      <AuthContext.Provider value={ctx}>
        <StaffSidebar {...props} />
      </AuthContext.Provider>
    </MemoryRouter>,
  );
}

describe("StaffSidebar — drawer", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("no controlado: sin abrir, no hay dialog; el botón hamburguesa lo abre", () => {
    renderSidebar();
    expect(screen.queryByRole("dialog")).toBeNull();

    fireEvent.click(screen.getByRole("button", { name: "Abrir navegación" }));
    expect(screen.getByRole("dialog", { name: "Navegación" })).toBeInTheDocument();
  });

  it("no controlado: Escape cierra el drawer", () => {
    renderSidebar();
    fireEvent.click(screen.getByRole("button", { name: "Abrir navegación" }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    fireEvent.keyDown(document, { key: "Escape" });
    expect(screen.queryByRole("dialog")).toBeNull();
  });

  it("controlado: no renderiza su propio botón hamburguesa", () => {
    renderSidebar({ open: false, onClose: vi.fn() });
    expect(screen.queryByRole("button", { name: "Abrir navegación" })).toBeNull();
  });

  it("controlado: open=true muestra el dialog sin interacción", () => {
    renderSidebar({ open: true, onClose: vi.fn() });
    expect(screen.getByRole("dialog", { name: "Navegación" })).toBeInTheDocument();
  });

  it("controlado: cerrar el dialog invoca onClose (no un estado propio)", () => {
    const onClose = vi.fn();
    renderSidebar({ open: true, onClose });
    fireEvent.keyDown(document, { key: "Escape" });
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
