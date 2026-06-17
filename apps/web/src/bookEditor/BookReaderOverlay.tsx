import { useEffect, useState } from "react";
import { X } from "lucide-react";
import type { Book } from "../domain/book/book.types";
import BookReader from "./BookReader";
import { fetchBook } from "./services/booksApi";
import { ensureUniqueIds } from "./services/ids";
import { migrateToV11ForEditor } from "./services/migrate";

// SEC-LIBRO — overlay full-screen que monta el `BookReader` para
// leer un libro SIN salir del módulo. Se usa desde
// `TheoryItemCard` cuando el item es de tipo Libro: el alumno
// queda en `/modulos/{id_modulo}` y abre el libro en una capa
// encima.
//
// Defensa en profundidad: aunque el back ya bloquea la edición
// no autorizada (SEC-LIBRO en api/src/routes/libros.ts), abrir
// el editor solo para leer es UX confusa. La vista de módulo
// "solo lee o juega"; para editar, el staff usa /editor/:id.
//
// Migración: corremos `migrateToV11ForEditor` + `ensureUniqueIds`
// como hace el editor antes de mostrar el libro, así el lector
// recibe siempre un Book v1.1 con tema asegurado y ids únicos
// (libros viejos en v1.0 quedan visualmente iguales).

type Status = "loading" | "ready" | "error";

type Props = {
  bookId: string;
  title?: string;
  onClose: () => void;
};

export default function BookReaderOverlay({ bookId, title, onClose }: Props) {
  const [status, setStatus] = useState<Status>("loading");
  const [book, setBook] = useState<Book | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Fetch + migrar al montar (o cuando cambia el bookId).
  useEffect(() => {
    let active = true;
    setStatus("loading");
    setErrorMessage(null);
    setBook(null);
    fetchBook(bookId)
      .then((b) => {
        if (!active) return;
        const migrated = migrateToV11ForEditor(b);
        const { book: uniq } = ensureUniqueIds(migrated);
        setBook(uniq);
        setStatus("ready");
      })
      .catch((err: unknown) => {
        if (!active) return;
        setErrorMessage(
          err instanceof Error ? err.message : "No se pudo cargar el libro."
        );
        setStatus("error");
      });
    return () => {
      active = false;
    };
  }, [bookId]);

  // Cerrar con Escape — mismo patrón que SlidePresenter,
  // VistaAlumnoOverlay, etc.
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Bloquear scroll del body mientras el overlay está abierto.
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-[var(--c-bg)]"
      role="dialog"
      aria-modal="true"
      aria-label={title ? `Lector de libro: ${title}` : "Lector de libro"}
      data-testid="book-reader-overlay"
    >
      <header
        role="banner"
        className="flex-shrink-0 border-b border-[var(--c-border)] bg-[var(--c-surface)] flex items-center px-4 gap-3 h-11"
      >
        <span className="text-xs uppercase tracking-wide text-[var(--c-muted)]">
          Libro · solo lectura
        </span>
        {title ? (
          <>
            <div className="w-px h-4 bg-[var(--c-border)]" />
            <span className="text-sm font-medium text-[var(--c-text)] truncate max-w-[60%]">
              {title}
            </span>
          </>
        ) : null}
        <div className="flex-1" />
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar lector"
          className="inline-flex items-center gap-1 px-2 py-1 text-xs rounded text-[var(--c-muted)] hover:bg-[var(--c-bg)] hover:text-[var(--c-text)] transition-colors"
        >
          <X size={14} />
          Cerrar
        </button>
      </header>

      <main className="flex-1 overflow-y-auto">
        {status === "loading" && (
          <div className="flex items-center justify-center h-full">
            <p className="text-sm text-[var(--c-muted)]">Cargando libro…</p>
          </div>
        )}

        {status === "error" && (
          <div className="flex items-center justify-center h-full p-6">
            <div
              className="max-w-md rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700"
              role="alert"
            >
              <p className="font-semibold">No se pudo cargar el libro.</p>
              {errorMessage ? (
                <p className="mt-1 text-xs">{errorMessage}</p>
              ) : null}
            </div>
          </div>
        )}

        {status === "ready" && book ? <BookReader book={book} /> : null}
      </main>
    </div>
  );
}
