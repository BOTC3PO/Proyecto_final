import type { Response } from "express";
import { Router } from "express";
import { requireAdmin } from "../lib/admin-auth";
import { getDb } from "../lib/db";
import { ENV } from "../lib/env";
import { toObjectId } from "../lib/ids";
import { createAccessToken, createRefreshToken } from "../lib/auth-token";
import { getCanonicalMembershipRole } from "../lib/membership-roles";
import { hashPassword, verifyPassword } from "../lib/passwords";
import { createRateLimiter } from "../lib/rate-limit";
import { normalizeSchoolId, requireUser } from "../lib/user-auth";
import { BootstrapAdminRequestSchema, CreateAdminSchema, LoginSchema, RegisterSchema } from "../schema/auth";

export const auth = Router();

const authLimiter = createRateLimiter({
  windowMs: 15 * 60 * 1000,
  limit: 10
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
    const db = await getDb();
    const existingAdmin = await db.collection("usuarios").findOne({ role: "ADMIN" });
    if (existingAdmin) {
      res.status(409).json({ error: "Admin already exists" });
      return;
    }
    const now = new Date();
    const doc = {
      username: parsed.username,
      email: parsed.email,
      fullName: parsed.fullName,
      role: "ADMIN",
      passwordHash: hashPassword(parsed.password),
      isDeleted: false,
      createdAt: now,
      updatedAt: now
    };
    const result = await db.collection("usuarios").insertOne(doc);
    res.status(201).json({ id: result.insertedId });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

auth.post("/api/admins", requireAdmin, async (req, res) => {
  try {
    const parsed = CreateAdminSchema.parse(req.body ?? {});
    const db = await getDb();
    const now = new Date();
    const doc = {
      username: parsed.username,
      email: parsed.email,
      fullName: parsed.fullName,
      role: "ADMIN",
      passwordHash: hashPassword(parsed.password),
      isDeleted: false,
      createdAt: now,
      updatedAt: now,
      createdBy: res.locals.adminUser?._id ?? null
    };
    const result = await db.collection("usuarios").insertOne(doc);
    res.status(201).json({ id: result.insertedId });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

auth.post("/api/auth/register", authLimiter, async (req, res) => {
  try {
    const parsed = RegisterSchema.parse(req.body ?? {});
    const db = await getDb();
    const now = new Date();
    const role = parsed.role ?? "USER";
    let escuelaId = parsed.escuelaId ? toObjectId(parsed.escuelaId) : null;
    if (parsed.schoolCode) {
      const escuela = await db.collection("escuelas").findOne({ code: parsed.schoolCode });
      if (!escuela?._id) {
        res.status(400).json({ error: "Invalid school code" });
        return;
      }
      escuelaId = escuela._id;
    }
    const doc = {
      username: parsed.username,
      email: parsed.email,
      fullName: parsed.fullName,
      role,
      escuelaId,
      birthdate: parsed.birthdate ? new Date(parsed.birthdate) : null,
      passwordHash: hashPassword(parsed.password),
      teacherProfile: role === "TEACHER" ? { type: parsed.teacherType } : undefined,
      consents: parsed.consents
        ? {
            ...parsed.consents,
            consentedAt: parsed.consents.consentedAt ? new Date(parsed.consents.consentedAt) : now
          }
        : undefined,
      isDeleted: false,
      createdAt: now,
      updatedAt: now
    };
    const result = await db.collection("usuarios").insertOne(doc);
    const membershipRole = getCanonicalMembershipRole(role);
    if (escuelaId && membershipRole && (role === "TEACHER" || role === "DIRECTIVO")) {
      await db.collection("membresias_escuela").insertOne({
        usuarioId: result.insertedId,
        escuelaId,
        rol: membershipRole,
        estado: "activa",
        fechaAlta: now,
        createdAt: now,
        updatedAt: now
      });
    }
    res.status(201).json({ id: result.insertedId });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

auth.post("/api/auth/login", authLimiter, async (req, res) => {
  try {
    const parsed = LoginSchema.parse(req.body ?? {});
    const db = await getDb();
    const identifier = parsed.identifier ?? parsed.email ?? parsed.username ?? "";
    const user = await db.collection("usuarios").findOne({
      $or: [{ email: identifier }, { username: identifier }],
      isDeleted: { $ne: true }
    });
    if (!user || typeof user.passwordHash !== "string") {
      res.status(401).json({ error: "Credenciales inválidas" });
      return;
    }
    const isValid = verifyPassword(parsed.password, user.passwordHash);
    if (!isValid) {
      res.status(401).json({ error: "Credenciales inválidas" });
      return;
    }
    const accessToken = createAccessToken({
      id: user._id.toString(),
      email: user.email,
      username: user.username,
      role: user.role,
      schoolId: normalizeSchoolId(user.escuelaId),
      fullName: user.fullName ?? null
    });
    const refreshToken = createRefreshToken({ id: user._id.toString() });
    res.json({
      id: user._id,
      username: user.username,
      email: user.email,
      fullName: user.fullName,
      role: user.role,
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
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

const sendAuthenticatedUser = (res: Response) => {
  const user = res.locals.user as {
    _id?: { toString?: () => string };
    role?: string;
    schoolId?: string | null;
    username?: string;
    email?: string;
    fullName?: string;
  };
  res.json({
    id: user?._id?.toString?.() ?? null,
    role: user?.role ?? null,
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
