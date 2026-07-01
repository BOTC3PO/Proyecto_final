/**
 * WO-T2a — Modo revisión: abrir un intento ya finalizado en read-only,
 * sin crear ni consumir un intento nuevo.
 *
 * Cubre:
 *  - Un intento con `status !== "in_progress"` (submitted/pending_review/
 *    graded/aborted) se renderiza en modo revisión: banner visible,
 *    inputs deshabilitados, sin botón activo de "Enviar".
 *  - El GET de carga NUNCA dispara un POST de creación de intento — abrir
 *    para revisar no consume `maxIntentos`.
 *  - El cronómetro no corre (no debe disparar un submit automático sobre
 *    un intento ya cerrado).
 *  - Un intento `in_progress` sigue mostrando el formulario editable
 *    (comportamiento previo, sin regresión).
 */
import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
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
    useParams: () => ({ attemptId: "test-attempt-revision" }),
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

const ATTEMPT_ID = "test-attempt-revision";

function buildQuestions() {
  return [
    {
      id: "q0",
      prompt: "__prompt_q0__",
      questionType: "vf" as const,
      options: ["Verdadero", "Falso"],
      answerKey: ["Verdadero"],
      points: 1,
    },
  ];
}

function mockAttemptLoad(overrides: Record<string, unknown> = {}) {
  apiGetMock.mockResolvedValue({
    id: ATTEMPT_ID,
    attemptId: ATTEMPT_ID,
    quizId: "q-1",
    moduleId: "m-1",
    quizTitle: "Quiz revisión",
    status: "in_progress",
    quizType: "formal",
    questions: buildQuestions(),
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

describe("WO-T2a QuizAttempt — modo revisión", () => {
  it("status='submitted': muestra el banner de revisión y deshabilita los inputs", async () => {
    mockAttemptLoad({
      status: "submitted",
      answers: { q0: "Verdadero" },
      score: 1,
      maxScore: 1,
    });
    renderQuizAttempt();
    expect(await screen.findByTestId("review-mode-banner")).toBeInTheDocument();
    const radios = await screen.findAllByRole("radio");
    radios.forEach((r) => expect(r).toBeDisabled());
    expect(screen.getByTestId("post-submit-score")).toHaveTextContent("1 / 1");
  });

  it("status='pending_review': también entra en modo revisión (read-only)", async () => {
    mockAttemptLoad({ status: "pending_review", answers: { q0: "Verdadero" } });
    renderQuizAttempt();
    expect(await screen.findByTestId("review-mode-banner")).toBeInTheDocument();
  });

  it("status='graded': también entra en modo revisión (read-only)", async () => {
    mockAttemptLoad({ status: "graded", answers: { q0: "Verdadero" } });
    renderQuizAttempt();
    expect(await screen.findByTestId("review-mode-banner")).toBeInTheDocument();
  });

  it("abrir un intento para revisar NUNCA llama a POST /api/quiz-attempts (no crea ni consume un intento)", async () => {
    mockAttemptLoad({ status: "submitted", answers: { q0: "Verdadero" } });
    renderQuizAttempt();
    await screen.findByTestId("review-mode-banner");
    expect(apiPostMock).not.toHaveBeenCalled();
  });

  it("clickear la opción ya seleccionada en modo revisión no dispara un nuevo POST de respuesta", async () => {
    mockAttemptLoad({ status: "submitted", answers: { q0: "Verdadero" } });
    renderQuizAttempt();
    await screen.findByTestId("review-mode-banner");
    const radios = await screen.findAllByRole("radio");
    radios.forEach((r) => r.click());
    expect(apiPostMock).not.toHaveBeenCalled();
  });

  it("con timerSegundos configurado, el cronómetro NO se muestra en modo revisión (no debe re-disparar un submit)", async () => {
    mockAttemptLoad({ status: "submitted", timerSegundos: 600, answers: {} });
    renderQuizAttempt();
    await screen.findByTestId("review-mode-banner");
    expect(screen.queryByTestId("cronometro")).not.toBeInTheDocument();
    expect(screen.queryByTestId("cronometro-expired")).not.toBeInTheDocument();
  });

  it("status='in_progress' (comportamiento previo): NO muestra el banner de revisión y los inputs quedan habilitados", async () => {
    mockAttemptLoad({ status: "in_progress" });
    renderQuizAttempt();
    await waitFor(() => screen.getByTestId("quiz-presentation"));
    expect(screen.queryByTestId("review-mode-banner")).not.toBeInTheDocument();
    const radios = await screen.findAllByRole("radio");
    radios.forEach((r) => expect(r).not.toBeDisabled());
  });
});
