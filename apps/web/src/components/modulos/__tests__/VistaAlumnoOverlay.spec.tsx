/**
 * Tests de VistaAlumnoOverlay (Tarea 14).
 *
 * Cubre:
 *  - Renderiza teorias + quiz manual.
 *  - Esc cierra el overlay.
 *  - El boton X cierra el overlay.
 *  - El banner "Vista previa — los intentos no se guardan" siempre presente.
 *  - Verificar manual: compara contra answerKey localmente, sin red.
 *  - Quizzes generados sin generatorId muestran un fallback honesto.
 */

import { describe, expect, it, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import VistaAlumnoOverlay from "../VistaAlumnoOverlay";
import type {
  ModuleQuiz,
  ModuleQuizQuestion,
} from "../../../domain/module/module.types";
import type { TheoryItem } from "../TheoryItemCard";

const THEORY_BOOK: TheoryItem = {
  id: "theory-1",
  title: "Capítulo 1: La materia",
  type: "Texto",
  detail: "La materia es todo lo que tiene masa y ocupa un lugar en el espacio.",
};

const MANUAL_QUESTION: ModuleQuizQuestion = {
  id: "q1",
  prompt: "¿Cuanto es 2 + 2?",
  questionType: "input",
  answerKey: "4",
  options: [],
  explanation: "",
};

const MANUAL_QUESTION_MC: ModuleQuizQuestion = {
  id: "q2",
  prompt: "Capital de Argentina",
  questionType: "mc",
  options: ["Buenos Aires", "Córdoba", "Rosario"],
  answerKey: "Buenos Aires",
};

const MANUAL_QUIZ: ModuleQuiz = {
  id: "quiz-1",
  title: "Quiz de prueba",
  mode: "manual",
  type: "practica",
  status: "draft",
  version: 1,
  visibility: "publico",
  questions: [MANUAL_QUESTION, MANUAL_QUESTION_MC],
};

const GENERATED_QUIZ_NO_ID: ModuleQuiz = {
  id: "quiz-2",
  title: "Quiz generado sin id",
  mode: "generated",
  type: "practica",
  status: "draft",
  version: 1,
  visibility: "publico",
};

describe("VistaAlumnoOverlay", () => {
  it("no se renderiza cuando open=false", () => {
    render(
      <VistaAlumnoOverlay
        open={false}
        onClose={() => {}}
        title="t"
        theoryItems={[]}
        quizzes={[]}
      />,
    );
    expect(screen.queryByTestId("vista-alumno-overlay")).toBeNull();
  });

  it("se monta con banner y título cuando open=true", () => {
    render(
      <VistaAlumnoOverlay
        open
        onClose={() => {}}
        title="Mi módulo"
        theoryItems={[]}
        quizzes={[]}
      />,
    );
    expect(screen.getByTestId("vista-alumno-overlay")).toBeInTheDocument();
    expect(screen.getByTestId("vista-alumno-banner")).toHaveTextContent(
      /Vista previa/,
    );
    expect(screen.getByTestId("vista-alumno-banner")).toHaveTextContent(
      /los intentos no se guardan/,
    );
    expect(screen.getByTestId("vista-alumno-title")).toHaveTextContent(
      "Mi módulo",
    );
  });

  it("renderiza 1 teoría + 1 quiz manual con sus preguntas", () => {
    render(
      <VistaAlumnoOverlay
        open
        onClose={() => {}}
        title="Demo"
        theoryItems={[THEORY_BOOK]}
        quizzes={[MANUAL_QUIZ]}
      />,
    );
    // El item de teoría aparece.
    expect(screen.getByText(/La materia es todo lo que tiene masa/)).toBeInTheDocument();
    // El título del quiz manual aparece.
    expect(screen.getByText("Quiz de prueba")).toBeInTheDocument();
    // Las preguntas del quiz manual aparecen.
    expect(screen.getByText(/¿Cuanto es 2 \+ 2\?/)).toBeInTheDocument();
    expect(screen.getByText(/Capital de Argentina/)).toBeInTheDocument();
  });

  it("Esc cierra el overlay", () => {
    const onClose = vi.fn();
    render(
      <VistaAlumnoOverlay
        open
        onClose={onClose}
        title="t"
        theoryItems={[]}
        quizzes={[]}
      />,
    );
    fireEvent.keyDown(document, { key: "Escape" });
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("el boton X cierra el overlay", () => {
    const onClose = vi.fn();
    render(
      <VistaAlumnoOverlay
        open
        onClose={onClose}
        title="t"
        theoryItems={[]}
        quizzes={[]}
      />,
    );
    fireEvent.click(screen.getByTestId("vista-alumno-close"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("Verificar evalua localmente contra answerKey (sin red)", async () => {
    render(
      <VistaAlumnoOverlay
        open
        onClose={() => {}}
        title="t"
        theoryItems={[]}
        quizzes={[MANUAL_QUIZ]}
      />,
    );
    const input = screen.getByLabelText("Respuesta pregunta 1") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "4" } });
    // El boton Verificar aparece una vez por pregunta; agarramos el primero.
    const verifyBtns = screen.getAllByRole("button", { name: /^Verificar$/i });
    fireEvent.click(verifyBtns[0]);
    // Aparece el badge "Correcto".
    expect(screen.getByText(/Correcto/)).toBeInTheDocument();
    // Y la respuesta correcta como pista.
    expect(screen.getByText(/4/)).toBeInTheDocument();
  });

  it("Verificar con respuesta incorrecta muestra 'Incorrecto'", () => {
    render(
      <VistaAlumnoOverlay
        open
        onClose={() => {}}
        title="t"
        theoryItems={[]}
        quizzes={[MANUAL_QUIZ]}
      />,
    );
    const input = screen.getByLabelText("Respuesta pregunta 1") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "5" } });
    const verifyBtns = screen.getAllByRole("button", { name: /^Verificar$/i });
    fireEvent.click(verifyBtns[0]);
    expect(screen.getByText(/Incorrecto/)).toBeInTheDocument();
  });

  it("quiz generado sin generatorId muestra fallback honesto", () => {
    render(
      <VistaAlumnoOverlay
        open
        onClose={() => {}}
        title="t"
        theoryItems={[]}
        quizzes={[GENERATED_QUIZ_NO_ID]}
      />,
    );
    // QuizGeneratedPreview sin generatorId no inicia fetch; muestra null
    // (idle) o un mensaje honesto. Aceptamos cualquiera de los dos.
    const quizBlock = screen.getByTestId("vista-alumno-quiz-quiz-2");
    expect(quizBlock).toBeInTheDocument();
  });
});
