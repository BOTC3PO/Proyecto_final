/**
 * WO-2 / F4-03 — Editor de cuestionario por posiciones montado en el host.
 * Cubre los criterios: múltiples posiciones con múltiples variantes, edición de
 * tipo/tema/puntaje, mezcla de orígenes, migración del modelo viejo, y montaje
 * del editor de pregunta de WO-1 para variantes `plantilla`.
 */
import { describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import type { ModuleQuiz } from "../../../domain/module/module.types";
import { parseCuestionario } from "../../../domain/quiz/posiciones";
import QuizPosicionesEditor from "../QuizPosicionesEditor";
import type { PlantillaIO } from "../VarianteEditor";

function baseQuiz(overrides: Partial<ModuleQuiz> = {}): ModuleQuiz {
  return {
    id: "quiz-1",
    title: "Quiz",
    type: "formal",
    status: "draft",
    version: 1,
    visibility: "publico",
    mode: "manual",
    ...overrides,
  };
}

/** Harness controlado: aplica los patches a `quiz.posiciones` como el host real. */
function Harness({
  initial,
  io,
}: {
  initial: ModuleQuiz;
  io?: PlantillaIO;
}) {
  const [quiz, setQuiz] = useState<ModuleQuiz>(initial);
  return (
    <>
      <QuizPosicionesEditor
        quiz={quiz}
        onChange={(patch) => setQuiz((q) => ({ ...q, ...patch }))}
        {...(io ? { plantillaIO: io } : {})}
      />
      <pre data-testid="posiciones-json">
        {JSON.stringify(quiz.posiciones ?? null)}
      </pre>
    </>
  );
}

const posicionesJson = () =>
  JSON.parse(screen.getByTestId("posiciones-json").textContent || "null");

describe("QuizPosicionesEditor", () => {
  it("migra un quiz viejo (questions) y muestra una posición por pregunta", () => {
    render(
      <Harness
        initial={baseQuiz({
          questions: [
            { id: "q1", prompt: "¿Capital de Francia?" },
            { id: "q2", prompt: "¿Capital de Italia?" },
          ],
        })}
      />,
    );
    expect(
      screen.getByRole("button", { name: /^Posición 1\./ }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /^Posición 2\./ }),
    ).toBeInTheDocument();
    // Aviso de migración lazy.
    expect(screen.getByText(/migrado del modelo anterior/i)).toBeInTheDocument();
  });

  it("crea múltiples posiciones, cada una con múltiples variantes", async () => {
    const user = userEvent.setup();
    render(<Harness initial={baseQuiz()} />);

    // Empty state → agregar la primera posición.
    await user.click(
      screen.getByRole("button", { name: /Añadir la primera posición/i }),
    );
    // Agregar una segunda posición (botón global al final).
    await user.click(
      screen.getByRole("button", { name: /Añadir una posición al final/i }),
    );

    let c = posicionesJson();
    expect(c.posiciones).toHaveLength(2);

    // Activar la posición 1 y agregar una variante (la promueve a pool).
    await user.click(screen.getByRole("button", { name: /^Posición 1\./ }));
    await user.click(
      screen.getByRole("button", { name: /Añadir variante a la posición 1/i }),
    );

    c = posicionesJson();
    expect(c.posiciones[0].variantes).toHaveLength(2);
    expect(c.posiciones[0].tipo).toBe("obligatorio");
  });

  it("permite editar tipo, tema y puntaje por posición", async () => {
    const user = userEvent.setup();
    render(
      <Harness
        initial={baseQuiz({ questions: [{ id: "q1", prompt: "Una pregunta" }] })}
      />,
    );

    // Tipo.
    await user.selectOptions(
      screen.getByLabelText("Tipo de la posición 1"),
      "relleno",
    );
    expect(posicionesJson().posiciones[0].tipo).toBe("relleno");

    // Tema nuevo + asignación.
    await user.type(screen.getByLabelText("Nombre del nuevo tema"), "Geografía");
    await user.click(screen.getByRole("button", { name: "+ Tema" }));
    await user.selectOptions(
      screen.getByLabelText("Tema de la posición 1"),
      screen.getByRole("option", { name: "Geografía" }),
    );
    expect(posicionesJson().posiciones[0].temaPrincipal).toBe("geografia");

    // Puntaje.
    const puntaje = screen.getByLabelText("Puntaje de la posición 1");
    await user.clear(puntaje);
    await user.type(puntaje, "4");
    expect(posicionesJson().posiciones[0].puntaje).toBe(4);
  });

  it("monta el editor de pregunta de WO-1 para una variante de plantilla", async () => {
    const user = userEvent.setup();
    const io: PlantillaIO = {
      load: vi.fn(async () => ({
        codigoDsl: 'enunciado: "¿Cuánto es 2+2?"\nrespuesta: 4\n',
        version: 1,
      })),
      save: vi.fn(async () => {}),
    };
    const cuestionario = parseCuestionario({
      temas: [{ id: "general", nombre: "General" }],
      posiciones: [
        {
          tipo: "fijo",
          temaPrincipal: "general",
          puntaje: 1,
          variantes: [
            {
              letra: "a",
              origen: { origen: "plantilla", plantillaId: "pl-7", plantillaVersion: 1 },
            },
          ],
        },
      ],
    });

    render(
      <Harness initial={baseQuiz({ posiciones: cuestionario })} io={io} />,
    );

    // Expandir la posición para que `renderVarianteEditor` monte el editor.
    await user.click(screen.getByRole("button", { name: /^Posición 1\./ }));

    // El editor de pregunta de WO-1 se monta tras cargar el DSL.
    await waitFor(() =>
      expect(io.load).toHaveBeenCalledWith("pl-7"),
    );
    await waitFor(() =>
      expect(screen.getByTestId("vblang-schema-editor")).toBeInTheDocument(),
    );
  });

  it("mezcla orígenes: cambia una variante de banco a generador", async () => {
    const user = userEvent.setup();
    render(
      <Harness
        initial={baseQuiz({ questions: [{ id: "q1", prompt: "Una pregunta" }] })}
      />,
    );
    await user.click(screen.getByRole("button", { name: /^Posición 1\./ }));

    const origenSelect = await screen.findByLabelText(
      /Origen de la variante a de la posición 1/i,
    );
    await user.selectOptions(origenSelect, "generador");

    const c = posicionesJson();
    expect(c.posiciones[0].variantes[0].origen.origen).toBe("generador");
    // El selector de origen refleja el cambio (el picker de generador queda montado).
    expect((origenSelect as HTMLSelectElement).value).toBe("generador");
  });
});
