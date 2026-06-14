/**
 * F5-03 — Mirror byte-a-byte del helper backend de eventos informativos.
 *
 * Cualquier cambio en `api/src/lib/attemptEvents.ts` DEBE reflejarse acá.
 * El patrón ya está establecido en `apps/web/src/domain/quiz/intentos.ts` ↔
 * `api/src/lib/quiz-intentos.ts`.
 *
 * PRIVACIDAD: este helper opera sobre un número agregado. NUNCA se
 * persiste ni transmite timestamps, URLs visitadas, ni qué app/pestaña
 * se abrió. El docente ve "salió N veces" o "completó sin salir".
 */

export type AttemptEvents = {
  /**
   * Cantidad de veces que la pestaña perdió visibilidad durante la
   * evaluación. Informativo, no penaliza la nota (decisión del docente).
   */
  tabSwitchCount?: number;
};

export type AttemptEventsSummary = {
  tabSwitchCount: number;
  canaryTriggered: boolean;
};

export function summarizeAttemptEvents(
  grading: Record<string, unknown> | null | undefined
): AttemptEventsSummary {
  if (!grading) return { tabSwitchCount: 0, canaryTriggered: false };
  const events = (grading.events ?? {}) as Partial<AttemptEvents>;
  const count =
    typeof events.tabSwitchCount === "number" && events.tabSwitchCount > 0
      ? Math.floor(events.tabSwitchCount)
      : 0;
  const canary = grading.canaryTriggered === true;
  return { tabSwitchCount: count, canaryTriggered: canary };
}

export function formatTabSwitchLabel(count: number): string {
  if (count <= 0) return "Completó sin cambiar de pestaña";
  if (count === 1) return "Salió de la pestaña 1 vez";
  return `Salió de la pestaña ${count} veces`;
}
