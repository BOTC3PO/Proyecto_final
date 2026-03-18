import type { Block, BlockDocument } from "../../types";

export type BlockEditorState = {
  document: BlockDocument;
  title: string;
  selectedBlockId: string | null;
  dirty: boolean;
};

export type BlockEditorAction =
  | { type: "LOAD_DOCUMENT"; document: BlockDocument; title?: string }
  | { type: "ADD_BLOCK"; blockType: Block["type"] }
  | { type: "DELETE_BLOCK"; blockId: string }
  | { type: "DUPLICATE_BLOCK"; blockId: string }
  | { type: "MOVE_BLOCK"; blockId: string; direction: "up" | "down" }
  | { type: "UPDATE_BLOCK"; blockId: string; patch: Record<string, unknown> }
  | { type: "SELECT_BLOCK"; blockId: string | null }
  | { type: "UPDATE_TITLE"; title: string }
  | { type: "MARK_DIRTY"; dirty: boolean }
  | { type: "RESTORE_DOCUMENT"; document: BlockDocument; title: string };

function makeSuffix(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 4);
}

function createDefaultBlock(blockType: Block["type"]): Block {
  const id = `block-${blockType}-${makeSuffix()}`;
  switch (blockType) {
    case "text":
      return { id, type: "text", content: "" };
    case "latex":
      return { id, type: "latex", content: "\\sum_{i=1}^{n} x_i", displayMode: true };
    case "table":
      return {
        id,
        type: "table",
        title: "",
        headers: ["Columna 1", "Columna 2"],
        rows: [["", ""]],
      };
    case "chart":
      return {
        id,
        type: "chart",
        title: "",
        chartType: "bar",
        data: {
          labels: ["A", "B", "C"],
          datasets: [{ label: "Serie 1", values: [0, 0, 0] }],
        },
      };
    case "flow":
      return {
        id,
        type: "flow",
        title: "",
        nodes: [
          { id: "n1", label: "Inicio", x: 50, y: 30, shape: "circle", color: "#d1fae5" },
          { id: "n2", label: "Proceso", x: 50, y: 130, shape: "rect", color: "#e0e7ff" },
          { id: "n3", label: "Fin", x: 50, y: 230, shape: "circle", color: "#fee2e2" },
        ],
        edges: [
          { id: "e1", fromId: "n1", toId: "n2" },
          { id: "e2", fromId: "n2", toId: "n3" },
        ],
      };
    default: {
      const _never: never = blockType;
      return _never;
    }
  }
}

export const INITIAL_STATE: BlockEditorState = {
  document: { version: 1, blocks: [] },
  title: "Documento sin título",
  selectedBlockId: null,
  dirty: false,
};

export function blockEditorReducer(
  state: BlockEditorState,
  action: BlockEditorAction
): BlockEditorState {
  switch (action.type) {
    case "LOAD_DOCUMENT":
      return {
        ...state,
        document: action.document,
        title: action.title ?? state.title,
        selectedBlockId: null,
        dirty: false,
      };

    case "ADD_BLOCK": {
      const newBlock = createDefaultBlock(action.blockType);
      return {
        ...state,
        document: {
          ...state.document,
          blocks: [...state.document.blocks, newBlock],
        },
        selectedBlockId: newBlock.id,
        dirty: true,
      };
    }

    case "DELETE_BLOCK": {
      const blocks = state.document.blocks.filter((b) => b.id !== action.blockId);
      return {
        ...state,
        document: { ...state.document, blocks },
        selectedBlockId:
          state.selectedBlockId === action.blockId ? null : state.selectedBlockId,
        dirty: true,
      };
    }

    case "DUPLICATE_BLOCK": {
      const suffix = makeSuffix();
      const idx = state.document.blocks.findIndex((b) => b.id === action.blockId);
      if (idx < 0) return state;
      const original = state.document.blocks[idx];
      const copy: Block = { ...original, id: `${original.id}-c${suffix}` } as Block;
      const blocks = [...state.document.blocks];
      blocks.splice(idx + 1, 0, copy);
      return {
        ...state,
        document: { ...state.document, blocks },
        selectedBlockId: copy.id,
        dirty: true,
      };
    }

    case "MOVE_BLOCK": {
      const blocks = [...state.document.blocks];
      const idx = blocks.findIndex((b) => b.id === action.blockId);
      if (idx < 0) return state;
      const newIdx = action.direction === "up" ? idx - 1 : idx + 1;
      if (newIdx < 0 || newIdx >= blocks.length) return state;
      [blocks[idx], blocks[newIdx]] = [blocks[newIdx], blocks[idx]];
      return { ...state, document: { ...state.document, blocks }, dirty: true };
    }

    case "UPDATE_BLOCK": {
      const blocks = state.document.blocks.map((b) =>
        b.id === action.blockId ? ({ ...b, ...action.patch } as Block) : b
      );
      return { ...state, document: { ...state.document, blocks }, dirty: true };
    }

    case "SELECT_BLOCK":
      return { ...state, selectedBlockId: action.blockId };

    case "UPDATE_TITLE":
      return { ...state, title: action.title, dirty: true };

    case "MARK_DIRTY":
      return { ...state, dirty: action.dirty };

    case "RESTORE_DOCUMENT":
      return {
        ...state,
        document: action.document,
        title: action.title,
        dirty: true,
      };

    default:
      return state;
  }
}
