/**
 * PLAN-F ítem 30 — `useMaterias` es la fuente única que consumen todos los
 * selectores de materia (ModuloEditor, ProfesorAulas, EditorCuestionariosV2,
 * MetadataPanel de VBLang). Antes cada uno duplicaba este fetch + fallback
 * (o, en el caso de MetadataPanel, ni siquiera fetcheaba — tenía una lista
 * hardcodeada que no reflejaba las materias creadas desde /admin/materias).
 *
 * Cubre:
 *  - Si el back devuelve items, el hook expone esos nombres.
 *  - Si el back responde vacío o falla, cae al fallback canónico (mismo
 *    listado que el propio endpoint devuelve cuando la tabla está vacía).
 *  - `loading` refleja el estado del fetch.
 */
import { describe, expect, it, vi, beforeEach } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";

const { apiGetMock } = vi.hoisted(() => ({ apiGetMock: vi.fn() }));

vi.mock("../../../lib/api", async (importOriginal) => {
  const actual = await importOriginal<typeof import("../../../lib/api")>();
  return { ...actual, apiGet: apiGetMock };
});

import { useMaterias, FALLBACK_MATERIAS } from "../useMaterias";

beforeEach(() => {
  apiGetMock.mockReset();
});

describe("useMaterias", () => {
  it("expone los nombres que devuelve /api/materias", async () => {
    apiGetMock.mockResolvedValue({ items: [{ nombre: "Programación" }, { nombre: "Robótica" }] });
    const { result } = renderHook(() => useMaterias());
    expect(result.current.loading).toBe(true);
    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.materias).toEqual(["Programación", "Robótica"]);
  });

  it("cae al fallback canónico si el back devuelve items vacíos", async () => {
    apiGetMock.mockResolvedValue({ items: [] });
    const { result } = renderHook(() => useMaterias());
    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.materias).toEqual([...FALLBACK_MATERIAS]);
  });

  it("cae al fallback canónico si el fetch falla", async () => {
    apiGetMock.mockRejectedValue(new Error("network down"));
    const { result } = renderHook(() => useMaterias());
    await waitFor(() => expect(result.current.loading).toBe(false));
    expect(result.current.materias).toEqual([...FALLBACK_MATERIAS]);
  });
});
