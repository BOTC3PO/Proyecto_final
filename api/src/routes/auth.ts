import crypto from "node:crypto";
import type { Response } from "express";
import { Router } from "express";
import { ZodError } from "zod";
import { requireAdmin } from "../lib/admin-auth";
import { getDb } from "../lib/db";
import { ENV } from "../lib/env";
import { toObjectId } from "../lib/ids";
import { createAccessToken, createRefreshToken } from "../lib/auth-token";
import { getCanonicalMembershipRole } from "../lib/membership-roles";
import { assertMembershipInvariants, assertValidMembershipTransition } from "../lib/memberships";
import { hashPassword, verifyPassword } from "../lib/passwords";
import { createRateLimiter } from "../lib/rate-limit";
import { normalizeSchoolId } from "../lib/school-ids";
import { requireUser } from "../lib/user-auth";
import {
  BootstrapAdminRequestSchema,
  CreateAdminSchema,
  GuestSessionSchema,
  LoginSchema,
  RegisterSchema
} from "../schema/auth";

export const auth = Router();

const isProduction = ENV.NODE_ENV === "production";

const authLimiter = createRateLimiter({
  windowMs: 60 * 1000,
  limit: isProduction ? 20 : 100,
  enabled: !ENV.AUTH_RATE_LIMIT_DISABLED,
  message: { error: "Too many requests" }
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
    const body = req.body ?? {};
    if (typeof body.email !== "string" || typeof body.password !== "string") {
      res.status(400).json({ error: "Missing email or password" });
      return;
    }

    const parsed = RegisterSchema.parse({
      ...body,
      email: body.email.trim().toLowerCase()
    });
    const db = await getDb();
    const existingEmail = await db.collection("usuarios").findOne({
      email: parsed.email,
      isDeleted: { $ne: true }
    });
    if (existingEmail?._id) {
      res.status(409).json({ error: "Email already exists" });
      return;
    }

    const now = new Date();
    const role = parsed.role ?? "USER";
    let escuelaId = parsed.escuelaId ? toObjectId(parsed.escuelaId) : null;
    let escuelaExists: boolean | undefined;
    if (parsed.schoolCode) {
      const escuela = await db.collection("escuelas").findOne({ code: parsed.schoolCode });
      if (!escuela?._id) {
        res.status(400).json({ error: "Invalid school code" });
        return;
      }
      escuelaId = escuela._id;
      escuelaExists = true;
    } else if (parsed.escuelaId) {
      if (!escuelaId) {
        res.status(400).json({ error: "Invalid school id" });
        return;
      }
      const escuela = await db.collection("escuelas").findOne({ _id: escuelaId }, { projection: { _id: 1 } });
      if (!escuela?._id) {
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
    if (escuelaId && membershipRole) {
      assertValidMembershipTransition(null, "activa");
      assertMembershipInvariants({
        estado: "activa",
        escuelaId,
        escuelaExists,
        membershipRole,
        userRole: role
      });
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
    const db = await getDb();
    const now = new Date();
    const guestId = crypto.randomUUID();
    const username = `guest_${guestId.slice(0, 8)}`;
    const email = `guest+${guestId}@example.com`;
    const doc = {
      username,
      email,
      fullName: parsed.fullName ?? "Invitado",
      role: "GUEST",
      guestOnboardingStatus: "pendiente",
      passwordHash: null,
      isDeleted: false,
      createdAt: now,
      updatedAt: now
    };
    const result = await db.collection("usuarios").insertOne(doc);
    const accessToken = createAccessToken({
      id: result.insertedId.toString(),
      email: doc.email,
      username: doc.username,
      role: doc.role,
      guestOnboardingStatus: doc.guestOnboardingStatus,
      schoolId: null,
      fullName: doc.fullName
    });
    const refreshToken = createRefreshToken({ id: result.insertedId.toString() });
    res.status(201).json({
      id: result.insertedId,
      username: doc.username,
      email: doc.email,
      fullName: doc.fullName,
      role: doc.role,
      guestOnboardingStatus: doc.guestOnboardingStatus,
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

auth.post("/api/auth/login", authLimiter, async (req, res) => {
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
    const db = await getDb();
    const identifier = parsed.identifier;
    const user = await db.collection("usuarios").findOne({
      $or: [{ email: identifier }, { username: identifier }],
      isDeleted: { $ne: true }
    });
    if (!user || typeof user.passwordHash !== "string") {
      if (ENV.NODE_ENV !== "production") {
        console.warn("[auth/login] Invalid credentials: user not found or password hash missing", {
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
          userId: user._id?.toString?.()
        });
      }
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }
    const accessToken = createAccessToken({
      id: user._id.toString(),
      email: user.email,
      username: user.username,
      role: user.role,
      guestOnboardingStatus: user.guestOnboardingStatus ?? null,
      schoolId: normalizeSchoolId(user.escuelaId),
      fullName: user.fullName ?? null
    });
    const refreshToken = createRefreshToken({ id: user._id.toString() });
    res.status(200).json({
      id: user._id,
      username: user.username,
      email: user.email,
      fullName: user.fullName,
      role: user.role,
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
    _id?: { toString?: () => string };
    role?: string;
    guestOnboardingStatus?: string | null;
    schoolId?: string | null;
    username?: string;
    email?: string;
    fullName?: string;
  };
  res.json({
    id: user?._id?.toString?.() ?? null,
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
