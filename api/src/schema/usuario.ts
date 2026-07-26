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

// PLAN-A §1 — un TEACHER/DIRECTIVO dado de alta por un admin/directivo no
// puede quedar sin escuela (mismo guardrail que RegisterSchema en
// schema/auth.ts). USER/PARENT/GUEST/ADMIN sí pueden crearse sin escuela.
const STAFF_REQUIRES_SCHOOL = new Set(["TEACHER", "DIRECTIVO"]);
const withStaffSchoolRequired = <T extends z.ZodTypeAny>(schema: T) =>
  schema.refine(
    (data: any) => {
      if (!STAFF_REQUIRES_SCHOOL.has(data.role)) return true;
      return Boolean(data.schoolId || data.escuelaId);
    },
    {
      message: "TEACHER y DIRECTIVO requieren schoolId (o escuelaId) al darlos de alta",
      path: ["schoolId"]
    }
  );

export const UsuarioWriteSchema = withStaffSchoolRequired(
  withSchoolAliasValidation(
    UsuarioBaseObjectSchema.extend({
      password: z.string().min(8).max(128)
    }).strict()
  )
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

/**
 * PLAN-roles-v3 B2 — lo que declara alguien que pide verificar su perfil
 * público como docente o directivo sin escuela que lo avale. Es más liviano
 * que el alta de escuela a propósito: acá se valida a una persona, no una
 * institución.
 */
export const VerificacionPublicaSchema = z.object({
  rolDeclarado: z.enum(["TEACHER", "DIRECTIVO"]),
  nombreCompleto: z.string().min(3).max(200),
  documento: z.string().min(5).max(40),
  institucion: z.string().max(200).optional(),
  enlace: z.string().url().optional(),
  notas: z.string().max(1000).optional()
});
