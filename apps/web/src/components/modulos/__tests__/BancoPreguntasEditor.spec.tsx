/**
 * Tests del editor del banco hand-authored (WO08): una fila = una pregunta,
 * reusando la lista accesible de WO06. Verifica armado de mc/tf, edición de
 * opciones y reordenamiento por teclado.
 */
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import BancoPreguntasEditor from "../BancoPreguntasEditor";
import type { Question } from "../../../generadoresV2/basic/types";

function Harness({ initial = [] as Question[] }: { initial?: Question[] }) {
  const [questions, setQuestions] = useState<Question[]>(initial);
  return (
    <>
      <BancoPreguntasEditor questions={questions} onChange={setQuestions} />
      <pre data-testid="state">{JSON.stringify(questions)}</pre>
    </>
  );
}

const state = () => JSON.parse(screen.getByTestId("state").textContent || "[]") as Question[];

describe("BancoPreguntasEditor", () => {
  it("agrega una pregunta mc por defecto con 2 opciones", async () => {
    const user = userEvent.setup();
    render(<Harness />);
    await user.click(screen.getByRole("button", { name: /agregar pregunta/i }));
    const qs = state();
    expect(qs).toHaveLength(1);
    expect(qs[0].type).toBe("mc");
    expect((qs[0] as { options: unknown[] }).options).toHaveLength(2);
  });

  it("edita enunciado y marca la opción correcta", async () => {
    const user = userEvent.setup();
    render(<Harness />);
    await user.click(screen.getByRole("button", { name: /agregar pregunta/i }));

    await user.type(screen.getByLabelText(/enunciado de la pregunta 1/i), "¿2+2?");
    // Marca la segunda opción como correcta.
    await user.click(screen.getByLabelText(/marcar opción 2 como correcta/i));
    await user.type(screen.getByLabelText(/texto de la opción 2/i), "4");

    const q = state()[0] as { prompt: string; options: { text: string; correct: boolean }[] };
    expect(q.prompt).toBe("¿2+2?");
    expect(q.options[1]).toMatchObject({ text: "4", correct: true });
    expect(q.options[0].correct).toBe(false);
  });

  it("convierte a verdadero/falso preservando el enunciado", async () => {
    const user = userEvent.setup();
    render(<Harness />);
    await user.click(screen.getByRole("button", { name: /agregar pregunta/i }));
    await user.type(screen.getByLabelText(/enunciado de la pregunta 1/i), "El sol es una estrella");

    await user.selectOptions(screen.getByLabelText(/tipo de la pregunta 1/i), "tf");
    const q = state()[0] as { type: string; prompt: string; answer: boolean };
    expect(q.type).toBe("tf");
    expect(q.prompt).toBe("El sol es una estrella");
    expect(q.answer).toBe(true);
  });

  it("reordena preguntas por teclado (↑/↓) sin drag-and-drop", async () => {
    const user = userEvent.setup();
    const initial: Question[] = [
      { id: "a", type: "tf", prompt: "A", answer: true, becauseTrue: "", becauseFalse: "", tags: [] },
      { id: "b", type: "tf", prompt: "B", answer: false, becauseTrue: "", becauseFalse: "", tags: [] },
    ];
    render(<Harness initial={initial} />);
    // Sube la pregunta 2 → queda primera.
    await user.click(screen.getByRole("button", { name: /subir pregunta de la posición 2/i }));
    expect(state().map((q) => q.id)).toEqual(["b", "a"]);
  });
});
