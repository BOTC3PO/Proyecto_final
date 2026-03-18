import { createHash, randomUUID } from "crypto";
import express, { Router } from "express";
import { getDb } from "../lib/db";

export const blockDocuments = Router();

const bodyLimitMB = (maxMb: number) => [express.json({ limit: `${maxMb}mb` })];
const MAX_BODY_MB = Number(process.env.MAX_PAGE_MB ?? 30);

function computeHash(document: unknown): string {
  const str = typeof document === "string" ? document : JSON.stringify(document);
  return createHash("sha256").update(str).digest("hex");
}

blockDocuments.get("/api/block-documents/:id", async (req, res) => {
  try {
    const db = await getDb();
    const row = await db.collection("bloques_json").findOne({ id: req.params.id });
    if (!row) return res.status(404).json({ error: "not found" });
    const r = row as Record<string, unknown>;
    let document = r.document;
    if (typeof document === "string") {
      try { document = JSON.parse(document); } catch { /* leave as string */ }
    }
    res.json({
      id: r._id,
      schema_version: r.schemaVersion,
      document,
      created_at: r.createdAt,
      updated_at: r.updatedAt
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
    const db = await getDb();
    await db.collection("bloques_json").insertOne({
      id,
      schemaVersion: 1,
      document: documentStr,
      contentHash,
      createdAt: now,
      updatedAt: now
    });
    res.status(201).json({ id });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "invalid payload";
    res.status(400).json({ error: message });
  }
});

blockDocuments.patch("/api/block-documents/:id", ...bodyLimitMB(MAX_BODY_MB), async (req, res) => {
  try {
    const db = await getDb();
    const existing = await db.collection("bloques_json").findOne({ id: req.params.id });
    if (!existing) return res.status(404).json({ error: "not found" });
    const now = new Date().toISOString();
    const update: Record<string, unknown> = { updatedAt: now };
    if (req.body?.document !== undefined) {
      const doc = req.body.document;
      const documentStr = typeof doc === "string" ? doc : JSON.stringify(doc);
      update.document = documentStr;
      update.contentHash = computeHash(documentStr);
    }
    await db.collection("bloques_json").updateOne({ id: req.params.id }, { $set: update });
    res.json({ id: req.params.id, updated_at: now });
  } catch (e: unknown) {
    const message = e instanceof Error ? e.message : "invalid payload";
    res.status(400).json({ error: message });
  }
});
