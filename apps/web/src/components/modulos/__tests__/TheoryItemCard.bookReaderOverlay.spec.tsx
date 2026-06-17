/**
 * SEC-LIBRO — integración del lector en la vista de módulo.
 *
 * Antes: el `TheoryItemCard` para items de tipo Libro renderizaba
 * un `<Link to="/editor/{bookId}">` que sacaba al alumno del
 * módulo y lo llevaba al editor (con el fix de SEC-LIBRO el editor
 * ya cae a `BookReader` cuando no se puede editar, pero la UX
 * mejor es no salir nunca del módulo).
 *
 * Después: el card abre un overlay `BookReaderOverlay` encima del
 * módulo. El alumno queda en `/modulos/{id_modulo}` y solo lee o
 * juega; cierra el lector y vuelve al módulo.
 *
 * Casos cubiertos:
 *  - Click en "Leer libro" → overlay montado, sin navegar.
 *  - El overlay muestra el contenido del libro (BookReader).
 *  - Botón Cerrar → overlay desmontado.
 *  - Escape → overlay desmontado.
 *  - Si `detail` es una URL externa, sigue siendo `<a target=_blank>`
 *    (no se abre el overlay).
 *  - Si `detail` es una ruta interna (legacy), sigue siendo `<Link>`.
 */
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";

// Mock de booksApi: el overlay llama a `fetchBook` para traer el
// contenido. Devolvemos un libro mínimo y verificamos que se
// muestre algo del contenido en el overlay.
const mockFetchBook = vi.fn();
vi.mock("../../../bookEditor/services/booksApi", () => ({
  fetchBook: (...args: unknown[]) => mockFetchBook(...args),
}));

import TheoryItemCard from "../TheoryItemCard";

const BOOK_ID = "libro-de-prueba";

const SAMPLE_BOOK = {
  schema: "book.pages@1.1",
  metadata: {
    id: BOOK_ID,
    title: "Libro de prueba",
    language: "es",
    theme: { paperColor: "#fff", textColor: "#000", fontFamily: "serif" },
  },
  structure: { pageNumbering: { startAt: 1 } },
  pages: [
    {
      id: "p001",
      number: 1,
      title: "Pagina 1",
      content: [
        { type: "heading", id: "h1", level: 1, text: "Capitulo de prueba" },
        { type: "paragraph", id: "par1", runs: [{ text: "Texto del libro." }] },
      ],
    },
  ],
};

beforeEach(() => {
  vi.clearAllMocks();
  mockFetchBook.mockResolvedValue(SAMPLE_BOOK);
});

function renderCard(itemOverrides: Partial<{ detail: string; title: string; type: string }> = {}) {
  return render(
    <MemoryRouter>
      <TheoryItemCard
        item={{
          id: "ti-1",
          title: "Mi libro de teoria",
          type: "Libro",
          detail: BOOK_ID,
          ...itemOverrides,
        }}
      />
    </MemoryRouter>
  );
}

describe("SEC-LIBRO: TheoryItemCard (Libro) abre el lector en overlay dentro del módulo", () => {
  it("click en 'Leer libro' monta el overlay del lector (sin navegar)", async () => {
    renderCard();

    // El card NO debe renderizar un Link a /editor/:id; el botón
    // ahora abre el overlay.
    const link = screen.queryByRole("link", { name: /leer libro|abrir libro/i });
    expect(link).toBeNull();

    const openBtn = screen.getByRole("button", { name: /leer libro/i });
    fireEvent.click(openBtn);

    // Esperamos a que el overlay aparezca (el fetchBook resuelve).
    await waitFor(() => {
      expect(screen.getByTestId("book-reader-overlay")).toBeInTheDocument();
    });

    // El overlay carga y monta el BookReader (data-testid="book-reader").
    await waitFor(() => {
      expect(screen.getByTestId("book-reader")).toBeInTheDocument();
    });

    // Contenido del libro visible.
    expect(screen.getByText(/Capitulo de prueba/)).toBeInTheDocument();
    expect(screen.getByText(/Texto del libro\./)).toBeInTheDocument();

    // El header del overlay etiqueta "solo lectura" (los aria/text
    // pueden estar repetidos por header del overlay + header del
    // BookReader; con findAllByText alcanza para confirmar
    // semántica de read-only en la UI).
    expect(screen.getAllByText(/solo lectura/i).length).toBeGreaterThan(0);

    // fetchBook recibió el id correcto.
    expect(mockFetchBook).toHaveBeenCalledWith(BOOK_ID);
  });

  it("Cerrar (botón) desmonta el overlay y vuelve al módulo", async () => {
    renderCard();
    fireEvent.click(screen.getByRole("button", { name: /leer libro/i }));
    await waitFor(() => {
      expect(screen.getByTestId("book-reader-overlay")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole("button", { name: /cerrar lector/i }));
    await waitFor(() => {
      expect(screen.queryByTestId("book-reader-overlay")).toBeNull();
    });
  });

  it("Escape cierra el overlay (mismo patrón que SlidePresenter)", async () => {
    renderCard();
    fireEvent.click(screen.getByRole("button", { name: /leer libro/i }));
    await waitFor(() => {
      expect(screen.getByTestId("book-reader-overlay")).toBeInTheDocument();
    });

    fireEvent.keyDown(window, { key: "Escape" });
    await waitFor(() => {
      expect(screen.queryByTestId("book-reader-overlay")).toBeNull();
    });
  });

  it("si `detail` es URL externa, NO abre overlay (sigue como <a target=_blank>)", () => {
    renderCard({ detail: "https://ejemplo.com/libro.pdf" });

    const link = screen.getByRole("link", { name: /leer libro/i });
    expect(link).toHaveAttribute("href", "https://ejemplo.com/libro.pdf");
    expect(link).toHaveAttribute("target", "_blank");
    // No hay botón que abra overlay.
    expect(screen.queryByRole("button", { name: /leer libro/i })).toBeNull();
  });

  it("si `detail` es ruta interna, usa <Link> (no overlay)", () => {
    renderCard({ detail: "/herramientas/lector" });

    const link = screen.getByRole("link", { name: /leer libro/i });
    expect(link).toBeInTheDocument();
    // No hay botón ni overlay.
    expect(screen.queryByRole("button", { name: /leer libro/i })).toBeNull();
    expect(screen.queryByTestId("book-reader-overlay")).toBeNull();
  });
});
