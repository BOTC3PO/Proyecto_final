/**
 * Genera 3 ejercicios de preview cada vez que `compiled` cambia.
 *
 * Si una seed falla por restricciones u otro error de evaluación, esa card
 * muestra el error pero las otras se renderizan normalmente.
 *
 * El callback `regenerate` devuelto reasigna seeds con un prefijo nuevo
 * (timestamp) para forzar valores diferentes.
 */

import { useCallback, useEffect, useState } from "react";
import {
  generate,
  toModuleQuizQuestion,
  type CompiledPlantilla,
  type ModuleQuizQuestion,
} from "@vb/vblang";
import { generadorAsistidoProvider } from "../vblang/provider";

export interface PreviewItem {
  question?: ModuleQuizQuestion;
  error?: { message: string; line?: number; col?: number };
  seed: string;
  /** Valores que tomaron las variables en este seed (para el indicador "ahora: X"). */
  variables?: Record<string, unknown>;
}

export interface UsePlantillaPreview {
  items: PreviewItem[];
  regenerate: () => void;
  /** Valores del primer preview exitoso; alimenta el indicador "ahora: X" del formulario. */
  variables0?: Record<string, unknown>;
}

const PREVIEW_COUNT = 3;

function runOne(compiled: CompiledPlantilla, seed: string): PreviewItem {
  try {
    const gen = generate(compiled, {
      seed,
      provider: generadorAsistidoProvider,
    });
    const question = toModuleQuizQuestion(gen, { focus: null });
    return { question, seed, variables: gen.variables };
  } catch (err) {
    const e = err as { message?: string; line?: number; col?: number };
    return {
      seed,
      error: {
        message: e?.message ?? String(err),
        line: e?.line,
        col: e?.col,
      },
    };
  }
}

export function usePlantillaPreview(
  compiled: CompiledPlantilla | undefined,
): UsePlantillaPreview {
  const [prefix, setPrefix] = useState<string>("preview");
  const [items, setItems] = useState<PreviewItem[]>([]);

  useEffect(() => {
    if (!compiled) {
      setItems([]);
      return;
    }
    const next: PreviewItem[] = [];
    for (let i = 0; i < PREVIEW_COUNT; i++) {
      next.push(runOne(compiled, `${prefix}-${i}`));
    }
    setItems(next);
  }, [compiled, prefix]);

  const regenerate = useCallback(() => {
    setPrefix(`preview-${Date.now()}`);
  }, []);

  const variables0 = items.find((it) => !it.error && it.variables)?.variables;

  return { items, regenerate, variables0 };
}
