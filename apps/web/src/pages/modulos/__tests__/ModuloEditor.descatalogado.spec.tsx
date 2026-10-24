/**
 * PLAN-X §7 — checkbox "Descatalogado" + panel de invitados en
 * ModuloEditor. Spec de Javier (2026-07-12): el profesor dueño lo
 * marca para que el módulo no aparezca en los listados generales;
 * los alumnos invitados (o el aula donde se lo asigne) lo siguen
 * viendo.
 *
 * Cubre:
 *  - Modo edición con módulo YA descatalogado: el checkbox aparece
 *    tildado y el panel de invitados se muestra con la lista real.
 *  - Quitar un invitado llama al DELETE correcto.
 */
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { render, screen, cleanup, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Routes, Route } from "react-router-dom";

const { moduleFixture, mockApiGet, mockApiDelete } = vi.hoisted(() => {
  const moduleFixture = {
    id: "mod-desc-1",
    title: "Módulo descatalogado",
    description: "desc",
    subject: "matematicas",
    category: "sin-categoria",
    level: "1",
    durationMinutes: 30,
    visibility: "publico" as const,
    descatalogado: true,
    dependencies: [],
    theoryItems: [],
    quizzes: [],
    createdBy: "docente-1",
    updatedAt: "2026-01-01T00:00:00.000Z",
  };
  return {
    moduleFixture,
    mockApiGet: vi.fn(),
    mockApiDelete: vi.fn().mockResolvedValue(undefined),
  };
});

vi.mock("../../../lib/api", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../../lib/api")>();
  return {
    ...actual,
    apiGet: mockApiGet,
    apiPost: vi.fn(),
    apiPatch: vi.fn(),
    apiDelete: mockApiDelete,
  };
});

vi.mock("../../../auth/use-auth", () => ({
  useAuth: () => ({
    user: { id: "docente-1", name: "Docente Demo", role: "TEACHER", schoolId: "escuela-1" },
  }),
}));

vi.mock("../../../bookEditor/services/booksApi", () => ({
  fetchBooks: vi.fn().mockResolvedValue({ items: [] }),
}));

vi.mock("../../../domain/vblang/datasetApi", () => ({
  listDatasets: vi.fn().mockResolvedValue({ items: [] }),
}));

vi.mock("../../../domain/vblang/plantillaApi", () => ({
  listPlantillas: vi.fn().mockResolvedValue({ items: [] }),
  batchGetPlantillas: vi.fn().mockResolvedValue([]),
}));

vi.mock("../../../services/subastas", () => ({
  fetchSubastasActivas: vi.fn().mockResolvedValue([]),
}));

vi.mock("../../../services/leaderboard", () => ({
  fetchLeaderboard: vi.fn().mockResolvedValue([]),
}));

vi.mock("../../../services/actividades", () => ({
  fetchUpcomingActivities: vi.fn().mockResolvedValue([]),
}));

vi.mock("../../../services/publicaciones", () => ({
  fetchPublications: vi.fn().mockResolvedValue([]),
  createPublication: vi.fn(),
}));

vi.mock("../../../services/resource-links", () => ({
  fetchResourceLinks: vi.fn().mockResolvedValue({ items: [] }),
}));

import ModuloEditor from "../ModuloEditor";

beforeEach(() => {
  vi.clearAllMocks();
  window.sessionStorage.clear();
  mockApiGet.mockImplementation((path: string) => {
    if (path === `/api/modulos/${moduleFixture.id}`) {
      return Promise.resolve(moduleFixture);
    }
    if (path === `/api/modulos/${moduleFixture.id}/invitados`) {
      return Promise.resolve({ items: [{ usuarioId: "alu-1", name: "Ana Alumna" }] });
    }
    if (path === "/api/usuarios") {
      return Promise.resolve({ items: [] });
    }
    return Promise.reject(new Error(`sin mock para ${path}`));
  });
  mockApiDelete.mockResolvedValue(undefined);
});

afterEach(() => {
  cleanup();
});

function renderEditor() {
  return render(
    <MemoryRouter initialEntries={[`/modulos/${moduleFixture.id}/editar`]}>
      <Routes>
        <Route path="/modulos/:id/editar" element={<ModuloEditor />} />
      </Routes>
    </MemoryRouter>,
  );
}

describe("PLAN-X §7: ModuloEditor — descatalogado + invitados", () => {
  it("un módulo ya descatalogado muestra el checkbox tildado y la lista de invitados", async () => {
    renderEditor();

    const checkbox = await screen.findByTestId("modulo-field-descatalogado");
    expect(checkbox).toBeChecked();

    await waitFor(() => {
      expect(screen.getByText("Ana Alumna")).toBeInTheDocument();
    });
  });

  it("quitar un invitado llama al DELETE del usuario correcto", async () => {
    const user = userEvent.setup();
    renderEditor();

    await waitFor(() => expect(screen.getByText("Ana Alumna")).toBeInTheDocument());
    await user.click(screen.getByText("Quitar"));

    await waitFor(() => {
      expect(mockApiDelete).toHaveBeenCalledWith(
        `/api/modulos/${moduleFixture.id}/invitados/alu-1`,
      );
    });
  });
});
