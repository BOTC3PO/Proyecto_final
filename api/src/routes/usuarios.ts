import { Router } from "express";
import { getDb } from "../lib/db";
import { toObjectId } from "../lib/ids";
import { UsuarioSchema } from "../schema/usuario";

export const usuarios = Router();

const clampLimit = (value: string | undefined) => {
  const parsed = Number(value ?? 20);
  if (Number.isNaN(parsed) || parsed <= 0) return 20;
  return Math.min(parsed, 100);
};

usuarios.post("/api/usuarios", async (req, res) => {
  try {
    const parsed = UsuarioSchema.parse(req.body);
    const db = await getDb();
    const now = new Date();
    const doc = {
      ...parsed,
      escuelaId: parsed.escuelaId ? toObjectId(parsed.escuelaId) : null,
      birthdate: parsed.birthdate ? new Date(parsed.birthdate) : null,
      consents: parsed.consents
        ? { ...parsed.consents, consentedAt: parsed.consents.consentedAt ? new Date(parsed.consents.consentedAt) : undefined }
        : undefined,
      parentProfile: parsed.parentProfile
        ? {
            ...parsed.parentProfile,
            childrenIds: parsed.parentProfile.childrenIds?.map((id) => toObjectId(id)).filter(Boolean)
          }
        : undefined,
      teacherProfile: parsed.teacherProfile
        ? {
            ...parsed.teacherProfile,
            managedClassIds: parsed.teacherProfile.managedClassIds?.map((id) => toObjectId(id)).filter(Boolean)
          }
        : undefined,
      isDeleted: false,
      createdAt: now,
      updatedAt: now
    };
    const result = await db.collection("usuarios").insertOne(doc);
    res.status(201).json({ id: result.insertedId });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

usuarios.get("/api/usuarios", async (req, res) => {
  const db = await getDb();
  const limit = clampLimit(req.query.limit as string | undefined);
  const offset = Number(req.query.offset ?? 0);
  const cursor = db
    .collection("usuarios")
    .find({ isDeleted: { $ne: true } })
    .skip(Number.isNaN(offset) || offset < 0 ? 0 : offset)
    .limit(limit)
    .sort({ createdAt: -1 });
  const items = await cursor.toArray();
  res.json({ items, limit, offset });
});

usuarios.get("/api/usuarios/:id", async (req, res) => {
  const db = await getDb();
  const objectId = toObjectId(req.params.id);
  if (!objectId) return res.status(400).json({ error: "invalid id" });
  const item = await db.collection("usuarios").findOne({ _id: objectId, isDeleted: { $ne: true } });
  if (!item) return res.status(404).json({ error: "not found" });
  const escuelaIdParam = req.query.escuelaId;
  const escuelaId = typeof escuelaIdParam === "string" ? toObjectId(escuelaIdParam) : null;
  if (escuelaId) {
    const membresia = await db.collection("membresias_escuela").findOne({
      usuarioId: objectId,
      escuelaId,
      estado: { $ne: "revocada" }
    });
    if (membresia) {
      res.json({
        ...item,
        rolEscuela: membresia.rol,
        estadoMembresia: membresia.estado,
        fechaAltaMembresia: membresia.fechaAlta
      });
      return;
    }
  }
  res.json(item);
});
