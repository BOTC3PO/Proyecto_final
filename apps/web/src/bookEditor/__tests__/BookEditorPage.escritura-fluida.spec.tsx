/**
 * PLAN-W §3 fase 2 — escritura fluida en el editor de libros: Enter al
 * final de un párrafo crea el siguiente y mueve el foco (sin pasar
 * por AddBlockBar); Backspace en un párrafo vacío lo borra y sube el
 * foco al anterior. Prueba de cableado real (tecla → dispatch →
 * render), complementa el test del reducer puro
 * (bookEditor.reducer.split-paragraph.spec.ts).
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

const OWNER_TEACHER_ID = "owner-teacher-fluido";
const SCHOOL_A = "school-fluido";
const BOOK_ID = "libro-fluido";

const BOOK_RESPONSE = {
  id: BOOK_ID,
  title: "Libro fluido",
  book: {
    schema: "book.pages@1.1",
    metadata: { id: BOOK_ID, title: "Libro fluido", language: "es", theme: {} },
    structure: { pageNumbering: { startAt: 1 } },
    pages: [
      {
        id: "p001",
        number: 1,
        content: [
          { type: "paragraph", id: "para-1", runs: [{ text: "Hola mundo" }] },
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

// Sólo los párrafos seleccionados renderizan <textarea> (headings usan un
// <div>, el resto de bloques no son texto); es una señal más precisa que
// getAllByRole("textbox") — esa query también matchea inputs no
// relacionados del header (título, búsqueda, etc.).
const paragraphTextareas = (container: HTMLElement) =>
  Array.from(container.querySelectorAll("textarea"));

describe("PLAN-W §3 fase 2: escritura fluida (cableado real)", () => {
  it("Enter al final del párrafo crea un párrafo nuevo y no deja 'Enter' en el texto", async () => {
    const { container } = renderAt(`/editor/${BOOK_ID}`);
    await waitFor(() => {
      expect(screen.getByLabelText(/Acciones del editor/i)).toBeInTheDocument();
    });

    // Seleccionar el párrafo para que aparezca el textarea editable.
    fireEvent.click(screen.getByText(/Hola mundo/));
    const textarea = await screen.findByDisplayValue("Hola mundo");
    textarea.focus();
    (textarea as HTMLTextAreaElement).setSelectionRange(10, 10); // cursor al final

    fireEvent.keyDown(textarea, { key: "Enter" });

    // Debe existir un segundo párrafo (vacío) y el texto original NO
    // debe tener un salto de línea insertado (preventDefault corrió).
    await waitFor(() => {
      expect(paragraphTextareas(container)).toHaveLength(1);
    });
    expect(paragraphTextareas(container)[0].value).toBe("");
  });

  it("Backspace en un párrafo vacío lo borra y sube el foco al anterior", async () => {
    const { container } = renderAt(`/editor/${BOOK_ID}`);
    await waitFor(() => {
      expect(screen.getByLabelText(/Acciones del editor/i)).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText(/Hola mundo/));
    const textarea = await screen.findByDisplayValue("Hola mundo");
    (textarea as HTMLTextAreaElement).setSelectionRange(10, 10);
    fireEvent.keyDown(textarea, { key: "Enter" });

    // Ahora hay un párrafo nuevo vacío y seleccionado (autoFocus).
    await waitFor(() => {
      expect(paragraphTextareas(container)).toHaveLength(1);
    });
    const emptyTextarea = paragraphTextareas(container)[0];
    expect(emptyTextarea.value).toBe("");
    emptyTextarea.setSelectionRange(0, 0);
    fireEvent.keyDown(emptyTextarea, { key: "Backspace" });

    // El párrafo vacío desaparece; queda sólo "Hola mundo" de nuevo.
    await waitFor(() => {
      expect(paragraphTextareas(container)).toHaveLength(1);
    });
    expect(paragraphTextareas(container)[0].value).toBe("Hola mundo");
  });
});
