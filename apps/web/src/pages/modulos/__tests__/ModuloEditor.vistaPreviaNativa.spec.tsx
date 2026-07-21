/**
 * Mejora #4 de la auditoría de editores/módulos — "Vista previa" en
 * ModuloEditor no mostraba nada útil para cuestionarios Tiza nativos
 * (`tienePreguntasNativas`, el caso normal hoy): usaba
 * `QuizGeneratedPreview` con `generatorId=""`, que sólo renderiza un
 * texto genérico ("la vista previa ocurre al rendir"). Ahora usa
 * `QuizPreguntasNativasPreview`, que genera y muestra las preguntas
 * reales.
 *
 * Cubre: la vista previa de un quiz nativo (siempre visible, sin botón
 * para revelarla — ver "vista previa más correspondiente para
 * cuestionarios") muestra el enunciado real generado, no el texto
 * genérico.
 */
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { render, screen, cleanup, waitFor } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";

const { moduleFixtureNativo, mockApiGet, mockGetQuizPreguntas, mockGetPlantilla } = vi.hoisted(() => ({
  moduleFixtureNativo: {
    id: "mod-vp-1",
    title: "Módulo con quiz nativo",
    description: "desc",
    subject: "matematicas",
    category: "sin-categoria",
    level: "1",
    durationMinutes: 30,
    visibility: "publico" as const,
    descatalogado: false,
    dependencies: [],
    theoryItems: [],
    quizzes: [{
      id: "quiz-nativo-vp",
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
    }],
    createdBy: "docente-1",
    updatedAt: "2026-01-01T00:00:00.000Z",
  },
  mockApiGet: vi.fn(),
  mockGetQuizPreguntas: vi.fn(),
  mockGetPlantilla: vi.fn(),
}));

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
  getPlantilla: mockGetPlantilla,
}));

vi.mock("../../../domain/quiz/quizPreguntasApi", () => ({
  crearQuizEnModulo: vi.fn(),
  getQuizMeta: vi.fn(),
  saveQuizPreguntas: vi.fn(),
  listarQuizzesSueltos: vi.fn().mockResolvedValue([]),
  usarQuizEnModulo: vi.fn(),
  getQuizPreguntas: mockGetQuizPreguntas,
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

function renderEditor() {
  mockApiGet.mockImplementation((path: string) => {
    if (path === "/api/modulos/mod-vp-1") return Promise.resolve(moduleFixtureNativo);
    if (path === "/api/usuarios") return Promise.resolve({ items: [] });
    return Promise.reject(new Error(`sin mock para ${path}`));
  });
  return render(
    <MemoryRouter initialEntries={["/modulos/mod-vp-1/editar"]}>
      <Routes>
        <Route path="/modulos/:id/editar" element={<ModuloEditor />} />
      </Routes>
    </MemoryRouter>,
  );
}

beforeEach(() => {
  vi.clearAllMocks();
  window.sessionStorage.clear();
  mockGetQuizPreguntas.mockResolvedValue({
    version: 1,
    cantidadGlobal: 1,
    preguntas: [{ plantillaId: "p1", tipo: "obligatoria" }],
  });
  mockGetPlantilla.mockResolvedValue({
    id: "p1",
    codigoDsl: 'enunciado: "¿Cuál es la capital de Francia?"\nrespuesta: "París"\n',
  });
});

afterEach(() => {
  cleanup();
});

describe("ModuloEditor — Vista previa de cuestionario Tiza nativo", () => {
  it("muestra el enunciado real generado, no el texto genérico", async () => {
    renderEditor();

    await waitFor(() => {
      expect(screen.getByText(/¿Cuál es la capital de Francia\?/)).toBeInTheDocument();
    });
    expect(mockGetQuizPreguntas).toHaveBeenCalledWith("quiz-nativo-vp");
  });
});
