/**
 * PLAN-CUESTIONARIOS — "Crear cuestionario" en ModuloEditor.
 *
 * El módulo CREA el cuestionario (POST /api/quizzes con moduleId, vía
 * `crearQuizEnModulo`) y la tarjeta aparece en la lista con las reglas
 * de cuestionario y el link "Preguntas nativas en Tiza →". El entry
 * point "⚡ Generados (legacy)" (editor clásico V1) quedó retirado.
 *
 * Cubre:
 *  - Módulo guardado (con id): el botón crea el quiz adosado y la
 *    tarjeta aparece con el badge de preguntas nativas.
 *  - Módulo NUEVO (sin id): el botón no se muestra (no hay dónde
 *    adosarlo todavía), y tampoco el botón legacy.
 */
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { render, screen, cleanup, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Routes, Route } from "react-router-dom";

const { moduleFixture, mockApiGet } = vi.hoisted(() => {
  const moduleFixture = {
    id: "mod-crear-q-1",
    title: "Módulo con cuestionarios",
    description: "desc",
    subject: "matematicas",
    category: "sin-categoria",
    level: "1",
    durationMinutes: 30,
    visibility: "publico" as const,
    descatalogado: false,
    dependencies: [],
    theoryItems: [],
    quizzes: [],
    createdBy: "docente-1",
    updatedAt: "2026-01-01T00:00:00.000Z",
  };
  return { moduleFixture, mockApiGet: vi.fn() };
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

const crearQuizEnModulo = vi.fn();
const getQuizMeta = vi.fn();
vi.mock("../../../domain/quiz/quizPreguntasApi", () => ({
  crearQuizEnModulo: (...a: unknown[]) => crearQuizEnModulo(...a),
  getQuizMeta: (...a: unknown[]) => getQuizMeta(...a),
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

beforeEach(() => {
  vi.clearAllMocks();
  window.sessionStorage.clear();
  mockApiGet.mockImplementation((path: string) => {
    if (path === `/api/modulos/${moduleFixture.id}`) {
      return Promise.resolve(moduleFixture);
    }
    if (path === "/api/usuarios") {
      return Promise.resolve({ items: [] });
    }
    return Promise.reject(new Error(`sin mock para ${path}`));
  });
});

afterEach(() => {
  cleanup();
});

function renderEditor(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/modulos/:id/editar" element={<ModuloEditor />} />
        <Route path="/modulos/crear" element={<ModuloEditor />} />
      </Routes>
    </MemoryRouter>,
  );
}

describe("PLAN-CUESTIONARIOS: Crear cuestionario desde el módulo", () => {
  it("crea el quiz adosado al módulo y la tarjeta aparece con preguntas nativas", async () => {
    crearQuizEnModulo.mockResolvedValue({ id: "quiz-creado-1" });
    getQuizMeta.mockResolvedValue({
      id: "quiz-creado-1",
      title: "",
      type: "practica",
      visibility: "publico",
      materia: "matematicas",
      nivel: "",
      tags: [],
      descripcion: "",
      config: {},
    });

    const user = userEvent.setup();
    renderEditor(`/modulos/${moduleFixture.id}/editar`);

    await user.click(await screen.findByTestId("crear-cuestionario"));

    await waitFor(() =>
      expect(crearQuizEnModulo).toHaveBeenCalledWith(moduleFixture.id),
    );
    // La tarjeta del cuestionario nuevo aparece en la lista con el badge
    // de preguntas nativas y el link a Tiza (módulo guardado → id real).
    expect(await screen.findByTestId("quiz-badge-preguntas-nativas")).toBeTruthy();
    expect(screen.getByTestId("quiz-tiza-preguntas-link").getAttribute("href")).toContain(
      "quizId=quiz-creado-1",
    );
  });

  it("sin módulo guardado no hay botón (y el legacy V1 ya no existe)", async () => {
    renderEditor("/modulos/crear");

    await screen.findByText("Usar plantilla VBLang");
    expect(screen.queryByTestId("crear-cuestionario")).toBeNull();
    expect(screen.queryByText(/Generados \(legacy\)/)).toBeNull();
  });
});
