import express, { Router } from "express";
import { ObjectId } from "mongodb";
import { getDb } from "../lib/db";
import { ENV } from "../lib/env";
import {
  EconomiaConfigSchema,
  EventoEconomicoSchema,
  ModuloEconomiaSchema,
  RecompensaSchema,
  SaldoSchema,
  TransaccionSchema
} from "../schema/economia";

export const economia = Router();

const bodyLimitMB = (maxMb: number) => [express.json({ limit: `${maxMb}mb` })];

const clampLimit = (value: string | undefined) => {
  const parsed = Number(value ?? 20);
  if (Number.isNaN(parsed) || parsed <= 0) return 20;
  return Math.min(parsed, 100);
};

const defaultConfig = () => ({
  id: "general" as const,
  moneda: {
    codigo: "PF",
    nombre: "Puntos de Foco",
    simbolo: "PF"
  },
  tasas: {
    pf: 1,
    fci: 1
  },
  inflacion: {
    tasa: 0,
    activa: false
  },
  deflacion: {
    tasa: 0,
    activa: false
  },
  updatedAt: new Date().toISOString()
});

const ConfigUpdateSchema = EconomiaConfigSchema.omit({ id: true, updatedAt: true }).partial();
const RecompensaUpdateSchema = RecompensaSchema.omit({ id: true, updatedAt: true }).partial();
const SaldoUpdateSchema = SaldoSchema.omit({ usuarioId: true, updatedAt: true }).partial();
const ModuloEconomiaUpdateSchema = ModuloEconomiaSchema.omit({ moduloId: true, updatedAt: true }).partial();
const EventoEconomicoUpdateSchema = EventoEconomicoSchema.omit({ id: true, updatedAt: true }).partial();

economia.get("/api/economia/config", async (_req, res) => {
  const db = await getDb();
  const config = await db.collection("economia_config").findOne({ id: "general" });
  res.json(config ?? defaultConfig());
});

