/**
 * `Modulo.dependencies` (JSON `{ id: string; type: "required" | "unlocks" }[]`,
 * columna `String?`) — lógica de parseo y de bloqueo, antes duplicada tres
 * veces en `progreso.ts` (una de las copias tenía un bug: chequeaba
 * `Array.isArray(module.dependencies)` sobre el string crudo sin
 * `JSON.parse` primero, así que esa copia nunca detectaba un módulo
 * bloqueado).
 *
 * `"required"` y `"unlocks"` son la MISMA relación declarada desde lados
 * opuestos: `{id: B, type: "required"}` en A significa "A requiere B".
 * `{id: B, type: "unlocks"}` en A significa "A desbloquea B" — o sea,
 * "B requiere A", declarado desde A en vez de desde B. Antes `"unlocks"`
 * se guardaba pero ningún consumidor lo leía (ver `docs/modulos.md`);
 * `getEffectiveRequiredDependencyIds` junta ambas formas.
 *
 * Entradas legacy en forma de string suelto (`"otro-modulo-id"`, sin
 * `{id,type}`) se tratan como `"required"` — mismo criterio que ya usaban
 * las tres copias originales.
 */

export type DependenciesById = ReadonlyMap<string, unknown>;

export function parseModuleDependencies(raw: string | null | undefined): unknown[] {
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function getRequiredDependencyIds(dependencies: unknown): string[] {
  if (!Array.isArray(dependencies)) return [];
  return dependencies
    .map((dep) => {
      if (typeof dep === "string") return dep;
      if (!dep || typeof dep !== "object") return null;
      const record = dep as { id?: unknown; type?: unknown };
      if (record.type !== "required" || typeof record.id !== "string") return null;
      return record.id;
    })
    .filter((dep): dep is string => Boolean(dep));
}

export function getUnlocksDependencyIds(dependencies: unknown): string[] {
  if (!Array.isArray(dependencies)) return [];
  return dependencies
    .map((dep) => {
      if (!dep || typeof dep !== "object") return null;
      const record = dep as { id?: unknown; type?: unknown };
      if (record.type !== "unlocks" || typeof record.id !== "string") return null;
      return record.id;
    })
    .filter((dep): dep is string => Boolean(dep));
}

/**
 * Prerrequisitos EFECTIVOS de `targetId`: los que el propio módulo
 * declara como `"required"`, más los de cualquier OTRO módulo (dentro de
 * `allDependenciesById`, típicamente todos los módulos con dependencies
 * no nulo) que declare `{id: targetId, type: "unlocks"}`.
 */
export function getEffectiveRequiredDependencyIds(
  targetId: string,
  targetDependencies: unknown,
  allDependenciesById: DependenciesById
): string[] {
  const ids = new Set(getRequiredDependencyIds(targetDependencies));
  for (const [otherId, deps] of allDependenciesById) {
    if (otherId === targetId) continue;
    if (getUnlocksDependencyIds(deps).includes(targetId)) ids.add(otherId);
  }
  return Array.from(ids);
}

export function computeModuleLock(
  targetId: string,
  targetDependencies: unknown,
  allDependenciesById: DependenciesById,
  completedModuleIds: ReadonlySet<string>
): { isLocked: boolean; missingDependencyIds: string[] } {
  const missingDependencyIds = getEffectiveRequiredDependencyIds(
    targetId,
    targetDependencies,
    allDependenciesById
  ).filter((id) => !completedModuleIds.has(id));
  return { isLocked: missingDependencyIds.length > 0, missingDependencyIds };
}
