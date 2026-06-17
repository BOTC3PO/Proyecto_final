/**
 * FIX-MODULO-CRASH — el editor de módulo tolera `subject` ausente
 * en la respuesta del GET sin crashear.
 *
 * Causa raíz: el back devolvía el módulo sin `subject` (porque el
 * modelo Prisma no tenía la columna hasta la migración
 * 20260617010000_modulo_subject). El editor asumía que `form.subject`
 * siempre era string y leía `.length` directamente → TypeError en
 * `useModuloEditor.ts:482`.
 *
 * Fix: `useModuloPersistence` (línea 105) ahora default a "" cuando
 * `module.subject` es `null` o `undefined`. El editor también
 * cambió `form.subject.length` por `(form.subject ?? "").length`.
 *
 * Cubre:
 *  1. `loadModule` con un response donde `subject` está ausente →
 *     el form se construye con `subject: ""` (no undefined).
 *  2. `loadModule` con un response donde `subject: null` → el form
 *     se construye con `subject: ""` (no null).
 *  3. `loadModule` con un response donde `subject: "Matemáticas"`
 *     → el form se construye con `subject: "Matemáticas"`.
 *
 * Ver `docs/qa/diagnostico_modulo_editor_crash.md`.
 */

import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, waitFor } from "@testing-library/react";
import { useEffect, useState } from "react";

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

function HookHarness({ id, onResult }: { id: string; onResult: (form: ModuleFormState) => void }) {
  const { loadModule } = useModuloPersistence();
  const [done, setDone] = useState(false);
  useEffect(() => {
    let cancelled = false;
    loadModule(id).then((result) => {
      if (cancelled) return;
      if (result) onResult(result.form);
      setDone(true);
    });
    return () => { cancelled = true; };
  }, [id, loadModule, onResult]);
  return <div data-testid="done">{done ? "yes" : "no"}</div>;
}

const MODULE_BASE = {
  id: "mod-1",
  title: "Módulo test",
  description: "desc",
  category: "general",
  level: "secundaria",
  durationMinutes: 30,
  visibility: "publico" as const,
  createdBy: "user-1",
  dependencies: [],
  updatedAt: "2026-06-17T00:00:00.000Z",
};

beforeEach(() => {
  vi.clearAllMocks();
  mockPost.mockResolvedValue({});
  mockPatch.mockResolvedValue({});
});

describe("FIX-MODULO-CRASH: useModuloPersistence.loadModule tolera subject ausente", () => {
  it("response con `subject` ausente → form.subject = '' (default, no undefined)", async () => {
    // Simula el caso del bug original: el back no devuelve `subject`
    // (antes de la columna agregada por la migración). El form
    // debe tener `subject: ""`, NO `subject: undefined`.
    mockGet.mockResolvedValue({ ...MODULE_BASE });
    let form: ModuleFormState | null = null;
    render(<HookHarness id="mod-1" onResult={(f) => { form = f; }} />);
    await waitFor(() => {
      expect(form).not.toBeNull();
    });
    expect(form!.subject).toBe("");
    expect(form!.subject).not.toBeUndefined();
  });

  it("response con `subject: null` → form.subject = ''", async () => {
    // Después de la migración, los módulos pre-FIX-GUARDADO vienen
    // con `subject: null` explícito. El form debe normalizar a "".
    mockGet.mockResolvedValue({ ...MODULE_BASE, subject: null });
    let form: ModuleFormState | null = null;
    render(<HookHarness id="mod-1" onResult={(f) => { form = f; }} />);
    await waitFor(() => {
      expect(form).not.toBeNull();
    });
    expect(form!.subject).toBe("");
  });

  it("response con `subject: 'Matemáticas'` → form.subject = 'Matemáticas'", async () => {
    // Caso feliz: una vez que FIX-GUARDADO persista, el back
    // devuelve el valor real y el form lo refleja tal cual.
    mockGet.mockResolvedValue({ ...MODULE_BASE, subject: "Matemáticas" });
    let form: ModuleFormState | null = null;
    render(<HookHarness id="mod-1" onResult={(f) => { form = f; }} />);
    await waitFor(() => {
      expect(form).not.toBeNull();
    });
    expect(form!.subject).toBe("Matemáticas");
  });
});
