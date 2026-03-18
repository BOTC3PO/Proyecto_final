import type { BlockDocument } from "./types"

export function serializeBlockDocument(doc: BlockDocument): string {
  return JSON.stringify(doc)
}

export function deserializeBlockDocument(raw: string): BlockDocument {
  try {
    const parsed = JSON.parse(raw)
    if (parsed?.version === 1 && Array.isArray(parsed.blocks)) {
      return parsed as BlockDocument
    }
  } catch {
    // fall through
  }
  return createEmptyBlockDocument()
}

export function createEmptyBlockDocument(): BlockDocument {
  return { version: 1, blocks: [] }
}
