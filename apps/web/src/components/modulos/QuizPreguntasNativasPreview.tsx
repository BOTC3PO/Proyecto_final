/**
 * Vista previa REAL de un cuestionario con preguntas nativas de Tiza
 * (`settings.preguntas`). Mismo pipeline que `QuizGeneratedPreview`
 * (fetch DSL → parse → compile → generate) pero recorriendo cada
 * plantilla referenciada en `preguntas`, no una sola.
 *
 * Antes, el botón "Vista previa" de ModuloEditor usaba
 * `QuizGeneratedPreview` con `generatorId=""` para estos quizzes (el
 * caso normal hoy) y sólo mostraba un texto genérico — nunca las
 * preguntas reales.
 */
import { useEffect, useState } from "react";
import {
  parse,
  compile,
  generate,
  toModuleQuizQuestion,
} from "@vb/vblang";
import { getPlantilla } from "../../domain/vblang/plantillaApi";
import { getQuizPreguntas } from "../../domain/quiz/quizPreguntasApi";
import { generadorAsistidoProvider } from "../../vblang/provider";
import { precargarDataset } from "../../vblang/datasetCache";
import { extractDatasetName } from "../../vblang/utils";

import { useI18n } from "../../i18n/I18nContext";

/**
 * PLAN tiza-autoria-avanzada §8 — antes era `{ id, prompt }` y una plantilla que
 * fallaba se descartaba con `null`, en silencio: el docente veía una lista con
 * menos preguntas de las que tiene el cuestionario y sin ninguna pista de por
 * qué. Ahora el fallo es un ítem más, con el motivo.
 */
type PreviewItem = { id: string; prompt: string; error?: string };

type State =
  | { status: "loading" }
  | { status: "ok"; items: PreviewItem[] }
  | { status: "error"; message: string };

interface QuizPreguntasNativasPreviewProps {
  quizId: string;
  /** Cuántas preguntas mostrar como máximo. */
  max?: number;
}

async function previewOne(plantillaId: string): Promise<PreviewItem> {
  try {
    const p = await getPlantilla(plantillaId);
    const plantilla = parse(p.codigoDsl);
    const datasetNombre = extractDatasetName(plantilla);
    if (datasetNombre) await precargarDataset(datasetNombre);
    const compiled = compile(plantilla);
    const gen = generate(compiled, {
      seed: `preview-${plantillaId}`,
      provider: generadorAsistidoProvider,
    });
    return { id: plantillaId, prompt: toModuleQuizQuestion(gen, { focus: null }).prompt };
  } catch (e) {
    // Una plantilla rota no debe tirar abajo el preview de las demás, pero
    // tampoco desaparecer: se informa el motivo en su lugar. Los tipos que el
    // adapter rechaza (`AdapterError`) y los errores de generación traen un
    // mensaje útil ("mapa no reconocido", "variable indefinida: a"…).
    return {
      id: plantillaId,
      prompt: "",
      error: e instanceof Error ? e.message : String(e),
    };
  }
}

export default function QuizPreguntasNativasPreview({
  quizId,
  max = 5,
}: QuizPreguntasNativasPreviewProps) {
  const { t } = useI18n();
  const [state, setState] = useState<State>({ status: "loading" });

  useEffect(() => {
    let cancelled = false;
    setState({ status: "loading" });
    void (async () => {
      try {
        const data = await getQuizPreguntas(quizId);
        const plantillaIds = data.preguntas
          .map((pregunta) => pregunta.plantillaId)
          .filter((id): id is string => Boolean(id))
          .slice(0, max);
        const results = await Promise.all(plantillaIds.map(previewOne));
        if (cancelled) return;
        setState({ status: "ok", items: results });
      } catch (err) {
        if (cancelled) return;
        setState({
          status: "error",
          message: err instanceof Error ? err.message : "No se pudo generar la vista previa.",
        });
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [quizId, max]);

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
  if (state.items.length === 0) {
    return (
      <p className="text-xs text-[var(--c-muted)]">{t("quizGeneratedPreview.sinEjemplosParaMostrar")}</p>
    );
  }
  return (
    <ul className="list-disc space-y-1 pl-4 text-xs text-[var(--c-muted)]">
      {state.items.map((item, i) =>
        item.error ? (
          <li key={item.id} style={{ color: "var(--c-danger)" }} data-testid="preview-item-error">
            {`P${i + 1}: `}
            {t("quizPreguntasNativasPreview.noSePudoGenerar")} {item.error}
          </li>
        ) : (
          <li key={item.id}>{`P${i + 1}: ${item.prompt}`}</li>
        ),
      )}
    </ul>
  );
}
