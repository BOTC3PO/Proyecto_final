/**
 * F4-03 — Bloque de resultado post-submit para el reproductor del alumno.
 *
 * Componente presentacional que muestra:
 *   - El `Puntaje: X / Y` — GATEADO por `ocultarPuntos` (F4-03).
 *   - La `Nota: <display> (<canonical10>/10)` — siempre se muestra.
 *   - El `message` del backend (puede contener el porcentaje si
 *     `ocultarPuntos=false`; el backend lo limpia cuando es true).
 *
 * El toggle `ocultarPuntos` se evalúa en dos lugares (defensa en
 * profundidad): el cliente gate del `Puntaje: X / Y` acá, y el backend
 * gate del `(NN%)` en el `message`. Si el alumno inspecciona el JSON
 * directamente, el backend ya le ocultó el porcentaje. Si el alumno
 * ve el render DOM, el componente le oculta el `Puntaje:`.
 *
 * Props:
 *  - `result`: el response del submit (puede ser undefined mientras no
 *    se haya enviado el intento).
 *  - `ocultarPuntos`: si true, no renderiza el `Puntaje: X / Y`. El
 *    `message` ya viene saneado del backend.
 */
import type { ReactNode } from "react";

export type PostSubmitResultValue = {
  score?: number;
  maxScore?: number;
  feedback?: string;
  message?: string;
  notaDisplay?: string | null;
  notaCanonical10?: number | null;
  porcentaje?: number;
  aprobado?: boolean;
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
  return (
    <div className="space-y-1" data-testid="post-submit-result">
      {tieneScore && !ocultarPuntos && (
        <p className="text-sm text-gray-600" data-testid="post-submit-score">
          Puntaje: {result.score ?? "-"} / {result.maxScore ?? "-"}
        </p>
      )}
      {result.notaDisplay && result.notaDisplay !== "—" && (
        <p
          className="text-sm font-semibold text-gray-800"
          data-testid="post-submit-grade"
        >
          Nota: {result.notaDisplay}
          {typeof result.notaCanonical10 === "number"
            ? ` (${result.notaCanonical10}/10)`
            : ""}
        </p>
      )}
      {result.message && (
        <p className="text-sm text-gray-600" data-testid="post-submit-message">
          {result.message}
        </p>
      )}
      {result.feedback && (
        <p className="text-sm text-gray-600">{result.feedback}</p>
      )}
    </div>
  );
}
