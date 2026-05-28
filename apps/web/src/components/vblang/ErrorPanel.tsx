/**
 * Lista de errores y warnings agrupados. Click en la ubicación dispara
 * `onGoToLocation(line, col)`.
 */

import type { LintReport } from "@vb/vblang";

interface ErrorPanelProps {
  parseError?: { message: string; line?: number; col?: number };
  lintReport?: LintReport;
  onGoToLocation?: (line: number, col: number) => void;
}

interface UIIssue {
  severity: "error" | "warning";
  code: string;
  message: string;
  line?: number;
  col?: number;
  suggestion?: string;
}

export default function ErrorPanel({
  parseError,
  lintReport,
  onGoToLocation,
}: ErrorPanelProps) {
  const issues: UIIssue[] = [];
  if (parseError) {
    issues.push({
      severity: "error",
      code: "PARSE",
      message: parseError.message,
      line: parseError.line,
      col: parseError.col,
    });
  }
  if (lintReport) {
    for (const e of lintReport.errors) {
      issues.push({
        severity: "error",
        code: e.code,
        message: e.message,
        line: e.line,
        col: e.col,
        suggestion: e.suggestion,
      });
    }
    for (const w of lintReport.warnings) {
      issues.push({
        severity: "warning",
        code: w.code,
        message: w.message,
        line: w.line,
        col: w.col,
        suggestion: w.suggestion,
      });
    }
  }

  const errorCount = issues.filter((i) => i.severity === "error").length;
  const warningCount = issues.filter((i) => i.severity === "warning").length;

  if (!parseError && !lintReport) {
    return (
      <div
        role="region"
        aria-label="Errores y advertencias"
        data-testid="vblang-error-panel"
        className="h-full overflow-auto p-3 text-xs text-[var(--c-muted,#64748b)]"
      >
        Escribí código para validar.
      </div>
    );
  }

  if (issues.length === 0) {
    return (
      <div
        role="region"
        aria-label="Errores y advertencias"
        data-testid="vblang-error-panel"
        className="h-full overflow-auto p-3 text-xs"
      >
        <p className="text-[var(--c-success)] font-medium">Sin errores ✓</p>
      </div>
    );
  }

  return (
    <div
      role="region"
      aria-label="Errores y advertencias"
      data-testid="vblang-error-panel"
      className="h-full overflow-auto p-3 text-xs space-y-2"
    >
      <header className="flex items-center gap-3 text-[var(--c-text)]">
        <span className="text-[var(--c-danger)] font-medium">{errorCount} errores</span>
        <span className="text-[var(--c-muted,#64748b)]">·</span>
        <span className="text-[var(--c-warning)] font-medium">{warningCount} warnings</span>
      </header>
      <ul role="list" className="space-y-1.5">
        {issues.map((it, idx) => {
          const icon = it.severity === "error" ? "✕" : "⚠";
          const color =
            it.severity === "error" ? "text-[var(--c-danger)]" : "text-[var(--c-warning)]";
          return (
            <li
              key={`${it.code}-${idx}`}
              className="rounded border border-[var(--c-border,#e2e8f0)] p-2 leading-relaxed"
            >
              <div className="flex items-start gap-2">
                <span className={`${color} font-bold`}>{icon}</span>
                <div className="flex-1">
                  <div>
                    <span className="font-semibold mr-1">{it.code}</span>
                    <span>{it.message}</span>
                  </div>
                  {it.suggestion && (
                    <div className="mt-1 text-[var(--c-muted,#64748b)]">
                      Sugerencia: {it.suggestion}
                    </div>
                  )}
                </div>
                {it.line !== undefined && (
                  <button
                    type="button"
                    className="text-[var(--c-primary,#3b82f6)] hover:underline tabular-nums"
                    onClick={() =>
                      onGoToLocation?.(it.line ?? 1, it.col ?? 1)
                    }
                    aria-label={`Ir a línea ${it.line}, columna ${it.col ?? 1}`}
                  >
                    L{it.line}:C{it.col ?? 1}
                  </button>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
