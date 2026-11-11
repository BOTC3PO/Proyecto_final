import rateLimit from "express-rate-limit";
import { RedisStore, type RedisReply } from "rate-limit-redis";
import Redis from "ioredis";
import type { Request } from "express";
import { extractTokenFromRequest, verifyToken } from "./auth-token";
import { ENV } from "./env";

const defaultRateLimitMessage = { error: "Too many requests" };

/**
 * `RedisStore` carga sus scripts Lua en Redis en `init()`, y `express-rate-limit` llama a `init()` sin capturar el error:
 * si Redis no está listo (o está caído) AL ARRANCAR, la promesa rechazada tira el proceso y la API ni siquiera levanta.
 * La librería recarga el script sola en el primer uso, así que acá se ignora el fallo inicial.
 */
class RedisStoreSeguro extends RedisStore {
  override async init(options: Parameters<RedisStore["init"]>[0]): Promise<void> {
    try {
      await super.init(options);
    } catch {
      /* Redis todavía no responde: los scripts se cargan en el primer pedido */
    }
  }
}

// Store compartido — sin ENV.REDIS_URL cae a MemoryStore (default de
// express-rate-limit, un balde por proceso). Con 2+ instancias del API
// eso hace que el límite efectivo sea limit×instancias; con Redis, todas
// cuentan contra el mismo balde. Ver tareas_pendientes/
// PLAN-escalabilidad-api.md.
let redisClient: Redis | null = null;
let ultimoAvisoRedis = 0;
export const getRedisClient = (): Redis | null => {
  if (!ENV.REDIS_URL) return null;
  if (!redisClient) {
    redisClient = new Redis(ENV.REDIS_URL, {
      // Si Redis se cae NO se puede dejar los pedidos colgados esperándolo. Con la configuración anterior
      // (`maxRetriesPerRequest: null`, cola sin tope) una caída de Redis congelaba TODA la API, /health incluido
      // (medido el 2026-11-10: pedidos en 000 tras 5 s hasta que Redis volvía). Ahora los comandos fallan rápido
      // y el limitador deja pasar el pedido (`passOnStoreError`): sin Redis, por un rato no hay límites compartidos.
      maxRetriesPerRequest: 1,
      enableOfflineQueue: false,
      commandTimeout: 400,
      connectTimeout: 1000,
      retryStrategy: (intento) => Math.min(intento * 200, 2000)
    });
    redisClient.on("error", (err) => {
      const ahora = Date.now();
      if (ahora - ultimoAvisoRedis > 30_000) {
        ultimoAvisoRedis = ahora;
        console.error("[redis]", err.message);
      }
    });
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
  message = defaultRateLimitMessage,
  keyGenerator = rateLimitKey
}: {
  windowMs: number;
  limit: number;
  enabled?: boolean;
  message?: { error: string };
  /** Cómo se identifica a quien se cuenta. Por defecto: el usuario de la sesión o, sin sesión, la IP. */
  keyGenerator?: (req: Request) => string;
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
    keyGenerator,
    // Si el almacén (Redis) falla, el pedido pasa: es preferible a que una caída de Redis frene toda la API.
    passOnStoreError: true,
    store: redis
      ? new RedisStoreSeguro({
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
