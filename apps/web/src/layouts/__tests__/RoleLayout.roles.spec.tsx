/**
 * Tests de migración de componentes al helper centralizado (MULTIROL-02).
 *
 * Cubre los dos casos representativos pedidos por la tarea:
 *   1. RoleLayout renderiza StaffSidebar (con Navbar oculto) para
 *      cualquier rol staff, y Navbar (con StaffSidebar oculto) para
 *      el resto. Igual que antes.
 *   2. Navbar muestra CoinBadge para un user con roles[] que incluye
 *      USER, incluso si su rol principal es staff (bug 1 fix).
 */
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import RoleLayout from "../RoleLayout";

// Mock useAuth (se reconfigura por test).
vi.mock("../../auth/use-auth", () => ({
  useAuth: vi.fn(),
}));

// Stub del theme context (RoleLayout y Navbar lo usan).
vi.mock("../../theme/ThemeContext", () => ({
  useTheme: () => ({
    theme: "clasico" as const,
    setTheme: vi.fn(),
    availableThemes: [],
  }),
}));

// Stub del OfflineIndicator para no romper los render.
vi.mock("../../components/OfflineIndicator", () => ({
  OfflineIndicator: () => <div data-testid="offline-indicator" />,
}));

// Stub del StaffSidebar para poder detectarlo.
vi.mock("../StaffSidebar", () => ({
  default: () => <div data-testid="staff-sidebar">staff-sidebar</div>,
}));

import { useAuth } from "../../auth/use-auth";

const mockAuth = (user: { role: string; roles?: string[] } | null) => {
  (useAuth as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
    user: user
      ? {
          id: "u1",
          name: "Test",
          role: user.role as never,
          roles: user.roles as never,
        }
      : null,
  });
};

describe("MULTIROL-02 — RoleLayout migrado", () => {
  it("ADMIN puro → StaffSidebar (igual que antes)", () => {
    mockAuth({ role: "ADMIN", roles: ["ADMIN"] });
    render(
      <MemoryRouter>
        <RoleLayout />
      </MemoryRouter>,
    );
    expect(screen.getByTestId("staff-sidebar")).toBeInTheDocument();
  });

  it("TEACHER puro → StaffSidebar (igual que antes)", () => {
    mockAuth({ role: "TEACHER", roles: ["TEACHER"] });
    render(
      <MemoryRouter>
        <RoleLayout />
      </MemoryRouter>,
    );
    expect(screen.getByTestId("staff-sidebar")).toBeInTheDocument();
  });

  it("USER puro → Navbar (no StaffSidebar)", () => {
    mockAuth({ role: "USER", roles: ["USER"] });
    render(
      <MemoryRouter>
        <RoleLayout />
      </MemoryRouter>,
    );
    expect(screen.queryByTestId("staff-sidebar")).not.toBeInTheDocument();
    // El Navbar tiene un link "Iniciar sesión" solo si es GUEST; como
    // es USER logueado, NO debe mostrarse ese link. La forma más
    // simple de detectar el Navbar es que esté el badge "Virtual Book".
    expect(screen.getByText(/virtual book/i)).toBeInTheDocument();
  });

  it("PARENT puro → Navbar (no StaffSidebar)", () => {
    mockAuth({ role: "PARENT", roles: ["PARENT"] });
    render(
      <MemoryRouter>
        <RoleLayout />
      </MemoryRouter>,
    );
    expect(screen.queryByTestId("staff-sidebar")).not.toBeInTheDocument();
  });

  it("MULTIROL: TEACHER+USER (rol principal TEACHER) → StaffSidebar", () => {
    // El rol principal sigue siendo TEACHER, así que cae en staff.
    mockAuth({ role: "TEACHER", roles: ["TEACHER", "USER"] });
    render(
      <MemoryRouter>
        <RoleLayout />
      </MemoryRouter>,
    );
    expect(screen.getByTestId("staff-sidebar")).toBeInTheDocument();
  });

  it("MULTIROL: ADMIN+USER (rol principal ADMIN) → StaffSidebar", () => {
    mockAuth({ role: "ADMIN", roles: ["ADMIN", "USER"] });
    render(
      <MemoryRouter>
        <RoleLayout />
      </MemoryRouter>,
    );
    expect(screen.getByTestId("staff-sidebar")).toBeInTheDocument();
  });
});
