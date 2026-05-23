/**
 * Corre las 100 simulaciones de validación bajo demanda.
 *
 * No se ejecuta automáticamente — solo cuando el user llama a `run()`.
 * Razón: bloquear el thread ~200ms en cada keystroke sería inaceptable.
 *
 * El `await Promise.resolve()` + setTimeout(0) permiten que React pinte el
 * spinner antes de bloquear el thread con el bucle síncrono de validate().
 */

import { useCallback, useState } from "react";
import { validate, type CompiledPlantilla, type ValidationReport } from "@vb/vblang";

export type ValidationStatus = "idle" | "running" | "done";

export interface ValidationState {
  status: ValidationStatus;
  report?: ValidationReport;
  run: () => Promise<void>;
  reset: () => void;
}

export function usePlantillaValidation(
  compiled: CompiledPlantilla | undefined,
): ValidationState {
  const [status, setStatus] = useState<ValidationStatus>("idle");
  const [report, setReport] = useState<ValidationReport | undefined>(undefined);

  const run = useCallback(async () => {
    if (!compiled) return;
    setStatus("running");
    setReport(undefined);
    // Cedemos el event loop para que el render del spinner alcance a pintarse
    // antes de que el bucle síncrono de validate() bloquee el thread.
    await new Promise<void>((resolve) => setTimeout(resolve, 0));
    try {
      const result = validate(compiled, { iterations: 100 });
      setReport(result);
      setStatus("done");
    } catch (err) {
      // Caso muy raro (excepción fuera del catch interno de validate). Devolvemos
      // un reporte "fallido" sintético para que la UI pueda mostrar algo.
      setReport({
        pass: false,
        passedSimulations: 0,
        totalSimulations: 100,
        errors: [
          {
            severity: "error",
            code: "VALIDATE_THREW",
            message: err instanceof Error ? err.message : String(err),
            count: 100,
            sampleSeed: "validate-0",
          },
        ],
        warnings: [],
        generationTimeMs: 0,
        threshold: 0.95,
      });
      setStatus("done");
    }
  }, [compiled]);

  const reset = useCallback(() => {
    setStatus("idle");
    setReport(undefined);
  }, []);

  return { status, report, run, reset };
}
