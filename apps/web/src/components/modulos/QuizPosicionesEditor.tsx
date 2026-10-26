/**
 * WO-2 / F4-03 — Editor de cuestionario por posiciones, montado en el host
 * (`ModuloEditor`). Reemplaza a `QuizComposicionEditor` (modelo viejo).
 *
 * Cablea `PosicionesCanvas` (lienzo presentacional) con el modelo `posiciones`
 * (F3-01) y todas sus mutaciones puras (`posicionesMutations`). El cuestionario
 * vive en `quiz.posiciones`; si todavía no existe (módulo guardado con el modelo
 * viejo `composition`+`questions`), se MIGRA lazy con `migrarCuestionario` y se
 * materializa en la primera edición. El reproductor del alumno sigue leyendo
 * `questions`/`composition` (fuera de alcance de WO-2) — por eso no se borra
 * nada del modelo viejo.
 *
 * Cada variante se autorea con `VarianteEditor` (banco / plantilla / generador);
 * para `plantilla` se monta el editor de pregunta de WO-1. El reparto de puntos
 * por tema se muestra con `RepartoPuntos` (consume `puntaje.ts`).
 */

import { useCallback, useMemo, useState } from "react";
import type { ModuleQuiz, ModuleQuizQuestion } from "../../domain/module/module.types";
import {
  migrarCuestionario,
  type CuestionarioPosiciones,
} from "../../domain/quiz/posiciones";
import {
  agregarPosicion,
  agregarTema,
  agregarVariante,
  cambiarOrigenVariante,
  cambiarPuntaje,
  cambiarTema,
  cambiarTipo,
  quitarPosicion,
  quitarVariante,
  reordenarPosicion,
} from "../../domain/quiz/posicionesMutations";
import PosicionesCanvas, { type AddPosicionArgs } from "./PosicionesCanvas";
import RepartoPuntos from "./RepartoPuntos";
import VarianteEditor, {
  type BancoQuestion,
  type PlantillaIO,
} from "./VarianteEditor";
import type { RailItem } from "../../editor/PlantillaEditorShell";

import { useI18n } from "../../i18n/I18nContext";
interface Props {
  quiz: ModuleQuiz;
  /** Persiste el cuestionario editado en `quiz.posiciones`. */
  onChange: (patch: Partial<ModuleQuiz>) => void;
  /** Materia del módulo, para filtrar el selector de plantillas. */
  materiaHint?: string;
  /** A dónde vuelve "Crear plantilla" desde el selector. */
  returnTo?: string;
  /** Inyectable para tests (carga/guardado de plantillas). */
  plantillaIO?: PlantillaIO;
}

