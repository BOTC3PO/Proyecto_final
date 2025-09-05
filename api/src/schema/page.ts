import { z } from "zod";
export const AssetSchema = z.object({
  id: z.string().min(1),
  type: z.enum(["image","audio","video","font"]).optional(),
  src: z.string().min(1)
}).strict();
export const TuesdayProjectSchema = z.object({
  version: z.string().max(20),
  title: z.string().max(200),
  width: z.number().positive().max(10000),
  height: z.number().positive().max(10000),
  background: z.string().optional(),
  assets: z.array(AssetSchema).default([]),
  scene: z.array(z.any())
}).strict();
export type TuesdayProject = z.infer<typeof TuesdayProjectSchema>;