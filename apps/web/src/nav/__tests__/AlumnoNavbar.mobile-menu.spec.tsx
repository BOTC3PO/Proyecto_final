/**
 * AlumnoNavbar — menú móvil colapsable (PLAN-I §2).
 *
 * Verifica:
 *  - Los items de nav no están en un panel colapsable abierto por defecto.
 *  - El botón hamburguesa lo abre; un segundo click (o cambiar de ruta) lo cierra.
 *  - El menú de usuario (avatar) no depende del estado del panel móvil.
 */
import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AlumnoNavbar from "../AlumnoNavbar";

vi.mock("../../auth/use-auth", () => ({
  useAuth: vi.fn(),
}));

vi.mock("../navConfig", () => ({
  NAV_BY_ROLE: { USER: [{ to: "/alumno", label: "Inicio", exact: true }] },
  DROPDOWN_BY_ROLE: { USER: [] },
}));

const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<typeof import("react-router-dom")>("react-router-dom");
  return { ...actual, useNavigate: () => mockNavigate };
});

import { useAuth } from "../../auth/use-auth";

const renderNavbar = () =>
  render(
    <MemoryRouter>
      <AlumnoNavbar />
    </MemoryRouter>,
  );

describe("AlumnoNavbar — menú móvil", () => {
  beforeEach(() => {
    (useAuth as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      user: { id: "u1", name: "Ana Alumna", role: "USER", roles: ["USER"], cuentaVinculada: null },
      logout: vi.fn(),
      switchCuenta: vi.fn(),
    });
  });

  it("el panel móvil no existe hasta abrir la hamburguesa", () => {
    renderNavbar();
    expect(screen.queryByRole("list", { name: "" })).toBeTruthy(); // el <ul> desktop siempre existe
    expect(document.getElementById("alumno-mobile-menu")).toBeNull();
  });

  it("abre y cierra el panel móvil con el botón hamburguesa", () => {
    renderNavbar();
    const toggle = screen.getByRole("button", { name: "Abrir menú de navegación" });
    fireEvent.click(toggle);
    expect(document.getElementById("alumno-mobile-menu")).not.toBeNull();
    expect(screen.getByRole("button", { name: "Cerrar menú de navegación" })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Cerrar menú de navegación" }));
    expect(document.getElementById("alumno-mobile-menu")).toBeNull();
  });

  it("el menú de usuario existe independientemente del panel móvil", () => {
    renderNavbar();
    expect(screen.getByRole("button", { name: "Menú de usuario" })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Abrir menú de navegación" }));
    expect(screen.getByRole("button", { name: "Menú de usuario" })).toBeInTheDocument();
  });
});
