/**
 * PLAN-multirol Fase 3 — filtrado de inscripciones "de prueba".
 *
 * Reemplaza a `espejo-filtro.ts`. El criterio pasa de la CUENTA
 * (`Usuario.tipoCuenta = "ESPEJO_ALUMNO"`, que obligaba a tener una
 * segunda cuenta por persona) a la INSCRIPCIÓN (`ClaseMiembro.esPrueba`),
 * que es donde el dato realmente importa: rosters, asistencia,
 * estadísticas del docente y conteo de alumnos facturables.
 *
 * Los 9 lugares que filtraban espejos son todos consultas a
 * `ClaseMiembro` con `rolEnClase: "STUDENT"`, así que el cambio es
 * mecánico y preserva el comportamiento exacto.
 *
 * Se filtra con `{ not: true }` y no con `false` a propósito: la columna
 * es NOT NULL con default en Postgres, pero las filas de los tests
 * in-memory se crean sin el campo, y `undefined === false` no matchea.
 * `not: true` es correcto en los dos mundos.
 */

/** Fragmento `where` para excluir inscripciones de prueba. */
export const whereSoloAlumnosReales = () => ({ esPrueba: { not: true } }) as const;

/** Variante en JS para listas ya traídas de la DB. */
export const soloAlumnosReales = <T extends { esPrueba?: boolean | null }>(rows: T[]): T[] =>
  rows.filter((r) => r.esPrueba !== true);
