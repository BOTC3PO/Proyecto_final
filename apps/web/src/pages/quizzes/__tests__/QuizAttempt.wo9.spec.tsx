/**
 * WO-9 — Tests del modo de presentación en el reproductor del alumno
 * (`QuizAttempt`).
 *
 * Cubre:
 *  - Modo `lista` (default): render idéntico al comportamiento previo.
 *  - Modo `una_por_pantalla`: una pregunta a la vez, navegación prev/next
 *    con dots, no re-randomiza, no pierde respuestas.
 *  - Modo `paginado`: N preguntas por página, navegación de páginas.
 *  - Las preguntas vienen del mismo `presentedQuestions` memoizado: navegar
 *    no cambia el array, solo el subconjunto visible.
 *  - Default `modoPresentacion === undefined` (settings viejos) → cae a
 *    `lista` sin cambios visibles.
 */
import { describe, expect, it, vi, beforeEach } from "vitest";
import { act, fireEvent, render, screen, waitFor, within } from "@testing-library/react";
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
    useParams: () => ({ attemptId: "test-attempt-wo9" }),
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

const ATTEMPT_ID = "test-attempt-wo9";

function buildQuestions(n: number) {
  // Cada prompt tiene un texto ÚNICO para evitar coincidencias con
  // el label "Pregunta N" del render. Sin esto, `getByText` falla
  // con "Found multiple elements".
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
    quizTitle: "Quiz WO-9",
    status: "in_progress",
    quizType: "practica",
    questions: buildQuestions(5),
    answers: {},
    // Fullscreen off para no entrar al gate de "Empezar evaluación".
    fullscreenOnStart: false,
    timerSegundos: null,
    ...overrides,
  });
}

