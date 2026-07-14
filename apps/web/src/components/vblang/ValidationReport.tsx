/**
 * Componente que muestra el reporte de validación + botón "Validar".
 *
 * Envuelto en React.memo: el `state` que viene del hook es estable entre
 * renders (mismo objeto hasta que el user pulsa Validar); el `disabled` es un
 * primitivo. Re-renders del padre por otras causas ya no recalculan los
 * promedios ni re-pintan la lista de errores.
 */

import { memo } from "react";
import type { ValidationState } from "../../hooks/usePlantillaValidation";

import { useI18n } from "../../i18n/I18nContext";
interface ValidationReportProps {
  state: ValidationState;
  disabled?: boolean;
}

function ValidationReport({
  state,
  disabled,
}: ValidationReportProps) {
  const { t } = useI18n();
  const { status, report, run } = state;
  const avgMs =
    report && report.totalSimulations > 0
      ? report.generationTimeMs / report.totalSimulations
      : 0;

  return (
    <div
      role="region"
      aria-label={t("validationReport.reporteDeValidacion")}
      className="panel-section panel-section--last"
      data-testid="vblang-validation-report"
    >
      <div className="panel-section__head">
        <h3 className="panel-section__title">{t("validationReport.validacion")}</h3>
        <button
          type="button"
          onClick={() => void run()}
          disabled={disabled || status === "running"}
          className="rounded-md bg-[var(--c-primary,#3b82f6)] px-3 py-1 text-xs font-medium text-white disabled:opacity-50"
        >
          {status === "running" ? "Validando…" : "Validar (100 simulaciones)"}
        </button>
      </div>

      <div className="panel-section__body">
      {status === "running" && (
        <p className="text-xs text-[var(--c-muted,#64748b)] animate-pulse">{t("validationReport.generando100Ejercicios")}</p>
      )}

      {status === "done" && report && (
        <>
          {/* Barra de progreso: proporción de simulaciones OK + stats. */}
          <ValidationProgress
            passed={report.passedSimulations}
            total={report.totalSimulations}
            pass={report.pass}
            avgMs={avgMs}
          />
          {report.pass ? (
            <p className="text-xs text-[var(--c-success)] font-medium">
              ✓ Pasó {report.passedSimulations}/{report.totalSimulations} simulaciones
              ({avgMs.toFixed(2)} ms promedio)
            </p>
          ) : (
            <div className="text-xs space-y-1">
              <p className="text-[var(--c-danger)] font-medium">
                ✕ Pasó {report.passedSimulations}/{report.totalSimulations} simulaciones
              </p>
              <ul role="list" className="space-y-1">
                {report.errors.map((e) => (
                  <li
                    key={`${e.code}-${e.sampleSeed}`}
                    className="rounded border p-2"
                    style={{
                      borderColor: "color-mix(in srgb, var(--c-danger) 30%, transparent)",
                      background: "color-mix(in srgb, var(--c-danger) 8%, transparent)",
                      color: "var(--c-danger)",
                    }}
                  >
                    <div>
                      <span className="font-semibold mr-1">{e.code}</span>
                      <span>{e.message}</span>
                    </div>
                    <div className="text-[10px] opacity-80">
                      ×{e.count} (reproducir con seed: {e.sampleSeed})
                    </div>
                  </li>
                ))}
              </ul>
              {report.warnings.length > 0 && (
                <ul role="list" className="space-y-1 mt-2">
                  {report.warnings.map((w) => (
                    <li
                      key={`${w.code}-${w.sampleSeed}`}
                      className="rounded border p-2"
                      style={{
                        borderColor: "color-mix(in srgb, var(--c-warning) 30%, transparent)",
                        background: "color-mix(in srgb, var(--c-warning) 8%, transparent)",
                        color: "var(--c-warning)",
                      }}
                    >
                      <div>
                        <span className="font-semibold mr-1">{w.code}</span>
                        <span>{w.message}</span>
                      </div>
                      <div className="text-[10px] opacity-80">
                        ×{w.count} (seed: {w.sampleSeed})
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </>
      )}
      </div>
    </div>
  );
}

export default memo(ValidationReport);

/** Barra de progreso de validación: % de simulaciones OK + stats. */
function ValidationProgress({
  passed,
  total,
  pass,
  avgMs,
}: {
  passed: number;
  total: number;
  pass: boolean;
  avgMs: number;
}) {
  const { t } = useI18n();
  const pct = total > 0 ? Math.round((passed / total) * 100) : 0;
  const tone = pass ? "var(--c-success)" : "var(--c-danger)";
  return (
    <div className="mb-2">
      <div className="mb-1 flex items-center justify-between text-[10px] text-[var(--c-muted,#64748b)]">
        <span>
          {passed}/{total} OK ({pct}%)
        </span>
        <span>{avgMs.toFixed(2)} ms/simulación</span>
      </div>
      <div
        role="progressbar"
        aria-label={t("validationReport.progresoDeValidacion")}
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        className="h-2 w-full overflow-hidden rounded-full bg-[var(--c-border,#e2e8f0)]"
      >
        <div
          className="h-full rounded-full transition-[width]"
          style={{ width: `${pct}%`, background: tone }}
        />
      </div>
    </div>
  );
}
