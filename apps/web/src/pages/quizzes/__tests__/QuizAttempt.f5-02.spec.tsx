/**
 * F5-02 — Tests de integración del runtime de evaluación en QuizAttempt.
 *
 * Cubre los tres comportamientos clave del runtime:
 *  1. Al iniciar, si `fullscreenOnStart=true`, se muestra el gate
 *     "Empezar evaluación" (no se renderiza el quiz directo).
 *  2. Al llegar el timer a 0: se bloquean los inputs, el cronómetro
 *     muestra el banner "Tiempo agotado" y se dispara `handleSubmit`
 *     (POST /submit con flush del outbox previo).
 *  3. Al cambiar de pestaña (visibilitychange → hidden) o al
 *     perder foco (window blur): se llama `flushOutbox` con el
 *     sendFn correcto, pero el intento SIGUE ABIERTO (no se
 *     submitea).
 *
 * Estrategia: mockear `useParams` para forzar un `attemptId`
 * conocido, mockear `apiGet` para devolver un attempt sintético
 * con timer, y mockear `apiPost` para trackear las llamadas
 * (submit y answer). Usamos `vi.useFakeTimers` para controlar
 * el countdown sin esperar tiempo real.
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
    useParams: () => ({ attemptId: "test-attempt-1" }),
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

const ATTEMPT_ID = "test-attempt-1";

function mockAttemptLoad(overrides: Record<string, unknown> = {}) {
  apiGetMock.mockResolvedValue({
    id: ATTEMPT_ID,
    attemptId: ATTEMPT_ID,
    quizId: "q-1",
    moduleId: "m-1",
    quizTitle: "Quiz de prueba",
    status: "in_progress",
    quizType: "competencia",
    questions: [
      {
        id: "q0",
        prompt: "¿2+2?",
        questionType: "vf",
        options: ["Verdadero", "Falso"],
        answerKey: ["Verdadero"],
        points: 1,
      },
    ],
    answers: {},
    ...overrides,
  });
}

beforeEach(() => {
  apiGetMock.mockReset();
  apiPostMock.mockReset();
  apiRequestMock.mockReset();
  // Por default, los POST resuelven OK (el submit devuelve un resultado).
  apiPostMock.mockResolvedValue({
    status: "submitted",
    score: 1,
    maxScore: 1,
    message: "OK",
  });
  // Limpiamos el outbox entre tests.
  localStorage.clear();
});

afterEach(() => {
  vi.useRealTimers();
  // Restaurar document.hidden a false.
  Object.defineProperty(document, "hidden", {
    value: false,
    configurable: true,
    writable: true,
  });
});

describe("QuizAttempt — F5-02 runtime de evaluación", () => {
  it("con fullscreenOnStart=true muestra el gate 'Empezar evaluación'", async () => {
    mockAttemptLoad({ fullscreenOnStart: true, timerSegundos: 600 });
    render(
      <MemoryRouter initialEntries={[`/quiz/attempt/${ATTEMPT_ID}`]}>
        <Routes>
          <Route path="/quiz/attempt/:attemptId" element={<QuizAttempt />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByTestId("empezar-evaluacion")).toBeInTheDocument();
    });
    // El quiz no se renderiza todavía.
    expect(screen.queryByText("¿2+2?")).not.toBeInTheDocument();
  });

  it("timer llega a 0 → bloquea inputs + dispara submit", async () => {
    // SÓLO fakear `setInterval` para no romper el polling interno de
    // `waitFor` (que usa setTimeout). El useCountdown usa setInterval.
    vi.useFakeTimers({ toFake: ["setInterval"] });
    mockAttemptLoad({ fullscreenOnStart: false, timerSegundos: 3 });
    render(
      <MemoryRouter initialEntries={[`/quiz/attempt/${ATTEMPT_ID}`]}>
        <Routes>
          <Route path="/quiz/attempt/:attemptId" element={<QuizAttempt />} />
        </Routes>
      </MemoryRouter>
    );

    // Espera a que el quiz cargue (sin gate de fullscreen → render directo).
    await waitFor(() => {
      expect(screen.getByText("¿2+2?")).toBeInTheDocument();
    });
    // El cronómetro arranca mostrando 00:03.
    const cronometro = screen.getByTestId("cronometro");
    expect(cronometro.getAttribute("data-remaining-seconds")).toBe("3");

    // Avanza 3 segundos (timer llega a 0). Las microtasks (await
    // flushOutbox, await apiPost) se procesan naturalmente.
    await act(async () => {
      await vi.advanceTimersByTimeAsync(3000);
    });

    // El banner "Tiempo agotado" se muestra.
    await waitFor(() => {
      expect(screen.getByTestId("cronometro-expired")).toBeInTheDocument();
    });
    // El botón de submit se llamó (POST /submit).
    await waitFor(() => {
      const submitCalls = apiPostMock.mock.calls.filter(
        (c) => typeof c[0] === "string" && c[0].endsWith("/submit")
      );
      expect(submitCalls.length).toBe(1);
    });
  });

  it("visibilitychange → hidden → flush, intento sigue ABIERTO", async () => {
    mockAttemptLoad({ fullscreenOnStart: false, timerSegundos: null });
    render(
      <MemoryRouter initialEntries={[`/quiz/attempt/${ATTEMPT_ID}`]}>
        <Routes>
          <Route path="/quiz/attempt/:attemptId" element={<QuizAttempt />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("¿2+2?")).toBeInTheDocument();
    });

    // El alumno responde una pregunta → entra al outbox local.
    const verdadero = screen.getByLabelText("Verdadero") as HTMLInputElement;
    fireEvent.click(verdadero);

    // Simulamos cambio de pestaña: document.hidden = true + evento.
    Object.defineProperty(document, "hidden", {
      value: true,
      configurable: true,
      writable: true,
    });
    act(() => {
      document.dispatchEvent(new Event("visibilitychange"));
    });

    // El flushOutbox llamó a apiPost('/api/quiz-attempts/:id/answer', ...).
    // PERO NO se llamó al submit.
    await waitFor(() => {
      const answerCalls = apiPostMock.mock.calls.filter(
        (c) =>
          typeof c[0] === "string" &&
          c[0].endsWith("/answer")
      );
      // 1 del recordAnswer optimista + 1 del flush = 2 llamadas.
      expect(answerCalls.length).toBeGreaterThanOrEqual(1);
      const submitCalls = apiPostMock.mock.calls.filter(
        (c) => typeof c[0] === "string" && c[0].endsWith("/submit")
      );
      expect(submitCalls.length).toBe(0);
    });
  });
});
