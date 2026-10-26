import type { NextFunction, Request, Response } from "express";
import { buildUserContextFromClaims, extractTokenFromRequest, verifyToken } from "./auth-token";
import { toObjectId } from "./ids";
import { prisma } from "./prisma";
import { hasRole } from "./roles";

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
    // MULTIROL-01: chequeamos ADMIN contra el array de roles del
    // JWT. Un usuario multi-rol `["ADMIN", "TEACHER"]` también pasa
    // la guarda de admin. El chequeo con la DB de abajo sigue
    // exigiendo que la fila tenga rol ADMIN (sigue siendo el criterio
    // de DB autoritativo para Fase 1).
    if (!hasRole({ role: claims.role, roles: claims.roles }, "ADMIN")) {
      res.status(403).json({ error: "Admin role required" });
      return;
    }
    const objectId = toObjectId(claims.sub);
    if (!objectId) {
      res.status(401).json({ error: "Invalid authentication token" });
      return;
    }
    // MULTIROL-01: el chequeo en DB ahora considera `roles` (un
    // usuario multi-rol con `roles` conteniendo "ADMIN" pasa).
    // Mantenemos el filtro legacy `role: "ADMIN"` para no romper
    // filas pre-Fase 1: si la fila tiene `roles` poblado, miramos
    // ese array; si no, miramos `role`.
    const adminUser = await prisma.usuario.findFirst({
      where: {
        id: objectId,
        isDeleted: { not: true },
        // MULTIROL-01: aceptar admin por `role` legacy O por
        // presencia de "ADMIN" en el array `roles` (multi-rol).
        // Compat: las filas pre-migración que aún no tengan
        // `roles` poblado matchean por `role: "ADMIN"`.
        roles: { has: "ADMIN" }
      }
    });
    if (!adminUser) {
      res.status(403).json({ error: "Admin role required" });
      return;
    }

    const userContext = {
      ...buildUserContextFromClaims(claims),
      _id: adminUser.id
    };
    (req as { user?: typeof userContext }).user = userContext;
    res.locals.adminUser = userContext;
    next();
  } catch (error) {
    res.status(500).json({ error: "Admin authentication failed" });
  }
};
