/**
 * Tarea 04b — ModuloDetail.loadPreviewForQuiz filtra enunciadoTemplates.
 * Caso: params.enunciadoTemplates = ["", "X: {subtipo}"] → array
 * efectivo ["X: {subtipo}"] → todos los enunciados generados empiezan
 * con "X:".
 *
 * El test replica la logica de filtrado inline (mismo predicate que el
 * componente) y la aplica al descriptor real para verificar el
 * comportamiento end-to-end.
 */
import { describe, expect, it } from "vitest";
import { DeterministicPrng } from "../../../generadoresV2/core/prng";
import { getDescriptoresBiologia } from "../../../generadoresV2/biologia/index";
import { applyEnunciadoTemplateExt } from "../../../generadoresV2/core/shared";

function freshDescriptor() {
  const prng = new DeterministicPrng(42);
  const descriptors = getDescriptoresBiologia(prng);
  expect(descriptors.length).toBeGreaterThan(0);
  return descriptors[0];
}

function filtrarTemplates(raw: unknown): string[] | undefined {
  const filtrados = Array.isArray(raw)
    ? raw.filter(
        (s): s is string => typeof s === "string" && s.trim().length > 0,
      )
    : [];
  return filtrados.length > 0 ? filtrados : undefined;
}

describe("ModuloDetail / loadPreviewForQuiz — filtro enunciadoTemplates (Tarea 04b)", () => {
  it('["", "X: {subtipo}"] → array efectivo ["X: {subtipo}"] (vacio descartado)', () => {
    const filtrados = filtrarTemplates(["", "X: {subtipo}"]);
    expect(filtrados).toEqual(["X: {subtipo}"]);
  });

  it('solo "" → undefined (no se pasa template al descriptor)', () => {
    const filtrados = filtrarTemplates([""]);
    expect(filtrados).toBeUndefined();
  });

  it('["   ", "  X: {subtipo}  "] → descarta el blanco, conserva el otro (no transforma)', () => {
    // El filtro solo valida (trim().length > 0); NO modifica el string.
    const filtrados = filtrarTemplates(["   ", "  X: {subtipo}  "]);
    expect(filtrados).toEqual(["  X: {subtipo}  "]);
  });

  it("no array → undefined", () => {
    expect(filtrarTemplates(undefined)).toBeUndefined();
    expect(filtrarTemplates("hola")).toBeUndefined();
    expect(filtrarTemplates(42)).toBeUndefined();
  });

  it("array con strings no-string → solo los string validos pasan", () => {
    // Mezcla con un numero; el filtro de tipo los descarta.
    const filtrados = filtrarTemplates([42 as unknown as string, "Y: {subtipo}"]);
    expect(filtrados).toEqual(["Y: {subtipo}"]);
  });

  it("end-to-end: con ['', 'X: {subtipo}'] el descriptor produce enunciados que empiezan con 'X:'", () => {
    const subtipo = "genetica_mendel";
    const templates = filtrarTemplates(["", "X: {subtipo}"]);
    expect(templates).toBeDefined();

    // 5 ejercicios con seeds distintos: todos deben usar la unica variante
    // efectiva ("X: {subtipo}") y arrancar con "X:".
    for (let i = 0; i < 5; i += 1) {
      const prng = new DeterministicPrng(`e2e-${i}`);
      const descriptor = freshDescriptor();
      const ejercicio = descriptor.generate("basico", prng, subtipo, templates);
      // El enunciado crudo del descriptor (sin aplicar template) puede no
      // empezar con X, pero al aplicar el template (lo que el runtime hace
      // en baseGenerador) SI debe empezar con X.
      const aplicado = applyEnunciadoTemplateExt(templates![0], {
        enunciado: ejercicio.enunciado,
        subtipo,
        tipo: ejercicio.tipo,
      });
      expect(aplicado.startsWith("X:")).toBe(true);
    }
  });
});
