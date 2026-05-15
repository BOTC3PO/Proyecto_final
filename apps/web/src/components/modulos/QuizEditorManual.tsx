import { useState } from "react";
import type { ModuleQuizQuestion } from "../../domain/module/module.types";
import HerramientaPicker from "./HerramientaPicker";
import VisualizerRenderer from "./VisualizerRenderer";
import type { VisualSpec } from "../../generadoresV2/core/types";

const QUESTION_TYPES: Array<NonNullable<ModuleQuizQuestion["questionType"]>> = [
  "mc",
  "vf",
  "input",
];

type QuizEditorManualProps = {
  questions: ModuleQuizQuestion[];
  onChange: (questions: ModuleQuizQuestion[]) => void;
};

const createQuestion = (questionType: ModuleQuizQuestion["questionType"]): ModuleQuizQuestion => ({
  id: `question-${Date.now()}-${Math.random().toString(16).slice(2)}`,
  prompt: "",
  questionType,
  options: questionType === "vf" ? ["Verdadero", "Falso"] : questionType === "mc" ? ["", ""] : [],
  answerKey: "",
  explanation: "",
});

function parseVisualContext(
  detail: string | undefined
): { spec: VisualSpec; subject?: string; title?: string } | null {
  if (!detail) return null;
  try {
    const parsed = JSON.parse(detail) as { spec?: VisualSpec; subject?: string; title?: string };
    if (parsed && typeof parsed === "object" && parsed.spec) {
      return { spec: parsed.spec, subject: parsed.subject, title: parsed.title };
    }
  } catch {
    // not valid JSON
  }
  return null;
}

