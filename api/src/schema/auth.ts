import { z } from "zod";
import { getCanonicalMembershipRole } from "../lib/membership-roles";

const objectIdString = z.string().regex(/^[a-fA-F0-9]{24}$/);

export const RegisterSchema = z
  .object({
    username: z.string().min(3).max(64),
    email: z.string().email(),
    fullName: z.string().min(3).max(120),
    password: z.string().min(6).max(256),
      // El registro público solo admite USER/PARENT/GUEST. Los roles de
      // staff (TEACHER, DIRECTIVO, ADMIN_ESCUELA, ADMIN) deben asignarse
      // únicamente vía invitación por un ADMIN/DIRECTIVO de la escuela
      // (ver `POST /api/invitaciones`); nunca por auto-registro.
      role: z.enum(["USER", "PARENT", "GUEST"]).optional(),
    teacherType: z.string().min(1).optional(),
    // Canonical field name.
    schoolId: objectIdString.nullish(),
    // Backward compatibility alias (legacy payloads).
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
  .refine((data) => !(data.schoolId && data.escuelaId), {
    message: "Provide either schoolId or escuelaId, not both",
    path: ["schoolId"]
  })
  .refine((data) => !((data.schoolId || data.escuelaId) && data.schoolCode), {
    message: "Provide either schoolId/escuelaId or schoolCode, not both",
    path: ["schoolCode"]
  })
  .refine(
    (data) => {
      const hasSchool = Boolean(data.schoolId || data.escuelaId || data.schoolCode);
      if (!hasSchool) return true;
      const role = data.role ?? "USER";
      return Boolean(getCanonicalMembershipRole(role));
    },
    {
      message: "Role must support school membership when schoolId/escuelaId or schoolCode is provided",
      path: ["role"]
    }
  )
  .refine(
    (data) => {
      // PLAN-A §1 — un TEACHER o DIRECTIVO no puede quedar sin escuela
      // asignada: hoy el front permite mandar `schoolCode` vacío ("Código
      // de Escuela (Opcional)") y el usuario queda huérfano, rompiendo
      // aulas/reportes/miembros para ese rol (items 1/33). USER/PARENT sí
      // pueden registrarse sin escuela (se unen después por código de
      // aula o quedan sin membresía).
      const STAFF_REQUIRES_SCHOOL = new Set(["TEACHER", "DIRECTIVO"]);
      if (!data.role || !STAFF_REQUIRES_SCHOOL.has(data.role)) return true;
      return Boolean(data.schoolId || data.escuelaId || data.schoolCode);
    },
    {
      message: "TEACHER y DIRECTIVO requieren schoolId o schoolCode al registrarse",
      path: ["schoolCode"]
    }
  )
  .transform((data) => ({
    ...data,
    schoolId: data.schoolId ?? data.escuelaId ?? null
  }));

export const LoginSchema = z.object({
  identifier: z.string().min(3),
  password: z.string().min(6).max(256)
});

export const BootstrapAdminRequestSchema = z.object({
  username: z.string().min(3).max(64),
  email: z.string().email(),
  fullName: z.string().min(3).max(120),
  password: z.string().min(8).max(256)
});

export const CreateAdminSchema = z.object({
  username: z.string().min(3).max(64),
  email: z.string().email(),
  fullName: z.string().min(3).max(120),
  password: z.string().min(8).max(256)
});

export const GuestSessionSchema = z.object({
  fullName: z.string().min(2).max(120).optional()
});

export const RefreshTokenSchema = z.object({
  refreshToken: z.string().min(1)
});

export const ForgotPasswordSchema = z.object({
  email: z.string().email()
});

export type RegisterInput = z.infer<typeof RegisterSchema>;
export type LoginInput = z.infer<typeof LoginSchema>;
export type BootstrapAdminInput = z.infer<typeof BootstrapAdminRequestSchema>;
export type CreateAdminInput = z.infer<typeof CreateAdminSchema>;
export type GuestSessionInput = z.infer<typeof GuestSessionSchema>;
export type RefreshTokenInput = z.infer<typeof RefreshTokenSchema>;
export type ForgotPasswordInput = z.infer<typeof ForgotPasswordSchema>;
