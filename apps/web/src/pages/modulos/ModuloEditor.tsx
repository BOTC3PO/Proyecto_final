import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { z } from "zod";
import { useAuth } from "../../auth/use-auth";
import { apiGet, apiPatch, apiPost } from "../../lib/api";
import type { Module, ModuleDependency, ModuleQuiz } from "../../domain/module/module.types";
import TheoryItemCard, { type TheoryItem, type TheoryItemType } from "../../components/modulos/TheoryItemCard";
import QuizEditorManual from "../../components/modulos/QuizEditorManual";
import QuizEditorGenerated from "../../components/modulos/QuizEditorGenerated";
import QuizImportJson from "../../components/modulos/QuizImportJson";

type SaveStatus = "idle" | "loading" | "saving" | "saved" | "error";

type ModuleFormState = {
  title: string;
  description: string;
  subject: string;
  category: string;
  level: string;
  durationMinutes: number;
  visibility: Module["visibility"];
  dependencies: ModuleDependency[];
};

const THEORY_TYPE_OPTIONS: TheoryItemType[] = ["book", "link", "note", "article"];

const buildQuizId = () => `quiz-${Date.now()}-${Math.random().toString(16).slice(2)}`;
const isTemporaryQuizId = (quizId?: string) => Boolean(quizId && quizId.startsWith("quiz-"));

const ensureQuizDefaults = (quiz: ModuleQuiz): ModuleQuiz => {
  const base = {
    status: quiz.status ?? "draft",
    version: quiz.version ?? 1,
    visibility: quiz.visibility ?? "publico",
    type: quiz.type ?? "evaluacion",
    ...quiz,
  };
  return {
    ...base,
    generatorVersion:
      base.mode === "generated" ? (base.generatorVersion ?? 1) : base.generatorVersion,
  };
};

const manualQuestionSchema = z.object({
  questionType: z.enum(["mc", "vf", "input"]),
  options: z.array(z.string().min(1)).min(1),
  answerKey: z.union([z.string().min(1), z.array(z.string().min(1)).min(1)]),
});

const generatedQuizSchema = z.object({
  generatorId: z.string().min(1),
  params: z.record(z.unknown()),
  count: z.number().int().min(1),
});

