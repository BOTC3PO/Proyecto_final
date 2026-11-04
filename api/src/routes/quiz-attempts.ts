import express, { Router } from "express";
import { randomInt, randomUUID } from "crypto";
import { prisma } from "../lib/prisma";
import { Prisma } from "@prisma/client";
import { requireUser } from "../lib/user-auth";
import {
  QuizAttemptAnswerSchema,
  QuizAttemptCreateSchema,
  QuizAttemptEventsPatchSchema,
  QuizAttemptGradeSchema,
  QuizAttemptListQuerySchema,
  QuizAttemptSubmitSchema,
  QuizAttemptSummaryQuerySchema,
  QuizVersionSchema,
  type QuizAttemptSubmit
} from "../schema/quiz-attempt";
import { isStaffRole, canManageClassroom } from "../lib/authorization";
import { hasRole, resolvePrimaryRole, resolveRoles } from "../lib/roles";
import { perteneceAEscuela } from "../lib/pertenece-escuela";
import {
  isCanaryAnswer,
  sanitizeQuestionsForStudent
} from "../lib/sanitize-questions";
import {
  aplicarPolitica,
  calcularDeadline,
  calcularNotas,
  contarIntentosPrevios,
  debeAutoCerrarIntento,
  parseEvaluacionConfig,
  parseIntentoPolicy,
  validarLimiteIntentos,
  validarTiempoLimite,
  type IntentoPolicy,
  type PoliticaNota
} from "../lib/quiz-intentos";
import {
  mergeAttemptEvents,
  summarizeAttemptEvents
} from "../lib/attemptEvents";
import { computeGradeRange } from "../lib/gradeRange";
import { bonusPorTickets } from "../lib/examen-tickets";
import { gradeFromConfig, type ScoringConfig } from "@vb/vblang";
import { resolveUserNames } from "../lib/resolve-user-names";
import { acreditarPorPrimerCuestionario } from "../lib/economia-alta";
import { parseModuleDependencies, computeModuleLock } from "../lib/module-dependencies";
import { hasActiveModuleOverride } from "../lib/module-unlock-overrides";
// Etapa 1 (Tiza — preguntas nativas) — sorteo nuevo, sólo para quizzes que
// declaran `settings.preguntas` (schema independiente de `composition`).
import { parseCuestionarioPreguntas, tienePreguntas } from "../lib/quiz-preguntas";
import {
  buildFeedback,
  buildQuizFromCollection,
  contextoSorteoPreguntas,
  gradeAnswers,
  gradingQuestionsFromPayload,
  materializarPreguntasNativas,
  plantillaDeGradable,
  resolvePreguntasGrading,
  resolveScoringConfig,
  resolveStoredPresented,
  resolveVblangGrading,
  safeJsonParse,
  type AttemptGrading,
  type CodigoDePlantilla,
  type ModuleQuiz,
  type QuizFeedback,
  type QuizMetadataRecord,
  type QuizVersionRecord
} from "../lib/quiz-correccion";

const codigoDePlantilla: CodigoDePlantilla = async (id) =>
  ((await prisma.plantillaEjercicio.findFirst({ where: { id } })) as { codigoDsl?: string } | null)?.codigoDsl;

type ModuleWithQuizzes = {
  id?: string;
  title?: string;
  quizzes?: ModuleQuiz[];
  levels?: Array<{ quizzes?: ModuleQuiz[] }>;
  // WO14 — config de escala del módulo (cuando esté persistida). Hoy no es columna
  // del modelo Modulo; se lee defensivamente y, si falta, se reconcilia con el umbral.
  scoringConfig?: ScoringConfig;
};

// FIX-TEST4-ALU-04 — antes los attempts `in_progress` con más de 6
// horas seguían apareciendo en las listas del profesor y se
// contaban como "1 entrega" con score 0. La causa típica es que el
// alumno cerró la pestaña sin responder. Este helper marca esos
// attempts viejos como `aborted` para que el back los filtre de
// los promedios y el front los muestre con un label claro.
// Se ejecuta perezosamente antes del GET (no hace falta un cron
// separado: el primer GET del día limpia lo viejo).
const IN_PROGRESS_TIMEOUT_MS = 6 * 60 * 60 * 1000; // 6 horas
const staleInProgressSweep = async (): Promise<number> => {
  const cutoff = new Date(Date.now() - IN_PROGRESS_TIMEOUT_MS).toISOString();
  const result = await prisma.quizAttempt.updateMany({
    where: {
      status: "in_progress",
      startedAt: { lt: cutoff },
    },
    data: { status: "aborted" },
  });
  return result.count;
};


type QuizAttemptRecord = {
  id: string;
  moduleId: string | null;
  quizId: string;
  quizVersionId: string | null;
  userId: string;
  schoolId: string | null;
  seed: number | string | null;
  answers: Record<string, string | string[]>;
  feedback?: Record<string, QuizFeedback>;
  grading?: string | null;
  score: number;
  maxScore: number;
  status: string;
  startedAt: Date;
  submittedAt: Date | null;
  /** Etapa 1 (Tiza — preguntas nativas) — usado como `intento` del
   *  `ContextoSorteo` en `resolvePreguntasGrading`. Ya existe en el modelo
   *  Prisma (ver `attemptNo: 1` en la creación); faltaba en este subtipo. */
  attemptNo?: number | null;
};

const bodyLimitMB = (maxMb: number) => [express.json({ limit: `${maxMb}mb` })];


const findQuiz = (module: ModuleWithQuizzes | null, quizId: string) => {
  if (!module) return null;
  const direct = module.quizzes?.find((quiz) => quiz.id === quizId);
  if (direct) return direct;
  const levels = module.levels ?? [];
  for (const level of levels) {
    const match = level.quizzes?.find((quiz) => quiz.id === quizId);
    if (match) return match;
  }
  return null;
};

const buildSeed = (quiz: ModuleQuiz | null) => {
  if (!quiz) return null;
  if (quiz.fixedSeed !== undefined) return quiz.fixedSeed;
  if (quiz.generatorId) {
    return randomInt(1_000_000);
  }
  return null;
};


const fetchQuizFromCollections = async (
  quizId: string,
  moduleId?: string,
  versionId?: string
) => {
  const quizRecord = await prisma.quiz.findFirst({ where: { id: quizId } });
  const metadata: QuizMetadataRecord | null = quizRecord
    ? {
        id: quizRecord.id,
        moduleId: quizRecord.moduleId ?? null,
        title: quizRecord.title ?? undefined,
      }
    : null;

  const moduloRecord = moduleId
    ? await prisma.modulo.findFirst({ where: { id: moduleId } })
    : null;
  // WO14 + WO-3 — `scoringConfig` ahora SÍ es columna del modelo Modulo (escala
  // de notas configurada por el docente). Se persiste como JSON string; el
  // in-memory prisma de tests puede devolver el objeto directo. Se parsea
  // defensivamente (string u objeto). Si falta o es inválido, el wiring
  // reconcilia con el umbral (fallback histórico — retrocompat intacta).
  const rawScoringConfig = (
    moduloRecord as { scoringConfig?: ScoringConfig | string | null } | null
  )?.scoringConfig;
  let moduloScoringConfig: ScoringConfig | undefined;
  if (typeof rawScoringConfig === "string") {
    try {
      const parsed = JSON.parse(rawScoringConfig);
      moduloScoringConfig =
        parsed && typeof parsed === "object" ? (parsed as ScoringConfig) : undefined;
    } catch {
      moduloScoringConfig = undefined;
    }
  } else if (rawScoringConfig && typeof rawScoringConfig === "object") {
    moduloScoringConfig = rawScoringConfig;
  }
  const module: ModuleWithQuizzes | null = moduloRecord
    ? { id: moduloRecord.id, title: moduloRecord.titulo, scoringConfig: moduloScoringConfig }
    : null;

  if (!metadata) return { quiz: null, module };

  // V2-03 — si se pasa `versionId` explícito, cargar ESA versión; si no, la
  // versión actual del quiz. Esto garantiza que un intento se corrija contra
  // la versión con la que el alumno lo inició, no contra la publicada
  // actualmente. `versionMissing` se usa aguas arriba para responder 409
  // cuando la versión del intento ya no existe (en lugar de degradar a
  // currentVersionId).
  let versionMissing = false;
  let versionRecord: Awaited<ReturnType<typeof prisma.quizVersion.findFirst>> = null;
  if (versionId) {
    versionRecord = await prisma.quizVersion.findFirst({ where: { id: versionId } });
    if (!versionRecord) versionMissing = true;
  } else if (quizRecord?.currentVersionId) {
    versionRecord = await prisma.quizVersion.findFirst({ where: { id: quizRecord.currentVersionId } });
  }

  // FIX-QUIZATTEMPT — `QuizVersion.questions` es una columna `String?`
  // serializada con JSON en la DB. El cast previo
  // (`as unknown as ModuleQuiz["questions"]`) no parseaba: el front
  // recibía el string crudo, hacía `questions.map(...)` y reventaba con
  // `TypeError: questions.map is not a function`. La rama "el back lo
  // entrega como array" es la del in-memory prisma de los tests, que
  // no refleja el shape real de la DB. Mantenemos compatibilidad con
  // ambas formas (string serializado o array ya parseado) y caemos a
  // `[]` si el JSON está malformado, igual que `modulos.ts:270` y
  // `quiz-banco.ts:115,207`.
  const version: QuizVersionRecord | null = versionRecord
    ? {
        id: versionRecord.id,
        quizId: versionRecord.quizId,
        version: versionRecord.versionNumber,
        questions: versionRecord.questions
          ? (typeof versionRecord.questions === "string"
              ? safeJsonParse<ModuleQuiz["questions"]>(
                  versionRecord.questions,
                  [] as ModuleQuiz["questions"]
                )
              : (versionRecord.questions as ModuleQuiz["questions"]))
          : undefined,
        generatorId: versionRecord.generatorId ?? undefined,
        generatorVersion: versionRecord.generatorVersion ?? versionRecord.versionNumber,
        params: versionRecord.params as unknown as Record<string, unknown> | undefined,
        count: versionRecord.count ?? undefined,
        seedPolicy: versionRecord.seedPolicy ?? undefined,
        fixedSeed: versionRecord.fixedSeed ?? undefined,
        settings: versionRecord.settings ?? undefined,
      }
    : null;

  const quiz = buildQuizFromCollection(metadata, version);
  return { quiz, module, metadata, version, versionMissing };
};


type GeneratedQuestion = {
  id: string;
  prompt: string;
  questionType: "mc" | "input";
  options?: string[];
  answerKey: string;
  explanation?: string;
};

async function generateQuestionsFromConfig(
  generatorId: string,
  params: Record<string, unknown>,
  count: number,
  seed: number | string
): Promise<GeneratedQuestion[]> {
  // generator_configs is not a Prisma model; this table lives outside Prisma scope.
  // Return placeholder questions as before.
  void generatorId; void params;

  // PRNG determinístico basado en el seed
  let state = typeof seed === "number"
    ? seed >>> 0
    : String(seed).split("").reduce((h, c) => (Math.imul(h, 31) + c.charCodeAt(0)) | 0, 0) >>> 0;

  const nextRand = () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 0x100000000;
  };

  void nextRand;

  // Generar N preguntas placeholder con el subtipo y seed
  // El contenido real lo genera el cliente con generadoresV2
  // Acá solo persistimos el esqueleto para que el attempt tenga
  // maxScore correcto y el scoring pueda recibir las preguntas del cliente
  return Array.from({ length: count }, (_, i) => ({
    id: `${generatorId}/${seed}/${i}`,
    prompt: `Pregunta ${i + 1}`,
    questionType: "mc" as const,
    answerKey: "",
  }));
}

export const quizAttempts = Router();

/**
 * PLAN-J §3c #6 + PLAN-multirol — el padre puede VER el módulo y los
 * intentos de su hijo, pero no rendir en su nombre.
 *
 * La versión vieja bloqueaba sólo si TODOS los roles eran PARENT, para no
 * castigar a un PARENT+TEACHER. Eso ya dejaba un hueco (bug reportado:
 * desde el navbar de padre se llegaba a un módulo público y se podía
 * rendir), y con padre y alumno en la MISMA cuenta —roles
 * `["USER","PARENT"]`— la guarda se desactivaba del todo.
 *
 * Ahora mira el ROL ACTIVO de la sesión, que es lo que la persona eligió
 * ser en este momento (ver lib/sesion-escuela.ts): actuando como padre no
 * se rinde, tenga los roles que tenga. Para volver a rendir, cambia de rol
 * — que es exactamente la decisión que el modelo multi-rol vuelve explícita.
 */
