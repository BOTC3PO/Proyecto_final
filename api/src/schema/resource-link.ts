import { z } from "zod";

export const ResourceLinkTypeSchema = z.enum(["drive", "youtube", "externo"]);
export const ResourceLinkVisibilitySchema = z.enum(["publico", "privado"]);

export const ResourceLinkSchema = z.object({
  id: z.string().min(1),
  type: ResourceLinkTypeSchema,
  url: z.string().url(),
  visibility: ResourceLinkVisibilitySchema,
  createdBy: z.string().min(1),
  schoolId: z.string().min(1),
  aulaId: z.string().min(1),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
});

export type ResourceLink = z.infer<typeof ResourceLinkSchema>;
