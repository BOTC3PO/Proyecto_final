/**
 * Vista previa real para cuestionarios Tiza nativos (mejora #4 de la
 * auditoría de editores/módulos). Antes, "Vista previa" en ModuloEditor
 * usaba `QuizGeneratedPreview` con `generatorId=""` para estos quizzes
 * (el caso normal hoy) y sólo mostraba un texto genérico — nunca las
 * preguntas reales.
 *
 * Cubre:
 *  (a) Con 2 preguntas válidas, genera y muestra sus 2 enunciados.
 *  (b) Sin preguntas, muestra el mensaje "sin ejemplos".
 *  (c) Una plantilla que falla al cargar se omite; el resto se muestra igual.
 */
import { describe, expect, it, vi, afterEach } from "vitest";
import { render, screen, cleanup, waitFor } from "@testing-library/react";

const { mockGetQuizPreguntas, mockGetPlantilla } = vi.hoisted(() => ({
  mockGetQuizPreguntas: vi.fn(),
  mockGetPlantilla: vi.fn(),
}));

vi.mock("../../../domain/quiz/quizPreguntasApi", () => ({
  getQuizPreguntas: mockGetQuizPreguntas,
}));

vi.mock("../../../domain/vblang/plantillaApi", () => ({
  getPlantilla: mockGetPlantilla,
}));

import QuizPreguntasNativasPreview from "../QuizPreguntasNativasPreview";

const dslCapital = `enunciado: "¿Cuál es la capital de Francia?"
respuesta: "París"
`;
const dslColor = `enunciado: "¿De qué color es el cielo?"
respuesta: "Azul"
`;

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

describe("QuizPreguntasNativasPreview", () => {
  it("(a) genera y muestra los enunciados reales de las preguntas nativas", async () => {
    mockGetQuizPreguntas.mockResolvedValue({
      version: 1,
      cantidadGlobal: 2,
      preguntas: [
        { plantillaId: "p1", tipo: "obligatoria" },
        { plantillaId: "p2", tipo: "obligatoria" },
      ],
    });
    mockGetPlantilla.mockImplementation((id: string) =>
      Promise.resolve({ id, codigoDsl: id === "p1" ? dslCapital : dslColor }),
    );

    render(<QuizPreguntasNativasPreview quizId="quiz-1" />);

    await waitFor(() => {
      expect(screen.getByText(/¿Cuál es la capital de Francia\?/)).toBeInTheDocument();
    });
    expect(screen.getByText(/¿De qué color es el cielo\?/)).toBeInTheDocument();
  });

  it("(b) sin preguntas muestra el mensaje de 'sin ejemplos'", async () => {
    mockGetQuizPreguntas.mockResolvedValue({
      version: 1,
      cantidadGlobal: 0,
      preguntas: [],
    });

    render(<QuizPreguntasNativasPreview quizId="quiz-vacio" />);

    await waitFor(() => {
      expect(mockGetQuizPreguntas).toHaveBeenCalledWith("quiz-vacio");
    });
    expect(await screen.findByText(/sin ejemplos/i)).toBeInTheDocument();
  });

  it("(c) una plantilla rota se omite; las demás igual se muestran", async () => {
    mockGetQuizPreguntas.mockResolvedValue({
      version: 1,
      cantidadGlobal: 2,
      preguntas: [
        { plantillaId: "rota", tipo: "obligatoria" },
        { plantillaId: "p2", tipo: "obligatoria" },
      ],
    });
    mockGetPlantilla.mockImplementation((id: string) =>
      id === "rota"
        ? Promise.reject(new Error("404"))
        : Promise.resolve({ id, codigoDsl: dslColor }),
    );

    render(<QuizPreguntasNativasPreview quizId="quiz-2" />);

    await waitFor(() => {
      expect(screen.getByText(/¿De qué color es el cielo\?/)).toBeInTheDocument();
    });
    // Sólo un ítem: el de "rota" se omitió sin tirar abajo el resto.
    expect(screen.getAllByRole("listitem")).toHaveLength(1);
  });
});
