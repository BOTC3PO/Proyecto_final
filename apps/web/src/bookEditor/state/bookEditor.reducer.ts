import { makePageIdFromNumber, makeBlockId } from "../../domain/book/utils";
import type {
  Book,
  Page,
  Block,
  TextRun,
  TextStyle,
  BlockStyle,
  BookAsset,
  BookNote,
} from "../../domain/book/book.types";

export type EditorState = {
  book: Book | null;
  selectedPageId: string | null;
  selectedBlockId: string | null;
  issues: Array<{ level: "error" | "warn"; message: string; path?: string }>;
  dirty: boolean;
};

type TocEntry = { id: string; title: string; pageStart: number; anchor: string };
type PageAnchor = { id: string; label?: string };

export type EditorAction =
  | { type: "LOAD_BOOK"; book: Book }
  | { type: "SELECT_PAGE"; pageId: string }
  | { type: "SELECT_BLOCK"; blockId: string | null }
  | { type: "SET_ISSUES"; issues: EditorState["issues"] }
  | { type: "MARK_DIRTY"; dirty: boolean }
  | { type: "ADD_PAGE" }
  | { type: "ADD_BLOCK"; blockType: Block["type"] }
  | { type: "UPDATE_PAGE_TITLE"; pageId: string; title: string }
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
    }
  | {
      type: "UPDATE_HEADING";
      pageId: string;
      blockId: string;
      patch: {
        text?: string;
        level?: 1 | 2 | 3 | 4 | 5 | 6;
        blockStyle?: Partial<BlockStyle>;
        textStyle?: Partial<TextStyle>;
      };
    }
  | {
      type: "UPDATE_IMAGE";
      pageId: string;
      blockId: string;
      patch: { caption?: string; assetId?: string; blockStyle?: Partial<BlockStyle> };
    }
  | { type: "MOVE_PAGE"; pageId: string; direction: "up" | "down" }
  | { type: "MOVE_BLOCK"; pageId: string; blockId: string; direction: "up" | "down" }
  | { type: "DELETE_PAGE"; pageId: string }
  | { type: "DELETE_BLOCK"; pageId: string; blockId: string }
  | { type: "DUPLICATE_PAGE"; pageId: string }
  | { type: "DUPLICATE_BLOCK"; pageId: string; blockId: string }
  | { type: "RESTORE_BOOK"; book: Book }
  | {
      type: "UPDATE_METADATA";
      patch: { title?: string; subtitle?: string; language?: string; difficulty?: number };
    }
  | {
      type: "UPDATE_THEME";
      patch: {
        paperColor?: string;
        textColor?: string;
        fontFamily?: string;
        baseFontSizePx?: number;
        lineHeight?: number;
      };
    }
  | { type: "ADD_ASSET"; asset: BookAsset }
  | { type: "REMOVE_ASSET"; assetId: string }
  // TOC
  | { type: "ADD_TOC_ENTRY"; entry: TocEntry }
  | { type: "UPDATE_TOC_ENTRY"; entryId: string; patch: Partial<Omit<TocEntry, "id">> }
  | { type: "REMOVE_TOC_ENTRY"; entryId: string }
  | { type: "MOVE_TOC_ENTRY"; entryId: string; direction: "up" | "down" }
  // Page anchors
  | { type: "ADD_PAGE_ANCHOR"; pageId: string; anchor: PageAnchor }
  | { type: "UPDATE_PAGE_ANCHOR"; pageId: string; anchorId: string; patch: { label?: string } }
  | { type: "REMOVE_PAGE_ANCHOR"; pageId: string; anchorId: string }
  // Notes (glossary / author notes)
  | { type: "ADD_NOTE"; note: BookNote }
  | { type: "UPDATE_NOTE"; noteId: string; patch: Partial<Omit<BookNote, "id">> }
  | { type: "REMOVE_NOTE"; noteId: string };

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
      const _never: never = blockType;
      return _never;
    }
  }
}

