import { useMemo, useReducer } from "react";
import type { Book } from "../../domain/book/book.types";
import { editorReducer } from "./bookEditor.reducer";
import { validateBook } from "../services/validate";

export function useBookEditor() {
  const [state, dispatch] = useReducer(editorReducer, {
    book: null,
    selectedPageId: null,
    selectedBlockId: null,
    issues: [],
    dirty: false,
  });

  const selectedPage = useMemo(() => {
    if (!state.book || !state.selectedPageId) return null;
    return state.book.pages.find((p) => p.id === state.selectedPageId) ?? null;
  }, [state.book, state.selectedPageId]);

  const selectedBlock = useMemo(() => {
    if (!selectedPage || !state.selectedBlockId) return null;
    return selectedPage.content.find((b: any) => b.id === state.selectedBlockId) ?? null;
  }, [selectedPage, state.selectedBlockId]);

  function runValidation(book: Book) {
    dispatch({ type: "SET_ISSUES", issues: validateBook(book) });
  }

  return { state, dispatch, selectedPage, selectedBlock, runValidation };
}
