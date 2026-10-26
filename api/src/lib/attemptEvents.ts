/**
 * F5-03 — Helpers para los eventos informativos del intento.
 *
 * Los eventos se guardan en el JSON `grading` del intento (TEXT libre en la
 * DB), junto a los flags que ya puso V2-04 (`canaryTriggered`, etc.). Este
 * helper centraliza la lectura/escritura y el resumen "amigable" para la
 * vista del docente.
 *
 * PRIVACIDAD: el helper opera sobre un número agregado (`tabSwitchCount`).
 * El cliente NUNCA envía timestamps, URLs visitadas, ni qué app/pestaña se
 * abrió. El docente ve "salió N veces" o "completó sin salir", nunca más.
 *
 * Patrón: el front y el back tienen un mirror byte-a-byte. La forma de los
 * tipos debe matchear; cualquier cambio en uno DEBE reflejarse en el otro.
 */

export type AttemptEvents = {
  /**
   * Cantidad de veces que la pestaña perdió visibilidad durante la
   * evaluación. Se persiste como flag informativo en el JSON `grading` del
   * intento (mismo canal que el canario de V2-04). El docente decide si
   * darle peso, pero el sistema NO penaliza automáticamente.
   */
  tabSwitchCount?: number;
};

/**
 * Resumen seguro de los eventos del intento, listo para que el docente lo
 * vea en la lista/panel. NO incluye timestamps ni detalles de qué pasó
 * afuera: sólo el contador final y si el canario se disparó (V2-04).
 */
export type AttemptEventsSummary = {
  tabSwitchCount: number;
  canaryTriggered: boolean;
};

/**
 * Construye el resumen desde el `grading` JSON. Es seguro con `null` o
 * `undefined` (devuelve ceros). No tira.
 */
export function summarizeAttemptEvents(
  grading: Record<string, unknown> | null | undefined
): AttemptEventsSummary {
  if (!grading) return { tabSwitchCount: 0, canaryTriggered: false };
  const events = (grading.events ?? {}) as Partial<AttemptEvents>;
  const count = typeof events.tabSwitchCount === "number" && events.tabSwitchCount > 0
    ? Math.floor(events.tabSwitchCount)
    : 0;
  const canary = grading.canaryTriggered === true;
  return { tabSwitchCount: count, canaryTriggered: canary };
}

/**
 * Fusiona un patch de eventos en el JSON `grading` del intento. Devuelve el
 * nuevo objeto `grading` listo para `JSON.stringify`. La fusión es
 * MONOTÓNICA para `tabSwitchCount`: nunca decrementa (si el server recibe
 * un valor menor, lo descarta) — esto previene race conditions si el
 * cliente manda PATCHes en orden inverso al de la red.
 *
 * Preserva todos los demás campos del `grading` (canaryTriggered,
 * canaryQuestions, items, etc.).
 */
export function mergeAttemptEvents(
  grading: Record<string, unknown>,
  patch: AttemptEvents
): Record<string, unknown> {
  const next: Record<string, unknown> = { ...grading };
  const current = (next.events ?? {}) as Partial<AttemptEvents>;
  const merged: Partial<AttemptEvents> = { ...current };
  if (typeof patch.tabSwitchCount === "number") {
    merged.tabSwitchCount = Math.max(
      typeof current.tabSwitchCount === "number" ? current.tabSwitchCount : 0,
      patch.tabSwitchCount
    );
  }
  next.events = merged;
  return next;
}

/**
 * Etiqueta humana del contador para la vista del docente. Neutra, sin
 * acusar: el docente ve el dato, decide qué hacer.
 */
export function formatTabSwitchLabel(count: number): string {
  if (count <= 0) return "Completó sin cambiar de pestaña";
  if (count === 1) return "Salió de la pestaña 1 vez";
  return `Salió de la pestaña ${count} veces`;
}