export const actuandoComoPadre = (user: unknown): boolean => {
  const roles = resolveRoles(user as never);
  if (roles.length === 0) return false;
  // Sin sesión multi-rol (tokens viejos), `resolvePrimaryRole` devuelve el
  // de mayor jerarquía; PARENT gana sobre USER, así que el caso ambiguo
  // cae del lado seguro: no rinde.
  return resolvePrimaryRole(user as never) === "PARENT";
};

// QA-FIX-06 — Operar intentos de quiz (iniciar/ver/responder/entregar) es
// funcionalidad BASE de un módulo con quiz, no una feature enterprise. Crear y
// editar módulos con quiz (`modulos.ts`) y armar quizzes (`quiz-banco.ts`) solo
// exigen `requireUser`; gatear únicamente la operación de los intentos detrás de
// `requireEnterpriseFeature(QUIZZES)` + `requireActiveInstitutionBenefit` era una
// asimetría accidental (se podía crear pero no usar). Cada handler ya aplica su
// propia autorización por dueño/staff, así que estos endpoints solo requieren
// usuario autenticado. El gating premium real de quizzes vive en las MÉTRICAS
// agregadas (`estadisticas.ts` -> ENTERPRISE_FEATURES.QUIZZES), que se conserva.
quizAttempts.post(
  "/api/quiz-attempts",
  ...bodyLimitMB(2),
  requireUser,
  async (req, res) => {
  try {
    if (actuandoComoPadre(req.user)) {
      return res.status(403).json({ error: "role cannot start quiz attempts" });
    }
    const payload = QuizAttemptCreateSchema.parse(req.body);
    const module = payload.moduleId
      ? await prisma.modulo.findFirst({ where: { id: payload.moduleId } }).then((m) =>
          m ? ({ id: m.id, title: m.titulo } as ModuleWithQuizzes) : null
        )
      : null;
    const { quiz: collectionQuiz, metadata, version } = await fetchQuizFromCollections(
      payload.quizId,
      payload.moduleId
    );
    const quiz = collectionQuiz ?? findQuiz(module, payload.quizId);
    if (!quiz) return res.status(404).json({ error: "quiz not found" });
    const quizVersionSource = version?.version ?? quiz.generatorVersion ?? 1;
    const quizVersion = QuizVersionSchema.parse(quizVersionSource);
    const userId =
      typeof req.user?._id?.toString === "function"
        ? req.user._id.toString()
        : typeof req.user?.id === "string"
          ? req.user.id
          : "";
    if (!userId) return res.status(401).json({ error: "user not found" });
    const now = new Date();
    const resolvedModuleId = payload.moduleId ?? metadata?.moduleId ?? null;
    // FIX-DEPENDENCIAS — `Modulo.dependencies` (tipo "required") se
    // calculaba en progreso.ts (`isLocked`) y se mostraba como pastilla
    // "Bloqueado" en aula.tsx, pero nada impedía rendir el cuestionario
    // igual: el candado era sólo decorativo. Staff exceptuado (un
    // docente probando su propio contenido no tiene `ProgresoModulo`
    // como alumno, así que quedaría "bloqueado" por defecto).
    if (resolvedModuleId && !isStaffRole(req.user?.role ?? null)) {
      const moduleForLock = await prisma.modulo.findFirst({
        where: { id: resolvedModuleId },
        select: { dependencies: true }
      });
      if (moduleForLock) {
        const completedRows = await prisma.progresoModulo.findMany({
          where: { usuarioId: userId, status: "completado" },
          select: { moduloId: true }
        });
        const completedModuleIds = new Set(completedRows.map((r) => r.moduloId));
        // FIX-DEPENDENCIAS-UNLOCKS — un "unlocks" declarado desde CUALQUIER
        // otro módulo puede bloquear a éste; hace falta el universo
        // completo de dependencias (no sólo las propias) para saberlo.
        const allDependenciesById = new Map(
          (
            await prisma.modulo.findMany({
              where: { dependencies: { not: null } },
              select: { id: true, dependencies: true }
            })
          ).map((m) => [m.id, parseModuleDependencies(m.dependencies)])
        );
        const { isLocked, missingDependencyIds } = computeModuleLock(
          resolvedModuleId,
          parseModuleDependencies(moduleForLock.dependencies),
          allDependenciesById,
          completedModuleIds
        );
        // "Niveles por aula con mapa de flujo" — desbloqueo manual: gana
        // sobre el candado por dependencias, no lo reemplaza.
        if (isLocked && !(await hasActiveModuleOverride(resolvedModuleId, userId))) {
          return res.status(403).json({
            error: "Todavía no completaste los módulos previos requeridos.",
            code: "module_locked",
            missingDependencyIds
          });
        }
      }
    }
    const seed = buildSeed(quiz);
    // Etapa 1 (Tiza — preguntas nativas) — `maxScore` inicial = cantidad
    // GLOBAL declarada (estimado por cantidad de ítems, sin ponderar por
    // `puntaje` — mismo criterio que las demás ramas de abajo, que tampoco
    // ponderan a esta altura). El valor real y ponderado lo recalcula
    // `gradeAnswers` en el submit, autoritativo.
    let maxScore = tienePreguntas(quiz.preguntas)
      ? parseCuestionarioPreguntas(quiz.preguntas).cantidadGlobal
      : (quiz.questions?.length ?? quiz.count ?? 0);
    if (quiz.generatorId && (!quiz.questions || quiz.questions.length === 0)) {
      const generatedCount = quiz.count ?? 10;
      await generateQuestionsFromConfig(
        quiz.generatorId,
        (payload as Record<string, unknown>).params as Record<string, unknown> ?? {},
        generatedCount,
        seed ?? 0
      );
      maxScore = generatedCount;
    }
    if (!version?.id) {
      return res.status(400).json({
        error: "Este quiz no tiene una versión válida. Pedile al profesor que regenere el módulo.",
      });
    }
    // F3-04 — política de intentos (maxIntentos, defaults por tipo).
    // `settings.type` se persiste dentro de `QuizVersion.settings` (JSON);
    // `parseIntentoPolicy` resuelve los defaults si los campos faltan.
    const quizTipoLectura = (() => {
      if (!version.settings) return "practica";
      try {
        const parsed = JSON.parse(version.settings) as { type?: string };
        return parsed.type ?? "practica";
      } catch {
        return "practica";
      }
    })();
    const intentoPolicy: IntentoPolicy = parseIntentoPolicy(version.settings, quizTipoLectura);
    // WO-3b — leer timerSegundos para devolver deadline al front.
    const evalConfig = parseEvaluacionConfig(version.settings, quizTipoLectura);
    // Capturamos `version.id` ya narrow-eado por el guard anterior; el closure
    // de `$transaction` no preserva el type-narrowing por sí solo.
    const quizVersionId = version.id;
    // CWE-362 (race condition) fix: el findMany + validarLimiteIntentos + create
    // es un read-modify-write no atómico. Bajo concurrencia (POST paralelos con
    // el mismo userId/quizId) ambos requests ven 0 intentos previos y crean filas
    // duplicadas, saltándose `maxIntentos`. Envolvemos la lectura y la escritura
    // en `prisma.$transaction` con aislamiento `Serializable`: Postgres detecta
    // el conflicto de inserción concurrente y aborta una de las dos con P2034,
    // que mapeamos a 409 para que el cliente reintente. Adicionalmente derivamos
    // `attemptNo` = `intentosPrevios + 1` para que el campo refleje el orden real.
    type _IntentoCreateOutcome =
      | { ok: true; result: Awaited<ReturnType<typeof prisma.quizAttempt.create>>; intentosPrevios: Awaited<ReturnType<typeof prisma.quizAttempt.findMany>> }
      | { ok: false; rejected: { reason: string; code: string; maxIntentos: number | null; intentosPrevios: number } };
    let createOutcome: _IntentoCreateOutcome;
    try {
      createOutcome = await prisma.$transaction(async (tx) => {
        const prev = await tx.quizAttempt.findMany({
          where: { quizId: payload.quizId, userId }
        });
        const lim = validarLimiteIntentos(
          contarIntentosPrevios(prev, userId, payload.quizId),
          intentoPolicy.maxIntentos
        );
        if (!lim.allowed) {
          return { ok: false as const, rejected: lim };
        }
        const created = await tx.quizAttempt.create({
          data: {
            id: randomUUID(),
            quizId: payload.quizId,
            quizVersionId,
            userId,
            seed: seed !== null ? String(seed) : null,
            answers: JSON.stringify({}),
            feedback: JSON.stringify({}),
            score: 0,
            maxScore,
            status: "in_progress",
            startedAt: now.toISOString(),
            submittedAt: null,
            attemptNo: contarIntentosPrevios(prev, userId, payload.quizId) + 1,
            seedPolicy: quiz.seedPolicy !== undefined ? Number(quiz.seedPolicy) : undefined,
          }
        });
        return { ok: true as const, result: created, intentosPrevios: prev };
      }, { isolationLevel: Prisma.TransactionIsolationLevel.Serializable, timeout: 15000 });
    } catch (e: unknown) {
      const code = (e as { code?: string } | null)?.code;
      if (code === "P2034") {
        return res.status(409).json({
          error: "Conflicto al crear el intento. Reintentá la operación.",
          code: "quiz_attempt_concurrent_create"
        });
      }
      throw e;
    }
    if (!createOutcome.ok) {
      const rej = createOutcome.rejected;
      return res.status(403).json({
        error: rej.reason,
        code: rej.code,
        maxIntentos: rej.maxIntentos,
        intentosPrevios: rej.intentosPrevios
      });
    }
    const result = createOutcome.result;
    const intentosPrevios = createOutcome.intentosPrevios;
    // WO-3b — deadline del intento (null si no hay timer).
    const deadline = calcularDeadline(now, evalConfig.timerSegundos);

    res
      .status(201)
      .json({
        id: result.id,
        attemptId: result.id,
        // F3-04 — contexto de intentos para que el front pueda mostrar
        // "Te quedan N intentos" sin pedir el summary.
        intentosPrevios: contarIntentosPrevios(intentosPrevios, userId, payload.quizId),
        maxIntentos: intentoPolicy.maxIntentos,
        intentosRestantes:
          intentoPolicy.maxIntentos === null
            ? null
            : Math.max(0, intentoPolicy.maxIntentos - contarIntentosPrevios(intentosPrevios, userId, payload.quizId) - 1),
        politicaNota: intentoPolicy.politicaNota,
        // WO-3b — timer info para que el front monte el countdown.
        timerSegundos: evalConfig.timerSegundos,
        deadline
      });
  } catch (error: any) {
    res.status(400).json({ error: error?.message ?? "invalid payload" });
  }
  }
);

