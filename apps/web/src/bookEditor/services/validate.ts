import type { Book } from "../../domain/book/book.types";

export type IssueLevel = "error" | "warn";
export type Issue = { level: IssueLevel; message: string; path?: string };

export function validateBook(book: Book): Issue[] {
  const issues: Issue[] = [];

  // pages unique
  const pageIds = new Set<string>();
  for (const [pi, p] of book.pages.entries()) {
    if (pageIds.has(p.id)) issues.push({ level: "error", message: `Page id repetido: ${p.id}`, path: `pages[${pi}].id` });
    pageIds.add(p.id);

    // block unique within whole book
    const blockIds = new Set<string>();
    for (const [bi, b] of p.content.entries()) {
      if (!("id" in b) || !b.id) issues.push({ level: "error", message: `Bloque sin id`, path: `pages[${pi}].content[${bi}]` });
      if (blockIds.has((b as any).id)) issues.push({ level: "error", message: `Bloque repetido en la misma página: ${(b as any).id}`, path: `pages[${pi}].content[${bi}].id` });
      blockIds.add((b as any).id);
    }
  }

  // TOC anchors exist
  const toc = book.structure?.index ?? [];
  for (const [ti, item] of toc.entries()) {
    const [pageId, anchorId] = (item.anchor ?? "").split(":");
    if (!pageId || !anchorId) {
      issues.push({ level: "warn", message: `TOC anchor inválido: "${item.anchor}"`, path: `structure.index[${ti}].anchor` });
      continue;
    }
    const page = book.pages.find((p) => p.id === pageId);
    if (!page) {
      issues.push({ level: "error", message: `TOC anchor apunta a página inexistente: "${pageId}"`, path: `structure.index[${ti}].anchor` });
      continue;
    }
    const ok = (page.anchors ?? []).some((a) => a.id === anchorId);
    if (!ok) issues.push({ level: "error", message: `TOC anchor apunta a ancla inexistente: "${pageId}:${anchorId}"`, path: `structure.index[${ti}].anchor` });
  }

  return issues;
}
