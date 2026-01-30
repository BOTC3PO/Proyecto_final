import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { apiGet, apiPost } from "../../lib/api";
import type { ModuleQuizQuestion } from "../../domain/module/module.types";

type AttemptAnswerValue = string | string[];

type QuizAttemptResponse = {
  id?: string;
  attemptId?: string;
  moduleId?: string;
  quizId?: string;
  quizTitle?: string;
  status?: string;
  questions?: ModuleQuizQuestion[];
  answers?: Record<string, AttemptAnswerValue> | Array<Record<string, unknown>>;
  quiz?: {
    title?: string;
    questions?: ModuleQuizQuestion[];
  };
};

type SubmitResponse = {
  status?: string;
  score?: number;
  maxScore?: number;
  feedback?: string;
  message?: string;
};

const resolveAttemptId = (attempt: QuizAttemptResponse | null) =>
  attempt?.attemptId ?? attempt?.id ?? "";

const normalizeAnswers = (
  answers: QuizAttemptResponse["answers"]
): Record<string, AttemptAnswerValue> => {
  if (!answers) return {};
  if (!Array.isArray(answers)) {
    return answers as Record<string, AttemptAnswerValue>;
  }
  return answers.reduce<Record<string, AttemptAnswerValue>>((acc, entry) => {
    if (!entry || typeof entry !== "object") return acc;
    const record = entry as { questionId?: string; id?: string; answer?: unknown; value?: unknown };
    const key = typeof record.questionId === "string" ? record.questionId : record.id;
    if (!key) return acc;
    const value = record.answer ?? record.value;
    if (typeof value === "string" || Array.isArray(value)) {
      acc[key] = value as AttemptAnswerValue;
    }
    return acc;
  }, {});
};

