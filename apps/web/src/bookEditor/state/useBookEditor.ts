import { useCallback, useMemo, useReducer, useRef, useState } from "react";
import type { Book } from "../../domain/book/book.types";
import { editorReducer } from "./bookEditor.reducer";
import type { EditorAction } from "./bookEditor.reducer";
import { validateBook } from "../services/validate";

const MAX_HISTORY = 30;

// Actions that mutate the book and should be tracked by the undo/redo history
const HISTORY_MUTATING_TYPES = new Set<EditorAction["type"]>([
  "ADD_PAGE",
  "ADD_BLOCK",
  "UPDATE_PAGE_TITLE",
  "UPDATE_PARAGRAPH_RUN",
  "UPDATE_PARAGRAPH_BLOCKSTYLE",
  "UPDATE_RUN_STYLE",
  "UPDATE_HEADING",
  "UPDATE_IMAGE",
  "MOVE_PAGE",
  "MOVE_BLOCK",
  "DELETE_PAGE",
  "DELETE_BLOCK",
  "DUPLICATE_PAGE",
  "DUPLICATE_BLOCK",
  "UPDATE_METADATA",
  "UPDATE_THEME",
  "ADD_ASSET",
  "REMOVE_ASSET",
  "ADD_TOC_ENTRY",
  "UPDATE_TOC_ENTRY",
  "REMOVE_TOC_ENTRY",
  "MOVE_TOC_ENTRY",
  "ADD_PAGE_ANCHOR",
  "UPDATE_PAGE_ANCHOR",
  "REMOVE_PAGE_ANCHOR",
  "ADD_NOTE",
  "UPDATE_NOTE",
  "REMOVE_NOTE",
]);

type HistorySnapshot = Book | null;

export function useBookEditor() {
  const [state, rawDispatch] = useReducer(editorReducer, {
    book: null,
    selectedPageId: null,
    selectedBlockId: null,
    issues: [],
    dirty: false,
  });

  // Ref always points to the latest book without closure staleness
  const bookRef = useRef<HistorySnapshot>(null);
  bookRef.current = state.book;

  // History stored in a ref to avoid extra re-renders on every keystroke
  const historyRef = useRef<{ past: HistorySnapshot[]; future: HistorySnapshot[] }>({
    past: [],
    future: [],
  });

  // Version counter: incremented when history changes so canUndo/canRedo re-evaluate
  const [historyVersion, setHistoryVersion] = useState(0);

  // Derive canUndo/canRedo at render time from the ref (always fresh after a re-render)
  const canUndo = historyVersion >= 0 && historyRef.current.past.length > 0;
  const canRedo = historyVersion >= 0 && historyRef.current.future.length > 0;

  const dispatch = useCallback(
    (action: EditorAction) => {
      if (action.type === "LOAD_BOOK") {
        // Clear history when a new book is loaded
        historyRef.current = { past: [], future: [] };
        setHistoryVersion(0);
      } else if (HISTORY_MUTATING_TYPES.has(action.type)) {
        // Save current book to history before applying the mutation
        historyRef.current = {
          past: [...historyRef.current.past.slice(-(MAX_HISTORY - 1)), bookRef.current],
          future: [],
        };
      }
      rawDispatch(action);
    },
    [rawDispatch]
  );

  const undo = useCallback(() => {
    const { past, future } = historyRef.current;
    if (past.length === 0) return;

    const previous = past[past.length - 1];
    historyRef.current = {
      past: past.slice(0, -1),
      future: [bookRef.current, ...future].slice(0, MAX_HISTORY),
    };
    setHistoryVersion((v) => v + 1);

    if (previous !== null) {
      rawDispatch({ type: "RESTORE_BOOK", book: previous });
    }
  }, [rawDispatch]);

  const redo = useCallback(() => {
    const { past, future } = historyRef.current;
    if (future.length === 0) return;

    const next = future[0];
    historyRef.current = {
      past: [...past, bookRef.current].slice(-MAX_HISTORY),
      future: future.slice(1),
    };
    setHistoryVersion((v) => v + 1);

    if (next !== null) {
      rawDispatch({ type: "RESTORE_BOOK", book: next });
    }
  }, [rawDispatch]);

  const selectedPage = useMemo(() => {
    if (!state.book || !state.selectedPageId) return null;
    return state.book.pages.find((p) => p.id === state.selectedPageId) ?? null;
  }, [state.book, state.selectedPageId]);

  const selectedBlock = useMemo(() => {
    if (!selectedPage || !state.selectedBlockId) return null;
    return selectedPage.content.find((b: any) => b.id === state.selectedBlockId) ?? null;
  }, [selectedPage, state.selectedBlockId]);

  const runValidation = useCallback(
    (book: Book) => {
      rawDispatch({ type: "SET_ISSUES", issues: validateBook(book) });
    },
    [rawDispatch]
  );

  return { state, dispatch, undo, redo, canUndo, canRedo, selectedPage, selectedBlock, runValidation };
}