economia.patch("/api/economia/config", ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    const parsed = ConfigUpdateSchema.parse(req.body ?? {});
    const db = await getDb();
    const current = (await db.collection("economia_config").findOne({ id: "general" })) ??
      defaultConfig();
    const merged = {
      ...current,
      ...parsed,
      moneda: parsed.moneda ?? current.moneda,
      tasas: { ...current.tasas, ...parsed.tasas },
      inflacion: { ...current.inflacion, ...parsed.inflacion },
      deflacion: { ...current.deflacion, ...parsed.deflacion },
      updatedAt: new Date().toISOString()
    };
    const validated = EconomiaConfigSchema.parse(merged);
    await db
      .collection("economia_config")
      .updateOne({ id: "general" }, { $set: validated }, { upsert: true });
    res.json(validated);
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

economia.get("/api/economia/recompensas", async (req, res) => {
  const db = await getDb();
  const tipo = req.query.tipo;
  const filtro =
    typeof tipo === "string" && ["modulo", "tarea", "bonus"].includes(tipo)
      ? { tipo }
      : {};
  const items = await db
    .collection("economia_recompensas")
    .find(filtro)
    .sort({ updatedAt: -1 })
    .toArray();
  res.json({ items });
});

economia.post("/api/economia/recompensas", ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    const payload = {
      ...req.body,
      id: req.body?.id ?? new ObjectId().toString(),
      updatedAt: new Date().toISOString()
    };
    const parsed = RecompensaSchema.parse(payload);
    const db = await getDb();
    await db.collection("economia_recompensas").insertOne(parsed);
    res.status(201).json({ id: parsed.id });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

economia.put("/api/economia/recompensas/:id", ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    const parsed = RecompensaUpdateSchema.parse(req.body ?? {});
    const db = await getDb();
    const result = await db
      .collection("economia_recompensas")
      .updateOne({ id: req.params.id }, { $set: { ...parsed, updatedAt: new Date().toISOString() } });
    if (!result.matchedCount) return res.status(404).json({ error: "not found" });
    res.json({ ok: true });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

economia.patch("/api/economia/recompensas/:id", ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    const parsed = RecompensaUpdateSchema.parse(req.body ?? {});
    const db = await getDb();
    const result = await db
      .collection("economia_recompensas")
      .updateOne({ id: req.params.id }, { $set: { ...parsed, updatedAt: new Date().toISOString() } });
    if (!result.matchedCount) return res.status(404).json({ error: "not found" });
    res.json({ ok: true });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

economia.delete("/api/economia/recompensas/:id", async (req, res) => {
  const db = await getDb();
  const result = await db.collection("economia_recompensas").deleteOne({ id: req.params.id });
  if (!result.deletedCount) return res.status(404).json({ error: "not found" });
  res.status(204).send();
});

economia.get("/api/economia/saldos", async (req, res) => {
  const usuarioId = req.query.usuarioId;
  if (typeof usuarioId !== "string" || !usuarioId.trim()) {
    return res.status(400).json({ error: "usuarioId is required" });
  }
  const db = await getDb();
  const saldo = await db.collection("economia_saldos").findOne({ usuarioId });
  if (saldo) return res.json(saldo);
  const config = (await db.collection("economia_config").findOne({ id: "general" })) ??
    defaultConfig();
  res.json({
    usuarioId,
    saldo: 0,
    moneda: config.moneda.codigo,
    updatedAt: new Date().toISOString()
  });
});

economia.patch("/api/economia/saldos/:usuarioId", ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    const parsed = SaldoUpdateSchema.parse(req.body ?? {});
    const db = await getDb();
    const update = { ...parsed, updatedAt: new Date().toISOString() };
    const result = await db
      .collection("economia_saldos")
      .updateOne({ usuarioId: req.params.usuarioId }, { $set: update }, { upsert: true });
    res.status(result.upsertedCount ? 201 : 200).json({ ok: true });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

economia.get("/api/economia/transacciones", async (req, res) => {
  const usuarioId = req.query.usuarioId;
  if (typeof usuarioId !== "string" || !usuarioId.trim()) {
    return res.status(400).json({ error: "usuarioId is required" });
  }
  const limit = clampLimit(req.query.limit as string | undefined);
  const offset = Number(req.query.offset ?? 0);
  const db = await getDb();
  const cursor = db
    .collection("economia_transacciones")
    .find({ usuarioId })
    .skip(Number.isNaN(offset) || offset < 0 ? 0 : offset)
    .limit(limit)
    .sort({ createdAt: -1 });
  const items = await cursor.toArray();
  res.json({ items, limit, offset });
});

economia.post(
  "/api/economia/transacciones",
  ...bodyLimitMB(ENV.MAX_PAGE_MB),
  async (req, res) => {
    try {
      const db = await getDb();
      const config = (await db.collection("economia_config").findOne({ id: "general" })) ??
        defaultConfig();
      const payload = {
        ...req.body,
        id: req.body?.id ?? new ObjectId().toString(),
        moneda: req.body?.moneda ?? config.moneda.codigo,
        createdAt: new Date().toISOString()
      };
      const parsed = TransaccionSchema.parse(payload);
      const saldoDoc = await db.collection("economia_saldos").findOne({
        usuarioId: parsed.usuarioId
      });
      const saldoActual = saldoDoc?.saldo ?? 0;
      const nuevoSaldo =
        parsed.tipo === "credito" ? saldoActual + parsed.monto : saldoActual - parsed.monto;
      if (nuevoSaldo < 0) {
        return res.status(400).json({ error: "saldo insuficiente" });
      }
      await db.collection("economia_transacciones").insertOne(parsed);
      await db.collection("economia_saldos").updateOne(
        { usuarioId: parsed.usuarioId },
        {
          $set: {
            usuarioId: parsed.usuarioId,
            saldo: nuevoSaldo,
            moneda: parsed.moneda,
            updatedAt: new Date().toISOString()
          }
        },
        { upsert: true }
      );
      res.status(201).json({ id: parsed.id, saldo: nuevoSaldo });
    } catch (e: any) {
      res.status(400).json({ error: e?.message ?? "invalid payload" });
    }
  }
);

economia.get("/api/economia/modulos", async (req, res) => {
  const moduloId = req.query.moduloId;
  const filtro = typeof moduloId === "string" && moduloId.trim() ? { moduloId } : {};
  const db = await getDb();
  const items = await db.collection("economia_modulos").find(filtro).toArray();
  res.json({ items });
});

economia.put("/api/economia/modulos/:moduloId", ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    const parsed = ModuloEconomiaUpdateSchema.parse(req.body ?? {});
    const update = {
      ...parsed,
      moduloId: req.params.moduloId,
      updatedAt: new Date().toISOString()
    };
    const validated = ModuloEconomiaSchema.parse(update);
    const db = await getDb();
    await db
      .collection("economia_modulos")
      .updateOne({ moduloId: req.params.moduloId }, { $set: validated }, { upsert: true });
    res.json({ ok: true });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

economia.get("/api/economia/eventos", async (_req, res) => {
  const db = await getDb();
  const items = await db.collection("economia_eventos").find({}).sort({ updatedAt: -1 }).toArray();
  res.json({ items });
});

economia.post("/api/economia/eventos", ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    const payload = {
      ...req.body,
      id: req.body?.id ?? new ObjectId().toString(),
      updatedAt: new Date().toISOString()
    };
    const parsed = EventoEconomicoSchema.parse(payload);
    const db = await getDb();
    await db.collection("economia_eventos").insertOne(parsed);
    res.status(201).json({ id: parsed.id });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

economia.patch("/api/economia/eventos/:id", ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    const parsed = EventoEconomicoUpdateSchema.parse(req.body ?? {});
    const db = await getDb();
    const result = await db
      .collection("economia_eventos")
      .updateOne({ id: req.params.id }, { $set: { ...parsed, updatedAt: new Date().toISOString() } });
    if (!result.matchedCount) return res.status(404).json({ error: "not found" });
    res.json({ ok: true });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

economia.delete("/api/economia/eventos/:id", async (req, res) => {
  const db = await getDb();
  const result = await db.collection("economia_eventos").deleteOne({ id: req.params.id });
  if (!result.deletedCount) return res.status(404).json({ error: "not found" });
  res.status(204).send();
});
