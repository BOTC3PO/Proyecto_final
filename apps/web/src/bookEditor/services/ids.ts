import type { Book, Page, Block } from "../../domain/book/book.types";

function pad3(n: number) {
  return String(n).padStart(3, "0");
}

export function makePageIdFromNumber(n: number) {
  return `p${pad3(n)}`; // p001, p002...
}

export function makeBlockId(pageId: string, type: Block["type"], ordinal: number) {
  const o = pad3(ordinal);
  switch (type) {
    case "heading": return `${pageId}_h_${o}`;
    case "paragraph": return `${pageId}_par_${o}`;
    case "image": return `${pageId}_img_${o}`;
    case "divider": return `${pageId}_div_${o}`;
    case "pageBreak": return `${pageId}_pb_${o}`;
  }
}

export function ensureUniqueIds(book: Book): { book: Book; changed: boolean; report: string[] } {
  let changed = false;
  const report: string[] = [];
  const globalBlockIds = new Set<string>();

  // 1) páginas: asegurar id coherente con number si querés; o solo asegurar unicidad
  const pageIdSeen = new Set<string>();
  const pages: Page[] = book.pages.map((p) => {
    let id = p.id;
    if (pageIdSeen.has(id)) {
      // generar uno nuevo basado en number con sufijo incremental
      let base = makePageIdFromNumber(p.number);
      let candidate = base;
      let k = 2;
      while (pageIdSeen.has(candidate)) candidate = `${base}_${k++}`;
      report.push(`Page id repetido "${id}" -> "${candidate}"`);
      id = candidate;
      changed = true;
    }
    pageIdSeen.add(id);

    // 2) bloques: asegurar unicidad global
    const newContent: Block[] = [];
    for (let i = 0; i < p.content.length; i++) {
      const b: any = p.content[i];
      let bid = b.id as string;
      // si falta o está repetido globalmente, regenerar
      if (!bid || globalBlockIds.has(bid)) {
        const newId = makeBlockId(id, b.type, i + 1);
        report.push(`Block id inválido/repetido "${bid ?? "(missing)"}" -> "${newId}" (page ${id})`);
        bid = newId;
        changed = true;
      }
      globalBlockIds.add(bid);
      newContent.push({ ...b, id: bid });
    }

    return { ...p, id, content: newContent };
  });

  return { book: { ...book, pages }, changed, report };
}
