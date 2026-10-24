/**
 * SEC-LIBRO — front: el alumno entrando a /editor/:id de un libro
 * ajeno debe ver el lector read-only (`BookReader`), NO el editor.
 *
 * Defensa en profundidad: el back ya bloquea POST /api/libros con
 * 403 para los alumnos, pero la UX correcta es no abrir el editor
 * (no tendría sentido mostrar inputs editables que van a fallar al
 * guardar). El criterio se replica en
 * `apps/web/src/bookEditor/services/booksApi.ts:canEditLibro`.
 *
 * Casos:
 *  - Viewer USER (alumno) sobre libro ajeno → BookReader montado,
 *    editor NO montado (no aparece el header con "Guardar").
 *  - Viewer TEACHER dueño del libro → editor montado.
 */
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { beforeEach, describe, expect, it, vi } from "vitest";

// ── Mocks ANTES de importar el componente ────────────────────────

// useAuth — mutable para cambiar el viewer entre tests.
let currentUser: { id: string; name: string; role: string; schoolId: string | null } | null = null;
vi.mock("../../auth/use-auth", () => ({
  useAuth: () => ({ user: currentUser }),
}));

// apiGet/apiPost — el editor llama a /api/libros/:id; devolvemos
// el libro con la metadata de ownership que añadió SEC-LIBRO.
const mockApiGet = vi.fn();
const mockApiPost = vi.fn();
vi.mock("../../lib/api", () => ({
  apiGet: (...args: unknown[]) => mockApiGet(...args),
  apiPost: (...args: unknown[]) => mockApiPost(...args),
  apiPut: vi.fn(),
  apiPatch: vi.fn(),
  apiDelete: vi.fn(),
}));

// File System Access API — el editor checkea si window.showSaveFilePicker
// existe; en jsdom/happy-dom no existe y no nos importa para este test.

// Importar DESPUÉS de los mocks.
import BookEditorPage from "../BookEditorPage";

const OWNER_TEACHER_ID = "owner-teacher";
const STUDENT_ID = "alumno-1";
const SCHOOL_A = "school-A";
const BOOK_ID = "libro-priv-de-owner";

const BOOK_RESPONSE = {
  id: BOOK_ID,
  title: "Libro privado del owner",
  book: {
    schema: "book.pages@1.1",
    metadata: {
      id: BOOK_ID,
      title: "Libro privado del owner",
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
  // SEC-LIBRO — campos de ownership inyectados por el back.
  ownerUserId: OWNER_TEACHER_ID,
  visibility: "privado",
  schoolId: SCHOOL_A,
};

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/editor" element={<BookEditorPage />} />
        <Route path="/editor/:id" element={<BookEditorPage />} />
      </Routes>
    </MemoryRouter>
  );
}

beforeEach(() => {
  vi.clearAllMocks();
  mockApiGet.mockImplementation(async (path: string) => {
    if (path.startsWith(`/api/libros/${BOOK_ID}`)) {
      return BOOK_RESPONSE;
    }
    return {};
  });
});

describe("SEC-LIBRO: BookEditorPage decide editor vs lector según permisos", () => {
  it("ALUMNO (USER) entrando a un libro AJENO → ve BookReader, no el editor", async () => {
    currentUser = {
      id: STUDENT_ID,
      name: "Estudiante",
      role: "USER",
      schoolId: SCHOOL_A,
    };

    renderAt(`/editor/${BOOK_ID}`);

    // El BookReader expone data-testid="book-reader" (ver
    // BookReader.tsx). Si está, confirmamos que la página
    // montó el lector y NO el editor.
    await waitFor(() => {
      expect(screen.getByTestId("book-reader")).toBeInTheDocument();
    });

    // Sanity: el banner del editor full ("Acciones del editor")
    // NO debe estar. El header del lector dice "Lector de libro".
    expect(screen.queryByLabelText(/Acciones del editor/i)).toBeNull();
    expect(screen.getByText(/Lector de libro/i)).toBeInTheDocument();

    // Sanity: el contenido del libro aparece en el lector.
    expect(screen.getByText(/Hola mundo/)).toBeInTheDocument();
  });

  it("DUEÑO entrando a su propio libro → ve el editor, no el lector", async () => {
    currentUser = {
      id: OWNER_TEACHER_ID,
      name: "Owner Teacher",
      role: "TEACHER",
      schoolId: SCHOOL_A,
    };

    renderAt(`/editor/${BOOK_ID}`);

    // El editor tiene el banner accesible "Acciones del editor".
    await waitFor(() => {
      expect(screen.getByLabelText(/Acciones del editor/i)).toBeInTheDocument();
    });

    // El BookReader NO debe haberse montado.
    expect(screen.queryByTestId("book-reader")).toBeNull();
  });

  it("STAFF de OTRA escuela sobre libro 'escuela' → ve BookReader", async () => {
    // Cambiamos la respuesta para que sea visibility 'escuela'.
    mockApiGet.mockImplementation(async (path: string) => {
      if (path.startsWith(`/api/libros/${BOOK_ID}`)) {
        return { ...BOOK_RESPONSE, visibility: "escuela", schoolId: SCHOOL_A };
      }
      return {};
    });

    currentUser = {
      id: "teacher-otra-escuela",
      name: "Profe otra escuela",
      role: "TEACHER",
      schoolId: "school-B",
    };

    renderAt(`/editor/${BOOK_ID}`);

    await waitFor(() => {
      expect(screen.getByTestId("book-reader")).toBeInTheDocument();
    });
    expect(screen.queryByLabelText(/Acciones del editor/i)).toBeNull();
  });

  it("TEACHER abre /editor (sin id) → libro nuevo con id ÚNICO (no 'book-draft')", async () => {
    // SEC-LIBRO — regresión: antes el EMPTY_BOOK tenía
    // metadata.id = 'book-draft' fijo. El primer teacher que
    // guardaba lo creaba (huérfano si fallaba el back), y los
    // siguientes recibían 403 porque el back trataba el POST
    // como SOBRESCRITURA del libro huérfano. Ahora cada apertura
    // genera un id distinto (makeNewBookId) y el POST cae en el
    // camino de CREACIÓN. El test unitario detallado de la
    // factory vive en services/__tests__/newBook.spec.ts; acá
    // sólo verificamos que el editor monta correctamente sin
    // params.id (regresión de smoke).
    currentUser = {
      id: OWNER_TEACHER_ID,
      name: "Owner Teacher",
      role: "TEACHER",
      schoolId: SCHOOL_A,
    };

    renderAt("/editor");

    await waitFor(() => {
      expect(screen.getByLabelText(/Acciones del editor/i)).toBeInTheDocument();
    });
    expect(screen.queryByTestId("book-reader")).toBeNull();
  });
});
