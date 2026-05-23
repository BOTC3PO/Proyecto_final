/**
 * Componente que muestra el reporte de validación + botón "Validar".
 */

import type { ValidationState } from "../../hooks/usePlantillaValidation";

interface ValidationReportProps {
  state: ValidationState;
  disabled?: boolean;
}

export default function ValidationReport({
  state,
  disabled,
}: ValidationReportProps) {
  const { status, report, run } = state;
  const avgMs =
    report && report.totalSimulations > 0
      ? report.generationTimeMs / report.totalSimulations
      : 0;

  return (
    <div className="border-t border-[var(--c-border,#e2e8f0)] p-3" data-testid="vblang-validation-report">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold">Validación</h3>
        <button
          type="button"
          onClick={() => void run()}
          disabled={disabled || status === "running"}
          className="rounded-md bg-[var(--c-primary,#3b82f6)] px-3 py-1 text-xs font-medium text-white disabled:opacity-50"
        >
          {status === "running" ? "Validando…" : "Validar (100 simulaciones)"}
        </button>
      </div>

      {status === "running" && (
        <p className="text-xs text-[var(--c-muted,#64748b)] animate-pulse">
          Generando 100 ejercicios…
        </p>
      )}

      {status === "done" && report && (
        <>
          {report.pass ? (
            <p className="text-xs text-emerald-600 font-medium">
              ✓ Pasó {report.passedSimulations}/{report.totalSimulations} simulaciones
              ({avgMs.toFixed(2)} ms promedio)
            </p>
          ) : (
            <div className="text-xs space-y-1">
              <p className="text-red-600 font-medium">
                ✕ Pasó {report.passedSimulations}/{report.totalSimulations} simulaciones
              </p>
              <ul className="space-y-1">
                {report.errors.map((e) => (
                  <li
                    key={`${e.code}-${e.sampleSeed}`}
                    className="rounded border border-red-200 bg-red-50 p-2 text-red-700"
                  >
                    <div>
                      <span className="font-semibold mr-1">{e.code}</span>
                      <span>{e.message}</span>
                    </div>
                    <div className="text-[10px] text-red-500">
                      ×{e.count} (reproducir con seed: {e.sampleSeed})
                    </div>
                  </li>
                ))}
              </ul>
              {report.warnings.length > 0 && (
                <ul className="space-y-1 mt-2">
                  {report.warnings.map((w) => (
                    <li
                      key={`${w.code}-${w.sampleSeed}`}
                      className="rounded border border-amber-200 bg-amber-50 p-2 text-amber-700"
                    >
                      <div>
                        <span className="font-semibold mr-1">{w.code}</span>
                        <span>{w.message}</span>
                      </div>
                      <div className="text-[10px] text-amber-500">
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
  );
}
