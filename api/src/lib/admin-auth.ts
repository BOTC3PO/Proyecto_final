import type { NextFunction, Request, Response } from "express";
import { buildUserContextFromClaims, extractTokenFromRequest, verifyToken } from "./auth-token";
import { getDb } from "./db";
import { toObjectId } from "./ids";

export const requireAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = extractTokenFromRequest(req);
    if (!token) {
      res.status(401).json({ error: "Missing admin authentication" });
      return;
    }
    const verification = verifyToken(token, "access");
    if (!verification.ok) {
      res.status(401).json({ error: verification.error });
      return;
    }

    const claims = verification.payload;
    if (claims.role !== "ADMIN") {
      res.status(403).json({ error: "Admin role required" });
      return;
    }
    const objectId = toObjectId(claims.sub);
    if (!objectId) {
      res.status(401).json({ error: "Invalid authentication token" });
      return;
    }
    const db = await getDb();
    const adminUser = await db
      .collection("usuarios")
      .findOne({ _id: objectId, role: "ADMIN", isDeleted: { $ne: true } });
    if (!adminUser) {
      res.status(403).json({ error: "Admin role required" });
      return;
    }

    const userContext = {
      ...buildUserContextFromClaims(claims),
      _id: adminUser._id
    };
    (req as { user?: typeof userContext }).user = userContext;
    res.locals.adminUser = userContext;
    next();
  } catch (error) {
    res.status(500).json({ error: "Admin authentication failed" });
  }
};
