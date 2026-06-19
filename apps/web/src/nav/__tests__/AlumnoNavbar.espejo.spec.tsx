/**
 * FASE 3 — Switch de cuenta (frontend).
 *
 * Tests del comportamiento de AlumnoNavbar cuando la sesión activa es una
 * cuenta espejo (USER puro con cuentaVinculada.tipoDestino === 'PRINCIPAL').
 *
 * Criterios de aceptación cubiertos:
 *   1. El botón "Volver" aparece por vínculo aunque el user no tenga rol staff.
 *   2. Con user espejo se renderiza el indicador de cuenta espejo.
 *   3. Sin cuentaVinculada (USER puro normal) no hay botón ni indicador.
 *   4. Click en "Volver" llama switchCuenta() y navega a la ruta devuelta.
 */
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AlumnoNavbar from "../AlumnoNavbar";

// Controlado por cada test vía mockAuth().
vi.mock("../../auth/use-auth", () => ({
  useAuth: vi.fn(),
}));

// Mock mínimo de navConfig para que el render no falle.
vi.mock("../navConfig", () => ({
  NAV_BY_ROLE: { USER: [] },
  DROPDOWN_BY_ROLE: { USER: [] },
}));

// useNavigate lo proveemos a través de MemoryRouter; el hook real funciona
// en tests siempre que el componente esté envuelto en un Router.
// Pero para verificar que navigate() fue llamado con el landing correcto,
// mockeamos react-router-dom conservando MemoryRouter y NavLink.
const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<typeof import("react-router-dom")>("react-router-dom");
  return { ...actual, useNavigate: () => mockNavigate };
});

import { useAuth } from "../../auth/use-auth";

type PartialUser = {
  role?: string;
  roles?: string[];
  cuentaVinculada?: { destinoUsuarioId: string; tipoDestino: "ALUMNO" | "PRINCIPAL" } | null;
};

const mockSwitchCuenta = vi.fn();

const mockAuth = (user: PartialUser | null) => {
  (useAuth as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
    user: user
      ? {
          id: "u1",
          name: "Test User",
          role: user.role ?? "USER",
          roles: user.roles ?? ["USER"],
          cuentaVinculada: user.cuentaVinculada ?? null,
        }
      : null,
    logout: vi.fn(),
    switchCuenta: mockSwitchCuenta,
  });
};

const renderNavbar = () =>
  render(
    <MemoryRouter>
      <AlumnoNavbar />
    </MemoryRouter>,
  );

describe("FASE 3 — AlumnoNavbar: cuenta espejo", () => {
  beforeEach(() => {
    mockSwitchCuenta.mockReset();
    mockNavigate.mockReset();
    mockSwitchCuenta.mockResolvedValue({ landing: "/profesor" });
  });

  it("user espejo muestra el indicador de cuenta espejo", () => {
    mockAuth({
      role: "USER",
      roles: ["USER"],
      cuentaVinculada: { destinoUsuarioId: "prof-1", tipoDestino: "PRINCIPAL" },
    });
    renderNavbar();
    expect(screen.getByTestId("espejo-indicator")).toBeInTheDocument();
    expect(screen.getByText(/Cuenta de alumno/)).toBeInTheDocument();
  });

  it("user espejo muestra botón '← Volver a mi panel' aunque no tenga rol staff", () => {
    mockAuth({
      role: "USER",
      roles: ["USER"], // sin ningún rol staff
      cuentaVinculada: { destinoUsuarioId: "prof-1", tipoDestino: "PRINCIPAL" },
    });
    renderNavbar();
    const btns = screen.getAllByText(/Volver/i);
    expect(btns.length).toBeGreaterThan(0);
  });

  it("click en 'Volver' llama switchCuenta() y navega al landing devuelto", async () => {
    mockSwitchCuenta.mockResolvedValue({ landing: "/profesor" });
    mockAuth({
      role: "USER",
      roles: ["USER"],
      cuentaVinculada: { destinoUsuarioId: "prof-1", tipoDestino: "PRINCIPAL" },
    });
    renderNavbar();

    const btn = screen.getAllByText(/Volver a mi panel/i)[0];
    fireEvent.click(btn);

    await waitFor(() => {
      expect(mockSwitchCuenta).toHaveBeenCalledTimes(1);
    });
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith("/profesor");
    });
  });

  it("USER puro sin cuentaVinculada NO muestra el indicador ni el botón de volver", () => {
    mockAuth({
      role: "USER",
      roles: ["USER"],
      cuentaVinculada: null,
    });
    renderNavbar();
    expect(screen.queryByTestId("espejo-indicator")).toBeNull();
    expect(screen.queryByText(/← Volver a mi panel/)).toBeNull();
  });

  it("el indicador NO aparece para el user principal (tipoDestino=ALUMNO)", () => {
    mockAuth({
      role: "TEACHER",
      roles: ["TEACHER"],
      // El user principal ve cuentaVinculada.tipoDestino === 'ALUMNO'
      cuentaVinculada: { destinoUsuarioId: "espejo-1", tipoDestino: "ALUMNO" },
    });
    renderNavbar();
    // TEACHER ve StaffSidebar, no AlumnoNavbar; pero incluso si llega acá,
    // tipoDestino=ALUMNO no debe disparar el indicador ni el botón de switch.
    expect(screen.queryByTestId("espejo-indicator")).toBeNull();
  });
});
