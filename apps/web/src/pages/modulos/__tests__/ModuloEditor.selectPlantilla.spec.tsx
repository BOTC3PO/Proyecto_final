/**
 * PLAN-E §10 — "el nombre pertenece al cuestionario, no a cada plantilla".
 *
 * `handleSelectPlantilla` (disparado por "Usar plantilla VBLang" →
 * `PlantillaSelectorModal`) propagaba `plantilla.nombre` directo como
 * `title` del `ModuleQuiz` recién creado. Con plantillas independientes
 * (banco reusable), el nombre de la plantilla y el título del cuestionario
 * son cosas distintas — no deben quedar acoplados sin querer.
 */
import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Routes, Route } from "react-router-dom";

vi.mock("../../../lib/api", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../../lib/api")>();
  return {
    ...actual,
    apiGet: vi.fn().mockRejectedValue(new Error("sin red en tests")),
    apiPost: vi.fn(),
    apiPatch: vi.fn(),
    apiDelete: vi.fn(),
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

const { plantillaFixture } = vi.hoisted(() => ({
  plantillaFixture: {
    id: "p1",
    nombre: "Suma de fracciones",
    descripcion: "",
    materia: "matematicas",
    tags: [],
    visibility: "privada" as const,
    publicAprobado: false,
    ownerUserId: "docente-1",
    version: 1,
    createdAt: "2026-01-01T00:00:00.000Z",
    updatedAt: "2026-01-01T00:00:00.000Z",
  },
}));

vi.mock("../../../domain/vblang/plantillaApi", () => ({
  listPlantillas: vi.fn().mockResolvedValue({ items: [plantillaFixture] }),
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

// Spy de `useModuloEditor` para inspeccionar `handleImportQuizzes`.
const importSpy = vi.fn();
vi.mock("../useModuloEditor", async () => {
  const actual = await vi.importActual<typeof import("../useModuloEditor")>("../useModuloEditor");
  return {
    ...actual,
    useModuloEditor: (...args: Parameters<typeof actual.useModuloEditor>) => {
      const handlers = actual.useModuloEditor(...args);
      importSpy.mockImplementation(handlers.handleImportQuizzes);
      return { ...handlers, handleImportQuizzes: importSpy };
    },
  };
});

import ModuloEditor from "../ModuloEditor";

beforeEach(() => {
  vi.clearAllMocks();
  window.sessionStorage.clear();
});

describe("PLAN-E §10: título del quiz no hereda el nombre de la plantilla", () => {
  it("elegir una plantilla VBLang crea el quiz con un título propio, no `plantilla.nombre`", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={["/modulos/crear"]}>
        <Routes>
          <Route path="/modulos/crear" element={<ModuloEditor />} />
        </Routes>
      </MemoryRouter>,
    );

    await user.click(await screen.findByText("Usar plantilla VBLang"));
    await user.click(await screen.findByTestId("plantilla-option-p1"));

    await waitFor(() => expect(importSpy).toHaveBeenCalled());
    const created = importSpy.mock.calls.flatMap((c) => c[0] ?? [])[0] as { title?: string };
    expect(created.title).not.toBe(plantillaFixture.nombre);
  });
});
