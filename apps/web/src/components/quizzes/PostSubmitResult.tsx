/**
 * F4-03 — Bloque de resultado post-submit para el reproductor del alumno.
 *
 * Componente presentacional que muestra:
 *   - El `Puntaje: X / Y` — GATEADO por `ocultarPuntos` (F4-03).
 *   - La `Nota: <display> (<canonical10>/10)` — siempre se muestra
 *     cuando NO hay pendientes manuales. Si hay pendientes (F5-04), se
 *     muestra un RANGO honesto: "Tu nota está entre X e Y" + el
 *     conteo de pendientes.
 *   - El `message` del backend (puede contener el porcentaje si
 *     `ocultarPuntos=false`; el backend lo limpia cuando es true).
 *
 * El toggle `ocultarPuntos` se evalúa en dos lugares (defensa en
 * profundidad): el cliente gate del `Puntaje: X / Y` acá, y el backend
 * gate del `(NN%)` en el `message`. Si el alumno inspecciona el JSON
 * directamente, el backend ya le ocultó el porcentaje. Si el alumno
 * ve el render DOM, el componente le oculta el `Puntaje:`.
 *
 * F5-04 — rama de "rango de nota provisoria":
 *   - Se activa cuando `pendingManual > 0` (campo devuelto por el
 *     submit/grade server-side).
 *   - Muestra el rango calculado honestamente (mín = pendientes=0,
 *     máx = pendientes=full).
 *   - NO se mezcla con la nota única: si hay rango, NO se muestra
 *     `Nota: X` (sería confuso, podrían ser números diferentes).
 *   - El `ocultarPuntos` (F4-03) sigue ocultando el `Puntaje:`. El
 *     rango SÍ se muestra (es info sobre la escala, no el puntaje
 *     crudo).
 *   - `aprobado` queda ausente del response con pendientes (gate
 *     server-side: informar, no castigar). El componente no intenta
 *     mostrar un aprobado cuando hay rango.
 *
 * Props:
 *  - `result`: el response del submit (puede ser undefined mientras no
 *    se haya enviado el intento).
 *  - `ocultarPuntos`: si true, no renderiza el `Puntaje: X / Y`. El
 *    `message` ya viene saneado del backend.
 */
import type { ReactNode } from "react";
import { formatGradeRangeLabel, hasGradeRange } from "../../domain/quiz/gradeRange";

export type PostSubmitResultValue = {
  score?: number;
  maxScore?: number;
  feedback?: string;
  message?: string;
  notaDisplay?: string | null;
  notaCanonical10?: number | null;
  porcentaje?: number;
  aprobado?: boolean;
  // F5-04 — campos del rango de nota provisoria. Ausentes cuando el
  // intento ya está graded.
  pendingManual?: number;
  notaMinDisplay?: string | null;
  notaMaxDisplay?: string | null;
  notaMinCanonical10?: number | null;
  notaMaxCanonical10?: number | null;
};

interface Props {
  result: PostSubmitResultValue | null | undefined;
  /**
   * F4-03 — toggle "ocultar puntos al alumno". Si es `true`, el bloque
   * `Puntaje: X / Y` no se renderiza. Default `false`.
   */
  ocultarPuntos?: boolean;
}

export default function PostSubmitResult({
  result,
  ocultarPuntos = false
}: Props): ReactNode {
  if (!result) return null;
  const tieneScore =
    result.score !== undefined || result.maxScore !== undefined;
  const conRango = hasGradeRange(result);
  return (
    <div className="space-y-1" data-testid="post-submit-result">
      {tieneScore && !ocultarPuntos && (
        <p className="text-sm text-[var(--c-muted)]" data-testid="post-submit-score">
          Puntaje: {result.score ?? "-"} / {result.maxScore ?? "-"}
        </p>
      )}
      {conRango ? (
        // F5-04 — rama rango. NO mostramos `Nota:` única porque podría
        // contradecir el rango. Mostramos sólo el rango + el mensaje
        // del backend.
        <p
          className="text-sm font-semibold text-[var(--c-warning)]"
          data-testid="post-submit-grade-range"
        >
          {formatGradeRangeLabel(result)}
        </p>
      ) : (
        result.notaDisplay &&
        result.notaDisplay !== "—" && (
          <p
            className="text-sm font-semibold text-[var(--c-text)]"
            data-testid="post-submit-grade"
          >
            Nota: {result.notaDisplay}
            {typeof result.notaCanonical10 === "number"
              ? ` (${result.notaCanonical10}/10)`
              : ""}
          </p>
        )
      )}
      {result.message && (
        <p className="text-sm text-[var(--c-muted)]" data-testid="post-submit-message">
          {result.message}
        </p>
      )}
      {result.feedback && (
        <p className="text-sm text-[var(--c-muted)]">{result.feedback}</p>
      )}
    </div>
  );
}
