import type { Book } from "../../domain/book/book.types";
import { migrateToV11ForEditor } from "./migrate";
import { ensureUniqueIds } from "./ids";

export async function importBookFromFile(file: File): Promise<Book> {
  const text = await file.text();
  const raw = JSON.parse(text) as Book;

  // pipeline de edición
  let b = migrateToV11ForEditor(raw);
  const uniq = ensureUniqueIds(b);
  b = uniq.book;

  return b;
}

export function exportBookToDownload(book: Book, filename = "book.json") {
  const blob = new Blob([JSON.stringify(book, null, 2)], { type: "application/json;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
