import type { NextFunction, Request, Response } from "express";

import { buildUserContextFromClaims, extractTokenFromRequest, verifyToken } from "./auth-token";
import { getDb } from "./db";
import { enforceSubscriptionAccess } from "./entitlements";
import { toObjectId } from "./ids";
import { normalizeSchoolId } from "./school-ids";

type AuthenticatedUser = Record<string, unknown> & {
  _id?: string;
  role?: string;
  guestOnboardingStatus?: string | null;
  schoolId?: string | null;
};

export const requireUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const url = (req.originalUrl || "").split("?")[0];

    if (req.method === "OPTIONS") {
      return next();
    }

    if (
      url === "/api/auth/login" ||
      url === "/api/auth/register" ||
      url === "/api/auth/guest" ||
      url === "/api/auth/refresh" ||
      url === "/api/auth/forgot-password" ||
      url === "/api/auth/bootstrap-admin" ||
      url === "/health"
    ) {
      return next();
    }

    const token = extractTokenFromRequest(req);
    if (!token) {
      res.status(401).json({ error: "Missing authentication" });
      return;
    }
    const verification = verifyToken(token, "access");
    if (!verification.ok) {
      res.status(401).json({ error: verification.error });
      return;
    }
    const claims = verification.payload;
    const userId = claims.sub;
    if (!userId) {
      res.status(401).json({ error: "Invalid authentication token" });
      return;
    }
    const objectId = toObjectId(userId);
    if (!objectId) {
      res.status(401).json({ error: "Invalid authentication token" });
      return;
    }
    const db = await getDb();
    const user = (await db
      .collection("usuarios")
      .findOne({ _id: objectId, isDeleted: { $ne: true } })) as AuthenticatedUser | null;
    if (!user) {
      res.status(403).json({ error: "User not found" });
      return;
    }
    const userContext: AuthenticatedUser = {
      ...buildUserContextFromClaims(claims),
      _id: objectId,
      guestOnboardingStatus: (user as { guestOnboardingStatus?: string | null }).guestOnboardingStatus ?? null,
      schoolId: claims.schoolId ?? normalizeSchoolId((user as { escuelaId?: unknown }).escuelaId) ?? null
    };
    const allowGuestPaths = new Set(["/api/auth/me", "/api/me"]);
    if (
      userContext.role === "GUEST" &&
      userContext.guestOnboardingStatus !== "aceptado" &&
      !allowGuestPaths.has(req.path)
    ) {
      res.status(403).json({ error: "Guest onboarding pending approval" });
      return;
    }
    (req as { user?: AuthenticatedUser }).user = userContext;
    res.locals.user = userContext;
    const hasAccess = await enforceSubscriptionAccess(req, res);
    if (!hasAccess) return;
    next();
  } catch (error) {
    res.status(500).json({ error: "Authentication failed" });
  }
};
