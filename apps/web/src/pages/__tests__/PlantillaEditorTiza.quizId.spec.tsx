/**
 * Etapa 2 (Tiza — preguntas nativas) — wiring de `quizId` en
 * `PlantillaEditorTiza.tsx`.
 *
 * Cubre:
 *  - Con `quizId`: carga el `CuestionarioPreguntas` del quiz, hidrata el
 *    rail con sus preguntas existentes + una nueva en blanco, y muestra el
 *    campo `cantidadGlobal`.
 *  - El aviso inline de validación aparece cuando los límites no alcanzan.
 *  - Sin `quizId` (standalone): NUNCA llama a `getQuizPreguntas`, no
 *    muestra el campo `cantidadGlobal` — comportamiento previo intacto.
 *
 * Nota: sin fake timers acá a propósito — `waitFor` pollea con timers
 * reales; mezclarlo con `vi.useFakeTimers()` (usado por el smoke test del
 * editor clásico para el debounce de compilación) hace que `waitFor` nunca
 * resuelva. Estos tests no dependen del debounce de compilación.
 */
import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

const getPlantillaMock = vi.fn();
vi.mock("../../domain/vblang/plantillaApi", () => ({
  getPlantilla: (...args: unknown[]) => getPlantillaMock(...args),
  createPlantilla: vi.fn(),
  updatePlantilla: vi.fn(),
  DslApiError: class extends Error {
    line?: number;
    col?: number;
  },
}));

const getQuizPreguntasMock = vi.fn();
const saveQuizPreguntasMock = vi.fn();
vi.mock("../../domain/quiz/quizPreguntasApi", () => ({
  getQuizPreguntas: (...args: unknown[]) => getQuizPreguntasMock(...args),
  saveQuizPreguntas: (...args: unknown[]) => saveQuizPreguntasMock(...args),
}));

function plantillaFixture(id: string, nombre: string) {
  return {
    id,
    nombre,
    descripcion: "",
    materia: "matematicas",
    tags: [],
    visibility: "privada" as const,
    publicAprobado: false,
    ownerUserId: "u1",
    codigoDsl: `variables:\n  a: random(1, 10)\n\nenunciado: "${nombre}: {a}"\nrespuesta: a\ntipo: input\n`,
  };
}

async function renderEditor(path: string) {
  const { default: PlantillaEditorTiza } = await import("../PlantillaEditorTiza");
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/plantillas/nueva" element={<PlantillaEditorTiza />} />
        <Route path="/plantillas/:id" element={<PlantillaEditorTiza />} />
      </Routes>
    </MemoryRouter>,
  );
}

describe("PlantillaEditorTiza — Etapa 2 quizId", () => {
  beforeEach(() => {
    getPlantillaMock.mockReset();
    getQuizPreguntasMock.mockReset();
    saveQuizPreguntasMock.mockReset();
  });

  it("con quizId: hidrata el rail con las preguntas existentes + una nueva, y muestra cantidadGlobal", async () => {
    getQuizPreguntasMock.mockResolvedValue({
      version: 1,
      cantidadGlobal: 3,
      preguntas: [
        { plantillaId: "p1", tipo: "obligatoria" },
        { plantillaId: "p2", tipo: "relleno", maxRepeticiones: 2, poolId: "pool-a" },
      ],
    });
    getPlantillaMock.mockImplementation((id: string) =>
      Promise.resolve(plantillaFixture(id, id === "p1" ? "Suma" : "Doble")),
    );

    await renderEditor("/plantillas/nueva?quizId=quiz-1");

    await waitFor(() => {
      expect(getQuizPreguntasMock).toHaveBeenCalledWith("quiz-1");
    });
    await waitFor(() => {
      expect(getPlantillaMock).toHaveBeenCalledWith("p1");
      expect(getPlantillaMock).toHaveBeenCalledWith("p2");
    });

    const cantidadInput = await screen.findByTestId("cantidad-global-input");
    expect((cantidadInput as HTMLInputElement).value).toBe("3");

    // Rail: 2 hidratadas ("Suma"/"Doble") + 1 nueva en blanco ("Pregunta 3").
    await waitFor(() => {
      expect(screen.getByText("Suma")).toBeInTheDocument();
      expect(screen.getByText("Doble")).toBeInTheDocument();
      expect(screen.getByText("Pregunta 3")).toBeInTheDocument();
    });
  }, 10000);

  it("aviso inline de validación aparece cuando los límites no alcanzan", async () => {
    getQuizPreguntasMock.mockResolvedValue({
      version: 1,
      cantidadGlobal: 5,
      preguntas: [{ plantillaId: "p1", tipo: "obligatoria" }],
    });
    getPlantillaMock.mockResolvedValue(plantillaFixture("p1", "Suma"));

    await renderEditor("/plantillas/nueva?quizId=quiz-1");

    await waitFor(
      () => {
        expect(screen.getByTestId("cuestionario-validacion-warning")).toBeInTheDocument();
      },
      { timeout: 5000 },
    );
  }, 10000);

  it("sin quizId (standalone): nunca llama a getQuizPreguntas ni muestra cantidadGlobal", async () => {
    await renderEditor("/plantillas/nueva");
    await waitFor(() => {
      expect(screen.getByTestId("vblang-metadata-panel")).toBeTruthy();
    });
    expect(getQuizPreguntasMock).not.toHaveBeenCalled();
    expect(screen.queryByTestId("cantidad-global-input")).not.toBeInTheDocument();
  });
});