// F3-04 — GET /api/quiz-attempts
// Lista intentos. Tres modos:
//   1) Alumno (rol STUDENT/PARENT) sin aulaId: devuelve SUS intentos sobre el
//      quiz o módulo pedido. userId forzado al del token.
//   2) Staff (rol TEACHER/DIRECTIVO/ADMIN) sin aulaId: igual que alumno (sólo
//      los propios). Para ver intentos de otros, DEBE pasar aulaId.
//   3) Staff con aulaId: devuelve los intentos de los alumnos miembros del
//      aula, sobre el quiz/módulo pedido. El server valida que el requester
//      sea miembro del aula o directivo de la escuela.
//
// El front consume hoy dos endpoints fantasma:
//   - ModuloDetail.tsx:386 → GET /api/quiz-attempts?moduleId=...&userId=...
//   - ProfesorCalificaciones.tsx:47 → GET /api/quiz-attempts?moduleId=...&aulaId=...&quizType=formal
// Este endpoint los cubre a ambos con un único handler.
quizAttempts.get(
  "/api/quiz-attempts",
  requireUser,
  async (req, res) => {
    try {
      // FIX-TEST4-ALU-04 — limpiar attempts in_progress viejos antes
      // de devolver la lista. Fire-and-forget (no esperamos a la
      // query porque la UI no depende de cuándo termine el sweep).
      void staleInProgressSweep().catch(() => { /* ignorar */ });

      const query = QuizAttemptListQuerySchema.parse(req.query);
      const requesterId =
        typeof req.user?._id?.toString === "function"
          ? req.user._id.toString()
          : typeof req.user?.id === "string"
            ? req.user.id
            : "";
      if (!requesterId) return res.status(401).json({ error: "user not found" });

      // (1) Determinar el set de userIds a buscar.
      let targetUserIds: string[];
      if (query.aulaId) {
        // Modo staff-de-aula: validar membresía y devolver los intentos de
        // los alumnos miembros del aula.
        if (!isStaffRole(req.user?.role ?? null)) {
          return res.status(403).json({ error: "forbidden" });
        }
        const clase = await prisma.clase.findFirst({
          where: { id: query.aulaId, isDeleted: { not: true } },
          include: { miembros: true }
        });
        if (!clase) {
          return res.status(404).json({ error: "classroom not found" });
        }
        const classroom = {
          id: clase.id,
          schoolId: clase.escuelaId ?? undefined,
          members: clase.miembros.map((m) => ({ userId: m.usuarioId, roleInClass: m.rolEnClase }))
        };
        const allowed = canManageClassroom({
          requesterId,
          requesterRole: req.user?.role ?? null,
          requesterSchoolId: req.user?.schoolId ?? null,
          classroomSchoolId: classroom.schoolId ?? null,
          classroomMembers: classroom.members
        });
        if (!allowed) {
          return res.status(403).json({ error: "forbidden" });
        }
        // Alumnos miembros del aula (rolEnClase ∈ {STUDENT, USER legacy}).
        // FASE 4 — el espejo-alumno no entra en el listado de
        // calificaciones del aula (analítica de alumnos). Si el staff
        // pide explícitamente un `userId`, se respeta (no se filtra ese
        // caso puntual; es una consulta dirigida, no un roster).
        // Las inscripciones de prueba (staff o padre viviendo el contenido
        // como alumno) no son alumnos del aula a efectos de analítica.
        const alumnosAula = clase.miembros
          .filter((m) => (m.rolEnClase === "STUDENT" || m.rolEnClase === "USER") && m.esPrueba !== true)
          .map((m) => m.usuarioId);
        if (alumnosAula.length === 0 && !query.userId) {
          return res.json({ items: [], total: 0 });
        }
        targetUserIds = query.userId ? [query.userId] : alumnosAula;
      } else {
        // Modo "yo": siempre es el requester, sin importar `userId` del query.
        targetUserIds = [requesterId];
      }

      // (2) Resolver el conjunto de quizIds sobre los que buscar.
      // FIX-CALIFICACIONES — nuevo modo "aulaId solo": el requester es
      // staff del aula y pide "todas las calificaciones del aula" sin
      // filtrar por módulo/quiz específico. `targetUserIds` ya está
      // acotado a los miembros del aula, así que pasamos `targetQuizIds
      // = []` (sin filtro de quiz) y el `findMany` devuelve todos los
      // intentos de esos usuarios.
      let targetQuizIds: string[] | null;
      if (query.quizId) {
        targetQuizIds = [query.quizId];
      } else if (query.moduleId) {
        const quizzes = await prisma.quiz.findMany({ where: { moduleId: query.moduleId } });
        if (quizzes.length === 0) return res.json({ items: [], total: 0 });
        targetQuizIds = quizzes.map((q) => q.id);
      } else if (query.aulaId) {
        // Modo "todas las calificaciones del aula" — sin filtro de quiz.
        targetQuizIds = null;
      } else {
        return res.json({ items: [], total: 0 });
      }

      // (3) Buscar intentos y devolver resumen.
      // FIX-CALIFICACIONES — `targetQuizIds = null` significa "sin
      // filtro de quiz" (modo aulaId solo); en ese caso NO pasamos el
      // `quizId.in` para que el findMany traiga todos los intentos de
      // los usuarios del aula.
      const whereIntentos = {
        userId: { in: targetUserIds },
        ...(targetQuizIds ? { quizId: { in: targetQuizIds } } : {})
      };
      // H11 — la página se pide a la base (más recientes primero); antes se traían todos los intentos y se recortaban acá.
      const offset = Number((req.query as Record<string, unknown>).offset ?? 0);
      const [page, totalIntentos] = await Promise.all([
        prisma.quizAttempt.findMany({
          where: whereIntentos,
          orderBy: { startedAt: "desc" },
          take: query.limit,
          skip: Number.isInteger(offset) && offset > 0 ? offset : 0
        }),
        prisma.quizAttempt.count({ where: whereIntentos })
      ]);

      // ITEM-5 — el front (`ProfesorCalificaciones.tsx`) arma el filtro por
      // módulo y el título del quiz a partir de `moduleId`/`moduleTitle`/
      // `quizTitle` en cada item. Sin esto, el dropdown de módulos siempre
      // queda vacío (nunca se puebla otra opción además de "Todos los
      // módulos") y el filtro parece "no hacer nada" aunque el back sí
      // filtra correctamente cuando se le pasa `moduleId` (ver más abajo).
      const quizIds = Array.from(new Set(page.map((a) => a.quizId)));
      const quizRecords = quizIds.length
        ? await prisma.quiz.findMany({ where: { id: { in: quizIds } } })
        : [];
      const quizById = new Map(quizRecords.map((q) => [q.id, q]));
      const moduleIds = Array.from(
        new Set(
          quizRecords
            .map((q) => q.moduleId)
            .filter((mid): mid is string => Boolean(mid))
        )
      );
      const moduleRecords = moduleIds.length
        ? await prisma.modulo.findMany({ where: { id: { in: moduleIds } } })
        : [];
      const moduloById = new Map(moduleRecords.map((m) => [m.id, m]));
      // FIX-CALIFICACIONES-ALUMNO — ProfesorCalificaciones.tsx lista
      // intentos de VARIOS alumnos de un aula (modo 3, con aulaId) pero
      // el DTO nunca traía un nombre — la fila no tenía forma de decir
      // de quién era cada entrega. Mismo patrón de resolveUserNames ya
      // usado en aulas.ts/publicaciones.ts/modulos.ts.
      const userNameMap = await resolveUserNames(page.map((a) => a.userId));

      const items = page.map((a) => {
        const quizRecord = quizById.get(a.quizId);
        const modulo = quizRecord?.moduleId ? moduloById.get(quizRecord.moduleId) : undefined;
        return {
          id: a.id,
          quizId: a.quizId,
          quizVersionId: a.quizVersionId,
          quizTitle: quizRecord?.title ?? undefined,
          moduleId: quizRecord?.moduleId ?? null,
          moduleTitle: modulo?.titulo ?? undefined,
          userId: a.userId,
          userName: userNameMap.get(a.userId) ?? undefined,
          status: a.status,
          startedAt: a.startedAt,
          submittedAt: a.submittedAt ?? null,
          score: a.score,
          maxScore: a.maxScore,
          attemptNo: a.attemptNo ?? null,
          seed: a.seed ?? null,
          // L8 — hecho en la app sin conexión (el historial lo muestra así).
          sinConexion: Boolean(safeJsonParse<{ sinConexion?: unknown }>(a.grading as string | null | undefined, {}).sinConexion)
        };
      });
      res.json({ items, total: totalIntentos });
    } catch (error: any) {
      if (error?.name === "ZodError") {
        return res.status(400).json({ error: error.message });
      }
      res.status(400).json({ error: error?.message ?? "invalid query" });
    }
  }
);

// F3-04 — GET /api/quiz-attempts/summary
// Resumen del alumno sobre un quiz: {intentosPrevios, intentosRestantes,
// maxIntentos, politicaNota, notaActual, mejorNota, ultimaNota, primeraNota,
// promedioNota, historial[ultimosN]}. El alumno SIEMPRE ve SUYO; el staff con
// userId explícito puede pedir el de un alumno, pero requiere aulaId para
// validar membresía (modo "docente del aula").
quizAttempts.get(
  "/api/quiz-attempts/summary",
  requireUser,
  async (req, res) => {
    try {
      const query = QuizAttemptSummaryQuerySchema.parse(req.query);
      const requesterId =
        typeof req.user?._id?.toString === "function"
          ? req.user._id.toString()
          : typeof req.user?.id === "string"
            ? req.user.id
            : "";
      if (!requesterId) return res.status(401).json({ error: "user not found" });

      const queryAny = req.query as { userId?: string; aulaId?: string };
      let targetUserId = requesterId;
      if (queryAny.userId && queryAny.userId !== requesterId) {
        if (!isStaffRole(req.user?.role ?? null)) {
          return res.status(403).json({ error: "forbidden" });
        }
        if (!queryAny.aulaId) {
          return res.status(400).json({
            error: "Para consultar el resumen de otro usuario se requiere `aulaId`."
          });
        }
        const clase = await prisma.clase.findFirst({
          where: { id: queryAny.aulaId, isDeleted: { not: true } },
          include: { miembros: true }
        });
        if (!clase) return res.status(404).json({ error: "classroom not found" });
        const classroom = {
          id: clase.id,
          schoolId: clase.escuelaId ?? undefined,
          members: clase.miembros.map((m) => ({ userId: m.usuarioId, roleInClass: m.rolEnClase }))
        };
        const allowed = canManageClassroom({
          requesterId,
          requesterRole: req.user?.role ?? null,
          requesterSchoolId: req.user?.schoolId ?? null,
          classroomSchoolId: classroom.schoolId ?? null,
          classroomMembers: classroom.members
        });
        if (!allowed) {
          return res.status(403).json({ error: "forbidden" });
        }
        targetUserId = queryAny.userId;
      }

      // Política del quiz.
      const version = await prisma.quizVersion.findFirst({
        where: { quizId: query.quizId }
      });
      const settings = version?.settings ?? null;
      const quizTipoLectura = (() => {
        if (!settings) return "practica";
        try {
          const parsed = JSON.parse(settings) as { type?: string };
          return parsed.type ?? "practica";
        } catch {
          return "practica";
        }
      })();
      const policy = parseIntentoPolicy(settings, quizTipoLectura);

      const attempts = await prisma.quizAttempt.findMany({
        where: { quizId: query.quizId, userId: targetUserId }
      });
      const finalizados = attempts.filter((a) => a.status !== "aborted");
      const intentosPrevios = finalizados.length;
      const notas = calcularNotas(finalizados);
      const notaActual = aplicarPolitica(finalizados, policy.politicaNota);

      res.json({
        quizId: query.quizId,
        userId: targetUserId,
        maxIntentos: policy.maxIntentos,
        intentosPrevios,
        intentosRestantes:
          policy.maxIntentos === null
            ? null
            : Math.max(0, policy.maxIntentos - intentosPrevios),
        politicaNota: policy.politicaNota,
        notaActual,
        mejorNota: notas.mejor,
        ultimaNota: notas.ultima,
        primeraNota: notas.primera,
        promedioNota: notas.promedio,
        historial: finalizados
          .sort((a, b) =>
            String(b.startedAt ?? "").localeCompare(String(a.startedAt ?? ""))
          )
          .slice(0, 20)
          .map((a) => ({
            id: a.id,
            status: a.status,
            startedAt: a.startedAt,
            submittedAt: a.submittedAt ?? null,
            score: a.score,
            maxScore: a.maxScore,
            attemptNo: a.attemptNo ?? null
          }))
      });
    } catch (error: any) {
      if (error?.name === "ZodError") {
        return res.status(400).json({ error: error.message });
      }
      res.status(400).json({ error: error?.message ?? "invalid query" });
    }
  }
);


// WO07 — lista de intentos con preguntas abiertas pendientes de corrección, para
// que el profe (staff) las corrija desde ProfesorCalificaciones.
//
// IMPORTANTE: se registra ANTES de `/:id` para que Express no lo capture como
// un attempt con id="pending-grading". Tampoco lleva el gate de enterprise: es
// una vista de corrección del docente, no un intento de alumno.
quizAttempts.get(
  "/api/quiz-attempts/pending-grading",
  requireUser,
  async (req, res) => {
    if (!isStaffRole(req.user?.role)) {
      return res.status(403).json({ error: "forbidden" });
    }
    const requesterId =
      typeof req.user?._id?.toString === "function"
        ? req.user._id.toString()
        : typeof req.user?.id === "string"
          ? req.user.id
          : "";
    const requesterSchoolId =
      typeof req.user?.schoolId === "string" ? req.user.schoolId : null;
    const limit = Math.min(
      Number.parseInt(String(req.query.limit ?? "50"), 10) || 50,
      200
    );

    const pending = (await prisma.quizAttempt.findMany({
      where: { status: "pending_review" },
      orderBy: { submittedAt: "desc" },
      take: limit
    })) as unknown as QuizAttemptRecord[];

    const items: Array<Record<string, unknown>> = [];
    const studentIds = new Set<string>();

    for (const attempt of pending) {
      const quizRecord = await prisma.quiz.findFirst({ where: { id: attempt.quizId } });
      if (!quizRecord) continue;
      const modulo = quizRecord.moduleId
        ? await prisma.modulo.findFirst({ where: { id: quizRecord.moduleId } })
        : null;
      // Alcance: módulos del profe o de su misma escuela.
      const owns = modulo?.ownerUserId && modulo.ownerUserId === requesterId;
      const sameSchool =
        requesterSchoolId && modulo?.schoolId && modulo.schoolId === requesterSchoolId;
      if (!owns && !sameSchool) continue;

      const grading = safeJsonParse<AttemptGrading>(
        attempt.grading as unknown as string,
        { autoScore: 0, items: {} }
      );
      const gradingItems = Object.entries(grading.items)
        .filter(([, it]) => it.score === null)
        .map(([questionId, it]) => ({
          questionId,
          prompt: it.prompt ?? "",
          response: it.response ?? "",
          points: it.points
        }));
      if (gradingItems.length === 0) continue;

      studentIds.add(attempt.userId);
      items.push({
        id: attempt.id,
        quizId: attempt.quizId,
        quizTitle: quizRecord.title ?? modulo?.titulo ?? "Quiz",
        moduleId: quizRecord.moduleId ?? null,
        userId: attempt.userId,
        submittedAt: attempt.submittedAt,
        score: attempt.score,
        maxScore: attempt.maxScore,
        items: gradingItems
      });
    }

    const usuarios = studentIds.size
      ? await prisma.usuario.findMany({
          where: { id: { in: [...studentIds] }, isDeleted: { not: true } },
          select: { id: true, fullName: true, username: true }
        })
      : [];
    const nameMap = new Map(
      usuarios.map((u) => [String(u.id ?? ""), String(u.fullName ?? u.username ?? "Alumno")])
    );
    for (const it of items) {
      it.studentName = nameMap.get(String(it.userId)) ?? "Alumno";
    }

    return res.json({ items });
  }
);

