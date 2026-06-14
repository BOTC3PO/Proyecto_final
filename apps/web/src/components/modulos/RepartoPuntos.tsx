/**
 * F4-03 — Panel "Reparto por sección" para el editor de cuestionarios.
 *
 * Componente presentacional que muestra:
 *   - El total del cuestionario (suma de puntajes de las posiciones con > 0).
 *   - Una tabla con el reparto por tema (sección): puntaje absoluto, % de
 *     participación sobre el total, y nombre del tema.
 *
 * Se alimenta del cuestionario (mismo shape que `PosicionesCanvas` /
 * `CuestionarioPosiciones`) y opcionalmente de un set de posiciones acertadas
 * (por `numero`). Si se pasa, muestra también el "score" del alumno por tema
 * y el ratio; si no, sólo el reparto en bruto (modo "vista del docente").
 *
 * El componente NO muta el cuestionario: es la vista. La edición del puntaje
 * se hace en `PosicionesCanvas` (F4-03) vía el input que se agregó.
 *
 * Es EXPORTABLE: el `ModuloEditor` (F4-04) lo va a montar al lado del
 * `PosicionesCanvas` para mostrar el total y el reparto en una sola pantalla.
 * No wireado todavía — F4-03 sienta la API.
 */

import { useMemo } from "react";
import type { CuestionarioPosiciones, Tema } from "../../domain/quiz/posiciones";
import { resumenPuntaje, type PosicionConTema } from "../../domain/quiz/puntaje";

interface Props {
  cuestionario: CuestionarioPosiciones;
  /**
   * Si se pasa, el panel muestra también el score/ratio del alumno por tema.
   * Si se omite, sólo se muestra el reparto (modo "armar el cuestionario").
   */
  acertadas?: ReadonlySet<number>;
  /**
   * Variante de densidad visual:
   *  - "compact": una sola línea con el total y la cantidad de secciones.
   *  - "table":   tabla con el reparto por sección.
   * Default: "table".
   */
  variant?: "compact" | "table";
}

export default function RepartoPuntos({
  cuestionario,
  acertadas,
  variant = "table"
}: Props) {
  const resumen = useMemo(
    () =>
      resumenPuntaje({
        posiciones: cuestionario.posiciones as readonly PosicionConTema[],
        temas: cuestionario.temas as ReadonlyArray<Tema>,
        ...(acertadas ? { acertadas } : {})
      }),
    [cuestionario.posiciones, cuestionario.temas, acertadas]
  );

  const totalPosiciones = cuestionario.posiciones.length;
  const seccionesConPuntos = Object.values(resumen.porTema).filter(
    (t) => t.maxScore > 0
  ).length;

  if (totalPosiciones === 0) {
    return (
      <p className="text-sm text-[var(--c-hint)]" role="status">
        El cuestionario no tiene posiciones todavía.
      </p>
    );
  }

  if (variant === "compact") {
    return (
      <p
        className="text-sm text-[var(--c-text-2,inherit)]"
        aria-label="Resumen del puntaje del cuestionario"
        data-testid="reparto-compact"
      >
        Total: <strong>{resumen.total}</strong>{" "}
        {resumen.total === 1 ? "punto" : "puntos"} en {seccionesConPuntos}{" "}
        {seccionesConPuntos === 1 ? "sección" : "secciones"} (
        {totalPosiciones} {totalPosiciones === 1 ? "posición" : "posiciones"}).
      </p>
    );
  }

  // variant === "table"
  const tieneScore = acertadas !== undefined;

  return (
    <div
      className="rounded-md border border-[var(--c-border)] bg-[var(--c-surface-1)] p-3"
      data-testid="reparto-table"
      aria-label="Reparto del puntaje por sección"
    >
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-sm font-semibold">Reparto por sección</h3>
        <p className="text-sm">
          Total: <strong>{resumen.total}</strong>{" "}
          {resumen.total === 1 ? "punto" : "puntos"}
        </p>
      </div>
      {seccionesConPuntos === 0 ? (
        <p className="text-xs text-[var(--c-hint)]">
          Ninguna posición tiene puntaje &gt; 0 todavía.
        </p>
      ) : (
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs text-[var(--c-hint)]">
              <th className="pb-1 pr-2 font-medium">Sección</th>
              <th className="pb-1 pr-2 text-right font-medium">Puntos</th>
              <th className="pb-1 pr-2 text-right font-medium">% del total</th>
              {tieneScore && (
                <th className="pb-1 pr-2 text-right font-medium">Score</th>
              )}
              {tieneScore && (
                <th className="pb-1 pr-2 text-right font-medium">Ratio</th>
              )}
            </tr>
          </thead>
          <tbody>
            {Object.entries(resumen.porTema)
              .filter(([, t]) => t.maxScore > 0)
              .sort(([, a], [, b]) => b.maxScore - a.maxScore)
              .map(([id, t]) => {
                const pct =
                  resumen.total > 0
                    ? Math.round((t.maxScore / resumen.total) * 100)
                    : 0;
                const ratioPct =
                  t.ratio === null ? "—" : `${Math.round(t.ratio * 100)}%`;
                return (
                  <tr key={id} className="border-t border-[var(--c-border)]">
                    <td className="py-1 pr-2">{t.nombre}</td>
                    <td className="py-1 pr-2 text-right tabular-nums">
                      {t.maxScore}
                    </td>
                    <td className="py-1 pr-2 text-right tabular-nums">{pct}%</td>
                    {tieneScore && (
                      <td className="py-1 pr-2 text-right tabular-nums">
                        {t.score}
                      </td>
                    )}
                    {tieneScore && (
                      <td className="py-1 pr-2 text-right tabular-nums">
                        {ratioPct}
                      </td>
                    )}
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
    </div>
  );
}
