/**
 * Parseo de `Module.dependencies` en el front — espejo del `lib/
 * module-dependencies.ts` de la API (mismo formato `{id, type}[]`, con
 * entradas legacy en forma de string suelto tratadas como "required").
 * Extraído de `MenuProfesor.tsx` (donde vivía duplicado y sin usar, atado a
 * un `_graphSpec` muerto) para reusarlo en `DependenciasFlowMap`.
 */
import type { ModuleDependency } from "./module.types";

export function getRequiredDependencyIds(dependencies: Array<ModuleDependency | string>): string[] {
  return dependencies
    .map((dependency) => {
      if (typeof dependency === "string") return dependency;
      return dependency.type === "required" ? dependency.id : null;
    })
    .filter((dependency): dependency is string => Boolean(dependency));
}

export function getUnlocksDependencyIds(dependencies: Array<ModuleDependency | string>): string[] {
  return dependencies
    .map((dependency) => {
      if (typeof dependency === "string") return null;
      return dependency.type === "unlocks" ? dependency.id : null;
    })
    .filter((dependency): dependency is string => Boolean(dependency));
}
