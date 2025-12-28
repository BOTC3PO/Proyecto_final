import type { Book, Page, Block, TextRun, TextStyle, BlockStyle } from "../../domain/book/book.types";

export type EditorState = {
  book: Book | null;
  selectedPageId: string | null;
  selectedBlockId: string | null;
  issues: Array<{ level: "error" | "warn"; message: string; path?: string }>;
  dirty: boolean;
};

export type EditorAction =
  | { type: "LOAD_BOOK"; book: Book }
  | { type: "SELECT_PAGE"; pageId: string }
  | { type: "SELECT_BLOCK"; blockId: string | null }
  | { type: "SET_ISSUES"; issues: EditorState["issues"] }
  | { type: "MARK_DIRTY"; dirty: boolean }
  | { type: "ADD_PAGE" }
  | { type: "ADD_BLOCK"; blockType: Block["type"] }
  | { type: "UPDATE_PARAGRAPH_RUN"; pageId: string; blockId: string; runIndex: number; patch: Partial<TextRun> }
  | { type: "UPDATE_PARAGRAPH_BLOCKSTYLE"; pageId: string; blockId: string; patch: Partial<BlockStyle> }
  | { type: "UPDATE_RUN_STYLE"; pageId: string; blockId: string; runIndex: number; patch: Partial<TextStyle> };

export function editorReducer(state: EditorState, action: EditorAction): EditorState {
  switch (action.type) {
    case "LOAD_BOOK": {
      const firstPageId = action.book.pages[0]?.id ?? null;
      return { ...state, book: action.book, selectedPageId: firstPageId, selectedBlockId: null, dirty: false };
    }
    case "SELECT_PAGE":
      return { ...state, selectedPageId: action.pageId, selectedBlockId: null };
    case "SELECT_BLOCK":
      return { ...state, selectedBlockId: action.blockId };

    // A partir de acá, mutaciones (simplificadas): las completamos en el próximo paso
    default:
      return state;
  }
}
