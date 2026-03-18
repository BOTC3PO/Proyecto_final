import { useCallback, useEffect, useMemo, useState } from "react";
import type { NavigateFunction } from "react-router-dom";
import { apiGet } from "../../lib/api";
import type { Module, ModuleDependency, ModuleQuiz } from "../../domain/module/module.types";
import { getSubjectCapabilities } from "../../domain/module/module.types";
import type { TheoryItem } from "../../components/modulos/TheoryItemCard";
import type { PresentationTheme, AccentColor } from "../../components/modulos/TheorySlideEditor";
import { slidesToDetail, detailToPresentation } from "../../components/modulos/TheorySlideEditor";
import { fetchBooks } from "../../bookEditor/services/booksApi";
import { useModuloPersistence } from "./useModuloPersistence";
import type { BlockDocument } from "../../blocks/types";
import { serializeBlockDocument } from "../../blocks/utils";

export { detailToPresentation };

export type ModuleFormState = {
  title: string;
  description: string;
  subject: string;
  category: string;
  level: string;
  durationMinutes: number;
  visibility: Module["visibility"];
  visibilitySchoolId: string;
  dependencies: ModuleDependency[];
};

export type BookResult = { id: string; title: string };
export type TuesdayResult = { id: string; title: string };
type EscuelaResult = { id: string; name: string };

const buildQuizId = () => `quiz-${Date.now()}-${Math.random().toString(16).slice(2)}`;

