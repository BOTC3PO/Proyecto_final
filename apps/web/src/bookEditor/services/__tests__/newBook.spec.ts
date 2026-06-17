/**
 * SEC-LIBRO — factory `makeEmptyBook` / `makeNewBookId`.
 *
 * Regresión: antes el editor tenía un `EMPTY_BOOK` constante con
 * `metadata.id = "book-draft"` fijo. Eso causaba que el segundo
 * teacher que abría `/editor` (sin id) y guardaba pegara un POST
 * con el mismo id que el primero → el back lo trataba como
 * SOBRESCRITURA y rechazaba con 403 (canEditLibro: no es dueño,
 * no es admin, no aplica visibility 'escuela'). El error que veía
 * el usuario era: "Sin permisos para editar este libro".
 *
 * Acá fijamos que cada llamada a `makeEmptyBook()` produce un
 * libro con un id ÚNICO y con el shape mínimo esperado por el
 * editor + el back (BookSchema acepta el payload).
 */
import { describe, expect, it } from "vitest";
import { makeEmptyBook, makeNewBookId } from "../newBook";

describe("SEC-LIBRO: makeNewBookId genera ids únicos por libro nuevo", () => {
  it("dos llamadas devuelven ids distintos", () => {
    const a = makeNewBookId();
    const b = makeNewBookId();
    expect(a).not.toEqual(b);
  });

  it("el id no es el hardcode legacy 'book-draft'", () => {
    const ids = Array.from({ length: 10 }, () => makeNewBookId());
    for (const id of ids) {
      expect(id).not.toEqual("book-draft");
    }
  });

  it("el id arranca con prefijo 'book-' (legibilidad)", () => {
    expect(makeNewBookId()).toMatch(/^book-/);
  });

  it("100 llamadas dan 100 ids distintos (no colisión)", () => {
    const set = new Set<string>();
    for (let i = 0; i < 100; i++) set.add(makeNewBookId());
    expect(set.size).toBe(100);
  });
});

describe("SEC-LIBRO: makeEmptyBook produce libros nuevos no-colisionables", () => {
  it("dos libros nuevos tienen metadata.id distintos", () => {
    const a = makeEmptyBook();
    const b = makeEmptyBook();
    expect(a.metadata.id).not.toEqual(b.metadata.id);
    expect(a.metadata.id).not.toEqual("book-draft");
    expect(b.metadata.id).not.toEqual("book-draft");
  });

  it("schema es v1.1 (lo que el back espera)", () => {
    expect(makeEmptyBook().schema).toBe("book.pages@1.1");
  });

  it("tiene al menos una página con contenido inicial", () => {
    const b = makeEmptyBook();
    expect(b.pages.length).toBeGreaterThanOrEqual(1);
    expect(b.pages[0].content.length).toBeGreaterThanOrEqual(1);
  });

  it("el título arranca con default 'Nuevo documento' (UX consistente)", () => {
    expect(makeEmptyBook().metadata.title).toBe("Nuevo documento");
  });
});
