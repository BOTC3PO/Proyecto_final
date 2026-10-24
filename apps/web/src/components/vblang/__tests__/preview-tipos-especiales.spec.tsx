/**
 * PLAN tiza-autoria-avanzada §8 — el preview dejaba a los tipos especiales
 * fuera, en silencio.
 *
 * Dos lugares distintos:
 *  - `QuizPreguntasNativasPreview`: un `catch` devolvía `null` y la pregunta
 *    desaparecía de la lista. El docente veía menos preguntas de las que tiene
 *    el cuestionario, sin ninguna pista de por qué.
 *  - `PreviewPanel` (la "Vista del alumno" de Tiza): para `marcar_mapa` mostraba
 *    sólo el texto del enunciado y un "Ver respuesta", sin dibujar el mapa.
 *    Verificado en vivo antes de arreglarlo.
 */
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import type { ModuleQuizQuestion } from "@vb/vblang";
import PreviewPanel from "../PreviewPanel";
import type { PreviewItem } from "../../../hooks/usePlantillaPreview";

function item(question: ModuleQuizQuestion): PreviewItem {
  return { seed: "s1", question };
}

const MAPA: ModuleQuizQuestion = {
  id: "q1",
  prompt: "Marcá Argentina en el mapa.",
  questionType: "marcar_mapa",
  focus: null,
  mapaId: "world_countries",
  modoRespuestaMapa: "iso",
  respuestaIsoCorrecta: "ARG",
  answerKey: "ARG",
};

describe("§8 · Vista del alumno de Tiza dibuja el mapa", () => {
  it("monta el renderer real para `marcar_mapa`", () => {
    render(<PreviewPanel preview={[item(MAPA)]} onRegenerate={() => {}} />);
    expect(screen.getByTestId("preview-mapa")).toBeTruthy();
    // El enunciado sigue estando.
    expect(screen.getByText(/Marcá Argentina/)).toBeTruthy();
  });

  it("las provincias pasan el país al renderer (no queda en blanco)", () => {
    render(
      <PreviewPanel
        preview={[
          item({
            ...MAPA,
            mapaId: "world_states_provinces",
            answerKey: "AR-C",
            respuestaIsoCorrecta: "AR-C",
            paisIso: "AR",
          }),
        ]}
        onRegenerate={() => {}}
      />,
    );
    expect(screen.getByTestId("preview-mapa")).toBeTruthy();
  });

  it("un tipo sin mapa no monta el renderer", () => {
    render(
      <PreviewPanel
        preview={[
          item({
            id: "q2",
            prompt: "Ordená los eventos",
            questionType: "ordenar",
            focus: null,
            items: ["a", "b"],
            answerKey: ["a", "b"],
          }),
        ]}
        onRegenerate={() => {}}
      />,
    );
    expect(screen.queryByTestId("preview-mapa")).toBeNull();
    // Pero sigue ofreciendo revelar la respuesta.
    expect(screen.getByRole("button", { name: /Ver respuesta|Show answer/i })).toBeTruthy();
  });

  it("un `marcar_mapa` sin mapaId no revienta: cae al camino de revelar", () => {
    const { mapaId: _omitido, ...sinMapa } = MAPA;
    render(<PreviewPanel preview={[item(sinMapa as ModuleQuizQuestion)]} onRegenerate={() => {}} />);
    expect(screen.queryByTestId("preview-mapa")).toBeNull();
    expect(screen.getByRole("button", { name: /Ver respuesta|Show answer/i })).toBeTruthy();
  });

  it("un error de generación se sigue mostrando como error", () => {
    render(
      <PreviewPanel
        preview={[{ seed: "s2", error: { message: "variable indefinida: a" } }]}
        onRegenerate={() => {}}
      />,
    );
    expect(screen.getByRole("alert").textContent).toContain("variable indefinida: a");
  });
});
