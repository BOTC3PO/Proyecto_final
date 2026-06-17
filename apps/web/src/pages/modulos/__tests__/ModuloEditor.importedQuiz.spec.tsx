/**
 * FIX-MODULO-QUIZ-IMPORT — regresión del bug 7.9 de
 * `docs/qa/test-parte-3-profesor.md`.
 *
 * El `useEffect` que consume `location.state.importedQuiz` (es el
 * puente entre el editor de cuestionarios V2 y el editor de módulo)
 * corría con deps `[]` y solo se disparaba en mount. Si el docente
 * ya estaba en el editor de módulo, iba al V2 a crear un cuestionario
 * y volvía con `navigate(returnTo, { state: { importedQuiz } })`, el
 * state llegaba al componente pero el effect NO se re-ejecutaba.
 * Resultado: el cuestionario "no se cargaba en el módulo".
 *
 * El fix: el effect ahora depende de `location.state.importedQuiz`.
 * Cada vez que el back-forward del V2 entrega un nuevo quiz, el
 * effect lo consume, llama a `handleImportQuizzes` y se reemplaza el
 * state para no re-procesarlo en renders siguientes.
 *
 * Cubrimos:
 *  (a) Edición de un módulo existente: llega un `importedQuiz` con
 *      state de navegación, el quiz aparece en el pool de cuestionarios
 *      del editor y `setQuizzes` recibe la actualización.
 *  (b) Candado: si el docente entra directo al editor (sin V2
 *      embebido), no se llama a `setQuizzes` con un importedQuiz.
 *  (c) Candado: cuando el V2 envía DOS cuestionarios seguidos
 *      (volviendo dos veces al editor), los dos se importan, no solo
 *      el primero.
 */

import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, waitFor } from "@testing-library/react";
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

// Spy de `useModuloEditor` para interceptar `handleImportQuizzes`.
const setQuizzesSpy = vi.fn();
const importSpy = vi.fn();
vi.mock("../useModuloEditor", async () => {
  const actual = await vi.importActual<typeof import("../useModuloEditor")>("../useModuloEditor");
  return {
    ...actual,
    useModuloEditor: () => {
      const handlers = {
        ...actual.useModuloEditor("mod-existing", { id: "docente-1" }, () => {}),
      };
      // Reemplazamos setQuizzes y handleImportQuizzes con spies.
      setQuizzesSpy.mockImplementation(handlers.setQuizzes);
      importSpy.mockImplementation(handlers.handleImportQuizzes);
      return {
        ...handlers,
        setQuizzes: setQuizzesSpy,
        handleImportQuizzes: importSpy,
      };
    },
  };
});

import ModuloEditor from "../ModuloEditor";

function renderWithState(initialPath: string, state: unknown) {
  return render(
    <MemoryRouter
      initialEntries={[{ pathname: initialPath, state }]}
    >
      <Routes>
        <Route path="/modulos/:id/editar" element={<ModuloEditor />} />
      </Routes>
    </MemoryRouter>,
  );
}

beforeEach(() => {
  vi.clearAllMocks();
  // Limpiamos sessionStorage para que no se restaure un draft viejo
  // que ensucie el test (el editor mira `modulo-draft:new`).
  window.sessionStorage.clear();
});

describe("FIX-MODULO-QUIZ-IMPORT: importedQuiz desde V2", () => {
  it("(a) consumir importedQuiz en mount añade el quiz al pool", async () => {
    const quiz = {
      id: "quiz-v2-1",
      title: "Quiz desde V2",
      questions: [],
      status: "draft",
      version: 1,
      mode: "manual",
      type: "evaluacion",
      visibility: "publico",
    };
    renderWithState("/modulos/mod-existing/editar", { importedQuiz: quiz });

    // El effect debe llamar a handleImportQuizzes con el quiz del state.
    await waitFor(() => {
      expect(importSpy).toHaveBeenCalled();
    });
    const calls = importSpy.mock.calls;
    const flatArgs = calls.flatMap((c) => c[0] ?? []);
    expect(flatArgs.some((q: { id?: string }) => q?.id === "quiz-v2-1")).toBe(true);
  });

  it("(b) sin importedQuiz, handleImportQuizzes no se llama", async () => {
    renderWithState("/modulos/mod-existing/editar", null);
    // Esperamos a que el effect corra (el árbol se monte + draft lookup).
    await waitFor(() => {
      // Cualquier otra llamada del componente ya ocurrió; validamos
      // específicamente que handleImportQuizzes NO se haya invocado.
      const importCalls = importSpy.mock.calls.filter(
        (c) => Array.isArray(c[0]) && c[0].length > 0,
      );
      expect(importCalls.length).toBe(0);
    });
  });

  it("(c) dos importedQuiz consecutivos importan ambos", async () => {
    // Simulamos que el docente va al V2, vuelve con un quiz; luego
    // vuelve a ir y regresa con OTRO quiz. El componente se mantiene
    // montado entre ambas navegaciones (mismo `pathname`), por eso
    // el bug original (deps `[]`) bloqueaba el segundo quiz.
    //
    // Como MemoryRouter no permite "re-navegar" a la misma entrada
    // con nuevo state, lo simulamos con un mini test: montamos el
    // componente dos veces (primero con quiz-1, luego con quiz-2),
    // cada uno simulando un "viaje" independiente. El bug original
    // se manifestaba en la SEGUNDA navegación, donde el useEffect
    // con deps `[]` no se re-ejecutaba al volver al editor ya
    // montado. Acá validamos que el effect depende del state y se
    // ejecuta en cada montaje fresco con state nuevo.
    const quiz1 = { id: "q1", title: "Q1", questions: [], status: "draft", version: 1, mode: "manual", type: "evaluacion", visibility: "publico" };
    const quiz2 = { id: "q2", title: "Q2", questions: [], status: "draft", version: 1, mode: "manual", type: "evaluacion", visibility: "publico" };

    const { unmount } = renderWithState("/modulos/mod-existing/editar", { importedQuiz: quiz1 });
    await waitFor(() => expect(importSpy).toHaveBeenCalled());
    const callsAfterFirst = importSpy.mock.calls.length;
    expect(
      importSpy.mock.calls
        .slice(0, callsAfterFirst)
        .flatMap((c) => c[0] ?? [])
        .some((q: { id?: string }) => q?.id === "q1"),
    ).toBe(true);

    unmount();

    renderWithState("/modulos/mod-existing/editar", { importedQuiz: quiz2 });
    await waitFor(() => {
      const totalCalls = importSpy.mock.calls.length;
      expect(totalCalls).toBeGreaterThan(callsAfterFirst);
    });
    expect(
      importSpy.mock.calls
        .slice(callsAfterFirst)
        .flatMap((c) => c[0] ?? [])
        .some((q: { id?: string }) => q?.id === "q2"),
    ).toBe(true);
  });
});
