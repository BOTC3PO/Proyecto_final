/**
 * PLAN-Q §2.2 — lógica pura del tap target mínimo para regiones chicas de
 * `MarcarMapaRenderer` (gotcha CABA, ledger §13.7). Extraída de la lógica de
 * `getBBox()`/render porque happy-dom no calcula bboxes SVG reales
 * (siempre 0), así que el componente no es testeable en DOM para esto —
 * mismo patrón que `domain/quiz/reorder.ts` (F5-06).
 */

export type Bbox = { w: number; h: number };
export type ViewBoxSize = { w: number; h: number };

/** Fracción mínima del viewBox visible que una feature debe cubrir para no necesitar overlay. */
const MIN_VISIBLE_FRACTION = 0.025;

/** Radio del círculo invisible, como fracción del lado mayor del viewBox visible. */
const OVERLAY_RADIUS_FRACTION = 0.018;

/**
 * true si la feature es tan chica en el viewBox visible actual que necesita
 * un tap target invisible más grande encima. Se autocorrige con el zoom:
 * al acercar, `viewBox` se achica y la fracción crece, así que deja de
 * necesitarlo.
 */
export function needsTapOverlay(bbox: Bbox, viewBox: ViewBoxSize): boolean {
  if (bbox.w <= 0 || bbox.h <= 0 || viewBox.w <= 0 || viewBox.h <= 0) return false;
  const minFrac = Math.min(bbox.w / viewBox.w, bbox.h / viewBox.h);
  return minFrac < MIN_VISIBLE_FRACTION;
}

/** Radio (en unidades del viewBox) del círculo de tap invisible. */
export function tapOverlayRadius(viewBox: ViewBoxSize): number {
  return Math.max(viewBox.w, viewBox.h) * OVERLAY_RADIUS_FRACTION;
}
