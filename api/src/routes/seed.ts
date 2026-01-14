import { Router } from "express";
import { getDb } from "../lib/db";

export const seed = Router();

seed.post("/api/seed/modulos", async (_req, res) => {
  const db = await getDb();
  const now = new Date().toISOString();
  const modulosBase = [
    {
      id: "mod-001",
      title: "Sumas básicas",
      description: "Resolver sumas simples con apoyo visual.",
      subject: "Matemáticas",
      category: "Aritmética",
      level: "Básico",
      durationMinutes: 15,
      visibility: "publico",
      dependencies: [],
      generatorRef: { id: "matematicas:1", config: { dificultad: "basico" } },
      resources: [],
      createdBy: "seed",
      updatedAt: now
    },
    {
      id: "mod-002",
      title: "Sumas avanzadas",
      description: "Sumas con llevadas y números de dos cifras.",
      subject: "Matemáticas",
      category: "Aritmética",
      level: "Intermedio",
      durationMinutes: 25,
      visibility: "publico",
      dependencies: ["mod-001"],
      generatorRef: { id: "matematicas:2", config: { dificultad: "intermedio" } },
      resources: [],
      createdBy: "seed",
      updatedAt: now
    },
    {
      id: "mod-003",
      title: "Multiplicación",
      description: "Tablas y problemas aplicados en contexto.",
      subject: "Matemáticas",
      category: "Aritmética",
      level: "Intermedio",
      durationMinutes: 30,
      visibility: "publico",
      dependencies: ["mod-002"],
      generatorRef: { id: "matematicas:3", config: { dificultad: "intermedio" } },
      resources: [],
      createdBy: "seed",
      updatedAt: now
    }
  ];

  const operations = modulosBase.map((modulo) => ({
    updateOne: {
      filter: { id: modulo.id },
      update: { $set: modulo },
      upsert: true
    }
  }));

  const result = await db.collection("modulos").bulkWrite(operations);
  res.status(201).json({ ok: true, upserted: result.upsertedCount, matched: result.matchedCount });
});
