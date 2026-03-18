import type { BlockDocument } from "../../types";
import { apiGet, apiPost } from "../../../lib/api";

export type BlockDocumentRecord = {
  id: string;
  title: string;
  document: BlockDocument;
  createdAt?: string;
  updatedAt?: string;
};

export async function fetchBlockDocument(id: string): Promise<BlockDocumentRecord> {
  return apiGet<BlockDocumentRecord>(`/api/block-documents/${encodeURIComponent(id)}`);
}

export async function saveBlockDocument(
  document: BlockDocument,
  title: string
): Promise<{ id: string }> {
  const payload: { document: BlockDocument; title: string; updatedAt: string } = {
    document,
    title,
    updatedAt: new Date().toISOString(),
  };
  return apiPost<{ id: string }>("/api/block-documents", payload);
}
