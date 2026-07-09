/**
 * PLAN-W §2 — repro confirmada por Javier: al editar un módulo con
 * categoría "evaluacion", el guardado exigía "El nivel es obligatorio"
 * aunque el input de Nivel está OCULTO en esa categoría
 * (`ModuloEditor.tsx` → `!isEvaluacionMode`). El docente no tenía forma
 * de completar un campo que no ve en pantalla — guardado bloqueado sin
 * salida.
 *
 * Causa raíz: la validación de `handleSubmit` (useModuloPersistence.ts)
 * exigía `form.level` no vacío SIEMPRE, sin la misma excepción que usa
 * la UI para ocultar el campo. Fix: mismo criterio (`category ===
 * "evaluacion"`) en ambos lados.
 *
 * Cubre:
 *  1. categoría "evaluacion" + level vacío → NO hay error de validación,
 *     el guardado sigue adelante (locke el caso exacto de la repro).
 *  2. categoría normal (no evaluación) + level vacío → SIGUE exigiendo
 *     el nivel (no se rompió el caso feliz existente).
 */
import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, waitFor } from "@testing-library/react";
import { useState } from "react";

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

const baseForm: ModuleFormState = {
  title: "Módulo test",
  description: "desc",
  subject: "Matemáticas",
  category: "general",
  level: "",
  durationMinutes: 30,
  visibility: "publico",
  visibilitySchoolId: "",
  dependencies: [],
};

function HookHarness({
  form,
  onDone,
}: {
  form: ModuleFormState;
  onDone: (errors: string[]) => void;
}) {
  const { handleSubmit } = useModuloPersistence();
  const [done, setDone] = useState(false);
  const trigger = () => {
    const fakeEvent = { preventDefault: () => {} } as React.FormEvent<HTMLFormElement>;
    handleSubmit({
      event: fakeEvent,
      isEditing: true,
      id: "mod-1",
      user: { id: "user-1" },
      form,
      theoryItems: [],
      quizzes: [],
      navigate: (() => {}) as never,
      setValidationErrors: (errs) => {
        onDone(errs);
        setDone(true);
      },
    });
  };
  return (
    <div>
      <button onClick={trigger}>guardar</button>
      <div data-testid="done">{done ? "yes" : "no"}</div>
    </div>
  );
}

beforeEach(() => {
  vi.clearAllMocks();
  mockPost.mockResolvedValue({});
  mockPatch.mockResolvedValue({ ok: true });
});

describe("PLAN-W §2: nivel no bloquea el guardado en categoría evaluación", () => {
  it("categoría evaluacion + level vacío → sin error de validación, guarda", async () => {
    let errors: string[] = ["sentinel-no-llamado"];
    const { getByText } = render(
      <HookHarness
        form={{ ...baseForm, category: "evaluacion", level: "" }}
        onDone={(e) => { errors = e; }}
      />
    );
    getByText("guardar").click();
    await waitFor(() => {
      expect(errors).not.toContain("sentinel-no-llamado");
    });
    expect(errors).not.toContain("El nivel es obligatorio.");
    expect(mockPatch).toHaveBeenCalled();
  });

  it("categoría normal + level vacío → sigue exigiendo el nivel (caso feliz intacto)", async () => {
    let errors: string[] = ["sentinel-no-llamado"];
    const { getByText } = render(
      <HookHarness
        form={{ ...baseForm, category: "general", level: "" }}
        onDone={(e) => { errors = e; }}
      />
    );
    getByText("guardar").click();
    await waitFor(() => {
      expect(errors).not.toContain("sentinel-no-llamado");
    });
    expect(errors).toContain("El nivel es obligatorio.");
    expect(mockPatch).not.toHaveBeenCalled();
  });
});
