/**
 * FIX-LEER-VOZ-ALTA — el TTS del módulo (`ModuloDetail.leerModulo`)
 * chequeaba `bloque.type === "text"` pero el editor emite `"Texto"`
 * (con mayúscula) como tipo canónico de un bloque de teoría. El
 // match nunca se cumplía y la lectura en voz alta solo leía el
 // título y la descripción del módulo — bug 7.1 de
 // `docs/qa/test-parte-3-profesor.md`.
 *
 * FIX: normalizamos contra "Texto" (canónico) y aceptamos "text"
 // en minúsculas por compat con data antigua.
 */

import { describe, expect, it } from "vitest";

import { extractTextForTts } from "../ModuloDetail";

describe("FIX-LEER-VOZ-ALTA: extracción de texto para TTS", () => {
  it("incluye el detail de bloques con type 'Texto' (canónico)", () => {
    const module = {
      title: "Suma",
      description: "Conceptos básicos",
      theoryBlocks: [
        { id: "b1", title: "Introducción", type: "Texto", detail: "La suma combina dos cantidades." },
      ],
    };
    const out = extractTextForTts(module);
    expect(out).toContain("Suma");
    expect(out).toContain("Conceptos básicos");
    expect(out).toContain("Introducción");
    expect(out).toContain("La suma combina dos cantidades.");
  });

  it("FIX: acepta 'text' en minúsculas por compat con data legacy", () => {
    const module = {
      title: "Módulo legacy",
      description: "desc",
      theoryBlocks: [
        { id: "b1", title: "Intro", type: "text", detail: "Contenido legacy." },
      ],
    };
    const out = extractTextForTts(module);
    expect(out).toContain("Contenido legacy.");
  });

  it("incluye alt text de bloques 'image'", () => {
    const module = {
      title: "M",
      description: "d",
      theoryBlocks: [
        { id: "b1", title: "", type: "image", detail: "", alt: "Diagrama de circuito" },
      ],
    };
    const out = extractTextForTts(module);
    expect(out).toContain("Imagen: Diagrama de circuito");
  });

  it("no incluye el detail de bloques 'Video' (no son texto leíble)", () => {
    const module = {
      title: "M",
      description: "d",
      theoryBlocks: [
        { id: "b1", title: "Video", type: "Video", detail: "https://youtu.be/xyz" },
      ],
    };
    const out = extractTextForTts(module);
    expect(out).not.toContain("https://youtu.be");
  });

  it("tolera módulos sin theoryBlocks (solo título+descripción)", () => {
    const out = extractTextForTts({ title: "Solo", description: "desc" });
    expect(out).toEqual(["Solo", "desc"]);
  });
});