beforeEach(() => {
  apiGetMock.mockReset();
  apiPostMock.mockReset();
  apiRequestMock.mockReset();
  apiPostMock.mockResolvedValue({
    status: "submitted",
    score: 0,
    maxScore: 0,
    message: "OK",
  });
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

describe("WO-9 QuizAttempt — default (modo lista)", () => {
  it("con settings viejos (sin modoPresentacion) renderiza en modo lista y muestra todas las preguntas", async () => {
    mockAttemptLoad(); // sin modoPresentacion
    renderQuizAttempt();
    const lista = await waitFor(() => screen.getByTestId("quiz-presentation"));
    expect(lista.getAttribute("data-modo-presentacion")).toBe("lista");
    // Las 5 preguntas están visibles (sus prompts).
    for (let i = 0; i < 5; i++) {
      expect(screen.getByText(`__prompt_q${i}__`)).toBeInTheDocument();
    }
    // No hay nav (sólo se muestra en modos no-lista).
    expect(screen.queryByTestId("quiz-nav")).not.toBeInTheDocument();
  });

  it("modoPresentacion='lista' explícito se comporta igual", async () => {
    mockAttemptLoad({ modoPresentacion: "lista" });
    renderQuizAttempt();
    const lista = await waitFor(() => screen.getByTestId("quiz-presentation"));
    expect(lista.getAttribute("data-modo-presentacion")).toBe("lista");
    expect(screen.getByText("__prompt_q0__")).toBeInTheDocument();
    expect(screen.getByText("__prompt_q4__")).toBeInTheDocument();
  });
});

describe("WO-9 QuizAttempt — modo una_por_pantalla", () => {
  it("muestra sólo la primera pregunta y la nav con dots", async () => {
    mockAttemptLoad({ modoPresentacion: "una_por_pantalla" });
    renderQuizAttempt();
    const slide = await waitFor(() => screen.getByTestId("quiz-slide"));
    expect(slide.getAttribute("data-slide-index")).toBe("0");
    // La primera pregunta está visible.
    expect(within(slide).getByText("__prompt_q0__")).toBeInTheDocument();
    // Las demás NO están en el slide.
    expect(within(slide).queryByText("__prompt_q1__")).not.toBeInTheDocument();
    // Hay 5 dots (uno por pregunta).
    const dotsContainer = await waitFor(() => screen.getByTestId("quiz-nav-dots"));
    const dots = within(dotsContainer).getAllByRole("tab");
    expect(dots).toHaveLength(5);
  });

  it("navegar prev/next cambia el slide sin re-randomizar (mismo orden)", async () => {
    mockAttemptLoad({ modoPresentacion: "una_por_pantalla" });
    renderQuizAttempt();
    let slide = await waitFor(() => screen.getByTestId("quiz-slide"));
    expect(within(slide).getByText("__prompt_q0__")).toBeInTheDocument();

    // Avanzar.
    await act(async () => {
      fireEvent.click(screen.getByTestId("quiz-nav-next"));
    });
    slide = screen.getByTestId("quiz-slide");
    expect(slide.getAttribute("data-slide-index")).toBe("1");
    expect(within(slide).getByText("__prompt_q1__")).toBeInTheDocument();

    // Avanzar 3 veces más: total slide 4.
    for (let i = 0; i < 3; i++) {
      await act(async () => {
        fireEvent.click(screen.getByTestId("quiz-nav-next"));
      });
    }
    slide = screen.getByTestId("quiz-slide");
    expect(slide.getAttribute("data-slide-index")).toBe("4");
    expect(within(slide).getByText("__prompt_q4__")).toBeInTheDocument();

    // Volver.
    await act(async () => {
      fireEvent.click(screen.getByTestId("quiz-nav-prev"));
    });
    slide = screen.getByTestId("quiz-slide");
    expect(slide.getAttribute("data-slide-index")).toBe("3");
    expect(within(slide).getByText("__prompt_q3__")).toBeInTheDocument();
  });

  it("responder una pregunta, navegar a otra y volver: la respuesta persiste", async () => {
    mockAttemptLoad({ modoPresentacion: "una_por_pantalla" });
    renderQuizAttempt();
    const slide = await waitFor(() => screen.getByTestId("quiz-slide"));

    // Responder "Verdadero" en la pregunta 1.
    const radios = within(slide).getAllByRole("radio");
    await act(async () => {
      fireEvent.click(radios[0]); // "Verdadero"
    });

    // Navegar a la pregunta 3.
    const dots = within(screen.getByTestId("quiz-nav-dots")).getAllByRole("tab");
    await act(async () => {
      fireEvent.click(dots[2]);
    });
    let newSlide = screen.getByTestId("quiz-slide");
    expect(within(newSlide).getByText("__prompt_q2__")).toBeInTheDocument();

    // Volver a la pregunta 1.
    await act(async () => {
      fireEvent.click(dots[0]);
    });
    newSlide = screen.getByTestId("quiz-slide");
    // La respuesta sigue marcada.
    const reloadedRadios = within(newSlide).getAllByRole("radio");
    expect(reloadedRadios[0]).toBeChecked();
  });
});

describe("WO-9 QuizAttempt — modo paginado", () => {
  it("con preguntasPorPagina=2 muestra 2 preguntas por página", async () => {
    mockAttemptLoad({
      modoPresentacion: "paginado",
      preguntasPorPagina: 2,
    });
    renderQuizAttempt();
    const list = await waitFor(() => screen.getByTestId("quiz-questions-list"));
    // Página 1: preguntas 1 y 2.
    expect(within(list).getByText("__prompt_q0__")).toBeInTheDocument();
    expect(within(list).getByText("__prompt_q1__")).toBeInTheDocument();
    expect(within(list).queryByText("__prompt_q2__")).not.toBeInTheDocument();

    // 3 páginas (5 preguntas / 2 por página = ceil = 3).
    const pagesContainer = await waitFor(() => screen.getByTestId("quiz-nav-pages"));
    const pages = within(pagesContainer).getAllByRole("tab");
    expect(pages).toHaveLength(3);
  });

  it("navegar entre páginas cambia el subconjunto visible", async () => {
    mockAttemptLoad({
      modoPresentacion: "paginado",
      preguntasPorPagina: 2,
    });
    renderQuizAttempt();
    const list = await waitFor(() => screen.getByTestId("quiz-questions-list"));
    expect(within(list).getByText("__prompt_q0__")).toBeInTheDocument();

    // Ir a página 3.
    const pagesContainer = await waitFor(() => screen.getByTestId("quiz-nav-pages"));
    const pages = within(pagesContainer).getAllByRole("tab");
    await act(async () => {
      fireEvent.click(pages[2]);
    });
    const newList = screen.getByTestId("quiz-questions-list");
    // Página 3 (offset 4): pregunta 5.
    expect(within(newList).getByText("__prompt_q4__")).toBeInTheDocument();
    expect(within(newList).queryByText("__prompt_q0__")).not.toBeInTheDocument();
  });
});

describe("WO-9 QuizAttempt — invariantes", () => {
  it("la lista total de preguntas NO cambia al navegar (no re-randomiza)", async () => {
    // 5 preguntas, modo slide. El orden de los prompts es estable entre
    // navegaciones (q0 → q1 → ... → q4), lo que confirma que no se
    // re-randomiza: el array `presentedQuestions` no cambia, solo el
    // cursor de slideIndex.
    mockAttemptLoad({ modoPresentacion: "una_por_pantalla" });
    renderQuizAttempt();
    const dotsContainer = await waitFor(() => screen.getByTestId("quiz-nav-dots"));
    const dots = within(dotsContainer).getAllByRole("tab");
    expect(dots).toHaveLength(5);

    for (let i = 0; i < 5; i++) {
      await act(async () => {
        fireEvent.click(dots[i]);
      });
      const slide = screen.getByTestId("quiz-slide");
      expect(within(slide).getByText(`__prompt_q${i}__`)).toBeInTheDocument();
    }
  });
});
