import { z } from "zod";

export const EscuelaSchema = z.object({
  name: z.string().min(2).max(120),
  code: z.string().min(2).max(32),
  address: z.string().max(200).nullish(),
  adminIds: z.array(z.string().regex(/^[a-fA-F0-9]{24}$/)).optional(),
  subscriptionStatus: z.enum(["ACTIVE", "PAST_DUE", "SUSPENDED", "INACTIVE"]).optional(),
  plan: z.enum(["ENTERPRISE_BASIC", "ENTERPRISE_STD", "ENTERPRISE_PLUS"]).optional()
});

export type EscuelaInput = z.infer<typeof EscuelaSchema>;
