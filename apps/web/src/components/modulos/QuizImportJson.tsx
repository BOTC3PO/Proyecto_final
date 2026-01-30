import { useRef, useState, type ChangeEvent } from "react";
import type { ModuleQuiz, ModuleQuizQuestion, ModuleQuizVisibility } from "../../domain/module/module.types";

type QuizImportJsonProps = {
  onImportQuizzes?: (quizzes: ModuleQuiz[]) => void;
};

type ImportStatus = {
  status: "idle" | "valid" | "error" | "success";
  message: string;
  errors?: string[];
};

type QuizCandidate = {
  title?: string;
  type?: ModuleQuiz["type"];
  visibility?: ModuleQuizVisibility;
  questions: unknown[];
};

const exercisesJsonExample = `{
  "preguntas": [
    {
      "enunciado": "¿Cuál es la fórmula de la velocidad media?",
      "questionType": "mc",
      "options": [
        "v = d / t",
        "v = t / d",
        "v = d * t"
      ],
      "answerKey": "v = d / t",
      "explanation": "Se calcula como distancia dividida por tiempo."
    }
  ]
}`;

const isNonEmptyString = (value: unknown): value is string =>
  typeof value === "string" && value.trim().length > 0;

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const buildQuizId = () => `quiz-${Date.now()}-${Math.random().toString(16).slice(2)}`;

const normalizeOptions = (raw: unknown) => {
  if (!Array.isArray(raw)) return undefined;
  const options = raw
    .map((option) => {
      if (isNonEmptyString(option)) return option.trim();
      if (isRecord(option)) {
        const text = isNonEmptyString(option.texto)
          ? option.texto
          : isNonEmptyString(option.text)
            ? option.text
            : "";
        return text.trim();
      }
      return "";
    })
    .filter(Boolean);
  return options.length > 0 ? options : undefined;
};

const normalizeAnswerKey = (answerKey: unknown) => {
  if (Array.isArray(answerKey)) {
    const values = answerKey.filter((value) => isNonEmptyString(value)) as string[];
    return values.length > 0 ? values.map((value) => value.trim()) : "";
  }
  if (typeof answerKey === "number" && Number.isFinite(answerKey)) return String(answerKey);
  if (isNonEmptyString(answerKey)) return answerKey.trim();
  return "";
};

const normalizeQuestionType = (raw: unknown): ModuleQuizQuestion["questionType"] => {
  if (!isNonEmptyString(raw)) return "mc";
  const normalized = raw.trim();
  if (normalized === "vf" || normalized === "input" || normalized === "mc") return normalized;
  return "mc";
};

const buildQuestion = (raw: Record<string, unknown>, index: number): ModuleQuizQuestion => {
  const prompt = isNonEmptyString(raw.enunciado)
    ? raw.enunciado.trim()
    : isNonEmptyString(raw.prompt)
      ? raw.prompt.trim()
      : isNonEmptyString(raw.question)
        ? raw.question.trim()
        : `Pregunta ${index + 1}`;
  const questionType = normalizeQuestionType(raw.questionType ?? raw.tipo);
  const rawOptions =
    Array.isArray(raw.options)
      ? raw.options
      : Array.isArray(raw.opciones)
        ? raw.opciones
        : Array.isArray(raw.respuestas)
          ? raw.respuestas
          : undefined;

  return {
    id: `question-${Date.now()}-${Math.random().toString(16).slice(2)}-${index}`,
    prompt,
    questionType,
    options: questionType === "input" ? [] : normalizeOptions(rawOptions) ?? [],
    answerKey: normalizeAnswerKey(raw.answerKey ?? raw.solucion),
    explanation: isNonEmptyString(raw.explanation)
      ? raw.explanation.trim()
      : isNonEmptyString(raw.explicacion)
        ? raw.explicacion.trim()
        : "",
  };
};

const getQuestionsFromValue = (value: unknown) => {
  if (Array.isArray(value)) return value;
  if (isRecord(value) && Array.isArray(value.preguntas)) return value.preguntas;
  if (isRecord(value) && Array.isArray(value.questions)) return value.questions;
  return null;
};

