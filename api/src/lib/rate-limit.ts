import rateLimit from "express-rate-limit";
import type { Request } from "express";

const defaultRateLimitMessage = { error: "Too many requests" };

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
