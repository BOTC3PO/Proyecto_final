/**
 * Auditoría Tiza/cuestionarios 2026-07-15 — el badge "Plantilla VBLang"
 * (`esPlantilla` en ModuloEditor) sólo chequeaba `tienePreguntasNativas`,
 * nunca `quiz.posiciones`. Un quiz legacy (`generatorId: "plantilla:X"`)
 * editado luego con QuizPosicionesEditor tiene contenido real
 * multi-posición en `settings.posiciones` (lo que de verdad sortea
 * quiz-sorteo.ts) — mostrar "Editar plantilla →" apuntando a una sola
 * plantilla es engañoso. Regresión: el badge no debe aparecer en ese caso.
 */
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";

const { moduleFixtureSinPosiciones, moduleFixtureConPosiciones, mockApiGet } = vi.hoisted(() => {
  function baseModule(quiz: unknown) {
    return {
      id: "mod-badge-1",
      title: "Módulo con quiz legacy",
      description: "desc",
      subject: "matematicas",
      category: "sin-categoria",
      level: "1",
      durationMinutes: 30,
      visibility: "publico" as const,
      descatalogado: false,
      dependencies: [],
      theoryItems: [],
      quizzes: [quiz],
      createdBy: "docente-1",
      updatedAt: "2026-01-01T00:00:00.000Z",
    };
  }
  const quizBase = {
    id: "quiz-1",
    title: "Cuestionario legacy",
    type: "practica",
    status: "draft",
    version: 1,
    visibility: "publico",
    mode: "generated",
    generatorId: "plantilla:p1",
    generatorVersion: 1,
    count: 3,
    seedPolicy: "perAttempt",
    params: {},
  };
  return {
    moduleFixtureSinPosiciones: baseModule(quizBase),
    moduleFixtureConPosiciones: baseModule({
      ...quizBase,
      posiciones: {
        version: 1,
        temas: [{ id: "general", nombre: "General" }],
        posiciones: [
          {
            numero: 1,
            tipo: "fijo",
            temaPrincipal: "general",
            puntaje: 1,
            variantes: [{ letra: "a", origen: { origen: "banco", questionId: "q1" } }],
          },
        ],
      },
    }),
    mockApiGet: vi.fn(),
  };
});

vi.mock("../../../lib/api", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../../lib/api")>();
  return {
    ...actual,
    apiGet: mockApiGet,
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

vi.mock("../../../domain/vblang/plantillaApi", () => ({
  listPlantillas: vi.fn().mockResolvedValue({ items: [] }),
  batchGetPlantillas: vi.fn().mockResolvedValue([]),
}));

vi.mock("../../../domain/quiz/quizPreguntasApi", () => ({
  crearQuizEnModulo: vi.fn(),
  getQuizMeta: vi.fn(),
  saveQuizPreguntas: vi.fn(),
  listarQuizzesSueltos: vi.fn().mockResolvedValue([]),
  usarQuizEnModulo: vi.fn(),
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

function mockModule(fixture: unknown) {
  mockApiGet.mockImplementation((path: string) => {
    if (path === `/api/modulos/mod-badge-1`) return Promise.resolve(fixture);
    if (path === "/api/usuarios") return Promise.resolve({ items: [] });
    return Promise.reject(new Error(`sin mock para ${path}`));
  });
}

function renderEditor() {
  return render(
    <MemoryRouter initialEntries={["/modulos/mod-badge-1/editar"]}>
      <Routes>
        <Route path="/modulos/:id/editar" element={<ModuloEditor />} />
      </Routes>
    </MemoryRouter>,
  );
}

beforeEach(() => {
  vi.clearAllMocks();
  window.sessionStorage.clear();
});

afterEach(() => {
  cleanup();
});

describe("ModuloEditor: badge Plantilla VBLang vs. posiciones reales", () => {
  it("muestra el badge de plantilla para un quiz legacy sin posiciones", async () => {
    mockModule(moduleFixtureSinPosiciones);
    renderEditor();

    expect(await screen.findByTestId("quiz-badge-plantilla")).toBeTruthy();
  });

  it("NO muestra el badge de plantilla si el quiz ya tiene posiciones reales", async () => {
    mockModule(moduleFixtureConPosiciones);
    renderEditor();

    // Deja que el módulo termine de cargar (usamos el título como señal).
    expect(await screen.findByText("Cuestionario legacy")).toBeTruthy();
    expect(screen.queryByTestId("quiz-badge-plantilla")).toBeNull();
  });
});
