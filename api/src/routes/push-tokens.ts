/**
 * PLAN-R Parte 5 — registro de tokens de push (Expo) de la app móvil.
 * Sólo guarda el token; el ENVÍO real (expo-server-sdk, disparado
 * desde mensajería/tareas/cobros cuando corresponda) queda para otra
 * sesión — items separados, más grandes que "guardar dónde mandar".
 */
import { randomUUID } from "node:crypto";
import { Router } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { requireUser } from "../lib/user-auth";

export const pushTokens = Router();

const getRequesterId = (req: { user?: { id?: string; _id?: { toString?: () => string } | string } }) => {
  const user = req.user;
  if (typeof user?.id === "string") return user.id;
  if (typeof user?._id === "string") return user._id;
  if (user?._id && typeof (user._id as { toString?: () => string }).toString === "function") {
    return (user._id as { toString: () => string }).toString();
  }
  return null;
};

const RegisterSchema = z.object({
  token: z.string().min(1).max(500),
  platform: z.enum(["ios", "android"]).optional(),
});

// Upsert por token (no por userId): reinstalar o loguearse con otra
// cuenta en el mismo teléfono actualiza el dueño de ESE token en vez
// de acumular filas huérfanas.
pushTokens.post("/api/push-tokens", requireUser, async (req, res) => {
  const userId = getRequesterId(req);
  if (!userId) return res.status(401).json({ error: "user not found" });
  const parsed = RegisterSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: parsed.error.message });

  const now = new Date().toISOString();
  const existing = await prisma.pushToken.findUnique({ where: { token: parsed.data.token } });
  if (existing) {
    await prisma.pushToken.update({
      where: { token: parsed.data.token },
      data: { userId, platform: parsed.data.platform ?? existing.platform, updatedAt: now },
    });
  } else {
    await prisma.pushToken.create({
      data: {
        id: randomUUID(),
        userId,
        token: parsed.data.token,
        platform: parsed.data.platform,
        createdAt: now,
        updatedAt: now,
      },
    });
  }
  res.status(200).json({ ok: true });
});

pushTokens.delete("/api/push-tokens/:token", requireUser, async (req, res) => {
  const userId = getRequesterId(req);
  if (!userId) return res.status(401).json({ error: "user not found" });
  const token = Array.isArray(req.params.token) ? req.params.token[0] : req.params.token;
  await prisma.pushToken.deleteMany({ where: { token, userId } });
  res.status(204).end();
});
