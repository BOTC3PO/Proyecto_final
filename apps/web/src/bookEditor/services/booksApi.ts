import type { Book } from "../../domain/book/book.types";
import { apiGet, apiPost } from "../../lib/api";

type BookRecord = {
  id: string;
  title: string;
  book: Book;
  createdAt?: string;
  updatedAt?: string;
};

export async function fetchBook(id: string): Promise<Book> {
  const record = await apiGet<BookRecord>(`/api/libros/${encodeURIComponent(id)}`);
  return record.book;
}

export async function saveBook(book: Book): Promise<{ id: string }> {
  const payload: BookRecord = {
    id: book.metadata.id ?? "book-draft",
    title: book.metadata.title ?? "Sin título",
    book,
    updatedAt: new Date().toISOString(),
  };
  return apiPost<{ id: string }>("/api/libros", payload);
}
