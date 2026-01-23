import type { Book } from "../../domain/book/book.types";
import { apiGet, apiPost } from "../../lib/api";

type BookRecord = {
  id: string;
  title: string;
  book: Book;
  createdAt?: string;
  updatedAt?: string;
};

export type BookListItem = {
  id: string;
  title: string;
  createdAt?: string;
  updatedAt?: string;
};

export type BookListResponse = {
  items: BookListItem[];
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
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

export async function fetchBooks(params: { q?: string; page?: number; pageSize?: number } = {}): Promise<BookListResponse> {
  const searchParams = new URLSearchParams();
  if (params.q) searchParams.set("q", params.q);
  if (params.page) searchParams.set("page", String(params.page));
  if (params.pageSize) searchParams.set("pageSize", String(params.pageSize));
  const query = searchParams.toString();
  const path = query ? `/api/libros?${query}` : "/api/libros";
  return apiGet<BookListResponse>(path);
}

export async function saveBook(book: Book): Promise<{ id: string }> {
  const payload: BookPayload = {
    book,
    updatedAt: new Date().toISOString(),
  };
  return apiPost<{ id: string }>("/api/libros", payload);
}
