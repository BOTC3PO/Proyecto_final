/**
 * PLAN-Q §2.3 — la cuenta regresiva se ancla a `attempt.deadline` (reloj
 * real), no sólo a `timerSegundos` (ciego a cuánto tiempo ya pasó si el
 * intento se reanuda) ni a los ticks de `setInterval` (que se atrasan con
 * la pantalla apagada / la app en segundo plano en el teléfono).
 */
import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
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
    useParams: () => ({ attemptId: "test-attempt-deadline" }),
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

const ATTEMPT_ID = "test-attempt-deadline";

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

beforeEach(() => {
  apiGetMock.mockReset();
  apiPostMock.mockReset();
  apiRequestMock.mockReset();
  apiPostMock.mockResolvedValue({ status: "submitted", score: 0, maxScore: 0, message: "OK" });
  localStorage.clear();
});

afterEach(() => {
  vi.useRealTimers();
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

describe("QuizAttempt — countdown anclado a deadline", () => {
  it("intento reanudado (deadline ya consumió tiempo) muestra el restante real, no timerSegundos completo", async () => {
    // timerSegundos=1800 (30min) pero el deadline dice que sólo quedan ~600s
    // (10min) — el alumno ya estuvo respondiendo antes de recargar/volver.
    const deadline = new Date(Date.now() + 600_000).toISOString();
    apiGetMock.mockResolvedValue({
      id: ATTEMPT_ID,
      attemptId: ATTEMPT_ID,
      quizId: "q-1",
      moduleId: "m-1",
      quizTitle: "Quiz con timer",
      status: "in_progress",
      quizType: "practica",
      questions: buildQuestions(3),
      answers: {},
      fullscreenOnStart: false,
      timerSegundos: 1800,
      deadline,
    });
    renderQuizAttempt();
    const cronometro = await waitFor(() => screen.getByTestId("cronometro"));
    const remaining = Number(cronometro.getAttribute("data-remaining-seconds"));
    // Debe estar cerca de 600s (deadline), lejos de 1800 (timerSegundos completo).
    expect(remaining).toBeLessThanOrEqual(600);
    expect(remaining).toBeGreaterThan(590);
  });

  it("sin deadline (attempts viejos) cae de vuelta a timerSegundos completo", async () => {
    apiGetMock.mockResolvedValue({
      id: ATTEMPT_ID,
      attemptId: ATTEMPT_ID,
      quizId: "q-1",
      moduleId: "m-1",
      quizTitle: "Quiz con timer sin deadline",
      status: "in_progress",
      quizType: "practica",
      questions: buildQuestions(3),
      answers: {},
      fullscreenOnStart: false,
      timerSegundos: 120,
      // sin deadline
    });
    renderQuizAttempt();
    const cronometro = await waitFor(() => screen.getByTestId("cronometro"));
    expect(Number(cronometro.getAttribute("data-remaining-seconds"))).toBe(120);
  });

  it("al volver de segundo plano (visibilitychange) resincroniza contra el deadline", async () => {
    const deadline = new Date(Date.now() + 60_000).toISOString();
    apiGetMock.mockResolvedValue({
      id: ATTEMPT_ID,
      attemptId: ATTEMPT_ID,
      quizId: "q-1",
      moduleId: "m-1",
      quizTitle: "Quiz con timer",
      status: "in_progress",
      quizType: "practica",
      questions: buildQuestions(3),
      answers: {},
      fullscreenOnStart: false,
      timerSegundos: 60,
      deadline,
    });
    renderQuizAttempt();
    await waitFor(() => screen.getByTestId("cronometro"));

    // Simula que la app estuvo en segundo plano 40s (sin que el setInterval
    // tickeara, como pasa en un teléfono real) y vuelve a estar visible.
    Object.defineProperty(document, "visibilityState", {
      value: "visible",
      configurable: true,
    });
    vi.spyOn(Date, "now").mockReturnValue(Date.now() + 40_000);
    document.dispatchEvent(new Event("visibilitychange"));

    await waitFor(() => {
      const remaining = Number(screen.getByTestId("cronometro").getAttribute("data-remaining-seconds"));
      expect(remaining).toBeLessThanOrEqual(20);
    });
  });
});
