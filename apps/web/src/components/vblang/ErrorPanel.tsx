/**
 * Lista de errores y warnings agrupados. Cada error con posición ofrece
 * un botón "Ir a línea N" que llama a `onGoToLocation(line, col)`. Los
 * errores que matchean un quick-fix conocido ofrecen un botón "Aplicar
 * fix" que llama a `onApplyFix(newCode)`.
 *
 * Envuelto en React.memo: la lista sólo cambia con el `parseError` /
 * `lintReport` que vienen del hook de compilación. El padre (PlantillaEditor)
 * re-renderiza por cada keystroke del editor; mientras las callbacks
 * (`onGoToLocation`, `onApplyFix`) estén estabilizadas, este panel se saltea
 * el render.
 */

import { memo } from "react";
import type { LintReport } from "@vb/vblang";
import { quickFixFor } from "./quickFixes";

import { useI18n } from "../../i18n/I18nContext";
import { translateVblangMessage } from "../../vblang/translateError";
interface ErrorPanelProps {
  parseError?: { message: string; line?: number; col?: number; suggestion?: string };
  lintReport?: LintReport;
  onGoToLocation?: (line: number, col: number) => void;
  /** Código DSL actual: necesario para que los quick-fixes propongan un patch
   *  sincrónico con el editor. Si no se pasa, no se ofrecen fixes. */
  currentCode?: string;
  /** Aplica un quick-fix. Reemplaza el código del editor. */
  onApplyFix?: (newCode: string) => void;
}

interface UIIssue {
  severity: "error" | "warning";
  code: string;
  message: string;
  line?: number;
  col?: number;
  suggestion?: string;
}

function ErrorPanel({
  parseError,
  lintReport,
  onGoToLocation,
  currentCode,
  onApplyFix,
}: ErrorPanelProps) {
  const { t, lang } = useI18n();
  const issues: UIIssue[] = [];
  if (parseError) {
    issues.push({
      severity: "error",
      code: "PARSE",
      message: parseError.message,
      line: parseError.line,
      col: parseError.col,
      suggestion: parseError.suggestion,
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
        aria-label={t("errorPanel.erroresYAdvertencias")}
        data-testid="vblang-error-panel"
        className="h-full overflow-auto p-3 text-xs text-[var(--c-hint)]"
      >{t("errorPanel.escribiCodigoParaValidar")}</div>
    );
  }

  if (issues.length === 0) {
    return (
      <div
        role="region"
        aria-label={t("errorPanel.erroresYAdvertencias")}
        data-testid="vblang-error-panel"
        className="h-full overflow-auto p-3 text-xs"
      >
        <p className="text-[var(--c-success)] font-medium">{t("plantillaEditor.sinErrores")}</p>
      </div>
    );
  }

  return (
    <div
      role="region"
      aria-label={t("errorPanel.erroresYAdvertencias")}
      data-testid="vblang-error-panel"
      className="h-full overflow-auto p-3 text-xs space-y-2"
    >
      <header className="flex items-center gap-3 text-[var(--c-text)]">
        <span className="text-[var(--c-danger)] font-medium">{errorCount} {t("errorPanel.errores")}</span>
        <span className="text-[var(--c-hint)]" aria-hidden="true">·</span>
        <span className="text-[var(--c-warning)] font-medium">{warningCount} {t("errorPanel.warnings")}</span>
      </header>
      <ul role="list" className="space-y-1.5">
        {issues.map((it, idx) => {
          const icon = it.severity === "error" ? "✕" : "⚠";
          const color =
            it.severity === "error" ? "text-[var(--c-danger)]" : "text-[var(--c-warning)]";
          const fix =
            currentCode !== undefined && onApplyFix
              ? quickFixFor(it.code, it.message, currentCode)
              : null;
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
                    <span>{translateVblangMessage(it.message, lang)}</span>
                  </div>
                  {it.suggestion && (
                    <div className="mt-1 text-[var(--c-hint)]">
                      {t("errorPanel.sugerencia")} {it.suggestion}
                    </div>
                  )}
                </div>
                {it.line !== undefined && (
                  <button
                    type="button"
                    className="shrink-0 rounded border border-[var(--c-border,#cbd5e1)] px-2 py-0.5 text-[10px] text-[var(--c-primary,#3b82f6)] hover:bg-[var(--c-surface-2,#f1f5f9)] tabular-nums"
                    onClick={() =>
                      onGoToLocation?.(it.line ?? 1, it.col ?? 1)
                    }
                    aria-label={`${t("errorPanel.irALinea")} ${it.line}, ${t("errorPanel.columna")} ${it.col ?? 1}`}
                    data-testid={`vblang-error-goto-${it.code}-${idx}`}
                  >
                    {t("errorPanel.irAL")}{it.line}
                  </button>
                )}
              </div>
              {fix && (
                <div className="mt-1 flex justify-end">
                  <button
                    type="button"
                    onClick={() => onApplyFix?.(fix.newCode)}
                    className="rounded border border-[var(--c-primary,#3b82f6)] px-2 py-0.5 text-[10px] text-[var(--c-primary,#3b82f6)] hover:bg-[var(--c-primary,#3b82f6)] hover:text-white"
                    data-testid={`vblang-error-fix-${it.code}-${idx}`}
                    aria-label={fix.label}
                  >
                    {fix.label}
                  </button>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default memo(ErrorPanel);