export default function QuizEditorManual({ questions, onChange }: QuizEditorManualProps) {
  const [herramientaPickerFor, setHerramientaPickerFor] = useState<number | null>(null);
  const [expandedSteps, setExpandedSteps] = useState<Set<string>>(new Set());

  const updateQuestion = (index: number, patch: Partial<ModuleQuizQuestion>) => {
    const next = [...questions];
    next[index] = { ...next[index], ...patch };
    onChange(next);
  };

  const removeQuestion = (index: number) => {
    onChange(questions.filter((_, i) => i !== index));
  };

  const addQuestion = (questionType: ModuleQuizQuestion["questionType"]) => {
    onChange([...questions, createQuestion(questionType)]);
  };

  const updateOption = (questionIndex: number, optionIndex: number, value: string) => {
    const question = questions[questionIndex];
    const options = [...(question.options ?? [])];
    options[optionIndex] = value;
    updateQuestion(questionIndex, { options });
  };

  const addOption = (questionIndex: number) => {
    const question = questions[questionIndex];
    updateQuestion(questionIndex, { options: [...(question.options ?? []), ""] });
  };

  const removeOption = (questionIndex: number, optionIndex: number) => {
    const question = questions[questionIndex];
    const options = (question.options ?? []).filter((_, idx) => idx !== optionIndex);
    updateQuestion(questionIndex, { options });
  };

  const toggleSteps = (id: string) => {
    setExpandedSteps((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="space-y-4">
      {questions.length === 0 ? (
        <p className="text-sm text-gray-500">Aún no agregaste preguntas manuales.</p>
      ) : null}

      {questions.map((question, index) => {
        const questionType = question.questionType ?? "mc";
        const showOptions = questionType !== "input" && questionType !== "completar";
        const isTrueFalse = questionType === "vf";
        const visualContext = parseVisualContext(question.visualContext);

        // Origin badge (6b)
        const origen = question.focus?.startsWith("banco:")
          ? "banco"
          : question.datos !== undefined
          ? "auto"
          : "manual";
        const ORIGEN_BADGE: Record<string, string> = {
          banco:  "bg-emerald-100 text-emerald-800 border-emerald-200",
          auto:   "bg-blue-100 text-blue-800 border-blue-200",
          manual: "bg-gray-100 text-gray-600 border-gray-200",
        };
        const ORIGEN_LABEL: Record<string, string> = { banco: "Banco", auto: "Auto", manual: "Manual" };

        return (
          <div key={question.id} className="rounded-lg border border-gray-200 p-4 space-y-3">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-semibold">Pregunta {index + 1}</h4>
                <span
                  className={`text-[10px] font-medium border rounded px-1.5 py-0.5 ${ORIGEN_BADGE[origen]}`}
                >
                  {ORIGEN_LABEL[origen]}
                </span>
              </div>
              <button
                type="button"
                className="text-xs text-red-500 hover:underline"
                onClick={() => removeQuestion(index)}
              >
                Quitar
              </button>
            </div>

            {visualContext ? (
              <div className="rounded-lg border border-blue-200 bg-blue-50 overflow-hidden">
                <div className="flex items-center justify-between gap-2 px-3 py-2 border-b border-blue-200">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-blue-700">Herramienta interactiva</span>
                    {visualContext.subject ? (
                      <span className="text-xs text-blue-500">· {visualContext.subject}</span>
                    ) : null}
                    {visualContext.title ? (
                      <span className="text-xs text-blue-600">{visualContext.title}</span>
                    ) : null}
                  </div>
                  <button
                    type="button"
                    className="text-xs text-red-500 hover:underline"
                    onClick={() => updateQuestion(index, { visualContext: undefined })}
                  >
                    Quitar herramienta
                  </button>
                </div>
                <div className="p-3 bg-white">
                  <VisualizerRenderer spec={visualContext.spec} />
                </div>
              </div>
            ) : (
              <button
                type="button"
                className="text-xs text-blue-600 hover:underline border border-blue-200 rounded px-2 py-1"
                onClick={() => setHerramientaPickerFor(index)}
              >
                + Agregar herramienta interactiva
              </button>
            )}

            <textarea
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              rows={2}
              placeholder="Enunciado de la pregunta"
              value={question.prompt}
              onChange={(event) => updateQuestion(index, { prompt: event.target.value })}
            />

            <div className="grid gap-3 md:grid-cols-3">
              <label className="text-xs font-medium text-gray-600">
                Tipo
                <select
                  className="mt-1 w-full rounded-md border border-gray-300 px-2 py-2 text-sm"
                  value={questionType}
                  onChange={(event) => {
                    const nextType = event.target.value as ModuleQuizQuestion["questionType"];
                    const options =
                      nextType === "vf"
                        ? ["Verdadero", "Falso"]
                        : nextType === "input" || nextType === "completar"
                          ? []
                          : question.options?.length
                            ? question.options
                            : ["", ""];
                    updateQuestion(index, { questionType: nextType, options });
                  }}
                >
                  {QUESTION_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type === "mc" ? "Opción múltiple" : type === "vf" ? "Verdadero/Falso" : "Respuesta"}
                    </option>
                  ))}
                </select>
              </label>

              <label className="text-xs font-medium text-gray-600">
                Tema / foco
                <input
                  className="mt-1 w-full rounded-md border border-gray-300 px-2 py-2 text-sm"
                  placeholder="Ej: derivadas, vocabulario"
                  value={question.focus ?? ""}
                  onChange={(e) => updateQuestion(index, { focus: e.target.value })}
                />
              </label>

              {questionType === "input" ? (
                <label className="text-xs font-medium text-gray-600">
                  Respuesta esperada
                  <input
                    className="mt-1 w-full rounded-md border border-gray-300 px-2 py-2 text-sm"
                    value={
                      Array.isArray(question.answerKey)
                        ? question.answerKey.join(", ")
                        : (question.answerKey ?? "")
                    }
                    onChange={(event) => updateQuestion(index, { answerKey: event.target.value })}
                    placeholder="Respuesta"
                  />
                </label>
              ) : null}
            </div>

            {/* Numeric tolerance info (3c) */}
            {questionType === "input" && question.toleranciaRelativa !== undefined && (
              <div className="flex items-center gap-3 text-xs text-gray-500 bg-gray-50 rounded px-2 py-1.5">
                <span>Tolerancia: ±{Math.round(question.toleranciaRelativa * 100)}%</span>
                {question.unidades && (
                  <span>
                    Unidades:{" "}
                    {Object.entries(question.unidades)
                      .map(([k, v]) => `${k}: ${v}`)
                      .join(" · ")}
                  </span>
                )}
              </div>
            )}

            {showOptions ? (
              <div className="space-y-2">
                <p className="text-xs font-medium text-gray-600">
                  {isTrueFalse ? "Respuesta correcta" : "Opciones — seleccioná la correcta"}
                </p>
                {(question.options ?? []).map((option, optionIndex) => (
                  <div key={`${question.id}-option-${optionIndex}`} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name={`answer-${question.id}`}
                      checked={question.answerKey === option}
                      onChange={() => updateQuestion(index, { answerKey: option })}
                      title="Marcar como correcta"
                    />
                    <input
                      className="flex-1 rounded-md border border-gray-300 px-2 py-2 text-sm"
                      value={option}
                      disabled={isTrueFalse}
                      onChange={(event) => updateOption(index, optionIndex, event.target.value)}
                      placeholder={`Opción ${optionIndex + 1}`}
                    />
                    {!isTrueFalse ? (
                      <button
                        type="button"
                        className="text-xs text-red-500 hover:underline"
                        onClick={() => removeOption(index, optionIndex)}
                      >
                        Quitar
                      </button>
                    ) : null}
                  </div>
                ))}
                {!isTrueFalse ? (
                  <button
                    type="button"
                    className="text-xs text-blue-600 hover:underline"
                    onClick={() => addOption(index)}
                  >
                    + Agregar opción
                  </button>
                ) : null}
              </div>
            ) : null}

            <textarea
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
              rows={2}
              placeholder="Explicación (opcional)"
              value={question.explanation ?? ""}
              onChange={(event) => updateQuestion(index, { explanation: event.target.value })}
            />

            {/* Steps collapsible (3c) */}
            {question.pasos && question.pasos.length > 0 && (
              <div>
                <button
                  type="button"
                  className="text-xs text-blue-600 hover:underline"
                  onClick={() => toggleSteps(question.id)}
                >
                  {expandedSteps.has(question.id) ? "Ocultar resolución" : "Ver resolución"}
                </button>
                {expandedSteps.has(question.id) && (
                  <ol className="mt-2 pl-4 space-y-1 text-xs text-gray-500 list-decimal">
                    {question.pasos.map((paso, pi) => (
                      <li key={pi}>{paso}</li>
                    ))}
                  </ol>
                )}
              </div>
            )}
          </div>
        );
      })}

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          className="rounded-md border px-3 py-2 text-xs"
          onClick={() => addQuestion("mc")}
        >
          + Opción múltiple
        </button>
        <button
          type="button"
          className="rounded-md border px-3 py-2 text-xs"
          onClick={() => addQuestion("vf")}
        >
          + Verdadero/Falso
        </button>
        <button
          type="button"
          className="rounded-md border px-3 py-2 text-xs"
          onClick={() => addQuestion("input")}
        >
          + Respuesta abierta
        </button>
      </div>

      {herramientaPickerFor !== null ? (
        <HerramientaPicker
          isOpen={true}
          onSelect={(detail) => {
            updateQuestion(herramientaPickerFor, { visualContext: detail });
            setHerramientaPickerFor(null);
          }}
          onClose={() => setHerramientaPickerFor(null)}
        />
      ) : null}
    </div>
  );
}
