import { Router } from "express";
import { getDb } from "../lib/db";
import { GENERATOR_PROMPT_SEEDS } from "../seeds/generator-prompts";

export const promptSeeds = Router();

promptSeeds.post("/api/seed/prompts/generators", async (_req, res) => {
  const db = await getDb();
  const now = new Date().toISOString();

  const operations = GENERATOR_PROMPT_SEEDS.map((seed) => ({
    updateOne: {
      filter: { targetType: seed.targetType, targetId: seed.targetId, kind: seed.kind, source: seed.source },
      update: {
        $set: {
          targetType: seed.targetType,
          targetId: seed.targetId,
          kind: seed.kind,
          title: seed.title,
          bodyText: seed.bodyText,
          source: seed.source,
          status: seed.status,
          paramsSchema: { generatorId: seed.targetId, templateKind: "TEXT" },
          updatedAt: now,
        },
        $setOnInsert: { id: seed.id, createdBy: "seed", createdAt: now },
      },
      upsert: true,
    },
  }));

  const result = await db.collection("prompts").bulkWrite(operations);
  res.status(201).json({ ok: true, matched: result.matchedCount, upserted: result.upsertedCount });
});
