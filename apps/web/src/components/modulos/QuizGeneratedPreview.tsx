/**
 * Vista previa REAL de un cuestionario generado (UX-04).
 *
 * Para generadores de plantilla VBLang (`plantilla:<id>`) corre el pipeline
 * real (fetch DSL → parse → compile → generate) y muestra los enunciados
 * efectivos, en vez de etiquetas ficticias con "semillas". Para otros
 * generadores muestra un aviso honesto (su preview ocurre al rendir).
 */
import { useEffect, useState } from "react";
import {
  parse,
  compile,
  generate,
  toModuleQuizQuestion,
} from "@vb/vblang";
import { getPlantilla } from "../../domain/vblang/plantillaApi";
import { generadorAsistidoProvider } from "../../vblang/provider";
import { precargarDataset } from "../../vblang/datasetCache";
import { extractDatasetName } from "../../vblang/utils";

import { useI18n } from "../../i18n/I18nContext";
interface QuizGeneratedPreviewProps {
  generatorId: string;
  count: number;
  /** Cuántos ejemplos generar como máximo. */
  max?: number;
}

type State =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "ok"; prompts: string[] }
  | { status: "error"; message: string };

const PLANTILLA_PREFIX = "plantilla:";

export default function QuizGeneratedPreview({
  generatorId,
  count,
  max = 3,
}: QuizGeneratedPreviewProps) {
  const { t } = useI18n();
  const isPlantilla = generatorId.startsWith(PLANTILLA_PREFIX);
  const plantillaId = isPlantilla
    ? generatorId.slice(PLANTILLA_PREFIX.length)
    : "";
  const [state, setState] = useState<State>({ status: "idle" });

  useEffect(() => {
    if (!isPlantilla || !plantillaId) {
      setState({ status: "idle" });
      return;
    }
    let cancelled = false;
    setState({ status: "loading" });
    void (async () => {
      try {
        const p = await getPlantilla(plantillaId);
        const plantilla = parse(p.codigoDsl);
        const datasetNombre = extractDatasetName(plantilla);
        if (datasetNombre) await precargarDataset(datasetNombre);
        if (cancelled) return;
        const compiled = compile(plantilla);
        const n = Math.min(Math.max(count || max, 1), max);
        const prompts: string[] = [];
        for (let i = 0; i < n; i += 1) {
          const gen = generate(compiled, {
            seed: `preview-${i}`,
            provider: generadorAsistidoProvider,
          });
          prompts.push(toModuleQuizQuestion(gen, { focus: null }).prompt);
        }
        if (cancelled) return;
        setState({ status: "ok", prompts });
      } catch (err) {
        if (cancelled) return;
        setState({
          status: "error",
          message:
            err instanceof Error
              ? err.message
              : "No se pudo generar la vista previa.",
        });
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [isPlantilla, plantillaId, count, max]);

  if (!isPlantilla) {
    return (
      <p className="text-xs text-[var(--c-muted)]">{t("quizGeneratedPreview.laVistaPreviaEnVivo")}</p>
    );
  }
  if (state.status === "loading") {
    return (
      <p className="text-xs text-[var(--c-muted)]" aria-live="polite">{t("quizGeneratedPreview.generandoVistaPrevia")}</p>
    );
  }
  if (state.status === "error") {
    return (
      <p className="text-xs text-[var(--c-danger)]" role="alert">
        {state.message}
      </p>
    );
  }
  if (state.status === "ok") {
    if (state.prompts.length === 0) {
      return (
        <p className="text-xs text-[var(--c-muted)]">{t("quizGeneratedPreview.sinEjemplosParaMostrar")}</p>
      );
    }
    return (
      <ul className="list-disc space-y-1 pl-4 text-xs text-[var(--c-muted)]">
        {state.prompts.map((prompt, i) => (
          <li key={i}>{`P${i + 1}: ${prompt}`}</li>
        ))}
      </ul>
    );
  }
  return null;
}
