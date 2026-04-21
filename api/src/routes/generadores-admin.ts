import { Router } from "express";
import { prisma } from "../lib/prisma";
import { requireAdmin } from "../lib/admin-auth";
import { listTopicsFromFilesystem, SUBJECTS } from "./consignas";
import type { Subject } from "./consignas";

export const generadoresAdmin = Router();

const VALID_SUBJECTS = new Set<string>(SUBJECTS);

const isValidSubject = (s: string | string[]): s is Subject =>
  typeof s === "string" && VALID_SUBJECTS.has(s);

/**
 * GET /api/admin/generadores
 * Lista todos los subjects disponibles.
 */
generadoresAdmin.get("/api/admin/generadores", requireAdmin, (_req, res) => {
  return res.json({ subjects: SUBJECTS });
});

/**
 * GET /api/admin/generadores/:subject
 * Lista todos los temas para un subject con su estado (ACTIVE/INACTIVE) y origen (filesystem/database).
 */
generadoresAdmin.get("/api/admin/generadores/:subject", requireAdmin, async (req, res) => {
  const { subject } = req.params;
  if (!isValidSubject(subject)) {
    return res.status(400).json({ error: "subject inválido" });
  }

  try {
    const [fsTemas, overrides] = await Promise.all([
      listTopicsFromFilesystem(subject),
      prisma.generadorAdmin.findMany({ where: { subject } }),
    ]);

    const overrideMap = new Map(overrides.map((o) => [o.topic, o]));

    const allTopics = new Set([...fsTemas]);
    overrides.forEach((o) => {
      if (typeof o.topic === "string") allTopics.add(o.topic);
    });

    const items = Array.from(allTopics).map((topic) => {
      const override = overrideMap.get(topic);
      return {
        topic,
        subject,
        source: fsTemas.includes(topic) ? "filesystem" : "database",
        status: override?.status ?? "ACTIVE",
        hasOverride: !!override,
        updatedAt: override?.updatedAt ?? null,
      };
    });

    return res.json({ subject, items });
  } catch (error: any) {
    return res.status(500).json({ error: error?.message ?? "internal error" });
  }
});

/**
 * GET /api/admin/generadores/:subject/:tema
 * Devuelve el detalle de un tema con su override en BD si existe.
 */
generadoresAdmin.get("/api/admin/generadores/:subject/:tema", requireAdmin, async (req, res) => {
  const { subject, tema } = req.params;
  if (!isValidSubject(subject)) {
    return res.status(400).json({ error: "subject inválido" });
  }

  try {
    const override = await prisma.generadorAdmin.findFirst({ where: { subject, topic: tema } });

    return res.json({
      topic: tema,
      subject,
      override: override ?? null,
      status: override?.status ?? "ACTIVE",
    });
  } catch (error: any) {
    return res.status(500).json({ error: error?.message ?? "internal error" });
  }
});

/**
 * PATCH /api/admin/generadores/:subject/:tema/status
 * Activa o desactiva un tema de generador.
 * Body: { status: "ACTIVE" | "INACTIVE" }
 */
generadoresAdmin.patch("/api/admin/generadores/:subject/:tema/status", requireAdmin, async (req, res) => {
  const { subject, tema } = req.params;
  if (!isValidSubject(subject)) {
    return res.status(400).json({ error: "subject inválido" });
  }

  const status = req.body?.status;
  if (status !== "ACTIVE" && status !== "INACTIVE") {
    return res.status(400).json({ error: "status debe ser ACTIVE o INACTIVE" });
  }

  try {
    const actorId = (req as any).user?.id ?? (req as any).user?._id?.toString() ?? "";
    const now = new Date().toISOString();

    await prisma.generadorAdmin.upsert({
      where: { subject_topic: { subject, topic: tema } },
      update: { status, updatedAt: now, updatedBy: actorId },
      create: { subject, topic: tema, status, updatedAt: now, updatedBy: actorId, createdAt: now },
    });

    return res.json({ ok: true, topic: tema, subject, status });
  } catch (error: any) {
    return res.status(500).json({ error: error?.message ?? "internal error" });
  }
});

/**
 * PUT /api/admin/generadores/:subject/:tema
 * Crea o reemplaza el override de enunciado y/o limits de un tema.
 * Body: { enunciado?: unknown, limits?: unknown, status?: "ACTIVE" | "INACTIVE" }
 */
generadoresAdmin.put("/api/admin/generadores/:subject/:tema", requireAdmin, async (req, res) => {
  const { subject, tema } = req.params;
  if (!isValidSubject(subject)) {
    return res.status(400).json({ error: "subject inválido" });
  }

  const { enunciado, limits, status } = req.body ?? {};

  if (status !== undefined && status !== "ACTIVE" && status !== "INACTIVE") {
    return res.status(400).json({ error: "status debe ser ACTIVE o INACTIVE" });
  }

  if (enunciado === undefined && limits === undefined && status === undefined) {
    return res.status(400).json({ error: "se requiere al menos uno de: enunciado, limits, status" });
  }

  try {
    const actorId = (req as any).user?.id ?? (req as any).user?._id?.toString() ?? "";
    const now = new Date().toISOString();

    await prisma.generadorAdmin.upsert({
      where: { subject_topic: { subject, topic: tema } },
      update: {
        ...(status !== undefined ? { status } : {}),
        updatedAt: now,
        updatedBy: actorId,
      },
      create: {
        subject,
        topic: tema,
        status: status ?? "ACTIVE",
        updatedAt: now,
        updatedBy: actorId,
        createdAt: now,
      },
    });

    return res.json({ ok: true, topic: tema, subject });
  } catch (error: any) {
    return res.status(500).json({ error: error?.message ?? "internal error" });
  }
});

/**
 * DELETE /api/admin/generadores/:subject/:tema
 * Elimina el override de BD para un tema (revierte al filesystem).
 */
generadoresAdmin.delete("/api/admin/generadores/:subject/:tema", requireAdmin, async (req, res) => {
  const { subject, tema } = req.params;
  if (!isValidSubject(subject)) {
    return res.status(400).json({ error: "subject inválido" });
  }

  try {
    await prisma.generadorAdmin.deleteMany({ where: { subject, topic: tema } });
    return res.json({ ok: true });
  } catch (error: any) {
    return res.status(500).json({ error: error?.message ?? "internal error" });
  }
});
