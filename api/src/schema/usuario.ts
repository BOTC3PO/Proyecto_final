import { z } from "zod";

const objectIdString = z.string().regex(/^[a-fA-F0-9]{24}$/);

export const UsuarioSchema = z.object({
  username: z.string().min(3).max(64),
  email: z.string().email(),
  fullName: z.string().min(3).max(120),
  role: z.enum(["ADMIN", "USER", "PARENT", "TEACHER", "DIRECTIVO", "GUEST"]),
  guestOnboardingStatus: z.enum(["pendiente", "aceptado", "rechazado"]).optional(),
  escuelaId: objectIdString.nullish(),
  birthdate: z.string().datetime().nullish(),
  passwordHash: z.string().min(10).nullish(),
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

export type UsuarioInput = z.infer<typeof UsuarioSchema>;
