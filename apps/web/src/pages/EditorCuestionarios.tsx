import { useEffect, useState } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import { apiGet } from "../lib/api";
import type { ModuleQuizQuestion } from "../domain/module/module.types";
import type { GeneratorDescriptor, Ejercicio } from "../generadoresV2/core/types";
import { DeterministicPrng } from "../generadoresV2/core/prng";
import { getStaticCatalog, getDescriptoresFromModule } from "../generadoresV2/catalog";
import type { CatalogItem } from "../generadoresV2/catalog";
import GeneradorSelector from "../components/modulos/GeneradorSelector";
import type { GeneradorConfig } from "../components/modulos/GeneradorSelector";
import VisualizerRenderer from "../components/modulos/VisualizerRenderer";
import BancoCuestionarios from "../components/modulos/BancoCuestionarios";
import { ejercicioToQuestion } from "../domain/quiz/ejercicioToQuestion";

// ── Types ─────────────────────────────────────────────────────────────────────

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

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

// ── Helpers ───────────────────────────────────────────────────────────────────

const createQuestion = (
  questionType: ModuleQuizQuestion["questionType"]
): ModuleQuizQuestion => {
  const base = {
    id: `q-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    prompt: "",
    questionType,
    explanation: "",
  };
  if (questionType === "input") return base as ModuleQuizQuestion;
  return {
    ...base,
    options: questionType === "vf" ? ["Verdadero", "Falso"] : ["", ""],
    answerKey: "",
  };
};

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

  // Tab state — honor ?mode=generated URL param
  const modeParam = searchParams.get("mode");
  const [modoEditor, setModoEditor] = useState<"manual" | "automatico" | "banco">(
    modeParam === "generated" ? "automatico" : "manual"
  );

  // Generator state (for variables panel)
  const [generatorId, setGeneratorId] = useState("");
  const [selectedSubtipo, setSelectedSubtipo] = useState("");
  const [docs, setDocs] = useState<GeneratorDocs | null>(null);
  const [lastGeneratorConfig, setLastGeneratorConfig] = useState<GeneradorConfig | null>(null);

  // Questions and preview
  const [questions, setQuestions] = useState<ModuleQuizQuestion[]>([]);
  const [previewQuestions, setPreviewQuestions] = useState<ModuleQuizQuestion[]>([]);
  const [catalog, setCatalog] = useState<CatalogItem[]>([]);

  const [activeQuestionIndex, setActiveQuestionIndex] = useState<number | null>(null);
  const [quizTitle, setQuizTitle] = useState("");
  const [instructions, setInstructions] = useState("");
  const [exportStatus, setExportStatus] = useState<"idle" | "copied" | "error">("idle");
  const [quizType, setQuizType] = useState<"practica" | "formal">("formal");
  const [quizVisibility, setQuizVisibility] = useState<"publico" | "escuela">("publico");
  const [previewStatus, setPreviewStatus] =
    useState<"idle" | "loading" | "ready" | "error">("idle");
  const [isGenerating, setIsGenerating] = useState(false);

  // Load catalog on mount
  useEffect(() => {
    apiGet<{ items: CatalogItem[] }>("/api/generators")
      .then((data) => {
        const items = data.items ?? [];
        setCatalog(items.length > 0 ? items : getStaticCatalog());
      })
      .catch(() => setCatalog(getStaticCatalog()));
  }, []);

  // ── Generate from config (2b) ───────────────────────────────────────────────

  const generateFromConfig = async (
    config: GeneradorConfig,
    mode: "preview" | "add"
  ): Promise<ModuleQuizQuestion[]> => {
    const [materia] = config.generatorId.split("/");
    const mod = await loadGeneratorModule(materia);
    const prng = config.semilla
      ? new DeterministicPrng(hashString(config.semilla))
      : new DeterministicPrng(Date.now());
    const descriptores: GeneratorDescriptor[] = getDescriptoresFromModule(mod, prng);
    const descriptor = descriptores.find((d) => d.id === config.generatorId);
    if (!descriptor) throw new Error(`Generador no encontrado: ${config.generatorId}`);

    const subtiposToUse =
      config.subtipos.length > 0 ? config.subtipos : descriptor.subtipos;

    const ejercicios: Ejercicio[] = Array.from({ length: config.cantidad }, (_, i) => {
      const subtipo = subtiposToUse[i % subtiposToUse.length];
      const template = config.enunciadosPersonalizados?.[subtipo];
      return descriptor.generate(config.dificultad, prng, subtipo, template);
    });

    const qs = ejercicios.map((e) => ({
      ...ejercicioToQuestion(e),
      id: `q-${Date.now()}-${Math.random().toString(16).slice(2)}-${e.id}`,
    }));

    if (mode === "add") {
      setQuestions((prev) => [...prev, ...qs]);
    }
    return qs;
  };

  const handleGenerate = async (config: GeneradorConfig) => {
    setIsGenerating(true);
    setPreviewStatus("loading");
    setPreviewQuestions([]);
    try {
      const qs = await generateFromConfig(config, "add");
      setPreviewQuestions(qs);
      setPreviewStatus("ready");
      // Update variable docs panel and save config for export
      setGeneratorId(config.generatorId);
      setSelectedSubtipo(config.subtipos[0] ?? "");
      setLastGeneratorConfig(config);
    } catch {
      setPreviewStatus("error");
    } finally {
      setIsGenerating(false);
    }
  };

  const handlePreview = async (config: GeneradorConfig) => {
    setPreviewStatus("loading");
    setPreviewQuestions([]);
    try {
      const qs = await generateFromConfig(config, "preview");
      setPreviewQuestions(qs);
      setPreviewStatus("ready");
      setGeneratorId(config.generatorId);
      setSelectedSubtipo(config.subtipos[0] ?? "");
      setLastGeneratorConfig(config);
    } catch {
      setPreviewStatus("error");
    }
  };

  // ── Legacy preview (kept for backward compat with variables panel) ──────────

  const generatePreview = async (genId: string, subtipo: string) => {
    const [materia] = genId.split("/");
    setPreviewStatus("loading");
    setPreviewQuestions([]);
    try {
      const mod = await loadGeneratorModule(materia);
      const prng = new DeterministicPrng(42);
      const descriptores: GeneratorDescriptor[] = getDescriptoresFromModule(mod, prng);
      const descriptor = descriptores.find((d) => d.id === genId);
      if (!descriptor) {
        setPreviewStatus("idle");
        return;
      }
      const ejercicios: Ejercicio[] = Array.from({ length: 3 }, () =>
        descriptor.generate("basico", prng, subtipo || undefined)
      );
      setPreviewQuestions(ejercicios.map(ejercicioToQuestion));
      setPreviewStatus("ready");
    } catch {
      setPreviewStatus("error");
    }
  };

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

  // Preview panel shows generated preview questions when available, else manual questions
  const previewList = previewQuestions.length > 0 ? previewQuestions : questions;

  // ── Export ──────────────────────────────────────────────────────────────────

  const buildExportJson = () => ({
    title: quizTitle.trim() || "Cuestionario sin título",
    type: quizType,
    visibility: quizVisibility,
    instructions: instructions.trim() || undefined,
    ...(lastGeneratorConfig?.enunciadosPersonalizados && {
      params: {
        enunciadosPersonalizados: lastGeneratorConfig.enunciadosPersonalizados,
        dificultad: lastGeneratorConfig.dificultad,
        subtipos: lastGeneratorConfig.subtipos,
      },
    }),
    questions: questions.map((q) => ({
      prompt: q.prompt,
      questionType: q.questionType,
      options:
        q.questionType === "input" || q.questionType === "completar"
          ? undefined
          : q.options?.length
          ? q.options
          : undefined,
      answerKey: q.answerKey || undefined,
      explanation: q.explanation || undefined,
      focus: q.focus || undefined,
      toleranciaRelativa: q.toleranciaRelativa,
      unidades: q.unidades,
      datos: q.datos,
      pasos: q.pasos?.length ? q.pasos : undefined,
      visualContext:
        q.visualContext ||
        (q.visualSpec ? JSON.stringify({ spec: q.visualSpec }) : undefined),
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
        },
      },
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
    <div className="min-h-screen flex flex-col bg-[var(--c-bg)]">
      {/* ── Header ─────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-10 bg-[var(--c-surface)] border-b border-[var(--c-border)]">
        <div className="flex items-center gap-3 px-4 sm:px-6 py-3">
          <Link
            className="text-sm text-[var(--c-primary)] hover:underline whitespace-nowrap"
            to={returnTo ?? "/modulos/crear"}
          >
            {isEmbedded ? "← Volver al módulo" : "← Volver"}
          </Link>
          <span className="hidden sm:block text-sm font-semibold text-[var(--c-muted)] whitespace-nowrap">
            Editor de cuestionarios
          </span>
          <input
            className="flex-1 min-w-0 rounded-md border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-1.5 text-sm focus:outline-none focus:border-[var(--c-primary)]"
            placeholder="Título del cuestionario..."
            value={quizTitle}
            onChange={(e) => setQuizTitle(e.target.value)}
          />
          <select
            value={quizType}
            onChange={(e) => setQuizType(e.target.value as "practica" | "formal")}
            className="rounded-lg border border-[var(--c-border)] px-3 py-2 text-sm bg-[var(--c-bg)] text-[var(--c-text)]"
          >
            <option value="formal">Evaluación formal</option>
            <option value="practica">Práctica</option>
          </select>
          <select
            value={quizVisibility}
            onChange={(e) => setQuizVisibility(e.target.value as "publico" | "escuela")}
            className="rounded-lg border border-[var(--c-border)] px-3 py-2 text-sm bg-[var(--c-bg)] text-[var(--c-text)]"
          >
            <option value="publico">Público</option>
            <option value="escuela">Escuela</option>
          </select>
          {!isEmbedded && (
            <button
              onClick={handleDownload}
              disabled={questions.length === 0}
              className="rounded-lg bg-[var(--c-primary)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-50 transition-opacity"
            >
              Descargar JSON
            </button>
          )}
          <button
            onClick={handleCopy}
            disabled={questions.length === 0}
            className="rounded-lg border border-[var(--c-border)] bg-[var(--c-surface)] px-4 py-2 text-sm font-semibold text-[var(--c-text)] hover:bg-[var(--c-bg)] disabled:opacity-50 transition-colors"
          >
            {exportStatus === "copied" ? "✓ Copiado" : "Copiar JSON"}
          </button>
          {isEmbedded && (
            <button
              onClick={handleAddToModule}
              disabled={questions.length === 0}
              className="rounded-lg bg-[var(--c-primary)] px-4 py-2 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-50 transition-opacity"
            >
              Agregar al módulo
            </button>
          )}
        </div>
      </header>

      {/* ── Banner nuevo editor ─────────────────────────────────────── */}
      <div className="flex items-center justify-center gap-2 px-4 py-1.5 bg-[color-mix(in_srgb,var(--c-primary)_8%,transparent)] border-b border-[var(--c-border)] text-xs text-[var(--c-primary)]">
        <span>Hay un editor nuevo disponible.</span>
        <Link
          to="/profesor/editor-cuestionarios-v2"
          className="font-semibold underline hover:opacity-80"
        >
          ✨ Probar el nuevo editor
        </Link>
      </div>

      {/* ── Two-panel layout ────────────────────────────────────────── */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[var(--c-border)] overflow-hidden">
        {/* ════════════════════════════════════════════════════════════
            LEFT PANEL — Editor
        ════════════════════════════════════════════════════════════ */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-4">
          {/* Mode tab bar (6a) */}
          <div className="flex gap-1 border-b border-[var(--c-border)] pb-2 mb-4">
            {(["manual", "automatico", "banco"] as const).map((modo) => (
              <button
                key={modo}
                onClick={() => setModoEditor(modo)}
                className={`px-3 py-1.5 text-xs rounded-md font-medium transition-colors ${
                  modoEditor === modo
                    ? "bg-[var(--c-primary)] text-white"
                    : "text-[var(--c-muted)] hover:bg-[var(--c-bg)]"
                }`}
              >
                {modo === "manual"
                  ? "Manual"
                  : modo === "automatico"
                  ? "Automático"
                  : "Banco"}
              </button>
            ))}
          </div>

          {/* ── Manual mode ────────────────────────────────────────── */}
          {modoEditor === "manual" && (
            <>
              {/* Variables panel (shown when a generator is active) */}
              {generatorId && (
                <div className="bg-[var(--c-surface)] rounded-xl border border-[var(--c-border)] p-4 space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="text-sm font-semibold text-[var(--c-text)]">Generador activo</h2>
                    <div className="flex items-center gap-2">
                      <select
                        className="rounded-md border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-2 py-1 text-xs focus:outline-none focus:border-[var(--c-primary)]"
                        value={generatorId}
                        onChange={(e) => handleGeneratorChange(e.target.value)}
                      >
                        <option value="">Sin generador</option>
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
                        <select
                          className="rounded-md border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-2 py-1 text-xs focus:outline-none focus:border-[var(--c-primary)]"
                          value={selectedSubtipo}
                          onChange={(e) => {
                            setSelectedSubtipo(e.target.value);
                            if (generatorId && e.target.value)
                              generatePreview(generatorId, e.target.value);
                          }}
                        >
                          {catalogItem.subtipos.map((sub) => (
                            <option key={sub.id} value={sub.id}>
                              {sub.label}
                            </option>
                          ))}
                        </select>
                      )}
                    </div>
                  </div>

                  {Object.keys(currentSubtipoVars).length > 0 && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-xs text-[var(--c-text)]">Variables insertables</p>
                        {activeQuestionIndex === null ? (
                          <p className="text-xs text-[var(--c-muted)]">
                            Hacé foco en una pregunta para insertar
                          </p>
                        ) : (
                          <p className="text-xs text-[var(--c-primary)]">
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
                </div>
              )}

              {/* Instructions */}
              <div className="bg-[var(--c-surface)] rounded-xl border border-[var(--c-border)] p-4 space-y-2">
                <label className="text-sm font-semibold text-[var(--c-text)]">
                  Instrucciones (opcional)
                </label>
                <textarea
                  className="w-full rounded-md border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                  rows={2}
                  placeholder="Instrucciones para el alumno antes de comenzar..."
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                />
              </div>

              {/* Question list */}
              <div className="bg-[var(--c-surface)] rounded-xl border border-[var(--c-border)] p-4 space-y-4">
                <h2 className="text-sm font-semibold text-[var(--c-text)]">
                  Preguntas ({questions.length})
                </h2>

                {questions.length === 0 && (
                  <p className="text-sm text-[var(--c-muted)]">
                    Todavía no hay preguntas. Usá los botones de abajo para agregar.
                  </p>
                )}

                {questions.map((question, index) => {
                  const qType = question.questionType ?? "mc";
                  const showOptions = qType !== "input" && qType !== "completar";
                  const isTrueFalse = qType === "vf";
                  const isActive = activeQuestionIndex === index;

                  // Origin badge (6b)
                  const origen = question.focus?.startsWith("banco:")
                    ? "banco"
                    : question.datos !== undefined
                    ? "auto"
                    : "manual";
                  const origenBadge = {
                    banco: "bg-emerald-100 text-emerald-800 border-emerald-200",
                    auto: "bg-blue-100 text-blue-800 border-blue-200",
                    manual: "bg-gray-100 text-gray-600 border-gray-200",
                  }[origen];
                  const origenLabel = { banco: "Banco", auto: "Auto", manual: "Manual" }[origen];

                  return (
                    <div
                      key={question.id}
                      className={`rounded-lg border p-3 space-y-3 transition-colors ${
                        isActive ? "border-[var(--c-primary)]" : "border-[var(--c-border)]"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-[var(--c-muted)]">
                            Pregunta {index + 1}
                          </span>
                          <span
                            className={`text-[10px] font-medium border rounded px-1.5 py-0.5 ${origenBadge}`}
                          >
                            {origenLabel}
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

                      <textarea
                        className="w-full rounded-md border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] placeholder:text-[var(--c-muted)] px-3 py-2 text-sm focus:outline-none focus:border-[var(--c-primary)]"
                        rows={2}
                        placeholder="Enunciado de la pregunta"
                        value={question.prompt}
                        onFocus={() => setActiveQuestionIndex(index)}
                        onChange={(e) => updateQuestion(index, { prompt: e.target.value })}
                      />

                      <div className="flex items-center gap-3">
                        <label className="text-xs font-medium text-[var(--c-text)]">
                          Tipo
                          <select
                            className="ml-2 rounded-md border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-2 py-1 text-xs"
                            value={qType}
                            onChange={(e) => {
                              const nextType =
                                e.target.value as ModuleQuizQuestion["questionType"];
                              const options =
                                nextType === "vf"
                                  ? ["Verdadero", "Falso"]
                                  : nextType === "input" || nextType === "completar"
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

                      {/* Numeric tolerance info (3c) */}
                      {qType === "input" && question.toleranciaRelativa !== undefined && (
                        <div className="flex items-center gap-3 text-xs text-[var(--c-muted)]">
                          <span>
                            Tolerancia: ±{Math.round(question.toleranciaRelativa * 100)}%
                          </span>
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

                      {qType === "input" && (
                        <label className="block text-xs font-medium text-[var(--c-text)]">
                          Respuesta esperada
                          <input
                            className="mt-1 w-full rounded-md border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-2 py-1.5 text-sm focus:outline-none focus:border-[var(--c-primary)]"
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
                          <p className="text-xs font-medium text-[var(--c-text)]">
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
                                className="flex-1 rounded-md border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-text)] px-2 py-1.5 text-sm focus:outline-none focus:border-[var(--c-primary)]"
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
                              className="text-xs text-[var(--c-primary)] hover:underline"
                              onClick={() => addOption(index)}
                            >
                              + Agregar opción
                            </button>
                          )}
                        </div>
                      )}

                      <textarea
                        className="w-full rounded-md border border-[var(--c-border)] bg-[var(--c-bg)] text-[var(--c-muted)] px-3 py-2 text-xs focus:outline-none focus:border-[var(--c-primary)]"
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
                    className="rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-1.5 text-xs hover:bg-[var(--c-bg)] transition-colors"
                    onClick={() => addQuestion("mc")}
                  >
                    + Opción múltiple
                  </button>
                  <button
                    type="button"
                    className="rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-1.5 text-xs hover:bg-[var(--c-bg)] transition-colors"
                    onClick={() => addQuestion("vf")}
                  >
                    + Verdadero/Falso
                  </button>
                  <button
                    type="button"
                    className="rounded-md border border-[var(--c-border)] bg-[var(--c-surface)] text-[var(--c-text)] px-3 py-1.5 text-xs hover:bg-[var(--c-bg)] transition-colors"
                    onClick={() => addQuestion("input")}
                  >
                    + Respuesta abierta
                  </button>
                </div>
              </div>
            </>
          )}

          {/* ── Automático mode ─────────────────────────────────────── */}
          {modoEditor === "automatico" && (
            <div className="bg-[var(--c-surface)] rounded-xl border border-[var(--c-border)] p-4 space-y-4">
              <h2 className="text-sm font-semibold text-[var(--c-text)]">Generador automático</h2>
              <GeneradorSelector
                catalog={catalog}
                onGenerate={handleGenerate}
                onPreview={handlePreview}
                isGenerating={isGenerating}
              />
              {previewStatus === "ready" && previewQuestions.length > 0 && (
                <p className="text-xs text-[var(--c-primary)]">
                  {previewQuestions.length} preguntas generadas y agregadas al cuestionario.
                </p>
              )}
            </div>
          )}

          {/* ── Banco mode ───────────────────────────────────────────── */}
          {modoEditor === "banco" && (
            <div className="bg-[var(--c-surface)] rounded-xl border border-[var(--c-border)] p-4 space-y-4">
              <h2 className="text-sm font-semibold text-[var(--c-text)]">
                Banco de cuestionarios
              </h2>
              <BancoCuestionarios
                onImport={(imported, source) => {
                  setQuestions((prev) => [
                    ...prev,
                    ...imported.map((q) => ({ ...q, focus: `banco:${source}` })),
                  ]);
                }}
              />
            </div>
          )}
        </div>

        {/* ════════════════════════════════════════════════════════════
            RIGHT PANEL — Preview
        ════════════════════════════════════════════════════════════ */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-4">
          <div className="bg-[var(--c-surface)] rounded-xl border border-[var(--c-border)] p-4 space-y-4">
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-sm font-semibold text-[var(--c-text)]">
                Vista del alumno
                {questions.length > 0 && (
                  <span className="ml-2 text-xs font-normal text-[var(--c-muted)]">
                    ({questions.length} preguntas)
                  </span>
                )}
              </h2>
              {previewQuestions.length > 0 && modoEditor === "automatico" && (
                <button
                  type="button"
                  className="text-xs text-[var(--c-muted)] hover:underline"
                  onClick={() => setPreviewQuestions([])}
                >
                  Limpiar preview
                </button>
              )}
            </div>

            {instructions && (
              <div className="rounded-lg border border-[var(--c-border)] bg-[var(--c-bg)] px-3 py-2 text-sm text-[var(--c-text)] leading-relaxed">
                {instructions}
              </div>
            )}

            {previewStatus === "loading" ? (
              <div className="flex items-center gap-2 text-sm text-[var(--c-muted)]">
                <svg
                  className="h-4 w-4 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Generando ejemplos...
              </div>
            ) : previewList.length === 0 ? (
              <p className="text-sm text-[var(--c-muted)]">
                Agregá preguntas o generá con el modo Automático para ver la vista del alumno.
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
                      <p className="text-xs text-[var(--c-muted)]">Pregunta {index + 1}</p>

                      {/* VisualSpec (3d) */}
                      {question.visualSpec && (
                        <div className="rounded-lg border border-[var(--c-border)] overflow-hidden">
                          <VisualizerRenderer spec={question.visualSpec} />
                        </div>
                      )}

                      <p className="text-sm text-[var(--c-text)] leading-relaxed">
                        <PromptWithVariables text={question.prompt || ""} />
                      </p>

                      {qType === "input" || qType === "completar" ? (
                        <div className="rounded-md border border-[var(--c-border)] bg-[var(--c-bg)] px-3 py-2">
                          <p className="text-xs text-[var(--c-muted)] italic">
                            {qType === "completar" ? "Completar la respuesta" : "Respuesta abierta"}
                          </p>
                        </div>
                      ) : (
                        <ul className="space-y-1.5">
                          {(question.options ?? []).map((opt, optIdx) => (
                            <li
                              key={`prev-${question.id}-${optIdx}`}
                              className="flex items-center gap-2 text-sm text-[var(--c-text)]"
                            >
                              <span className="w-5 h-5 flex-shrink-0 flex items-center justify-center rounded-full border border-[var(--c-border)] text-xs text-[var(--c-muted)]">
                                {String.fromCharCode(65 + optIdx)}
                              </span>
                              {opt || (
                                <span className="text-[var(--c-muted)] italic text-xs">
                                  opción vacía
                                </span>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Steps collapsible (3c) */}
                      {question.pasos && question.pasos.length > 0 && (
                        <details className="text-xs">
                          <summary className="cursor-pointer text-[var(--c-primary)] hover:underline">
                            Ver resolución
                          </summary>
                          <ol className="mt-2 pl-4 space-y-1 text-[var(--c-muted)]">
                            {question.pasos.map((paso, pi) => (
                              <li key={pi} className="list-decimal">
                                {paso}
                              </li>
                            ))}
                          </ol>
                        </details>
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
