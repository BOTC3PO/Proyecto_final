import type { ModuleQuizQuestion } from "../../domain/module/module.types";

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

export default function QuizEditorManual({ questions, onChange }: QuizEditorManualProps) {
  const updateQuestion = (index: number, patch: Partial<ModuleQuizQuestion>) => {
    const next = [...questions];
    next[index] = { ...next[index], ...patch };
    onChange(next);
  };

  const removeQuestion = (index: number) => {
    const next = questions.filter((_, itemIndex) => itemIndex !== index);
    onChange(next);
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
    const options = [...(question.options ?? []), ""];
    updateQuestion(questionIndex, { options });
  };

  const removeOption = (questionIndex: number, optionIndex: number) => {
    const question = questions[questionIndex];
    const options = (question.options ?? []).filter((_, idx) => idx !== optionIndex);
    updateQuestion(questionIndex, { options });
  };

  return (
    <div className="space-y-4">
      {questions.length === 0 ? (
        <p className="text-sm text-gray-500">Aún no agregaste preguntas manuales.</p>
      ) : null}

      {questions.map((question, index) => {
        const questionType = question.questionType ?? "mc";
        const showOptions = questionType !== "input";
        const isTrueFalse = questionType === "vf";

        return (
          <div key={question.id} className="rounded-lg border border-gray-200 p-4 space-y-3">
            <div className="flex items-center justify-between gap-3">
              <h4 className="text-sm font-semibold">Pregunta {index + 1}</h4>
              <button
                type="button"
                className="text-xs text-red-500 hover:underline"
                onClick={() => removeQuestion(index)}
              >
                Quitar
              </button>
            </div>

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
                        : nextType === "input"
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
                Respuesta esperada
                <input
                  className="mt-1 w-full rounded-md border border-gray-300 px-2 py-2 text-sm"
                  value={Array.isArray(question.answerKey) ? question.answerKey.join(", ") : question.answerKey ?? ""}
                  onChange={(event) => updateQuestion(index, { answerKey: event.target.value })}
                  placeholder={isTrueFalse ? "Verdadero / Falso" : "Respuesta"}
                />
              </label>
            </div>

            {showOptions ? (
              <div className="space-y-2">
                <p className="text-xs font-medium text-gray-600">Opciones</p>
                {(question.options ?? []).map((option, optionIndex) => (
                  <div key={`${question.id}-option-${optionIndex}`} className="flex items-center gap-2">
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
    </div>
  );
}
