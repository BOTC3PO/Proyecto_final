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
import { assertMembershipInvariants, assertValidMembershipTransition } from "../lib/memberships";
import { hashPassword, isPasswordHashUsable, verifyPassword } from "../lib/passwords";
import { markUsersWithoutUsablePasswordForReset } from "../lib/password-health";
import { createRateLimiter } from "../lib/rate-limit";
import { normalizeSchoolId } from "../lib/school-ids";
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
        passwordHash: hashPassword(parsed.password),
        isDeleted: false,
        createdAt: now,
        updatedAt: now
      }
    });
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
    if (escuelaId && membershipRole) {
      assertValidMembershipTransition(null, "activa");
      assertMembershipInvariants({
        estado: "activa",
        escuelaId,
        escuelaExists,
        membershipRole,
        userRole: role
      });
      await prisma.membresia.create({
        data: {
          usuarioId: result.id,
          escuelaId,
          rol: membershipRole,
          estado: "activa",
          fechaAlta: now,
          createdAt: now,
          updatedAt: now
        }
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

    const accessToken = createAccessToken({
      id: user.id.toString(),
      email: user.email,
      username: user.username,
      role: user.role,
      // MULTIROL-01: leer `roles` desde la DB y caer a `role` para
      // compat. Si la fila no tiene `roles` poblado (migración
      // pendiente), `resolveRoles` lo promueve a `[role]`.
      roles: Array.isArray((user as { roles?: string[] }).roles)
        ? (user as { roles: string[] }).roles
        : user.role
          ? [user.role]
          : undefined,
      guestOnboardingStatus: user.guestOnboardingStatus ?? null,
      schoolId: normalizeSchoolId(user.escuelaId),
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
    const accessToken = createAccessToken({
      id: user.id.toString(),
      email: user.email,
      username: user.username,
      role: user.role,
      // MULTIROL-01: leer `roles` desde la DB y caer a `role` para
      // compat (ver bloque equivalente en `/api/auth/refresh`).
      roles: Array.isArray((user as { roles?: string[] }).roles)
        ? (user as { roles: string[] }).roles
        : user.role
          ? [user.role]
          : undefined,
      guestOnboardingStatus: user.guestOnboardingStatus ?? null,
      schoolId: normalizeSchoolId(user.escuelaId),
      fullName: user.fullName ?? null
    });
    const refreshToken = createRefreshToken({ id: user.id.toString() });
    res.status(200).json({
      id: user.id,
      username: user.username,
      email: user.email,
      fullName: user.fullName,
      role: user.role,
      // MULTIROL-01: exponer `roles` en la respuesta de login. El
      // front lo consume en Fase 2. Por ahora es aditivo — el front
      // que solo lee `role` lo sigue viendo.
      roles: Array.isArray((user as { roles?: string[] }).roles)
        ? (user as { roles: string[] }).roles
        : user.role
          ? [user.role]
          : undefined,
      guestOnboardingStatus: user.guestOnboardingStatus ?? null,
      schoolId: normalizeSchoolId(user.escuelaId),
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

const sendAuthenticatedUser = (res: Response) => {
  const user = res.locals.user as {
    id?: string;
    _id?: { toString?: () => string };
    role?: string;
    guestOnboardingStatus?: string | null;
    schoolId?: string | null;
    username?: string;
    email?: string;
    fullName?: string;
  };
  res.json({
    id: user?.id ?? user?._id?.toString?.() ?? null,
    role: user?.role ?? null,
    guestOnboardingStatus: user?.guestOnboardingStatus ?? null,
    schoolId: user?.schoolId ?? null,
    username: user?.username ?? null,
    email: user?.email ?? null,
    fullName: user?.fullName ?? null
  });
};

auth.get("/api/auth/me", requireUser, (_req, res) => {
  sendAuthenticatedUser(res);
});

auth.get("/api/me", requireUser, (_req, res) => {
  sendAuthenticatedUser(res);
});

// GET /api/perfil/:username — público, sin auth
auth.get("/api/perfil/:username", async (req, res) => {
  const username = Array.isArray(req.params.username)
    ? req.params.username[0]
    : req.params.username;

  if (!username || typeof username !== "string") {
    return res.status(400).json({ error: "username requerido" });
  }

  try {
    const usuario = await prisma.usuario.findFirst({
      where: {
        username: { contains: username, mode: "insensitive" },
        isDeleted: { not: true },
        isBanned: { not: true }
      }
    });

    if (!usuario) {
      return res.status(404).json({ error: "usuario no encontrado" });
    }

    const userId = String(usuario.id ?? "");

    // Obtener tema activo
    const temaUsuarioItem = await prisma.usuarioItem.findFirst({
      where: { usuarioId: userId, item: { tipo: "tema" } },
      include: { item: { select: { assetId: true } } },
      orderBy: { compradoAt: "desc" },
    });
    const temaItem = temaUsuarioItem ? { asset_id: temaUsuarioItem.item.assetId } : undefined;

    // Obtener módulos completados (solo públicos)
    const progreso = await prisma.progresoModulo.findMany({
      where: {
        usuarioId: userId,
        status: "completado"
      },
      take: 50
    });

    const moduloIds = progreso.map((p) => String(p.moduloId ?? "")).filter(Boolean);
    const modulosPublicos = moduloIds.length
      ? await prisma.modulo.findMany({
          where: {
            id: { in: moduloIds },
            visibility: "publico",
            isDeleted: { not: true }
          },
          take: 6
        })
      : [];

    return res.json({
      username: String(usuario.username ?? ""),
      fullName: String(usuario.fullName ?? ""),
      role: String(usuario.role ?? "USER"),
      createdAt: usuario.createdAt ?? null,
      avatarUrl: (usuario as any).avatarUrl ?? null,
      bio: (usuario as any).bio ?? null,
      tema: temaItem?.asset_id ?? "clasico",
      modulosCompletados: modulosPublicos.map((m) => ({
        id: String(m.id ?? ""),
        titulo: String((m as any).titulo ?? ""),
        materia: String((m as any).subject ?? (m as any).category ?? "General"),
      })),
      totalCompletados: progreso.length,
    });
  } catch (err) {
    return res.status(500).json({
      error: err instanceof Error ? err.message : "error"
    });
  }
});