quizAttempts.get(
  "/api/quiz-attempts/:id",
  requireUser,
  async (req, res) => {
    // Mismo criterio que POST /api/quiz-attempts: actuando como padre no
    // se rinde. Estaba SÓLO en la creación, así que un intento ya abierto
    // se podía seguir respondiendo y entregando desde la sesión de padre.
    if (actuandoComoPadre(req.user)) {
      return res.status(403).json({ error: "role cannot modify quiz attempts" });
    }
  const idParam = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  if (!idParam) return res.status(400).json({ error: "invalid attempt id" });
  const userId =
    typeof req.user?._id?.toString === "function"
      ? req.user._id.toString()
      : typeof req.user?.id === "string"
        ? req.user.id
        : "";
  if (!userId) return res.status(401).json({ error: "user not found" });
  const attempt = await prisma.quizAttempt.findFirst({ where: { id: idParam, userId } }) as QuizAttemptRecord | null;
  if (!attempt) return res.status(404).json({ error: "attempt not found" });
  const { quiz: collectionQuiz, metadata, module, version: getVersion, versionMissing } = await fetchQuizFromCollections(
    attempt.quizId,
    attempt.moduleId ?? undefined,
    attempt.quizVersionId ?? undefined
  );
  if (versionMissing) {
    return res.status(409).json({
      error: "la versión del quiz de este intento ya no está disponible"
    });
  }
  const quiz = collectionQuiz ?? findQuiz(module, attempt.quizId);

  // WO-3b — timer info para que el front pueda retomar el countdown.
  const getQuizTipo = (() => {
    if (!getVersion?.settings) return "practica";
    try {
      const p = JSON.parse(getVersion.settings) as { type?: string };
      return p.type ?? "practica";
    } catch {
      return "practica";
    }
  })();
  const getEvalConfig = parseEvaluacionConfig(getVersion?.settings, getQuizTipo);

  // PLAN-D §1 (Fase 3) — cierre lazy: si el intento venció (según
  // `politicaExpiracion`), materializarlo como enviado-automático ANTES de
  // construir la respuesta, para que el GET nunca devuelva un `in_progress`
  // fantasma. Con las respuestas YA guardadas (F5-01), no las del payload
  // (acá no hay payload: el alumno no lo tocó).
  let currentAttempt = attempt;
  if (
    currentAttempt.status === "in_progress" &&
    debeAutoCerrarIntento(
      currentAttempt.startedAt as unknown as string,
      getEvalConfig.timerSegundos,
      getEvalConfig.politicaExpiracion
    )
  ) {
    const storedAnswers = safeJsonParse<Record<string, string | string[]>>(
      currentAttempt.answers as unknown as string,
      {}
    );
    const autoPayload = QuizAttemptSubmitSchema.parse({ answers: storedAnswers });
    const closed = await materializeSubmit(idParam, userId, currentAttempt, autoPayload, {
      auto: true
    });
    if (closed) {
      const refreshed = (await prisma.quizAttempt.findFirst({
        where: { id: idParam, userId }
      })) as QuizAttemptRecord | null;
      if (refreshed) currentAttempt = refreshed;
    }
  }

  const getDeadline = calcularDeadline(
    currentAttempt.startedAt as unknown as string,
    getEvalConfig.timerSegundos
  );

  // V2-04 — el alumno es el único que llega hasta acá con el handler actual
  // (el filtro es `id + userId`). Sanitizamos por defecto; si en el futuro
  // el handler se abre al staff, debería saltarse la sanitización.
  const requesterRole =
    (req.user as { role?: string | null } | undefined)?.role ?? null;
  // Etapa 1 (Tiza — preguntas nativas) — hasta acá este handler sólo leía
  // `quiz.questions` (el campo legacy de preguntas manuales/generadorId),
  // que para un cuestionario `settings.preguntas` está vacío: el alumno
  // nunca llegaba a VER las preguntas (sólo se corregían bien al entregar,
  // vía `resolvePreguntasGrading`). Acá se materializa lo mismo que el
  // submit, con el mismo `ctx` determinista — mismo contenido en ambos
  // lados, id estable entre GETs repetidos (`idEstablePorSlot`).
  const preguntasQuestions = tienePreguntas(quiz?.preguntas)
    ? await materializarPreguntasNativas(
        parseCuestionarioPreguntas(quiz!.preguntas),
        contextoSorteoPreguntas(quiz!, currentAttempt.quizId, currentAttempt.userId, currentAttempt.attemptNo),
        codigoDePlantilla
      )
    : null;
  const questionsBase = preguntasQuestions ?? quiz?.questions ?? [];
  // PLAN-C11 — un intento ya finalizado (modo revisión, WO-T2a) puede
  // revelar pasos/pistas (es la resolución de algo que el alumno ya
  // entregó); uno `in_progress` no, o filtraría la respuesta antes de
  // responder.
  const questionsForResponse =
    isStaffRole(requesterRole)
      ? questionsBase
      : sanitizeQuestionsForStudent(questionsBase, currentAttempt.quizVersionId ?? currentAttempt.quizId, {
          revealSolution: currentAttempt.status !== "in_progress"
        });
  const notaRevision: Record<string, unknown> = {};
  const scoreRev = typeof currentAttempt.score === "number" ? currentAttempt.score : null;
  const maxRev = typeof currentAttempt.maxScore === "number" ? currentAttempt.maxScore : 0;
  if ((currentAttempt.status === "submitted" || currentAttempt.status === "graded") && scoreRev !== null && maxRev > 0) {
    const umbralRow = await prisma.quizUmbral.findUnique({ where: { quizId: currentAttempt.quizId }, select: { umbral: true } });
    const nota = gradeFromConfig(scoreRev / maxRev, resolveScoringConfig(module?.scoringConfig, umbralRow?.umbral ?? 60));
    notaRevision.notaDisplay = nota.display;
    notaRevision.notaCanonical10 = nota.canonical10;
    notaRevision.aprobado = nota.passing === true;
    notaRevision.porcentaje = Math.round((scoreRev / maxRev) * 100);
  }
  res.json({
    id: currentAttempt.id,
    attemptId: currentAttempt.id,
    moduleId: currentAttempt.moduleId ?? undefined,
    quizId: currentAttempt.quizId,
    quizTitle: quiz?.title ?? metadata?.title ?? module?.title ?? "Quiz",
    status: currentAttempt.status,
    // WO-T2a — score/maxScore del intento persistido, para que el front pueda
    // mostrar el resultado en modo revisión (intento ya finalizado) sin
    // depender del response efímero del submit.
    score: currentAttempt.score,
    maxScore: currentAttempt.maxScore,
    // SM-04 — la nota del intento terminado, con la misma escala que al entregarlo (antes la revisión mostraba
    // el puntaje pero no la nota). Sin nota mientras haya preguntas sin corregir.
    ...notaRevision,
    timerSegundos: getEvalConfig.timerSegundos,
    deadline: getDeadline,
    questions: questionsForResponse,
    answers: currentAttempt.answers
      ? safeJsonParse(currentAttempt.answers as unknown as string, {} as Record<string, unknown>)
      : {},
    feedback: currentAttempt.feedback
      ? safeJsonParse(currentAttempt.feedback as unknown as string, {} as Record<string, unknown>)
      : {},
    // WO07 — estado de corrección manual (auto-score + ítems pendientes/corregidos).
    grading: currentAttempt.grading
      ? safeJsonParse(currentAttempt.grading as unknown as string, {
          autoScore: 0,
          items: {}
        })
      : undefined,
    quiz: quiz ? { title: quiz.title, questions: questionsForResponse } : undefined,
    generatorId: quiz?.generatorId ?? undefined,
    seed: currentAttempt.seed ?? undefined,
    count: quiz?.count ?? undefined,
    instructions: quiz?.instructions ?? undefined,
    displayCount: quiz?.displayCount ?? undefined,
    composition: quiz?.composition ?? undefined,
    quizType: quiz?.type ?? undefined
  });
  }
);

/**
 * C3 — ¿este personal puede ver o corregir el intento de OTRO alumno? El ADMIN siempre; el docente si es
 * autor del cuestionario o del módulo, si el módulo es de su escuela, o si el alumno pertenece a su escuela.
 * Antes solo se pedía ser personal (de cualquier escuela) y `GET .../staff` comparaba contra
 * `attempt.schoolId`, una columna que no existe: un docente de otra escuela veía y cambiaba la nota de
 * cualquier alumno.
 */
async function staffPuedeGestionarIntento(
  req: express.Request,
  attempt: { quizId: string; userId: string }
): Promise<boolean> {
  const user = req.user as { _id?: { toString?: () => string } | string; id?: string; schoolId?: string | null } | undefined;
  if (hasRole(user as never, "ADMIN")) return true;
  const requesterId =
    (typeof user?.id === "string" && user.id) ||
    (typeof user?._id === "string" && user._id) ||
    (user?._id && typeof user._id === "object" ? user._id.toString?.() : null) ||
    null;
  const requesterSchool = typeof user?.schoolId === "string" ? user.schoolId : null;
  const quiz = await prisma.quiz.findFirst({ where: { id: attempt.quizId } });
  const modulo = quiz?.moduleId ? await prisma.modulo.findFirst({ where: { id: quiz.moduleId } }) : null;
  if (requesterId && (quiz?.ownerUserId === requesterId || modulo?.ownerUserId === requesterId)) return true;
  if (requesterSchool && modulo?.schoolId === requesterSchool) return true;
  return !!requesterSchool && (await perteneceAEscuela(requesterSchool, attempt.userId));
}

// F5-03 — Vista docente de un intento: devuelve el attempt + el JSON
// `grading` COMPLETO (incluyendo `events` con el counter de salidas y
// cualquier flag que V2-04 / I-2 haya seteado). Sólo accesible para
// staff (TEACHER/ADMIN/etc.) de la MISMO escuela que el alumno.
//
// Razón: el handler general `GET /api/quiz-attempts/:id` está filtrado
// por `userId` (sólo el alumno dueño). Para la vista del docente, abrir
// ese handler a staff implicaría revisar muchas invariantes (sanitización
// de canarios, etc.). Crear un endpoint dedicado es más seguro y deja el
// handler del alumno intacto.
quizAttempts.get(
  "/api/quiz-attempts/:id/staff",
  requireUser,
  async (req, res) => {
    const idParam = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
    if (!idParam) return res.status(400).json({ error: "invalid attempt id" });
    const requesterRole =
      (req.user as { role?: string | null } | undefined)?.role ?? null;
    if (!isStaffRole(requesterRole)) {
      return res.status(403).json({ error: "forbidden" });
    }
    const attempt = (await prisma.quizAttempt.findFirst({
      where: { id: idParam }
    })) as QuizAttemptRecord | null;
    if (!attempt) return res.status(404).json({ error: "attempt not found" });

    // El docente sólo ve intentos de su escuela (o de módulos propios).
    if (!(await staffPuedeGestionarIntento(req, attempt))) {
      return res.status(403).json({ error: "forbidden" });
    }

    const grading = attempt.grading
      ? safeJsonParse<Record<string, unknown>>(
          attempt.grading as unknown as string,
          {}
        )
      : {};

    res.json({
      id: attempt.id,
      moduleId: attempt.moduleId ?? undefined,
      quizId: attempt.quizId,
      userId: attempt.userId,
      status: attempt.status,
      score: attempt.score,
      maxScore: attempt.maxScore,
      submittedAt: attempt.submittedAt ?? undefined,
      startedAt: attempt.startedAt ?? undefined,
      grading,
      // Resumen ya procesado: el front sólo lee `events` con esto.
      events: summarizeAttemptEvents(grading)
    });
  }
);

