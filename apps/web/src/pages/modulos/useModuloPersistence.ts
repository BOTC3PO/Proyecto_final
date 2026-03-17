import { useCallback, useState } from "react";
import type { NavigateFunction } from "react-router-dom";
import { z } from "zod";
import { apiGet, apiPatch, apiPost } from "../../lib/api";
import type { Module, ModuleQuiz } from "../../domain/module/module.types";
import type { TheoryItem } from "../../components/modulos/TheoryItemCard";
import type { ModuleFormState } from "./useModuloEditor";

type SaveStatus = "idle" | "loading" | "saving" | "saved" | "error";

type User = { id: string; name?: string };

const manualQuestionSchema = z.object({
  questionType: z.enum(["mc", "vf", "input"]),
  options: z.array(z.string().min(1)).min(1),
  answerKey: z.union([z.string().min(1), z.array(z.string().min(1)).min(1)]),
});

const generatedQuizSchema = z.object({
  generatorId: z.string().min(1),
  params: z.record(z.string(), z.unknown()),
  count: z.number().int().min(1),
});

const isTemporaryQuizId = (quizId?: string) =>
  Boolean(quizId && quizId.startsWith("quiz-"));

const isBookType = (t: string) => t === "book" || t === "Libro";

type LoadResult = {
  form: ModuleFormState;
  theoryItems: TheoryItem[];
  quizzes: ModuleQuiz[];
};

export type UsePersistenceReturn = {
  status: SaveStatus;
  message: string;
  validationErrors: string[];
  loadModule: (id: string) => Promise<LoadResult | null>;
  handleSubmit: (params: {
    event: React.FormEvent<HTMLFormElement>;
    isEditing: boolean;
    id?: string;
    user: User | null;
    form: ModuleFormState;
    theoryItems: TheoryItem[];
    quizzes: ModuleQuiz[];
    navigate: NavigateFunction;
    setValidationErrors: (errs: string[]) => void;
  }) => Promise<void>;
};

/**
 * Handles API load/save for module data.
 * Exposes status, message, and async helpers for loading and submitting modules.
 */
export function useModuloPersistence(): UsePersistenceReturn {
  const [status, setStatus] = useState<SaveStatus>("idle");
  const [message, setMessage] = useState("");
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const loadModule = useCallback(async (id: string): Promise<LoadResult | null> => {
    setStatus("loading");
    try {
      const module = await apiGet<Module>(`/api/modulos/${id}`);

      const rawItems =
        (module as Module & { theoryItems?: TheoryItem[] }).theoryItems ??
        module.theoryBlocks ??
        [];
      const existingIds = new Set(rawItems.map((i: TheoryItem) => i.id));

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

      const theoryItems: TheoryItem[] = [
        ...rawItems.map((item: TheoryItem) => ({
          id: item.id,
          title: item.title,
          type: item.type ?? "Texto",
          detail: item.detail,
        })),
        ...bookResourceItems,
      ];

      const quizzes: ModuleQuiz[] =
        (module as Module & { quizzes?: ModuleQuiz[] }).quizzes ?? [];

      const form: ModuleFormState = {
        title: module.title,
        description: module.description,
        subject: module.subject,
        category: module.category,
        level: module.level,
        durationMinutes: module.durationMinutes,
        visibility: module.visibility,
        visibilitySchoolId: module.schoolId ?? "",
        dependencies: module.dependencies ?? [],
      };

      setStatus("idle");
      return { form, theoryItems, quizzes };
    } catch {
      setStatus("error");
      setMessage("No se pudo cargar el módulo.");
      return null;
    }
  }, []);

  const handleSubmit = useCallback(
    async ({
      event,
      isEditing,
      id,
      user,
      form,
      theoryItems,
      quizzes,
      navigate,
      setValidationErrors: setExtErrors,
    }: Parameters<UsePersistenceReturn["handleSubmit"]>[0]) => {
      event.preventDefault();
      setStatus("saving");
      setMessage("");
      setValidationErrors([]);
      setExtErrors([]);

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
          setExtErrors(quizErrors);
          return;
        }

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
          schoolId:
            form.visibility === "escuela" ? form.visibilitySchoolId || undefined : undefined,
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
              seedPolicy:
                quiz.mode === "generated" ? quiz.seedPolicy ?? "perAttempt" : undefined,
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
          setExtErrors([]);
        } else {
          await apiPost<Module>("/api/modulos", {
            ...basePayload,
            createdBy: user.id,
            authorName: user.name ?? "",
            createdAt: new Date().toISOString(),
          });
          setStatus("saved");
          setMessage("Módulo creado correctamente.");
          setValidationErrors([]);
          setExtErrors([]);
          navigate("/modulos", { replace: true });
        }
      } catch {
        setStatus("error");
        setMessage("No se pudo guardar el módulo.");
      }
    },
    [],
  );

  return { status, message, validationErrors, loadModule, handleSubmit };
}
