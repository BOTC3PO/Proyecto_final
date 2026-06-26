/**
 * WO-BUG — resolución y persistencia de `settings.materia` para
 * versiones de cuestionario.
 *
 * ANTES: el bug. Sólo `POST /api/modulos` (modulos.ts:795) escribía
 * `settings.materia = parsed.subject`. PUT/PATCH (applyModuleUpdate,
 * `modulos.ts:907-1011`) y `cloneModuloDeep` (modulos.ts:601-617)
 * copiaban/armaban settings SIN setear `materia`. Resultado: los
 * cuestionarios creados/editados por otros paths quedaban sin materia
 * y desaparecían al filtrar el banco.
 *
 * AHORA: un único helper `mergeMateriaIntoSettings` que toma un
 * `settings` (objeto), el `subject` y `category` del módulo, y devuelve
 * el objeto merged con `materia` poblada. Se usa en TODOS los paths
 * de creación de `QuizVersion` para que la materia nunca quede
 * vacía cuando el módulo la tiene.
 *
 * Reglas:
 *  - Si el `settings` ya tiene `materia` no vacía, se respeta.
 *  - Si no, se toma `subject || category` (en ese orden, con `||`).
 *  - Si módulo tampoco tiene, se devuelve `settings` sin tocar (NO se
 *    escribe el string pseudo "Sin materia" — ése es el fallback del
 *    front). El backfill reporta este caso para revisión manual.
 */
function safeJsonParse<T>(value: string | null | undefined, fallback: T): T {
  if (!value) return fallback;
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}

export type ModuloMateriaSource = {
  subject?: string | null;
  category?: string | null;
};

export const MATERIA_VACIA = "";

/**
 * Devuelve `subject || category || null` (sin fallback a "Sin materia",
 * porque eso es responsabilidad del front). `null` significa "el módulo
 * tampoco tiene materia" → el caller NO escribe nada en el JSON.
 */
export function deriveMateria(modulo: ModuloMateriaSource | null | undefined): string | null {
  if (!modulo) return null;
  const s = typeof modulo.subject === "string" ? modulo.subject : "";
  if (s) return s;
  const c = typeof modulo.category === "string" ? modulo.category : "";
  if (c) return c;
  return null;
}

/**
 * Parsea `settings` (string JSON u objeto) y devuelve un objeto
 * normalizado con `materia` poblada si el módulo la provee.
 *
 * Si `settings` viene sin parsear o mal formado, devuelve un objeto
 * con la materia (o vacío si el módulo tampoco tiene).
 */
export function mergeMateriaIntoSettings(
  settingsRaw: string | Record<string, unknown> | null | undefined,
  modulo: ModuloMateriaSource | null | undefined,
): Record<string, unknown> {
  const base: Record<string, unknown> =
    typeof settingsRaw === "string"
      ? safeJsonParse<Record<string, unknown>>(settingsRaw, {})
      : (settingsRaw && typeof settingsRaw === "object" ? settingsRaw : {});

  const existing = typeof base.materia === "string" ? base.materia : "";
  if (existing) {
    return { ...base, materia: existing };
  }

  const derived = deriveMateria(modulo);
  if (derived) {
    return { ...base, materia: derived };
  }

  return base;
}
