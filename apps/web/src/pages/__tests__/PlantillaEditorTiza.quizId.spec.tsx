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
const createPlantillaMock = vi.fn();
const updatePlantillaMock = vi.fn();
vi.mock("../../domain/vblang/plantillaApi", () => ({
  getPlantilla: (...args: unknown[]) => getPlantillaMock(...args),
  createPlantilla: (...args: unknown[]) => createPlantillaMock(...args),
  updatePlantilla: (...args: unknown[]) => updatePlantillaMock(...args),
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
const crearQuizSueltoMock = vi.fn();
const usarQuizEnModuloMock = vi.fn();
vi.mock("../../domain/quiz/quizPreguntasApi", () => ({
  getQuizPreguntas: (...args: unknown[]) => getQuizPreguntasMock(...args),
  saveQuizPreguntas: (...args: unknown[]) => saveQuizPreguntasMock(...args),
  getQuizMeta: (...args: unknown[]) => getQuizMetaMock(...args),
  patchQuizMeta: (...args: unknown[]) => patchQuizMetaMock(...args),
  deleteQuiz: (...args: unknown[]) => deleteQuizMock(...args),
  crearQuizSuelto: (...args: unknown[]) => crearQuizSueltoMock(...args),
  usarQuizEnModulo: (...args: unknown[]) => usarQuizEnModuloMock(...args),
}));

/** Shape de `QuizMeta` (WO-tiza-config + PLAN-Z fase 3/4): title +
 *  tipo/visibilidad/materia/nivel/tags/descripcion/config. */
function quizMetaFixture(title: string) {
  return {
    id: "quiz-1",
    title,
    type: "practica" as const,
    visibility: "publico" as const,
    materia: "",
    nivel: "",
    tags: [] as string[],
    descripcion: "",
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
    createPlantillaMock.mockReset();
    updatePlantillaMock.mockReset();
    getQuizPreguntasMock.mockReset();
    saveQuizPreguntasMock.mockReset();
    getQuizMetaMock.mockReset();
    patchQuizMetaMock.mockReset();
    deleteQuizMock.mockReset();
    crearQuizSueltoMock.mockReset();
    usarQuizEnModuloMock.mockReset();
    saveQuizPreguntasMock.mockResolvedValue({
      cuestionario: { version: 1, cantidadGlobal: 0, preguntas: [] },
      validacion: { ok: true, faltantes: [] },
    });
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

  // PLAN-Z fase 2 (§7) — la config vive en la tarjeta central, a la que se
  // entra por el ítem "Configuraciones" pineado del rail.
  it("con quizId: seleccionar Configuraciones muestra la tarjeta de config y un cambio dispara patchQuizMeta (debounce)", async () => {
    const user = (await import("@testing-library/user-event")).default.setup();
    getQuizPreguntasMock.mockResolvedValue({
      version: 1,
      cantidadGlobal: 1,
      preguntas: [{ plantillaId: "p1", tipo: "obligatoria" }],
    });
    getPlantillaMock.mockResolvedValue(plantillaFixture("p1", "Suma"));

    await renderEditor("/plantillas/nueva?quizId=quiz-1");

    // La config ya NO vive en DETALLES (PLAN-Z fase 2): hasta seleccionar el
    // ítem pineado, el panel no está montado.
    await screen.findByTestId("rail-config-item");
    expect(screen.queryByTestId("quiz-config-panel")).not.toBeInTheDocument();

    await user.click(screen.getByTestId("rail-config-item"));
    expect(await screen.findByTestId("tiza-config-card")).toBeInTheDocument();
    const tipoSelect = await screen.findByTestId("quiz-config-tipo-select");
    expect((tipoSelect as HTMLSelectElement).value).toBe("practica");
    expect(screen.getByTestId("quiz-config-visibility-select")).toBeInTheDocument();
    expect(screen.getByTestId("quiz-config-delete-button")).toBeInTheDocument();
    // El panel derecho muestra el empty-state (la config no tiene property
    // grid) — detalle del mockup §7.
    expect(screen.getByTestId("tiza-propiedades-empty")).toBeInTheDocument();

    await user.selectOptions(tipoSelect, "formal");
    await waitFor(
      () => {
        expect(patchQuizMetaMock).toHaveBeenCalledWith("quiz-1", { type: "formal" });
      },
      { timeout: 3000 },
    );

    // Volver a una pregunta del rail restaura el centro y el property grid.
    await user.click(screen.getByRole("button", { name: /Suma/ }));
    expect(screen.queryByTestId("tiza-config-card")).not.toBeInTheDocument();
    expect(screen.queryByTestId("tiza-propiedades-empty")).not.toBeInTheDocument();
  }, 15000);

  it("sin quizId (standalone): ni el ítem Configuraciones ni el panel de config se muestran", async () => {
    await renderEditor("/plantillas/nueva");
    await waitFor(() => {
      expect(screen.getByTestId("vblang-metadata-panel")).toBeTruthy();
    });
    expect(screen.queryByTestId("rail-config-item")).not.toBeInTheDocument();
    expect(screen.queryByTestId("quiz-config-panel")).not.toBeInTheDocument();
  });

  // PLAN-Z fase 2 (§7) — sección POOLS de la tarjeta de config: agrupa las
  // preguntas por pool y permite reasignarlas (asignar pool ⇒ rol relleno).
  it("POOLS: agrupa por pool, reasignar actualiza el chip del rail y se pueden crear pools nuevas", async () => {
    const user = (await import("@testing-library/user-event")).default.setup();
    getQuizPreguntasMock.mockResolvedValue({
      version: 1,
      cantidadGlobal: 2,
      preguntas: [
        { plantillaId: "p1", tipo: "obligatoria" },
        { plantillaId: "p2", tipo: "relleno", maxRepeticiones: 2, poolId: "pool-a" },
      ],
    });
    getPlantillaMock.mockImplementation((id: string) =>
      Promise.resolve(plantillaFixture(id, id === "p1" ? "Suma" : "Doble")),
    );

    await renderEditor("/plantillas/nueva?quizId=quiz-1");
    await user.click(await screen.findByTestId("rail-config-item"));

    const pools = await screen.findByTestId("tiza-config-pools");
    // "Doble" está en pool-a (grupo con 1); "Suma" (obligatoria) figura como
    // sin pool.
    expect(pools).toHaveTextContent("pool-a (1)");
    expect((screen.getByLabelText("Pool de Doble") as HTMLSelectElement).value).toBe(
      "pool-a",
    );
    expect((screen.getByLabelText("Pool de Suma") as HTMLSelectElement).value).toBe("");

    // Reasignar "Suma" a pool-a: su quizMeta pasa a relleno/pool-a y el grupo
    // lo refleja.
    await user.selectOptions(screen.getByLabelText("Pool de Suma"), "pool-a");
    await waitFor(() => {
      expect(screen.getByTestId("tiza-config-pools")).toHaveTextContent("pool-a (2)");
    });

    // Crear una pool nueva ("+ Pool") y mover "Doble" ahí.
    await user.type(screen.getByLabelText("Nombre del pool"), "pool-b");
    await user.click(screen.getByRole("button", { name: "+ Pool" }));
    await user.selectOptions(screen.getByLabelText("Pool de Doble"), "pool-b");
    await waitFor(() => {
      const poolsBox = screen.getByTestId("tiza-config-pools");
      expect(poolsBox).toHaveTextContent("pool-b (1)");
      expect(poolsBox).toHaveTextContent("pool-a (1)");
    });
  }, 15000);

  // PLAN-Z fase 2 — regresión encontrada en vivo: la hidratación deja ACTIVA
  // la pregunta en blanco auto-agregada; guardar desde la config cortaba TODO
  // con "El nombre es obligatorio" y el cuestionario nunca se sincronizaba.
  // La activa en blanco sin tocar ahora recibe el mismo guard que el resto
  // del rail.
  it("guardar desde la config con la blanca activa NO corta: sincroniza el cuestionario con el pool nuevo", async () => {
    const user = (await import("@testing-library/user-event")).default.setup();
    getQuizPreguntasMock.mockResolvedValue({
      version: 1,
      cantidadGlobal: 2,
      preguntas: [
        { plantillaId: "p1", tipo: "obligatoria" },
        { plantillaId: "p2", tipo: "relleno", maxRepeticiones: 2, poolId: "pool-a" },
      ],
    });
    getPlantillaMock.mockImplementation((id: string) =>
      Promise.resolve(plantillaFixture(id, id === "p1" ? "Suma" : "Doble")),
    );

    await renderEditor("/plantillas/nueva?quizId=quiz-1");
    // Sin activar ninguna pregunta: la blanca auto-agregada sigue activa.
    await user.click(await screen.findByTestId("rail-config-item"));
    await user.selectOptions(await screen.findByLabelText("Pool de Suma"), "pool-a");
    await user.click(screen.getByRole("button", { name: "Guardar" }));

    await waitFor(() => {
      expect(saveQuizPreguntasMock).toHaveBeenCalledWith(
        "quiz-1",
        expect.objectContaining({
          preguntas: [
            expect.objectContaining({ plantillaId: "p1", tipo: "relleno", poolId: "pool-a" }),
            expect.objectContaining({ plantillaId: "p2", tipo: "relleno", poolId: "pool-a" }),
          ],
        }),
      );
    });
    // La blanca sin tocar no se persistió (mismo guard que el rail).
    expect(createPlantillaMock).not.toHaveBeenCalled();
  }, 15000);

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

  // PLAN-Z fase 2 (§7) — el chip pasivo de pool del rail (PLAN-E §13) se
  // retiró: la membresía de pools ahora se ve toda junta en la sección POOLS
  // de la plantilla-config (test de POOLS más abajo).
  it("con quizId: el rail ya NO muestra chips de pool (mockup §7)", async () => {
    getQuizPreguntasMock.mockResolvedValue({
      version: 1,
      cantidadGlobal: 2,
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
      expect(screen.getByText("Suma")).toBeInTheDocument();
      expect(screen.getByText("Doble")).toBeInTheDocument();
    });
    expect(screen.queryByTitle("Sin pool")).not.toBeInTheDocument();
    expect(screen.queryByTitle("Pool: pool-a")).not.toBeInTheDocument();
  }, 10000);

  // PLAN-CORRECCIONES C2 — guardar 2+ preguntas desde /plantillas/nueva SIN
  // quizId ya no debe dejarlas como plantillas sueltas sin nada que las
  // agrupe (bug de PLAN-E §14): la segunda vez que se guarda (con 2
  // preguntas en el rail) debe materializar un quiz "suelto" y subirle el
  // cuestionario completo.
  it("sin quizId, guardar con 2 preguntas en el rail crea un quiz suelto con AMBAS (no plantillas huérfanas)", async () => {
    const user = (await import("@testing-library/user-event")).default.setup();
    let nextPlantillaId = 0;
    createPlantillaMock.mockImplementation((input: { nombre: string; codigoDsl: string }) => {
      nextPlantillaId += 1;
      return Promise.resolve({
        ...plantillaFixture(`p-created-${nextPlantillaId}`, input.nombre),
        codigoDsl: input.codigoDsl,
      });
    });
    crearQuizSueltoMock.mockResolvedValue({ id: "quiz-nuevo-suelto" });

    await renderEditor("/plantillas/nueva");

    // Descartar el wizard de onboarding (blanco).
    const wizardBlank = await screen.findByTestId("vblang-wizard-blank");
    await user.click(wizardBlank);
    await waitFor(() => {
      expect(screen.queryByTestId("vblang-wizard")).not.toBeInTheDocument();
    });

    // Pregunta 1: nombrarla y guardar (todavía sólo hay 1 en el rail — no
    // debe crear ningún quiz).
    const nombreInput = await screen.findByLabelText(/Nombre/);
    await user.type(nombreInput, "Pregunta uno");
    await user.click(screen.getByRole("button", { name: "Guardar" }));
    await waitFor(() => {
      expect(createPlantillaMock).toHaveBeenCalledTimes(1);
    });
    expect(crearQuizSueltoMock).not.toHaveBeenCalled();

    // Agregar una segunda pregunta al rail, nombrarla y guardar de nuevo:
    // ahora questions.length===2 y quizId sigue null → debe materializar
    // el quiz suelto con el cuestionario completo.
    await user.click(screen.getByRole("button", { name: /Nueva pregunta/ }));
    const nombreInput2 = await screen.findByLabelText(/Nombre/);
    await user.clear(nombreInput2);
    await user.type(nombreInput2, "Pregunta dos");
    await user.click(screen.getByRole("button", { name: "Guardar" }));

    await waitFor(() => {
      expect(crearQuizSueltoMock).toHaveBeenCalledTimes(1);
    });
    await waitFor(() => {
      expect(saveQuizPreguntasMock).toHaveBeenCalledWith(
        "quiz-nuevo-suelto",
        expect.objectContaining({
          cantidadGlobal: 2,
          preguntas: expect.arrayContaining([
            expect.objectContaining({ plantillaId: "p-created-1" }),
            expect.objectContaining({ plantillaId: "p-created-2" }),
          ]),
        }),
      );
    });
    // Las dos preguntas quedan agrupadas en el mismo quiz — no 2 plantillas
    // sueltas sin cuestionario que las una.
    const call = saveQuizPreguntasMock.mock.calls[0][1] as { preguntas: unknown[] };
    expect(call.preguntas).toHaveLength(2);
  }, 15000);

  // PLAN-Z fase 1 — guardar-todo: UN solo Guardar persiste TODO el rail
  // (antes había que activar cada pregunta y guardar una por una;
  // buildPreguntasFromQuestions filtraba las no guardadas y el cuestionario
  // persistido quedaba incompleto).
  it("guardar-todo: un solo Guardar persiste las 2 preguntas del rail y agrupa ambas", async () => {
    const user = (await import("@testing-library/user-event")).default.setup();
    let nextPlantillaId = 0;
    createPlantillaMock.mockImplementation((input: { nombre: string; codigoDsl: string }) => {
      nextPlantillaId += 1;
      return Promise.resolve({
        ...plantillaFixture(`p-todo-${nextPlantillaId}`, input.nombre),
        codigoDsl: input.codigoDsl,
      });
    });
    crearQuizSueltoMock.mockResolvedValue({ id: "quiz-suelto-todo" });

    await renderEditor("/plantillas/nueva");
    const wizardBlank = await screen.findByTestId("vblang-wizard-blank");
    await user.click(wizardBlank);
    await waitFor(() => {
      expect(screen.queryByTestId("vblang-wizard")).not.toBeInTheDocument();
    });

    // Pregunta 1: sólo nombrarla — SIN guardar.
    const nombreInput = await screen.findByLabelText(/Nombre/);
    await user.type(nombreInput, "Pregunta uno");

    // Pregunta 2: agregar al rail, nombrarla, y UN único Guardar.
    await user.click(screen.getByRole("button", { name: /Nueva pregunta/ }));
    const nombreInput2 = await screen.findByLabelText(/Nombre/);
    await user.clear(nombreInput2);
    await user.type(nombreInput2, "Pregunta dos");
    await user.click(screen.getByRole("button", { name: "Guardar" }));

    // Un solo click guardó AMBAS plantillas (la activa y la no-activa).
    await waitFor(() => {
      expect(createPlantillaMock).toHaveBeenCalledTimes(2);
    });
    const nombresGuardados = createPlantillaMock.mock.calls.map(
      (c) => (c[0] as { nombre: string }).nombre,
    );
    expect(nombresGuardados).toContain("Pregunta uno");
    expect(nombresGuardados).toContain("Pregunta dos");

    // Y el quiz suelto agrupa las 2 (no 1 como antes de PLAN-Z fase 1).
    await waitFor(() => {
      expect(saveQuizPreguntasMock).toHaveBeenCalledWith(
        "quiz-suelto-todo",
        expect.objectContaining({ cantidadGlobal: 2 }),
      );
    });
    const call = saveQuizPreguntasMock.mock.calls[0][1] as { preguntas: unknown[] };
    expect(call.preguntas).toHaveLength(2);
  }, 15000);

  it("guardar-todo: la pregunta en blanco nunca tocada NO se persiste", async () => {
    const user = (await import("@testing-library/user-event")).default.setup();
    getQuizPreguntasMock.mockResolvedValue({
      version: 1,
      cantidadGlobal: 1,
      preguntas: [{ plantillaId: "p1", tipo: "obligatoria" }],
    });
    getPlantillaMock.mockResolvedValue(plantillaFixture("p1", "Suma"));
    updatePlantillaMock.mockResolvedValue(plantillaFixture("p1", "Suma"));

    await renderEditor("/plantillas/nueva?quizId=quiz-1");
    // La hidratación deja activa la pregunta en blanco auto-agregada;
    // pasar a "Suma" y guardar: la blanca (sin tocar) debe quedar afuera.
    await user.click(await screen.findByText("Suma"));
    await user.click(screen.getByRole("button", { name: "Guardar" }));

    await waitFor(() => {
      expect(updatePlantillaMock).toHaveBeenCalledWith("p1", expect.anything());
    });
    expect(createPlantillaMock).not.toHaveBeenCalled();
  }, 10000);

  it("PLAN-Z fase 3 §3.1: guardar hereda materia/tags/descripcion/visibilidad de la plantilla-config, no del MetadataPanel por-pregunta", async () => {
    const user = (await import("@testing-library/user-event")).default.setup();
    getQuizMetaMock.mockResolvedValue({
      ...quizMetaFixture("Quiz de física"),
      materia: "física",
      nivel: "3° año",
      tags: ["cinemática"],
      descripcion: "Repaso de MRU.",
      visibility: "escuela",
    });
    getQuizPreguntasMock.mockResolvedValue({
      version: 1,
      cantidadGlobal: 1,
      preguntas: [{ plantillaId: "p1", tipo: "obligatoria" }],
    });
    // La plantilla individual trae SU PROPIA materia ("matematicas", ver
    // plantillaFixture) — el guardado NO debe usarla en modo cuestionario.
    getPlantillaMock.mockResolvedValue(plantillaFixture("p1", "MRU"));
    updatePlantillaMock.mockResolvedValue(plantillaFixture("p1", "MRU"));

    await renderEditor("/plantillas/nueva?quizId=quiz-1");
    // "MRU" también aparece en el enunciado compilado del preview — se
    // apunta al ítem del rail (un <button>), no a cualquier texto suelto.
    await user.click(await screen.findByRole("button", { name: /MRU/ }));
    await user.click(screen.getByRole("button", { name: "Guardar" }));

    await waitFor(() => {
      expect(updatePlantillaMock).toHaveBeenCalledWith(
        "p1",
        expect.objectContaining({
          materia: "física",
          tags: ["cinemática"],
          descripcion: "Repaso de MRU.",
          visibility: "escuela",
        }),
      );
    });
  }, 10000);

  it("guardar-todo: si una pregunta falla, la activa se guarda igual y el rail marca el error", async () => {
    const user = (await import("@testing-library/user-event")).default.setup();
    createPlantillaMock.mockImplementation((input: { nombre: string }) => {
      if (input.nombre === "Pregunta uno") {
        return Promise.reject(new Error("boom del servidor"));
      }
      return Promise.resolve(plantillaFixture("p-ok", input.nombre));
    });
    crearQuizSueltoMock.mockResolvedValue({ id: "quiz-suelto-err" });

    await renderEditor("/plantillas/nueva");
    const wizardBlank = await screen.findByTestId("vblang-wizard-blank");
    await user.click(wizardBlank);
    await waitFor(() => {
      expect(screen.queryByTestId("vblang-wizard")).not.toBeInTheDocument();
    });

    const nombreInput = await screen.findByLabelText(/Nombre/);
    await user.type(nombreInput, "Pregunta uno");
    await user.click(screen.getByRole("button", { name: /Nueva pregunta/ }));
    const nombreInput2 = await screen.findByLabelText(/Nombre/);
    await user.clear(nombreInput2);
    await user.type(nombreInput2, "Pregunta dos");
    await user.click(screen.getByRole("button", { name: "Guardar" }));

    // La activa ("Pregunta dos") se guardó; la fallada quedó marcada en rojo
    // en el rail con el motivo, sin tirar abajo el guardado del resto.
    await waitFor(() => {
      expect(
        screen.getByRole("img", { name: /No se pudo guardar: boom del servidor/ }),
      ).toBeInTheDocument();
    });
    const nombresOk = createPlantillaMock.mock.results
      .map((r, i) => ({ r, nombre: (createPlantillaMock.mock.calls[i][0] as { nombre: string }).nombre }))
      .filter(({ r }) => r.type === "return")
      .map(({ nombre }) => nombre);
    expect(nombresOk).toContain("Pregunta dos");
  }, 15000);
});
