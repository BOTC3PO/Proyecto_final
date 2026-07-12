import { z } from "zod";

export const ModuleVisibilitySchema = z.enum(["publico", "privado", "escuela"]);
export const ModuleQuizVisibilitySchema = z.enum(["publico", "escuela"]);
export const ModuleStatusSchema = z.enum(["ACTIVE", "ARCHIVED"]);

export const ModuleResourceSchema = z.discriminatedUnion("type", [
  z.object({
    type: z.literal("book"),
    id: z.string().min(1),
    title: z.string().min(1).optional()
  }),
  z.object({
    type: z.literal("doc"),
    title: z.string().min(1),
    url: z.string().url(),
    fileName: z.string().min(1).optional()
  }),
  z.object({
    type: z.literal("pdf"),
    title: z.string().min(1),
    url: z.string().url()
  }),
  z.object({
    type: z.literal("link"),
    title: z.string().min(1),
    url: z.string().url()
  }),
  z.object({
    type: z.literal("txt"),
    title: z.string().min(1),
    content: z.string().min(1).optional(),
    url: z.string().url().optional(),
    fileName: z.string().min(1).optional()
  }),
  z.object({
    type: z.literal("bookJson"),
    title: z.string().min(1),
    content: z.string().min(1).optional(),
    url: z.string().url().optional(),
    fileName: z.string().min(1).optional()
  })
]);

export const ModuleQuizSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  // FIX-GUARDADO-QUIZTYPE — `"formal"` es el valor canónico que usa el
  // editor (ModuloEditor/useModuloEditor) y, sobre todo, el runtime de
  // calificación del backend: `quiz-attempts.ts` gatea `quiz.type === "formal"`
  // para decidir si un intento aprobado cuenta para la nota del módulo, y
  // `quiz-intentos.ts` define `QuizTipo = "practica" | "formal" | "competencia"`.
  // El enum antes sólo aceptaba `"evaluacion"`, así que todo módulo con un
  // cuestionario de evaluación fallaba con 400 al guardar. Mantenemos
  // `"evaluacion"` por compatibilidad con datos/tests previos.
  type: z.enum(["practica", "evaluacion", "competencia", "formal"]),
  mode: z.enum(["manual", "generated"]).optional(),
  visibility: ModuleQuizVisibilitySchema.default("publico"),
  schoolId: z.string().min(1).optional(),
  schoolName: z.string().min(1).optional(),
  competitionRules: z.string().min(1).optional(),
  competitionRulesVisibility: ModuleQuizVisibilitySchema.optional(),
  questions: z
    .array(
      z.object({
        id: z.string().min(1),
        prompt: z.string().min(1),
        focus: z.string().min(1).optional(),
        questionType: z.string().min(1).optional(),
        options: z.array(z.string().min(1)).optional(),
        answerKey: z.union([z.string().min(1), z.array(z.string().min(1))]).optional(),
        explanation: z.string().min(1).optional(),
        // Peso de la pregunta en el puntaje (composición a nivel quiz, no DSL).
        points: z.number().positive().optional()
      })
    )
    .optional(),
  generatorId: z.string().min(1).optional(),
  generatorVersion: z.number().int().positive().optional(),
  params: z.record(z.string(), z.unknown()).optional(),
  count: z.number().int().positive().optional(),
  seedPolicy: z.string().min(1).optional(),
  fixedSeed: z.union([z.string().min(1), z.number().int()]).optional(),
  // Composición del quiz: pool, selección, variantes y peso por defecto. Se
  // guarda en QuizVersion.settings; NO forma parte del DSL de la plantilla.
  composition: z
    .object({
      tomar: z.union([z.literal("todas"), z.number().int().positive()]).optional(),
      seleccion: z.enum(["fijo", "azar", "elige_alumno"]).optional(),
      variantes: z.array(z.string()).optional(),
      pesoPorDefecto: z.number().positive().optional()
    })
    .optional(),
  // F3-04 — política de intentos, persistida en `settings.maxIntentos` y
  // `settings.politicaNota` por el PUT del route. Ver `api/src/routes/modulos.ts`
  // y `api/src/lib/quiz-intentos.ts`.
  maxIntentos: z.union([z.number().int().nonnegative(), z.null()]).optional(),
  politicaNota: z.enum(["mejor", "ultima", "primera", "promedio"]).optional(),
  // WO-3 — política de sorteo de variantes, persistida en `settings.politicaSorteo`.
  politicaSorteo: z.enum(["fijo_por_alumno", "por_intento"]).optional(),
  // WO-3 — cantidad de preguntas tomadas (K de N) del pool manual; persistida
  // en `settings.displayCount`. Antes se editaba pero no se guardaba.
  displayCount: z.number().int().positive().optional(),
  // WO-2 / F4-03 — cuestionario por posiciones (schema v2). Se guarda crudo en
  // `settings.posiciones`; el editor lo normaliza. `unknown` para no acoplar el
  // schema del route al modelo de posiciones (vive en el front/dominio).
  posiciones: z.unknown().optional(),
  // F4-03 — toggle "ocultar puntos al alumno", persistido en
  // `settings.ocultarPuntos`. El cliente gate del `Puntaje: X / Y`; el
  // backend gate del `(NN%)` en el `message` del submit.
  ocultarPuntos: z.boolean().optional(),
  // F4-04 — timer (segundos) per-cuestionario; null = sin timer. Sólo
  // se gate para `type === "formal"` en la UI; el runner siempre lo lee.
  timerSegundos: z.union([z.number().int().positive(), z.null()]).optional(),
  // F4-04 — fullscreen al iniciar el intento (user-gesture button).
  fullscreenOnStart: z.boolean().optional(),
  // WO-9 — modo de presentación del cuestionario al alumno. Default `lista`
  // (preserva el comportamiento previo). El runner (front) lo lee y
  // renderiza en consecuencia; el backend no lo valida runtime.
  modoPresentacion: z
    .enum(["lista", "una_por_pantalla", "paginado"])
    .optional(),
  // WO-9 — tamaño de página cuando `modoPresentacion === "paginado"`.
  // Entero ≥ 1. Sin tope superior (rango razonable del front).
  preguntasPorPagina: z.number().int().positive().optional(),
  // WO-14 — política de ruteo por dificultad, persistida en
  // `settings.politicaDificultad`. Default `fija` (preserva el
  // comportamiento previo a WO-14: la dificultad se ignoraba).
  politicaDificultad: z.enum(["fija", "manual", "adaptativa_simple"]).optional(),
  // WO-14 — dificultad inicial, persistida en `settings.dificultadInicial`.
  dificultadInicial: z.enum(["basico", "intermedio", "avanzado"]).optional(),
  // WO-14 — ventana de `adaptativa_simple`, persistida en
  // `settings.dificultadVentana`. Entero ≥ 1 (el parser server-side clampea
  // al rango válido).
  dificultadVentana: z.number().int().positive().optional(),
  // PLAN-D §1 — política de cierre por expiración, persistida en
  // `settings.politicaExpiracion`. Default `auto` (el parser server-side
  // resuelve el default si está ausente).
  politicaExpiracion: z.enum(["auto", "gracia60"]).optional()
}).superRefine((value, ctx) => {
  if (value.mode === "generated") {
    if (value.questions !== undefined) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "questions is not allowed when mode is generated",
        path: ["questions"]
      });
    }
    if (!value.generatorId) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "generatorId is required when mode is generated",
        path: ["generatorId"]
      });
    }
    if (!value.generatorVersion) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "generatorVersion is required when mode is generated",
        path: ["generatorVersion"]
      });
    }
    if (!value.params) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "params is required when mode is generated",
        path: ["params"]
      });
    }
    if (value.count === undefined) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "count is required when mode is generated",
        path: ["count"]
      });
    }
    if (!value.seedPolicy) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "seedPolicy is required when mode is generated",
        path: ["seedPolicy"]
      });
    }
  }

  if (
    !value.mode &&
    (value.generatorId ||
      value.generatorVersion ||
      value.params ||
      value.count !== undefined ||
      value.seedPolicy ||
      value.fixedSeed !== undefined)
  ) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "mode is required when generator settings are provided",
      path: ["mode"]
    });
  }
});

