/**
 * PLAN-Y — el payload de guardado del módulo ya NO manda la config del
 * cuestionario (title/type/visibility/instructions/config de evaluación):
 * Tiza (PATCH /api/quizzes/:id/meta) es su único editor y re-mandarla acá
 * pisaba lo configurado allá en cada guardado.
 *
 * Cubre:
 *  1. Quiz EXISTENTE → viaja sólo id + contenido (sin title/type/visibility
 *     ni timer/maxIntentos/etc.).
 *  2. Quiz `localOnly` (creado en esta sesión, ej. plantilla del banco) →
 *     manda title/type/visibility una única vez (creación server-side).
 *  3. Tras guardar OK se invoca `onSaved` (el editor limpia `localOnly`).
 */

import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, waitFor } from "@testing-library/react";
import { useEffect } from "react";

const mockGet = vi.fn();
const mockPost = vi.fn();
const mockPatch = vi.fn();

vi.mock("../../../lib/api", () => ({
  apiGet: (...args: unknown[]) => mockGet(...args),
  apiPost: (...args: unknown[]) => mockPost(...args),
  apiPatch: (...args: unknown[]) => mockPatch(...args),
}));

import { useModuloPersistence } from "../useModuloPersistence";
import type { ModuleFormState } from "../useModuloEditor";
import type { ModuleQuiz } from "../../../domain/module/module.types";

const FORM: ModuleFormState = {
  title: "Módulo",
  description: "desc",
  subject: "fisica",
  category: "general",
  level: "secundaria",
  durationMinutes: 30,
  visibility: "publico",
  visibilitySchoolId: "",
  descatalogado: false,
  dependencies: [],
  scoringSystemId: undefined,
} as ModuleFormState;

// Quiz existente (vino del GET): trae la config que Tiza pudo haber
// cambiado después — nada de eso debe viajar en el guardado del módulo.
const QUIZ_EXISTENTE: ModuleQuiz = {
  id: "quiz-existente",
  title: "Título viejo en memoria",
  type: "formal",
  status: "draft",
  version: 1,
  visibility: "escuela",
  mode: "manual",
  questions: [],
  timerSegundos: 600,
  maxIntentos: 2,
  instructions: "instrucciones viejas",
} as ModuleQuiz;

const QUIZ_LOCAL: ModuleQuiz = {
  id: "quiz-local",
  title: "Nuevo de plantilla",
  type: "formal",
  status: "draft",
  version: 1,
  visibility: "publico",
  mode: "generated",
  generatorId: "plantilla:p1",
  generatorVersion: 1,
  count: 5,
  seedPolicy: "perAttempt",
  params: {},
  localOnly: true,
} as ModuleQuiz;

function SubmitHarness({
  quizzes,
  onSaved,
  isEditing = true,
  id = "mod-1",
  navigate = (() => {}) as never,
}: {
  quizzes: ModuleQuiz[];
  onSaved?: () => void;
  isEditing?: boolean;
  id?: string;
  navigate?: never;
}) {
  const { handleSubmit } = useModuloPersistence();
  useEffect(() => {
    void handleSubmit({
      event: { preventDefault: () => {} } as React.FormEvent<HTMLFormElement>,
      isEditing,
      id: isEditing ? id : undefined,
      user: { id: "user-1" },
      form: FORM,
      theoryItems: [],
      quizzes,
      navigate,
      setValidationErrors: () => {},
      onSaved,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div />;
}

beforeEach(() => {
  vi.clearAllMocks();
  mockPatch.mockResolvedValue({ ok: true });
});

describe("PLAN-Y: payload de quizzes sin config (Tiza es la fuente de verdad)", () => {
  it("quiz existente viaja sólo con id/contenido, sin title/type/visibility/config", async () => {
    render(<SubmitHarness quizzes={[QUIZ_EXISTENTE]} />);
    await waitFor(() => expect(mockPatch).toHaveBeenCalled());

    const payload = mockPatch.mock.calls[0][1] as { quizzes: Record<string, unknown>[] };
    expect(payload.quizzes).toHaveLength(1);
    const q = payload.quizzes[0];
    expect(q.id).toBe("quiz-existente");
    expect(q.questions).toEqual([]);
    expect(q).not.toHaveProperty("title");
    expect(q).not.toHaveProperty("type");
    expect(q).not.toHaveProperty("visibility");
    expect(q.timerSegundos).toBeUndefined();
    expect(q.maxIntentos).toBeUndefined();
    expect(q.instructions).toBeUndefined();
  });

  it("quiz localOnly manda title/type/visibility (una única vez, para crearlo)", async () => {
    render(<SubmitHarness quizzes={[QUIZ_LOCAL]} />);
    await waitFor(() => expect(mockPatch).toHaveBeenCalled());

    const payload = mockPatch.mock.calls[0][1] as { quizzes: Record<string, unknown>[] };
    const q = payload.quizzes[0];
    expect(q.title).toBe("Nuevo de plantilla");
    expect(q.type).toBe("formal");
    expect(q.visibility).toBe("publico");
    expect(q.generatorId).toBe("plantilla:p1");
  });

  it("tras guardar OK invoca onSaved (el editor limpia localOnly)", async () => {
    const onSaved = vi.fn();
    render(<SubmitHarness quizzes={[QUIZ_LOCAL]} onSaved={onSaved} />);
    await waitFor(() => expect(onSaved).toHaveBeenCalledOnce());
  });

  // PLAN-Y bis — crear un módulo nuevo navega a SU editor (no a la lista), así
  // los botones de crear/importar cuestionarios (que necesitan un módulo
  // guardado) quedan disponibles de inmediato.
  it("crear un módulo nuevo navega a /modulos/:id/editar con el id devuelto", async () => {
    mockPost.mockResolvedValue({ id: "mod-nuevo-9" });
    const navigate = vi.fn();
    render(<SubmitHarness quizzes={[]} isEditing={false} navigate={navigate as never} />);
    await waitFor(() => expect(mockPost).toHaveBeenCalledWith("/api/modulos", expect.anything()));
    await waitFor(() =>
      expect(navigate).toHaveBeenCalledWith("/modulos/mod-nuevo-9/editar", { replace: true }),
    );
  });
});
