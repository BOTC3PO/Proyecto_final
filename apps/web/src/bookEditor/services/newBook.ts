import type { Book } from "../../domain/book/book.types";

// SEC-LIBRO — generación de id para libros nuevos.
//
// Antes el editor usaba un `EMPTY_BOOK` constante con
// `metadata.id = "book-draft"` fijo. Cuando dos usuarios abrían
// `/editor` (sin id) y guardaban, ambos POSTeaban con el mismo id
// → el back trataba el segundo como SOBRESCRITURA del primero y
// rechazaba con 403 (canEditLibro) a cualquiera que no fuera el
// dueño o ADMIN.
//
// Solución: cada apertura de "libro nuevo" genera un id único.
// Eso garantiza que el primer POST/guardado cae en el camino de
// CREACIÓN del back (libros.ts), y queda el viewer como dueño
// (ownerUserId = user._id, schoolId = user.schoolId, visibility
// = "privado" por defecto).
//
// Usamos `crypto.randomUUID()` cuando está disponible (browsers
// modernos / Node ≥14); fallback a timestamp + random para
// entornos sin la API.
export function makeNewBookId(): string {
  const g = globalThis as { crypto?: { randomUUID?: () => string } };
  if (g.crypto?.randomUUID) {
    return `book-${g.crypto.randomUUID()}`;
  }
  return `book-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

// SEC-LIBRO — factory de "libro nuevo". Reemplaza al
// `EMPTY_BOOK` constante que el editor mantenía hardcodeado.
// Genera un id fresco cada llamada (ver makeNewBookId).
export function makeEmptyBook(): Book {
  return {
    schema: "book.pages@1.1",
    metadata: {
      id: makeNewBookId(),
      title: "Nuevo documento",
      language: "es",
      difficulty: 3,
      theme: {
        paperColor: "#E0C9A6",
        textColor: "#2B2B2B",
        fontFamily: "serif",
        baseFontSizePx: 18,
        lineHeight: 1.6,
      },
    },
    structure: {
      pageNumbering: { startAt: 1 },
      index: [],
    },
    assets: [],
    pages: [
      {
        id: "p001",
        number: 1,
        title: "Página 1",
        anchors: [{ id: "a1", label: "Inicio" }],
        content: [
          {
            type: "heading",
            id: "p001_h1_001",
            level: 1,
            text: "Título",
            blockStyle: { align: "left" },
            textStyle: { bold: true },
          },
          {
            type: "paragraph",
            id: "p001_p_001",
            runs: [{ text: "Escribe aquí tu contenido..." }],
            blockStyle: { align: "left" },
          },
        ],
      },
    ],
    notes: [],
  };
}
