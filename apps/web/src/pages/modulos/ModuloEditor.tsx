import { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { z } from "zod";
import { useAuth } from "../../auth/use-auth";
import { apiGet, apiPatch, apiPost } from "../../lib/api";
import type { Module, ModuleDependency, ModuleQuiz } from "../../domain/module/module.types";
import { getSubjectCapabilities, MODULE_SUBJECT_CAPABILITIES } from "../../domain/module/module.types";
import TheoryItemCard, { type TheoryItem } from "../../components/modulos/TheoryItemCard";
import TheorySlideEditor, { detailToSlides, slidesToDetail } from "../../components/modulos/TheorySlideEditor";
import HerramientaPicker from "../../components/modulos/HerramientaPicker";
import QuizEditorManual from "../../components/modulos/QuizEditorManual";
import QuizEditorGenerated from "../../components/modulos/QuizEditorGenerated";
import QuizImportJson from "../../components/modulos/QuizImportJson";
import { fetchBooks } from "../../bookEditor/services/booksApi";

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

type BookResult = { id: string; title: string };
type TuesdayResult = { id: string; title: string };

const buildQuizId = () => `quiz-${Date.now()}-${Math.random().toString(16).slice(2)}`;
const isTemporaryQuizId = (quizId?: string) => Boolean(quizId && quizId.startsWith("quiz-"));

const SUBJECT_OPTIONS = Object.keys(MODULE_SUBJECT_CAPABILITIES);

const ensureQuizDefaults = (quiz: ModuleQuiz): ModuleQuiz => {
  const merged = {
    ...quiz,
    status: quiz.status ?? ("draft" as const),
    version: quiz.version ?? 1,
    visibility: quiz.visibility ?? ("publico" as const),
    type: quiz.type ?? ("evaluacion" as const),
  };
  return {
    ...merged,
    generatorVersion:
      merged.mode === "generated" ? (merged.generatorVersion ?? 1) : merged.generatorVersion,
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

// Types that need a picker (not a plain textarea)
const isBookType = (t: string) => t === "book" || t === "Libro";
const isLinkType = (t: string) => t === "link" || t === "Enlace";
const isTuesdayType = (t: string) => t === "TuesdayJS";
const isPresentationType = (t: string) => t === "Presentación";
const isHerramientaType = (t: string) => t === "Herramienta";
const needsUrlOrId = (t: string) => isBookType(t) || isLinkType(t) || isTuesdayType(t);

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
  const [newTheoryItem, setNewTheoryItem] = useState<{ title: string; type: string; detail: string }>({
    title: "",
    type: "Texto",
    detail: "",
  });

  // --- Book picker state ---
  const [bookSearch, setBookSearch] = useState("");
  const [bookResults, setBookResults] = useState<BookResult[]>([]);
  const [bookLoading, setBookLoading] = useState(false);
  // "new" = picker for new item form | string = picker for existing item by id
  const [bookPickerFor, setBookPickerFor] = useState<"new" | string | null>(null);
  const [newBookTitle, setNewBookTitle] = useState(""); // display title for newly selected book

  // --- TuesdayJS picker state ---
  const [tuesdaySearch, setTuesdaySearch] = useState("");
  const [tuesdayResults, setTuesdayResults] = useState<TuesdayResult[]>([]);
  const [tuesdayLoading, setTuesdayLoading] = useState(false);
  const [tuesdayPickerFor, setTuesdayPickerFor] = useState<"new" | string | null>(null);

  // --- Herramienta picker state ---
  const [herramientaPickerFor, setHerramientaPickerFor] = useState<"new" | string | null>(null);

  // --- Slide editor state ---
  // "new" = editing slides for new item form | string = existing item id
  const [slidesEditorFor, setSlidesEditorFor] = useState<"new" | string | null>(null);

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

        // Load theoryItems — also reconstruct from resources[] (books)
        const rawItems =
          (module as Module & { theoryItems?: TheoryItem[] }).theoryItems ??
          module.theoryBlocks ??
          [];
        const existingIds = new Set(rawItems.map((i) => i.id));

        // Reconstitute book resources as theory items if not already present
        type BookResource = { type: "book"; id: string; title?: string };
        const bookResourceItems: TheoryItem[] = (module.resources ?? [])
          .filter((r): r is BookResource => r.type === "book")
          .filter((r) => !existingIds.has(r.id))
          .map((r) => ({
            id: r.id,
            title: r.title ?? r.id,
            type: "Libro",
            detail: r.id,
          }));

        setTheoryItems([
          ...rawItems.map((item) => ({
            id: item.id,
            title: item.title,
            type: item.type ?? "Texto",
            detail: item.detail,
          })),
          ...bookResourceItems,
        ]);

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

  // Subject capabilities — drives theory type options
  const subjectCapabilities = useMemo(
    () => getSubjectCapabilities(form.subject),
    [form.subject],
  );

  const updateForm = <K extends keyof ModuleFormState>(key: K, value: ModuleFormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubjectChange = (newSubject: string) => {
    updateForm("subject", newSubject);
    // Reset TuesdayJS type if new subject doesn't support it
    const caps = getSubjectCapabilities(newSubject);
    const tuesdayOpt = caps.theoryTypes.find((t) => t.value === "TuesdayJS");
    if (tuesdayOpt?.disabled && isTuesdayType(newTheoryItem.type)) {
      setNewTheoryItem((prev) => ({ ...prev, type: "Texto", detail: "" }));
      setTuesdayPickerFor(null);
    }
  };

  // ─── Book picker helpers ──────────────────────────────────────────────────

  const searchBooks = async (q: string) => {
    setBookLoading(true);
    try {
      const result = await fetchBooks({ q, pageSize: 8 });
      setBookResults(result.items);
    } catch {
      setBookResults([]);
    } finally {
      setBookLoading(false);
    }
  };

  const openBookPicker = (forId: "new" | string) => {
    setBookPickerFor(forId);
    setBookSearch("");
    setBookResults([]);
    searchBooks(""); // load initial list
  };

  const selectBook = (book: BookResult) => {
    if (bookPickerFor === "new") {
      setNewTheoryItem((prev) => ({
        ...prev,
        detail: book.id,
        title: prev.title || book.title,
      }));
      setNewBookTitle(book.title);
    } else if (bookPickerFor) {
      updateTheoryItem(bookPickerFor, { detail: book.id });
    }
    setBookPickerFor(null);
    setBookResults([]);
  };

  // ─── TuesdayJS picker helpers ─────────────────────────────────────────────

  const searchTuesdayDocs = async (q: string) => {
    setTuesdayLoading(true);
    try {
      const result = await apiGet<{ items: TuesdayResult[] }>(
        `/api/pages?q=${encodeURIComponent(q)}&pageSize=8`,
      );
      setTuesdayResults(result.items ?? []);
    } catch {
      setTuesdayResults([]);
    } finally {
      setTuesdayLoading(false);
    }
  };

  const openTuesdayPicker = (forId: "new" | string) => {
    setTuesdayPickerFor(forId);
    setTuesdaySearch("");
    setTuesdayResults([]);
    searchTuesdayDocs("");
  };

  const selectTuesdayDoc = (doc: TuesdayResult) => {
    if (tuesdayPickerFor === "new") {
      setNewTheoryItem((prev) => ({
        ...prev,
        detail: doc.id,
        title: prev.title || doc.title,
      }));
    } else if (tuesdayPickerFor) {
      updateTheoryItem(tuesdayPickerFor, { detail: doc.id });
    }
    setTuesdayPickerFor(null);
    setTuesdayResults([]);
  };

  // ─── Theory items ─────────────────────────────────────────────────────────

  const handleAddTheoryItem = () => {
    if (!newTheoryItem.title.trim()) return;
    if (needsUrlOrId(newTheoryItem.type) && !newTheoryItem.detail.trim()) return;
    if (isHerramientaType(newTheoryItem.type) && !newTheoryItem.detail.trim()) return;

    let detail = newTheoryItem.detail.trim();
    if (isPresentationType(newTheoryItem.type) && !detail) {
      detail = "[]";
    } else if (!detail) {
      detail = "Sin detalle adicional.";
    }

    const nextItem: TheoryItem = {
      id: `theory-${Date.now()}`,
      title: newTheoryItem.title.trim(),
      type: newTheoryItem.type,
      detail,
    };
    setTheoryItems((prev) => [...prev, nextItem]);
    setNewTheoryItem({ title: "", type: newTheoryItem.type, detail: "" });
    setNewBookTitle("");
    setBookPickerFor(null);
    setTuesdayPickerFor(null);
  };

  const updateTheoryItem = (itemId: string, patch: Partial<TheoryItem>) => {
    setTheoryItems((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, ...patch } : item)),
    );
  };

  const removeTheoryItem = (itemId: string) => {
    setTheoryItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  // ─── Slide editor callbacks ───────────────────────────────────────────────

  const handleSlidesDone = (slides: ReturnType<typeof detailToSlides>) => {
    const detail = slidesToDetail(slides);
    if (slidesEditorFor === "new") {
      setNewTheoryItem((prev) => ({ ...prev, detail }));
    } else if (slidesEditorFor) {
      updateTheoryItem(slidesEditorFor, { detail });
    }
    setSlidesEditorFor(null);
  };

  // ─── Quizzes ──────────────────────────────────────────────────────────────

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
      prev.map((quiz) =>
        quiz.id === quizId ? ensureQuizDefaults({ ...quiz, ...patch }) : quiz,
      ),
    );
  };

  const removeQuiz = (quizId: string) => {
    setQuizzes((prev) => prev.filter((quiz) => quiz.id !== quizId));
  };

  const handleImportQuizzes = (importedQuizzes: ModuleQuiz[]) => {
    setQuizzes((prev) => [...prev, ...importedQuizzes.map(ensureQuizDefaults)]);
  };

  // ─── Submit ───────────────────────────────────────────────────────────────

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
          (quiz.questions ?? []).forEach((question, questionIndex) => {
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

      // Books in theoryItems → also populate resources[]
      const bookResources = theoryItems
        .filter((item) => isBookType(item.type) && item.detail)
        .map((item) => ({ type: "book" as const, id: item.detail, title: item.title }));

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
        resources: bookResources,
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
              quiz.mode === "generated" && quiz.seedPolicy === "fixed"
                ? quiz.fixedSeed
                : undefined,
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
        await apiPost<Module>("/api/modulos", {
          ...basePayload,
          createdBy: user.id,
          authorName: (user as { name?: string }).name ?? "",
          createdAt: new Date().toISOString(),
        });
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

  // ─── Slide editor for which item ─────────────────────────────────────────

  const slidesEditorItem =
    slidesEditorFor === "new"
      ? { title: newTheoryItem.title, slides: detailToSlides(newTheoryItem.detail) }
      : slidesEditorFor
        ? (() => {
            const item = theoryItems.find((i) => i.id === slidesEditorFor);
            return item ? { title: item.title, slides: detailToSlides(item.detail) } : null;
          })()
        : null;

  // ─── Render ───────────────────────────────────────────────────────────────

  return (
    <>
      {/* Slide editor overlay — rendered outside the form to avoid z-index issues */}
      {slidesEditorFor && slidesEditorItem ? (
        <TheorySlideEditor
          presentationTitle={slidesEditorItem.title}
          initialSlides={slidesEditorItem.slides}
          onDone={handleSlidesDone}
          onClose={() => setSlidesEditorFor(null)}
        />
      ) : null}

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
              {/* ── Información general ── */}
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
                    <select
                      className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                      value={form.subject}
                      onChange={(event) => handleSubjectChange(event.target.value)}
                      required
                    >
                      <option value="">-- Seleccionar --</option>
                      {SUBJECT_OPTIONS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
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
                      onChange={(event) =>
                        updateForm("visibility", event.target.value as Module["visibility"])
                      }
                    >
                      <option value="publico">Público</option>
                      <option value="privado">Privado</option>
                      <option value="escuela">Escuela</option>
                    </select>
                  </label>
                </div>
              </section>

              {/* ── Teoría ── */}
              <section className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Teoría</h2>
                  <span className="text-xs text-gray-500">{theoryItems.length} recursos</span>
                </div>

                {/* New theory item form */}
                <div className="space-y-3 rounded-lg border border-gray-100 bg-gray-50 p-4">
                  <div className="grid gap-3 md:grid-cols-[1fr_180px]">
                    <input
                      className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                      placeholder="Título del recurso"
                      value={newTheoryItem.title}
                      onChange={(event) =>
                        setNewTheoryItem((prev) => ({ ...prev, title: event.target.value }))
                      }
                    />
                    <select
                      className="rounded-md border border-gray-300 px-3 py-2 text-sm"
                      value={newTheoryItem.type}
                      onChange={(event) => {
                        const t = event.target.value;
                        setNewTheoryItem((prev) => ({ ...prev, type: t, detail: "" }));
                        setBookPickerFor(null);
                        setTuesdayPickerFor(null);
                        setNewBookTitle("");
                      }}
                    >
                      {subjectCapabilities.theoryTypes.map((opt) => (
                        <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                          {opt.label}
                          {opt.disabled && opt.disabledReason ? ` — ${opt.disabledReason}` : ""}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Detail field — conditional on type */}
                  {isBookType(newTheoryItem.type) ? (
                    <BookPicker
                      isOpen={bookPickerFor === "new"}
                      search={bookSearch}
                      results={bookResults}
                      loading={bookLoading}
                      selectedId={newTheoryItem.detail}
                      selectedTitle={newBookTitle}
                      onOpenPicker={() => openBookPicker("new")}
                      onSearch={(q) => { setBookSearch(q); searchBooks(q); }}
                      onSelect={selectBook}
                      onClose={() => setBookPickerFor(null)}
                    />
                  ) : isTuesdayType(newTheoryItem.type) ? (
                    <TuesdayPicker
                      isOpen={tuesdayPickerFor === "new"}
                      search={tuesdaySearch}
                      results={tuesdayResults}
                      loading={tuesdayLoading}
                      selectedId={newTheoryItem.detail}
                      onOpenPicker={() => openTuesdayPicker("new")}
                      onSearch={(q) => { setTuesdaySearch(q); searchTuesdayDocs(q); }}
                      onSelect={selectTuesdayDoc}
                      onClose={() => setTuesdayPickerFor(null)}
                    />
                  ) : isPresentationType(newTheoryItem.type) ? (
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-gray-500">
                        {detailToSlides(newTheoryItem.detail).length === 0
                          ? "Sin diapositivas"
                          : `${detailToSlides(newTheoryItem.detail).length} diapositiva(s)`}
                      </span>
                      <button
                        type="button"
                        className="rounded-md border border-gray-300 px-3 py-1.5 text-xs hover:bg-gray-100"
                        onClick={() => setSlidesEditorFor("new")}
                      >
                        {detailToSlides(newTheoryItem.detail).length === 0
                          ? "Crear presentación"
                          : "Editar presentación"}
                      </button>
                    </div>
                  ) : isHerramientaType(newTheoryItem.type) ? (
                    <div className="flex items-center gap-3">
                      <HerramientaPicker
                        isOpen={herramientaPickerFor === "new"}
                        onSelect={(detail) => {
                          setNewTheoryItem((prev) => ({ ...prev, detail }));
                          setHerramientaPickerFor(null);
                        }}
                        onClose={() => setHerramientaPickerFor(null)}
                      />
                      <button
                        type="button"
                        className="rounded-md border border-gray-300 px-3 py-1.5 text-xs hover:bg-gray-100"
                        onClick={() => setHerramientaPickerFor("new")}
                      >
                        {newTheoryItem.detail ? "Cambiar herramienta" : "Seleccionar herramienta"}
                      </button>
                      {newTheoryItem.detail ? (
                        <span className="text-xs text-green-600">✓ Herramienta seleccionada</span>
                      ) : null}
                    </div>
                  ) : isLinkType(newTheoryItem.type) ? (
                    <input
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                      placeholder="https://..."
                      type="url"
                      value={newTheoryItem.detail}
                      onChange={(event) =>
                        setNewTheoryItem((prev) => ({ ...prev, detail: event.target.value }))
                      }
                    />
                  ) : (
                    <textarea
                      className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm"
                      rows={2}
                      placeholder="Resumen o contenido"
                      value={newTheoryItem.detail}
                      onChange={(event) =>
                        setNewTheoryItem((prev) => ({ ...prev, detail: event.target.value }))
                      }
                    />
                  )}

                  <button
                    type="button"
                    className="rounded-md border border-gray-300 px-3 py-2 text-sm hover:bg-gray-100"
                    onClick={handleAddTheoryItem}
                  >
                    + Agregar
                  </button>
                </div>

                {/* Existing theory items */}
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
                            placeholder="Título"
                            value={item.title}
                            onChange={(event) =>
                              updateTheoryItem(item.id, { title: event.target.value })
                            }
                          />
                          {/* Detail editing — conditional on type */}
                          {isBookType(item.type) ? (
                            <ExistingBookField
                              item={item}
                              isOpen={bookPickerFor === item.id}
                              search={bookSearch}
                              results={bookResults}
                              loading={bookLoading}
                              onOpenPicker={() => openBookPicker(item.id)}
                              onSearch={(q) => { setBookSearch(q); searchBooks(q); }}
                              onSelect={selectBook}
                              onClose={() => setBookPickerFor(null)}
                            />
                          ) : isTuesdayType(item.type) ? (
                            <ExistingTuesdayField
                              item={item}
                              isOpen={tuesdayPickerFor === item.id}
                              search={tuesdaySearch}
                              results={tuesdayResults}
                              loading={tuesdayLoading}
                              onOpenPicker={() => openTuesdayPicker(item.id)}
                              onSearch={(q) => { setTuesdaySearch(q); searchTuesdayDocs(q); }}
                              onSelect={selectTuesdayDoc}
                              onClose={() => setTuesdayPickerFor(null)}
                            />
                          ) : isPresentationType(item.type) ? (
                            <div className="flex items-center gap-3">
                              <span className="text-xs text-gray-500">
                                {detailToSlides(item.detail).length} diapositiva(s)
                              </span>
                              <button
                                type="button"
                                className="text-xs text-blue-600 hover:underline"
                                onClick={() => setSlidesEditorFor(item.id)}
                              >
                                Editar presentación
                              </button>
                            </div>
                          ) : isLinkType(item.type) ? (
                            <input
                              className="rounded-md border border-gray-300 px-2 py-2 text-xs"
                              placeholder="https://..."
                              value={item.detail}
                              onChange={(event) =>
                                updateTheoryItem(item.id, { detail: event.target.value })
                              }
                            />
                          ) : (
                            <textarea
                              className="rounded-md border border-gray-300 px-2 py-2 text-xs"
                              rows={2}
                              value={item.detail}
                              onChange={(event) =>
                                updateTheoryItem(item.id, { detail: event.target.value })
                              }
                            />
                          )}
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

              {/* ── Cuestionarios ── */}
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
                                onChange={(event) =>
                                  updateQuiz(quiz.id, { title: event.target.value })
                                }
                              />
                            </label>
                            <label className="text-xs font-medium text-gray-600">
                              Tipo
                              <select
                                className="mt-1 w-full rounded-md border border-gray-300 px-2 py-2 text-sm"
                                value={quiz.type}
                                onChange={(event) =>
                                  updateQuiz(quiz.id, {
                                    type: event.target.value as ModuleQuiz["type"],
                                  })
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
                                  updateQuiz(quiz.id, {
                                    visibility: event.target.value as ModuleQuiz["visibility"],
                                  })
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

              {/* ── Submit ── */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white disabled:opacity-70"
                  disabled={status === "saving"}
                >
                  {status === "saving"
                    ? "Guardando..."
                    : isEditing
                      ? "Guardar cambios"
                      : "Crear módulo"}
                </button>
                <div className="flex flex-col gap-2">
                  {message ? (
                    <span
                      className={`text-sm ${
                        status === "saved"
                          ? "text-emerald-600"
                          : status === "error"
                            ? "text-red-600"
                            : "text-gray-600"
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
    </>
  );
}

// ─── Inline sub-components ────────────────────────────────────────────────────

type BookPickerProps = {
  isOpen: boolean;
  search: string;
  results: BookResult[];
  loading: boolean;
  selectedId: string;
  selectedTitle: string;
  onOpenPicker: () => void;
  onSearch: (q: string) => void;
  onSelect: (book: BookResult) => void;
  onClose: () => void;
};

function BookPicker({
  isOpen,
  search,
  results,
  loading,
  selectedId,
  selectedTitle,
  onOpenPicker,
  onSearch,
  onSelect,
  onClose,
}: BookPickerProps) {
  if (!isOpen) {
    return (
      <div className="flex items-center gap-3">
        {selectedId ? (
          <>
            <span className="text-xs text-gray-600">
              Libro: <strong>{selectedTitle || selectedId}</strong>
            </span>
            <button type="button" className="text-xs text-blue-600 hover:underline" onClick={onOpenPicker}>
              Cambiar
            </button>
          </>
        ) : (
          <button
            type="button"
            className="w-full rounded-md border border-dashed border-gray-300 px-3 py-2 text-sm text-gray-500 hover:border-blue-400 hover:text-blue-600 text-left"
            onClick={onOpenPicker}
          >
            Seleccionar libro...
          </button>
        )}
        <a
          href="/editor"
          target="_blank"
          rel="noreferrer"
          className="text-xs text-blue-600 hover:underline whitespace-nowrap"
        >
          + Crear nuevo ↗
        </a>
      </div>
    );
  }

  return (
    <div className="rounded-md border border-blue-200 bg-blue-50 p-3 space-y-2">
      <div className="flex gap-2">
        <input
          className="flex-1 rounded-md border border-gray-300 px-2 py-1.5 text-xs"
          placeholder="Buscar libro por título..."
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSearch(search)}
          autoFocus
        />
      </div>
      {loading ? (
        <p className="text-xs text-gray-500">Buscando...</p>
      ) : results.length > 0 ? (
        <ul className="space-y-0.5 max-h-40 overflow-y-auto">
          {results.map((book) => (
            <li key={book.id}>
              <button
                type="button"
                className="w-full text-left text-xs px-2 py-1.5 rounded hover:bg-white hover:text-blue-700 text-gray-700"
                onClick={() => onSelect(book)}
              >
                {book.title}
                <span className="text-gray-400 ml-1">({book.id})</span>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-xs text-gray-400">Sin resultados.</p>
      )}
      <div className="flex gap-3 pt-1 border-t border-blue-100">
        <a
          href="/editor"
          target="_blank"
          rel="noreferrer"
          className="text-xs text-blue-600 hover:underline"
        >
          + Crear nuevo libro ↗
        </a>
        <button type="button" className="text-xs text-gray-400 hover:text-gray-600" onClick={onClose}>
          Cancelar
        </button>
      </div>
    </div>
  );
}

type TuesdayPickerProps = {
  isOpen: boolean;
  search: string;
  results: TuesdayResult[];
  loading: boolean;
  selectedId: string;
  onOpenPicker: () => void;
  onSearch: (q: string) => void;
  onSelect: (doc: TuesdayResult) => void;
  onClose: () => void;
};

function TuesdayPicker({
  isOpen,
  search,
  results,
  loading,
  selectedId,
  onOpenPicker,
  onSearch,
  onSelect,
  onClose,
}: TuesdayPickerProps) {
  if (!isOpen) {
    return (
      <div className="flex items-center gap-3">
        {selectedId ? (
          <>
            <span className="text-xs text-gray-600">
              Documento: <strong>{selectedId}</strong>
            </span>
            <button type="button" className="text-xs text-blue-600 hover:underline" onClick={onOpenPicker}>
              Cambiar
            </button>
          </>
        ) : (
          <button
            type="button"
            className="w-full rounded-md border border-dashed border-gray-300 px-3 py-2 text-sm text-gray-500 hover:border-blue-400 hover:text-blue-600 text-left"
            onClick={onOpenPicker}
          >
            Seleccionar documento TuesdayJS...
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="rounded-md border border-blue-200 bg-blue-50 p-3 space-y-2">
      <div className="flex gap-2">
        <input
          className="flex-1 rounded-md border border-gray-300 px-2 py-1.5 text-xs"
          placeholder="Buscar documento por título..."
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSearch(search)}
          autoFocus
        />
      </div>
      {loading ? (
        <p className="text-xs text-gray-500">Buscando...</p>
      ) : results.length > 0 ? (
        <ul className="space-y-0.5 max-h-40 overflow-y-auto">
          {results.map((doc) => (
            <li key={doc.id}>
              <button
                type="button"
                className="w-full text-left text-xs px-2 py-1.5 rounded hover:bg-white hover:text-blue-700 text-gray-700"
                onClick={() => onSelect(doc)}
              >
                {doc.title}
                <span className="text-gray-400 ml-1">({doc.id})</span>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-xs text-gray-400">Sin resultados.</p>
      )}
      <div className="pt-1 border-t border-blue-100">
        <button type="button" className="text-xs text-gray-400 hover:text-gray-600" onClick={onClose}>
          Cancelar
        </button>
      </div>
    </div>
  );
}

// Fields for existing theory items (book/tuesday pickers embedded inline)

type ExistingBookFieldProps = {
  item: TheoryItem;
  isOpen: boolean;
  search: string;
  results: BookResult[];
  loading: boolean;
  onOpenPicker: () => void;
  onSearch: (q: string) => void;
  onSelect: (book: BookResult) => void;
  onClose: () => void;
};

function ExistingBookField({
  item,
  isOpen,
  search,
  results,
  loading,
  onOpenPicker,
  onSearch,
  onSelect,
  onClose,
}: ExistingBookFieldProps) {
  return (
    <BookPicker
      isOpen={isOpen}
      search={search}
      results={results}
      loading={loading}
      selectedId={item.detail}
      selectedTitle={item.title}
      onOpenPicker={onOpenPicker}
      onSearch={onSearch}
      onSelect={onSelect}
      onClose={onClose}
    />
  );
}

type ExistingTuesdayFieldProps = {
  item: TheoryItem;
  isOpen: boolean;
  search: string;
  results: TuesdayResult[];
  loading: boolean;
  onOpenPicker: () => void;
  onSearch: (q: string) => void;
  onSelect: (doc: TuesdayResult) => void;
  onClose: () => void;
};

function ExistingTuesdayField({
  item,
  isOpen,
  search,
  results,
  loading,
  onOpenPicker,
  onSearch,
  onSelect,
  onClose,
}: ExistingTuesdayFieldProps) {
  return (
    <TuesdayPicker
      isOpen={isOpen}
      search={search}
      results={results}
      loading={loading}
      selectedId={item.detail}
      onOpenPicker={onOpenPicker}
      onSearch={onSearch}
      onSelect={onSelect}
      onClose={onClose}
    />
  );
}
