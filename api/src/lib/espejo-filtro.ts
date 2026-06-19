/**
 * FASE 4 — filtrado central de cuentas espejo-alumno.
 *
 * El espejo (un `Usuario` con `tipoCuenta = "ESPEJO_ALUMNO"`) se
 * inscribe en un aula real como `ClaseMiembro` STUDENT para vivir el
 * contenido como alumno (ver `provisionarEspejoAlumno` + el endpoint
 * de inscripción en `routes/aulas.ts`). Pero NO debe contaminar
 * ningún roster ni analítica de alumnos: listados, conteos, promedios,
 * rankings, economía de aula, reportes/exports y, crucialmente, el
 * conteo de facturación enterprise.
 *
 * Este módulo centraliza el criterio de exclusión para que no se
 * disperse por las rutas. Hay tres formas de aplicarlo según el call
 * site:
 *
 *   1. `whereExcluirEspejos()` — fragmento `{ usuarioId: { notIn } }`
 *      para mezclar en el `where` de queries DB-level (`count`,
 *      `groupBy`, `findMany`). Devuelve `{}` si no hay espejos, para
 *      no ensuciar la query.
 *   2. `excluirEspejos(rows)` — filtra en JS una lista de filas con
 *      `usuarioId` (resultado de un `findMany` ya hecho).
 *   3. `excluirEspejosDeIds(ids)` — filtra una lista de ids de usuario.
 *
 * Invariante de SEGURIDAD del criterio: SIEMPRE se identifica al
 * espejo por IGUALDAD (`tipoCuenta = "ESPEJO_ALUMNO"`) y se excluye
 * por `id`/`notIn`. NUNCA se usa `tipoCuenta: { not: "ESPEJO_ALUMNO" }`
 * porque, con la columna nullable, en PostgreSQL `tipo_cuenta != 'X'`
 * evalúa a `NULL` (no `true`) para las filas con `tipo_cuenta = NULL`
 * y se perderían TODAS las cuentas reales. Ver la misma nota en
 * `provisionar-espejo.ts`.
 *
 * Lo que este módulo NO hace (ver sección "NO HACER" de la FASE 4):
 *   - No filtra al espejo de SU PROPIA vista de alumno (esos call
 *     sites consultan por el `usuarioId` del propio viewer, no listan
 *     el roster).
 *   - No toca la cuenta staff real: el filtro es por `tipoCuenta`, y
 *     la cuenta staff real tiene `tipoCuenta = NULL`.
 */

import { prisma } from "./prisma";
import { ESPEJO_TIPO_CUENTA } from "./provisionar-espejo";

export { ESPEJO_TIPO_CUENTA };

/**
 * Devuelve el Set de IDs de usuarios espejo-alumno. Si se pasa
 * `candidateIds`, acota la búsqueda a ese conjunto (optimización para
 * no escanear toda la tabla `usuarios`); el resultado es el subconjunto
 * de `candidateIds` que son espejos.
 *
 * Igualdad pura sobre `tipoCuenta` — ver nota de seguridad del módulo.
 */
export async function getEspejoUserIds(
  candidateIds?: readonly string[]
): Promise<Set<string>> {
  // Un set de candidatos vacío no puede contener espejos: cortamos
  // antes de pegarle a la DB.
  if (candidateIds && candidateIds.length === 0) return new Set();

  const where: Record<string, unknown> = { tipoCuenta: ESPEJO_TIPO_CUENTA };
  if (candidateIds) {
    where.id = { in: [...candidateIds] };
  }
  const rows = await prisma.usuario.findMany({ where });
  return new Set(rows.map((r) => r.id as string));
}

/**
 * Fragmento `where` para excluir espejos en queries DB-level sobre
 * tablas con columna `usuarioId` (ClaseMiembro, ProgresoModulo, …).
 *
 * Devuelve `{}` cuando no hay espejos para no agregar un `NOT IN ()`
 * innecesario. El `notIn` solo contiene ids reales (nunca `NULL`), así
 * que es seguro en PostgreSQL.
 *
 * Uso típico:
 *   const where = { claseId, rolEnClase: "STUDENT", ...(await whereExcluirEspejos()) };
 */
export async function whereExcluirEspejos(
  candidateIds?: readonly string[]
): Promise<Record<string, never> | { usuarioId: { notIn: string[] } }> {
  const espejos = await getEspejoUserIds(candidateIds);
  if (espejos.size === 0) return {};
  return { usuarioId: { notIn: [...espejos] } };
}

/**
 * Filtra en JS una lista de filas con `usuarioId`, descartando las que
 * pertenezcan a un espejo. Acota la consulta de espejos a los ids
 * presentes en `rows` (no escanea toda la tabla).
 */
export async function excluirEspejos<T extends { usuarioId?: string | null }>(
  rows: readonly T[]
): Promise<T[]> {
  if (rows.length === 0) return [];
  const ids = rows
    .map((r) => r.usuarioId)
    .filter((x): x is string => typeof x === "string" && x.length > 0);
  const espejos = await getEspejoUserIds(ids);
  if (espejos.size === 0) return [...rows];
  return rows.filter((r) => !r.usuarioId || !espejos.has(r.usuarioId));
}

/**
 * Filtra una lista de ids de usuario, descartando los espejos.
 * Preserva el orden de entrada.
 */
export async function excluirEspejosDeIds(
  ids: readonly string[]
): Promise<string[]> {
  if (ids.length === 0) return [];
  const espejos = await getEspejoUserIds(ids);
  if (espejos.size === 0) return [...ids];
  return ids.filter((id) => !espejos.has(id));
}
