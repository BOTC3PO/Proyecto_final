/**
 * FASE 6 — componente Perfil: card de autoservicio alumno → padre.
 *
 * Cubre:
 *   - Para role=USER, el botón "Crear mi cuenta de padre" se muestra.
 *   - Click en el botón llama al servicio `crearCuentaPadreAlumno`.
 *   - Si el alumno ya tiene padre, se muestra "Entrar como padre"
 *     en lugar de "Crear mi cuenta de padre".
 *   - Para role=PARENT no se muestra (ese flujo vive en
 *     `MiCuentaAlumnoCard`, no acá).
 *   - Para role=TEACHER no se muestra.
 */
import { describe, it, expect, vi, beforeEach } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

// Mocks de los servicios. vi.hoisted garantiza que las variables
// existan antes del hoist de vi.mock.
const { mockApiGet, mockCrearCuentaPadreAlumno, mockSwitchCuenta } = vi.hoisted(() => ({
  mockApiGet: vi.fn(),
  mockCrearCuentaPadreAlumno: vi.fn(),
  mockSwitchCuenta: vi.fn(),
}));

vi.mock("../../lib/api", () => ({
  apiGet: mockApiGet,
}));

vi.mock("../../services/padres", () => ({
  crearCuentaPadreAlumno: mockCrearCuentaPadreAlumno,
  crearCuentaAlumnoPadre: vi.fn(),
}));

vi.mock("../../services/roles", () => ({
  solicitarCambioRol: vi.fn(),
}));

vi.mock("../../services/suscripciones", () => ({
  fetchEstadoSuscripcion: vi.fn().mockResolvedValue({ personal: null, escuela: null, paymentsEnabled: false }),
  fetchHistorialPagos: vi.fn().mockResolvedValue([]),
  fetchLimites: vi.fn().mockResolvedValue({ limites: { max_profesores: 0, max_directivos: 0, max_aulas: 0, max_alumnos_por_aula: 0 } }),
  iniciarSuscripcion: vi.fn(),
  cancelarSuscripcion: vi.fn(),
  solicitarReembolso: vi.fn(),
}));

vi.mock("../../auth/use-auth", () => ({
  useAuth: () => ({
    user: { id: "u1", name: "Test", role: "USER", roles: ["USER"] },
    login: vi.fn(),
    loginAs: vi.fn(),
    logout: vi.fn(),
    switchCuenta: mockSwitchCuenta,
  }),
}));

vi.mock("../../theme/ThemeContext", () => ({
  useTheme: () => ({
    theme: "clasico",
    setTheme: vi.fn(),
    availableThemes: ["clasico"],
  }),
  THEME_OPTIONS: [{ id: "clasico", name: "Clásico" }],
}));

import Perfil from "../Perfil";

const basePerfil = {
  id: "u1",
  username: "alumno1",
  email: "u1@test.local",
  fullName: "Alumno Uno",
  role: "USER",
  escuelaId: null,
  createdAt: "2024-01-01T00:00:00Z",
  isBanned: false,
  warningCount: 0,
  modulosCompletados: { publicos: 0, privados: 0, total: 0 },
  hijos: [],
  cuentaVinculada: null,
};

const renderPerfil = (perfilOverride: Record<string, unknown> = {}) => {
  mockApiGet.mockResolvedValue({ ...basePerfil, ...perfilOverride });
  return render(
    <MemoryRouter>
      <Perfil />
    </MemoryRouter>
  );
};

