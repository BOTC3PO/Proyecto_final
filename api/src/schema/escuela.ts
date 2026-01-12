import { z } from "zod";

export const EscuelaSchema = z.object({
  name: z.string().min(2).max(120),
  code: z.string().min(2).max(32),
  address: z.string().max(200).nullish(),
  adminIds: z.array(z.string().regex(/^[a-fA-F0-9]{24}$/)).optional()
});

export type EscuelaInput = z.infer<typeof EscuelaSchema>;
