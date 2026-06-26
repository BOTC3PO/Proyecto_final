/**
 * WO-BUG — Resolución de materia/categoría de un módulo (helper único).
 *
 * Antes había 8+ copias divergentes por toda la app:
 *   - `m.subject || m.category || "Sin materia"` (la mayoría)
 *   - `m.subject ?? m.category ?? "General"`     (Perfil, ProfesorEstadisticas,
 *                                                EnterpriseModulos, MenuProfesor:159)
 * El `??` rompe cuando `subject === ""` (string vacío guardado por el
 * editor), mostrando "—" en vez de caer al `category`. Unificamos acá con
 * `||` (falsy) y un solo string de fallback canónico `"Sin materia"`.
 *
 * Reglas:
 *   - `||` (no `??`) → un string vacío `""` cae al siguiente valor.
 *   - Devuelve `"Sin materia"` (canónico) como último fallback.
 *   - Acepta `string | null | undefined` por si el back devuelve `null`
 *     para módulos legacy o sin materia persistida.
 *
 * `resolveCategoria` es la inversa: prioriza `category` y cae a `subject`.
 * Existe el mismo patrón duplicado (ModulosList, ReproductorModulos) y
 * queda unificado acá.
 */

const FALLBACK_MATERIA = "Sin materia";
const FALLBACK_CATEGORIA = "Sin categoría";

type MateriaInput = {
  subject?: string | null;
  category?: string | null;
};

export function resolveMateria(input: MateriaInput | null | undefined): string {
  if (!input) return FALLBACK_MATERIA;
  return input.subject || input.category || FALLBACK_MATERIA;
}

export function resolveCategoria(input: MateriaInput | null | undefined): string {
  if (!input) return FALLBACK_CATEGORIA;
  return input.category || input.subject || FALLBACK_CATEGORIA;
}

export const MATERIA_FALLBACK = FALLBACK_MATERIA;
export const CATEGORIA_FALLBACK = FALLBACK_CATEGORIA;
