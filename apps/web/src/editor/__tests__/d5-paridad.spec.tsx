import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { parse, serialize } from "@vb/vblang";
import {
  readEtiquetas,
  writeEtiquetas,
} from "../../components/vblang/plantillaFields";
import EditorPlantilla from "../EditorPlantilla";

describe("D5 — etiquetas + diccionario", () => {
  it("readEtiquetas/writeEtiquetas: round-trip idempotente", () => {
    const dsl =
      `enunciado: "Analizá la oración."\n` +
      `tipo: analisis_sintactico\n` +
      `texto_analizar: "el gato duerme"\n` +
      `etiquetas_pedidas:\n` +
      `  - { palabra: "gato", etiqueta: "sustantivo" }\n` +
      `  - { palabra: "duerme", etiqueta: "verbo" }\n`;
    const p = parse(dsl);
    expect(readEtiquetas(p)).toEqual([
      { palabra: "gato", etiqueta: "sustantivo" },
      { palabra: "duerme", etiqueta: "verbo" },
    ]);
    const p2 = writeEtiquetas(p, readEtiquetas(p));
    const once = serialize(p2);
    expect(serialize(parse(once))).toBe(once);
  });

  it("autorea las etiquetas en el editor nuevo (combobox de palabra)", () => {
    const p = parse(
      `enunciado: "Analizá."\n` +
        `tipo: analisis_sintactico\n` +
        `texto_analizar: "el gato duerme"\n` +
        `etiquetas_pedidas:\n` +
        `  - { palabra: "gato", etiqueta: "sustantivo" }\n`,
    );
    render(<EditorPlantilla plantilla={p} onChange={() => {}} />);
    // El combobox de palabra (reusado) se monta con su rol WAI-ARIA.
    expect(screen.getByRole("combobox", { name: /Palabra 1/i })).toBeInTheDocument();
    // Y el valor de la palabra autoreada está presente.
    expect(screen.getByDisplayValue("gato")).toBeInTheDocument();
  });
});

describe("D5 — lint inline por campo", () => {
  it("surfacea el error del validador en el campo respuesta (vf no booleana)", () => {
    const p = parse(`enunciado: "¿Verdadero?"\ntipo: vf\nrespuesta: "texto"\n`);
    render(<EditorPlantilla plantilla={p} onChange={() => {}} />);
    // El mensaje del linter (vf-requires-boolean) aparece dos veces: en el
    // panel resumen y como alerta del campo `respuesta` (lint por campo).
    const matches = screen.getAllByText(/requiere respuesta booleana/i);
    expect(matches.length).toBeGreaterThanOrEqual(2);
  });

  it("sin issues, no muestra panel ni alertas de campo", () => {
    const p = parse(`enunciado: "2+2?"\ntipo: input\nrespuesta: "4"\n`);
    render(<EditorPlantilla plantilla={p} onChange={() => {}} />);
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });
});
