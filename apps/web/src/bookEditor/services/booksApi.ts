import type { Book } from "../../domain/book/book.types";
import { apiGet, apiPost } from "../../lib/api";
import { hasRole, isStaff, type RoleUser } from "../../auth/roleHelpers";

// SEC-LIBRO — metadatos de ownership expuestos por el GET. Vienen
// inyectados por el back desde la fila Prisma (no están dentro del
// JSON del libro). Permiten al front decidir si muestra el editor o
// el lector (defensa en profundidad; el back ya bloquea la edición
// no autorizada, pero la UX correcta es no abrir el editor si no se
// puede guardar). `ownerUserId` puede ser null para libros viejos
// sin dueño asignado (en cuyo caso solo ADMIN edita).
export type BookMeta = {
  ownerUserId: string | null;
  visibility: string;
  schoolId: string | null;
};

export type BookWithMeta = {
  book: Book;
  meta: BookMeta;
};

type BookRecord = {
  id: string;
  title: string;
  book: Book;
  createdAt?: string;
  updatedAt?: string;
  // SEC-LIBRO — campos de ownership inyectados por el back.
  ownerUserId?: string | null;
  visibility?: string;
  schoolId?: string | null;
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

/**
 * SEC-LIBRO — versión que devuelve también los metadatos de
 * ownership. La usa `BookEditorPage` para decidir editor vs
 * lector. `fetchBook` sin meta se mantiene por compatibilidad con
 * el resto del front (busca, picker, etc.).
 */
export async function fetchBookWithMeta(id: string): Promise<BookWithMeta> {
  const record = await apiGet<BookRecord>(`/api/libros/${encodeURIComponent(id)}`);
  return {
    book: record.book,
    meta: {
      ownerUserId: record.ownerUserId ?? null,
      visibility: record.visibility ?? "privado",
      schoolId: record.schoolId ?? null,
    },
  };
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

// SEC-LIBRO — replica el criterio del back (`canEditLibro` en
// `api/src/routes/libros.ts`) para la UI. El back es la autoridad;
// esto es defensa en profundidad. Si cambia el back, cambiar acá
// también — son la misma decisión.
//
// Reglas (mismo orden que el back):
//   - ADMIN: siempre.
//   - Dueño: siempre.
//   - visibility='escuela' + staff de la MISMA escuela: sí.
//   - Resto (incluidos los alumnos): NO.
//   - Libros sin dueño (`ownerUserId = null`): solo ADMIN.
//
// MULTIROL-02: el viewer acepta `roles[]` (multi-rol). Si no viene,
// cae a `[role]` para compat con código viejo. Los checks usan los
// helpers centralizados (`hasRole`, `isStaff`) en vez de un Set local.
export type ViewerForLibro = {
  id?: string;
  role?: string | null;
  roles?: readonly string[] | null;
  schoolId?: string | null;
};

export function canEditLibro(meta: BookMeta, viewer: ViewerForLibro | null | undefined): boolean {
  if (!viewer) return false;
  const ru: RoleUser = { role: viewer.role, roles: viewer.roles };
  if (hasRole(ru, "ADMIN")) return true;
  const viewerId = viewer.id ?? null;
  if (meta.ownerUserId && viewerId && meta.ownerUserId === viewerId) return true;
  if (
    meta.visibility === "escuela" &&
    meta.schoolId &&
    viewer.schoolId &&
    meta.schoolId === viewer.schoolId &&
    isStaff(ru)
  ) {
    return true;
  }
  return false;
}
