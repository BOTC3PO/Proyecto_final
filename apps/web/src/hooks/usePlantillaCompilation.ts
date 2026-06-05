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
  LexError,
  parse,
  ParseError,
  type CompiledPlantilla,
  type LintReport,
  type Plantilla,
} from "@vb/vblang";
import { precargarDataset } from "../vblang/datasetCache";
import { extractDatasetName } from "../vblang/utils";
import { getGeneradorProvidedVars } from "../vblang/generadorVars";

export interface ParseErrorState {
  message: string;
  line?: number;
  col?: number;
  suggestion?: string;
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
    let cancelled = false;
    const handle = window.setTimeout(() => {
      void (async () => {
        try {
          const plantilla = parse(codigoDsl);
          // Sprint 10A: precargar dataset si la plantilla lo usa antes de
          // compile() — el evaluador lo necesita en scope sincrónicamente.
          const datasetNombre = extractDatasetName(plantilla);
          if (datasetNombre) {
            await precargarDataset(datasetNombre);
          }
          if (cancelled) return;
          const compiled = compile(plantilla);
          // Lint generador-aware: si la plantilla usa `generador:`, validamos el
          // enunciado contra las variables que ese generador provee (no contra
          // el bloque `variables:`, que el generador ignora). Así el badge de
          // errores coincide con lo que hará el preview.
          const generadorBloque = plantilla.bloques.find(
            (b) => b.kind === "generador",
          );
          const lintReport =
            generadorBloque && generadorBloque.kind === "generador"
              ? lint(plantilla, {
                  generadorVars: getGeneradorProvidedVars(generadorBloque.id),
                })
              : lint(plantilla);
          setState({
            plantilla,
            compiled,
            lintReport,
            status: "ok",
          });
        } catch (err) {
          if (cancelled) return;
          if (err instanceof ParseError || err instanceof LexError) {
            setState({
              status: "parse-error",
              parseError: {
                message: err.message,
                line: err.line,
                col: err.col,
                suggestion: err.suggestion,
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
      })();
    }, debounceMs);
    return () => {
      cancelled = true;
      window.clearTimeout(handle);
    };
  }, [codigoDsl, debounceMs]);

  return state;
}
