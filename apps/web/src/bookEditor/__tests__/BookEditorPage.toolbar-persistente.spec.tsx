/**
 * PLAN-W §3 fase 1 — la toolbar de formato del editor de libros pasa
 * de contextual (sólo con un bloque seleccionado) a SIEMPRE visible,
 * con los controles deshabilitados (no ocultos) cuando no hay
 * selección, igual que la cinta de Word.
 *
 * Cubre:
 *  1. Sin ningún bloque seleccionado → la toolbar está montada y el
 *     botón de negrita existe pero está deshabilitado.
 *  2. Al hacer click en un bloque (heading) → el mismo botón queda
 *     habilitado.
 */
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";

let currentUser: { id: string; name: string; role: string; schoolId: string | null } | null = null;
vi.mock("../../auth/use-auth", () => ({
  useAuth: () => ({ user: currentUser }),
}));

const mockApiGet = vi.fn();
vi.mock("../../lib/api", () => ({
  apiGet: (...args: unknown[]) => mockApiGet(...args),
  apiPost: vi.fn(),
  apiPut: vi.fn(),
  apiPatch: vi.fn(),
  apiDelete: vi.fn(),
}));

import BookEditorPage from "../BookEditorPage";

const OWNER_TEACHER_ID = "owner-teacher-toolbar";
const SCHOOL_A = "school-toolbar";
const BOOK_ID = "libro-toolbar";

const BOOK_RESPONSE = {
  id: BOOK_ID,
  title: "Libro toolbar",
  book: {
    schema: "book.pages@1.1",
    metadata: {
      id: BOOK_ID,
      title: "Libro toolbar",
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
          { type: "heading", id: "h1", level: 1, text: "Hola mundo" },
          { type: "paragraph", id: "p1", runs: [{ text: "Texto del libro." }] },
        ],
      },
    ],
  },
  ownerUserId: OWNER_TEACHER_ID,
  visibility: "privado",
  schoolId: SCHOOL_A,
};

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/editor/:id" element={<BookEditorPage />} />
      </Routes>
    </MemoryRouter>
  );
}

beforeEach(() => {
  vi.clearAllMocks();
  currentUser = { id: OWNER_TEACHER_ID, name: "Owner Teacher", role: "TEACHER", schoolId: SCHOOL_A };
  mockApiGet.mockImplementation(async (path: string) => {
    if (path.startsWith(`/api/libros/${BOOK_ID}`)) return BOOK_RESPONSE;
    return {};
  });
});

describe("PLAN-W §3 fase 1: toolbar persistente estilo Word", () => {
  it("sin bloque seleccionado, la toolbar está visible pero el botón de negrita deshabilitado", async () => {
    renderAt(`/editor/${BOOK_ID}`);
    await waitFor(() => {
      expect(screen.getByLabelText(/Acciones del editor/i)).toBeInTheDocument();
    });
    const boldButton = screen.getByTitle(/Negrita/i);
    expect(boldButton).toBeInTheDocument();
    expect(boldButton).toBeDisabled();
  });

  it("al seleccionar un bloque, el botón de negrita se habilita", async () => {
    renderAt(`/editor/${BOOK_ID}`);
    await waitFor(() => {
      expect(screen.getByLabelText(/Acciones del editor/i)).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText(/Hola mundo/));

    await waitFor(() => {
      expect(screen.getByTitle(/Negrita/i)).not.toBeDisabled();
    });
  });
});
