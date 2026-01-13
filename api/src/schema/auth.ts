import { z } from "zod";

const objectIdString = z.string().regex(/^[a-fA-F0-9]{24}$/);

export const RegisterSchema = z.object({
  username: z.string().min(3).max(64),
  email: z.string().email(),
  fullName: z.string().min(3).max(120),
  password: z.string().min(6).max(256),
  escuelaId: objectIdString.nullish(),
  birthdate: z.string().datetime().nullish(),
  consents: z
    .object({
      privacyConsent: z.boolean().optional(),
      termsAccepted: z.boolean().optional(),
      consentedAt: z.string().datetime().optional()
    })
    .optional()
});

export const LoginSchema = z.object({
  identifier: z.string().min(3),
  password: z.string().min(6).max(256)
});

export type RegisterInput = z.infer<typeof RegisterSchema>;
export type LoginInput = z.infer<typeof LoginSchema>;
