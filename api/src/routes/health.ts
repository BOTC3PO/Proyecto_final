import { Router } from "express";
import { getDb } from "../lib/db";
export const health = Router();
health.get("/health", async (_req, res) => {
  try { const db = await getDb(); await db.command({ ping: 1 }); res.json({ ok: true }); }
  catch (e) { res.status(500).json({ ok: false, error: String(e) }); }
});