/**
 * Tarea 13 — "la función legacy generador tiene que estar escondida en más
 * acciones". Antes, `QuizEditorGenerated` (selector de generador) se
 * mostraba inline SIEMPRE que `quiz.mode === "generated"` — que es el caso
 * de TODOS los quizzes Tiza nativos (siempre traen ese `mode` como marca
 * heredada, con `generatorId` vacío), no sólo de los legacy reales. Eso
 * mostraba un panel "Configuración del generador" confuso e inútil en
 * cuestionarios donde nunca hace nada.
 *
 * Cubre:
 *  (a) Quiz Tiza nativo (`tienePreguntasNativas`): nunca aparece "Más
 *      acciones" ni el panel de generador — el contenido se edita en Tiza.
 *  (b) Quiz legacy real (`generatorId` con valor, sin preguntas nativas):
 *      el panel arranca oculto; "Más acciones" → "Configurar generador
 *      (legacy)" lo revela.
 */
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";

const { moduleFixtureNativo, moduleFixtureLegacy, mockApiGet } = vi.hoisted(() => {
  function baseModule(quiz: unknown) {
    return {
      id: "mod-masacciones-1",
      title: "Módulo con quiz",
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
  return {
    moduleFixtureNativo: baseModule({
      id: "quiz-nativo",
      title: "Cuestionario nativo",
      type: "practica",
      status: "draft",
      version: 1,
      visibility: "publico",
      mode: "generated",
      generatorId: "",
      generatorVersion: 1,
      count: 0,
      seedPolicy: "perAttempt",
      params: {},
      tienePreguntasNativas: true,
    }),
    moduleFixtureLegacy: baseModule({
      id: "quiz-legacy",
      title: "Cuestionario legacy",
      type: "practica",
      status: "draft",
      version: 1,
      visibility: "publico",
      mode: "generated",
      generatorId: "matematicas-aritmetica",
      generatorVersion: 1,
      count: 5,
      seedPolicy: "perAttempt",
      params: {},
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
    if (path === `/api/modulos/mod-masacciones-1`) return Promise.resolve(fixture);
    if (path === "/api/usuarios") return Promise.resolve({ items: [] });
    return Promise.reject(new Error(`sin mock para ${path}`));
  });
}

function renderEditor() {
  return render(
    <MemoryRouter initialEntries={["/modulos/mod-masacciones-1/editar"]}>
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

describe("ModuloEditor: generador legacy escondido detrás de Más acciones", () => {
  it("(a) quiz Tiza nativo: no hay 'Más acciones' ni panel de generador", async () => {
    mockModule(moduleFixtureNativo);
    renderEditor();

    expect(await screen.findByTestId("quiz-badge-preguntas-nativas")).toBeTruthy();
    expect(screen.queryByTestId("quiz-mas-acciones")).toBeNull();
  });

  it("(b) quiz legacy: el panel arranca oculto y 'Más acciones' lo revela", async () => {
    mockModule(moduleFixtureLegacy);
    renderEditor();

    expect(await screen.findByText("Cuestionario legacy")).toBeTruthy();
    expect(screen.queryByText(/Configuración del generador/i)).toBeNull();

    const masAcciones = screen.getByTestId("quiz-mas-acciones");
    fireEvent.click(masAcciones);
    fireEvent.click(screen.getByTestId("quiz-configurar-generador-legacy"));

    expect(await screen.findByText(/Configuración del generador/i)).toBeTruthy();
  });
});
