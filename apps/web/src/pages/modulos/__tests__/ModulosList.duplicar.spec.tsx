/**
 * Tests de duplicar modulo en ModulosList (Tarea 19).
 *
 * Verifica:
 *  - El boton "Duplicar" aparece para usuarios TEACHER.
 *  - Click en Duplicar dispara apiPost al endpoint correcto.
 *  - Tras exito, navega a /modulos/{newId}/editar y muestra el toast.
 *  - El boton "Duplicar" NO aparece para usuarios que no son TEACHER/ADMIN
 *    (canEdit es false).
 */

import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes, useLocation } from "react-router-dom";

const mockGet = vi.fn();
const mockPost = vi.fn();
vi.mock("../../../lib/api", () => ({
  apiGet: (...args: unknown[]) => mockGet(...args),
  apiPost: (...args: unknown[]) => mockPost(...args),
}));

const mockUseAuth = vi.fn();
vi.mock("../../../auth/use-auth", () => ({
  useAuth: () => mockUseAuth(),
}));

import ModulosList from "../ModulosList";

const TEACHER = {
  id: "docente-1",
  name: "Docente Demo",
  role: "TEACHER" as const,
  schoolId: "escuela-1",
};

const STUDENT = {
  id: "alumno-1",
  name: "Alumno Demo",
  role: "STUDENT" as const,
  schoolId: "escuela-1",
};

const MODS = [
  {
    id: "mod-1",
    title: "Suma de fracciones",
    description: "desc",
    subject: "Matematica",
    category: "general",
    level: "1",
    durationMinutes: 10,
    visibility: "publico",
    dependencies: [],
    createdBy: "docente-1",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
    status: "ACTIVE",
    quizzes: [],
  },
];

function LocationProbe() {
  const loc = useLocation();
  return <div data-testid="location-probe">{loc.pathname}</div>;
}

function renderList(initialPath = "/modulos") {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Routes>
        <Route path="/modulos" element={<><ModulosList /><LocationProbe /></>} />
        <Route path="/modulos/:id/editar" element={<LocationProbe />} />
      </Routes>
    </MemoryRouter>,
  );
}

// El test activa la pestana "mine" tras montar para que el filtro client-side
// incluya el modulo de "docente-1" (la pestana default es "public").
async function clickMineTab() {
  const mine = await screen.findByRole("tab", { name: /mis m.dulos/i });
  fireEvent.click(mine);
}

beforeEach(() => {
  mockGet.mockReset();
  mockPost.mockReset();
  mockGet.mockResolvedValue({ items: MODS });
  mockPost.mockResolvedValue({ id: "mod-1-copy" });
  mockUseAuth.mockReset();
});

afterEach(() => {
  vi.useRealTimers();
});

describe("ModulosList — Tarea 19: Duplicar", () => {
  it("muestra el boton Duplicar para el docente", async () => {
    mockUseAuth.mockReturnValue({ user: TEACHER });
    renderList();
    await clickMineTab();
    await waitFor(() => {
      expect(screen.getByTestId("modulo-duplicar-mod-1")).toBeInTheDocument();
    });
  });

  it("click en Duplicar llama al endpoint y navega al editor del nuevo", async () => {
    mockUseAuth.mockReturnValue({ user: TEACHER });
    renderList();
    await clickMineTab();
    await waitFor(() => {
      expect(screen.getByTestId("modulo-duplicar-mod-1")).toBeInTheDocument();
    });
    fireEvent.click(screen.getByTestId("modulo-duplicar-mod-1"));
    await waitFor(() => {
      expect(mockPost).toHaveBeenCalledWith(
        "/api/modulos/mod-1/duplicar",
        {},
      );
    });
    // Tras 400ms (setTimeout) navega.
    await waitFor(
      () => {
        expect(screen.getByTestId("location-probe").textContent).toBe(
          "/modulos/mod-1-copy/editar",
        );
      },
      { timeout: 2000 },
    );
  });

  it("muestra el toast 'Modulo duplicado' al exito", async () => {
    mockUseAuth.mockReturnValue({ user: TEACHER });
    renderList();
    await clickMineTab();
    await waitFor(() => {
      expect(screen.getByTestId("modulo-duplicar-mod-1")).toBeInTheDocument();
    });
    fireEvent.click(screen.getByTestId("modulo-duplicar-mod-1"));
    await waitFor(() => {
      expect(screen.getByText(/modulo duplicado/i)).toBeInTheDocument();
    });
  });

  it("el boton muestra 'Duplicando...' mientras la peticion esta en vuelo", async () => {
    mockUseAuth.mockReturnValue({ user: TEACHER });
    let resolvePost: (v: unknown) => void = () => {};
    mockPost.mockReturnValue(new Promise((resolve) => { resolvePost = resolve; }));
    renderList();
    await clickMineTab();
    await waitFor(() => {
      expect(screen.getByTestId("modulo-duplicar-mod-1")).toBeInTheDocument();
    });
    const button = screen.getByTestId("modulo-duplicar-mod-1") as HTMLButtonElement;
    fireEvent.click(button);
    await waitFor(() => {
      expect(button.textContent).toMatch(/duplicando/i);
      expect(button.disabled).toBe(true);
    });
    resolvePost({ id: "mod-1-copy" });
  });

  it("el boton Duplicar NO aparece para alumnos (canEdit=false)", async () => {
    mockUseAuth.mockReturnValue({ user: STUDENT });
    renderList();
    await clickMineTab();
    // Tras activar la pestana "mine", el modulo del docente sigue visible
    // (alumno no es dueno, pero la pestana "mine" no es para el alumno;
    // de todos modos el boton Duplicar no debe aparecer porque canEdit=false).
    await waitFor(() => {
      expect(mockGet).toHaveBeenCalled();
    });
    expect(screen.queryByTestId("modulo-duplicar-mod-1")).not.toBeInTheDocument();
  });
});
