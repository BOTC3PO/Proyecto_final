import express, { Router } from "express";
import { z } from "zod";
import { getDb } from "../lib/db";
import { toObjectId } from "../lib/ids";
import { requireUser } from "../lib/user-auth";

export const padres = Router();

const bodyLimitMB = (maxMb: number) => [express.json({ limit: `${maxMb}mb` })];
const getParamId = (value: string | string[] | undefined) => (Array.isArray(value) ? value[0] : value) ?? null;

const VinculoHijoSchema = z.object({
  nombre: z.string().min(1),
  usuario: z.string().min(1),
  cumple: z.string().min(1),
  grado: z.string().min(1),
  escuela: z.string().optional().nullable(),
  notas: z.string().optional().nullable(),
  permisosTareas: z.boolean(),
  permisosMensajes: z.boolean()
});

const RestriccionesSchema = z.object({
  permisosTareas: z.boolean().optional(),
  permisosMensajes: z.boolean().optional(),
  notas: z.string().optional().nullable()
});

const resolveParentId = (req: any) => {
  const raw = req.user?._id ?? req.user?.id;
  if (!raw) return null;
  if (typeof raw === "string") return toObjectId(raw);
  return raw;
};

const escapeRegex = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const normalizeUsername = (value: string) => value.trim().replace(/^@/, "");

const isMinor = (birthdate?: Date | null) => {
  if (!birthdate) return false;
  const daysBetween = (start: Date, end: Date) => (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);
  return daysBetween(birthdate, new Date()) < 365.25 * 18;
};

const ensureParentAccess = async (params: {
  parentId: ReturnType<typeof toObjectId>;
  childId: ReturnType<typeof toObjectId>;
}) => {
  if (!params.parentId || !params.childId) {
    return { ok: false as const, status: 400, error: "parentId and childId are required" };
  }
  const db = await getDb();
  const child = await db
    .collection("usuarios")
    .findOne({ _id: params.childId, isDeleted: { $ne: true } }, { projection: { birthdate: 1 } });
  if (!child) return { ok: false as const, status: 404, error: "child not found" };
  const vinculo = await db.collection("vinculos_padre_hijo").findOne({
    parentId: params.parentId,
    childId: params.childId,
    estado: { $ne: "revocado" }
  });
  if (!vinculo) return { ok: false as const, status: 403, error: "no link" };
  const minor = isMinor(child.birthdate instanceof Date ? child.birthdate : null);
  if (!minor && vinculo.estado !== "aprobado") {
    return { ok: false as const, status: 403, error: "approval required" };
  }
  return { ok: true as const, vinculo };
};

padres.post("/api/hijos", requireUser, ...bodyLimitMB(2), async (req, res) => {
  const parentId = resolveParentId(req);
  if (!parentId) return res.status(401).json({ error: "parent not authenticated" });
  try {
    const parsed = VinculoHijoSchema.parse(req.body);
    const username = normalizeUsername(parsed.usuario);
    const db = await getDb();
    const child = await db.collection("usuarios").findOne({
      username: { $regex: new RegExp(`^${escapeRegex(username)}$`, "i") },
      isDeleted: { $ne: true }
    });
    if (!child?._id) return res.status(404).json({ error: "child not found" });
    const childId = child._id;
    const existing = await db.collection("vinculos_padre_hijo").findOne({ parentId, childId });
    if (existing && existing.estado !== "revocado") {
      return res.status(409).json({ error: "child already linked" });
    }
    const activeCount = await db.collection("vinculos_padre_hijo").countDocuments({
      childId,
      estado: { $ne: "revocado" },
      ...(existing ? { _id: { $ne: existing._id } } : {})
    });
    if (activeCount >= 2) {
      return res.status(409).json({ error: "child already has max parents" });
    }
    const now = new Date();
    if (existing) {
      await db.collection("vinculos_padre_hijo").updateOne(
        { _id: existing._id },
        {
          $set: {
            estado: existing.estado === "aprobado" ? "aprobado" : "pendiente",
            solicitadoAt: existing.solicitadoAt ?? now,
            updatedAt: now,
            nombre: parsed.nombre,
            usuario: parsed.usuario,
            grado: parsed.grado,
            escuela: parsed.escuela ?? null,
            notas: parsed.notas ?? null,
            permisos: {
              tareas: parsed.permisosTareas,
              mensajes: parsed.permisosMensajes
            }
          }
        }
      );
      return res.json({ ok: true, estado: existing.estado === "aprobado" ? "aprobado" : "pendiente" });
    }
    const minor = isMinor(child.birthdate instanceof Date ? child.birthdate : null);
    await db.collection("vinculos_padre_hijo").insertOne({
      parentId,
      childId,
      estado: minor ? "aprobado" : "pendiente",
      solicitadoAt: now,
      createdAt: now,
      updatedAt: now,
      nombre: parsed.nombre,
      usuario: parsed.usuario,
      grado: parsed.grado,
      escuela: parsed.escuela ?? null,
      notas: parsed.notas ?? null,
      permisos: {
        tareas: parsed.permisosTareas,
        mensajes: parsed.permisosMensajes
      }
    });
    return res.status(201).json({ ok: true, estado: minor ? "aprobado" : "pendiente" });
  } catch (e: any) {
    return res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

padres.get("/api/padres/hijos/:id/limites", requireUser, async (req, res) => {
  const parentId = resolveParentId(req);
  if (!parentId) return res.status(401).json({ error: "parent not authenticated" });
  const childIdParam = getParamId(req.params.id);
  const childId = childIdParam ? toObjectId(childIdParam) : null;
  if (!childId) return res.status(400).json({ error: "invalid child id" });
  const access = await ensureParentAccess({ parentId, childId });
  if (!access.ok) return res.status(access.status).json({ error: access.error });
  const permisos = access.vinculo?.permisos ?? {};
  res.json({
    permisosTareas: permisos.tareas ?? true,
    permisosMensajes: permisos.mensajes ?? true,
    notas: access.vinculo?.notas ?? null
  });
});

padres.patch("/api/padres/hijos/:id/limites", requireUser, ...bodyLimitMB(1), async (req, res) => {
  const parentId = resolveParentId(req);
  if (!parentId) return res.status(401).json({ error: "parent not authenticated" });
  const childIdParam = getParamId(req.params.id);
  const childId = childIdParam ? toObjectId(childIdParam) : null;
  if (!childId) return res.status(400).json({ error: "invalid child id" });
  try {
    const parsed = RestriccionesSchema.parse(req.body);
    const access = await ensureParentAccess({ parentId, childId });
    if (!access.ok) return res.status(access.status).json({ error: access.error });
    const currentPermisos = access.vinculo?.permisos ?? {};
    const nextPermisos = {
      tareas: parsed.permisosTareas ?? currentPermisos.tareas ?? true,
      mensajes: parsed.permisosMensajes ?? currentPermisos.mensajes ?? true
    };
    const db = await getDb();
    await db.collection("vinculos_padre_hijo").updateOne(
      { parentId, childId },
      {
        $set: {
          permisos: nextPermisos,
          notas: parsed.notas ?? access.vinculo?.notas ?? null,
          updatedAt: new Date()
        }
      }
    );
    return res.json({
      ok: true,
      permisosTareas: nextPermisos.tareas,
      permisosMensajes: nextPermisos.mensajes,
      notas: parsed.notas ?? access.vinculo?.notas ?? null
    });
  } catch (e: any) {
    return res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});
