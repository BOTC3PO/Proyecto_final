import type { NextFunction, Request, Response } from "express";
import { buildUserContextFromClaims, extractTokenFromRequest, verifyToken } from "./auth-token";

const ADMIN_ROLE = "ADMIN";

/**
 * @deprecated Use requirePolicy with requireUser or requireAdmin from admin-auth instead.
 * This middleware remains only for temporary compatibility and will be removed.
 */
export const requireAdmin = (req: Request, res: Response, next: NextFunction) => {
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
  if (claims.role !== ADMIN_ROLE) {
    res.status(403).json({ error: "admin role required" });
    return;
  }
  (req as { user?: ReturnType<typeof buildUserContextFromClaims> }).user = buildUserContextFromClaims(
    claims
  );
  next();
};
