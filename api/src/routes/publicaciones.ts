import { Router } from "express";
import { getDb } from "../lib/db";

export const publicaciones = Router();

type PublicationAttachment = {
  name: string;
  size: number;
  type?: string;
};

type CreatePublicationPayload = {
  contenido: string;
  authorInitials?: string;
  title?: string;
  archivos?: PublicationAttachment[];
};

const sanitizeAttachments = (archivos: unknown): PublicationAttachment[] => {
  if (!Array.isArray(archivos)) return [];
  return archivos
    .filter((item) => item && typeof item === "object")
    .map((item) => {
      const record = item as Record<string, unknown>;
      return {
        name: String(record.name ?? "Archivo"),
        size: Number(record.size ?? 0),
        type: record.type ? String(record.type) : undefined
      };
    });
};

publicaciones.get("/api/aulas/:id/publicaciones", async (req, res) => {
  const db = await getDb();
  const items = await db
    .collection("publicaciones")
    .find({ aulaId: req.params.id })
    .sort({ createdAt: -1 })
    .toArray();
  res.json({ items });
});

publicaciones.post("/api/aulas/:id/publicaciones", async (req, res) => {
  const payload = req.body as CreatePublicationPayload | undefined;
  if (!payload || typeof payload.contenido !== "string" || payload.contenido.trim() === "") {
    return res.status(400).json({ error: "contenido requerido" });
  }
  const now = new Date().toISOString();
  const attachmentList = sanitizeAttachments(payload.archivos);
  const publication = {
    id: `pub-${Date.now()}`,
    aulaId: req.params.id,
    authorInitials: payload.authorInitials?.trim() || "AA",
    title: payload.title?.trim() || "Nueva publicación",
    body: payload.contenido.trim(),
    links: [],
    archivos: attachmentList,
    publishedAtLabel: "Publicado recién",
    createdAt: now,
    updatedAt: now
  };
  const db = await getDb();
  await db.collection("publicaciones").insertOne(publication);
  res.status(201).json(publication);
});