const getQuizCandidates = (value: unknown): QuizCandidate[] | null => {
  if (Array.isArray(value)) {
    const allQuizzes = value.every((item) => {
      if (!isRecord(item)) return false;
      return Array.isArray(item.preguntas) || Array.isArray(item.questions);
    });
    if (allQuizzes) {
      return value.map((item) => ({
        title: isRecord(item) && isNonEmptyString(item.titulo)
          ? item.titulo
          : isRecord(item) && isNonEmptyString(item.title)
            ? item.title
            : undefined,
        type: isRecord(item) && isNonEmptyString(item.type)
          ? (item.type.trim() as ModuleQuiz["type"])
          : isRecord(item) && isNonEmptyString(item.tipo)
            ? (item.tipo.trim() as ModuleQuiz["type"])
            : undefined,
        visibility: isRecord(item) && isNonEmptyString(item.visibility)
          ? (item.visibility.trim() as ModuleQuizVisibility)
          : isRecord(item) && isNonEmptyString(item.visibilidad)
            ? (item.visibilidad.trim() as ModuleQuizVisibility)
            : undefined,
        questions: getQuestionsFromValue(item) ?? [],
      }));
    }
    const questionCandidates = value.every((item) => isRecord(item));
    if (questionCandidates) {
      return [{ questions: value }];
    }
    return null;
  }

  if (isRecord(value)) {
    if (Array.isArray(value.cuestionarios)) {
      return value.cuestionarios.map((item) => ({
        title: isRecord(item) && isNonEmptyString(item.titulo)
          ? item.titulo
          : isRecord(item) && isNonEmptyString(item.title)
            ? item.title
            : undefined,
        type: isRecord(item) && isNonEmptyString(item.type)
          ? (item.type.trim() as ModuleQuiz["type"])
          : isRecord(item) && isNonEmptyString(item.tipo)
            ? (item.tipo.trim() as ModuleQuiz["type"])
            : undefined,
        visibility: isRecord(item) && isNonEmptyString(item.visibility)
          ? (item.visibility.trim() as ModuleQuizVisibility)
          : isRecord(item) && isNonEmptyString(item.visibilidad)
            ? (item.visibilidad.trim() as ModuleQuizVisibility)
            : undefined,
        questions: getQuestionsFromValue(item) ?? [],
      }));
    }
    const questions = getQuestionsFromValue(value);
    if (questions) {
      return [
        {
          title: isNonEmptyString(value.titulo) ? value.titulo : isNonEmptyString(value.title) ? value.title : undefined,
          type: isNonEmptyString(value.type)
            ? (value.type.trim() as ModuleQuiz["type"])
            : isNonEmptyString(value.tipo)
              ? (value.tipo.trim() as ModuleQuiz["type"])
              : undefined,
          visibility: isNonEmptyString(value.visibility)
            ? (value.visibility.trim() as ModuleQuizVisibility)
            : isNonEmptyString(value.visibilidad)
              ? (value.visibilidad.trim() as ModuleQuizVisibility)
              : undefined,
          questions,
        },
      ];
    }
  }

  return null;
};

const validateQuestions = (questions: unknown[], quizLabel: string, errors: string[]) => {
  if (questions.length === 0) {
    errors.push(`${quizLabel}: debe incluir al menos una pregunta.`);
    return;
  }

  questions.forEach((pregunta, index) => {
    if (!isRecord(pregunta)) {
      errors.push(`${quizLabel}: preguntas[${index}] debe ser un objeto con enunciado, respuestas y solucion.`);
      return;
    }
    const prompt = pregunta.enunciado ?? pregunta.prompt ?? pregunta.question;
    if (!isNonEmptyString(prompt)) {
      errors.push(`${quizLabel}: preguntas[${index}].enunciado debe ser un texto no vacío.`);
    }
    const questionType = normalizeQuestionType(pregunta.questionType ?? pregunta.tipo);
    const rawOptions =
      Array.isArray(pregunta.options)
        ? pregunta.options
        : Array.isArray(pregunta.opciones)
          ? pregunta.opciones
          : Array.isArray(pregunta.respuestas)
            ? pregunta.respuestas
            : null;
    const requiresOptions = questionType !== "input";
    if (requiresOptions) {
      if (!rawOptions || rawOptions.length < 2) {
        errors.push(`${quizLabel}: preguntas[${index}].options debe ser un array con al menos 2 opciones.`);
      } else {
        rawOptions.forEach((respuesta, respuestaIndex) => {
          const isStringOption = isNonEmptyString(respuesta);
          const isObjectOption = isRecord(respuesta) && (isNonEmptyString(respuesta.texto) || isNonEmptyString(respuesta.text));
          if (!isStringOption && !isObjectOption) {
            errors.push(
              `${quizLabel}: preguntas[${index}].options[${respuestaIndex}] debe ser un texto o un objeto con texto.`,
            );
          }
        });
      }
    }
    const answerKey = pregunta.answerKey ?? pregunta.solucion;
    if (
      !(typeof answerKey === "string" && answerKey.trim()) &&
      !(typeof answerKey === "number" && Number.isFinite(answerKey)) &&
      !(Array.isArray(answerKey) && answerKey.every((value) => isNonEmptyString(value)))
    ) {
      errors.push(`${quizLabel}: preguntas[${index}].answerKey debe ser un texto o un array válido.`);
    }
  });
};

