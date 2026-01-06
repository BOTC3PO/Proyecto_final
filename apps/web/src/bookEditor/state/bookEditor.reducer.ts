import { makePageIdFromNumber, makeBlockId } from "../../domain/book/utils";
import type {
  Book,
  Page,
  Block,
  TextRun,
  TextStyle,
  BlockStyle,
} from "../../domain/book/book.types";

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
  | {
      type: "UPDATE_PARAGRAPH_RUN";
      pageId: string;
      blockId: string;
      runIndex: number;
      patch: Partial<TextRun>;
    }
  | {
      type: "UPDATE_PARAGRAPH_BLOCKSTYLE";
      pageId: string;
      blockId: string;
      patch: Partial<BlockStyle>;
    }
  | {
      type: "UPDATE_RUN_STYLE";
      pageId: string;
      blockId: string;
      runIndex: number;
      patch: Partial<TextStyle>;
    };

function updatePage(book: Book, pageId: string, updater: (p: Page) => Page): Book {
  return {
    ...book,
    pages: book.pages.map((p) => (p.id === pageId ? updater(p) : p)),
  };
}

function updateBlockOnPage(page: Page, blockId: string, updater: (b: Block) => Block): Page {
  return {
    ...page,
    content: page.content.map((b) => (b.id === blockId ? updater(b) : b)),
  };
}

function createDefaultBlock(
  pageId: string,
  blockType: Block["type"],
  indexInPage: number
): Block {
  const id = makeBlockId(pageId, blockType, indexInPage);

  switch (blockType) {
    case "heading":
      return {
        type: "heading",
        id,
        level: 2,
        text: "Título",
        blockStyle: { align: "left" },
        textStyle: { bold: true },
      };

    case "paragraph":
      return {
        type: "paragraph",
        id,
        runs: [{ text: "" }],
        blockStyle: { align: "left" },
      };

    case "image":
      return {
        type: "image",
        id,
        assetId: "asset-placeholder",
        caption: "",
        blockStyle: { align: "center" },
      };

    case "divider":
      return { type: "divider", id };

    case "pageBreak":
      return { type: "pageBreak", id };

    default: {
      // Exhaustividad: si agregás nuevos tipos, TS te va a avisar acá.
      const _never: never = blockType;
      return _never;
    }
  }
}

export function editorReducer(state: EditorState, action: EditorAction): EditorState {
  switch (action.type) {
    case "LOAD_BOOK": {
      const firstPageId = action.book.pages[0]?.id ?? null;
      return {
        ...state,
        book: action.book,
        selectedPageId: firstPageId,
        selectedBlockId: null,
        dirty: false,
      };
    }

    case "SELECT_PAGE":
      return { ...state, selectedPageId: action.pageId, selectedBlockId: null };

    case "SELECT_BLOCK":
      return { ...state, selectedBlockId: action.blockId };

    case "SET_ISSUES":
      return { ...state, issues: action.issues };

    case "MARK_DIRTY":
      return { ...state, dirty: action.dirty };

    case "ADD_PAGE": {
      if (!state.book) return state;

      const newNumber = state.book.pages.length + 1;
      const newPage: Page = {
        id: makePageIdFromNumber(newNumber),
        number: newNumber,
        content: [],
      };

      const updatedBook: Book = { ...state.book, pages: [...state.book.pages, newPage] };

      return {
        ...state,
        book: updatedBook,
        selectedPageId: newPage.id,
        selectedBlockId: null,
        dirty: true,
      };
    }

    case "ADD_BLOCK": {
      if (!state.book || !state.selectedPageId) return state;

      const page = state.book.pages.find((p) => p.id === state.selectedPageId);
      if (!page) return state;

      const newBlock = createDefaultBlock(
        state.selectedPageId,
        action.blockType,
        page.content.length + 1
      );

      const updatedBook = updatePage(state.book, state.selectedPageId, (p) => ({
        ...p,
        content: [...p.content, newBlock],
      }));

      return {
        ...state,
        book: updatedBook,
        selectedBlockId: newBlock.id,
        dirty: true,
      };
    }

    case "UPDATE_PARAGRAPH_RUN": {
      if (!state.book) return state;

      const { pageId, blockId, runIndex, patch } = action;

      const updatedBook = updatePage(state.book, pageId, (p) =>
        updateBlockOnPage(p, blockId, (b) => {
          if (b.type !== "paragraph") return b;

          const runs = b.runs ?? [{ text: "" }];
          const safeIndex = Math.max(0, Math.min(runIndex, runs.length - 1));

          const updatedRuns = runs.map((r, i) => (i === safeIndex ? { ...r, ...patch } : r));

          return { ...b, runs: updatedRuns };
        })
      );

      return { ...state, book: updatedBook, dirty: true };
    }

    case "UPDATE_PARAGRAPH_BLOCKSTYLE": {
      if (!state.book) return state;

      const { pageId, blockId, patch } = action;

      const updatedBook = updatePage(state.book, pageId, (p) =>
        updateBlockOnPage(p, blockId, (b) => {
          if (b.type !== "paragraph") return b;
          return { ...b, blockStyle: { ...(b.blockStyle ?? {}), ...patch } };
        })
      );

      return { ...state, book: updatedBook, dirty: true };
    }

    case "UPDATE_RUN_STYLE": {
      if (!state.book) return state;

      const { pageId, blockId, runIndex, patch } = action;

      const updatedBook = updatePage(state.book, pageId, (p) =>
        updateBlockOnPage(p, blockId, (b) => {
          if (b.type !== "paragraph") return b;

          const runs = b.runs ?? [{ text: "" }];
          const safeIndex = Math.max(0, Math.min(runIndex, runs.length - 1));

          const updatedRuns = runs.map((r, i) =>
            i === safeIndex ? { ...r, style: { ...(r.style ?? {}), ...patch } } : r
          );

          return { ...b, runs: updatedRuns };
        })
      );

      return { ...state, book: updatedBook, dirty: true };
    }

    default:
      return state;
  }
}
