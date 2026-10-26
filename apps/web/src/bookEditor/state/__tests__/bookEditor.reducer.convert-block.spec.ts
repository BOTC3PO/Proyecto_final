/**
 * PLAN-W §3 fase 1 (corrección) — galería de estilos: CONVERT_BLOCK
 * convierte párrafo ↔ título preservando texto, alineación y estilo;
 * sobre un heading, pedir otro nivel sólo cambia `level`.
 */
import { describe, expect, it } from "vitest";
import { editorReducer, type EditorState } from "../bookEditor.reducer";
import type { Book, Block } from "../../../domain/book/book.types";

function makeState(content: Block[]): EditorState {
  const book: Book = {
    schema: "book.pages@1.1",
    metadata: { id: "b1", title: "Libro test", language: "es" },
    structure: { pageNumbering: { startAt: 1 } },
    pages: [{ id: "p1", number: 1, content }],
  } as unknown as Book;

  return {
    book,
    selectedPageId: "p1",
    selectedBlockId: null,
    issues: [],
    dirty: false,
  };
}

describe("PLAN-W §3 fase 1: CONVERT_BLOCK (galería de estilos)", () => {
  it("párrafo → título conserva texto, align y estilo del run", () => {
    const state = makeState([
      {
        type: "paragraph",
        id: "b-0",
        runs: [{ text: "Hola mundo", style: { bold: true, color: "#ff0000" } }],
        blockStyle: { align: "center" },
      },
    ]);
    const next = editorReducer(state, {
      type: "CONVERT_BLOCK",
      pageId: "p1",
      blockId: "b-0",
      to: { heading: 2 },
    });

    const block = next.book!.pages[0].content[0];
    expect(block.type).toBe("heading");
    expect(block.id).toBe("b-0"); // mismo id → la selección no se pierde
    const heading = block as Extract<Block, { type: "heading" }>;
    expect(heading.level).toBe(2);
    expect(heading.text).toBe("Hola mundo");
    expect(heading.blockStyle?.align).toBe("center");
    expect(heading.textStyle?.bold).toBe(true);
    expect(heading.textStyle?.color).toBe("#ff0000");
    expect(next.dirty).toBe(true);
  });

  it("título → párrafo conserva texto, align y textStyle en el run", () => {
    const state = makeState([
      {
        type: "heading",
        id: "b-0",
        level: 3,
        text: "Un título",
        blockStyle: { align: "right" },
        textStyle: { italic: true },
      },
    ]);
    const next = editorReducer(state, {
      type: "CONVERT_BLOCK",
      pageId: "p1",
      blockId: "b-0",
      to: "paragraph",
    });

    const block = next.book!.pages[0].content[0];
    expect(block.type).toBe("paragraph");
    expect(block.id).toBe("b-0");
    const para = block as Extract<Block, { type: "paragraph" }>;
    expect(para.runs?.[0]?.text).toBe("Un título");
    expect(para.runs?.[0]?.style?.italic).toBe(true);
    expect(para.blockStyle?.align).toBe("right");
  });

  it("título → otro nivel sólo cambia level", () => {
    const state = makeState([
      { type: "heading", id: "b-0", level: 1, text: "T" },
    ]);
    const next = editorReducer(state, {
      type: "CONVERT_BLOCK",
      pageId: "p1",
      blockId: "b-0",
      to: { heading: 4 },
    });
    const heading = next.book!.pages[0].content[0] as Extract<Block, { type: "heading" }>;
    expect(heading.level).toBe(4);
    expect(heading.text).toBe("T");
  });

  it("párrafo → 'paragraph' y bloques no-texto quedan intactos", () => {
    const state = makeState([
      { type: "paragraph", id: "b-0", runs: [{ text: "x" }] },
      { type: "divider", id: "b-1" },
    ]);
    const same = editorReducer(state, {
      type: "CONVERT_BLOCK",
      pageId: "p1",
      blockId: "b-0",
      to: "paragraph",
    });
    expect(same.book!.pages[0].content[0]).toEqual(state.book!.pages[0].content[0]);

    const divider = editorReducer(state, {
      type: "CONVERT_BLOCK",
      pageId: "p1",
      blockId: "b-1",
      to: { heading: 1 },
    });
    expect(divider.book!.pages[0].content[1].type).toBe("divider");
  });

  it("párrafo legado con `text` plano (sin runs) también convierte", () => {
    const state = makeState([
      { type: "paragraph", id: "b-0", text: "texto plano" } as Block,
    ]);
    const next = editorReducer(state, {
      type: "CONVERT_BLOCK",
      pageId: "p1",
      blockId: "b-0",
      to: { heading: 1 },
    });
    const heading = next.book!.pages[0].content[0] as Extract<Block, { type: "heading" }>;
    expect(heading.text).toBe("texto plano");
  });
});
