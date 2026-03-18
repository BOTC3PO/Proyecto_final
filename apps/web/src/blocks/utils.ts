import type { BlockDocument } from "./types"

export function serializeBlockDocument(doc: BlockDocument): string {
  return JSON.stringify(doc)
}

export function deserializeBlockDocument(raw: string): BlockDocument | null {
  try {
    const parsed = JSON.parse(raw)
    if (parsed?.version === 1 && Array.isArray(parsed.blocks)) {
      return parsed as BlockDocument
    }
    return null
  } catch {
    return null
  }
}

export function isBlockDocument(raw: string): boolean {
  return deserializeBlockDocument(raw) !== null
}

export function createEmptyBlockDocument(): BlockDocument {
  return { version: 1, blocks: [] }
}