// F5-01 — Guardado incremental e idempotente de UNA respuesta.
//
// Regla del plan (ronda 6 K4): "es problema de la conexión de la escuela, no del
// alumno". El reproductor envía cada respuesta apenas se contesta; si la red está
// caída encola en localStorage y reintenta. Este endpoint hace UPSERT de
// `answers[questionId]` en el intento: la idempotencia es por (intento,
// questionId), así que reenviar la misma clave (reintento de la cola) NO duplica,
// sólo actualiza. No corrige nada — la corrección sigue en /submit, que ahora
// fusiona estas respuestas parciales con las del payload final.
quizAttempts.post(
  "/api/quiz-attempts/:id/answer",
  ...bodyLimitMB(1),
  requireUser,
  async (req, res) => {
    try {
    // Mismo criterio que POST /api/quiz-attempts: actuando como padre no
    // se rinde. Estaba SÓLO en la creación, así que un intento ya abierto
    // se podía seguir respondiendo y entregando desde la sesión de padre.
    if (actuandoComoPadre(req.user)) {
      return res.status(403).json({ error: "role cannot modify quiz attempts" });
    }
      const payload = QuizAttemptAnswerSchema.parse(req.body);
      const idParam = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
      if (!idParam) return res.status(400).json({ error: "invalid attempt id" });
      const userId =
        typeof req.user?._id?.toString === "function"
          ? req.user._id.toString()
          : typeof req.user?.id === "string"
            ? req.user.id
            : "";
      if (!userId) return res.status(401).json({ error: "user not found" });

      const attempt = (await prisma.quizAttempt.findFirst({
        where: { id: idParam, userId }
      })) as QuizAttemptRecord | null;
      if (!attempt) return res.status(404).json({ error: "attempt not found" });

      // Un intento ya entregado/corregido no acepta más respuestas parciales: la
      // cola debe descartar este ítem (error terminal, no reintentable).
      if (attempt.submittedAt || attempt.status === "submitted" || attempt.status === "pending_review") {
        return res.status(409).json({ error: "attempt already submitted" });
      }

      // PLAN-D §1 (Fase 3) — cierre lazy: si el intento venció mientras el
      // alumno seguía respondiendo (pestaña abierta pasado el deadline), este
      // POST lo materializa como enviado-automático en vez de aceptar una
      // respuesta más sobre un intento que ya no está "en curso".
      const { version: answerVersion } = await fetchQuizFromCollections(
        attempt.quizId,
        attempt.moduleId ?? undefined,
        attempt.quizVersionId ?? undefined
      );
      const answerQuizTipo = (() => {
        if (!answerVersion?.settings) return "practica";
        try {
          const p = JSON.parse(answerVersion.settings) as { type?: string };
          return p.type ?? "practica";
        } catch {
          return "practica";
        }
      })();
      const answerEvalConfig = parseEvaluacionConfig(answerVersion?.settings, answerQuizTipo);
      if (
        debeAutoCerrarIntento(
          attempt.startedAt as unknown as string,
          answerEvalConfig.timerSegundos,
          answerEvalConfig.politicaExpiracion
        )
      ) {
        const storedAnswers = safeJsonParse<Record<string, string | string[]>>(
          attempt.answers as unknown as string,
          {}
        );
        const autoPayload = QuizAttemptSubmitSchema.parse({ answers: storedAnswers });
        await materializeSubmit(idParam, userId, attempt, autoPayload, { auto: true });
        return res.status(409).json({ error: "attempt already submitted" });
      }

      const stored = safeJsonParse<Record<string, string | string[]>>(
        attempt.answers as unknown as string,
        {}
      );
      // Upsert idempotente por questionId.
      stored[payload.questionId] = payload.response;
      await prisma.quizAttempt.updateMany({
        where: { id: idParam },
        data: { answers: JSON.stringify(stored) }
      });

      return       res.json({
        ok: true,
        questionId: payload.questionId,
        answeredCount: Object.keys(stored).length
      });
    } catch (error: any) {
      res.status(400).json({ error: error?.message ?? "invalid payload" });
    }
  }
);

// F5-03 — Eventos informativos del intento (PATCH de flags en `grading`).
//
// Plan K5/L2: el docente debe VER qué pasó durante el intento, pero el
// sistema NO debe penalizar automáticamente. Este endpoint acepta un patch
// monotónico del contador de salidas de pestaña y lo fusiona en el JSON
// `grading` del intento (mismo canal que el canario de V2-04). NO toca
// score, status, ni items.
//
// PRIVACIDAD: el cliente NUNCA envía QUÉ pestaña/app se abrió, sólo el
// contador numérico. El navegador no expone esa información y F5-03
// mantiene esa garantía (ver `useFlushCounter` en el front).
//
// Idempotencia: el server hace merge monotónico (nunca decrementa). Si
// llegan PATCHes fuera de orden, gana el valor más alto visto. Esto
// elimina la necesidad de locks cliente y simplifica reintentos.
quizAttempts.patch(
  "/api/quiz-attempts/:id",
  ...bodyLimitMB(1),
  requireUser,
  async (req, res) => {
    try {
      const payload = QuizAttemptEventsPatchSchema.parse(req.body);
      const idParam = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
      if (!idParam) return res.status(400).json({ error: "invalid attempt id" });
      const userId =
        typeof req.user?._id?.toString === "function"
          ? req.user._id.toString()
          : typeof req.user?.id === "string"
            ? req.user.id
            : "";
      if (!userId) return res.status(401).json({ error: "user not found" });

      const attempt = (await prisma.quizAttempt.findFirst({
        where: { id: idParam, userId }
      })) as QuizAttemptRecord | null;
      if (!attempt) return res.status(404).json({ error: "attempt not found" });

      // Un intento ya entregado/corregido no acepta nuevos eventos: la
      // semántica es "registrar lo que pasó en el intento EN CURSO", no
      // modificar algo ya cerrado. El submit (que se ejecuta antes) puede
      // hacer su propio guardado del contador en el payload si lo necesita
      // en el futuro.
      if (
        attempt.submittedAt ||
        attempt.status === "submitted" ||
        attempt.status === "pending_review" ||
        attempt.status === "graded"
      ) {
        return res.status(409).json({ error: "attempt already closed" });
      }

      const currentGrading = safeJsonParse<Record<string, unknown>>(
        attempt.grading as unknown as string,
        {}
      );
      const nextGrading = mergeAttemptEvents(currentGrading, payload);
      const summary = summarizeAttemptEvents(nextGrading);

      await prisma.quizAttempt.updateMany({
        where: { id: idParam },
        data: { grading: JSON.stringify(nextGrading) }
      });

      // Devolvemos el resumen; el front lo usa para mostrar el panel
      // actualizado en la vista del docente (si está abierta) o sólo para
      // confirmar que el server lo guardó.
      res.json({
        ok: true,
        events: summary
      });
    } catch (error: any) {
      res.status(400).json({ error: error?.message ?? "invalid payload" });
    }
  }
);

// PLAN-D §1 (Fase 3) — resultado de `materializeSubmit`. `null` sólo puede
// ocurrir en el modo `auto` (cierre lazy) cuando el quiz no es
// materializable server-side (generadoresV2): en ese caso NO se auto-cierra,
// el intento queda `in_progress` (mismo comportamiento previo a PLAN-D).
type MaterializeSubmitResult = { status: number; body: Record<string, unknown> };
type MaterializeOptions = {
  auto?: boolean;
  /** L8 — intento hecho en la app sin conexión: la hora de la entrega es la del dispositivo, no la de la sincronización. */
  ahora?: Date;
  /** L8 — lo que corrigió el dispositivo; si la nota no coincide, el intento queda marcado para revisión. */
  sinConexion?: { dispositivo: string; scoreLocal: number; maxScoreLocal: number; sorteo: string };
};

function buildAlreadySubmittedBody(attempt: QuizAttemptRecord): Record<string, unknown> {
  // PLAN-D §1 (riesgo "doble envío") — un intento que ya no está
  // `in_progress` (enviado por el alumno o auto-cerrado por vencimiento) NO
  // se vuelve a corregir: se devuelve un snapshot del resultado ya
  // persistido. El detalle completo (nota, aprobado, etc.) vive en
  // `GET /api/quiz-attempts/:id`, que el front ya usa para el modo revisión.
  return {
    status: attempt.status,
    score: attempt.score,
    maxScore: attempt.maxScore,
    alreadySubmitted: true,
    message: "Este intento ya fue enviado."
  };
}

