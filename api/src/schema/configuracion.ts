import { z } from "zod";

export const ModuleConfigListSchema = z.object({
  id: z.string().min(1),
  items: z.array(z.string().min(1)),
  updatedAt: z.string().datetime()
});

export const ModuleConfigListUpdateSchema = ModuleConfigListSchema.pick({
  items: true
});

export type ModuleConfigList = z.infer<typeof ModuleConfigListSchema>;
