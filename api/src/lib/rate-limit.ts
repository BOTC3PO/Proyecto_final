import rateLimit from "express-rate-limit";
import { RedisStore, type RedisReply } from "rate-limit-redis";
import Redis from "ioredis";
import type { Request } from "express";
import { extractTokenFromRequest, verifyToken } from "./auth-token";
import { ENV } from "./env";

const defaultRateLimitMessage = { error: "Too many requests" };

// Store compartido — sin ENV.REDIS_URL cae a MemoryStore (default de
// express-rate-limit, un balde por proceso). Con 2+ instancias del API
// eso hace que el límite efectivo sea limit×instancias; con Redis, todas
// cuentan contra el mismo balde. Ver tareas_pendientes/
// PLAN-escalabilidad-api.md.
let redisClient: Redis | null = null;
const getRedisClient = (): Redis | null => {
  if (!ENV.REDIS_URL) return null;
  if (!redisClient) {
    redisClient = new Redis(ENV.REDIS_URL, { maxRetriesPerRequest: null });
    redisClient.on("error", (err) => console.error("[redis rate-limit]", err));
  }
  return redisClient;
};

// Cada createRateLimiter() se invoca una sola vez, al levantar el
// server (son middlewares de módulo, no algo que corre por-request) —
// un contador de módulo alcanza para darle a cada limiter su propio
// namespace en Redis y que login/register/global/etc. no se pisen las
// cuentas entre sí (todos comparten el mismo `rateLimitKey`).
let limiterSeq = 0;

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

  const redis = getRedisClient();
  const prefix = `rl:${limiterSeq++}:`;

  return rateLimit({
    windowMs,
    limit,
    standardHeaders: true,
    legacyHeaders: false,
    keyGenerator: rateLimitKey,
    store: redis
      ? new RedisStore({
          prefix,
          sendCommand: (...args: string[]) => redis.call(args[0], args.slice(1)) as Promise<RedisReply>
        })
      : undefined,
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
