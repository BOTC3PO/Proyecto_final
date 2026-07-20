/**
 * PLAN-CUESTIONARIOS — página "Cuestionarios" (/cuestionarios).
 *
 * Verifica que la lista muestra los quizzes sueltos y los de módulos
 * propios (scope=todos) con sus datos enriquecidos, que cada tarjeta
 * abre el editor Tiza con `?quizId=…&returnTo=/cuestionarios`, y que
 * "+ Nuevo cuestionario" crea un quiz suelto y navega al editor.
 */

import { describe, expect, it, vi, beforeEach, afterEach } from "vitest";
import { act, render, screen, fireEvent, waitFor, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

const navigateMock = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<typeof import("react-router-dom")>(
    "react-router-dom",
  );
  return { ...actual, useNavigate: () => navigateMock };
});

const listarCuestionarios = vi.fn();
const crearQuizSuelto = vi.fn();
const deleteQuiz = vi.fn();
const restaurarCuestionario = vi.fn();
vi.mock("../../domain/quiz/quizPreguntasApi", () => ({
  listarCuestionarios: (...a: unknown[]) => listarCuestionarios(...a),
  crearQuizSuelto: (...a: unknown[]) => crearQuizSuelto(...a),
  deleteQuiz: (...a: unknown[]) => deleteQuiz(...a),
  restaurarCuestionario: (...a: unknown[]) => restaurarCuestionario(...a),
}));

const SUELTO = {
  id: "quiz-suelto-1",
  title: "Repaso fracciones",
  updatedAt: "2026-07-01T00:00:00.000Z",
  type: "practica",
  materia: "matematicas",
  cantidadPreguntas: 3,
  moduleId: null,
  moduleTitle: null,
};

const DE_MODULO = {
  id: "quiz-mod-1",
  title: "Evaluación unidad 2",
  updatedAt: "2026-07-02T00:00:00.000Z",
  type: "formal",
  materia: "historia",
  cantidadPreguntas: 0,
  moduleId: "mod-9",
  moduleTitle: "Revolución de Mayo",
};

async function renderIndex() {
  const { default: CuestionariosIndex } = await import("../CuestionariosIndex");
  return render(
    <MemoryRouter initialEntries={["/cuestionarios"]}>
      <CuestionariosIndex />
    </MemoryRouter>,
  );
}

