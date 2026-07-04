import rateLimit from "express-rate-limit";
import type { Request } from "express";
import { extractTokenFromRequest, verifyToken } from "./auth-token";

const defaultRateLimitMessage = { error: "Too many requests" };

// Muchas escuelas exponen a todos sus alumnos detrás de la misma IP
// pública (NAT del edificio/ISP). Contar el cupo por IP significaría
// que un aula entera comparte un único balde de 500 requests/15min:
// con varios alumnos usando la plataforma a la vez, se agota en
// minutos y bloquea a todo el curso, no a un actor abusivo puntual.
// Para requests autenticados el cupo se cuenta por usuario (sub del
// JWT, verificado igual que en `requireUser` pero sin ir a la DB);
// solo cae a IP cuando no hay sesión válida (login/register previos
// al auth, o tráfico anónimo), que es donde el límite por IP sigue
// teniendo sentido.
const rateLimitKey = (req: Request): string => {
  const token = extractTokenFromRequest(req);
  if (token) {
    const verification = verifyToken(token, "access");
    if (verification.ok && verification.payload.sub) {
      return `user:${verification.payload.sub}`;
    }
  }
  return req.ip ?? "unknown";
};

export const createRateLimiter = ({
  windowMs,
  limit,
  enabled = true,
  message = defaultRateLimitMessage
}: {
  windowMs: number;
  limit: number;
  enabled?: boolean;
  message?: { error: string };
}) => {
  if (!enabled) {
    return (_req: unknown, _res: unknown, next: () => void) => next();
  }

  return rateLimit({
    windowMs,
    limit,
    standardHeaders: true,
    legacyHeaders: false,
    keyGenerator: rateLimitKey,
    handler: (req, res) => {
      const requestWithRateLimit = req as Request & { rateLimit?: { resetTime?: Date } };
      const retryAfterSeconds = Math.max(1, Math.ceil(((requestWithRateLimit.rateLimit?.resetTime?.getTime() ?? Date.now()) - Date.now()) / 1000));
      res.status(429).json({
        ...message,
        retryAfterSeconds
      });
    }
  });
};