export default function ModuloEditor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const isEditing = Boolean(id);
  const [status, setStatus] = useState<SaveStatus>(isEditing ? "loading" : "idle");
  const [message, setMessage] = useState("");
  const [validationErrors, setValidationErrors] = useState<string[]>([]);
  const [form, setForm] = useState<ModuleFormState>({
    title: "",
    description: "",
    subject: "",
    category: "",
    level: "",
    durationMinutes: 30,
    visibility: "publico",
    dependencies: [],
  });
  const [theoryItems, setTheoryItems] = useState<TheoryItem[]>([]);
  const [quizzes, setQuizzes] = useState<ModuleQuiz[]>([]);
  const [newTheoryItem, setNewTheoryItem] = useState<{ title: string; type: TheoryItemType; detail: string }>({
    title: "",
    type: "note",
    detail: "",
  });

  useEffect(() => {
    if (!isEditing || !id) return;
    let active = true;
    setStatus("loading");
    apiGet<Module>(`/api/modulos/${id}`)
      .then((module) => {
        if (!active) return;
        setForm({
          title: module.title,
          description: module.description,
          subject: module.subject,
          category: module.category,
          level: module.level,
          durationMinutes: module.durationMinutes,
          visibility: module.visibility,
          dependencies: module.dependencies ?? [],
        });
        const moduleTheoryItems =
          (module as Module & { theoryItems?: TheoryItem[] }).theoryItems ?? module.theoryBlocks ?? [];
        setTheoryItems(
          moduleTheoryItems.map((item) => ({
            id: item.id,
            title: item.title,
            type: (item.type as TheoryItemType) ?? "note",
            detail: item.detail,
          })),
        );
        const moduleQuizzes =
          (module as Module & { quizzes?: ModuleQuiz[] }).quizzes ??
          module.levels?.flatMap((level) => level.quizzes ?? []) ??
          [];
        setQuizzes(moduleQuizzes.map(ensureQuizDefaults));
        setStatus("idle");
      })
      .catch(() => {
        if (!active) return;
        setStatus("error");
        setMessage("No se pudo cargar el módulo.");
      });
    return () => {
      active = false;
    };
  }, [id, isEditing]);

  const isTeacher = user?.role === "TEACHER";

  const updateForm = <K extends keyof ModuleFormState>(key: K, value: ModuleFormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleAddTheoryItem = () => {
    if (!newTheoryItem.title.trim()) return;
    if ((newTheoryItem.type === "book" || newTheoryItem.type === "link") && !newTheoryItem.detail.trim()) return;
    const nextItem: TheoryItem = {
      id: `theory-${Date.now()}`,
      title: newTheoryItem.title.trim(),
      type: newTheoryItem.type,
      detail: newTheoryItem.detail.trim() || "Sin detalle adicional.",
    };
    setTheoryItems((prev) => [...prev, nextItem]);
    setNewTheoryItem({ title: "", type: newTheoryItem.type, detail: "" });
  };

  const updateTheoryItem = (id: string, patch: Partial<TheoryItem>) => {
    setTheoryItems((prev) => prev.map((item) => (item.id === id ? { ...item, ...patch } : item)));
  };

  const removeTheoryItem = (id: string) => {
    setTheoryItems((prev) => prev.filter((item) => item.id !== id));
  };

  const addQuiz = (mode: "manual" | "generated") => {
    const baseQuiz: ModuleQuiz = ensureQuizDefaults({
      id: buildQuizId(),
      title: "",
      type: "evaluacion",
      status: "draft",
      version: 1,
      visibility: "publico",
      mode,
      questions: mode === "manual" ? [] : undefined,
      generatorId: mode === "generated" ? "" : undefined,
      generatorVersion: mode === "generated" ? 1 : undefined,
      params: mode === "generated" ? {} : undefined,
      count: mode === "generated" ? 10 : undefined,
      seedPolicy: mode === "generated" ? "perAttempt" : undefined,
    });
    setQuizzes((prev) => [...prev, baseQuiz]);
  };

  const updateQuiz = (quizId: string, patch: Partial<ModuleQuiz>) => {
    setQuizzes((prev) =>
      prev.map((quiz) => (quiz.id === quizId ? ensureQuizDefaults({ ...quiz, ...patch }) : quiz)),
    );
  };

  const removeQuiz = (quizId: string) => {
    setQuizzes((prev) => prev.filter((quiz) => quiz.id !== quizId));
  };

  const handleImportQuizzes = (importedQuizzes: ModuleQuiz[]) => {
    setQuizzes((prev) => [...prev, ...importedQuizzes.map(ensureQuizDefaults)]);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("saving");
    setMessage("");
    setValidationErrors([]);
    try {
      if (!user?.id) {
        setStatus("error");
        setMessage("Necesitás iniciar sesión para guardar el módulo.");
        return;
      }

      const quizErrors: string[] = [];
      quizzes.forEach((quiz, quizIndex) => {
        const quizLabel = quiz.title.trim() || `Cuestionario ${quizIndex + 1}`;
        if (quiz.mode === "manual") {
          const questions = quiz.questions ?? [];
          questions.forEach((question, questionIndex) => {
            const result = manualQuestionSchema.safeParse(question);
            if (!result.success) {
              quizErrors.push(
                `${quizLabel}: la pregunta ${questionIndex + 1} requiere tipo de pregunta, opciones y respuesta.`,
              );
            }
          });
        }

        if (quiz.mode === "generated") {
          const result = generatedQuizSchema.safeParse({
            generatorId: quiz.generatorId,
            params: quiz.params,
            count: quiz.count,
          });
          if (!result.success) {
            quizErrors.push(
              `${quizLabel}: indicá un generador válido, parámetros y una cantidad mayor a cero.`,
            );
          }
        }
      });

      if (quizErrors.length > 0) {
        setStatus("error");
        setMessage("Revisá los cuestionarios antes de guardar.");
        setValidationErrors(quizErrors);
        return;
      }

      const basePayload = {
        title: form.title,
        description: form.description,
        subject: form.subject,
        category: form.category,
        level: form.level,
        durationMinutes: Number(form.durationMinutes) || 1,
        visibility: form.visibility,
        dependencies: form.dependencies,
        theoryItems: theoryItems.map((item) => ({
          id: item.id,
          title: item.title,
          type: item.type,
          detail: item.detail,
        })),
        quizzes: quizzes.map((quiz) => {
          const { id: quizId, ...rest } = quiz;
          const payloadQuiz = {
            ...rest,
            title: quiz.title.trim() || `Cuestionario ${quiz.id.slice(-4)}`,
            questions: quiz.mode === "manual" ? quiz.questions ?? [] : undefined,
            generatorId: quiz.mode === "generated" ? quiz.generatorId : undefined,
            generatorVersion: quiz.mode === "generated" ? quiz.generatorVersion : undefined,
            params: quiz.mode === "generated" ? quiz.params : undefined,
            count: quiz.mode === "generated" ? quiz.count : undefined,
            seedPolicy: quiz.mode === "generated" ? quiz.seedPolicy ?? "perAttempt" : undefined,
            fixedSeed:
              quiz.mode === "generated" && quiz.seedPolicy === "fixed" ? quiz.fixedSeed : undefined,
          };

          if (!isTemporaryQuizId(quizId)) {
            return { ...payloadQuiz, id: quizId };
          }

          return payloadQuiz;
        }),
        updatedAt: new Date().toISOString(),
      };

      if (isEditing && id) {
        await apiPatch(`/api/modulos/${id}`, basePayload);
        setStatus("saved");
        setMessage("Cambios guardados.");
        setValidationErrors([]);
      } else {
        await apiPost<Module>("/api/modulos", basePayload);
        setStatus("saved");
        setMessage("Módulo creado correctamente.");
        setValidationErrors([]);
        navigate("/modulos", { replace: true });
      }
    } catch {
      setStatus("error");
      setMessage("No se pudo guardar el módulo.");
    }
  };

  const quizCountLabel = useMemo(() => {
    if (quizzes.length === 0) return "Sin cuestionarios";
    return `${quizzes.length} cuestionario${quizzes.length === 1 ? "" : "s"}`;
  }, [quizzes.length]);

  return (
    <main className="flex-1">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold text-gray-900">
            {isEditing ? "Editar módulo" : "Crear módulo"}
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Cargá teoría, cuestionarios manuales o generados para construir la experiencia del módulo.
          </p>
        </header>

        {status === "loading" ? (
          <div className="rounded-lg border border-dashed border-gray-200 bg-gray-50 p-6 text-sm text-gray-600">
            Cargando módulo...
          </div>
        ) : (
          <form className="space-y-8" onSubmit={handleSubmit}>
            <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm space-y-4">
              <h2 className="text-lg font-semibold text-gray-900">Información general</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="text-sm font-medium text-gray-700">
                  Título
                  <input
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                    value={form.title}
                    onChange={(event) => updateForm("title", event.target.value)}
                    required
                  />
                </label>
                <label className="text-sm font-medium text-gray-700">
                  Categoría
                  <input
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                    value={form.category}
                    onChange={(event) => updateForm("category", event.target.value)}
                    required
                  />
                </label>
              </div>

              <label className="text-sm font-medium text-gray-700">
                Descripción
                <textarea
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                  rows={3}
                  value={form.description}
                  onChange={(event) => updateForm("description", event.target.value)}
                  required
                />
              </label>

              <div className="grid gap-4 md:grid-cols-4">
                <label className="text-sm font-medium text-gray-700">
                  Materia
                  <input
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                    value={form.subject}
                    onChange={(event) => updateForm("subject", event.target.value)}
                    required
                  />
                </label>
                <label className="text-sm font-medium text-gray-700">
                  Nivel
                  <input
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                    value={form.level}
                    onChange={(event) => updateForm("level", event.target.value)}
                    required
                  />
                </label>
                <label className="text-sm font-medium text-gray-700">
                  Duración (min)
                  <input
                    type="number"
                    min={1}
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                    value={form.durationMinutes}
                    onChange={(event) => updateForm("durationMinutes", Number(event.target.value))}
                  />
                </label>
                <label className="text-sm font-medium text-gray-700">
                  Visibilidad
                  <select
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                    value={form.visibility}
                    onChange={(event) => updateForm("visibility", event.target.value as Module["visibility"])}
                  >
                    <option value="publico">Público</option>
                    <option value="privado">Privado</option>
                    <option value="escuela">Escuela</option>
                  </select>
                </label>
              </div>
            </section>

            <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Teoría</h2>
                <span className="text-xs text-gray-500">{theoryItems.length} recursos</span>
              </div>

              <div className="grid gap-4 md:grid-cols-[1fr_160px]">
                <input
                  className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                  placeholder="Título del recurso"
                  value={newTheoryItem.title}
                  onChange={(event) => setNewTheoryItem((prev) => ({ ...prev, title: event.target.value }))}
                />
                <select
                  className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                  value={newTheoryItem.type}
                  onChange={(event) =>
                    setNewTheoryItem((prev) => ({ ...prev, type: event.target.value as TheoryItemType }))
                  }
                >
                  {THEORY_TYPE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option === "book" ? "Libro" : option === "link" ? "Enlace" : option === "note" ? "Nota" : "Artículo"}
                    </option>
                  ))}
                </select>
                <textarea
                  className="md:col-span-2 rounded-md border border-gray-300 px-3 py-2 text-sm"
                  rows={2}
                  placeholder={
                    newTheoryItem.type === "link" || newTheoryItem.type === "book"
                      ? "URL o ruta interna"
                      : "Resumen o contenido"
                  }
                  value={newTheoryItem.detail}
                  onChange={(event) => setNewTheoryItem((prev) => ({ ...prev, detail: event.target.value }))}
                />
              </div>

              <button
                type="button"
                className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                onClick={handleAddTheoryItem}
              >
                + Agregar teoría
              </button>

              {theoryItems.length === 0 ? (
                <p className="text-sm text-gray-500">No hay elementos teóricos cargados.</p>
              ) : (
                <div className="grid gap-4 md:grid-cols-2">
                  {theoryItems.map((item) => (
                    <div key={item.id} className="space-y-2">
                      <TheoryItemCard item={item} />
                      <div className="flex flex-col gap-2">
                        <input
                          className="rounded-md border border-gray-300 px-2 py-2 text-xs"
                          value={item.title}
                          onChange={(event) => updateTheoryItem(item.id, { title: event.target.value })}
                        />
                        <textarea
                          className="rounded-md border border-gray-300 px-2 py-2 text-xs"
                          rows={2}
                          value={item.detail}
                          onChange={(event) => updateTheoryItem(item.id, { detail: event.target.value })}
                        />
                        <button
                          type="button"
                          className="self-start text-xs text-red-500 hover:underline"
                          onClick={() => removeTheoryItem(item.id)}
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>

            <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Cuestionarios</h2>
                <span className="text-xs text-gray-500">{quizCountLabel}</span>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                  onClick={() => addQuiz("manual")}
                >
                  + Manual
                </button>
                <button
                  type="button"
                  className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                  onClick={() => addQuiz("generated")}
                >
                  + Generado
                </button>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <QuizImportJson onImportQuizzes={handleImportQuizzes} />
              </div>

              {quizzes.length === 0 ? (
                <p className="text-sm text-gray-500">No hay cuestionarios configurados.</p>
              ) : (
                <div className="space-y-6">
                  {quizzes.map((quiz) => (
                    <div key={quiz.id} className="rounded-lg border border-gray-200 p-4 space-y-4">
                      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div className="grid flex-1 gap-3 md:grid-cols-3">
                          <label className="text-xs font-medium text-gray-600">
                            Título
                            <input
                              className="mt-1 w-full rounded-md border border-gray-300 px-2 py-2 text-sm"
                              value={quiz.title}
                              onChange={(event) => updateQuiz(quiz.id, { title: event.target.value })}
                            />
                          </label>
                          <label className="text-xs font-medium text-gray-600">
                            Tipo
                            <select
                              className="mt-1 w-full rounded-md border border-gray-300 px-2 py-2 text-sm"
                              value={quiz.type}
                              onChange={(event) =>
                                updateQuiz(quiz.id, { type: event.target.value as ModuleQuiz["type"] })
                              }
                            >
                              <option value="practica">Práctica</option>
                              <option value="evaluacion">Evaluación</option>
                              <option value="competencia">Competencia</option>
                            </select>
                          </label>
                          <label className="text-xs font-medium text-gray-600">
                            Visibilidad
                            <select
                              className="mt-1 w-full rounded-md border border-gray-300 px-2 py-2 text-sm"
                              value={quiz.visibility}
                              onChange={(event) =>
                                updateQuiz(quiz.id, { visibility: event.target.value as ModuleQuiz["visibility"] })
                              }
                            >
                              <option value="publico">Público</option>
                              <option value="escuela">Escuela</option>
                            </select>
                          </label>
                        </div>
                        <button
                          type="button"
                          className="text-xs text-red-500 hover:underline"
                          onClick={() => removeQuiz(quiz.id)}
                        >
                          Eliminar cuestionario
                        </button>
                      </div>

                      {quiz.mode === "generated" ? (
                        <QuizEditorGenerated
                          generatorId={quiz.generatorId ?? ""}
                          generatorVersion={quiz.generatorVersion ?? 1}
                          params={(quiz.params as Record<string, unknown>) ?? {}}
                          count={quiz.count ?? 0}
                          onChange={(next) => updateQuiz(quiz.id, { ...next })}
                          showPreview={isTeacher}
                        />
                      ) : (
                        <QuizEditorManual
                          questions={quiz.questions ?? []}
                          onChange={(next) => updateQuiz(quiz.id, { questions: next })}
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </section>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="submit"
                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white disabled:opacity-70"
                disabled={status === "saving"}
              >
                {status === "saving" ? "Guardando..." : isEditing ? "Guardar cambios" : "Crear módulo"}
              </button>
              <div className="flex flex-col gap-2">
                {message ? (
                  <span
                    className={`text-sm ${
                      status === "saved" ? "text-emerald-600" : status === "error" ? "text-red-600" : "text-gray-600"
                    }`}
                  >
                    {message}
                  </span>
                ) : null}
                {validationErrors.length > 0 ? (
                  <ul className="list-disc space-y-1 pl-5 text-sm text-red-600">
                    {validationErrors.map((error) => (
                      <li key={error}>{error}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </form>
        )}
      </div>
    </main>
  );
}
