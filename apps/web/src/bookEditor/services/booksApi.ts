import type { Book } from "../../domain/book/book.types";
import { apiGet, apiPost } from "../../lib/api";

type BookRecord = {
  id: string;
  title: string;
  book: Book;
  createdAt?: string;
  updatedAt?: string;
};

type BookPayload = {
  book: Book;
  createdAt?: string;
  updatedAt?: string;
};

export async function fetchBook(id: string): Promise<Book> {
  const record = await apiGet<BookRecord>(`/api/libros/${encodeURIComponent(id)}`);
  return record.book;
}

export async function saveBook(book: Book): Promise<{ id: string }> {
  const payload: BookPayload = {
    book,
    updatedAt: new Date().toISOString(),
  };
  return apiPost<{ id: string }>("/api/libros", payload);
}
