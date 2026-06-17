/**
 * SEC-LIBRO — front: helper `canEditLibro` que decide si el viewer
 * puede editar un libro. Replica el criterio del back
 * (`api/src/routes/libros.ts`); el back es la autoridad pero el
 * front lo usa para no abrir el editor cuando va a fallar el
 * guardado (UX + defensa en profundidad).
 *
 * Reglas (mismo orden que el back):
 *  - ADMIN: siempre.
 *  - Dueño: siempre.
 *  - visibility='escuela' + staff de la MISMA escuela: sí.
 *  - Resto (incluidos los alumnos): NO.
 *  - Libros sin dueño (ownerUserId=null): solo ADMIN.
 */
import { describe, expect, it } from "vitest";
import { canEditLibro, type BookMeta, type ViewerForLibro } from "../services/booksApi";

const OWNER_ID = "owner-teacher-1";
const OTHER_TEACHER_ID = "other-teacher-1";
const STUDENT_ID = "student-1";
const ADMIN_ID = "admin-1";

const SCHOOL_A = "school-A";
const SCHOOL_B = "school-B";

const metaPrivada: BookMeta = {
  ownerUserId: OWNER_ID,
  visibility: "privado",
  schoolId: SCHOOL_A,
};

const metaEscuela: BookMeta = {
  ownerUserId: OWNER_ID,
  visibility: "escuela",
  schoolId: SCHOOL_A,
};

const metaHuerfana: BookMeta = {
  ownerUserId: null,
  visibility: "privado",
  schoolId: null,
};

const viewer = (overrides: Partial<ViewerForLibro>): ViewerForLibro => ({
  id: STUDENT_ID,
  role: "USER",
  schoolId: SCHOOL_A,
  ...overrides,
});

describe("SEC-LIBRO: canEditLibro (front mirror del back)", () => {
  it("alumno (USER) sobre libro privado ajeno → false", () => {
    expect(canEditLibro(metaPrivada, viewer({}))).toBe(false);
  });

  it("alumno (USER) sobre libro 'escuela' de su MISMA escuela → false (alumnos nunca editan)", () => {
    expect(canEditLibro(metaEscuela, viewer({}))).toBe(false);
  });

  it("dueño sobre su libro privado → true", () => {
    expect(
      canEditLibro(metaPrivada, viewer({ id: OWNER_ID, role: "TEACHER" }))
    ).toBe(true);
  });

  it("otro TEACHER sobre libro privado ajeno → false", () => {
    expect(
      canEditLibro(metaPrivada, viewer({ id: OTHER_TEACHER_ID, role: "TEACHER" }))
    ).toBe(false);
  });

  it("staff de la MISMA escuela sobre libro 'escuela' → true", () => {
    expect(
      canEditLibro(metaEscuela, viewer({ id: OTHER_TEACHER_ID, role: "TEACHER" }))
    ).toBe(true);
  });

  it("staff de OTRA escuela sobre libro 'escuela' → false", () => {
    expect(
      canEditLibro(
        metaEscuela,
        viewer({ id: OTHER_TEACHER_ID, role: "TEACHER", schoolId: SCHOOL_B })
      )
    ).toBe(false);
  });

  it("ADMIN sobre cualquier libro → true", () => {
    expect(
      canEditLibro(metaPrivada, viewer({ id: ADMIN_ID, role: "ADMIN", schoolId: null }))
    ).toBe(true);
    expect(
      canEditLibro(metaEscuela, viewer({ id: ADMIN_ID, role: "ADMIN", schoolId: null }))
    ).toBe(true);
    expect(
      canEditLibro(metaHuerfana, viewer({ id: ADMIN_ID, role: "ADMIN", schoolId: null }))
    ).toBe(true);
  });

  it("TEACHER sobre libro huérfano (sin dueño) → false (estrategia conservadora)", () => {
    expect(
      canEditLibro(metaHuerfana, viewer({ id: OWNER_ID, role: "TEACHER" }))
    ).toBe(false);
  });

  it("viewer null o sin sesión → false", () => {
    expect(canEditLibro(metaPrivada, null)).toBe(false);
    expect(canEditLibro(metaPrivada, undefined)).toBe(false);
  });

  it("DIRECTIVO sobre libro 'escuela' de su escuela → true (es staff)", () => {
    expect(
      canEditLibro(
        metaEscuela,
        viewer({ id: "dir-1", role: "DIRECTIVO", schoolId: SCHOOL_A })
      )
    ).toBe(true);
  });

  it("USER (alumno) sobre libro huérfano → false (no ADMIN)", () => {
    expect(canEditLibro(metaHuerfana, viewer({}))).toBe(false);
  });
});
