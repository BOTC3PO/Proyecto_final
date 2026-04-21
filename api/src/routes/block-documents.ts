import { createHash, randomUUID } from "crypto";
import express, { Router } from "express";
import { prisma } from "../lib/prisma";

export const blockDocuments = Router();

const bodyLimitMB = (maxMb: number) => [express.json({ limit: `${maxMb}mb` })];
const MAX_BODY_MB = Number(process.env.MAX_PAGE_MB ?? 30);

function computeHash(document: unknown): string {
  const str = typeof document === "string" ? document : JSON.stringify(document);
  return createHash("sha256").update(str).digest("hex");
}

blockDocuments.get("/api/block-documents/:id", async (req, res) => {
  try {
    const row = await prisma.bloqueJson.findFirst({ where: { id: req.params.id } });
    if (!row) return res.status(404).json({ error: "not found" });
    let document: unknown = row.content;
    if (typeof document === "string") {
      try { document = JSON.parse(document); } catch { /* leave as string */ }
    }
    res.json({
      id: row.id,
      schema_version: row.schemaVersion,
      document,
      created_at: row.createdAt,
      updated_at: row.updatedAt
    });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "internal error";
    res.status(500).json({ error: message });
  }
});

blockDocuments.post("/api/block-documents", ...bodyLimitMB(MAX_BODY_MB), async (req, res) => {
  try {
    const document = req.body?.document;
    if (document === undefined) {
      return res.status(400).json({ error: "document is required" });
    }
    const id = randomUUID();
    const now = new Date().toISOString();
    const documentStr = typeof document === "string" ? document : JSON.stringify(document);
    const contentHash = computeHash(documentStr);
    await prisma.bloqueJson.create({
      data: {
        id,
        schemaVersion: 1,
        content: documentStr,
        contentHash,
        createdAt: now,
        updatedAt: now
      }
    });
    res.status(201).json({ id });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "invalid payload";
    res.status(400).json({ error: message });
  }
});

blockDocuments.patch("/api/block-documents/:id", ...bodyLimitMB(MAX_BODY_MB), async (req, res) => {
  try {
    const existing = await prisma.bloqueJson.findFirst({ where: { id: req.params.id } });
    if (!existing) return res.status(404).json({ error: "not found" });
    const now = new Date().toISOString();
    const update: Record<string, unknown> = { updatedAt: now };
    if (req.body?.document !== undefined) {
      const doc = req.body.document;
      const documentStr = typeof doc === "string" ? doc : JSON.stringify(doc);
      update.content = documentStr;
      update.contentHash = computeHash(documentStr);
    }
    await prisma.bloqueJson.updateMany({ where: { id: req.params.id }, data: update });
    res.json({ id: req.params.id, updated_at: now });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "invalid payload";
    res.status(400).json({ error: message });
  }
});