export const ModuleTheoryItemSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  type: z.string().min(1),
  detail: z.string().min(1)
});

export const ModuleDependencySchema = z.object({
  id: z.string().min(1),
  type: z.enum(["required", "unlocks"])
});

export const ModuleLevelSchema = z.object({
  level: z.string().min(1),
  quizzes: z.array(ModuleQuizSchema).optional(),
  resources: z.array(ModuleResourceSchema).optional()
});

export const ModuleScoringConfigSchema = z.object({
  systemId: z.string().min(1),
  questionsPerPoint: z.number().finite().nullable().optional(),
  minPassingScore: z.string().min(1).optional(),
  maxScoreForSix: z.number().finite().nullable().optional(),
  promotionRule: z.string().min(1).optional()
});

export const ModuleRewardsConfigSchema = z.object({
  maxLevel: z.number().finite().nullable().optional(),
  maxExperience: z.number().finite().nullable().optional(),
  maxQuestionsPerRound: z.number().finite().nullable().optional(),
  experienceMultiplier: z.number().finite().nullable().optional()
});

export const ModuleVisibilityConfigSchema = z.object({
  institution: z.string().min(1).optional(),
  invitedTeachers: z.string().min(1).optional(),
  studentRestriction: z.string().min(1).optional()
});

export const ModuleSchema = z.object({
  id: z.string().min(1),
  aulaId: z.string().min(1).optional(),
  schoolId: z.string().min(1).optional(),
  title: z.string().min(1),
  description: z.string().min(1),
  subject: z.string().min(1),
  category: z.string().min(1),
  level: z.string().min(1),
  durationMinutes: z.number().int().positive(),
  recommendedCourse: z.string().min(1).optional(),
  visibility: ModuleVisibilitySchema,
  status: ModuleStatusSchema.default("ACTIVE"),
  // PLAN-X §7 — oculto de los listados generales salvo dueño/invitado/aula.
  descatalogado: z.boolean().optional(),
  visibilityConfig: ModuleVisibilityConfigSchema.nullable().optional(),
  dependencies: z.array(ModuleDependencySchema),
  scoringConfig: ModuleScoringConfigSchema.optional(),
  rewardsConfig: ModuleRewardsConfigSchema.optional(),
  generatorRef: z
    .object({
      id: z.string().min(1),
      version: z.number().int().positive().optional(),
      config: z.record(z.string(), z.unknown()).optional()
    })
    .nullable()
    .optional(),
  theoryItems: z.array(ModuleTheoryItemSchema).optional(),
  quizzes: z.array(ModuleQuizSchema).optional(),
  resources: z.array(ModuleResourceSchema).optional(),
  levels: z.array(ModuleLevelSchema).optional(),
  levelOrder: z.array(z.string().min(1)).optional(),
  bloqueId: z.string().min(1).optional(),
  createdBy: z.string().min(1),
  createdByRole: z.enum(["admin", "docente"]).optional(),
  authorName: z.string().min(1).optional(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
});

export type ModuleResource = z.infer<typeof ModuleResourceSchema>;
export type Module = z.infer<typeof ModuleSchema>;

// Etapa 2 (Tiza — preguntas nativas) — payload de
// `PUT /api/quizzes/:quizId/preguntas`. Shape de `CuestionarioPreguntas`
// (`api/src/lib/quiz-preguntas.ts`), validado a nivel de forma acá; la
// validación de NEGOCIO (límites de pool insuficientes) la hace
// `validarCuestionarioPreguntas` server-side (se informa en la respuesta,
// no bloquea el guardado — mismo criterio que otros campos "crudos" de
// `settings`, ver `posiciones` en `ModuleQuizSchema`).
export const PreguntaQuizSchema = z.object({
  plantillaId: z.string().min(1),
  plantillaVersion: z.number().int().positive().optional(),
  tipo: z.enum(["obligatoria", "relleno"]),
  maxRepeticiones: z.number().int().positive().optional(),
  poolId: z.string().min(1).optional(),
  puntaje: z.number().optional(),
  dificultad: z.enum(["basico", "intermedio", "avanzado"]).optional()
});

export const CuestionarioPreguntasInputSchema = z.object({
  cantidadGlobal: z.number().int().positive(),
  preguntas: z.array(PreguntaQuizSchema)
});

// WO-tiza-config — payload de `PATCH /api/quizzes/:quizId/meta`. Subconjunto
// plano de `ModuleQuizSchema` (título + tipo/visibilidad + configuración de
// evaluación) editable desde Tiza sin re-enviar `quizzes[]` completo. Cada
// campo es opcional: sólo se persiste lo que viene en el payload. `strict()`
// para que un typo de campo falle con 400 en vez de perderse en silencio.
export const QuizMetaPatchSchema = z
  .object({
    title: z.string().min(1),
    type: z.enum(["practica", "evaluacion", "competencia", "formal"]),
    visibility: ModuleQuizVisibilitySchema,
    maxIntentos: z.union([z.number().int().nonnegative(), z.null()]),
    politicaNota: z.enum(["mejor", "ultima", "primera", "promedio"]),
    politicaSorteo: z.enum(["fijo_por_alumno", "por_intento"]),
    ocultarPuntos: z.boolean(),
    timerSegundos: z.union([z.number().int().positive(), z.null()]),
    fullscreenOnStart: z.boolean(),
    modoPresentacion: z.enum(["lista", "una_por_pantalla", "paginado"]),
    preguntasPorPagina: z.number().int().positive(),
    politicaDificultad: z.enum(["fija", "manual", "adaptativa_simple"]),
    dificultadInicial: z.enum(["basico", "intermedio", "avanzado"]),
    dificultadVentana: z.number().int().positive(),
    politicaExpiracion: z.enum(["auto", "gracia60"]),
    // PLAN-Z fase 3/4 — "un solo set de metadatos" a nivel cuestionario.
    // `materia` acá es la declarada por el docente en la plantilla-config
    // (persiste en `settings.materiaDeclarada`, NO en `settings.materia` —
    // esa clave la administra `mergeMateriaIntoSettings`/PLAN-F §22 con
    // semántica propia: "la del módulo manda al adoptar". Mezclarlas
    // rompería esa garantía, decidida por Javier en PLAN-Z §3.6).
    materia: z.string().max(100),
    nivel: z.string().max(100),
    tags: z.array(z.string().min(1).max(50)),
    descripcion: z.string().max(1000)
  })
  .partial()
  .strict();
