/**
 * VistaAlumnoOverlay — Tarea 14.
 *
 * Overlay full-screen (portal) que renderiza un módulo TAL COMO LO VE EL
 * ALUMNO, usando los mismos componentes que la vista real (TheoryItemCard,
 * QuizGeneratedPreview, OrdenarRenderer, etc.).
 *
 * Diferencias intencionales respecto a la vista real:
 *  - Banner fijo arriba: "Vista previa — los intentos no se guardan".
 *  - Para quizzes manuales: el alumno puede tipear/ordenar/etc., pero al
 *    "Verificar" se evalúa localmente contra `answerKey` — no se llama
 *    a la API. En la UI, los quizzes generados van por `QuizGeneratedPreview`
 *    (que solo hace GET de la plantilla, permitido en preview).
 *  - Si una sección exige algo que no está en memoria (ids de DB), se muestra
 *    un placeholder "disponible al guardar" y se acumula en `missing`.
 *
 * Sin red de escritura. Cierre con X o Esc.
 */

import { useEffect, useId, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import type { ModuleQuiz, ModuleQuizQuestion } from "../../domain/module/module.types";
import TheoryItemCard, { type TheoryItem } from "./TheoryItemCard";
import QuizGeneratedPreview from "./QuizGeneratedPreview";
import OrdenarRenderer from "../quiz-renderers/OrdenarRenderer";
import MarcarMapaRenderer from "../quiz-renderers/MarcarMapaRenderer";
import AnalisisSintacticoRenderer from "../quiz-renderers/AnalisisSintacticoRenderer";
import IdentificarPalabrasRenderer from "../quiz-renderers/IdentificarPalabrasRenderer";

export interface VistaAlumnoOverlayProps {
  open: boolean;
  onClose: () => void;
  title: string;
  theoryItems: TheoryItem[];
  quizzes: ModuleQuiz[];
}

interface MissingReport {
  quizId: string;
  reason: string;
}

export default function VistaAlumnoOverlay({
  open,
  onClose,
  title,
  theoryItems,
  quizzes,
}: VistaAlumnoOverlayProps) {
  const titleId = useId();
  const [missing, setMissing] = useState<MissingReport[]>([]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const reportMissing = (quizId: string, reason: string) => {
    setMissing((prev) =>
      prev.some((m) => m.quizId === quizId && m.reason === reason)
        ? prev
        : [...prev, { quizId, reason }],
    );
  };

  if (!open || typeof document === "undefined") return null;

  return createPortal(
    <div
      data-testid="vista-alumno-overlay"
      className="fixed inset-0 z-[100] flex flex-col bg-slate-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div
        className="flex shrink-0 items-center justify-between gap-3 border-b border-amber-300 bg-amber-100 px-4 py-2 text-sm text-amber-900"
        data-testid="vista-alumno-banner"
      >
        <span>
          <strong>Vista previa</strong> — los intentos no se guardan.
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar vista alumno"
          data-testid="vista-alumno-close"
          className="rounded-md border border-amber-400 bg-white px-3 py-1 text-amber-900 hover:bg-amber-50"
        >
          Cerrar ✕
        </button>
      </div>

      <div className="flex-1 overflow-auto p-6">
        <h1
          id={titleId}
          className="mb-6 text-2xl font-bold text-slate-900"
          data-testid="vista-alumno-title"
        >
          {title}
        </h1>

        <section className="mb-8 space-y-4">
          <h2 className="text-lg font-bold text-slate-900">
            Teoría
            <span className="ml-2 inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-indigo-100 px-2 text-xs font-bold text-indigo-700">
              {theoryItems.length}
            </span>
          </h2>
          {theoryItems.length === 0 ? (
            <p className="text-sm text-slate-500">
              Este módulo todavía no tiene elementos de teoría.
            </p>
          ) : (
            <div className="grid gap-3">
              {theoryItems.map((item) => (
                <TheoryItemCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </section>

        <section className="space-y-4">
          <h2 className="text-lg font-bold text-slate-900">
            Quizzes
            <span className="ml-2 inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-purple-100 px-2 text-xs font-bold text-purple-700">
              {quizzes.length}
            </span>
          </h2>
          {quizzes.length === 0 ? (
            <p className="text-sm text-slate-500">
              Este módulo todavía no tiene quizzes.
            </p>
          ) : (
            <div className="space-y-6">
              {quizzes.map((quiz) => (
                <article
                  key={quiz.id}
                  data-testid={`vista-alumno-quiz-${quiz.id}`}
                  className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <header className="mb-3">
                    <h3 className="text-sm font-bold text-slate-800">
                      {quiz.title || "Quiz sin título"}
                    </h3>
                    <p className="mt-0.5 text-xs font-medium text-slate-500">
                      Modo: {quiz.mode === "generated" ? "Generado" : "Manual"}
                    </p>
                  </header>

                  {quiz.mode === "generated" ? (
                    <QuizGeneratedPreview
                      generatorId={quiz.generatorId ?? ""}
                      count={quiz.count ?? 3}
                    />
                  ) : (
                    <ManualQuizPreview
                      quiz={quiz}
                      onMissing={(reason) => reportMissing(quiz.id, reason)}
                    />
                  )}
                </article>
              ))}
            </div>
          )}
        </section>

        {missing.length > 0 && (
          <section
            className="mt-8 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900"
            data-testid="vista-alumno-missing"
          >
            <h3 className="mb-2 font-semibold">Limitaciones de la vista previa</h3>
            <ul className="list-disc pl-5">
              {missing.map((m, i) => (
                <li key={`${m.quizId}-${i}`}>
                  Quiz <code>{m.quizId}</code>: {m.reason}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>,
    document.body,
  );
}

/* ---------- Manual quiz preview (local-only) ---------- */

interface ManualQuizPreviewProps {
  quiz: ModuleQuiz;
  onMissing: (reason: string) => void;
}

function ManualQuizPreview({ quiz, onMissing }: ManualQuizPreviewProps) {
  const questions = quiz.questions ?? [];

  if (questions.length === 0) {
    return (
      <p className="text-sm text-slate-500">
        Este quiz todavía no tiene preguntas.
      </p>
    );
  }

  return (
    <ol className="space-y-6" data-testid="vista-alumno-manual-quiz">
      {questions.map((q, idx) => (
        <ManualQuestionPreview
          key={q.id}
          question={q}
          index={idx}
          onMissing={onMissing}
        />
      ))}
    </ol>
  );
}

function ManualQuestionPreview({
  question,
  index,
  onMissing,
}: {
  question: ModuleQuizQuestion;
  index: number;
  onMissing: (reason: string) => void;
}) {
  const qt = question.questionType ?? "input";
  const [answer, setAnswer] = useState<string | string[]>("");
  const [verified, setVerified] = useState<null | boolean>(null);

  const correct = useMemo<string | string[] | null>(() => {
    if (question.answerKey === undefined) return null;
    return question.answerKey;
  }, [question.answerKey]);

  const onVerify = () => {
    if (correct === null) {
      onMissing("pregunta sin answerKey");
      return;
    }
    if (Array.isArray(correct)) {
      const a = Array.isArray(answer) ? answer : [];
      setVerified(
        correct.length === a.length && correct.every((c, i) => c === a[i]),
      );
    } else {
      setVerified(String(answer).trim() === String(correct).trim());
    }
  };

  return (
    <li className="space-y-3 rounded-lg border border-slate-200 bg-slate-50/40 p-4">
      <div className="space-y-1">
        <p className="text-xs uppercase tracking-wide text-slate-400">
          Pregunta {index + 1} · {qt}
        </p>
        <p className="text-sm text-slate-800">
          {question.prompt || <em className="text-slate-400">(sin enunciado)</em>}
        </p>
      </div>

      {qt === "mc" ? (
        <MultipleChoicePreview
          options={question.options ?? []}
          value={typeof answer === "string" ? answer : ""}
          onChange={setAnswer}
          disabled={verified !== null}
        />
      ) : qt === "vf" ? (
        <TrueFalsePreview
          value={typeof answer === "string" ? answer : ""}
          onChange={setAnswer}
          disabled={verified !== null}
        />
      ) : qt === "input" ? (
        <input
          type="text"
          aria-label={`Respuesta pregunta ${index + 1}`}
          value={typeof answer === "string" ? answer : ""}
          onChange={(e) => setAnswer(e.target.value)}
          disabled={verified !== null}
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm"
        />
      ) : qt === "ordenar" ? (
        <OrdenarRenderer
          items={question.items ?? []}
          value={Array.isArray(answer) ? answer : undefined}
          onChange={(o) => setAnswer(o)}
          disabled={verified !== null}
        />
      ) : qt === "marcar_mapa" ? (
        <MarcarMapaRenderer
          mapaId={question.mapaId ?? ""}
          selectedKey={typeof answer === "string" ? answer : undefined}
          onSelect={(key) => setAnswer(key)}
          disabled={verified !== null}
          paisIso={question.paisIso}
          modoRespuesta={question.modoRespuestaMapa ?? "iso"}
          encuadre={question.encuadre}
        />
      ) : qt === "analisis_sintactico" ? (
        <AnalisisSintacticoRenderer
          textoAnalizar={question.textoAnalizar ?? ""}
          etiquetasPedidas={question.etiquetasPedidas ?? []}
          asignaciones={
            typeof answer === "object" && !Array.isArray(answer)
              ? (answer as Record<string, string>)
              : undefined
          }
          onChange={(v) => setAnswer(v)}
          disabled={verified !== null}
        />
      ) : qt === "identificar_palabras" ? (
        <IdentificarPalabrasRenderer
          textoAnalizar={question.textoAnalizar ?? ""}
          marcadas={Array.isArray(answer) ? answer : []}
          onChange={(v) => setAnswer(v)}
          disabled={verified !== null}
        />
      ) : (
        <p className="text-xs italic text-slate-500">
          Tipo &quot;{qt}&quot; no soportado en vista previa.
        </p>
      )}

      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={onVerify}
          disabled={verified !== null}
          className="rounded-md bg-[var(--c-primary)] px-3 py-1 text-xs font-semibold text-white disabled:opacity-50"
        >
          Verificar
        </button>
        {verified === true && (
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-semibold text-emerald-700">
            ✓ Correcto
          </span>
        )}
        {verified === false && (
          <span className="rounded-full bg-rose-100 px-2 py-0.5 text-[11px] font-semibold text-rose-700">
            ✕ Incorrecto
          </span>
        )}
        {correct !== null && (
          <span className="text-xs text-slate-500">
            Respuesta correcta:{" "}
            <code className="rounded bg-slate-100 px-1">
              {Array.isArray(correct) ? correct.join(", ") : correct}
            </code>
          </span>
        )}
      </div>
    </li>
  );
}

function MultipleChoicePreview({
  options,
  value,
  onChange,
  disabled,
}: {
  options: string[];
  value: string;
  onChange: (v: string) => void;
  disabled: boolean;
}) {
  if (options.length === 0) {
    return (
      <p className="text-xs italic text-slate-500">Sin opciones definidas.</p>
    );
  }
  return (
    <ul className="space-y-1">
      {options.map((opt, i) => (
        <li key={i}>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              name={`mc-${i}`}
              checked={value === opt}
              onChange={() => onChange(opt)}
              disabled={disabled}
            />
            <span>{opt}</span>
          </label>
        </li>
      ))}
    </ul>
  );
}

function TrueFalsePreview({
  value,
  onChange,
  disabled,
}: {
  value: string;
  onChange: (v: string) => void;
  disabled: boolean;
}) {
  return (
    <ul className="space-y-1">
      {["Verdadero", "Falso"].map((opt) => (
        <li key={opt}>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              name="vf"
              checked={value === opt}
              onChange={() => onChange(opt)}
              disabled={disabled}
            />
            <span>{opt}</span>
          </label>
        </li>
      ))}
    </ul>
  );
}