describe("CuestionariosIndex (PLAN-CUESTIONARIOS)", () => {
  beforeEach(() => {
    navigateMock.mockReset();
    listarCuestionarios.mockReset();
    crearQuizSuelto.mockReset();
    deleteQuiz.mockReset();
    restaurarCuestionario.mockReset();
  });

  afterEach(() => {
    cleanup();
  });

  it("lista sueltos y de módulo con sus datos, y abre cada uno en Tiza", async () => {
    listarCuestionarios.mockResolvedValue([SUELTO, DE_MODULO]);

    await act(async () => {
      await renderIndex();
    });

    await screen.findByText("Repaso fracciones");

    // Suelto: badge "sin módulo" + cantidad de preguntas.
    expect(screen.getByTestId("cuestionario-suelto-badge")).toBeTruthy();
    expect(screen.getByText("3 preguntas")).toBeTruthy();

    // De módulo: link al editor del módulo + estado sin preguntas.
    const moduloLink = screen.getByTestId("cuestionario-modulo-link");
    expect(moduloLink.textContent).toContain("Revolución de Mayo");
    expect(moduloLink.getAttribute("href")).toBe("/modulos/mod-9/editar");
    expect(screen.getByText("Sin preguntas")).toBeTruthy();

    // Cada tarjeta abre el editor Tiza con quizId + returnTo.
    const [linkSuelto] = screen.getAllByTestId("cuestionario-card-link");
    expect(linkSuelto.getAttribute("href")).toContain("quizId=quiz-suelto-1");
    expect(linkSuelto.getAttribute("href")).toContain(
      `returnTo=${encodeURIComponent("/cuestionarios")}`,
    );
  });

  it("'+ Nuevo cuestionario' crea un quiz suelto y navega al editor Tiza", async () => {
    listarCuestionarios.mockResolvedValue([]);
    crearQuizSuelto.mockResolvedValue({ id: "quiz-nuevo-7" });

    await act(async () => {
      await renderIndex();
    });

    await act(async () => {
      fireEvent.click(screen.getByTestId("nuevo-cuestionario"));
    });

    await waitFor(() => expect(crearQuizSuelto).toHaveBeenCalled());
    expect(navigateMock).toHaveBeenCalledWith(
      expect.stringContaining("quizId=quiz-nuevo-7"),
    );
    expect(navigateMock.mock.calls[0][0]).toContain("/plantillas/nueva");
  });

  it("con la lista vacía muestra el empty-state con CTA", async () => {
    listarCuestionarios.mockResolvedValue([]);

    await act(async () => {
      await renderIndex();
    });

    expect(await screen.findByText("Todavía no creaste cuestionarios.")).toBeTruthy();
    expect(screen.getByText("Crear el primero →")).toBeTruthy();
  });

  it("'Archivar' pide confirmación, llama deleteQuiz y saca el ítem de la lista activa", async () => {
    listarCuestionarios.mockResolvedValue([SUELTO]);
    deleteQuiz.mockResolvedValue(undefined);
    // happy-dom no expone window.confirm; lo definimos manualmente.
    const confirmSpy = vi.fn().mockReturnValue(true);
    (globalThis as { confirm?: unknown }).confirm = confirmSpy;

    await act(async () => {
      await renderIndex();
    });

    await screen.findByText("Repaso fracciones");

    await act(async () => {
      fireEvent.click(screen.getByTestId("cuestionario-archivar"));
    });

    expect(confirmSpy).toHaveBeenCalled();
    await waitFor(() => expect(deleteQuiz).toHaveBeenCalledWith("quiz-suelto-1"));
    await waitFor(() => expect(screen.queryByText("Repaso fracciones")).toBeNull());
  });

  it("cancelar la confirmación NO llama deleteQuiz ni saca el ítem", async () => {
    listarCuestionarios.mockResolvedValue([SUELTO]);
    // happy-dom no expone window.confirm; lo definimos manualmente.
    const confirmSpy = vi.fn().mockReturnValue(false);
    (globalThis as { confirm?: unknown }).confirm = confirmSpy;

    await act(async () => {
      await renderIndex();
    });

    await screen.findByText("Repaso fracciones");

    await act(async () => {
      fireEvent.click(screen.getByTestId("cuestionario-archivar"));
    });

    expect(deleteQuiz).not.toHaveBeenCalled();
    expect(screen.getByText("Repaso fracciones")).toBeTruthy();
  });

  it("'Ver archivados' pide la lista con archivados:true y 'Restaurar' llama restaurarCuestionario sin confirmar", async () => {
    listarCuestionarios.mockResolvedValue([SUELTO]);
    restaurarCuestionario.mockResolvedValue(undefined);
    // happy-dom no expone window.confirm; lo definimos manualmente.
    const confirmSpy = vi.fn().mockReturnValue(true);
    (globalThis as { confirm?: unknown }).confirm = confirmSpy;

    await act(async () => {
      await renderIndex();
    });
    await screen.findByText("Repaso fracciones");

    listarCuestionarios.mockResolvedValue([SUELTO]);
    await act(async () => {
      fireEvent.click(screen.getByText("Ver archivados"));
    });

    await waitFor(() =>
      expect(listarCuestionarios).toHaveBeenLastCalledWith({ archivados: true }),
    );
    await screen.findByTestId("cuestionario-restaurar");

    await act(async () => {
      fireEvent.click(screen.getByTestId("cuestionario-restaurar"));
    });

    // Restaurar es reversible/no destructivo: no debe pedir confirmación.
    expect(confirmSpy).not.toHaveBeenCalled();
    await waitFor(() => expect(restaurarCuestionario).toHaveBeenCalledWith("quiz-suelto-1"));
    await waitFor(() => expect(screen.queryByText("Repaso fracciones")).toBeNull());
  });
});
