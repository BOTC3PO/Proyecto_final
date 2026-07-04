/**
 * PLAN-F ítem 24 — la sección "Dependencias" de ModuloEditor mostraba el ID
 * crudo del módulo dependencia (`dependencyId` sin resolver contra ningún
 * listado). Este spec cubre el fix: el nombre se resuelve consultando
 * `/api/modulos/:id`, y si el módulo ya no existe se marca como
 * "Módulo eliminado" en vez de mostrar sólo el ID.
 */
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { render, screen, cleanup, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

vi.mock("../../../lib/api", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../../lib/api")>();
  return {
    ...actual,
    apiGet: vi.fn((url: string) => {
      if (url === "/api/modulos/mod-existente") {
        return Promise.resolve({ title: "Módulo Existente" });
      }
      if (url === "/api/modulos/mod-borrado") {
        return Promise.reject(new Error("not found"));
      }
      return Promise.reject(new Error("sin red en tests"));
    }),
    apiPost: vi.fn(),
    apiPatch: vi.fn(),
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
  getDataset: vi.fn().mockResolvedValue({ id: "x", nombre: "x", columnas: [] }),
}));

import ModuloEditor from "../ModuloEditor";

function seedDraftConDependencias() {
  sessionStorage.setItem(
    "modulo-draft:new",
    JSON.stringify({
      form: {
        title: "Módulo con dependencias",
        description: "desc",
        subject: "geografia",
        category: "sin-categoria",
        level: "1",
        durationMinutes: 30,
        visibility: "publico",
        visibilitySchoolId: "",
        dependencies: [
          { id: "mod-existente", type: "required" },
          { id: "mod-borrado", type: "required" },
        ],
      },
      theoryItems: [],
      quizzes: [],
      savedAt: Date.now(),
    }),
  );
}

beforeEach(() => {
  seedDraftConDependencias();
});

afterEach(() => {
  cleanup();
  sessionStorage.clear();
  vi.restoreAllMocks();
});

function renderEditor() {
  return render(
    <MemoryRouter initialEntries={["/modulos/crear"]}>
      <ModuloEditor />
    </MemoryRouter>,
  );
}

describe("ModuloEditor — nombres de dependencias (ítem 24)", () => {
  it("resuelve el ID de la dependencia contra el título real del módulo", async () => {
    renderEditor();
    await waitFor(() => {
      expect(screen.getByText("Módulo Existente")).toBeInTheDocument();
    });
    expect(screen.queryByText("mod-existente")).not.toBeInTheDocument();
  });

  it("marca como eliminado el módulo dependencia que ya no existe", async () => {
    renderEditor();
    await waitFor(() => {
      expect(screen.getByText(/Módulo eliminado/)).toBeInTheDocument();
    });
    expect(screen.getByText("(mod-borrado)")).toBeInTheDocument();
  });
});
