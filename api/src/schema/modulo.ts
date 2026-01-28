import { z } from "zod";

export const ModuleVisibilitySchema = z.enum(["publico", "privado", "escuela"]);
export const ModuleQuizVisibilitySchema = z.enum(["publico", "escuela"]);

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
  type: z.enum(["practica", "evaluacion", "competencia"]),
  visibility: ModuleQuizVisibilitySchema,
  schoolId: z.string().min(1).optional(),
  schoolName: z.string().min(1).optional(),
  competitionRules: z.string().min(1).optional(),
  competitionRulesVisibility: ModuleQuizVisibilitySchema.optional()
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
  visibilityConfig: ModuleVisibilityConfigSchema.nullable().optional(),
  dependencies: z.array(ModuleDependencySchema),
  scoringConfig: ModuleScoringConfigSchema.optional(),
  rewardsConfig: ModuleRewardsConfigSchema.optional(),
  generatorRef: z
    .object({
      id: z.string().min(1),
      config: z.record(z.string(), z.unknown()).optional()
    })
    .nullable()
    .optional(),
  resources: z.array(ModuleResourceSchema).optional(),
  levels: z.array(ModuleLevelSchema).optional(),
  levelOrder: z.array(z.string().min(1)).optional(),
  createdBy: z.string().min(1),
  createdByRole: z.enum(["admin", "docente"]).optional(),
  authorName: z.string().min(1).optional(),
  updatedAt: z.string().datetime()
});

export type ModuleResource = z.infer<typeof ModuleResourceSchema>;
export type Module = z.infer<typeof ModuleSchema>;
