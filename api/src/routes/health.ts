import { Router } from "express";
import { prisma } from "../lib/prisma";
import { ENV } from "../lib/env";
export const health = Router();
health.get("/health", async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ ok: true });
  } catch (e) {
    const message = ENV.NODE_ENV === "production" ? "database connection failed" : String(e);
    res.status(500).json({ ok: false, error: message });
  }
});
