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
import { escuelasDisponiblesPara, resolverSesionEscuela } from "../lib/sesion-escuela";
import { hashPassword, isPasswordHashUsable, verifyPassword } from "../lib/passwords";
import { markUsersWithoutUsablePasswordForReset } from "../lib/password-health";
import { recordAuditLog } from "../lib/audit-log";
import { createRateLimiter } from "../lib/rate-limit";
import { normalizeSchoolId } from "../lib/school-ids";
import { resolveRoles, isStaffInRoles, resolvePrimaryRole } from "../lib/roles";
import { acreditarSaldoInicial } from "../lib/economia-alta";
import { requireUser } from "../lib/user-auth";
import {
  BootstrapAdminRequestSchema,
  CreateAdminSchema,
  GuestSessionSchema,
  LoginSchema,
  RefreshTokenSchema,
  RegisterSchema,
  ForgotPasswordSchema
} from "../schema/auth";

export const auth = Router();

type DbUser = {
  id: string;
  email?: string | null;
  username?: string | null;
  role?: string | null;
  guestOnboardingStatus?: string | null;
  escuelaId?: string | null;
  fullName?: string | null;
  passwordHash?: string | null;
  passwordResetRequired?: boolean;
  isDeleted?: boolean;
};

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
    if (!providedKey || providedKey !== ENV.BOOTSTRAP_ADMIN_KEY) {
      res.status(401).json({ error: "Invalid bootstrap key" });
      return;
    }
    const parsed = BootstrapAdminRequestSchema.parse(req.body ?? {});
    const existingAdmin = await prisma.usuario.findFirst({ where: { role: "ADMIN" } });
    if (existingAdmin) {
      res.status(409).json({ error: "Admin already exists" });
      return;
    }
    const now = new Date().toISOString();
    const result = await prisma.usuario.create({
      data: {
        id: crypto.randomUUID(),
        username: parsed.username,
        email: parsed.email,
        fullName: parsed.fullName,
        role: "ADMIN",
        // Este endpoint sólo corre cuando NO existe ningún admin (ver el
        // 409 de arriba): quien lo usa ES el admin principal.
        esAdminPrincipal: true,
        passwordHash: hashPassword(parsed.password),
        isDeleted: false,
        createdAt: now,
        updatedAt: now
      }
    });
    // FASE 1 — provisionar espejo alumno para el staff recién creado.
    // Best-effort: un fallo no rompe el alta. ADMIN sin escuela puede
    // quedar con espejo sin membresia (consistente con el modelo).
    res.status(201).json({ id: result.id });
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
        role: "ADMIN",
        passwordHash: hashPassword(parsed.password),
        isDeleted: false,
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
        role,
        // MULTIROL-01: poblar `roles` al registrar. Por ahora, el
        // registro es single-rol (mismo `role` que viene del
        // payload). El endpoint para agregar un segundo rol
        // (multi-rol explícito) se diseña en Fase 2.
        roles: [role],
        escuelaId,
        birthdate: parsed.birthdate ? new Date(parsed.birthdate).toISOString() : null,
        passwordHash: hashPassword(parsed.password),
        isDeleted: false,
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
    res.status(201).json({ id: result.id });
  } catch (e: any) {
    if (e instanceof ZodError) {
      res.status(400).json({ error: e.message || "invalid payload" });
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
        role: "GUEST",
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
auth.post("/api/auth/escuela-activa", requireUser, async (req, res) => {
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

    // PLAN-multirol Fase 2 — el refresh reevalúa la sesión contra
    // `Membresia`: si le revocaron un rol o lo sacaron de una escuela, el
    // token nuevo ya no lo lleva.
    const sesion = await resolverSesionEscuela(user as never, normalizeSchoolId(user.escuelaId));
    const accessToken = createAccessToken({
      id: user.id.toString(),
      email: user.email,
      username: user.username,
      role: sesion.rolPrincipal ?? user.role,
      roles: sesion.roles.length > 0 ? sesion.roles : undefined,
      guestOnboardingStatus: user.guestOnboardingStatus ?? null,
      schoolId: normalizeSchoolId(sesion.escuelaId),
      fullName: user.fullName ?? null
    });

    const nextRefreshToken = createRefreshToken({ id: user.id.toString() });

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

    if (user?.id && user.role !== "GUEST") {
      // MULTIROL-01: con multi-rol, un usuario puede haber sido guest
      // y haber agregado otro rol (ej. TEACHER). El chequeo original
      // sobre `role` singular sigue siendo correcto para Fase 1 —
      // un usuario multi-rol cuyo `role` principal ya no es GUEST
      // entra en la rama de logging. Cuando agreguemos el endpoint
      // para mutar roles (Fase 2), este chequeo se puede migrar a
      // `!hasRole(user, "GUEST")` para que un `roles: ["GUEST",
      // "TEACHER"]` también caiga en esta rama.
      if (ENV.NODE_ENV !== "production") {
        console.info("[auth/forgot-password] Password reset request received", {
          userId: user.id.toString(),
          email: user.email
        });
      }
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
    if (user?.role === "GUEST") {
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
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }
    const isValid = verifyPassword(parsed.password, user.passwordHash);
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
    // PLAN-multirol Fase 2 — la sesión arranca en la escuela activa y con
    // los roles DE ESA ESCUELA (no la unión de todas). Ver sesion-escuela.ts.
    const sesion = await resolverSesionEscuela(user as never);
    const accessToken = createAccessToken({
      id: user.id.toString(),
      email: user.email,
      username: user.username,
      role: sesion.rolPrincipal ?? user.role,
      roles: sesion.roles.length > 0 ? sesion.roles : undefined,
      guestOnboardingStatus: user.guestOnboardingStatus ?? null,
      schoolId: normalizeSchoolId(sesion.escuelaId),
      fullName: user.fullName ?? null
    });
    const refreshToken = createRefreshToken({ id: user.id.toString() });
    res.status(200).json({
      id: user.id,
      username: user.username,
      email: user.email,
      fullName: user.fullName,
      role: sesion.rolPrincipal ?? user.role,
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
  } catch (e: any) {
    if (e instanceof ZodError) {
      res.status(400).json({ error: e.message || "invalid payload" });
      return;
    }
    res.status(500).json({ error: "Internal server error" });
  }
});

const ROLE_LANDING: Record<string, string> = {
  ADMIN: "/admin",
  DIRECTIVO: "/directivo",
  TEACHER: "/profesor",
  PARENT: "/padre",
  USER: "/alumno",
  GUEST: "/alumno"
};

const landingForRoles = (roles: string[]): string => {
  const primary = resolvePrimaryRole({ roles });
  return ROLE_LANDING[primary ?? "USER"] ?? "/alumno";
};

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
