/**
 * FIX-QUIZATTEMPT — `QuizVersion.questions` es una columna `String?`
 * serializada con JSON en la DB. El back ya parsea correctamente
 * (ver `api/src/routes/quiz-attempts.ts:313` y
 * `api/tests/integracion/quiz-attempts-questions-shape.test.ts`); este
 * spec cubre la defensa del FRONT: el reproductor debe tolerar
 * `questions` como string (JSON sin parsear por un build viejo, un
 * proxy, etc.) sin crashear con
 * `TypeError: questions.map is not a function`.
 *
 * Reproduce el crash original: si `attempt.questions` es un string,
 * `presentedQuestions` (QuizAttempt.tsx:384) caía al path legacy
 * (`server.length > 0 ? server : generatedQuestions`), y como
 * `display` puede no estar seteado, devolvía el string crudo. Después
 * `questions.map(...)` reventaba.
 *
 * Cubre:
 *  1. `questions` como string JSON válido → parsea y renderiza OK.
 *  2. `questions` como string MALFORMADO → degrada a `[]` (no crash).
 *  3. `questions` como objeto (no array, no string) → degrada a `[]`.
 *  4. `questions` ausente (`undefined`/`null`) → degrada a `[]` y usa
 *     `generatedQuestions` como pool (no testeo el render, sólo que no
 *     crashea).
 *  5. `quiz.questions` como string (sin `attempt.questions` válido)
 *     → mismo path defensivo.
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
    useParams: () => ({ attemptId: "fix-qa-1" }),
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

const ATTEMPT_ID = "fix-qa-1";

const QUESTION_VALID = {
  id: "q-fqa",
  prompt: "¿Cuál es la respuesta?",
  questionType: "mc",
  options: ["A", "B", "C"],
  answerKey: ["A"],
  points: 1,
};

function renderQuiz() {
  return render(
    <MemoryRouter initialEntries={[`/quiz/attempt/${ATTEMPT_ID}`]}>
      <Routes>
        <Route path="/quiz/attempt/:attemptId" element={<QuizAttempt />} />
      </Routes>
    </MemoryRouter>
  );
}

beforeEach(() => {
  apiGetMock.mockReset();
  apiPostMock.mockReset();
  apiRequestMock.mockReset();
  apiPostMock.mockResolvedValue({
    status: "submitted",
    score: 0,
    maxScore: 1,
    message: "OK",
  });
  localStorage.clear();
});

afterEach(() => {
  Object.defineProperty(document, "hidden", {
    value: false,
    configurable: true,
    writable: true,
  });
});

describe("QuizAttempt — FIX-QUIZATTEMPT (questions: shape defensivo)", () => {
  it("renderiza OK cuando questions es un string JSON válido (lo parsea)", async () => {
    apiGetMock.mockResolvedValue({
      id: ATTEMPT_ID,
      attemptId: ATTEMPT_ID,
      quizId: "q-1",
      moduleId: "m-1",
      quizTitle: "Quiz FIX-QUIZATTEMPT",
      status: "in_progress",
      quizType: "practica",
      // FIX-QUIZATTEMPT — el back ya lo devuelve como array, pero el
      // front debe tolerar este shape también.
      questions: JSON.stringify([QUESTION_VALID]),
      answers: {},
      fullscreenOnStart: false,
      timerSegundos: null,
    });
    renderQuiz();
    // Si el parseo defensivo funciona, la pregunta se renderiza.
    await waitFor(() => {
      expect(screen.getByText("¿Cuál es la respuesta?")).toBeInTheDocument();
    });
  });

  it("degrada a [] (no crash) cuando questions es un string MALFORMADO", async () => {
    apiGetMock.mockResolvedValue({
      id: ATTEMPT_ID,
      attemptId: ATTEMPT_ID,
      quizId: "q-1",
      moduleId: "m-1",
      quizTitle: "Quiz FIX-QUIZATTEMPT",
      status: "in_progress",
      quizType: "practica",
      // JSON roto a propósito. Sin la guarda defensiva, `presentedQuestions`
      // devolvía el string y `questions.map` reventaba.
      questions: "{esto no es json valido",
      answers: {},
      fullscreenOnStart: false,
      timerSegundos: null,
    });
    // Si crashea, el test entero falla con TypeError. Lo capturamos
    // para que el mensaje sea claro.
    expect(() => renderQuiz()).not.toThrow();
    // El reproductor muestra el estado vacío ("Este intento no tiene
    // preguntas asignadas todavía") y no la pregunta inválida.
    await waitFor(() => {
      expect(
        screen.getByText(/no tiene preguntas asignadas/i),
      ).toBeInTheDocument();
    });
    expect(screen.queryByText("¿Cuál es la respuesta?")).not.toBeInTheDocument();
  });

  it("degrada a [] (no crash) cuando questions es un objeto (no array, no string)", async () => {
    apiGetMock.mockResolvedValue({
      id: ATTEMPT_ID,
      attemptId: ATTEMPT_ID,
      quizId: "q-1",
      moduleId: "m-1",
      quizTitle: "Quiz FIX-QUIZATTEMPT",
      status: "in_progress",
      quizType: "practica",
      // Shape inesperado: un objeto con `items` adentro. Sin la guarda,
      // `Array.isArray(raw)` es false y `typeof raw === "string"` es
      // false, así que caía a `[]`. La guarda preserva ese path.
      questions: { items: [QUESTION_VALID] },
      answers: {},
      fullscreenOnStart: false,
      timerSegundos: null,
    });
    expect(() => renderQuiz()).not.toThrow();
    await waitFor(() => {
      expect(
        screen.getByText(/no tiene preguntas asignadas/i),
      ).toBeInTheDocument();
    });
  });

  it("degrada a [] (no crash) cuando questions es null", async () => {
    apiGetMock.mockResolvedValue({
      id: ATTEMPT_ID,
      attemptId: ATTEMPT_ID,
      quizId: "q-1",
      moduleId: "m-1",
      quizTitle: "Quiz FIX-QUIZATTEMPT",
      status: "in_progress",
      quizType: "practica",
      questions: null,
      answers: {},
      fullscreenOnStart: false,
      timerSegundos: null,
    });
    expect(() => renderQuiz()).not.toThrow();
    await waitFor(() => {
      expect(
        screen.getByText(/no tiene preguntas asignadas/i),
      ).toBeInTheDocument();
    });
  });

  it("degrada a [] (no crash) cuando questions es undefined y quiz.questions es string malformado", async () => {
    apiGetMock.mockResolvedValue({
      id: ATTEMPT_ID,
      attemptId: ATTEMPT_ID,
      quizId: "q-1",
      moduleId: "m-1",
      quizTitle: "Quiz FIX-QUIZATTEMPT",
      status: "in_progress",
      quizType: "practica",
      questions: undefined,
      quiz: {
        title: "Quiz FIX-QUIZATTEMPT",
        questions: "esto tampoco es json",
      },
      answers: {},
      fullscreenOnStart: false,
      timerSegundos: null,
    });
    expect(() => renderQuiz()).not.toThrow();
    await waitFor(() => {
      expect(
        screen.getByText(/no tiene preguntas asignadas/i),
      ).toBeInTheDocument();
    });
  });

  it("happy path — questions como array se sigue renderizando", async () => {
    // Candado: la guarda defensiva no rompe el camino feliz.
    apiGetMock.mockResolvedValue({
      id: ATTEMPT_ID,
      attemptId: ATTEMPT_ID,
      quizId: "q-1",
      moduleId: "m-1",
      quizTitle: "Quiz FIX-QUIZATTEMPT",
      status: "in_progress",
      quizType: "practica",
      questions: [QUESTION_VALID],
      answers: {},
      fullscreenOnStart: false,
      timerSegundos: null,
    });
    renderQuiz();
    await waitFor(() => {
      expect(screen.getByText("¿Cuál es la respuesta?")).toBeInTheDocument();
    });
  });
});
