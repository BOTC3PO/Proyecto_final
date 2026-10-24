/**
 * PLAN-Q §2.1 — sugerencia de "una por pantalla" en viewport angosto
 * cuando el docente dejó modoPresentacion en "lista" (el default de
 * WO-9). No pisa "paginado" ni el modo elige_alumno; es preferencia de
 * sesión (toggle), no persiste ni cambia la config del servidor.
 */
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";

const { apiGetMock, apiPostMock, apiRequestMock } = vi.hoisted(() => ({
  apiGetMock: vi.fn(),
  apiPostMock: vi.fn(),
  apiRequestMock: vi.fn(),
}));

vi.mock("../../../lib/api", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../../lib/api")>();
  return { ...actual, apiGet: apiGetMock, apiPost: apiPostMock, apiRequest: apiRequestMock };
});

vi.mock("react-router-dom", async (importOriginal) => {
  const actual = await importOriginal<typeof import("react-router-dom")>();
  return {
    ...actual,
    useParams: () => ({ attemptId: "test-attempt-mobile" }),
    useNavigate: () => vi.fn(),
  };
});

vi.mock("../../../domain/vblang/plantillaApi", () => ({
  getPlantilla: vi.fn().mockResolvedValue({ codigoDsl: "" }),
}));

vi.mock("../../../vblang/datasetCache", () => ({
  precargarDataset: vi.fn().mockResolvedValue(undefined),
}));

import QuizAttempt from "../QuizAttempt";

const ATTEMPT_ID = "test-attempt-mobile";

function buildQuestions(n: number) {
  return Array.from({ length: n }, (_, i) => ({
    id: `q${i}`,
    prompt: `__prompt_q${i}__`,
    questionType: "vf" as const,
    options: ["Verdadero", "Falso"],
    answerKey: ["Verdadero"],
    points: 1,
  }));
}

function mockAttemptLoad(overrides: Record<string, unknown> = {}) {
  apiGetMock.mockResolvedValue({
    id: ATTEMPT_ID,
    attemptId: ATTEMPT_ID,
    quizId: "q-1",
    moduleId: "m-1",
    quizTitle: "Quiz mobile",
    status: "in_progress",
    quizType: "practica",
    questions: buildQuestions(5),
    answers: {},
    fullscreenOnStart: false,
    timerSegundos: null,
    ...overrides,
  });
}

function setViewport(width: number, height = 800) {
  // happy-dom: matchMedia lee el tamaño real de la ventana simulada, no
  // basta con pisar window.innerWidth.
  (window as unknown as { happyDOM: { setViewport: (v: { width: number; height: number }) => void } }).happyDOM.setViewport({ width, height });
}

beforeEach(() => {
  apiGetMock.mockReset();
  apiPostMock.mockReset();
  apiRequestMock.mockReset();
  apiPostMock.mockResolvedValue({ status: "submitted", score: 0, maxScore: 0, message: "OK" });
  localStorage.clear();
  setViewport(1280);
});

afterEach(() => {
  setViewport(1280);
});

function renderQuizAttempt() {
  return render(
    <MemoryRouter initialEntries={[`/quiz/attempt/${ATTEMPT_ID}`]}>
      <Routes>
        <Route path="/quiz/attempt/:attemptId" element={<QuizAttempt />} />
      </Routes>
    </MemoryRouter>,
  );
}

describe("QuizAttempt — sugerencia mobile de modo una_por_pantalla", () => {
  it("viewport angosto + modo lista (default) → sugiere una_por_pantalla", async () => {
    setViewport(390);
    mockAttemptLoad(); // sin modoPresentacion → default "lista"
    renderQuizAttempt();
    const slide = await waitFor(() => screen.getByTestId("quiz-slide"));
    expect(slide).toBeInTheDocument();
    expect(screen.getByTestId("quiz-modo-mobile-toggle")).toBeInTheDocument();
  });

  it("viewport ancho (desktop) + modo lista → no sugiere nada, queda en lista", async () => {
    setViewport(1280);
    mockAttemptLoad();
    renderQuizAttempt();
    const lista = await waitFor(() => screen.getByTestId("quiz-presentation"));
    expect(lista.getAttribute("data-modo-presentacion")).toBe("lista");
    expect(screen.queryByTestId("quiz-modo-mobile-toggle")).not.toBeInTheDocument();
  });

  it("viewport angosto + modo paginado explícito → NO se pisa (se respeta al docente)", async () => {
    setViewport(390);
    mockAttemptLoad({ modoPresentacion: "paginado", preguntasPorPagina: 2 });
    renderQuizAttempt();
    const list = await waitFor(() => screen.getByTestId("quiz-questions-list"));
    expect(list).toBeInTheDocument();
    expect(screen.queryByTestId("quiz-modo-mobile-toggle")).not.toBeInTheDocument();
  });

  it("el toggle permite volver a la lista completa, y volver a la sugerencia", async () => {
    setViewport(390);
    mockAttemptLoad();
    renderQuizAttempt();
    await waitFor(() => screen.getByTestId("quiz-slide"));

    await act(async () => {
      fireEvent.click(screen.getByTestId("quiz-modo-mobile-toggle"));
    });
    const lista = screen.getByTestId("quiz-presentation");
    expect(lista.getAttribute("data-modo-presentacion")).toBe("lista");

    await act(async () => {
      fireEvent.click(screen.getByTestId("quiz-modo-mobile-toggle"));
    });
    expect(screen.getByTestId("quiz-slide")).toBeInTheDocument();
  });
});
