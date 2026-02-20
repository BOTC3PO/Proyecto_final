import { z } from "zod";

const objectIdString = z.string().regex(/^[a-fA-F0-9]{24}$/);

const UsuarioBaseObjectSchema = z.object({
  username: z.string().min(3).max(64),
  email: z.string().email(),
  fullName: z.string().min(3).max(120),
  role: z.enum(["ADMIN", "USER", "PARENT", "TEACHER", "DIRECTIVO", "GUEST"]),
  guestOnboardingStatus: z.enum(["pendiente", "aceptado", "rechazado"]).optional(),
  schoolId: objectIdString.nullish(),
  escuelaId: objectIdString.nullish(),
  birthdate: z.string().datetime().nullish(),
  consents: z
    .object({
      privacyConsent: z.boolean().optional(),
      termsAccepted: z.boolean().optional(),
      consentedAt: z.string().datetime().optional()
    })
    .optional(),
  parentProfile: z
    .object({
      childrenIds: z.array(objectIdString).optional()
    })
    .optional(),
  teacherProfile: z
    .object({
      managedClassIds: z.array(objectIdString).optional()
    })
    .optional(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
});

const withSchoolAliasValidation = <T extends z.ZodTypeAny>(schema: T) =>
  schema.refine((data: any) => !(data.schoolId && data.escuelaId), {
    message: "Provide either schoolId or escuelaId, not both",
    path: ["schoolId"]
  });

export const UsuarioWriteSchema = withSchoolAliasValidation(
  UsuarioBaseObjectSchema.extend({
    password: z.string().min(8).max(128)
  }).strict()
);

export const UsuarioReadSchema = withSchoolAliasValidation(
  UsuarioBaseObjectSchema.extend({
    passwordHash: z.string().min(10).nullish()
  }).strict()
);

// Backward-compatible export for existing consumers that expect read shape.
export const UsuarioSchema = UsuarioReadSchema;

export type UsuarioWriteInput = z.infer<typeof UsuarioWriteSchema>;
export type UsuarioInput = z.infer<typeof UsuarioReadSchema>;
