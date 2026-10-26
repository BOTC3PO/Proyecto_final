/**
 * PLAN-W §3 fase 2 — escritura fluida: Enter parte el párrafo actual
 * en dos (SPLIT_PARAGRAPH); Backspace en un párrafo vacío lo borra y
 * sube el foco al anterior (reusa DELETE_BLOCK + SELECT_BLOCK
 * existentes, sin lógica nueva para ese caso).
 */
import { describe, expect, it } from "vitest";
import { editorReducer, type EditorState } from "../bookEditor.reducer";
import type { Book } from "../../../domain/book/book.types";

function makeState(paragraphs: string[]): EditorState {
  const book: Book = {
    schema: "book.pages@1.1",
    metadata: { id: "b1", title: "Libro test", language: "es" },
    structure: { pageNumbering: { startAt: 1 } },
    pages: [
      {
        id: "p1",
        number: 1,
        content: paragraphs.map((text, i) => ({
          type: "paragraph" as const,
          id: `para-${i}`,
          runs: [{ text }],
          blockStyle: { align: "left" as const },
        })),
      },
    ],
  } as unknown as Book;

  return {
    book,
    selectedPageId: "p1",
    selectedBlockId: null,
    issues: [],
    dirty: false,
  };
}

describe("PLAN-W §3 fase 2: SPLIT_PARAGRAPH", () => {
  it("parte el texto en beforeText/afterText y crea un párrafo nuevo justo después", () => {
    const state = makeState(["Hola mundo"]);
    const next = editorReducer(state, {
      type: "SPLIT_PARAGRAPH",
      pageId: "p1",
      blockId: "para-0",
      beforeText: "Hola",
      afterText: " mundo",
    });

    const content = next.book!.pages[0].content;
    expect(content).toHaveLength(2);
    expect(content[0].type).toBe("paragraph");
    expect((content[0] as { runs: { text: string }[] }).runs[0].text).toBe("Hola");
    expect((content[1] as { runs: { text: string }[] }).runs[0].text).toBe(" mundo");
  });

  it("el foco (selectedBlockId) pasa al párrafo nuevo", () => {
    const state = makeState(["Hola mundo"]);
    const next = editorReducer(state, {
      type: "SPLIT_PARAGRAPH",
      pageId: "p1",
      blockId: "para-0",
      beforeText: "Hola",
      afterText: " mundo",
    });
    const newBlockId = next.book!.pages[0].content[1].id;
    expect(next.selectedBlockId).toBe(newBlockId);
  });

  it("insertar en medio de dos párrafos existentes preserva el orden", () => {
    const state = makeState(["Primero", "Tercero"]);
    const next = editorReducer(state, {
      type: "SPLIT_PARAGRAPH",
      pageId: "p1",
      blockId: "para-0",
      beforeText: "Primero",
      afterText: "",
    });
    const content = next.book!.pages[0].content;
    expect(content).toHaveLength(3);
    expect((content[0] as { runs: { text: string }[] }).runs[0].text).toBe("Primero");
    expect((content[1] as { runs: { text: string }[] }).runs[0].text).toBe("");
    expect((content[2] as { runs: { text: string }[] }).runs[0].text).toBe("Tercero");
  });
});

describe("PLAN-W §3 fase 2: Backspace en párrafo vacío (DELETE_BLOCK + SELECT_BLOCK)", () => {
  it("borra el bloque vacío y el foco sube al anterior", () => {
    const state = makeState(["Primero", ""]);
    const afterDelete = editorReducer(state, {
      type: "DELETE_BLOCK",
      pageId: "p1",
      blockId: "para-1",
    });
    const afterSelect = editorReducer(afterDelete, {
      type: "SELECT_BLOCK",
      blockId: "para-0",
    });

    expect(afterSelect.book!.pages[0].content).toHaveLength(1);
    expect(afterSelect.book!.pages[0].content[0].id).toBe("para-0");
    expect(afterSelect.selectedBlockId).toBe("para-0");
  });
});
