import { useEffect, useState } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { apiGet } from "../lib/api";
import type { ModuleQuizQuestion } from "../domain/module/module.types";
import type { Ejercicio, GeneratorDescriptor } from "../generadoresV2/core/types";
import { DeterministicPrng } from "../generadoresV2/core/prng";

// ── Types ─────────────────────────────────────────────────────────────────────

type CatalogItem = {
  id: string;
  materia: string;
  label: string;
  subtipos: { id: string; label: string }[];
};

type GeneratorDocs = {
  subtipos: Record<
    string,
    {
      descripcion: string;
      variables: Record<string, { descripcion: string; ejemplo: string }>;
    }
  >;
};

// ── Static generator loader (Vite-friendly) ───────────────────────────────────

function loadGeneratorModule(materia: string) {
  switch (materia) {
    case "biologia":
      return import("../generadoresV2/biologia/index");
    case "informatica":
      return import("../generadoresV2/informatica/index");
    case "fisica":
      return import("../generadoresV2/fisica/index");
    case "matematicas":
      return import("../generadoresV2/matematicas/index");
    case "quimica":
      return import("../generadoresV2/quimica/index");
    case "economia":
      return import("../generadoresV2/economia/index");
    default:
      return Promise.reject(new Error(`Generador no encontrado: ${materia}`));
  }
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function ejercicioToQuestion(e: Ejercicio): ModuleQuizQuestion {
  if (e.tipo === "quiz") {
    return {
      id: e.id,
      prompt: e.enunciado,
      questionType: "mc",
      options: e.opciones,
      answerKey: e.opciones[e.indiceCorrecto],
      explanation: e.explicacion,
    };
  }
  if (e.tipo === "completar") {
    return {
      id: e.id,
      prompt: e.enunciado,
      questionType: "input",
      answerKey: e.respuestaCorrecta,
      explanation: e.explicacion,
    };
  }
  return {
    id: e.id,
    prompt: e.enunciado,
    questionType: "input",
    answerKey: String(e.resultado),
  };
}

const createQuestion = (
  questionType: ModuleQuizQuestion["questionType"]
): ModuleQuizQuestion => ({
  id: `q-${Date.now()}-${Math.random().toString(16).slice(2)}`,
  prompt: "",
  questionType,
  options:
    questionType === "vf"
      ? ["Verdadero", "Falso"]
      : questionType === "mc"
      ? ["", ""]
      : [],
  answerKey: "",
  explanation: "",
});

// Renders plain text with {variable} tokens highlighted in amber.
function PromptWithVariables({ text }: { text: string }) {
  const parts = text.split(/(\{[^}]+\})/g);
  return (
    <>
      {parts.map((part, i) =>
        /^\{[^}]+\}$/.test(part) ? (
          <mark
            key={i}
            className="bg-amber-100 text-amber-800 rounded px-1 font-mono text-xs not-italic"
          >
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function EditorCuestionarios() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const moduleId = searchParams.get("moduleId");
  const returnTo = searchParams.get("returnTo");
  const isEmbedded = Boolean(moduleId && returnTo);

  const [generatorId, setGeneratorId] = useState("");
  const [selectedSubtipo, setSelectedSubtipo] = useState("");
  const [questions, setQuestions] = useState<ModuleQuizQuestion[]>([]);
  const [previewQuestions, setPreviewQuestions] = useState<ModuleQuizQuestion[]>([]);
  const [catalog, setCatalog] = useState<CatalogItem[]>([]);
  const [docs, setDocs] = useState<GeneratorDocs | null>(null);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number | null>(null);
  const [quizTitle, setQuizTitle] = useState("");
  const [instructions, setInstructions] = useState("");
  const [exportStatus, setExportStatus] = useState<"idle" | "copied" | "error">("idle");
  const [quizType, setQuizType] = useState<"practica" | "formal">("formal");
  const [quizVisibility, setQuizVisibility] = useState<"publico" | "escuela">("publico");
  const [previewStatus, setPreviewStatus] =
    useState<"idle" | "loading" | "ready" | "error">("idle");

  // Load catalog on mount
  useEffect(() => {
    apiGet<{ items: CatalogItem[] }>("/api/generators")
      .then((data) => setCatalog(data.items ?? []))
      .catch(() => {});
  }, []);

  // ── Generator preview (seed 42, 3 questions) ────────────────────────────────

  const generatePreview = async (genId: string, subtipo: string) => {
    const descriptorId = `${genId}/${subtipo}`;
    const [materia] = descriptorId.split("/");
    setPreviewStatus("loading");
    setPreviewQuestions([]);
    try {
      const mod = await loadGeneratorModule(materia);
      const prng = new DeterministicPrng(42);
      const descriptores: GeneratorDescriptor[] =
        typeof (mod as unknown as Record<string, unknown>).getDescriptores === "function"
          ? (mod as unknown as Record<string, (p: typeof prng) => GeneratorDescriptor[]>).getDescriptores(prng)
          : typeof (
              mod as unknown as Record<string, ((p: typeof prng) => GeneratorDescriptor[]) | undefined>
            )[`getDescriptores${materia.charAt(0).toUpperCase() + materia.slice(1)}`] ===
            "function"
          ? (
              mod as unknown as Record<string, (p: typeof prng) => GeneratorDescriptor[]>
            )[`getDescriptores${materia.charAt(0).toUpperCase() + materia.slice(1)}`](prng)
          : [];
      const descriptor = descriptores.find((d) => d.id === descriptorId);
      if (!descriptor) {
        setPreviewQuestions([]);
        setPreviewStatus("idle");
        return;
      }
      const ejercicios: Ejercicio[] = Array.from({ length: 3 }, () =>
        descriptor.generate(undefined, prng)
      );
      setPreviewQuestions(ejercicios.map(ejercicioToQuestion));
      setPreviewStatus("ready");
    } catch {
      setPreviewStatus("error");
    }
  };

  // ── Generator / subtipo change handlers ────────────────────────────────────

  const handleGeneratorChange = async (id: string) => {
    setGeneratorId(id);
    setDocs(null);
    setPreviewQuestions([]);
    if (!id) {
      setSelectedSubtipo("");
      return;
    }
    const item = catalog.find((c) => c.id === id);
    const firstSubtipo = item?.subtipos[0]?.id ?? "";
    setSelectedSubtipo(firstSubtipo);

    try {
      const docsData = await apiGet<GeneratorDocs>(`/api/generators/${id}/docs`);
      setDocs(docsData);
    } catch {
      // docs unavailable — not fatal
    }

    if (firstSubtipo) {
      await generatePreview(id, firstSubtipo);
    }
  };

  const handleSubtipoChange = (subtipoId: string) => {
    setSelectedSubtipo(subtipoId);
    if (generatorId && subtipoId) {
      generatePreview(generatorId, subtipoId);
    }
  };

  // ── Variable insertion ──────────────────────────────────────────────────────

  const insertVariableInActiveQuestion = (variable: string) => {
    if (activeQuestionIndex === null) return;
    setQuestions((prev) => {
      const next = [...prev];
      const q = next[activeQuestionIndex];
      if (!q) return prev;
      next[activeQuestionIndex] = { ...q, prompt: q.prompt + variable };
      return next;
    });
  };

  // ── Question editing ────────────────────────────────────────────────────────

  const updateQuestion = (index: number, patch: Partial<ModuleQuizQuestion>) => {
    setQuestions((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], ...patch };
      return next;
    });
  };

  const removeQuestion = (index: number) => {
    setQuestions((prev) => prev.filter((_, i) => i !== index));
    setActiveQuestionIndex((prev) => {
      if (prev === null) return null;
      if (prev === index) return null;
      return prev > index ? prev - 1 : prev;
    });
  };

  const addQuestion = (questionType: ModuleQuizQuestion["questionType"]) => {
    setQuestions((prev) => [...prev, createQuestion(questionType)]);
  };

  const updateOption = (qIdx: number, optIdx: number, value: string) => {
    const q = questions[qIdx];
    const options = [...(q.options ?? [])];
    options[optIdx] = value;
    updateQuestion(qIdx, { options });
  };

  const addOption = (qIdx: number) => {
    const q = questions[qIdx];
    updateQuestion(qIdx, { options: [...(q.options ?? []), ""] });
  };

  const removeOption = (qIdx: number, optIdx: number) => {
    const q = questions[qIdx];
    const options = (q.options ?? []).filter((_, i) => i !== optIdx);
    updateQuestion(qIdx, { options });
  };

  // ── Derived values ──────────────────────────────────────────────────────────

  const catalogItem = catalog.find((c) => c.id === generatorId);
  const materias = Array.from(new Set(catalog.map((c) => c.materia)));
  const currentSubtipoVars =
    docs && selectedSubtipo
      ? (docs.subtipos?.[selectedSubtipo]?.variables ?? {})
      : {};
  // Preview panel shows generator questions when a generator is selected,
  // otherwise shows the manually-edited questions.
  const previewList = generatorId ? previewQuestions : questions;

  const buildExportJson = () => ({
    title: quizTitle.trim() || "Cuestionario sin título",
    type: quizType,
    visibility: quizVisibility,
    instructions: instructions.trim() || undefined,
    questions: questions.map((q) => ({
      prompt: q.prompt,
      questionType: q.questionType,
      options: q.options?.length ? q.options : undefined,
      answerKey: q.answerKey,
      explanation: q.explanation || undefined,
      focus: (q as ModuleQuizQuestion & { focus?: string }).focus || undefined,
    })),
  });

  const handleAddToModule = () => {
    if (questions.length === 0 || !returnTo) return;
    const quiz = buildExportJson();
    navigate(returnTo, {
      state: {
        importedQuiz: {
          ...quiz,
          id: `quiz-${Date.now()}-${Math.random().toString(16).slice(2)}`,
          status: "draft",
          version: 1,
          mode: "manual",
        }
      }
    });
  };

  const handleDownload = () => {
    if (questions.length === 0) return;
    const data = buildExportJson();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${data.title.replace(/\s+/g, "_").toLowerCase()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleCopy = async () => {
    if (questions.length === 0) return;
    try {
      await navigator.clipboard.writeText(JSON.stringify(buildExportJson(), null, 2));
      setExportStatus("copied");
      setTimeout(() => setExportStatus("idle"), 2000);
    } catch {
      setExportStatus("error");
    }
  };

  // ── Render ──────────────────────────────────────────────────────────────────

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* ── Header ─────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-10 bg-white border-b border-slate-200 shadow-sm">
        <div className="flex items-center gap-3 px-4 sm:px-6 py-3">
          <Link
            className="text-sm text-blue-600 hover:underline whitespace-nowrap"
            to={isEmbedded ? returnTo! : "/modulos/crear"}
          >
            {isEmbedded ? "← Volver al módulo" : "← Volver"}
          </Link>
          <span className="hidden sm:block text-sm font-semibold text-slate-600 whitespace-nowrap">
            Editor de cuestionarios
          </span>
          <input
            className="flex-1 min-w-0 rounded-md border border-slate-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
            placeholder="Título del cuestionario..."
            value={quizTitle}
            onChange={(e) => setQuizTitle(e.target.value)}
          />
          <select
            value={quizType}
            onChange={(e) => setQuizType(e.target.value as "practica" | "formal")}
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm bg-white"
          >
            <option value="formal">📝 Evaluación formal</option>
            <option value="practica">✏️ Práctica</option>
          </select>
          <select
            value={quizVisibility}
            onChange={(e) => setQuizVisibility(e.target.value as "publico" | "escuela")}
            className="rounded-lg border border-slate-200 px-3 py-2 text-sm bg-white"
          >
            <option value="publico">🌐 Público</option>
            <option value="escuela">🏫 Escuela</option>
          </select>
          {!isEmbedded && (
            <button
              onClick={handleDownload}
              disabled={questions.length === 0}
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-700 disabled:opacity-50"
            >
              ⬇ Descargar JSON
            </button>
          )}
          <button
            onClick={handleCopy}
            disabled={questions.length === 0}
            className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-50"
          >
            {exportStatus === "copied" ? "✓ Copiado" : "Copiar JSON"}
          </button>
          {isEmbedded && (
            <button
              onClick={handleAddToModule}
              disabled={questions.length === 0}
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-700 disabled:opacity-50"
            >
              ✓ Agregar al módulo
            </button>
          )}
          {questions.length === 0 && (
            <p className="text-xs text-slate-400">
              Agregá al menos una pregunta para exportar.
            </p>
          )}
        </div>
      </header>

      {/* ── Two-panel layout ────────────────────────────────────────── */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 overflow-hidden">
        {/* ════════════════════════════════════════════════════════════
            LEFT PANEL — Editor
        ════════════════════════════════════════════════════════════ */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-4">
          {/* Section 1 — Generator selector */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 space-y-3">
            <h2 className="text-sm font-semibold text-slate-700">Generador automático</h2>
            <select
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
              value={generatorId}
              onChange={(e) => handleGeneratorChange(e.target.value)}
            >
              <option value="">Elegí un generador...</option>
              {materias.map((materia) => (
                <optgroup key={materia} label={materia}>
                  {catalog
                    .filter((c) => c.materia === materia)
                    .map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.label}
                      </option>
                    ))}
                </optgroup>
              ))}
            </select>

            {catalogItem && catalogItem.subtipos.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {catalogItem.subtipos.map((sub) => (
                  <button
                    key={sub.id}
                    type="button"
                    onClick={() => handleSubtipoChange(sub.id)}
                    className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                      selectedSubtipo === sub.id
                        ? "bg-violet-100 border-violet-300 text-violet-700"
                        : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {sub.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Section 2 — Variables insertables */}
          {Object.keys(currentSubtipoVars).length > 0 && (
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 space-y-3">
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-sm font-semibold text-slate-700">Variables del generador</h2>
                {activeQuestionIndex === null ? (
                  <p className="text-xs text-slate-400">
                    Hacé foco en una pregunta para insertar
                  </p>
                ) : (
                  <p className="text-xs text-violet-500">
                    Insertando en pregunta {activeQuestionIndex + 1}
                  </p>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {Object.entries(currentSubtipoVars).map(([key, val]) => (
                  <button
                    key={key}
                    type="button"
                    title={`${val.descripcion} — Ej: ${val.ejemplo}`}
                    onClick={() => insertVariableInActiveQuestion(`{${key}}`)}
                    className="bg-amber-50 border border-amber-200 text-amber-800 hover:bg-amber-100 rounded px-2 py-1 text-xs font-mono transition-colors"
                  >
                    {"{" + key + "}"}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Section 3 — Instructions */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 space-y-2">
            <label className="text-sm font-semibold text-slate-700">
              Instrucciones (opcional)
            </label>
            <textarea
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
              rows={2}
              placeholder="Instrucciones para el alumno antes de comenzar..."
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            />
          </div>

          {/* Section 4 — Question list */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 space-y-4">
            <h2 className="text-sm font-semibold text-slate-700">Preguntas manuales</h2>

            {questions.length === 0 && (
              <p className="text-sm text-slate-400">
                Todavía no hay preguntas. Usá los botones de abajo para agregar.
              </p>
            )}

            {questions.map((question, index) => {
              const qType = question.questionType ?? "mc";
              const showOptions = qType !== "input";
              const isTrueFalse = qType === "vf";
              const isActive = activeQuestionIndex === index;

              return (
                <div
                  key={question.id}
                  className={`rounded-lg border p-3 space-y-3 transition-colors ${
                    isActive
                      ? "border-violet-300 ring-1 ring-violet-200"
                      : "border-slate-200"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-slate-500">
                      Pregunta {index + 1}
                    </span>
                    <button
                      type="button"
                      className="text-xs text-red-500 hover:underline"
                      onClick={() => removeQuestion(index)}
                    >
                      Quitar
                    </button>
                  </div>

                  <textarea
                    className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
                    rows={2}
                    placeholder="Enunciado de la pregunta"
                    value={question.prompt}
                    onFocus={() => setActiveQuestionIndex(index)}
                    onChange={(e) => updateQuestion(index, { prompt: e.target.value })}
                  />

                  <div className="flex items-center gap-3">
                    <label className="text-xs font-medium text-slate-600">
                      Tipo
                      <select
                        className="ml-2 rounded-md border border-slate-300 px-2 py-1 text-xs bg-white"
                        value={qType}
                        onChange={(e) => {
                          const nextType =
                            e.target.value as ModuleQuizQuestion["questionType"];
                          const options =
                            nextType === "vf"
                              ? ["Verdadero", "Falso"]
                              : nextType === "input"
                              ? []
                              : question.options?.length
                              ? question.options
                              : ["", ""];
                          updateQuestion(index, {
                            questionType: nextType,
                            options,
                            answerKey: "",
                          });
                        }}
                      >
                        <option value="mc">Opción múltiple</option>
                        <option value="vf">Verdadero/Falso</option>
                        <option value="input">Respuesta abierta</option>
                      </select>
                    </label>
                  </div>

                  {qType === "input" && (
                    <label className="block text-xs font-medium text-slate-600">
                      Respuesta esperada
                      <input
                        className="mt-1 w-full rounded-md border border-slate-300 px-2 py-1.5 text-sm"
                        value={
                          Array.isArray(question.answerKey)
                            ? question.answerKey.join(", ")
                            : (question.answerKey ?? "")
                        }
                        onChange={(e) =>
                          updateQuestion(index, { answerKey: e.target.value })
                        }
                        placeholder="Respuesta"
                      />
                    </label>
                  )}

                  {showOptions && (
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-slate-600">
                        {isTrueFalse
                          ? "Respuesta correcta"
                          : "Opciones — seleccioná la correcta"}
                      </p>
                      {(question.options ?? []).map((opt, optIdx) => (
                        <div
                          key={`${question.id}-opt-${optIdx}`}
                          className="flex items-center gap-2"
                        >
                          <input
                            type="radio"
                            name={`ans-${question.id}`}
                            checked={question.answerKey === opt}
                            onChange={() => updateQuestion(index, { answerKey: opt })}
                            title="Marcar como correcta"
                          />
                          <input
                            className="flex-1 rounded-md border border-slate-300 px-2 py-1.5 text-sm"
                            value={opt}
                            disabled={isTrueFalse}
                            onChange={(e) => updateOption(index, optIdx, e.target.value)}
                            placeholder={`Opción ${optIdx + 1}`}
                          />
                          {!isTrueFalse && (
                            <button
                              type="button"
                              className="text-xs text-red-400 hover:text-red-600"
                              onClick={() => removeOption(index, optIdx)}
                            >
                              ×
                            </button>
                          )}
                        </div>
                      ))}
                      {!isTrueFalse && (
                        <button
                          type="button"
                          className="text-xs text-blue-600 hover:underline"
                          onClick={() => addOption(index)}
                        >
                          + Agregar opción
                        </button>
                      )}
                    </div>
                  )}

                  <textarea
                    className="w-full rounded-md border border-slate-200 px-3 py-2 text-xs text-slate-500 focus:outline-none focus:ring-1 focus:ring-violet-300"
                    rows={1}
                    placeholder="Explicación (opcional)"
                    value={question.explanation ?? ""}
                    onChange={(e) =>
                      updateQuestion(index, { explanation: e.target.value })
                    }
                  />
                </div>
              );
            })}

            <div className="flex flex-wrap gap-2 pt-1">
              <button
                type="button"
                className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs hover:bg-slate-50"
                onClick={() => addQuestion("mc")}
              >
                + Opción múltiple
              </button>
              <button
                type="button"
                className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs hover:bg-slate-50"
                onClick={() => addQuestion("vf")}
              >
                + Verdadero/Falso
              </button>
              <button
                type="button"
                className="rounded-md border border-slate-300 bg-white px-3 py-1.5 text-xs hover:bg-slate-50"
                onClick={() => addQuestion("input")}
              >
                + Respuesta abierta
              </button>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════
            RIGHT PANEL — Preview
        ════════════════════════════════════════════════════════════ */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-4 space-y-4">
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-sm font-semibold text-slate-700">
                {generatorId ? "Vista previa del generador" : "Vista del alumno"}
              </h2>
              {generatorId && (
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">3 ejemplos</span>
                  <button
                    type="button"
                    className="text-xs text-violet-600 hover:underline"
                    onClick={() => {
                      if (generatorId && selectedSubtipo) {
                        generatePreview(generatorId, selectedSubtipo);
                      }
                    }}
                  >
                    ↺ Regenerar
                  </button>
                </div>
              )}
            </div>

            {instructions && (
              <div className="rounded-lg border border-blue-100 bg-blue-50 px-3 py-2 text-sm text-blue-800 leading-relaxed">
                {instructions}
              </div>
            )}

            {generatorId && previewQuestions.length > 0 && (
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-700 transition-colors"
                onClick={() => {
                  setQuestions((prev) => [
                    ...prev,
                    ...previewQuestions.map((q) => ({
                      ...q,
                      id: `q-${Date.now()}-${Math.random().toString(16).slice(2)}-${q.id}`,
                    })),
                  ]);
                }}
              >
                + Agregar {previewQuestions.length} preguntas al cuestionario
              </button>
            )}

            {previewStatus === "loading" ? (
              <div className="flex items-center gap-2 text-sm text-slate-400">
                <svg className="h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10"
                    stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                </svg>
                Generando ejemplos...
              </div>
            ) : previewStatus === "error" ? (
              <p className="text-sm text-red-400">
                No se pudo cargar el generador.
              </p>
            ) : previewList.length === 0 ? (
              <p className="text-sm text-slate-400">
                {generatorId
                  ? "Seleccioná un subtipo para ver ejemplos."
                  : "Agregá preguntas para ver la vista del alumno."}
              </p>
            ) : (
              <ol className="space-y-5">
                {previewList.map((question, index) => {
                  const hasOptions =
                    Array.isArray(question.options) && question.options.length > 0;
                  const qType =
                    question.questionType ?? (hasOptions ? "mc" : "input");

                  return (
                    <li key={question.id} className="space-y-2">
                      <p className="text-xs text-slate-400">Pregunta {index + 1}</p>
                      <p className="text-sm text-slate-800 leading-relaxed">
                        {generatorId ? (
                          question.prompt
                        ) : (
                          <PromptWithVariables text={question.prompt || ""} />
                        )}
                      </p>
                      {qType === "input" ? (
                        <div className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2">
                          <p className="text-xs text-slate-400 italic">Respuesta abierta</p>
                        </div>
                      ) : (
                        <ul className="space-y-1.5">
                          {(question.options ?? []).map((opt, optIdx) => (
                            <li
                              key={`prev-${question.id}-${optIdx}`}
                              className="flex items-center gap-2 text-sm text-slate-700"
                            >
                              <span className="w-5 h-5 flex-shrink-0 flex items-center justify-center rounded-full border border-slate-300 text-xs text-slate-500">
                                {String.fromCharCode(65 + optIdx)}
                              </span>
                              {opt || (
                                <span className="text-slate-300 italic text-xs">opción vacía</span>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ol>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
