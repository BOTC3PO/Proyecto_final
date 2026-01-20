import { z } from "zod";

const objectIdString = z.string().regex(/^[a-fA-F0-9]{24}$/);

export const RegisterSchema = z.object({
  username: z.string().min(3).max(64),
  email: z.string().email(),
  fullName: z.string().min(3).max(120),
  password: z.string().min(6).max(256),
  role: z.enum(["USER", "TEACHER"]).optional(),
  teacherType: z.string().min(1).optional(),
  escuelaId: objectIdString.nullish(),
  schoolCode: z.string().min(2).max(32).optional(),
  birthdate: z.string().datetime().nullish(),
  consents: z
    .object({
      privacyConsent: z.boolean().optional(),
      termsAccepted: z.boolean().optional(),
      consentedAt: z.string().datetime().optional()
    })
    .optional()
})
  .refine((data) => !(data.escuelaId && data.schoolCode), {
    message: "Provide either escuelaId or schoolCode, not both",
    path: ["schoolCode"]
  });

export const LoginSchema = z
  .object({
    identifier: z.string().min(3).optional(),
    email: z.string().email().optional(),
    username: z.string().min(3).optional(),
    password: z.string().min(6).max(256)
  })
  .refine((data) => Boolean(data.identifier || data.email || data.username), {
    message: "identifier is required"
  });

export const BootstrapAdminRequestSchema = z.object({
  username: z.string().min(3).max(64),
  email: z.string().email(),
  fullName: z.string().min(3).max(120),
  password: z.string().min(8).max(256)
});

export type RegisterInput = z.infer<typeof RegisterSchema>;
export type LoginInput = z.infer<typeof LoginSchema>;
export type BootstrapAdminInput = z.infer<typeof BootstrapAdminRequestSchema>;
