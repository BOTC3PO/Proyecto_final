/**
 * Orquesta parse + compile + lint con debounce.
 *
 * El editor V3 consume este hook para mostrar errores y alimentar
 * usePlantillaPreview con un `CompiledPlantilla` válido.
 */

import { useEffect, useState } from "react";
import {
  compile,
  lint,
  parse,
  ParseError,
  type CompiledPlantilla,
  type LintReport,
  type Plantilla,
} from "@vb/vblang";

export interface ParseErrorState {
  message: string;
  line?: number;
  col?: number;
}

export interface CompilationState {
  plantilla?: Plantilla;
  compiled?: CompiledPlantilla;
  lintReport?: LintReport;
  parseError?: ParseErrorState;
  status: "idle" | "ok" | "parse-error";
}

const EMPTY: CompilationState = { status: "idle" };

export function usePlantillaCompilation(
  codigoDsl: string,
  debounceMs = 500,
): CompilationState {
  const [state, setState] = useState<CompilationState>(EMPTY);

  useEffect(() => {
    if (!codigoDsl || codigoDsl.trim().length === 0) {
      setState(EMPTY);
      return;
    }
    const handle = window.setTimeout(() => {
      try {
        const plantilla = parse(codigoDsl);
        const compiled = compile(plantilla);
        const lintReport = lint(plantilla);
        setState({
          plantilla,
          compiled,
          lintReport,
          status: "ok",
        });
      } catch (err) {
        if (err instanceof ParseError) {
          setState({
            status: "parse-error",
            parseError: {
              message: err.message,
              line: err.line,
              col: err.col,
            },
          });
        } else {
          setState({
            status: "parse-error",
            parseError: {
              message: err instanceof Error ? err.message : String(err),
            },
          });
        }
      }
    }, debounceMs);
    return () => window.clearTimeout(handle);
  }, [codigoDsl, debounceMs]);

  return state;
}