function makeSuffix(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 4);
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

    case "UPDATE_PAGE_TITLE": {
      if (!state.book) return state;
      const updatedBook = updatePage(state.book, action.pageId, (p) => ({
        ...p,
        title: action.title || undefined,
      }));
      return { ...state, book: updatedBook, dirty: true };
    }

    case "UPDATE_PARAGRAPH_RUN": {
      if (!state.book) return state;

      const { pageId, blockId, runIndex, patch } = action;

      const updatedBook = updatePage(state.book, pageId, (p) =>
        updateBlockOnPage(p, blockId, (b) => {
          if (b.type !== "paragraph") return b;

          const runs = b.runs ?? [{ text: "" }];

          if (runs.length === 0 && runIndex === 0) {
            return { ...b, runs: [{ text: "", ...patch }] };
          }

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

    case "UPDATE_HEADING": {
      if (!state.book) return state;

      const { pageId, blockId, patch } = action;

      const updatedBook = updatePage(state.book, pageId, (p) =>
        updateBlockOnPage(p, blockId, (b): Block => {
          if (b.type !== "heading") return b;
          return {
            ...b,
            ...(patch.text !== undefined && { text: patch.text }),
            ...(patch.level !== undefined && { level: patch.level }),
            ...(patch.blockStyle !== undefined && {
              blockStyle: { ...(b.blockStyle ?? {}), ...patch.blockStyle },
            }),
            ...(patch.textStyle !== undefined && {
              textStyle: { ...(b.textStyle ?? {}), ...patch.textStyle },
            }),
          };
        })
      );

      return { ...state, book: updatedBook, dirty: true };
    }

    case "UPDATE_IMAGE": {
      if (!state.book) return state;

      const { pageId, blockId, patch } = action;

      const updatedBook = updatePage(state.book, pageId, (p) =>
        updateBlockOnPage(p, blockId, (b): Block => {
          if (b.type !== "image") return b;
          return {
            ...b,
            ...(patch.assetId !== undefined && { assetId: patch.assetId }),
            ...(patch.caption !== undefined && { caption: patch.caption }),
            ...(patch.blockStyle !== undefined && {
              blockStyle: { ...(b.blockStyle ?? {}), ...patch.blockStyle },
            }),
          };
        })
      );

      return { ...state, book: updatedBook, dirty: true };
    }

    case "MOVE_PAGE": {
      if (!state.book) return state;

      const pages = [...state.book.pages];
      const idx = pages.findIndex((p) => p.id === action.pageId);
      if (idx < 0) return state;

      const newIdx = action.direction === "up" ? idx - 1 : idx + 1;
      if (newIdx < 0 || newIdx >= pages.length) return state;

      [pages[idx], pages[newIdx]] = [pages[newIdx], pages[idx]];

      return { ...state, book: { ...state.book, pages }, dirty: true };
    }

    case "MOVE_BLOCK": {
      if (!state.book) return state;

      const updatedBook = updatePage(state.book, action.pageId, (p) => {
        const content = [...p.content];
        const idx = content.findIndex((b) => b.id === action.blockId);
        if (idx < 0) return p;

        const newIdx = action.direction === "up" ? idx - 1 : idx + 1;
        if (newIdx < 0 || newIdx >= content.length) return p;

        [content[idx], content[newIdx]] = [content[newIdx], content[idx]];
        return { ...p, content };
      });

      return { ...state, book: updatedBook, dirty: true };
    }

    case "DELETE_PAGE": {
      if (!state.book) return state;
      if (state.book.pages.length <= 1) return state;

      const pages = state.book.pages.filter((p) => p.id !== action.pageId);
      const newSelectedId =
        state.selectedPageId === action.pageId ? (pages[0]?.id ?? null) : state.selectedPageId;

      return {
        ...state,
        book: { ...state.book, pages },
        selectedPageId: newSelectedId,
        selectedBlockId: state.selectedPageId === action.pageId ? null : state.selectedBlockId,
        dirty: true,
      };
    }

    case "DELETE_BLOCK": {
      if (!state.book) return state;

      const updatedBook = updatePage(state.book, action.pageId, (p) => ({
        ...p,
        content: p.content.filter((b) => b.id !== action.blockId),
      }));

      return {
        ...state,
        book: updatedBook,
        selectedBlockId: state.selectedBlockId === action.blockId ? null : state.selectedBlockId,
        dirty: true,
      };
    }

    case "DUPLICATE_PAGE": {
      if (!state.book) return state;

      const idx = state.book.pages.findIndex((p) => p.id === action.pageId);
      if (idx < 0) return state;

      const original = state.book.pages[idx];
      const suffix = makeSuffix();

      const newPage: Page = {
        ...original,
        id: `${original.id}-c${suffix}`,
        title: original.title ? `${original.title} (copia)` : undefined,
        content: original.content.map((b) => ({ ...b, id: `${b.id}-c${suffix}` } as Block)),
      };

      const pages = [...state.book.pages];
      pages.splice(idx + 1, 0, newPage);

      const renumbered = pages.map((p, i) => ({ ...p, number: i + 1 }));

      return {
        ...state,
        book: { ...state.book, pages: renumbered },
        selectedPageId: newPage.id,
        selectedBlockId: null,
        dirty: true,
      };
    }

    case "DUPLICATE_BLOCK": {
      if (!state.book) return state;

      const suffix = makeSuffix();
      let newBlockId = "";

      const updatedBook = updatePage(state.book, action.pageId, (p) => {
        const idx = p.content.findIndex((b) => b.id === action.blockId);
        if (idx < 0) return p;

        const original = p.content[idx];
        const newBlock: Block = { ...original, id: `${original.id}-c${suffix}` } as Block;
        newBlockId = newBlock.id;

        const content = [...p.content];
        content.splice(idx + 1, 0, newBlock);
        return { ...p, content };
      });

      return {
        ...state,
        book: updatedBook,
        selectedBlockId: newBlockId || state.selectedBlockId,
        dirty: true,
      };
    }

    case "RESTORE_BOOK":
      return { ...state, book: action.book, dirty: true };

    case "UPDATE_METADATA": {
      if (!state.book) return state;
      return {
        ...state,
        book: { ...state.book, metadata: { ...state.book.metadata, ...action.patch } },
        dirty: true,
      };
    }

    case "UPDATE_THEME": {
      if (!state.book) return state;
      return {
        ...state,
        book: {
          ...state.book,
          metadata: {
            ...state.book.metadata,
            theme: { ...(state.book.metadata.theme ?? {}), ...action.patch },
          },
        },
        dirty: true,
      };
    }

    case "ADD_ASSET": {
      if (!state.book) return state;
      return {
        ...state,
        book: { ...state.book, assets: [...(state.book.assets ?? []), action.asset] },
        dirty: true,
      };
    }

    case "REMOVE_ASSET": {
      if (!state.book) return state;
      return {
        ...state,
        book: {
          ...state.book,
          assets: (state.book.assets ?? []).filter((a) => a.id !== action.assetId),
        },
        dirty: true,
      };
    }

    // ─── TOC ────────────────────────────────────────────────────────────────

    case "ADD_TOC_ENTRY": {
      if (!state.book) return state;
      const index = [...(state.book.structure?.index ?? []), action.entry];
      return {
        ...state,
        book: { ...state.book, structure: { ...(state.book.structure ?? {}), index } },
        dirty: true,
      };
    }

    case "UPDATE_TOC_ENTRY": {
      if (!state.book) return state;
      const index = (state.book.structure?.index ?? []).map((e) =>
        e.id === action.entryId ? { ...e, ...action.patch } : e
      );
      return {
        ...state,
        book: { ...state.book, structure: { ...(state.book.structure ?? {}), index } },
        dirty: true,
      };
    }

    case "REMOVE_TOC_ENTRY": {
      if (!state.book) return state;
      const index = (state.book.structure?.index ?? []).filter((e) => e.id !== action.entryId);
      return {
        ...state,
        book: { ...state.book, structure: { ...(state.book.structure ?? {}), index } },
        dirty: true,
      };
    }

    case "MOVE_TOC_ENTRY": {
      if (!state.book) return state;
      const arr = [...(state.book.structure?.index ?? [])];
      const idx = arr.findIndex((e) => e.id === action.entryId);
      if (idx < 0) return state;
      const newIdx = action.direction === "up" ? idx - 1 : idx + 1;
      if (newIdx < 0 || newIdx >= arr.length) return state;
      [arr[idx], arr[newIdx]] = [arr[newIdx], arr[idx]];
      return {
        ...state,
        book: { ...state.book, structure: { ...(state.book.structure ?? {}), index: arr } },
        dirty: true,
      };
    }

    // ─── Page Anchors ────────────────────────────────────────────────────────

    case "ADD_PAGE_ANCHOR": {
      if (!state.book) return state;
      const updatedBook = updatePage(state.book, action.pageId, (p) => ({
        ...p,
        anchors: [...(p.anchors ?? []), action.anchor],
      }));
      return { ...state, book: updatedBook, dirty: true };
    }

    case "UPDATE_PAGE_ANCHOR": {
      if (!state.book) return state;
      const updatedBook = updatePage(state.book, action.pageId, (p) => ({
        ...p,
        anchors: (p.anchors ?? []).map((a) =>
          a.id === action.anchorId ? { ...a, ...action.patch } : a
        ),
      }));
      return { ...state, book: updatedBook, dirty: true };
    }

    case "REMOVE_PAGE_ANCHOR": {
      if (!state.book) return state;
      const updatedBook = updatePage(state.book, action.pageId, (p) => ({
        ...p,
        anchors: (p.anchors ?? []).filter((a) => a.id !== action.anchorId),
      }));
      return { ...state, book: updatedBook, dirty: true };
    }

    // ─── Notes ──────────────────────────────────────────────────────────────

    case "ADD_NOTE": {
      if (!state.book) return state;
      return {
        ...state,
        book: { ...state.book, notes: [...(state.book.notes ?? []), action.note] },
        dirty: true,
      };
    }

    case "UPDATE_NOTE": {
      if (!state.book) return state;
      return {
        ...state,
        book: {
          ...state.book,
          notes: (state.book.notes ?? []).map((n) =>
            n.id === action.noteId ? { ...n, ...action.patch } : n
          ),
        },
        dirty: true,
      };
    }

    case "REMOVE_NOTE": {
      if (!state.book) return state;
      return {
        ...state,
        book: {
          ...state.book,
          notes: (state.book.notes ?? []).filter((n) => n.id !== action.noteId),
        },
        dirty: true,
      };
    }

    default:
      return state;
  }
}