export default function QuizPosicionesEditor({
  quiz,
  onChange,
  materiaHint,
  returnTo,
  plantillaIO,
}: Props) {
  const { t } = useI18n();
  // Migración lazy: si el quiz no tiene `posiciones`, se deriva de
  // `composition`+`questions`. `migrarCuestionario` es idempotente.
  const cuestionario: CuestionarioPosiciones = useMemo(
    () => quiz.posiciones ?? migrarCuestionario(quiz),
    [quiz],
  );

  const bancoQuestions: BancoQuestion[] = useMemo(
    () => (quiz.questions ?? []).map((q) => ({ id: q.id, prompt: q.prompt })),
    [quiz.questions],
  );

  /**
   * WO-V2b — rail del shell "Tiza" (panel izquierdo del editor 3 columnas).
   * Lista las preguntas/variantes del cuestionario en edición. Cada item tiene
   * un id estable (`posN-letra` o `q-<id>`) y un `kind` que el shell muestra
   * como subtítulo (origen de la variante). Si el cuestionario no tiene
   * `posiciones` (caso viejo), caemos a `quiz.questions`.
   */
  const rail: RailItem[] = useMemo(() => {
    if (cuestionario.posiciones.length > 0) {
      const items: RailItem[] = [];
      for (const pos of cuestionario.posiciones) {
        for (const v of pos.variantes) {
          const o = v.origen;
          let title = t("comun.sinTitulo");
          let kind = "";
          switch (o.origen) {
            case "banco":
              title = o.questionId || "(sin id)";
              kind = "Banco";
              break;
            case "plantilla":
              title = o.plantillaId
                ? `${o.plantillaId}${o.plantillaVersion ? ` v${o.plantillaVersion}` : ""}`
                : "(sin id)";
              kind = "Plantilla VBLang";
              break;
            case "generador":
              title = o.generatorId || "(sin id)";
              kind = "Generador";
              break;
          }
          items.push({
            id: `${pos.numero}-${v.letra}`,
            title,
            kind,
          });
        }
      }
      return items;
    }
    return (quiz.questions ?? []).map((q) => ({
      id: `q-${q.id}`,
      title: q.prompt ? q.prompt.slice(0, 60) : q.id,
      kind: "Manual",
    }));
  }, [cuestionario.posiciones, quiz.questions]);

  /**
   * WO-V2b — preview del alumno (overlay del shell). Mostramos el cuestionario
   * en edición, no el módulo entero: la "vista del alumno" debe coincidir con
   * lo que el docente está editando. `previewTitle` se usa como encabezado.
   */
  const previewQuizzes: ModuleQuiz[] = useMemo(() => [quiz], [quiz]);
  const previewTitle = useMemo(
    () => (quiz.title.trim() ? quiz.title : t("quizPosicionesEditor.vistaPreviaDelEditor")),
    [quiz.title],
  );

  const commit = (next: CuestionarioPosiciones) => onChange({ posiciones: next });

  const handleImportQuestion = useCallback(
    (q: ModuleQuizQuestion) => {
      const existing = quiz.questions ?? [];
      if (existing.some((e) => e.id === q.id)) return;
      onChange({ questions: [...existing, q] });
    },
    [quiz.questions, onChange],
  );

  const [nuevoTema, setNuevoTema] = useState("");
  const agregarNuevoTema = () => {
    const nombre = nuevoTema.trim();
    if (!nombre) return;
    commit(agregarTema(cuestionario, nombre));
    setNuevoTema("");
  };

  return (
    <fieldset className="space-y-3 rounded-lg border border-[var(--c-border)] p-3">
      <legend className="px-1 text-xs font-semibold text-[var(--c-text)]">{t("posicionesCanvas.posicionesDelCuestionario")}</legend>

      {!quiz.posiciones && cuestionario.posiciones.length > 0 && (
        <p className="text-[11px] text-[var(--c-hint)]" role="status">{t("quizPosicionesEditor.cuestionarioMigradoDelModeloAnterior")}</p>
      )}

      <p className="text-[11px] text-[var(--c-hint)]">{t("quizPosicionesEditor.cadaPosicionGeneraExactamenteUna")}</p>

      {/* Gestión de temas (secciones). */}
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="font-medium text-[var(--c-text-2,inherit)]">{t("quizPosicionesEditor.temas")}</span>
        {cuestionario.temas.map((t) => (
          <span
            key={t.id}
            className="rounded-full bg-[var(--c-surface-2,transparent)] px-2 py-0.5"
          >
            {t.nombre}
          </span>
        ))}
        <input
          aria-label={t("quizPosicionesEditor.nombreDelNuevoTema")}
          className="rounded border border-[var(--c-border)] bg-[var(--c-surface-1)] px-1.5 py-0.5 text-xs"
          placeholder={t("quizPosicionesEditor.nuevoTema")}
          value={nuevoTema}
          onChange={(e) => setNuevoTema(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              agregarNuevoTema();
            }
          }}
        />
        <button
          type="button"
          className="rounded border border-[var(--c-border)] px-2 py-0.5 text-xs hover:bg-[var(--c-hover)]"
          onClick={agregarNuevoTema}
        >{t("quizPosicionesEditor.tema")}</button>
      </div>

      <PosicionesCanvas
        cuestionario={cuestionario}
        onAddPosicion={(args: AddPosicionArgs) =>
          commit(agregarPosicion(cuestionario, args))
        }
        onRemovePosicion={(numero) =>
          commit(quitarPosicion(cuestionario, numero))
        }
        onReorder={(numero, dir) =>
          commit(reordenarPosicion(cuestionario, numero, dir))
        }
        onAddVariante={(numero) =>
          commit(agregarVariante(cuestionario, numero))
        }
        onRemoveVariante={(numero, letra) =>
          commit(quitarVariante(cuestionario, numero, letra))
        }
        onChangeTipo={(numero, tipo) =>
          commit(cambiarTipo(cuestionario, numero, tipo))
        }
        onChangePuntaje={(numero, puntaje) =>
          commit(cambiarPuntaje(cuestionario, numero, puntaje))
        }
        onChangeTema={(numero, temaId) =>
          commit(cambiarTema(cuestionario, numero, temaId))
        }
        renderVarianteEditor={(posicion, variante) => (
          <VarianteEditor
            posicion={posicion}
            variante={variante}
            bancoQuestions={bancoQuestions}
            materiaHint={materiaHint}
            returnTo={returnTo}
            {...(plantillaIO ? { plantillaIO } : {})}
            onImportQuestion={handleImportQuestion}
            onChangeOrigen={(origen) =>
              commit(
                cambiarOrigenVariante(
                  cuestionario,
                  posicion.numero,
                  variante.letra,
                  origen,
                ),
              )
            }
            rail={rail}
            activeRailId={`${posicion.numero}-${variante.letra}`}
            previewQuizzes={previewQuizzes}
            previewTitle={previewTitle}
          />
        )}
      />

      <RepartoPuntos cuestionario={cuestionario} variant="table" />
    </fieldset>
  );
}