// PLAN-D §1 (Fase 3) — núcleo de corrección + persistencia de un submit,
// extraído del handler HTTP para poder reutilizarlo desde el cierre lazy por
// expiración (GET/:id y POST/:id/answer materializan un intento vencido sin
// esperar a que el alumno presione Enviar). `options.auto` distingue un
// cierre automático (sin payload del alumno, respuestas = lo guardado) de un
// submit explícito.
async function materializeSubmit(
  idParam: string,
  userId: string,
  attempt: QuizAttemptRecord,
  payload: QuizAttemptSubmit,
  options: MaterializeOptions = {}
): Promise<MaterializeSubmitResult | null> {
      const { quiz: collectionQuiz, version, module, versionMissing } = await fetchQuizFromCollections(
        attempt.quizId,
        attempt.moduleId ?? undefined,
        attempt.quizVersionId ?? undefined
      );
      if (versionMissing) {
        return {
          status: 409,
          body: { error: "la versión del quiz de este intento ya no está disponible" }
        };
      }
      const quiz = collectionQuiz ?? findQuiz(module, attempt.quizId);
      if (!quiz) return { status: 404, body: { error: "quiz not found" } };

      // WO-3b — enforcar tiempo límite server-side.
      const submitQuizTipo = (() => {
        if (!version?.settings) return "practica";
        try {
          const p = JSON.parse(version.settings) as { type?: string };
          return p.type ?? "practica";
        } catch {
          return "practica";
        }
      })();
      const submitEvalConfig = parseEvaluacionConfig(version?.settings, submitQuizTipo);
      const tiempoCheck = validarTiempoLimite(
        attempt.startedAt as unknown as string,
        submitEvalConfig.timerSegundos,
        options.ahora
      );

      const normalizedQuizVersion = QuizVersionSchema.parse(
        version?.version ?? quiz?.generatorVersion ?? 1
      );
      // I-2 — construir el set de preguntas a corregir según el tipo de quiz:
      //  - Plantilla VBLang (`generatorId` = "plantilla:<id>"): el servidor
      //    REGENERA las preguntas desde el seed del intento y corrige contra SU
      //    materialización. `payload.generatedQuestions` deja de ser fuente de
      //    verdad (cierra el ataque de devtools).
      //  - generadoresV2 (otros `generatorId`): no materializable server-side
      //    (los generadores viven en apps/web); se mantiene el comportamiento
      //    previo pero el intento se marca serverAuthoritative=false.
      //  - Manual / banco (`quiz.questions`): están persistidas; si hubo pool/
      //    selección, el subconjunto presentado se acota (paso 3).
      // Se conserva la composición para el peso por defecto.
      const hasStoredQuestions = (quiz.questions?.length ?? 0) > 0;
      const generatorId = typeof quiz.generatorId === "string" ? quiz.generatorId : null;
      // Etapa 1 (Tiza — preguntas nativas) — chequeado PRIMERO: un quiz con
      // `settings.preguntas` no tiene banco estático ni un `generatorId`
      // único (cada `PreguntaQuiz` trae su propia plantilla), así que sin
      // este branch caería en el `else` de abajo (`resolveStoredPresented`,
      // pensado para banco+composition). Los quizzes existentes (con
      // `composition`/banco/generatorId) NUNCA tienen `settings.preguntas`,
      // así que este branch no les afecta ni un bit.
      const isPreguntasNativas = tienePreguntas(quiz.preguntas);
      const isVblangTemplate =
        !isPreguntasNativas &&
        !hasStoredQuestions &&
        generatorId !== null &&
        generatorId.startsWith("plantilla:");
      const isGeneradorV2 =
        !isPreguntasNativas &&
        !hasStoredQuestions &&
        generatorId !== null &&
        !generatorId.startsWith("plantilla:");

      let gradingQuestions: ModuleQuiz["questions"];
      let serverAuthoritative = true;
      let mismatchQuestions: string[] = [];
      if (isPreguntasNativas) {
        const resolved = await resolvePreguntasGrading(quiz, attempt, payload, codigoDePlantilla);
        gradingQuestions = resolved.gradingQuestions;
        serverAuthoritative = resolved.serverAuthoritative;
        mismatchQuestions = resolved.mismatchQuestions;
      } else if (isVblangTemplate) {
        const resolved = await resolveVblangGrading(quiz, attempt, payload, generatorId!, codigoDePlantilla);
        gradingQuestions = resolved.gradingQuestions;
        serverAuthoritative = resolved.serverAuthoritative;
        mismatchQuestions = resolved.mismatchQuestions;
      } else if (isGeneradorV2) {
        // PLAN-D §1 — un cierre AUTOMÁTICO (sin submit explícito del alumno)
        // no puede corregir generadoresV2: la clave de respuesta sólo viaja
        // en `payload.generatedQuestions`, que un cierre lazy no tiene (no
        // hay payload del alumno). Se deja el intento `in_progress`; el
        // cierre lazy simplemente no aplica a este tipo de quiz (mismo
        // comportamiento previo a PLAN-D).
        if (options.auto) return null;
        // generadoresV2: la nota depende del cliente. No se bloquea (política de
        // producto para la tanda 2), sólo se marca para la UI del docente.
        serverAuthoritative = false;
        gradingQuestions = gradingQuestionsFromPayload(quiz, payload);
      } else {
        // F-2c — preguntas almacenadas. El subconjunto presentado se DERIVA
        // server-side desde `attempt.seed` + composición con el mismo algoritmo
        // del reproductor (`selectPoolIndices`, replicado en quiz-composition),
        // en vez de creerle a `payload.presentedIds`. Así un alumno no puede
        // declarar que sólo vio las preguntas que respondió bien.
        gradingQuestions = resolveStoredPresented(quiz, attempt, payload);
      }
      if (!serverAuthoritative || mismatchQuestions.length > 0) {
        // "loguear discrepancia" (mismo espíritu que el canario V2-04): visibilidad
        // de ops. El registro durable para el docente va en el `grading` JSON.
        console.warn(
          `[quiz-attempts] submit no server-autoritativo o con discrepancia: attempt=${idParam} ` +
            `quiz=${attempt.quizId} serverAuthoritative=${serverAuthoritative} ` +
            `mismatch=${mismatchQuestions.length}`
        );
      }
      // F5-01 — fusionar las respuestas YA guardadas incrementalmente (cola
      // offline / envío por pregunta) con las del payload final. Si la red se
      // cayó a mitad del quiz, las parciales persistidas en `attempt.answers`
      // siguen contando aunque el payload de /submit llegue incompleto. El
      // payload pisa al stored ante conflicto (es la versión más reciente que el
      // alumno vio). Mutamos `payload.answers` para que todo el flujo de
      // corrección y persistencia use la unión.
      const storedAnswers = safeJsonParse<Record<string, string | string[]>>(
        attempt.answers as unknown as string,
        {}
      );
      payload.answers = { ...storedAnswers, ...payload.answers };

      const gradingQuiz: ModuleQuiz = { ...quiz, questions: gradingQuestions };
      const { score, maxScore, manual } = gradeAnswers(gradingQuiz, payload.answers);
      const feedback = buildFeedback(gradingQuiz, payload.answers);

      // F5-03 — preservar los eventos informativos (counter de salidas de
      // pestaña) que el cliente PATCHeó durante la evaluación. El submit
      // construye el `grading` desde cero (canary, mismatch, items) y
      // sobrescribiría esos events. Leemos el `grading` previo y
      // arrastramos sólo la sub-llave `events` — preservando la garantía
      // de que el submit no inventa datos y los events PATCHeados
      // siguen visibles para el docente.
      const priorGrading = safeJsonParse<Record<string, unknown>>(
        attempt.grading as unknown as string,
        {}
      );
      const priorEvents =
        typeof priorGrading.events === "object" && priorGrading.events !== null
          ? (priorGrading.events as Record<string, unknown>)
          : null;

      // V2-04 — detección de canario. Si el alumno envío un canario
      // (answerKey del payload sanitizado que se filtró al frontend) como
      // respuesta, registramos el flag en `grading` y contamos la pregunta
      // como incorrecta (el canario nunca coincide con la respuesta real).
      // NO acusamos automáticamente: es info para el docente.
      const canaryQuestions: string[] = [];
      for (const [questionId, response] of Object.entries(payload.answers ?? {})) {
        if (Array.isArray(response)) {
          if (response.some((v) => isCanaryAnswer(v))) {
            canaryQuestions.push(questionId);
          }
        } else if (isCanaryAnswer(response)) {
          canaryQuestions.push(questionId);
        }
      }
      const canaryTriggered = canaryQuestions.length > 0;

      // WO07 — máquina de estados: si hay ítems `manual`, el intento queda
      // "pendiente de corrección" (pending_review) y no es nota final hasta que
      // el profe la corrija. Sin manuales, sigue siendo "submitted".
      const grading: AttemptGrading = {
        autoScore: score,
        items: {},
        // I-2 — la nota es server-autoritativa salvo generadoresV2 / plantilla
        // no materializable server-side (ver arriba).
        serverAuthoritative,
      };
      if (canaryTriggered) {
        grading.canaryTriggered = true;
        grading.canaryQuestions = canaryQuestions;
      }
      if (mismatchQuestions.length > 0) {
        // I-2 — el cliente afirmó answerKeys que no coinciden con lo regenerado:
        // indicador de manipulación (mismo canal que el canario). No bloquea.
        grading.materializationMismatch = true;
        grading.mismatchQuestions = mismatchQuestions;
      }
      // WO-3b — registrar si el intento se envió fuera de tiempo.
      if (tiempoCheck.exceeded) {
        grading.tiempoExcedido = true;
        grading.tiempoElapsedSec = tiempoCheck.elapsedSec;
        grading.tiempoLimiteSec = tiempoCheck.limitSec;
      }
      // Repaso — enunciado y plantilla de cada pregunta, para explicarle al alumno en qué temas falló
      // (`GET /api/quiz-attempts/:id/repaso`). Solo las que salen de plantillas de un cuestionario por preguntas.
      const repaso: Record<string, { prompt: string; plantillaId: string }> = {};
      for (const q of gradingQuestions ?? []) {
        const pid = plantillaDeGradable.get(q as object);
        if (pid) repaso[q.id] = { prompt: String(q.prompt ?? "").slice(0, 400), plantillaId: pid };
      }
      if (Object.keys(repaso).length > 0) (grading as Record<string, unknown>).repaso = repaso;
      for (const { question, weight } of manual) {
        grading.items[question.id] = {
          prompt: question.prompt,
          points: weight,
          response: payload.answers[question.id],
          score: null
        };
      }
      // F5-03 — arrastrar los events (counter de salidas) si los había
      // PATCHeados. `grading` se serializa a JSON.stringify en la línea
      // siguiente, así que el sub-objeto pasa tal cual.
      if (priorEvents) {
        (grading as Record<string, unknown>).events = priorEvents;
      }
      // L8 — «hecho sin conexión»: vale la nota del servidor; si no coincide con la del dispositivo, se marca.
      if (options.sinConexion) {
        const { dispositivo, scoreLocal, maxScoreLocal, sorteo } = options.sinConexion;
        (grading as Record<string, unknown>).sinConexion = {
          dispositivo, scoreLocal, maxScoreLocal, ...(sorteo !== userId ? { sorteo } : {}),
          revisar: scoreLocal !== score || maxScoreLocal !== maxScore
        };
      }
      const hasPendingManual = manual.length > 0;
      const status = hasPendingManual ? "pending_review" : "submitted";

      const updatedAt = options.ahora ?? new Date();
      // H17 — se reclama el intento con una condición: si llegan dos envíos a la vez, solo el primero que escribe
      // lo corrige; el otro recibe lo ya guardado, igual que un reenvío (antes ganaba el último y pisaba la nota).
      const reclamo = await prisma.quizAttempt.updateMany({
        where: { id: idParam, submittedAt: null },
        data: {
          answers: JSON.stringify(payload.answers),
          feedback: JSON.stringify(feedback),
          grading: JSON.stringify(grading),
          status,
          score,
          maxScore,
          submittedAt: updatedAt.toISOString()
        }
      });
      if (reclamo.count !== 1) {
        const guardado = (await prisma.quizAttempt.findFirst({ where: { id: idParam } })) as QuizAttemptRecord | null;
        return { status: 200, body: guardado ? buildAlreadySubmittedBody(guardado) : { alreadySubmitted: true } };
      }

      // Monedas por completar un cuestionario POR PRIMERA VEZ (mismo
      // alumno + mismo quiz). Sólo en el submit inmediato (sin ítems
      // manuales pendientes) — ver nota en acreditarPorPrimerCuestionario
      // sobre el caso pending_review→graded, no cubierto acá.
      if (!hasPendingManual) {
        try {
          const previousCompleted = await prisma.quizAttempt.count({
            where: {
              quizId: attempt.quizId,
              userId,
              status: { in: ["submitted", "graded"] },
              id: { not: idParam }
            }
          });
          if (previousCompleted === 0) {
            await acreditarPorPrimerCuestionario({
              usuarioId: userId,
              quizId: attempt.quizId,
              schoolId: attempt.schoolId
            });
          }
        } catch { /* best-effort: no bloquear el submit */ }
      }

      // Obtener umbral del quiz o usar default 60
      const umbralRow = await prisma.quizUmbral.findUnique({
        where: { quizId: attempt.quizId },
        select: { umbral: true },
      });
      const umbral = umbralRow?.umbral ?? 60;
      // WO14 — convertir desde el ratio crudo (no desde el % redondeado) a la nota
      // de la escala. `aprobado` = passing de la escala (fuente de verdad del corte).
      const rawRatio = maxScore > 0 ? score / maxScore : null;
      const scoringConfig = resolveScoringConfig(module?.scoringConfig, umbral);
      const nota = gradeFromConfig(rawRatio, scoringConfig);
      const porcentaje = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
      const aprobado = nota.passing === true;

      // F5-04 — si hay ítems manuales pendientes, la nota ÚNICA no existe
      // todavía (las preguntas abiertas todavía no se corrigieron). En lugar
      // de un número único, el server calcula un RANGO honesto:
      //  - mín = la nota que tendría si las pendientes valen 0.
      //  - máx = la nota que tendría si las pendientes valen su peso pleno.
      // El rango se devuelve como `notaMin/MaxDisplay` + `notaMin/MaxCanonical10`.
      // `notaDisplay` y `aprobado` siguen ausentes/null: el sistema NO
      // presenta un valor único mientras haya pendientes (informar, no castigar).
      const pendingPoints = manual.map((m) => (typeof m.weight === "number" ? m.weight : 0));
      const gradeRange = hasPendingManual
        ? computeGradeRange(score, maxScore, pendingPoints, scoringConfig)
        : null;

      // WO07 — con ítems pendientes la nota aún no es final: no tocamos el
      // progreso formal hasta que el profe termine de corregir.
      if (hasPendingManual) {
        return {
          status: 200,
          body: {
            status,
            score,
            maxScore,
            pendingManual: manual.length,
            // F5-04 — rango honesto: "tu nota está entre X e Y".
            notaMinDisplay: gradeRange?.minDisplay ?? null,
            notaMinCanonical10: gradeRange?.minCanonical10 ?? null,
            notaMaxDisplay: gradeRange?.maxDisplay ?? null,
            notaMaxCanonical10: gradeRange?.maxCanonical10 ?? null,
            // `notaDisplay` y `aprobado` quedan ausentes: el cliente sabe que
            // está en estado "pendiente" por la presencia de `pendingManual`
            // y por la ausencia de `notaDisplay`.
            message: `Respuestas enviadas. ${manual.length} pregunta(s) abierta(s) quedan pendientes de corrección por el profesor.`
          }
        };
      }

      // `QuizAttempt` no tiene columna de módulo (se perdió al migrar a Prisma): `attempt.moduleId` llegaba siempre vacío y el
      // progreso nunca se registraba al entregar, así que ningún alumno desbloqueaba el módulo siguiente. El módulo sale del cuestionario.
      const moduloDelIntento =
        attempt.moduleId ??
        (await prisma.quiz.findFirst({ where: { id: attempt.quizId }, select: { moduleId: true } }))?.moduleId ??
        null;

      // Si es quiz formal y aprobó → actualizar progreso
      if (quiz.type === "formal" && aprobado && moduloDelIntento) {
        try {
          const progresoFilter = { usuarioId: userId, moduloId: moduloDelIntento };
          const existingProgreso = await prisma.progresoModulo.findFirst({ where: progresoFilter });
          if (existingProgreso) {
            await prisma.progresoModulo.update({
              where: { id: existingProgreso.id },
              data: { status: "completado", updatedAt: new Date().toISOString() }
            });
          } else {
            await prisma.progresoModulo.create({
              data: { ...progresoFilter, status: "completado", updatedAt: new Date().toISOString() }
            });
          }
        } catch { /* no bloquear el submit si falla */ }
      }

      // Si es formal y NO aprobó → marcar en_progreso
      if (quiz.type === "formal" && !aprobado && moduloDelIntento) {
        try {
          const progresoFilter = {
            usuarioId: userId,
            moduloId: moduloDelIntento,
            status: { not: "completado" }
          };
          const existingProgreso = await prisma.progresoModulo.findFirst({ where: progresoFilter });
          if (existingProgreso) {
            await prisma.progresoModulo.update({
              where: { id: existingProgreso.id },
              data: { status: "en_progreso", updatedAt: new Date().toISOString() }
            });
          } else {
            await prisma.progresoModulo.create({
              data: {
                usuarioId: userId,
                moduloId: moduloDelIntento,
                status: "en_progreso",
                updatedAt: new Date().toISOString()
              }
            });
          }
        } catch { /* ignorar */ }
      }

      // WO14 — maxScore = 0: no hay nota (no forzar "Desaprobado").
      // F4-03 — si `ocultarPuntos` está activo en `settings`, el `message` no
      // incluye el `(NN%)` para no leakear el puntaje crudo al alumno. El
      // cliente también gate del `Puntaje: X / Y` con el mismo flag, pero
      // acá lo limpiamos como defensa en profundidad (un alumno que vea el
      // `message` JSON directamente no debe ver el porcentaje).
      const ocultarPuntos = (() => {
        if (!version?.settings) return false;
        try {
          const parsed = JSON.parse(version.settings) as { ocultarPuntos?: unknown };
          return parsed.ocultarPuntos === true;
        } catch {
          return false;
        }
      })();
      const message =
        nota.passing === null
          ? "Respuestas enviadas. Este quiz no tiene ítems puntuables, no hay nota."
          : ocultarPuntos
            ? aprobado
              ? `¡Aprobado! Nota: ${nota.display}.`
              : `Nota: ${nota.display} — no alcanza para aprobar.`
            : aprobado
              ? `¡Aprobado! Nota: ${nota.display} (${porcentaje}%).`
              : `Nota: ${nota.display} (${porcentaje}%) — no alcanza para aprobar.`;
      const responseBody: Record<string, unknown> = {
        status: "submitted",
        score,
        maxScore,
        porcentaje,
        aprobado,
        umbral,
        notaDisplay: nota.display,
        notaCanonical10: nota.canonical10,
        // F4-03 — propagar el flag al cliente. Default false.
        ocultarPuntos,
        message
      };
      return { status: 200, body: responseBody };
}

