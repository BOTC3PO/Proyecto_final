import crypto from "node:crypto";
import type { Response } from "express";
import { Router } from "express";
import { ZodError } from "zod";
import { requireAdmin } from "../lib/admin-auth";
import { prisma } from "../lib/prisma";
import { ENV } from "../lib/env";
import { toObjectId } from "../lib/ids";
import { createAccessToken, createRefreshToken, verifyToken } from "../lib/auth-token";
import { getCanonicalMembershipRole } from "../lib/membership-roles";
import { sincronizarMembresia } from "../lib/memberships";
import { canjearCodigoPadre, validarCodigoPadre } from "../lib/codigos-padre";
import { escuelasDisponiblesPara, resolverSesionEscuela } from "../lib/sesion-escuela";
import {
  hashPassword,
  isPasswordHashUsable,
  passwordNeedsRehash,
  verificarContraFalso,
  verifyPassword
} from "../lib/passwords";
import { markUsersWithoutUsablePasswordForReset } from "../lib/password-health";
import { recordAuditLog } from "../lib/audit-log";
import { createRateLimiter } from "../lib/rate-limit";
import { normalizeSchoolId } from "../lib/school-ids";
import { resolveRoles, resolvePrimaryRole } from "../lib/roles";
import { acreditarSaldoInicial } from "../lib/economia-alta";
import { requireUser } from "../lib/user-auth";
import { estaBaneado, respuestaBaneado } from "../lib/ban";
import { PASSWORD_MIN_LENGTH } from "../lib/password-policy";
import {
  BootstrapAdminRequestSchema,
  CreateAdminSchema,
  GuestSessionSchema,
  LoginSchema,
  RefreshTokenSchema,
  RegisterSchema,
  ForgotPasswordSchema,
  ResetPasswordSchema
} from "../schema/auth";
import { enviarCorreo } from "../lib/mailer";
import {
  cifrarSecreto,
  descifrarSecreto,
  generarCodigosRecuperacion,
  generarSecreto,
  hashRecuperacion,
  urlOtpauth,
  verificarCodigo
} from "../lib/totp";
import { motivoPasswordDebil } from "../lib/password-policy";
import { secretosIguales } from "../lib/secret-compare";

export const auth = Router();


const isProduction = ENV.NODE_ENV === "production";

const authLimiter = createRateLimiter({
  windowMs: 60 * 1000,
  limit: isProduction ? 20 : 100,
  enabled: !ENV.AUTH_RATE_LIMIT_DISABLED,
  message: { error: "Too many requests" }
});

// Limitador estricto solo para intentos de login: 10 intentos / 15 min por IP
const loginLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  enabled: !ENV.AUTH_RATE_LIMIT_DISABLED,
  message: { error: "Demasiados intentos de inicio de sesión. Intenta de nuevo en 15 minutos." }
});

// Segundo paso del ingreso con verificación en dos pasos: un desafío válido dura 5 minutos y el código
// TOTP tiene 10^6 combinaciones (los de recuperación, menos entropía). Con el límite general (20/min)
// alcanzaban ~100 intentos en esa ventana; este lo deja igual de estricto que el primer paso (10 / 15 min).
const dosPasosLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  enabled: !ENV.AUTH_RATE_LIMIT_DISABLED,
  message: { error: "Demasiados intentos con el código de verificación. Intenta de nuevo en 15 minutos." }
});

const switchLimiter = createRateLimiter({
  windowMs: 60 * 1000,
  limit: isProduction ? 10 : 100,
  enabled: !ENV.AUTH_RATE_LIMIT_DISABLED,
  message: { error: "Demasiados cambios de cuenta. Intenta de nuevo en un minuto." }
});

auth.post("/api/auth/bootstrap-admin", async (req, res) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      res.status(400).json({ error: "Missing request body" });
      return;
    }
    if (!ENV.BOOTSTRAP_ADMIN_KEY) {
      res.status(503).json({ error: "Bootstrap admin disabled" });
      return;
    }
    const providedKey = req.header("x-bootstrap-key");
    if (!providedKey || !secretosIguales(providedKey, ENV.BOOTSTRAP_ADMIN_KEY)) {
      res.status(401).json({ error: "Invalid bootstrap key" });
      return;
    }
    const parsed = BootstrapAdminRequestSchema.parse(req.body ?? {});
    // TOCTOU guard: dos POSTs concurrentes pueden pasar el findFirst antes
    // de que el otro commitee. Envolvemos findFirst+create en una
    // transacción serializable de Prisma (SSI en Postgres), re-checamos
    // adentro, y atrapamos la violación de unicidad como red de seguridad
    // (a complementarse con un índice único parcial sobre esAdminPrincipal
    // = true vía migración).
    const now = new Date().toISOString();
    const MAX_BOOTSTRAP_RETRIES = 3;
    let result: { id: string } | null = null;
    // El hash se calcula afuera de la transacción: tarda y no hay por qué tenerla abierta.
    const bootstrapPasswordHash = await hashPassword(parsed.password);
    for (let attempt = 0; attempt < MAX_BOOTSTRAP_RETRIES; attempt++) {
      try {
        result = await prisma.$transaction(
          async (tx) => {
            const existingAdmin = await tx.usuario.findFirst({
              where: { roles: { has: "ADMIN" } }
            });
            if (existingAdmin) {
              const err: any = new Error("Admin already exists");
              (err as any).__bootstrap_status = 409;
              throw err;
            }
            return tx.usuario.create({
              data: {
                id: crypto.randomUUID(),
                username: parsed.username,
                email: parsed.email,
                fullName: parsed.fullName,
                // Este endpoint sólo corre cuando NO existe ningún admin
                // (ver el 409 de arriba): quien lo usa ES el admin principal.
                roles: ["ADMIN"],
                esAdminPrincipal: true,
                passwordHash: bootstrapPasswordHash,
                isDeleted: false,
                emailVerificadoAt: now,
                createdAt: now,
                updatedAt: now
              }
            });
          },
          { isolationLevel: "Serializable" }
        );
        break;
      } catch (e: any) {
        // Único constraint (P2002) en esAdminPrincipal — el otro POST ganó.
        if (e?.code === "P2002") {
          res.status(409).json({ error: "Admin already exists" });
          return;
        }
        // Error de serialización SSI (40001) — reintentar.
        if (e?.code === "P2034" || e?.message?.includes("could not serialize")) {
          continue;
        }
        // 409 lógico (existingAdmin dentro de la tx).
        if (e?.__bootstrap_status === 409) {
          res.status(409).json({ error: "Admin already exists" });
          return;
        }
        throw e;
      }
    }
    if (!result) {
      res.status(503).json({ error: "Bootstrap contention, retry later" });
      return;
    }
    // FASE 1 — provisionar espejo alumno para el staff recién creado.
    // Best-effort: un fallo no rompe el alta. ADMIN sin escuela puede
    // quedar con espejo sin membresia (consistente con el modelo).
    res.status(201).json({ id: result!.id });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

