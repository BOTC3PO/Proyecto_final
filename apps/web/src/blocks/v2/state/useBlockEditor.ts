import { useCallback, useMemo, useReducer, useRef, useState } from "react";
import type { BlockDocument } from "../../types";
import {
  blockEditorReducer,
  INITIAL_STATE,
  type BlockEditorAction,
  type BlockEditorState,
} from "./blockEditor.reducer";

const MAX_HISTORY = 50;

// Actions that mutate the document and should be tracked by undo/redo history
const HISTORY_MUTATING_TYPES = new Set<BlockEditorAction["type"]>([
  "ADD_BLOCK",
  "DELETE_BLOCK",
  "DUPLICATE_BLOCK",
  "MOVE_BLOCK",
  "UPDATE_BLOCK",
  "UPDATE_TITLE",
]);

type HistorySnapshot = { document: BlockDocument; title: string };

export function useBlockEditor() {
  const [state, rawDispatch] = useReducer(blockEditorReducer, INITIAL_STATE);

  const stateRef = useRef<BlockEditorState>(state);
  stateRef.current = state;

  const historyRef = useRef<{ past: HistorySnapshot[]; future: HistorySnapshot[] }>({
    past: [],
    future: [],
  });

  const [historyVersion, setHistoryVersion] = useState(0);

  const canUndo = historyVersion >= 0 && historyRef.current.past.length > 0;
  const canRedo = historyVersion >= 0 && historyRef.current.future.length > 0;

  const dispatch = useCallback((action: BlockEditorAction) => {
    if (action.type === "LOAD_DOCUMENT") {
      historyRef.current = { past: [], future: [] };
      setHistoryVersion(0);
    } else if (HISTORY_MUTATING_TYPES.has(action.type)) {
      historyRef.current = {
        past: [
          ...historyRef.current.past.slice(-(MAX_HISTORY - 1)),
          { document: stateRef.current.document, title: stateRef.current.title },
        ],
        future: [],
      };
    }
    rawDispatch(action);
  }, []);

  const undo = useCallback(() => {
    const { past, future } = historyRef.current;
    if (past.length === 0) return;

    const previous = past[past.length - 1];
    historyRef.current = {
      past: past.slice(0, -1),
      future: [
        { document: stateRef.current.document, title: stateRef.current.title },
        ...future,
      ].slice(0, MAX_HISTORY),
    };
    setHistoryVersion((v) => v + 1);
    rawDispatch({ type: "RESTORE_DOCUMENT", document: previous.document, title: previous.title });
  }, []);

  const redo = useCallback(() => {
    const { past, future } = historyRef.current;
    if (future.length === 0) return;

    const next = future[0];
    historyRef.current = {
      past: [
        ...past,
        { document: stateRef.current.document, title: stateRef.current.title },
      ].slice(-MAX_HISTORY),
      future: future.slice(1),
    };
    setHistoryVersion((v) => v + 1);
    rawDispatch({ type: "RESTORE_DOCUMENT", document: next.document, title: next.title });
  }, []);

  const selectedBlock = useMemo(() => {
    if (!state.selectedBlockId) return null;
    return state.document.blocks.find((b) => b.id === state.selectedBlockId) ?? null;
  }, [state.document.blocks, state.selectedBlockId]);

  return { state, dispatch, undo, redo, canUndo, canRedo, selectedBlock };
}