quizAttempts.post(
  "/api/quiz-attempts/:id/submit",
  ...bodyLimitMB(2),
  requireUser,
  async (req, res) => {
    try {
    // Mismo criterio que POST /api/quiz-attempts: actuando como padre no
    // se rinde. Estaba SÓLO en la creación, así que un intento ya abierto
    // se podía seguir respondiendo y entregando desde la sesión de padre.
    if (actuandoComoPadre(req.user)) {
      return res.status(403).json({ error: "role cannot modify quiz attempts" });
    }
      const payload = QuizAttemptSubmitSchema.parse(req.body);
      const idParam = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
      if (!idParam) return res.status(400).json({ error: "invalid attempt id" });
      const userId =
        typeof req.user?._id?.toString === "function"
          ? req.user._id.toString()
          : typeof req.user?.id === "string"
            ? req.user.id
            : "";
      if (!userId) return res.status(401).json({ error: "user not found" });
      const attempt = await prisma.quizAttempt.findFirst({ where: { id: idParam, userId } }) as QuizAttemptRecord | null;
      if (!attempt) return res.status(404).json({ error: "attempt not found" });

      // PLAN-D §1 (riesgo "doble envío") — un intento que ya no está
      // `in_progress` (enviado por el alumno o auto-cerrado por vencimiento)
      // no se vuelve a corregir: idempotencia, no error.
      if (attempt.status !== "in_progress") {
        return res.json(buildAlreadySubmittedBody(attempt));
      }

      const result = await materializeSubmit(idParam, userId, attempt, payload);
      // `result` sólo es `null` en modo `auto` (cierre lazy); acá siempre es
      // un submit explícito (auto=false por default), así que nunca ocurre.
      if (!result) return res.status(409).json({ error: "no se pudo corregir el intento" });
      res.status(result.status).json(result.body);
    } catch (error: any) {
      res.status(400).json({ error: error?.message ?? "invalid payload" });
    }
  }
);

// WO07 — recomputa la nota a partir del estado de corrección: auto-score más
// el puntaje que el profe asignó a cada ítem manual. `allGraded` indica si ya
// no quedan ítems pendientes (el intento pasa a "corregido").
const recomputeFromGrading = (grading: AttemptGrading) => {
  let score = grading.autoScore;
  let allGraded = true;
  for (const item of Object.values(grading.items)) {
    if (item.score === null) {
      allGraded = false;
      continue;
    }
    score += item.score;
  }
  return { score, allGraded };
};


// Progreso de un módulo cuando un quiz formal queda con nota final.
const updateFormalProgress = async (
  userId: string,
  moduloId: string,
  aprobado: boolean
) => {
  try {
    if (aprobado) {
      const existing = await prisma.progresoModulo.findFirst({
        where: { usuarioId: userId, moduloId }
      });
      if (existing) {
        await prisma.progresoModulo.update({
          where: { id: existing.id },
          data: { status: "completado", updatedAt: new Date().toISOString() }
        });
      } else {
        await prisma.progresoModulo.create({
          data: {
            usuarioId: userId,
            moduloId,
            status: "completado",
            updatedAt: new Date().toISOString()
          }
        });
      }
    } else {
      const existing = await prisma.progresoModulo.findFirst({
        where: { usuarioId: userId, moduloId, status: { not: "completado" } }
      });
      if (existing) {
        await prisma.progresoModulo.update({
          where: { id: existing.id },
          data: { status: "en_progreso", updatedAt: new Date().toISOString() }
        });
      } else {
        await prisma.progresoModulo.create({
          data: {
            usuarioId: userId,
            moduloId,
            status: "en_progreso",
            updatedAt: new Date().toISOString()
          }
        });
      }
    }
  } catch {
    /* no bloquear la corrección si falla el progreso */
  }
};

// POST /api/quiz-attempts/:id/grade
// WO07 — el profe (staff) corrige UN ítem `manual` asignando puntaje parcial
// (0..points) y feedback opcional. Recalcula la nota; cuando ya no quedan ítems
// pendientes, el intento pasa a "corregido" (status "graded").
quizAttempts.post(
  "/api/quiz-attempts/:id/grade",
  ...bodyLimitMB(1),
  requireUser,
  async (req, res) => {
    try {
      if (!isStaffRole(req.user?.role)) {
        return res.status(403).json({ error: "forbidden" });
      }
      const graderId =
        typeof req.user?._id?.toString === "function"
          ? req.user._id.toString()
          : typeof req.user?.id === "string"
            ? req.user.id
            : "";
      const idParam = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
      if (!idParam) return res.status(400).json({ error: "invalid attempt id" });
      const payload = QuizAttemptGradeSchema.parse(req.body);

      const attempt = (await prisma.quizAttempt.findFirst({
        where: { id: idParam }
      })) as QuizAttemptRecord | null;
      if (!attempt) return res.status(404).json({ error: "attempt not found" });
      if (!(await staffPuedeGestionarIntento(req, attempt))) {
        return res.status(403).json({ error: "forbidden" });
      }

      const grading = safeJsonParse<AttemptGrading>(
        attempt.grading as unknown as string,
        { autoScore: typeof attempt.score === "number" ? attempt.score : 0, items: {} }
      );
      const item = grading.items[payload.questionId];
      if (!item) {
        return res.status(404).json({ error: "question not pending grading" });
      }

      // Puntaje parcial acotado a [0, points].
      const clamped = Math.max(0, Math.min(payload.score, item.points));
      item.score = clamped;
      if (payload.feedback !== undefined) item.feedback = payload.feedback;
      item.gradedAt = new Date().toISOString();
      item.gradedBy = graderId;

      const recomputado = recomputeFromGrading(grading);
      const { allGraded } = recomputado;
      let score = recomputado.score;
      // Los tickets de examen ya canjeados siguen sumando tras corregir: se recalcula el puntaje
      // sin ellos (`baseScore`) y se les vuelve a aplicar el bono.
      if (grading.bonusExamen) {
        const maxDelIntento = typeof attempt.maxScore === "number" ? attempt.maxScore : 0;
        grading.bonusExamen.baseScore = score;
        score = Math.min(maxDelIntento, score + bonusPorTickets(grading.bonusExamen.tickets, maxDelIntento));
      }
      const status = allGraded ? "graded" : "pending_review";

      // Reflejar la corrección en el feedback que ve el alumno.
      const feedback = safeJsonParse<Record<string, QuizFeedback>>(
        attempt.feedback as unknown as string,
        {}
      );
      feedback[payload.questionId] = {
        correct: clamped >= item.points && item.points > 0,
        pending: false,
        response: item.response,
        explanation: item.feedback
      };

      await prisma.quizAttempt.updateMany({
        where: { id: idParam },
        data: {
          grading: JSON.stringify(grading),
          feedback: JSON.stringify(feedback),
          score,
          status
        }
      });

      const maxScore = typeof attempt.maxScore === "number" ? attempt.maxScore : 0;
      const porcentaje = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;

      // WO14 — la nota final sólo se emite cuando el intento queda "corregido"
      // (allGraded). Mientras siga `pending_review` no hay nota final (provisional).
      let notaDisplay: string | null = null;
      let notaCanonical10: number | null = null;
      let aprobado: boolean | null = null;
      // F5-04 — rango honesto cuando SIGUE habiendo pendientes (allGraded=false).
      // Si el docente acaba de corregir el ÚLTIMO item, allGraded=true y
      // computamos la nota única como antes; no se muestra rango.
      let notaMinDisplay: string | null = null;
      let notaMinCanonical10: number | null = null;
      let notaMaxDisplay: string | null = null;
      let notaMaxCanonical10: number | null = null;

      // Al quedar "corregido", si es formal recién ahí impacta el progreso.
      if (allGraded) {
        const umbralRow = await prisma.quizUmbral.findUnique({
          where: { quizId: attempt.quizId },
          select: { umbral: true }
        });
        const umbral = umbralRow?.umbral ?? 60;
        const quizRecord = await prisma.quiz.findFirst({ where: { id: attempt.quizId } });
        // WO14 — misma conversión que en submit, sobre el score recalculado.
        const moduloRecord = quizRecord?.moduleId
          ? await prisma.modulo.findFirst({ where: { id: quizRecord.moduleId } })
          : null;
        const moduloScoringConfig = (moduloRecord as { scoringConfig?: ScoringConfig } | null)
          ?.scoringConfig;
        const rawRatio = maxScore > 0 ? score / maxScore : null;
        const nota = gradeFromConfig(rawRatio, resolveScoringConfig(moduloScoringConfig, umbral));
        notaDisplay = nota.display;
        notaCanonical10 = nota.canonical10;
        aprobado = nota.passing === true;
        if (quizRecord?.moduleId) {
          // El tipo del quiz vive en la colección Quiz/QuizVersion; corregimos
          // sólo módulos formales. Si no hay manera de saber el tipo, igual
          // recalculamos la nota (lo importante para WO07).
          await updateFormalProgress(attempt.userId, quizRecord.moduleId, aprobado);
        }
      } else {
        // F5-04 — calcular el rango de los ítems manuales que SIGUEN
        // pendientes. Recorremos `grading.items` y filtramos los que
        // tienen `score === null`.
        const pendingPoints: number[] = [];
        for (const item of Object.values(grading.items)) {
          if (item && item.score === null && typeof item.points === "number") {
            pendingPoints.push(item.points);
          }
        }
        if (pendingPoints.length > 0) {
          const umbralRow = await prisma.quizUmbral.findUnique({
            where: { quizId: attempt.quizId },
            select: { umbral: true }
          });
          const umbral = umbralRow?.umbral ?? 60;
          const quizRecord = await prisma.quiz.findFirst({ where: { id: attempt.quizId } });
          const moduloRecord = quizRecord?.moduleId
            ? await prisma.modulo.findFirst({ where: { id: quizRecord.moduleId } })
            : null;
          const moduloScoringConfig = (moduloRecord as { scoringConfig?: ScoringConfig } | null)
            ?.scoringConfig;
          const range = computeGradeRange(
            score,
            maxScore,
            pendingPoints,
            resolveScoringConfig(moduloScoringConfig, umbral)
          );
          notaMinDisplay = range.minDisplay;
          notaMinCanonical10 = range.minCanonical10;
          notaMaxDisplay = range.maxDisplay;
          notaMaxCanonical10 = range.maxCanonical10;
        }
      }

      return res.json({
        status,
        score,
        maxScore,
        porcentaje,
        questionId: payload.questionId,
        itemScore: clamped,
        allGraded,
        notaDisplay,
        notaCanonical10,
        aprobado,
        // F5-04 — campos de rango. Cuando allGraded=true, los 4 quedan null
        // (la nota única ya está en `notaDisplay`). El cliente los renderiza
        // condicionalmente por la presencia de `notaMinDisplay` no-null.
        notaMinDisplay,
        notaMinCanonical10,
        notaMaxDisplay,
        notaMaxCanonical10
      });
    } catch (error: any) {
      res.status(400).json({ error: error?.message ?? "invalid payload" });
    }
  }
);

