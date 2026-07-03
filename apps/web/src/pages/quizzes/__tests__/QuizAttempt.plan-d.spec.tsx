/**
 * PLAN-D §2 — indicador de "Guardado" (autosave) y navegación por teclado
 * en `QuizAttempt.tsx`.
 *
 * Cubre:
 *  - Responder una pregunta muestra "Guardando…" y luego "Guardado".
 *  - Si el POST /answer falla, muestra el mensaje de "guardado local".
 *  - Antes de responder nada, no se muestra ningún estado de guardado.
 *  - Flecha derecha/izquierda navega entre preguntas en modo
 *    una_por_pantalla; no navega si el foco está en un input de texto.
 */
import { describe, expect, it, vi, beforeEach } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";

const { apiGetMock, apiPostMock, apiRequestMock } = vi.hoisted(() => ({
  apiGetMock: vi.fn(),
  apiPostMock: vi.fn(),
  apiRequestMock: vi.fn(),
}));

vi.mock("../../../lib/api", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../../lib/api")>();
  return {
    ...actual,
    apiGet: apiGetMock,
    apiPost: apiPostMock,
    apiRequest: apiRequestMock,
  };
});

vi.mock("react-router-dom", async (importOriginal) => {
  const actual = await importOriginal<typeof import("react-router-dom")>();
  return {
    ...actual,
    useParams: () => ({ attemptId: "test-attempt-plan-d" }),
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

const ATTEMPT_ID = "test-attempt-plan-d";

function buildQuestions(n: number) {
  return Array.from({ length: n }, (_, i) => ({
    id: `q${i}`,
    prompt: `__prompt_q${i}__`,
    questionType: "input" as const,
    answerKey: "x",
    points: 1,
  }));
}

function mockAttemptLoad(overrides: Record<string, unknown> = {}) {
  apiGetMock.mockResolvedValue({
    id: ATTEMPT_ID,
    attemptId: ATTEMPT_ID,
    quizId: "q-1",
    moduleId: "m-1",
    quizTitle: "Quiz PLAN-D",
    status: "in_progress",
    quizType: "practica",
    questions: buildQuestions(3),
    answers: {},
    fullscreenOnStart: false,
    timerSegundos: null,
    ...overrides,
  });
}

beforeEach(() => {
  apiGetMock.mockReset();
  apiPostMock.mockReset();
  apiRequestMock.mockReset();
  localStorage.clear();
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

describe("PLAN-D §2 — indicador de guardado", () => {
  it("no muestra nada antes de responder", async () => {
    mockAttemptLoad();
    renderQuizAttempt();
    await waitFor(() => screen.getByTestId("quiz-presentation"));
    expect(screen.queryByTestId("quiz-save-status")).toBeNull();
  });

  it("responder muestra 'Guardado' tras el POST exitoso", async () => {
    mockAttemptLoad();
    apiPostMock.mockResolvedValue({ ok: true });
    renderQuizAttempt();
    await waitFor(() => screen.getByTestId("quiz-presentation"));
    const input = screen.getAllByRole("textbox")[0];
    fireEvent.change(input, { target: { value: "x" } });
    await waitFor(() =>
      expect(screen.getByTestId("quiz-save-status")).toHaveTextContent("Guardado"),
    );
  });

  it("si el POST /answer falla, muestra el mensaje de guardado local", async () => {
    mockAttemptLoad();
    apiPostMock.mockRejectedValue(new Error("network down"));
    renderQuizAttempt();
    await waitFor(() => screen.getByTestId("quiz-presentation"));
    const input = screen.getAllByRole("textbox")[0];
    fireEvent.change(input, { target: { value: "x" } });
    await waitFor(() =>
      expect(screen.getByTestId("quiz-save-status")).toHaveTextContent(/se sincronizará/),
    );
  });
});

describe("PLAN-D §2 — navegación por teclado", () => {
  it("flecha derecha avanza a la siguiente pregunta en modo una_por_pantalla", async () => {
    mockAttemptLoad({ modoPresentacion: "una_por_pantalla" });
    renderQuizAttempt();
    const slide = await waitFor(() => screen.getByTestId("quiz-slide"));
    expect(slide.getAttribute("data-slide-index")).toBe("0");
    fireEvent.keyDown(window, { key: "ArrowRight" });
    await waitFor(() =>
      expect(screen.getByTestId("quiz-slide").getAttribute("data-slide-index")).toBe("1"),
    );
    fireEvent.keyDown(window, { key: "ArrowLeft" });
    await waitFor(() =>
      expect(screen.getByTestId("quiz-slide").getAttribute("data-slide-index")).toBe("0"),
    );
  });

  it("no navega si el foco está en un input de texto (no interfiere con tipear)", async () => {
    mockAttemptLoad({ modoPresentacion: "una_por_pantalla" });
    renderQuizAttempt();
    const slide = await waitFor(() => screen.getByTestId("quiz-slide"));
    expect(slide.getAttribute("data-slide-index")).toBe("0");
    const input = screen.getAllByRole("textbox")[0];
    input.focus();
    fireEvent.keyDown(input, { key: "ArrowRight" });
    expect(screen.getByTestId("quiz-slide").getAttribute("data-slide-index")).toBe("0");
  });
});