auth.post("/api/admins", requireAdmin, async (req, res) => {
  try {
    const parsed = CreateAdminSchema.parse(req.body ?? {});
    const now = new Date().toISOString();
    const result = await prisma.usuario.create({
      data: {
        id: crypto.randomUUID(),
        username: parsed.username,
        email: parsed.email,
        fullName: parsed.fullName,
        roles: ["ADMIN"],
        passwordHash: await hashPassword(parsed.password),
        isDeleted: false,
        emailVerificadoAt: now,
        createdAt: now,
        updatedAt: now
      }
    });
    // FASE 1 — ver bloque equivalente en /api/auth/bootstrap-admin.
    res.status(201).json({ id: result.id });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

/** Edad mínima para registrarse por cuenta propia; por debajo, el alta la hace la escuela (Ley 25.326, CCyC art. 26). */
export const EDAD_MINIMA_REGISTRO = 13;

export function edadEnAnios(nacimientoIso: string, ahora = new Date()): number {
  const n = new Date(nacimientoIso);
  if (Number.isNaN(n.getTime())) return -1;
  let edad = ahora.getUTCFullYear() - n.getUTCFullYear();
  const antesDelCumple =
    ahora.getUTCMonth() < n.getUTCMonth() || (ahora.getUTCMonth() === n.getUTCMonth() && ahora.getUTCDate() < n.getUTCDate());
  if (antesDelCumple) edad -= 1;
  return edad;
}

auth.post("/api/auth/register", authLimiter, async (req, res) => {
  try {
    const body = req.body ?? {};
    if (typeof body.email !== "string" || typeof body.password !== "string") {
      res.status(400).json({ error: "Missing email or password" });
      return;
    }

    const parsed = RegisterSchema.parse({
      ...body,
      // Normalizamos email y username a minúsculas para que el login
      // (que lowercases el identifier) encuentre siempre la fila.
      // Antes, registrar `JuanP` y después intentar entrar con
      // `juanp` no matcheaba porque la búsqueda era case-sensitive.
      email: body.email.trim().toLowerCase(),
      username: typeof body.username === "string" ? body.username.trim().toLowerCase() : body.username
    });
    // Ley 25.326 — el consentimiento tiene que ser expreso (art. 5): no alcanza con que lo marque la web.
    if (parsed.role !== "GUEST" && (parsed.consents?.privacyConsent !== true || parsed.consents?.termsAccepted !== true)) {
      res.status(400).json({ error: "Para crear la cuenta tenés que aceptar la Política de Privacidad y los Términos.", code: "SIN_CONSENTIMIENTO" });
      return;
    }
    // Menores: sin fecha de nacimiento no se puede saber la edad. Por debajo de 13 años el alta la hace la escuela
    // (que tiene la relación con la familia), no la propia persona.
    if (parsed.role !== "GUEST") {
      if (!parsed.birthdate) {
        res.status(400).json({ error: "Indicá tu fecha de nacimiento.", code: "FALTA_NACIMIENTO" });
        return;
      }
      if (edadEnAnios(parsed.birthdate) < EDAD_MINIMA_REGISTRO) {
        res.status(403).json({
          error: `Si tenés menos de ${EDAD_MINIMA_REGISTRO} años, tu cuenta la crea tu escuela. Pedile el alta a tu docente o a la dirección.`,
          code: "MENOR_SIN_ESCUELA"
        });
        return;
      }
    }
    const existingEmail = await prisma.usuario.findFirst({
      where: {
        email: parsed.email,
        isDeleted: { not: true }
      }
    });
    if (existingEmail?.id) {
      res.status(409).json({ error: "Email already exists" });
      return;
    }

    const now = new Date().toISOString();
    const role = parsed.role ?? "USER";
    let escuelaId: string | null = parsed.schoolId ?? null;
    let escuelaExists: boolean | undefined;
    if (parsed.schoolCode) {
      const escuela = await prisma.escuela.findFirst({ where: { code: parsed.schoolCode } });
      if (!escuela?.id) {
        res.status(400).json({ error: "Invalid school code" });
        return;
      }
      escuelaId = escuela.id;
      escuelaExists = true;
    } else if (parsed.schoolId) {
      if (!escuelaId) {
        res.status(400).json({ error: "Invalid school id" });
        return;
      }
      const escuela = await prisma.escuela.findFirst({ where: { id: escuelaId } });
      if (!escuela?.id) {
        res.status(400).json({ error: "Invalid school id" });
        return;
      }
      escuelaExists = true;
    }
    // K8 — el rol de padre/madre solo se obtiene con un código de invitación que emite la escuela para UN
    // alumno: el código fija la escuela y el vínculo. Antes cualquiera se registraba como padre y vinculaba
    // al menor que quisiera por su nombre de usuario.
    let codigoPadre: string | null = null;
    if (role === "PARENT") {
      if (!parsed.inviteCode) {
        res.status(400).json({
          error: "Para registrarte como padre/madre necesitás el código de invitación que te da la escuela.",
          code: "REQUIERE_CODIGO"
        });
        return;
      }
      const valido = await validarCodigoPadre(parsed.inviteCode);
      if (!valido.ok) {
        res.status(valido.status).json({ error: valido.error });
        return;
      }
      escuelaId = valido.escuelaId;
      escuelaExists = true;
      codigoPadre = parsed.inviteCode;
    }
    const membershipRole = getCanonicalMembershipRole(role);
    if (escuelaId && !membershipRole) {
      res.status(400).json({ error: "Role requires no school membership" });
      return;
    }

    const consentsData = parsed.consents
      ? {
          privacyConsent: parsed.consents.privacyConsent ?? false,
          termsAccepted: parsed.consents.termsAccepted ?? false,
          consentedAt: parsed.consents.consentedAt
            ? new Date(parsed.consents.consentedAt).toISOString()
            : now
        }
      : {};

    const newUserId = crypto.randomUUID();
    const result = await prisma.usuario.create({
      data: {
        id: newUserId,
        username: parsed.username,
        email: parsed.email,
        fullName: parsed.fullName,
        // MULTIROL-01: poblar `roles` al registrar. Por ahora, el
        // registro es single-rol (mismo `role` que viene del
        // payload). El endpoint para agregar un segundo rol
        // (multi-rol explícito) se diseña en Fase 2.
        roles: [role],
        escuelaId,
        birthdate: parsed.birthdate ? new Date(parsed.birthdate).toISOString() : null,
        passwordHash: await hashPassword(parsed.password),
        isDeleted: false,
        emailVerificadoAt: ENV.EMAIL_VERIFICACION ? null : now,
        createdAt: now,
        updatedAt: now,
        ...consentsData
      }
    });
    // FASE 1 — enganche de provisión de espejo. Solo si el usuario
    // recién creado es staff (ADMIN/DIRECTIVO/TEACHER). Para USER /
    // GUEST / PARENT no se espeja: el padre es opt-in (Fase 5); el
    // alumno y el guest ya son la identidad canónica. Best-effort:
    // un fallo no rompe el alta.
    // PLAN-B Fase 6 (ítem 34) — saldo de bienvenida para alumnos nuevos
    // (economía interna, no dinero real). Sólo USER: PARENT/TEACHER/
    // DIRECTIVO/ADMIN no son "alumno". Best-effort, no rompe el alta.
    if (role === "USER") {
      await acreditarSaldoInicial({ usuarioId: result.id, schoolId: escuelaId ?? null });
    }
    if (escuelaId && membershipRole) {
      if (!escuelaExists) {
        res.status(400).json({ error: "Invalid school id" });
        return;
      }
      // PLAN-multirol — la escritura vive en `sincronizarMembresia` (único
      // escritor). `fechaAlta: now` es el alta real de la cuenta y es lo
      // que después decide cuál es el rol principal de esta persona.
      await sincronizarMembresia({
        usuarioId: result.id,
        escuelaId,
        rolUsuario: role,
        fechaAlta: now
      });
    }
    if (codigoPadre) {
      const canje = await canjearCodigoPadre(codigoPadre, result.id);
      if (!canje.ok) {
        // El código se gastó en otro registro justo antes, o el alumno ya tiene 2 familiares: no queda cuenta.
        await prisma.membresia.deleteMany({ where: { usuarioId: result.id } });
        await prisma.usuario.deleteMany({ where: { id: result.id } });
        res.status(canje.status).json({ error: canje.error });
        return;
      }
    }
    // B9 — enlace para confirmar el correo. Si el envío falla, la persona lo puede pedir de nuevo al iniciar sesión.
    if (ENV.EMAIL_VERIFICACION) {
      await enviarEnlaceDeVerificacion({ id: result.id, email: parsed.email, nombre: parsed.fullName });
    }
    res.status(201).json({ id: result.id, verificacionPendiente: ENV.EMAIL_VERIFICACION });
  } catch (e: any) {
    if (e instanceof ZodError) {
      // Un problema con la contraseña se informa con su texto (el formulario lo muestra tal cual);
      // el resto de los errores de validación mantiene el formato de siempre.
      const problemaPassword = e.issues.find((i) => i.path[0] === "password");
      const mensaje = problemaPassword
        ? problemaPassword.code === "too_small"
          ? `La contraseña debe tener al menos ${PASSWORD_MIN_LENGTH} caracteres.`
          : problemaPassword.message
        : e.message;
      res.status(400).json({ error: mensaje || "invalid payload" });
      return;
    }
    if (e && typeof e === "object" && "code" in e && e.code === 11000) {
      res.status(409).json({ error: "Email already exists" });
      return;
    }
    res.status(500).json({ error: "Internal server error" });
  }
});

auth.post("/api/auth/guest", authLimiter, async (req, res) => {
  try {
    const parsed = GuestSessionSchema.parse(req.body ?? {});
    const now = new Date().toISOString();
    const guestId = crypto.randomUUID();
    const username = `guest_${guestId.slice(0, 8)}`;
    const email = `guest+${guestId}@example.com`;
    const fullName = parsed.fullName ?? "Invitado";
    const result = await prisma.usuario.create({
      data: {
        id: crypto.randomUUID(),
        username,
        email,
        fullName,
        roles: ["GUEST"],
        guestOnboardingStatus: "pendiente",
        passwordHash: null,
        isDeleted: false,
        createdAt: now,
        updatedAt: now
      }
    });
    // PLAN-B Fase 6 (ítem 34) — el guest ya aterriza en /alumno y juega
    // como tal (ROLE_LANDING), así que también recibe el saldo de
    // bienvenida. Sin escuela (los guests no tienen una todavía).
    await acreditarSaldoInicial({ usuarioId: result.id, schoolId: null });
    const accessToken = createAccessToken({
      id: result.id.toString(),
      email,
      username,
      role: "GUEST",
      guestOnboardingStatus: "pendiente",
      schoolId: null,
      fullName
    });
    const refreshToken = createRefreshToken({ id: result.id.toString() });
    if (refreshToken?.jti) {
      await prisma.refreshToken.create({
        data: {
          jti: refreshToken.jti,
          userId: result.id.toString(),
          familyId: refreshToken.familyId,
          revoked: false,
          expiresAt: new Date(refreshToken.expiresAt)
        }
      });
    }
    res.status(201).json({
      id: result.id,
      username,
      email,
      fullName,
      role: "GUEST",
      guestOnboardingStatus: "pendiente",
      schoolId: null,
      accessToken: accessToken.token,
      expiresAt: accessToken.expiresAt,
      expiresIn: accessToken.expiresIn,
      ...(refreshToken
        ? {
            refreshToken: refreshToken.token,
            refreshExpiresAt: refreshToken.expiresAt,
            refreshExpiresIn: refreshToken.expiresIn
          }
        : {})
    });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});



// PLAN-multirol Fase 2 — selector de escuela. Cambia la escuela activa de
// la sesión y emite un token nuevo con los roles DE ESA escuela.
//
// La escuela pedida se valida contra `Membresia` dentro de
// `resolverSesionEscuela`: si el usuario no tiene una membresía activa
// ahí, el resolver la ignora y devuelve la que corresponda. Nunca se
// concede un rol porque el cliente lo haya pedido.
auth.post("/api/auth/escuela-activa", switchLimiter, requireUser, async (req, res) => {
  const requester = (req as { user?: { id?: string } }).user;
  const userId = requester?.id;
  if (!userId) return res.status(401).json({ error: "no autenticado" });

  const escuelaId = typeof req.body?.escuelaId === "string" ? req.body.escuelaId : null;
  if (!escuelaId) return res.status(400).json({ error: "escuelaId requerido" });
  // `rol` es opcional: sólo hace falta cuando la persona tiene más de uno
  // en esa escuela y quiere actuar con el que no es el principal.
  const rol = typeof req.body?.rol === "string" ? req.body.rol : null;

  const user = await prisma.usuario.findFirst({ where: { id: userId, isDeleted: { not: true } } });
  if (!user) return res.status(404).json({ error: "usuario no encontrado" });

  const sesion = await resolverSesionEscuela(user as never, escuelaId, rol);
  if (sesion.escuelaId !== escuelaId) {
    return res.status(403).json({ error: "no tenés una membresía activa en esa escuela" });
  }
  if (rol && sesion.rolPrincipal !== rol) {
    return res.status(403).json({ error: "no tenés ese rol activo en esa escuela" });
  }

  // `Usuario.escuelaId` pasa a ser "la escuela donde está parado" — así el
  // próximo login/refresh vuelve a la misma sin tener que re-elegir.
  await prisma.usuario.updateMany({
    where: { id: userId },
    data: { escuelaId, updatedAt: new Date().toISOString() }
  });

  const accessToken = createAccessToken({
    id: userId,
    email: user.email,
    username: user.username,
    role: sesion.rolPrincipal ?? undefined,
    roles: sesion.roles.length > 0 ? sesion.roles : undefined,
    guestOnboardingStatus: user.guestOnboardingStatus ?? null,
    schoolId: sesion.escuelaId,
    fullName: user.fullName ?? null
  });

  return res.json({
    escuelaId: sesion.escuelaId,
    role: sesion.rolPrincipal,
    roles: sesion.roles,
    accessToken: accessToken.token,
    expiresAt: accessToken.expiresAt,
    expiresIn: accessToken.expiresIn
  });
});

auth.post("/api/auth/refresh", authLimiter, async (req, res) => {
  try {
    const parsed = RefreshTokenSchema.parse(req.body ?? {});
    const verification = verifyToken(parsed.refreshToken, "refresh");
    if (!verification.ok) {
      res.status(401).json({ error: verification.error });
      return;
    }

    const userId = verification.payload.sub;
    if (!userId) {
      res.status(401).json({ error: "Invalid authentication token" });
      return;
    }

    const objectId = toObjectId(userId);
    if (!objectId) {
      res.status(401).json({ error: "Invalid authentication token" });
      return;
    }

    const user = await prisma.usuario.findFirst({
      where: {
        id: userId,
        isDeleted: { not: true }
      }
    });

    if (!user?.id) {
      res.status(403).json({ error: "User not found" });
      return;
    }
    if (estaBaneado(user as { isBanned?: boolean; bannedUntil?: string | null })) {
      res.status(403).json(respuestaBaneado(user as { bannedUntil?: string | null }));
      return;
    }

    // F8 — refresh token rotation. El JWT debe traer `jti` y
    // `familyId`; sin ellos el token es de la era pre-rotación y se
    // rechaza (rotar JWT_REFRESH_SECRET cierra esa puerta).
    const presentedJti = verification.payload.jti;
    const presentedFamilyId = verification.payload.familyId;
    if (!presentedJti || !presentedFamilyId) {
      res.status(401).json({ error: "Refresh token predates rotation tracking; please log in again" });
      return;
    }

    const presented = await prisma.refreshToken.findUnique({ where: { jti: presentedJti } });
    if (!presented) {
      res.status(401).json({ error: "Refresh token not recognized" });
      return;
    }

    // Reuse detection: este `jti` ya estaba marcado `revoked`. Asumimos
    // compromiso y revocamos TODA la familia.
    if (presented.revoked) {
      await prisma.refreshToken.updateMany({
        where: { familyId: presentedFamilyId, revoked: false },
        data: { revoked: true }
      });
      res.status(401).json({ error: "Refresh token reuse detected; session revoked" });
      return;
    }

    // PLAN-multirol Fase 2 — el refresh reevalúa la sesión contra
    // `Membresia`: si le revocaron un rol o lo sacaron de una escuela, el
    // token nuevo ya no lo lleva.
    const sesion = await resolverSesionEscuela(user as never, normalizeSchoolId(user.escuelaId));
    const accessToken = createAccessToken({
      id: user.id.toString(),
      email: user.email,
      username: user.username,
      role: sesion.rolPrincipal ?? resolvePrimaryRole(user) ?? undefined,
      roles: sesion.roles.length > 0 ? sesion.roles : undefined,
      guestOnboardingStatus: user.guestOnboardingStatus ?? null,
      schoolId: normalizeSchoolId(sesion.escuelaId),
      fullName: user.fullName ?? null
    });

    // Rotación: emitimos el refresh NUEVO con nuevo `jti` y misma
    // `familyId`. Si el INSERT del nuevo falla NO marcamos el viejo
    // como usado → el cliente puede reintentar.
    const nextRefreshToken = createRefreshToken({
      id: user.id.toString(),
      familyId: presentedFamilyId
    });

    try {
      if (nextRefreshToken?.jti) {
        await prisma.refreshToken.create({
          data: {
            jti: nextRefreshToken.jti,
            userId: user.id.toString(),
            familyId: presentedFamilyId,
            revoked: false,
            expiresAt: new Date(nextRefreshToken.expiresAt)
          }
        });
        await prisma.refreshToken.update({
          where: { jti: presentedJti },
          data: { revoked: true, replacedBy: nextRefreshToken.jti }
        });
      }
    } catch {
      res.status(500).json({ error: "Could not rotate refresh token" });
      return;
    }

    res.status(200).json({
      accessToken: accessToken.token,
      expiresAt: accessToken.expiresAt,
      expiresIn: accessToken.expiresIn,
      ...(nextRefreshToken
        ? {
            refreshToken: nextRefreshToken.token,
            refreshExpiresAt: nextRefreshToken.expiresAt,
            refreshExpiresIn: nextRefreshToken.expiresIn
          }
        : {})
    });
  } catch (e: any) {
    if (e instanceof ZodError) {
      res.status(400).json({ error: e.message || "invalid payload" });
      return;
    }
    res.status(500).json({ error: "Internal server error" });
  }
});

// ── E1 — recuperación de contraseña ─────────────────────────────────────────
// El token viaja solo en el correo; en la base queda su hash. Vence en PASSWORD_RESET_TTL_MINUTES y sirve
// una vez. La respuesta es siempre la misma, exista o no la cuenta, para no revelar qué correos están dados
// de alta.
const hashToken = (token: string) => crypto.createHash("sha256").update(token).digest("hex");

async function enviarEnlaceDeRecuperacion(usuario: { id: string; email: string; nombre?: string | null }) {
  const ahora = new Date();
  // Pedir un enlace nuevo invalida los anteriores que no se usaron.
  await prisma.passwordResetToken.updateMany({
    where: { usuarioId: usuario.id, usedAt: null },
    data: { usedAt: ahora.toISOString() }
  });
  const token = crypto.randomBytes(32).toString("base64url");
  await prisma.passwordResetToken.create({
    data: {
      id: crypto.randomUUID(),
      usuarioId: usuario.id,
      tokenHash: hashToken(token),
      expiresAt: new Date(ahora.getTime() + ENV.PASSWORD_RESET_TTL_MINUTES * 60_000).toISOString(),
      createdAt: ahora.toISOString()
    }
  });
  const enlace = `${ENV.APP_URL.replace(/\/$/, "")}/restablecer?token=${encodeURIComponent(token)}`;
  const saludo = usuario.nombre ? `Hola, ${usuario.nombre}:` : "Hola:";
  const minutos = ENV.PASSWORD_RESET_TTL_MINUTES;
  await enviarCorreo({
    para: usuario.email,
    asunto: "Restablecer tu contraseña de Virtual Book",
    texto: [
      saludo,
      "",
      "Recibimos un pedido para restablecer tu contraseña. Para elegir una nueva, abrí este enlace:",
      enlace,
      "",
      `El enlace vence en ${minutos} minutos y sirve una sola vez.`,
      "Si no lo pediste, ignorá este correo: tu contraseña no cambia."
    ].join("\n")
  });
}

// ── B9 — confirmación del correo ────────────────────────────────────────────
async function enviarEnlaceDeVerificacion(usuario: { id: string; email: string; nombre?: string | null }) {
  const ahora = new Date();
  await prisma.emailVerificacion.updateMany({
    where: { usuarioId: usuario.id, usedAt: null },
    data: { usedAt: ahora.toISOString() }
  });
  const token = crypto.randomBytes(32).toString("base64url");
  const horas = ENV.EMAIL_VERIFICACION_TTL_HORAS;
  await prisma.emailVerificacion.create({
    data: {
      id: crypto.randomUUID(),
      usuarioId: usuario.id,
      tokenHash: hashToken(token),
      expiresAt: new Date(ahora.getTime() + horas * 3_600_000).toISOString(),
      createdAt: ahora.toISOString()
    }
  });
  const enlace = `${ENV.APP_URL.replace(/\/$/, "")}/verificar-email?token=${encodeURIComponent(token)}`;
  await enviarCorreo({
    para: usuario.email,
    asunto: "Confirmá tu correo en Virtual Book",
    texto: [
      usuario.nombre ? `Hola, ${usuario.nombre}:` : "Hola:",
      "",
      "Para terminar de crear tu cuenta, confirmá tu correo abriendo este enlace:",
      enlace,
      "",
      `El enlace vence en ${horas} horas y sirve una sola vez.`,
      "Si no creaste una cuenta en Virtual Book, ignorá este correo."
    ].join("\n")
  });
}

auth.post("/api/auth/verificar-email", authLimiter, async (req, res) => {
  const token = typeof req.body?.token === "string" ? req.body.token : "";
  const invalido = () =>
    res.status(400).json({ error: "El enlace venció o ya se usó. Pedí uno nuevo desde el inicio de sesión.", code: "TOKEN_INVALIDO" });
  if (!token || token.length > 200) return invalido();
  const ahora = new Date().toISOString();
  const fila = await prisma.emailVerificacion.findFirst({ where: { tokenHash: hashToken(token) } });
  if (!fila || fila.usedAt || fila.expiresAt <= ahora) return invalido();
  const reclamo = await prisma.emailVerificacion.updateMany({ where: { id: fila.id, usedAt: null }, data: { usedAt: ahora } });
  if (reclamo.count !== 1) return invalido();
  const actualizado = await prisma.usuario.updateMany({
    where: { id: fila.usuarioId, isDeleted: { not: true } },
    data: { emailVerificadoAt: ahora, updatedAt: ahora }
  });
  if (actualizado.count !== 1) return invalido();
  await recordAuditLog({
    actorId: fila.usuarioId,
    action: "auth.email_verificado",
    targetType: "Usuario",
    targetId: fila.usuarioId,
    metadata: {}
  });
  res.json({ ok: true });
});

// Reenvía el enlace. Siempre responde lo mismo, exista o no la cuenta.
// Acepta el correo o el nombre de usuario (lo que la persona escribió al intentar entrar); el enlace va
// siempre al correo registrado.
auth.post("/api/auth/reenviar-verificacion", authLimiter, async (req, res) => {
  const crudo = req.body?.identifier ?? req.body?.email;
  const identifier = typeof crudo === "string" ? crudo.trim().toLowerCase() : "";
  if (ENV.EMAIL_VERIFICACION && identifier && identifier.length <= 320) {
    const usuario = await prisma.usuario.findFirst({
      where: { OR: [{ email: identifier }, { username: identifier }], isDeleted: { not: true } }
    });
    if (usuario?.email && !usuario.emailVerificadoAt) {
      await enviarEnlaceDeVerificacion({ id: usuario.id, email: usuario.email, nombre: usuario.fullName });
    }
  }
  res.json({ ok: true });
});

auth.post("/api/auth/reset-password", authLimiter, async (req, res) => {
  const parsed = ResetPasswordSchema.safeParse(req.body ?? {});
  if (!parsed.success) {
    res.status(400).json({ error: "La contraseña no cumple los requisitos o el enlace no es válido." });
    return;
  }
  const ahora = new Date().toISOString();
  const fila = await prisma.passwordResetToken.findFirst({ where: { tokenHash: hashToken(parsed.data.token) } });
  if (!fila || fila.usedAt || fila.expiresAt <= ahora) {
    res.status(400).json({ error: "El enlace venció o ya se usó. Pedí uno nuevo.", code: "TOKEN_INVALIDO" });
    return;
  }
  const usuario = await prisma.usuario.findFirst({ where: { id: fila.usuarioId, isDeleted: { not: true } } });
  if (!usuario) {
    res.status(400).json({ error: "El enlace venció o ya se usó. Pedí uno nuevo.", code: "TOKEN_INVALIDO" });
    return;
  }
  const debil = motivoPasswordDebil(parsed.data.password, {
    username: usuario.username ?? undefined,
    email: usuario.email ?? undefined
  });
  if (debil) {
    res.status(400).json({ error: debil, code: "PASSWORD_DEBIL" });
    return;
  }
  // Se marca usado con una condición: dos pedidos simultáneos con el mismo enlace no cambian la clave dos veces.
  const reclamo = await prisma.passwordResetToken.updateMany({
    where: { id: fila.id, usedAt: null },
    data: { usedAt: ahora }
  });
  if (reclamo.count !== 1) {
    res.status(400).json({ error: "El enlace venció o ya se usó. Pedí uno nuevo.", code: "TOKEN_INVALIDO" });
    return;
  }
  await prisma.usuario.update({
    where: { id: usuario.id },
    data: {
      passwordHash: await hashPassword(parsed.data.password),
      updatedAt: ahora,
      // Abrir el enlace del correo prueba que la casilla es suya (B9).
      ...(usuario.emailVerificadoAt ? {} : { emailVerificadoAt: ahora })
    }
  });
  // Cambiar la contraseña cierra las sesiones abiertas (por si alguien más la tenía).
  await prisma.refreshToken.updateMany({ where: { userId: usuario.id, revoked: false }, data: { revoked: true } });
  await recordAuditLog({
    actorId: usuario.id,
    action: "auth.password_restablecida",
    targetType: "Usuario",
    targetId: usuario.id,
    metadata: {}
  });
  res.json({ ok: true });
});

auth.post("/api/auth/forgot-password", authLimiter, async (req, res) => {
  try {
    const body = req.body ?? {};
    if (typeof body.email !== "string") {
      res.status(400).json({ error: "Missing email" });
      return;
    }

    const parsed = ForgotPasswordSchema.parse({
      email: body.email.trim().toLowerCase()
    });

    const user = await prisma.usuario.findFirst({
      where: {
        email: parsed.email,
        isDeleted: { not: true }
      }
    });

    if (user?.id && resolvePrimaryRole(user) !== "GUEST") {
      // MULTIROL-01: con multi-rol, un usuario puede haber sido guest
      // y haber agregado otro rol (ej. TEACHER). El chequeo original
      // sobre `role` singular sigue siendo correcto para Fase 1 —
      // un usuario multi-rol cuyo `role` principal ya no es GUEST
      // entra en la rama de logging. Cuando agreguemos el endpoint
      // para mutar roles (Fase 2), este chequeo se puede migrar a
      // `!hasRole(user, "GUEST")` para que un `roles: ["GUEST",
      // "TEACHER"]` también caiga en esta rama.
      await enviarEnlaceDeRecuperacion({ id: user.id.toString(), email: user.email ?? parsed.email, nombre: user.fullName });
    }

    res.status(200).json({
      ok: true,
      message:
        "Si existe una cuenta con ese correo, enviaremos instrucciones para restablecer tu contraseña."
    });
  } catch (e: any) {
    if (e instanceof ZodError) {
      res.status(400).json({ error: e.message || "invalid payload" });
      return;
    }
    res.status(500).json({ error: "Internal server error" });
  }
});


// Emite la sesión (token de acceso + refresh) para un usuario ya autenticado. La usan el login y el segundo
// paso de la verificación en dos pasos.
type UsuarioSesion = NonNullable<Awaited<ReturnType<typeof prisma.usuario.findFirst>>>;
async function emitirSesion(res: Response, user: UsuarioSesion) {
  // PLAN-multirol Fase 2 — la sesión arranca en la escuela activa y con
  // los roles DE ESA ESCUELA (no la unión de todas). Ver sesion-escuela.ts.
  const sesion = await resolverSesionEscuela(user as never);
  const accessToken = createAccessToken({
    id: user.id.toString(),
    email: user.email,
    username: user.username,
    role: sesion.rolPrincipal ?? resolvePrimaryRole(user) ?? undefined,
    roles: sesion.roles.length > 0 ? sesion.roles : undefined,
    guestOnboardingStatus: user.guestOnboardingStatus ?? null,
    schoolId: normalizeSchoolId(sesion.escuelaId),
    fullName: user.fullName ?? null
  });
  const refreshToken = createRefreshToken({ id: user.id.toString() });
  if (refreshToken?.jti) {
    await prisma.refreshToken.create({
      data: {
        jti: refreshToken.jti,
        userId: user.id.toString(),
        familyId: refreshToken.familyId,
        revoked: false,
        expiresAt: new Date(refreshToken.expiresAt)
      }
    });
  }
  res.status(200).json({
    id: user.id,
    username: user.username,
    email: user.email,
    fullName: user.fullName,
    role: sesion.rolPrincipal ?? resolvePrimaryRole(user) ?? undefined,
    roles: sesion.roles.length > 0 ? sesion.roles : undefined,
    guestOnboardingStatus: user.guestOnboardingStatus ?? null,
    schoolId: normalizeSchoolId(sesion.escuelaId),
    escuelas: await escuelasDisponiblesPara(user.id.toString()),
    accessToken: accessToken.token,
    expiresAt: accessToken.expiresAt,
    expiresIn: accessToken.expiresIn,
    ...(refreshToken
      ? {
          refreshToken: refreshToken.token,
          refreshExpiresAt: refreshToken.expiresAt,
          refreshExpiresIn: refreshToken.expiresIn
        }
      : {})
  });
}

// ── B13 — verificación en dos pasos ─────────────────────────────────────────
const DESAFIO_2FA_MS = 5 * 60 * 1000;
const firmaDesafio = (datos: string) => crypto.createHmac("sha256", ENV.JWT_SECRET).update(`2fa:${datos}`).digest("base64url");

function crearDesafio2fa(userId: string) {
  const datos = `${userId}.${Date.now() + DESAFIO_2FA_MS}`;
  return `${Buffer.from(datos).toString("base64url")}.${firmaDesafio(datos)}`;
}

function leerDesafio2fa(desafio: string): string | null {
  const [b64, firma] = String(desafio).split(".");
  if (!b64 || !firma) return null;
  const datos = Buffer.from(b64, "base64url").toString();
  const esperada = Buffer.from(firmaDesafio(datos));
  const recibida = Buffer.from(firma);
  if (esperada.length !== recibida.length || !crypto.timingSafeEqual(esperada, recibida)) return null;
  const punto = datos.lastIndexOf(".");
  const userId = datos.slice(0, punto);
  const vence = Number(datos.slice(punto + 1));
  return Number.isFinite(vence) && vence > Date.now() ? userId : null;
}

/** Valida un código TOTP o uno de recuperación y deja registrado su uso. */
async function validarSegundoFactor(user: UsuarioSesion, codigo: string): Promise<boolean> {
  const u = user as UsuarioSesion & { totpSecreto: string | null; totpUltimoPaso: number | null; totpRecuperacion: string | null };
  if (!u.totpSecreto) return false;
  const paso = verificarCodigo(descifrarSecreto(u.totpSecreto), codigo, u.totpUltimoPaso ?? null);
  if (paso !== null) {
    const r = await prisma.usuario.updateMany({
      where: { id: u.id, OR: [{ totpUltimoPaso: null }, { totpUltimoPaso: { lt: paso } }] },
      data: { totpUltimoPaso: paso }
    });
    return r.count === 1;
  }
  const hashes: string[] = u.totpRecuperacion ? JSON.parse(u.totpRecuperacion) : [];
  const h = hashRecuperacion(codigo);
  if (!hashes.includes(h)) return false;
  await prisma.usuario.update({ where: { id: u.id }, data: { totpRecuperacion: JSON.stringify(hashes.filter((x) => x !== h)) } });
  await recordAuditLog({ actorId: u.id, action: "auth.2fa_codigo_recuperacion_usado", targetType: "Usuario", targetId: u.id, metadata: { quedan: hashes.length - 1 } });
  return true;
}

const usuarioDeSesion = async (req: { user?: { id?: string; _id?: unknown } }) => {
  const id = req.user?.id ?? (typeof req.user?._id === "string" ? req.user._id : null);
  return id ? prisma.usuario.findFirst({ where: { id, isDeleted: { not: true } } }) : null;
};

auth.post("/api/auth/2fa/login", dosPasosLimiter, authLimiter, async (req, res) => {
  const userId = leerDesafio2fa(String(req.body?.desafio ?? ""));
  if (!userId) {
    res.status(401).json({ error: "El ingreso venció. Volvé a escribir tu contraseña.", code: "DESAFIO_VENCIDO" });
    return;
  }
  const user = await prisma.usuario.findFirst({ where: { id: userId, isDeleted: { not: true } } });
  if (!user || estaBaneado(user as { isBanned?: boolean; bannedUntil?: string | null })) {
    res.status(401).json({ error: "Invalid credentials" });
    return;
  }
  if (!(await validarSegundoFactor(user, String(req.body?.codigo ?? "")))) {
    res.status(401).json({ error: "El código no es correcto.", code: "CODIGO_2FA_INCORRECTO" });
    return;
  }
  await emitirSesion(res, user);
});

auth.get("/api/auth/2fa", requireUser, async (req, res) => {
  const user = await usuarioDeSesion(req as never);
  if (!user) return res.status(401).json({ error: "no autenticado" });
  const u = user as UsuarioSesion & { totpActivo: boolean; totpRecuperacion: string | null };
  res.json({
    activo: u.totpActivo === true,
    codigosRecuperacionRestantes: u.totpRecuperacion ? (JSON.parse(u.totpRecuperacion) as string[]).length : 0
  });
});

auth.post("/api/auth/2fa/configurar", requireUser, async (req, res) => {
  const user = await usuarioDeSesion(req as never);
  if (!user) return res.status(401).json({ error: "no autenticado" });
  if ((user as { totpActivo?: boolean }).totpActivo) return res.status(409).json({ error: "La verificación ya está activa." });
  const secreto = generarSecreto();
  await prisma.usuario.update({ where: { id: user.id }, data: { totpSecreto: cifrarSecreto(secreto), totpUltimoPaso: null } });
  res.json({ secreto, url: urlOtpauth(user.email || user.username, secreto) });
});

auth.post("/api/auth/2fa/activar", requireUser, async (req, res) => {
  const user = await usuarioDeSesion(req as never);
  if (!user) return res.status(401).json({ error: "no autenticado" });
  const u = user as UsuarioSesion & { totpSecreto: string | null; totpActivo: boolean };
  if (u.totpActivo) return res.status(409).json({ error: "La verificación ya está activa." });
  if (!u.totpSecreto) return res.status(400).json({ error: "Primero configurá la aplicación." });
  const paso = verificarCodigo(descifrarSecreto(u.totpSecreto), String(req.body?.codigo ?? ""), null);
  if (paso === null) return res.status(400).json({ error: "El código no es correcto.", code: "CODIGO_2FA_INCORRECTO" });
  const codigos = generarCodigosRecuperacion();
  await prisma.usuario.update({
    where: { id: u.id },
    data: { totpActivo: true, totpUltimoPaso: paso, totpRecuperacion: JSON.stringify(codigos.map(hashRecuperacion)) }
  });
  await recordAuditLog({ actorId: u.id, action: "auth.2fa_activada", targetType: "Usuario", targetId: u.id, metadata: {} });
  // Los códigos de recuperación se muestran una sola vez.
  res.json({ ok: true, codigosRecuperacion: codigos });
});

auth.post("/api/auth/2fa/desactivar", requireUser, async (req, res) => {
  const user = await usuarioDeSesion(req as never);
  if (!user) return res.status(401).json({ error: "no autenticado" });
  if (!(user as { totpActivo?: boolean }).totpActivo) return res.status(409).json({ error: "La verificación no está activa." });
  const password = String(req.body?.password ?? "");
  if (!user.passwordHash || !(await verifyPassword(password, user.passwordHash))) {
    return res.status(403).json({ error: "La contraseña no es correcta.", code: "PASSWORD_INCORRECTA" });
  }
  if (!(await validarSegundoFactor(user, String(req.body?.codigo ?? "")))) {
    return res.status(403).json({ error: "El código no es correcto.", code: "CODIGO_2FA_INCORRECTO" });
  }
  await prisma.usuario.update({
    where: { id: user.id },
    data: { totpActivo: false, totpSecreto: null, totpUltimoPaso: null, totpRecuperacion: null }
  });
  await recordAuditLog({ actorId: user.id, action: "auth.2fa_desactivada", targetType: "Usuario", targetId: user.id, metadata: {} });
  res.json({ ok: true });
});

auth.post("/api/auth/login", loginLimiter, authLimiter, async (req, res) => {
  try {
    const body = req.body ?? {};
    if (typeof body.identifier !== "string" || typeof body.password !== "string") {
      res.status(400).json({ error: "Missing identifier or password" });
      return;
    }

    const parsed = LoginSchema.parse({
      ...body,
      identifier: body.identifier.trim().toLowerCase()
    });
    const identifier = parsed.identifier;
    const user = await prisma.usuario.findFirst({
      where: {
        OR: [{ email: identifier }, { username: identifier }],
        isDeleted: { not: true }
      }
    });
    if (user && resolveRoles(user).includes("GUEST")) {
      if (ENV.NODE_ENV !== "production") {
        console.warn("[auth/login] Guest account attempted password login", {
          identifier,
          userId: user.id
        });
      }
      res.status(403).json({
        error: "Guest accounts cannot log in with password. Please complete onboarding to create credentials."
      });
      return;
    }
    if (!user || typeof user.passwordHash !== "string" || !isPasswordHashUsable(user.passwordHash)) {
      if (user?.id) {
        await markUsersWithoutUsablePasswordForReset({
          actorId: "system",
          reason: "auth-login-invalid-password-hash",
          targetUserId: user.id.toString()
        });
      }
      if (ENV.NODE_ENV !== "production") {
        console.warn("[auth/login] Invalid credentials: user not found or password hash missing/invalid", {
          identifier
        });
      }
      // Misma demora que con un usuario real, para que el tiempo de respuesta no delate si el correo existe.
      await verificarContraFalso(parsed.password);
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }
    const isValid = await verifyPassword(parsed.password, user.passwordHash);
    if (!isValid) {
      if (ENV.NODE_ENV !== "production") {
        console.warn("[auth/login] Invalid credentials: password mismatch", {
          identifier,
          userId: user.id
        });
      }
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }
    if (estaBaneado(user as { isBanned?: boolean; bannedUntil?: string | null })) {
      res.status(403).json(respuestaBaneado(user as { bannedUntil?: string | null }));
      return;
    }
    // B9 — quien se registró solo tiene que confirmar el correo antes de entrar. Se responde después de
    // verificar la contraseña, así este aviso no revela qué correos están registrados.
    if (ENV.EMAIL_VERIFICACION && !(user as { emailVerificadoAt?: string | null }).emailVerificadoAt) {
      res.status(403).json({
        error: "Tenés que confirmar tu correo antes de iniciar sesión. Revisá tu bandeja de entrada.",
        code: "EMAIL_NO_VERIFICADO"
      });
      return;
    }
    // Hash viejo (menos iteraciones): se re-hashea con el costo actual ahora que se conoce la
    // contraseña. Si falla, el login sigue igual.
    if (passwordNeedsRehash(user.passwordHash)) {
      try {
        await prisma.usuario.updateMany({
          where: { id: user.id },
          data: { passwordHash: await hashPassword(parsed.password), updatedAt: new Date().toISOString() }
        });
      } catch (error) {
        console.error("[auth/login] no se pudo actualizar el hash de la contraseña", error);
      }
    }
    // B13 — con la verificación en dos pasos activa, la contraseña sola no alcanza: se devuelve un desafío
    // de corta duración y la sesión se emite en POST /api/auth/2fa/login con el código.
    if ((user as { totpActivo?: boolean }).totpActivo) {
      res.status(200).json({ requiere2fa: true, desafio: crearDesafio2fa(user.id.toString()) });
      return;
    }
    await emitirSesion(res, user);
  } catch (e: any) {
    if (e instanceof ZodError) {
      res.status(400).json({ error: e.message || "invalid payload" });
      return;
    }
    res.status(500).json({ error: "Internal server error" });
  }
});

const sendAuthenticatedUser = async (res: Response) => {
  const user = res.locals.user as {
    id?: string;
    _id?: { toString?: () => string };
    role?: string;
    roles?: string[];
    guestOnboardingStatus?: string | null;
    schoolId?: string | null;
    username?: string;
    email?: string;
    fullName?: string;
  };
  const userId = user?.id ?? user?._id?.toString?.() ?? null;
  res.json({
    id: userId,
    role: user?.role ?? null,
    roles: user?.roles ?? (user?.role ? [user.role] : []),
    guestOnboardingStatus: user?.guestOnboardingStatus ?? null,
    schoolId: user?.schoolId ?? null,
    username: user?.username ?? null,
    email: user?.email ?? null,
    fullName: user?.fullName ?? null,
  });
};

auth.get("/api/auth/me", requireUser, async (_req, res) => {
  await sendAuthenticatedUser(res);
});

auth.get("/api/me", requireUser, async (_req, res) => {
  await sendAuthenticatedUser(res);
});

// POST /api/auth/rol-alumno — el staff (o cualquiera) se agrega a SÍ MISMO
// el rol de alumno en su escuela, para vivir la plataforma desde el otro
// lado. Reemplaza a `/api/auth/crear-alumno`, que creaba una CUENTA espejo:
// ahora es una membresía más en la misma cuenta, y se actúa como alumno
// cambiando de rol (POST /api/auth/escuela-activa con `rol: "USER"`).
auth.post("/api/auth/rol-alumno", requireUser, async (req, res) => {
  const reqUser = (req as { user?: { id?: string; _id?: { toString?: () => string } } }).user;
  const userId = reqUser?.id ?? reqUser?._id?.toString?.();
  if (!userId) return res.status(401).json({ error: "Missing authentication" });

  const usuario = await prisma.usuario.findFirst({
    where: { id: userId, isDeleted: { not: true } }
  });
  if (!usuario) return res.status(404).json({ error: "usuario no encontrado" });
  if (!usuario.escuelaId) {
    return res.status(409).json({ error: "la cuenta no tiene escuela asignada" });
  }

  const yaEra = await prisma.membresia.findFirst({
    where: { usuarioId: userId, escuelaId: usuario.escuelaId, rol: "STUDENT", estado: "activa" }
  });
  await sincronizarMembresia({
    usuarioId: userId,
    escuelaId: usuario.escuelaId,
    rolUsuario: "USER"
  });

  return res.status(yaEra ? 200 : 201).json({
    ok: true,
    created: !yaEra,
    escuelaId: usuario.escuelaId,
    rol: "USER"
  });
});

// PLAN-multirol Fase 3 — acá vivían el switch de cuenta
// (`/api/auth/cambiar-cuenta`) y los dos endpoints que creaban o vinculaban
// la cuenta espejo-alumno del staff (`/crear-alumno`, `/vincular-alumno`).
// Se retiraron enteros: la misma persona ya no necesita una segunda cuenta
// para vivir la plataforma como alumno — tiene una membresía STUDENT y
// cambia de ROL con `POST /api/auth/escuela-activa` (parámetro `rol`).
