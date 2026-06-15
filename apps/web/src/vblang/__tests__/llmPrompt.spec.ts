/**
 * F7-02 — Prompt portable para IA externa.
 */
import { describe, expect, it } from "vitest";
import { generarReferenciaDsl } from "@vb/vblang";
import { buildPromptIA, CONTRATO_SALIDA_IA, limpiarRespuestaIA } from "../llmPrompt";

describe("buildPromptIA", () => {
  it("incluye la referencia DSL de F7-01", () => {
    const prompt = buildPromptIA("Un ejercicio de suma.");
    expect(prompt).toContain(generarReferenciaDsl());
  });

  it("incluye la descripción del docente", () => {
    const prompt = buildPromptIA("Un ejercicio de opción múltiple sobre la tabla periódica.");
    expect(prompt).toContain("Un ejercicio de opción múltiple sobre la tabla periódica.");
  });

  it("incluye el contrato de salida estricto", () => {
    const prompt = buildPromptIA("algo");
    expect(prompt).toContain(CONTRATO_SALIDA_IA);
    expect(prompt).toMatch(/SOLO con código VBLang válido/);
  });

  it("descripción vacía no rompe el prompt", () => {
    const prompt = buildPromptIA("   ");
    expect(prompt).toContain("(sin descripción)");
  });
});

describe("limpiarRespuestaIA", () => {
  it("quita fences ```vblang ... ```", () => {
    const respuesta = "```vblang\nenunciado: \"hola\"\nrespuesta: 1\ntipo: input\n```";
    expect(limpiarRespuestaIA(respuesta)).toBe(
      'enunciado: "hola"\nrespuesta: 1\ntipo: input',
    );
  });

  it("quita fences ``` sin lenguaje", () => {
    const respuesta = "```\nenunciado: \"hola\"\nrespuesta: 1\n```";
    expect(limpiarRespuestaIA(respuesta)).toBe('enunciado: "hola"\nrespuesta: 1');
  });

  it("deja el texto sin fences tal cual (recortado)", () => {
    const respuesta = "  enunciado: \"hola\"\nrespuesta: 1  ";
    expect(limpiarRespuestaIA(respuesta)).toBe('enunciado: "hola"\nrespuesta: 1');
  });
});
