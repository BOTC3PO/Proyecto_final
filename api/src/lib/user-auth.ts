import type { NextFunction, Request, Response } from "express";

import { buildUserContextFromClaims, extractTokenFromRequest, verifyToken } from "./auth-token";
import { enforceSubscriptionAccess } from "./entitlements";
import { toObjectId } from "./ids";
import { prisma } from "./prisma";
import { resolveRoles } from "./roles";
import { normalizeSchoolId } from "./school-ids";
import { estaBaneado, respuestaBaneado } from "./ban";
import { rolesVigentes } from "./roles-vigentes";
import { conCache } from "./cache-sesion";

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
    // Los webhooks de pago no traen sesión: se autentican con la firma de la pasarela, que valida cada
    // handler. Sin esta excepción el `app.use(requireUser)` global los cortaba con 401 y MercadoPago nunca
    // podía avisar un pago (solo quedaba la conciliación periódica).
    if (req.method === "POST" && (url.startsWith("/api/pasarelas/webhook/") || url === "/api/payments/webhook")) {
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
    const guardado = await conCache(`usuario:${objectId}`, () =>
      prisma.usuario.findFirst({ where: { id: objectId, isDeleted: { not: true } } })
    );
    // Copia: los handlers reciben la fila en res.locals.userDoc y no deben poder cambiar la de la caché.
    const user = (guardado ? { ...guardado } : null) as AuthenticatedUser | null;
    if (!user) {
      res.status(403).json({ error: "User not found" });
      return;
    }
    if (estaBaneado(user as { isBanned?: boolean; bannedUntil?: string | null })) {
      res.status(403).json(respuestaBaneado(user as { bannedUntil?: string | null }));
      return;
    }
    // Cache the full user document so route handlers can use it without a second DB query
    res.locals.userDoc = user;
    // B3 — los roles se recalculan desde la base en cada pedido; el token solo aporta la escuela de la
    // sesión y el rol principal elegido (mientras sigan vigentes).
    const vigentes = await rolesVigentes(claims, user as never, userId);
    const userContext: AuthenticatedUser = {
      ...buildUserContextFromClaims(claims),
      _id: objectId,
      role: vigentes.role,
      roles: vigentes.roles.length > 0 ? vigentes.roles : undefined,
      guestOnboardingStatus: (user as { guestOnboardingStatus?: string | null }).guestOnboardingStatus ?? null,
      schoolId: vigentes.sinEscuela
        ? null
        : (vigentes.schoolId ?? normalizeSchoolId((user as { escuelaId?: unknown }).escuelaId) ?? null)
    };
    const allowGuestPaths = new Set(["/api/auth/me", "/api/me"]);
    if (
      resolveRoles(userContext).includes("GUEST") &&
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
