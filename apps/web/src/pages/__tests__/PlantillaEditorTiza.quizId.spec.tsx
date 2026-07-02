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
const getQuizMetaMock = vi.fn();
const patchQuizMetaMock = vi.fn();
const deleteQuizMock = vi.fn();
vi.mock("../../domain/quiz/quizPreguntasApi", () => ({
  getQuizPreguntas: (...args: unknown[]) => getQuizPreguntasMock(...args),
  saveQuizPreguntas: (...args: unknown[]) => saveQuizPreguntasMock(...args),
  getQuizMeta: (...args: unknown[]) => getQuizMetaMock(...args),
  patchQuizMeta: (...args: unknown[]) => patchQuizMetaMock(...args),
  deleteQuiz: (...args: unknown[]) => deleteQuizMock(...args),
}));

/** Shape de `QuizMeta` (WO-tiza-config): title + tipo/visibilidad/config. */
function quizMetaFixture(title: string) {
  return {
    id: "quiz-1",
    title,
    type: "practica" as const,
    visibility: "publico" as const,
    config: {},
  };
}

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
    getQuizMetaMock.mockReset();
    patchQuizMetaMock.mockReset();
    deleteQuizMock.mockReset();
    getQuizMetaMock.mockResolvedValue(quizMetaFixture("Quiz de prueba"));
    patchQuizMetaMock.mockImplementation((_quizId: string, patch: Record<string, unknown>) =>
      Promise.resolve({ ...quizMetaFixture("Quiz de prueba"), ...patch }),
    );
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
    expect(getQuizMetaMock).not.toHaveBeenCalled();
    expect(screen.queryByTestId("cantidad-global-input")).not.toBeInTheDocument();
  });

  it("con quizId: la cabecera DETALLES muestra el título del cuestionario, no el de la plantilla activa", async () => {
    getQuizPreguntasMock.mockResolvedValue({
      version: 1,
      cantidadGlobal: 1,
      preguntas: [{ plantillaId: "p1", tipo: "obligatoria" }],
    });
    getPlantillaMock.mockResolvedValue(plantillaFixture("p1", "Suma"));
    getQuizMetaMock.mockResolvedValue(quizMetaFixture("Cuestionario de Álgebra"));

    await renderEditor("/plantillas/nueva?quizId=quiz-1");

    await waitFor(() => {
      expect(getQuizMetaMock).toHaveBeenCalledWith("quiz-1");
    });
    await waitFor(() => {
      expect(screen.getByTestId("tiza-detalles-titulo")).toHaveTextContent(
        "Cuestionario: Cuestionario de Álgebra",
      );
    });
    // El nombre de la plantilla activa ("Suma") NO reemplaza el título del
    // cuestionario en la cabecera — son cosas distintas.
    expect(screen.getByTestId("tiza-detalles-titulo")).not.toHaveTextContent("Suma");
  }, 10000);

  // WO-tiza-config (Fase 1+2) — panel de configuración del cuestionario en
  // el cuerpo de DETALLES: tipo/visibilidad/evaluación/eliminar.
  it("con quizId: el panel de config muestra tipo/visibilidad y un cambio dispara patchQuizMeta (debounce)", async () => {
    const user = (await import("@testing-library/user-event")).default.setup();
    getQuizPreguntasMock.mockResolvedValue({
      version: 1,
      cantidadGlobal: 1,
      preguntas: [{ plantillaId: "p1", tipo: "obligatoria" }],
    });
    getPlantillaMock.mockResolvedValue(plantillaFixture("p1", "Suma"));

    await renderEditor("/plantillas/nueva?quizId=quiz-1");

    // En modo "nueva" el cuerpo de DETALLES ya arranca abierto (metaOpen =
    // isNew) — el panel de config aparece apenas resuelve getQuizMeta.
    const tipoSelect = await screen.findByTestId("quiz-config-tipo-select");
    expect((tipoSelect as HTMLSelectElement).value).toBe("practica");
    expect(screen.getByTestId("quiz-config-visibility-select")).toBeInTheDocument();
    expect(screen.getByTestId("quiz-config-delete-button")).toBeInTheDocument();

    await user.selectOptions(tipoSelect, "formal");
    await waitFor(
      () => {
        expect(patchQuizMetaMock).toHaveBeenCalledWith("quiz-1", { type: "formal" });
      },
      { timeout: 3000 },
    );
  }, 15000);

  it("sin quizId (standalone): el panel de config del cuestionario NO se muestra", async () => {
    const user = (await import("@testing-library/user-event")).default.setup();
    await renderEditor("/plantillas/nueva");
    await waitFor(() => {
      expect(screen.getByTestId("vblang-metadata-panel")).toBeTruthy();
    });
    // En modo nuevo el panel DETALLES ya arranca abierto (metaOpen = isNew).
    expect(screen.queryByTestId("quiz-config-panel")).not.toBeInTheDocument();
    void user;
  });

  // WO-tiza-config (Fase 5, bug 2 del informe QA) — entrar con `quizId` NO es
  // "crear plantilla nueva": el wizard de onboarding no debe dispararse.
  it("con quizId: el wizard de plantilla nueva NO se muestra; sin quizId sí", async () => {
    getQuizPreguntasMock.mockResolvedValue({
      version: 1,
      cantidadGlobal: 1,
      preguntas: [{ plantillaId: "p1", tipo: "obligatoria" }],
    });
    getPlantillaMock.mockResolvedValue(plantillaFixture("p1", "Suma"));

    const conQuiz = await renderEditor("/plantillas/nueva?quizId=quiz-1");
    await waitFor(() => {
      expect(screen.getByTestId("cantidad-global-input")).toBeInTheDocument();
    });
    expect(screen.queryByTestId("vblang-wizard")).not.toBeInTheDocument();
    conQuiz.unmount();

    await renderEditor("/plantillas/nueva");
    await waitFor(() => {
      expect(screen.getByTestId("vblang-wizard")).toBeInTheDocument();
    });
  }, 10000);
});