export const ensureQuizDefaults = (quiz: ModuleQuiz): ModuleQuiz => {
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

export const isTuesdayType = (t: string) => t === "TuesdayJS";
export const isPresentationType = (t: string) => t === "Presentación";
export const isHerramientaType = (t: string) => t === "Herramienta";
export const isBookType = (t: string) => t === "book" || t === "Libro";
export const isLinkType = (t: string) => t === "link" || t === "Enlace";
export const isVideoType = (t: string) => t === "Video";
export const isDocumentoType = (t: string) => t === "Documento";
export const needsUrlOrId = (t: string) =>
  isBookType(t) || isLinkType(t) || isTuesdayType(t) || isVideoType(t) || isDocumentoType(t);

type User = { id: string; name?: string };

/**
 * Manages all state and business logic for ModuloEditor.
 * ModuloEditor renders using the returned values + handlers.
 */
export function useModuloEditor(
  id: string | undefined,
  user: User | null,
  navigate: NavigateFunction,
) {
  const isEditing = Boolean(id);
  const persistence = useModuloPersistence();

  // ── Form state ─────────────────────────────────────────────────────────────
  const [form, setForm] = useState<ModuleFormState>({
    title: "",
    description: "",
    subject: "",
    category: "",
    level: "",
    durationMinutes: 30,
    visibility: "publico",
    visibilitySchoolId: "",
    dependencies: [],
  });

  const [theoryItems, setTheoryItems] = useState<TheoryItem[]>([]);
  const [quizzes, setQuizzes] = useState<ModuleQuiz[]>([]);
  const [newTheoryItem, setNewTheoryItem] = useState<{
    title: string;
    type: string;
    detail: string;
  }>({ title: "", type: "Texto", detail: "" });

  // ── Picker states ──────────────────────────────────────────────────────────
  const [bookSearch, setBookSearch] = useState("");
  const [bookResults, setBookResults] = useState<BookResult[]>([]);
  const [bookLoading, setBookLoading] = useState(false);
  const [bookPickerFor, setBookPickerFor] = useState<"new" | string | null>(null);
  const [newBookTitle, setNewBookTitle] = useState("");

  const [tuesdaySearch, setTuesdaySearch] = useState("");
  const [tuesdayResults, setTuesdayResults] = useState<TuesdayResult[]>([]);
  const [tuesdayLoading, setTuesdayLoading] = useState(false);
  const [tuesdayPickerFor, setTuesdayPickerFor] = useState<"new" | string | null>(null);

  const [herramientaPickerFor, setHerramientaPickerFor] = useState<"new" | string | null>(null);

  const [escuelaResults, setEscuelaResults] = useState<EscuelaResult[]>([]);
  const [escuelaSearch, setEscuelaSearch] = useState("");
  const [escuelaLoading, setEscuelaLoading] = useState(false);

  const [slidesEditorFor, setSlidesEditorFor] = useState<"new" | string | null>(null);
  const [blockEditorFor, setBlockEditorFor] = useState<"new" | string | null>(null);
  const [quizPreviewOpen, setQuizPreviewOpen] = useState<Record<string, boolean>>({});
  const [quizBlurErrors, setQuizBlurErrors] = useState<Record<string, string[]>>({});
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const [depSearch, setDepSearch] = useState("");
  const [depResults, setDepResults] = useState<Array<{ id: string; title: string }>>([]);
  const [depLoading, setDepLoading] = useState(false);
  const [depPickerOpen, setDepPickerOpen] = useState(false);

  // ── Load module data on mount (edit mode) ─────────────────────────────────
  useEffect(() => {
    if (!isEditing || !id) return;
    let active = true;
    persistence.loadModule(id).then((result) => {
      if (!active || !result) return;
      setForm(result.form);
      setTheoryItems(result.theoryItems);
      setQuizzes(result.quizzes.map(ensureQuizDefaults));
    });
    return () => { active = false; };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, isEditing]);

  // ── Form helpers ───────────────────────────────────────────────────────────
  const subjectCapabilities = useMemo(
    () => getSubjectCapabilities(form.subject),
    [form.subject],
  );

  const updateForm = <K extends keyof ModuleFormState>(key: K, value: ModuleFormState[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubjectChange = (newSubject: string) => {
    updateForm("subject", newSubject);
    const caps = getSubjectCapabilities(newSubject);
    const tuesdayOpt = caps.theoryTypes.find((t) => t.value === "TuesdayJS");
    if (tuesdayOpt?.disabled && isTuesdayType(newTheoryItem.type)) {
      setNewTheoryItem((prev) => ({ ...prev, type: "Texto", detail: "" }));
      setTuesdayPickerFor(null);
    }
  };

  // ── Book picker ────────────────────────────────────────────────────────────
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
    searchBooks("");
  };

  const selectBook = (book: BookResult) => {
    if (bookPickerFor === "new") {
      setNewTheoryItem((prev) => ({ ...prev, detail: book.id, title: prev.title || book.title }));
      setNewBookTitle(book.title);
    } else if (bookPickerFor) {
      updateTheoryItem(bookPickerFor, { detail: book.id });
    }
    setBookPickerFor(null);
    setBookResults([]);
  };

  // ── TuesdayJS picker ───────────────────────────────────────────────────────
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

  // ── Theory items ───────────────────────────────────────────────────────────
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

  const moveTheoryItem = (itemId: string, dir: "up" | "down") => {
    setTheoryItems((prev) => {
      const idx = prev.findIndex((i) => i.id === itemId);
      if (idx === -1) return prev;
      const swap = dir === "up" ? idx - 1 : idx + 1;
      if (swap < 0 || swap >= prev.length) return prev;
      const next = [...prev];
      [next[idx], next[swap]] = [next[swap], next[idx]];
      return next;
    });
  };

  // ── Slide editor ───────────────────────────────────────────────────────────
  const handleSlidesDone = (
    slides: Parameters<typeof slidesToDetail>[0],
    theme: PresentationTheme,
    accentColor?: AccentColor,
  ) => {
    const detail = slidesToDetail(slides, theme, accentColor);
    if (slidesEditorFor === "new") {
      setNewTheoryItem((prev) => ({ ...prev, detail }));
    } else if (slidesEditorFor) {
      updateTheoryItem(slidesEditorFor, { detail });
    }
    setSlidesEditorFor(null);
  };

  const slidesEditorItem = useMemo(() => {
    if (slidesEditorFor === "new") {
      return { title: newTheoryItem.title, ...detailToPresentation(newTheoryItem.detail) };
    }
    if (slidesEditorFor) {
      const item = theoryItems.find((i) => i.id === slidesEditorFor);
      return item ? { title: item.title, ...detailToPresentation(item.detail) } : null;
    }
    return null;
  }, [slidesEditorFor, newTheoryItem, theoryItems]);

  // ── Block editor ────────────────────────────────────────────────────────────
  const handleBlockDone = (doc: BlockDocument) => {
    const detail = serializeBlockDocument(doc);
    if (blockEditorFor === "new") {
      setNewTheoryItem((prev) => ({ ...prev, detail }));
    } else if (blockEditorFor) {
      updateTheoryItem(blockEditorFor, { detail });
    }
    setBlockEditorFor(null);
  };

  const blockEditorItem = useMemo(() => {
    if (blockEditorFor === "new") {
      return { title: newTheoryItem.title, detail: newTheoryItem.detail };
    }
    if (blockEditorFor) {
      const item = theoryItems.find((i) => i.id === blockEditorFor);
      return item ? { title: item.title, detail: item.detail } : null;
    }
    return null;
  }, [blockEditorFor, newTheoryItem, theoryItems]);

  // ── Quizzes ────────────────────────────────────────────────────────────────
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

  const validateQuizTitle = (quizId: string, title: string) => {
    setQuizBlurErrors((prev) => ({
      ...prev,
      [quizId]: title.trim() ? [] : ["El título del cuestionario no puede estar vacío."],
    }));
  };

  // ── Dependencies ───────────────────────────────────────────────────────────
  const searchModules = useCallback(async (q: string) => {
    setDepLoading(true);
    try {
      const result = await apiGet<{ items?: Array<{ id: string; title: string }> }>(
        `/api/modulos?q=${encodeURIComponent(q)}&pageSize=8`,
      );
      setDepResults(result.items ?? []);
    } catch {
      setDepResults([]);
    } finally {
      setDepLoading(false);
    }
  }, []);

  const addDependency = (mod: { id: string; title: string }) => {
    const alreadyAdded = form.dependencies.some((d) => d.id === mod.id);
    if (alreadyAdded) return;
    updateForm("dependencies", [...form.dependencies, { id: mod.id, type: "required" as const }]);
    setDepPickerOpen(false);
    setDepSearch("");
    setDepResults([]);
  };

  const removeDependency = (depId: string) => {
    updateForm("dependencies", form.dependencies.filter((d) => d.id !== depId));
  };

  const updateDependencyType = (depId: string, type: "required" | "unlocks") => {
    updateForm(
      "dependencies",
      form.dependencies.map((d) => (d.id === depId ? { ...d, type } : d)),
    );
  };

  // ── School search ──────────────────────────────────────────────────────────
  const searchEscuelas = useCallback(async (q: string) => {
    setEscuelaLoading(true);
    try {
      const result = await apiGet<{ items?: Array<{ _id: string; id?: string; name: string }> }>(
        `/api/escuelas?limit=20`,
      );
      const items: EscuelaResult[] = (result.items ?? [])
        .filter((s) => !q || s.name.toLowerCase().includes(q.toLowerCase()))
        .map((s) => ({ id: s.id ?? s._id, name: s.name }));
      setEscuelaResults(items);
    } catch {
      setEscuelaResults([]);
    } finally {
      setEscuelaLoading(false);
    }
  }, []);

  // ── Section status ─────────────────────────────────────────────────────────
  const sectionStatus = useMemo(() => {
    const generalOk =
      form.title.trim().length > 0 &&
      form.description.trim().length > 0 &&
      form.subject.length > 0 &&
      form.category.trim().length > 0 &&
      form.level.trim().length > 0;
    const theoryOk = theoryItems.length > 0;
    const quizzesOk =
      quizzes.length === 0 ||
      quizzes.every((quiz) => {
        if (!quiz.title.trim()) return false;
        if (quiz.mode === "manual") {
          return (quiz.questions ?? []).every(
            (q) => q.questionType && (q.options?.length ?? 0) > 0 && q.answerKey,
          );
        }
        if (quiz.mode === "generated") {
          return Boolean(quiz.generatorId) && (quiz.count ?? 0) > 0;
        }
        return true;
      });
    return { generalOk, theoryOk, quizzesOk };
  }, [form, theoryItems, quizzes]);

  // ── Submit ─────────────────────────────────────────────────────────────────
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    await persistence.handleSubmit({
      event,
      isEditing,
      id,
      user,
      form,
      theoryItems,
      quizzes,
      navigate,
      setValidationErrors,
    });
  };

  const clearBookTitle = () => setNewBookTitle("");
  const clearDepResults = () => setDepResults([]);

  return {
    // Persistence
    status: persistence.status,
    message: persistence.message,
    validationErrors,
    // Form
    form,
    setForm,
    updateForm,
    handleSubjectChange,
    subjectCapabilities,
    isEditing,
    // Theory items
    theoryItems,
    newTheoryItem,
    setNewTheoryItem,
    handleAddTheoryItem,
    updateTheoryItem,
    removeTheoryItem,
    moveTheoryItem,
    // Slide editor
    slidesEditorFor,
    setSlidesEditorFor,
    slidesEditorItem,
    handleSlidesDone,
    // Block editor
    blockEditorFor,
    setBlockEditorFor,
    blockEditorItem,
    handleBlockDone,
    // Quizzes
    quizzes,
    addQuiz,
    updateQuiz,
    removeQuiz,
    handleImportQuizzes,
    quizPreviewOpen,
    setQuizPreviewOpen,
    quizBlurErrors,
    validateQuizTitle,
    sectionStatus,
    // Book picker
    bookSearch,
    setBookSearch,
    bookResults,
    bookLoading,
    bookPickerFor,
    setBookPickerFor,
    newBookTitle,
    clearBookTitle,
    openBookPicker,
    selectBook,
    searchBooks,
    // Tuesday picker
    tuesdaySearch,
    setTuesdaySearch,
    tuesdayResults,
    tuesdayLoading,
    tuesdayPickerFor,
    setTuesdayPickerFor,
    openTuesdayPicker,
    selectTuesdayDoc,
    searchTuesdayDocs,
    // Herramienta picker
    herramientaPickerFor,
    setHerramientaPickerFor,
    // Escuela search
    escuelaResults,
    escuelaSearch,
    setEscuelaSearch,
    escuelaLoading,
    searchEscuelas,
    // Dependencies
    depSearch,
    setDepSearch,
    depResults,
    clearDepResults,
    depLoading,
    depPickerOpen,
    setDepPickerOpen,
    addDependency,
    removeDependency,
    updateDependencyType,
    searchModules,
    // Submit
    handleSubmit,
  };
}