const validateQuizImport = (value: unknown) => {
  const candidates = getQuizCandidates(value);
  if (!candidates) {
    return {
      isValid: false,
      errors: ["El JSON debe contener preguntas o cuestionarios con la clave preguntas."],
    };
  }

  const errors: string[] = [];
  candidates.forEach((candidate, index) => {
    const quizLabel = candidate.title?.trim() || `Cuestionario ${index + 1}`;
    validateQuestions(candidate.questions, quizLabel, errors);
  });

  return { isValid: errors.length === 0, errors, candidates };
};

export default function QuizImportJson({ onImportQuizzes }: QuizImportJsonProps) {
  const [importStatus, setImportStatus] = useState<ImportStatus>({ status: "idle", message: "" });
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const resetInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setImportStatus({ status: "idle", message: "" });
    setFileName("");
    try {
      const raw = await file.text();
      const parsed = JSON.parse(raw) as unknown;
      const validation = validateQuizImport(parsed);
      if (!validation.isValid || !validation.candidates) {
        setImportStatus({
          status: "error",
          message: "El archivo no coincide con el esquema esperado.",
          errors: validation.errors,
        });
        resetInput();
        return;
      }

      const quizzes = validation.candidates.map((candidate, index) => {
        const safeType = candidate.type === "practica" || candidate.type === "competencia" ? candidate.type : "evaluacion";
        const safeVisibility = candidate.visibility === "escuela" ? "escuela" : "publico";
        return {
          id: buildQuizId(),
          title: candidate.title?.trim() || `Cuestionario importado ${index + 1}`,
          type: safeType,
          status: "draft",
          version: 1,
          visibility: safeVisibility,
          mode: "manual",
          questions: candidate.questions.map((question, questionIndex) =>
            buildQuestion(question as Record<string, unknown>, questionIndex),
          ),
        } satisfies ModuleQuiz;
      });

      setFileName(file.name);
      if (onImportQuizzes) {
        onImportQuizzes(quizzes);
        const totalQuestions = quizzes.reduce((sum, quiz) => sum + (quiz.questions?.length ?? 0), 0);
        setImportStatus({
          status: "success",
          message: `Se importaron ${quizzes.length} cuestionario${quizzes.length === 1 ? "" : "s"} (${totalQuestions} preguntas).`,
        });
      } else {
        setImportStatus({
          status: "valid",
          message: "Planilla válida. Lista para importar preguntas.",
        });
      }
    } catch (error) {
      setImportStatus({
        status: "error",
        message: "No se pudo leer el archivo JSON.",
        errors: [error instanceof Error ? error.message : "JSON inválido."],
      });
      resetInput();
    }
  };

  return (
    <div className="border rounded-lg p-4 space-y-2">
      <h3 className="text-sm font-semibold">Importar JSON</h3>
      <input
        type="file"
        accept=".json"
        className="block w-full text-sm text-gray-700 file:mr-4 file:rounded-md file:border-0 file:bg-blue-50 file:px-3 file:py-2 file:text-sm file:font-semibold file:text-blue-700 hover:file:bg-blue-100"
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <p className="text-xs text-gray-500">
        Incluye en cada pregunta: enunciado, opciones (si aplica) y respuesta correcta.
      </p>
      {importStatus.status === "success" && (
        <p className="text-xs text-emerald-600">
          {importStatus.message} {fileName ? `(${fileName})` : ""}
        </p>
      )}
      {importStatus.status === "valid" && (
        <p className="text-xs text-emerald-600">
          {importStatus.message} {fileName ? `(${fileName})` : ""}
        </p>
      )}
      {importStatus.status === "error" && (
        <div className="rounded-md border border-red-200 bg-red-50 p-3 text-xs text-red-700 space-y-2">
          <p className="font-semibold">{importStatus.message}</p>
          <ul className="list-disc pl-4 space-y-1">
            {importStatus.errors?.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      <details className="rounded-md border border-slate-200 bg-slate-50 p-3 text-[11px] text-slate-600">
        <summary className="cursor-pointer font-medium">Ver ejemplo de planilla válida</summary>
        <pre className="mt-2 whitespace-pre-wrap font-mono">{exercisesJsonExample}</pre>
      </details>
    </div>
  );
}
