import rateLimit from "express-rate-limit";

const rateLimitMessage = { error: "demasiadas solicitudes" };

export const createRateLimiter = ({
  windowMs,
  limit
}: {
  windowMs: number;
  limit: number;
}) =>
  rateLimit({
    windowMs,
    limit,
    standardHeaders: true,
    legacyHeaders: false,
    handler: (_req, res) => {
      res.status(429).json(rateLimitMessage);
    }
  });
