import { Router } from "express";
import { z } from "zod";
import { getDb } from "../lib/db";
import { toObjectId } from "../lib/ids";

export const reportes = Router();

const objectIdString = z.string().regex(/^[a-fA-F0-9]{24}$/);

const SolicitudVinculoSchema = z.object({
  childId: objectIdString
});

const AprobacionVinculoSchema = z.object({
  parentId: objectIdString
});

const daysBetween = (start: Date, end: Date) => (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);

const isMinor = (birthdate?: Date | null) => {
  if (!birthdate) return false;
  return daysBetween(birthdate, new Date()) < 365.25 * 18;
};

const logReportePadre = async (params: {
  parentId: ReturnType<typeof toObjectId>;
  childId: ReturnType<typeof toObjectId>;
  tipo: "estadisticas" | "informe";
  acceso: "menor" | "aprobado";
}) => {
  const db = await getDb();
  await db.collection("eventos_reportes_padres").insertOne({
    parentId: params.parentId,
    childId: params.childId,
    tipo: params.tipo,
    acceso: params.acceso,
    createdAt: new Date()
  });
};

const validarAccesoPadre = async (parentId: ReturnType<typeof toObjectId>, childId: ReturnType<typeof toObjectId>) => {
  if (!parentId || !childId) {
    return { ok: false, status: 400, error: "parentId and childId are required" as const };
  }
  const db = await getDb();
  const child = await db
    .collection("usuarios")
    .findOne({ _id: childId, isDeleted: { $ne: true } }, { projection: { birthdate: 1 } });
  if (!child) return { ok: false, status: 404, error: "child not found" as const };
  const vinculo = await db.collection("vinculos_padre_hijo").findOne({
    parentId,
    childId,
    estado: { $ne: "revocado" }
  });
  if (!vinculo) return { ok: false, status: 403, error: "no link" as const };
  const menor = isMinor(child.birthdate instanceof Date ? child.birthdate : null);
  if (menor) {
    return { ok: true, acceso: "menor" as const };
  }
  if (vinculo.estado === "aprobado") {
    return { ok: true, acceso: "aprobado" as const };
  }
  return { ok: false, status: 403, error: "approval required" as const };
};

reportes.post("/api/vinculos/solicitar", async (req, res) => {
  const parentIdParam = req.header("x-usuario-id");
  const parentId = typeof parentIdParam === "string" ? toObjectId(parentIdParam) : null;
  try {
    const parsed = SolicitudVinculoSchema.parse(req.body);
    const childId = toObjectId(parsed.childId);
    if (!parentId || !childId) return res.status(400).json({ error: "invalid parent or child id" });
    const db = await getDb();
    const existing = await db.collection("vinculos_padre_hijo").findOne({ parentId, childId });
    const now = new Date();
    if (existing) {
      await db.collection("vinculos_padre_hijo").updateOne(
        { _id: existing._id },
        {
          $set: {
            estado: existing.estado === "aprobado" ? "aprobado" : "pendiente",
            solicitadoAt: existing.solicitadoAt ?? now,
            updatedAt: now
          }
        }
      );
      return res.json({ ok: true, estado: existing.estado === "aprobado" ? "aprobado" : "pendiente" });
    }
    await db.collection("vinculos_padre_hijo").insertOne({
      parentId,
      childId,
      estado: "pendiente",
      solicitadoAt: now,
      createdAt: now,
      updatedAt: now
    });
    return res.status(201).json({ ok: true, estado: "pendiente" });
  } catch (e: any) {
    return res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

reportes.post("/api/vinculos/aprobar", async (req, res) => {
  const childIdParam = req.header("x-usuario-id");
  const childId = typeof childIdParam === "string" ? toObjectId(childIdParam) : null;
  try {
    const parsed = AprobacionVinculoSchema.parse(req.body);
    const parentId = toObjectId(parsed.parentId);
    if (!parentId || !childId) return res.status(400).json({ error: "invalid parent or child id" });
    const db = await getDb();
    const result = await db.collection("vinculos_padre_hijo").updateOne(
      { parentId, childId, estado: { $ne: "revocado" } },
      {
        $set: {
          estado: "aprobado",
          aprobadoAt: new Date(),
          updatedAt: new Date()
        },
        $setOnInsert: {
          parentId,
          childId,
          solicitadoAt: new Date(),
          createdAt: new Date()
        }
      },
      { upsert: true }
    );
    return res.json({ ok: true, updated: result.modifiedCount });
  } catch (e: any) {
    return res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

reportes.get("/api/vinculos/validar", async (req, res) => {
  const parentIdParam = req.header("x-usuario-id");
  const parentId = typeof parentIdParam === "string" ? toObjectId(parentIdParam) : null;
  const childIdParam = req.query.childId;
  const childId = typeof childIdParam === "string" ? toObjectId(childIdParam) : null;
  const result = await validarAccesoPadre(parentId, childId);
  if (!result.ok) return res.status(result.status).json({ ok: false, error: result.error });
  return res.json({ ok: true, acceso: result.acceso });
});

reportes.get("/api/estadisticas/hijos/:hijoId", async (req, res) => {
  const parentIdParam = req.header("x-usuario-id");
  const parentId = typeof parentIdParam === "string" ? toObjectId(parentIdParam) : null;
  const childId = toObjectId(req.params.hijoId);
  const acceso = await validarAccesoPadre(parentId, childId);
  if (!acceso.ok) return res.status(acceso.status).json({ error: acceso.error });
  const db = await getDb();
  const items = await db.collection("progreso_modulos").find({ usuarioId: req.params.hijoId }).toArray();
  const completados = items.filter((item) => item.status === "completado").length;
  const progreso = items.length ? Math.round((completados / items.length) * 100) : 0;
  await logReportePadre({ parentId, childId, tipo: "estadisticas", acceso: acceso.acceso });
  return res.json({ items, resumen: { completados, total: items.length, progreso } });
});

reportes.get("/api/informes/hijos/:hijoId", async (req, res) => {
  const parentIdParam = req.header("x-usuario-id");
  const parentId = typeof parentIdParam === "string" ? toObjectId(parentIdParam) : null;
  const childId = toObjectId(req.params.hijoId);
  const acceso = await validarAccesoPadre(parentId, childId);
  if (!acceso.ok) return res.status(acceso.status).json({ error: acceso.error });
  const db = await getDb();
  const items = await db.collection("progreso_modulos").find({ usuarioId: req.params.hijoId }).toArray();
  await logReportePadre({ parentId, childId, tipo: "informe", acceso: acceso.acceso });
  return res.json({ generatedAt: new Date().toISOString(), items });
});
