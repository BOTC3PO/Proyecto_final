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

const isBookType = (t: string) => t === "book" || t === "Libro";

type LoadResult = {
  form: ModuleFormState;
  theoryItems: TheoryItem[];
  quizzes: ModuleQuiz[];
  // WO-13 — provenance del módulo cargado (si el módulo es una
  // copia, el back expone `clonedFrom` con id/título/owner del
  // original). La UI lo lee para mostrar "Estás editando una
  // copia de…".
  clonedFrom?: {
    id: string;
    title: string | null;
    ownerUserId: string | null;
  } | null;
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

      // FIX-TEST4-MOD-02 — antes si el módulo viejo tenía
      // `type: "book" / "link" / "note" / "article"` (inglés
      // legacy), la UI lo mostraba crudo porque `TheoryItemCard`
      // solo traduce los tipos que conoce. Normalizamos al
      // español canónico acá, así la card muestra "Libro",
      // "Enlace", "Nota", "Artículo" en vez de strings en inglés.
      const LEGACY_TYPE_MAP: Record<string, string> = {
        book: "Libro",
        link: "Enlace",
        note: "Nota",
        article: "Artículo",
        text: "Texto",
        video: "Video",
        document: "Documento",
      };
      const normalizeType = (raw: string | undefined): string => {
        if (!raw) return "Texto";
        return LEGACY_TYPE_MAP[raw.toLowerCase()] ?? raw;
      };

      const theoryItems: TheoryItem[] = [
        ...rawItems.map((item: TheoryItem) => ({
          id: item.id,
          title: item.title,
          type: normalizeType(item.type),
          detail: item.detail,
        })),
        ...bookResourceItems,
      ];

      const quizzes: ModuleQuiz[] =
        (module as Module & { quizzes?: ModuleQuiz[] }).quizzes ?? [];

      const form: ModuleFormState = {
        title: module.title,
        description: module.description,
        // FIX-MODULO-CRASH — `subject` puede venir `undefined` o
        // `null` cuando el back todavía no persiste la materia (antes
        // de FIX-GUARDADO). Default a "" para no romper el editor
        // (`useModuloEditor.ts:482` lee `form.subject.length`).
        subject: module.subject ?? "",
        // FIX-TEST4-MOD-01 — `category` puede venir `null` para
        // módulos viejos de la beta 0.0.4 (la columna se agregó
        // en 20260618000000_modulo_category_duration). Default
        // a "sin-categoria" para que el dropdown muestre esa
        // opción y el form no rompa.
        category: module.category ?? "sin-categoria",
        // FIX-MODULO-CRASH-LEVEL — `level` puede venir `undefined`
        // o `null` para módulos viejos / no migrados / sin nivel
        // persistido. Default a "" para no romper el editor
        // (`useModuloEditor.ts:487` lee `form.level.trim()`).
        level: module.level ?? "",
        // FIX-TEST4-MOD-01 — `durationMinutes` puede ser null
        // para módulos viejos. Default a 30 (mismo default que
        // `defaultForm`).
        durationMinutes: module.durationMinutes ?? 30,
        visibility: module.visibility,
        visibilitySchoolId: module.schoolId ?? "",
        dependencies: module.dependencies ?? [],
        // WO-3 — escala de notas del módulo (si el back la trae).
        scoringSystemId: module.scoringConfig?.systemId,
      };

      setStatus("idle");
      return {
        form,
        theoryItems,
        quizzes,
        // WO-13 — el back expone `clonedFrom` si el módulo es una
        // copia. Default `null` para módulos viejos (pre-WO-13) que
        // no tienen la columna.
        clonedFrom: module.clonedFrom ?? null,
      };
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

        const fieldErrors: string[] = [];
        if (!form.title.trim()) fieldErrors.push('El título es obligatorio.');
        if (!form.description.trim()) fieldErrors.push('La descripción es obligatoria.');
        if (!form.subject.trim()) fieldErrors.push('La materia es obligatoria.');
        // category siempre tiene al menos "sin-categoria" como valor por defecto
        // PLAN-W §2 (repro Javier) — en categoría "evaluacion" el input de
        // Nivel se oculta (ModuloEditor.tsx: `!isEvaluacionMode`); exigirlo
        // igual dejaba al docente sin forma de completarlo nunca (el campo
        // no existe en pantalla para escribir el valor que el guardado pide).
        if (form.category !== "evaluacion" && !form.level.trim()) {
          fieldErrors.push('El nivel es obligatorio.');
        }

        if (fieldErrors.length > 0) {
          setStatus("error");
          setMessage("Completá los campos requeridos antes de guardar.");
          setValidationErrors(fieldErrors);
          setExtErrors(fieldErrors);
          return;
        }

        if (form.visibility === "escuela" && !form.visibilitySchoolId?.trim()) {
          setStatus("error");
          setMessage("Seleccioná una escuela para la visibilidad por escuela.");
          setExtErrors(["Visibilidad 'Escuela' requiere seleccionar una escuela."]);
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
          // WO-3 — escala de notas del módulo. Sólo se envía si el docente eligió
          // una; ausente = el back deja `scoringConfig` nulo (fallback histórico).
          scoringConfig: form.scoringSystemId
            ? { systemId: form.scoringSystemId }
            : undefined,
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
            // FIX-GUARDADO-QUIZID — siempre enviamos el `id`, incluso para
            // cuestionarios nuevos (ids `quiz-...` generados por `buildQuizId`).
            // El `ModuleQuizSchema` del API exige `id` (string.min(1)) y el
            // handler POST lo usa directo (`modulos.ts` → `id: quiz.id`), así
            // que stripearlo provocaba 400 de validación al guardar. Además,
            // mandar el id estable permite que el PATCH matchee el quiz
            // existente (`applyModuleUpdate`) y versione en vez de duplicar.
            return { ...payloadQuiz, id: quizId };
          }),
          updatedAt: new Date().toISOString(),
        };

        if (isEditing && id) {
          // WO-13 — copy-on-write. Si el back detecta que el usuario
          // NO es owner del módulo compartido, clona el módulo y
          // devuelve `{ id: <copiaId>, copied: true, clonedFrom }`.
          // La UI navega al id de la copia y muestra el mensaje de
          // procedencia para que el docente entienda que ahora está
          // editando SU copia, no el original.
          const result = await apiPatch<{
            ok?: boolean;
            id?: string;
            copied?: boolean;
            clonedFrom?: {
              id: string;
              title: string | null;
              ownerUserId: string | null;
            } | null;
          }>(`/api/modulos/${id}`, basePayload);
          setStatus("saved");
          setValidationErrors([]);
          setExtErrors([]);
          if (result.copied && result.id && result.id !== id) {
            const originTitle = result.clonedFrom?.title ?? "el módulo original";
            setMessage(
              `Hiciste una copia de "${originTitle}". Estás editando tu propia versión — el original quedó intacto.`,
            );
            // Navegamos al id de la copia para que el editor siga
            // trabajando sobre la copia. Reemplazamos la URL para
            // que un refresh no intente volver al original.
            navigate(`/modulos/${encodeURIComponent(result.id)}/editar`, { replace: true });
          } else {
            setMessage("Cambios guardados.");
          }
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
          try { sessionStorage.removeItem(`modulo-draft:new`); } catch { /* ignorar */ }
          navigate("/modulos", { replace: true });
        }
      } catch (err) {
        // FIX-GUARDADO — antes este catch era silencioso (`catch {}`), lo que
        // ocultó durante mucho tiempo los 400 de validación del API (p. ej.
        // `quiz.type` o `quiz.id` rechazados por el schema). Logueamos el error
        // real para que un próximo desajuste front↔schema no quede invisible.
        console.error("[useModuloPersistence] guardado falló:", err);
        setStatus("error");
        setMessage("No se pudo guardar el módulo.");
      }
    },
    [],
  );

  return { status, message, validationErrors, loadModule, handleSubmit };
}