export default function QuizAttempt() {
  const { attemptId } = useParams();
  const navigate = useNavigate();
  const [attempt, setAttempt] = useState<QuizAttemptResponse | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, AttemptAnswerValue>>({});
  const [submitStatus, setSubmitStatus] = useState<"idle" | "submitting" | "submitted" | "error">(
    "idle"
  );
  const [submitMessage, setSubmitMessage] = useState<string | null>(null);
  const [result, setResult] = useState<SubmitResponse | null>(null);

  useEffect(() => {
    if (!attemptId) return;
    let active = true;
    setStatus("loading");
    setErrorMessage(null);
    apiGet<QuizAttemptResponse>(`/api/quiz-attempts/${attemptId}`)
      .then((data) => {
        if (!active) return;
        setAttempt(data);
        setAnswers(normalizeAnswers(data.answers));
        setStatus("ready");
      })
      .catch((error) => {
        if (!active) return;
        setStatus("error");
        setErrorMessage(
          error instanceof Error ? error.message : "No se pudo cargar el intento."
        );
      });
    return () => {
      active = false;
    };
  }, [attemptId]);

  const questions = useMemo(() => {
    if (!attempt) return [] as ModuleQuizQuestion[];
    return attempt.questions ?? attempt.quiz?.questions ?? [];
  }, [attempt]);

  const title = attempt?.quizTitle ?? attempt?.quiz?.title ?? "Quiz";

  const handleAnswerChange = (questionId: string, value: AttemptAnswerValue) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleToggleCheckbox = (questionId: string, option: string, checked: boolean) => {
    setAnswers((prev) => {
      const current = prev[questionId];
      const currentList = Array.isArray(current) ? current : [];
      const next = checked
        ? Array.from(new Set([...currentList, option]))
        : currentList.filter((item) => item !== option);
      return { ...prev, [questionId]: next };
    });
  };

  const handleSubmit = async () => {
    if (!attemptId) return;
    setSubmitStatus("submitting");
    setSubmitMessage(null);
    try {
      const response = await apiPost<SubmitResponse>(`/api/quiz-attempts/${attemptId}/submit`, {
        answers
      });
      setResult(response);
      setSubmitStatus("submitted");
      setSubmitMessage(response.message ?? "Respuestas enviadas para corrección.");
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage(
        error instanceof Error ? error.message : "No se pudo enviar el intento."
      );
    }
  };

  if (status === "loading") {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-500">Cargando intento...</p>
      </main>
    );
  }

  if (status === "error") {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-xl shadow space-y-3">
          <p className="text-gray-700">No se pudo cargar el intento.</p>
          <p className="text-sm text-gray-500">{errorMessage}</p>
          <button
            type="button"
            className="text-blue-600 text-sm hover:underline"
            onClick={() => navigate(-1)}
          >
            Volver
          </button>
        </div>
      </main>
    );
  }

  if (!attempt) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-500">No se encontró el intento solicitado.</p>
      </main>
    );
  }

  const resolvedAttemptId = resolveAttemptId(attempt);

  return (
    <main className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <header className="space-y-2">
          <Link className="text-sm text-blue-600 hover:underline" to="/modulos">
            ← Volver a módulos
          </Link>
          <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
          <p className="text-sm text-gray-500">Intento: {resolvedAttemptId}</p>
        </header>

        <section className="bg-white rounded-xl shadow p-6 space-y-6">
          {questions.length === 0 ? (
            <p className="text-sm text-gray-500">
              Este intento no tiene preguntas asignadas todavía.
            </p>
          ) : (
            <ol className="space-y-6">
              {questions.map((question, index) => {
                const selected = answers[question.id] ?? "";
                const hasOptions = Array.isArray(question.options) && question.options.length > 0;
                const questionType = question.questionType ?? (hasOptions ? "mc" : "input");
                const isMulti = Array.isArray(question.answerKey) && hasOptions;
                return (
                  <li key={question.id} className="space-y-3">
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">Pregunta {index + 1}</p>
                      <p className="text-base text-gray-800">{question.prompt}</p>
                    </div>
                    {questionType === "input" ? (
                      <textarea
                        className="w-full rounded-md border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={3}
                        value={typeof selected === "string" ? selected : ""}
                        onChange={(event) => handleAnswerChange(question.id, event.target.value)}
                        placeholder="Escribí tu respuesta"
                      />
                    ) : questionType === "vf" ? (
                      <div className="flex flex-col gap-2">
                        {["Verdadero", "Falso"].map((option) => (
                          <label key={option} className="flex items-center gap-2 text-sm text-gray-700">
                            <input
                              type="radio"
                              name={question.id}
                              value={option}
                              checked={selected === option}
                              onChange={() => handleAnswerChange(question.id, option)}
                            />
                            {option}
                          </label>
                        ))}
                      </div>
                    ) : hasOptions ? (
                      <div className="flex flex-col gap-2">
                        {question.options?.map((option) => (
                          <label key={option} className="flex items-center gap-2 text-sm text-gray-700">
                            <input
                              type={isMulti ? "checkbox" : "radio"}
                              name={question.id}
                              value={option}
                              checked={
                                isMulti
                                  ? Array.isArray(selected) && selected.includes(option)
                                  : selected === option
                              }
                              onChange={(event) => {
                                if (isMulti) {
                                  handleToggleCheckbox(question.id, option, event.target.checked);
                                } else {
                                  handleAnswerChange(question.id, option);
                                }
                              }}
                            />
                            {option}
                          </label>
                        ))}
                      </div>
                    ) : (
                      <input
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        value={typeof selected === "string" ? selected : ""}
                        onChange={(event) => handleAnswerChange(question.id, event.target.value)}
                        placeholder="Escribí tu respuesta"
                      />
                    )}
                  </li>
                );
              })}
            </ol>
          )}

          <div className="flex flex-col gap-3 border-t border-gray-100 pt-4">
            <button
              type="button"
              className="self-start rounded-md bg-green-600 px-4 py-2 text-sm text-white disabled:bg-gray-300"
              onClick={handleSubmit}
              disabled={submitStatus === "submitting" || questions.length === 0}
            >
              {submitStatus === "submitting" ? "Enviando..." : "Enviar respuestas"}
            </button>
            {submitMessage ? (
              <p
                className={`text-sm ${submitStatus === "error" ? "text-red-600" : "text-green-600"}`}
              >
                {submitMessage}
              </p>
            ) : null}
            {result && (result.score !== undefined || result.maxScore !== undefined) ? (
              <p className="text-sm text-gray-600">
                Puntaje: {result.score ?? "-"} / {result.maxScore ?? "-"}
              </p>
            ) : null}
            {result?.feedback ? (
              <p className="text-sm text-gray-600">{result.feedback}</p>
            ) : null}
          </div>
        </section>
      </div>
    </main>
  );
}
