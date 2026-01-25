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
  competitionRules: z.string().min(1).optional(),
  competitionRulesVisibility: ModuleQuizVisibilitySchema.optional()
});

export const ModuleLevelSchema = z.object({
  level: z.string().min(1),
  quizzes: z.array(ModuleQuizSchema).optional(),
  resources: z.array(ModuleResourceSchema).optional()
});

export const ModuleSchema = z.object({
  id: z.string().min(1),
  aulaId: z.string().min(1).optional(),
  title: z.string().min(1),
  description: z.string().min(1),
  subject: z.string().min(1),
  category: z.string().min(1),
  level: z.string().min(1),
  durationMinutes: z.number().int().positive(),
  visibility: ModuleVisibilitySchema,
  dependencies: z.array(z.string().min(1)),
  generatorRef: z
    .object({
      id: z.string().min(1),
      config: z.record(z.unknown()).optional()
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