describe("FASE 6 — Perfil: Mi cuenta de padre (autoservicio)", () => {
  beforeEach(() => {
    mockApiGet.mockReset();
    mockCrearCuentaPadreAlumno.mockReset();
    mockSwitchCuenta.mockReset();
  });

  it("muestra el botón 'Crear mi cuenta de padre' para role=USER sin cuenta de padre", async () => {
    renderPerfil({ role: "USER", cuentaVinculada: null });

    const btn = await screen.findByTestId("alumno-crear-cuenta-padre");
    expect(btn).toBeTruthy();
    expect(btn.textContent).toMatch(/Crear mi cuenta de padre/);
  });

  it("click en 'Crear mi cuenta de padre' llama al servicio", async () => {
    mockCrearCuentaPadreAlumno.mockResolvedValueOnce({
      ok: true,
      created: true,
      padre: { id: "padre-1", username: "padre-alumno-abc", fullName: "Padre Alumno Uno" },
      cuentaVinculada: { destinoUsuarioId: "padre-1", tipoDestino: "PADRE" },
    });
    renderPerfil({ role: "USER" });

    const btn = await screen.findByTestId("alumno-crear-cuenta-padre");
    fireEvent.click(btn);

    await waitFor(() => {
      expect(mockCrearCuentaPadreAlumno).toHaveBeenCalledTimes(1);
    });
  });

  it("después de crear, muestra el botón 'Entrar como padre'", async () => {
    mockCrearCuentaPadreAlumno.mockResolvedValueOnce({
      ok: true,
      created: true,
      padre: { id: "padre-1", username: "padre-alumno-abc", fullName: "Padre Alumno Uno" },
      cuentaVinculada: { destinoUsuarioId: "padre-1", tipoDestino: "PADRE" },
    });
    renderPerfil({ role: "USER" });

    const crearBtn = await screen.findByTestId("alumno-crear-cuenta-padre");
    fireEvent.click(crearBtn);

    const entrarBtn = await screen.findByTestId("alumno-entrar-como-padre");
    expect(entrarBtn).toBeTruthy();
    expect(entrarBtn.textContent).toMatch(/Entrar como padre/);
  });

  it("si el alumno ya tiene padre, muestra 'Entrar como padre' sin pasar por crear", async () => {
    renderPerfil({
      role: "USER",
      cuentaVinculada: { destinoUsuarioId: "padre-1", tipoDestino: "PADRE" },
    });

    const entrarBtn = await screen.findByTestId("alumno-entrar-como-padre");
    expect(entrarBtn).toBeTruthy();
    expect(screen.queryByTestId("alumno-crear-cuenta-padre")).toBeNull();
  });

  it("click en 'Entrar como padre' llama a switchCuenta y navega al landing", async () => {
    mockSwitchCuenta.mockResolvedValueOnce({ landing: "/padre" });
    renderPerfil({
      role: "USER",
      cuentaVinculada: { destinoUsuarioId: "padre-1", tipoDestino: "PADRE" },
    });

    const entrarBtn = await screen.findByTestId("alumno-entrar-como-padre");
    fireEvent.click(entrarBtn);

    await waitFor(() => {
      expect(mockSwitchCuenta).toHaveBeenCalledTimes(1);
    });
  });

  it("NO muestra el card para role=PARENT", async () => {
    renderPerfil({ role: "PARENT" });

    // Esperamos a que cargue (hay un card específico de "Mi cuenta
    // de alumno" para padres) y luego verificamos que el card de
    // FASE 6 NO se muestra.
    await screen.findByTestId("padre-crear-cuenta-alumno");
    expect(screen.queryByTestId("alumno-crear-cuenta-padre")).toBeNull();
    expect(screen.queryByTestId("alumno-entrar-como-padre")).toBeNull();
  });

  it("NO muestra el card para role=TEACHER", async () => {
    renderPerfil({ role: "TEACHER" });

    // Esperamos a que cargue.
    await new Promise((r) => setTimeout(r, 50));
    expect(screen.queryByTestId("alumno-crear-cuenta-padre")).toBeNull();
    expect(screen.queryByTestId("alumno-entrar-como-padre")).toBeNull();
  });

  it("muestra mensaje de error si el back rechaza (ej. menor de 18)", async () => {
    mockCrearCuentaPadreAlumno.mockRejectedValueOnce(new Error("Necesitás ser mayor de 18 años"));
    renderPerfil({ role: "USER" });

    const btn = await screen.findByTestId("alumno-crear-cuenta-padre");
    fireEvent.click(btn);

    await waitFor(() => {
      expect(screen.getByText(/mayor de 18/)).toBeTruthy();
    });
  });
});