// El aula con la que se etiqueta un resultado debe ser una a la que el usuario pertenece.
async function aulaPropia(userId: string, aulaId: unknown): Promise<string | null> {
  if (typeof aulaId !== "string" || !aulaId) return null;
  const m = await prisma.claseMiembro.findFirst({ where: { claseId: aulaId, usuarioId: userId } });
  return m ? aulaId : null;
}

// POST /api/quiz-attempts/:id/competencia
// Registrar resultado de modo competencia con tiempo
quizAttempts.post(
  "/api/quiz-attempts/:id/competencia",
  requireUser,
  async (req, res) => {
    // Mismo criterio que POST /api/quiz-attempts: actuando como padre no
    // se rinde. Estaba SÓLO en la creación, así que un intento ya abierto
    // se podía seguir respondiendo y entregando desde la sesión de padre.
    if (actuandoComoPadre(req.user)) {
      return res.status(403).json({ error: "role cannot modify quiz attempts" });
    }
    const userId =
      typeof req.user?._id?.toString === "function"
        ? req.user._id.toString()
        : typeof req.user?.id === "string"
          ? req.user.id : "";
    if (!userId) return res.status(401).json({ error: "not authenticated" });

    const { tiempoSeg, aulaId, moduloId } = req.body as Record<string, unknown>;

    if (typeof tiempoSeg !== "number" || !Number.isFinite(tiempoSeg) || tiempoSeg < 0) {
      return res.status(400).json({ error: "tiempoSeg requerido" });
    }

    // El puntaje sale del intento corregido por el servidor, nunca del cuerpo del pedido: antes cualquiera
    // podía publicar un puntaje inventado en el ranking.
    const intento = await prisma.quizAttempt.findFirst({
      where: { id: String(req.params.id), userId, status: { in: ["submitted", "completed"] } },
    });
    if (!intento || typeof intento.score !== "number") {
      return res.status(404).json({ error: "intento no encontrado o sin corregir" });
    }

    const yaRegistrado = await prisma.quizCompetencia.findFirst({
      where: { attemptId: String(req.params.id), usuarioId: userId },
    });
    if (yaRegistrado) return res.status(200).json({ id: yaRegistrado.id, ok: true });

    const id = `qc-${randomUUID()}`;
    const now = new Date().toISOString();

    await prisma.quizCompetencia.create({
      data: {
        id,
        quizId: intento.quizId ?? "",
        moduloId: typeof moduloId === "string" ? moduloId : null,
        aulaId: await aulaPropia(userId, aulaId),
        usuarioId: userId,
        attemptId: String(req.params.id),
        score: intento.score,
        maxScore: typeof intento.maxScore === "number" ? intento.maxScore : intento.score,
        tiempoSeg,
        completadoAt: now,
      },
    });

    return res.status(201).json({ id, ok: true });
  }
);

// GET /api/quiz-attempts/competencia/:quizId/ranking
// Tabla de posiciones para un quiz
quizAttempts.get(
  "/api/quiz-attempts/competencia/:quizId/ranking",
  requireUser,
  async (req, res) => {
    const quizId = Array.isArray(req.params.quizId)
      ? req.params.quizId[0]
      : req.params.quizId;
    const aulaId = typeof req.query.aulaId === "string"
      ? req.query.aulaId : null;

    // C3 — el ranking muestra nombres y puntajes de alumnos: solo los de la escuela de quien lo pide (y, si
    // pide un aula, tiene que ser de esa escuela y ser miembro o personal). Antes devolvía el top de TODA la
    // plataforma, con nombres de menores de otras escuelas. El ADMIN ve todo.
    let soloDeLaEscuela: string[] | null = null;
    if (!hasRole(req.user as never, "ADMIN")) {
      const escuela = typeof req.user?.schoolId === "string" ? req.user.schoolId : null;
      if (!escuela) return res.status(403).json({ error: "forbidden" });
      if (aulaId) {
        const clase = await prisma.clase.findFirst({
          where: { id: aulaId, isDeleted: { not: true } },
          include: { miembros: true }
        });
        const yo = typeof req.user?._id?.toString === "function" ? req.user._id.toString() : (req.user?.id ?? "");
        const esMiembro = !!clase?.miembros.some((m) => m.usuarioId === yo);
        if (!clase || clase.escuelaId !== escuela || (!esMiembro && !isStaffRole(req.user?.role ?? null))) {
          return res.status(404).json({ error: "classroom not found" });
        }
      }
      const miembros = await prisma.membresia.findMany({
        where: { escuelaId: escuela, estado: "activa" },
        select: { usuarioId: true }
      });
      soloDeLaEscuela = miembros.map((m) => m.usuarioId);
    }

    const grouped = await prisma.quizCompetencia.groupBy({
      by: ["usuarioId"],
      where: {
        quizId,
        ...(aulaId ? { aulaId } : {}),
        ...(soloDeLaEscuela ? { usuarioId: { in: soloDeLaEscuela } } : {}),
      },
      _min: { tiempoSeg: true, completadoAt: true },
      _max: { score: true, maxScore: true },
      orderBy: { _max: { score: "desc" } },
      take: 20,
    });

    // Secondary sort by mejor_tiempo ASC
    grouped.sort((a: (typeof grouped)[number], b: (typeof grouped)[number]) => {
      const scoreDiff = (b._max.score ?? 0) - (a._max.score ?? 0);
      if (scoreDiff !== 0) return scoreDiff;
      return (a._min.tiempoSeg ?? 0) - (b._min.tiempoSeg ?? 0);
    });

    const userIds = grouped.map((r) => r.usuarioId);
    const usuarios = userIds.length
      ? await prisma.usuario.findMany({
          where: { id: { in: userIds }, isDeleted: { not: true } },
          select: { id: true, fullName: true, username: true },
        })
      : [];

    const usuarioMap = new Map(
      usuarios.map((u) => [String(u.id ?? ""), String(u.fullName ?? u.username ?? "Alumno")])
    );

    const ranking = grouped.map((r, index) => ({
      posicion: index + 1,
      usuarioId: r.usuarioId,
      nombre: usuarioMap.get(r.usuarioId) ?? "Alumno",
      score: r._max.score ?? 0,
      maxScore: r._max.maxScore ?? 0,
      tiempoSeg: r._min.tiempoSeg ?? 0,
      completadoAt: r._min.completadoAt ?? "",
    }));

    return res.json({ quizId, aulaId, ranking });
  }
);

/** L8 — un intento hecho en la app sin conexión, tal como lo sube `POST /api/offline/sync`. */
export type IntentoSinConexion = {
  id: string;
  quizId: string;
  quizVersionId: string;
  seed: string | null;
  attemptNo: number;
  /** Con qué identificador se sortearon las preguntas: el del usuario local si después se vinculó a la cuenta. */
  sorteo: string;
  startedAt: string;
  submittedAt: string;
  answers: Record<string, string | string[]>;
  presentedIds?: string[];
  generatedQuestions?: QuizAttemptSubmit["generatedQuestions"];
  score: number;
  maxScore: number;
  events?: Record<string, unknown>;
};

export type ResultadoSinConexion =
  | { estado: "corregido" | "ya_estaba"; score: number; maxScore: number; status: string; revisar: boolean }
  | { estado: "rechazado"; motivo: string };

const ID_INTENTO = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

const resultadoGuardado = (a: { score: number | null; maxScore: number | null; status: string; grading: string | null }, estado: "corregido" | "ya_estaba"): ResultadoSinConexion => ({
  estado,
  score: a.score ?? 0,
  maxScore: a.maxScore ?? 0,
  status: a.status,
  revisar: safeJsonParse<{ sinConexion?: { revisar?: boolean } }>(a.grading, {}).sinConexion?.revisar === true,
});

/**
 * L8 — vuelve a corregir en el servidor un intento hecho sin conexión, con su semilla, su versión y sus respuestas, y
 * recién ahí acredita monedas y progreso, igual que una entrega de la web (`materializeSubmit`). Vale la nota del
 * servidor; si no coincide con la del dispositivo, el intento queda marcado para revisión. Aplicar dos veces el mismo
 * intento no lo vuelve a corregir.
 */
export async function corregirIntentoSinConexion(
  userId: string,
  dispositivo: string,
  i: IntentoSinConexion
): Promise<ResultadoSinConexion> {
  if (!ID_INTENTO.test(i.id)) return { estado: "rechazado", motivo: "identificador inválido" };
  const existente = await prisma.quizAttempt.findFirst({ where: { id: i.id } });
  if (existente) {
    return existente.userId === userId
      ? resultadoGuardado(existente, "ya_estaba")
      : { estado: "rechazado", motivo: "identificador inválido" };
  }
  // El módulo sale del cuestionario del servidor, nunca del dispositivo: si no, un intento aprobado de un módulo
  // completaría otro.
  const moduleId = (await prisma.quiz.findFirst({ where: { id: i.quizId }, select: { moduleId: true } }))?.moduleId ?? null;
  const { quiz: collectionQuiz, version, versionMissing } = await fetchQuizFromCollections(
    i.quizId,
    moduleId ?? undefined,
    i.quizVersionId
  );
  if (versionMissing || !version?.id) return { estado: "rechazado", motivo: "la versión del cuestionario no está en la plataforma" };
  if (!collectionQuiz) return { estado: "rechazado", motivo: "el cuestionario no está en la plataforma" };

  // La hora la pone el dispositivo; una entrega «del futuro» o anterior al inicio se acota.
  const ahora = Date.now();
  const inicio = Math.min(Date.parse(i.startedAt) || ahora, ahora);
  const fin = Math.min(Math.max(Date.parse(i.submittedAt) || ahora, inicio), ahora);
  const startedAt = new Date(inicio).toISOString();
  try {
    await prisma.quizAttempt.create({
      data: {
        id: i.id,
        quizId: i.quizId,
        quizVersionId: version.id,
        userId,
        seed: i.seed,
        answers: JSON.stringify({}),
        feedback: JSON.stringify({}),
        grading: i.events ? JSON.stringify({ events: i.events }) : null,
        score: 0,
        maxScore: i.maxScore,
        status: "in_progress",
        startedAt,
        submittedAt: null,
        attemptNo: i.attemptNo,
        seedPolicy: collectionQuiz.seedPolicy !== undefined ? Number(collectionQuiz.seedPolicy) : undefined,
      }
    });
  } catch (e: unknown) {
    // Dos sincronizaciones a la vez: la otra ya lo creó.
    if ((e as { code?: string } | null)?.code === "P2002") {
      const otro = await prisma.quizAttempt.findFirst({ where: { id: i.id, userId } });
      if (otro) return resultadoGuardado(otro, "ya_estaba");
    }
    throw e;
  }
  const attempt: QuizAttemptRecord = {
    id: i.id, moduleId, quizId: i.quizId, quizVersionId: version.id,
    // Las preguntas se sortean con el mismo identificador que usó el dispositivo.
    userId: i.sorteo, schoolId: null, seed: i.seed, answers: {},
    grading: i.events ? JSON.stringify({ events: i.events }) : null,
    score: 0, maxScore: i.maxScore, status: "in_progress",
    startedAt: startedAt as unknown as Date, submittedAt: null, attemptNo: i.attemptNo,
  };
  const payload = QuizAttemptSubmitSchema.parse({
    answers: i.answers, presentedIds: i.presentedIds, generatedQuestions: i.generatedQuestions,
  });
  await materializeSubmit(i.id, userId, attempt, payload, {
    ahora: new Date(fin),
    sinConexion: { dispositivo, scoreLocal: i.score, maxScoreLocal: i.maxScore, sorteo: i.sorteo },
  });
  const guardado = await prisma.quizAttempt.findFirst({ where: { id: i.id, userId } });
  if (!guardado || guardado.status === "in_progress") {
    // No se pudo corregir (por ejemplo, un generador que vive en la web): no queda un intento a medias.
    await prisma.quizAttempt.deleteMany({ where: { id: i.id, userId, status: "in_progress" } });
    return { estado: "rechazado", motivo: "no se pudo corregir en la plataforma" };
  }
  return resultadoGuardado(guardado, "corregido");
}
