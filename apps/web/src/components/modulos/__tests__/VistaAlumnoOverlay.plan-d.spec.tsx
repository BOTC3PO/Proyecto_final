/**
 * PLAN-D §2 — VistaAlumnoOverlay respeta `modoPresentacion`/`timerSegundos`
 * del quiz, igual que la vista real (QuizAttempt.tsx).
 *
 * Cubre:
 *  - modoPresentacion "lista" (default) sigue mostrando todas las preguntas
 *    juntas (regresión cero sobre VistaAlumnoOverlay.spec.tsx).
 *  - "una_por_pantalla" muestra sólo 1 pregunta + nav con dots.
 *  - navegar con "Siguiente" cambia la pregunta visible.
 *  - "paginado" muestra `preguntasPorPagina` preguntas por página.
 *  - timerSegundos configurado muestra el Cronometro (ilustrativo).
 *  - sin timerSegundos no se muestra el Cronometro.
 */
import { describe, expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import VistaAlumnoOverlay from "../VistaAlumnoOverlay";
import type { ModuleQuiz, ModuleQuizQuestion } from "../../../domain/module/module.types";

function q(id: string, prompt: string): ModuleQuizQuestion {
  return {
    id,
    prompt,
    questionType: "input",
    answerKey: "x",
    options: [],
    explanation: "",
  };
}

const QUESTIONS = [q("q1", "Pregunta uno"), q("q2", "Pregunta dos"), q("q3", "Pregunta tres")];

function makeQuiz(overrides: Partial<ModuleQuiz>): ModuleQuiz {
  return {
    id: "quiz-1",
    title: "Quiz de prueba",
    mode: "manual",
    type: "practica",
    status: "draft",
    version: 1,
    visibility: "publico",
    questions: QUESTIONS,
    ...overrides,
  };
}

describe("VistaAlumnoOverlay — PLAN-D §2 modoPresentacion", () => {
  it("modo 'lista' (default) muestra todas las preguntas juntas, sin nav", () => {
    render(
      <VistaAlumnoOverlay open onClose={() => {}} title="t" theoryItems={[]} quizzes={[makeQuiz({})]} />,
    );
    expect(screen.getByText("Pregunta uno")).toBeInTheDocument();
    expect(screen.getByText("Pregunta dos")).toBeInTheDocument();
    expect(screen.getByText("Pregunta tres")).toBeInTheDocument();
    expect(screen.queryByTestId("vista-alumno-nav")).toBeNull();
  });

  it("modo 'una_por_pantalla' muestra sólo la primera pregunta y nav con 3 dots", () => {
    render(
      <VistaAlumnoOverlay
        open
        onClose={() => {}}
        title="t"
        theoryItems={[]}
        quizzes={[makeQuiz({ modoPresentacion: "una_por_pantalla" })]}
      />,
    );
    expect(screen.getByText("Pregunta uno")).toBeInTheDocument();
    expect(screen.queryByText("Pregunta dos")).toBeNull();
    expect(screen.queryByText("Pregunta tres")).toBeNull();
    const dots = screen.getAllByTestId(/vista-alumno-nav-dot-/);
    expect(dots).toHaveLength(3);
  });

  it("'Siguiente' navega a la próxima pregunta en modo una_por_pantalla", () => {
    render(
      <VistaAlumnoOverlay
        open
        onClose={() => {}}
        title="t"
        theoryItems={[]}
        quizzes={[makeQuiz({ modoPresentacion: "una_por_pantalla" })]}
      />,
    );
    fireEvent.click(screen.getByRole("button", { name: "Pregunta siguiente" }));
    expect(screen.getByText("Pregunta dos")).toBeInTheDocument();
    expect(screen.queryByText("Pregunta uno")).toBeNull();
  });

  it("modo 'paginado' con preguntasPorPagina=2 muestra 2 preguntas por página", () => {
    render(
      <VistaAlumnoOverlay
        open
        onClose={() => {}}
        title="t"
        theoryItems={[]}
        quizzes={[makeQuiz({ modoPresentacion: "paginado", preguntasPorPagina: 2 })]}
      />,
    );
    expect(screen.getByText("Pregunta uno")).toBeInTheDocument();
    expect(screen.getByText("Pregunta dos")).toBeInTheDocument();
    expect(screen.queryByText("Pregunta tres")).toBeNull();
    // 2 páginas (3 preguntas / 2 por página, redondeado arriba).
    const dots = screen.getAllByTestId(/vista-alumno-nav-dot-/);
    expect(dots).toHaveLength(2);
  });

  it("timerSegundos configurado muestra el Cronometro (ilustrativo)", () => {
    render(
      <VistaAlumnoOverlay
        open
        onClose={() => {}}
        title="t"
        theoryItems={[]}
        quizzes={[makeQuiz({ timerSegundos: 120 })]}
      />,
    );
    expect(screen.getByTestId("cronometro")).toBeInTheDocument();
  });

  it("sin timerSegundos no se muestra el Cronometro", () => {
    render(
      <VistaAlumnoOverlay open onClose={() => {}} title="t" theoryItems={[]} quizzes={[makeQuiz({})]} />,
    );
    expect(screen.queryByTestId("cronometro")).toBeNull();
  });

  it("verificar sigue evaluando localmente en modo una_por_pantalla y suma al progreso", () => {
    render(
      <VistaAlumnoOverlay
        open
        onClose={() => {}}
        title="t"
        theoryItems={[]}
        quizzes={[makeQuiz({ modoPresentacion: "una_por_pantalla" })]}
      />,
    );
    const input = screen.getByLabelText("Respuesta pregunta 1") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "x" } });
    fireEvent.click(screen.getByRole("button", { name: /^Verificar$/i }));
    expect(screen.getByText(/Correcto/)).toBeInTheDocument();
    expect(screen.getByText(/1 de 3 verificadas/)).toBeInTheDocument();
  });
});
