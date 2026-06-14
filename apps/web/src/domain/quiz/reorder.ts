/**
 * F5-06 — Lógica pura de reordenamiento para el renderer `ordenar`.
 *
 * Sin imports (mismo patrón que `intentos.ts` / `puntaje.ts` / `gradeRange.ts`):
 * testeable aislado con `node:test` o vitest, sin DOM, sin React.
 *
 * El renderer `OrdenarRenderer` usa `moveItemBy` tanto para:
 *   - el drag&drop de dnd-kit (al terminar el drag con sobre otro item), y
 *   - el fallback accesible (botones ↑/↓ visibles, F5-06).
 *
 * `canMoveUp` / `canMoveDown` deciden si el botón ↑/↓ de un item dado
 * debe estar habilitado (falso en los extremos de la lista).
 */

export type ReorderableItem = string | number;

export function moveItemBy<T>(
  arr: readonly T[],
  from: number,
  to: number,
): T[] {
  if (!Number.isInteger(from) || !Number.isInteger(to)) return arr.slice();
  if (from < 0 || from >= arr.length) return arr.slice();
  if (to < 0 || to >= arr.length) return arr.slice();
  if (from === to) return arr.slice();
  const next = arr.slice();
  const [it] = next.splice(from, 1);
  next.splice(to, 0, it);
  return next;
}

export function canMoveUp(arr: readonly unknown[], index: number): boolean {
  return Number.isInteger(index) && index > 0 && index < arr.length;
}

export function canMoveDown(arr: readonly unknown[], index: number): boolean {
  return (
    Number.isInteger(index) && index >= 0 && index < arr.length - 1
  );
}
