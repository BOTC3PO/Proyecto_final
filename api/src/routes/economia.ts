import express, { Router } from "express";
import { ObjectId } from "mongodb";
import { getDb } from "../lib/db";
import { ENV } from "../lib/env";
import {
  EconomiaConfigSchema,
  ExamenEconomiaSchema,
  EventoEconomicoSchema,
  ModuloEconomiaSchema,
  PujaExamenSchema,
  PuntosExamenSchema,
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

const buildPrecioPromedio = (values: number[]) => {
  const valid = values.filter((value) => value > 0);
  if (!valid.length) return 100;
  return valid.reduce((acc, value) => acc + value, 0) / valid.length;
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
  rankingFactors: [1, 0.9, 0.85, 0.8, 0.75, 0.7, 0.65, 0.6, 0.55, 0.5],
  updatedAt: new Date().toISOString()
});

const getEconomiaConfig = async (db: Awaited<ReturnType<typeof getDb>>) => {
  const stored = await db.collection("economia_config").findOne({ id: "general" });
  return stored ? { ...defaultConfig(), ...stored } : defaultConfig();
};

const ConfigUpdateSchema = EconomiaConfigSchema.omit({ id: true, updatedAt: true }).partial();
const RecompensaUpdateSchema = RecompensaSchema.omit({ id: true, updatedAt: true }).partial();
const SaldoUpdateSchema = SaldoSchema.omit({ usuarioId: true, updatedAt: true }).partial();
const ModuloEconomiaUpdateSchema = ModuloEconomiaSchema.omit({ moduloId: true, updatedAt: true }).partial();
const EventoEconomicoUpdateSchema = EventoEconomicoSchema.omit({ id: true, updatedAt: true }).partial();
const ExamenEconomiaUpdateSchema = ExamenEconomiaSchema.omit({ id: true, updatedAt: true }).partial();
const PujaExamenCreateSchema = PujaExamenSchema.omit({
  id: true,
  createdAt: true,
  resolvedAt: true,
  estado: true
});

economia.get("/api/economia/config", async (_req, res) => {
  const db = await getDb();
  const config = await getEconomiaConfig(db);
  res.json(config);
});

economia.patch("/api/economia/config", ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    const parsed = ConfigUpdateSchema.parse(req.body ?? {});
    const db = await getDb();
    const current = await getEconomiaConfig(db);
    const merged = {
      ...current,
      ...parsed,
      moneda: parsed.moneda ?? current.moneda,
      tasas: { ...current.tasas, ...parsed.tasas },
      inflacion: { ...current.inflacion, ...parsed.inflacion },
      deflacion: { ...current.deflacion, ...parsed.deflacion },
      rankingFactors: parsed.rankingFactors ?? current.rankingFactors,
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
  const config = await getEconomiaConfig(db);
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
      const config = await getEconomiaConfig(db);
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

economia.get("/api/economia/examenes", async (req, res) => {
  const estado = req.query.estado;
  const filtro = typeof estado === "string" && estado.trim() ? { estado } : {};
  const db = await getDb();
  const items = await db.collection("economia_examenes").find(filtro).sort({ updatedAt: -1 }).toArray();
  res.json({ items });
});

economia.post("/api/economia/examenes", ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    const payload = {
      ...req.body,
      id: req.body?.id ?? new ObjectId().toString(),
      estado: "anunciado",
      subastaActiva: true,
      maxCompra: req.body?.maxCompra ?? 2,
      impuestoTasa: req.body?.impuestoTasa ?? 0.1,
      updatedAt: new Date().toISOString()
    };
    const parsed = ExamenEconomiaSchema.parse(payload);
    const db = await getDb();
    await db.collection("economia_examenes").insertOne(parsed);
    res.status(201).json({ id: parsed.id });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

economia.patch("/api/economia/examenes/:id", ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    const parsed = ExamenEconomiaUpdateSchema.parse(req.body ?? {});
    const db = await getDb();
    const result = await db.collection("economia_examenes").updateOne(
      { id: req.params.id },
      { $set: { ...parsed, updatedAt: new Date().toISOString() } }
    );
    if (!result.matchedCount) return res.status(404).json({ error: "not found" });
    res.json({ ok: true });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

economia.get("/api/economia/examenes/:id/pujas", async (req, res) => {
  const usuarioId = req.query.usuarioId;
  const filtro: Record<string, string> = { examenId: req.params.id };
  if (typeof usuarioId === "string" && usuarioId.trim()) filtro.usuarioId = usuarioId;
  const db = await getDb();
  const items = await db
    .collection("economia_examen_pujas")
    .find(filtro)
    .sort({ createdAt: -1 })
    .toArray();
  res.json({ items });
});

economia.post("/api/economia/examenes/:id/pujas", ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    const parsed = PujaExamenCreateSchema.parse({ ...req.body, examenId: req.params.id });
    const db = await getDb();
    const examen = await db.collection("economia_examenes").findOne({ id: req.params.id });
    if (!examen) return res.status(404).json({ error: "examen not found" });
    if (!examen.subastaActiva || examen.estado !== "anunciado") {
      return res.status(400).json({ error: "subasta inactiva" });
    }
    if (new Date(examen.fechaExamen) <= new Date()) {
      return res.status(400).json({ error: "examen vencido" });
    }
    const existing = await db
      .collection("economia_examen_pujas")
      .aggregate([
        {
          $match: {
            examenId: req.params.id,
            usuarioId: parsed.usuarioId,
            estado: { $in: ["pendiente", "aceptada"] }
          }
        },
        { $group: { _id: null, total: { $sum: "$puntos" } } }
      ])
      .toArray();
    const totalActual = existing[0]?.total ?? 0;
    if (totalActual + parsed.puntos > examen.maxCompra) {
      return res.status(400).json({ error: "limite de compra excedido" });
    }
    const saldoDoc = await db.collection("economia_saldos").findOne({ usuarioId: parsed.usuarioId });
    const saldoActual = saldoDoc?.saldo ?? 0;
    const costoTotal = parsed.puntos * parsed.montoPorPunto;
    if (saldoActual < costoTotal) {
      return res.status(400).json({ error: "saldo insuficiente" });
    }
    const payload = {
      ...parsed,
      id: new ObjectId().toString(),
      estado: "pendiente",
      createdAt: new Date().toISOString()
    };
    const validated = PujaExamenSchema.parse(payload);
    await db.collection("economia_examen_pujas").insertOne(validated);
    res.status(201).json({ id: validated.id });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

economia.get("/api/economia/examenes/puntos", async (req, res) => {
  const usuarioId = req.query.usuarioId;
  if (typeof usuarioId !== "string" || !usuarioId.trim()) {
    return res.status(400).json({ error: "usuarioId is required" });
  }
  const db = await getDb();
  const puntos = await db.collection("economia_examen_puntos").findOne({ usuarioId });
  if (puntos) return res.json(puntos);
  res.json({
    usuarioId,
    puntos: 0,
    updatedAt: new Date().toISOString()
  });
});

economia.post("/api/economia/examenes/:id/cerrar", async (req, res) => {
  try {
    const db = await getDb();
    const examen = await db.collection("economia_examenes").findOne({ id: req.params.id });
    if (!examen) return res.status(404).json({ error: "examen not found" });
    if (examen.estado === "cerrado") {
      return res.status(200).json({ ok: true, message: "examen ya cerrado" });
    }
    const config = await getEconomiaConfig(db);
    const now = new Date().toISOString();
    const pujas = await db
      .collection("economia_examen_pujas")
      .find({ examenId: req.params.id, estado: "pendiente" })
      .toArray();
    const rankingPuntos = new Map<string, number>();
    let precioTotal = 0;
    let precioCount = 0;
    for (const puja of pujas) {
      const saldoDoc = await db.collection("economia_saldos").findOne({ usuarioId: puja.usuarioId });
      const saldoActual = saldoDoc?.saldo ?? 0;
      const costoTotal = puja.puntos * puja.montoPorPunto;
      if (saldoActual < costoTotal) {
        await db.collection("economia_examen_pujas").updateOne(
          { id: puja.id },
          { $set: { estado: "rechazada", resolvedAt: now } }
        );
        continue;
      }
      const nuevoSaldo = saldoActual - costoTotal;
      const transaccion = TransaccionSchema.parse({
        id: new ObjectId().toString(),
        usuarioId: puja.usuarioId,
        tipo: "debito",
        monto: costoTotal,
        moneda: config.moneda.codigo,
        motivo: `subasta_examen:${examen.id}`,
        referenciaId: examen.id,
        createdAt: now
      });
      await db.collection("economia_transacciones").insertOne(transaccion);
      await db.collection("economia_saldos").updateOne(
        { usuarioId: puja.usuarioId },
        {
          $set: {
            usuarioId: puja.usuarioId,
            saldo: nuevoSaldo,
            moneda: transaccion.moneda,
            updatedAt: now
          }
        },
        { upsert: true }
      );
      const puntosNetos = Math.max(0, puja.puntos * (1 - examen.impuestoTasa));
      const puntosUpdate = {
        usuarioId: puja.usuarioId,
        puntos: puntosNetos,
        updatedAt: now
      };
      PuntosExamenSchema.parse(puntosUpdate);
      await db.collection("economia_examen_puntos").updateOne(
        { usuarioId: puja.usuarioId },
        { $inc: { puntos: puntosNetos }, $set: { updatedAt: now } },
        { upsert: true }
      );
      rankingPuntos.set(puja.usuarioId, (rankingPuntos.get(puja.usuarioId) ?? 0) + puntosNetos);
      precioTotal += puja.montoPorPunto;
      precioCount += 1;
      await db.collection("economia_examen_pujas").updateOne(
        { id: puja.id },
        { $set: { estado: "aceptada", resolvedAt: now } }
      );
    }
    const precioPromedioActual = precioCount ? precioTotal / precioCount : 0;
    const preciosPrevios = await db
      .collection("economia_examenes")
      .find({ estado: "cerrado", id: { $ne: req.params.id } })
      .sort({ updatedAt: -1 })
      .limit(4)
      .toArray();
    const precioPromedioRanking = buildPrecioPromedio([
      precioPromedioActual,
      ...preciosPrevios.map((item) => Number(item.precioPromedio ?? 0))
    ]);
    const ranking = Array.from(rankingPuntos.entries())
      .map(([usuarioId, puntos]) => ({ usuarioId, puntos }))
      .sort((a, b) => b.puntos - a.puntos)
      .slice(0, 10);
    for (const [index, ganador] of ranking.entries()) {
      const factor = config.rankingFactors?.[index] ?? 0;
      if (factor <= 0 || ganador.puntos <= 0 || precioPromedioRanking <= 0) continue;
      const premio = ganador.puntos * precioPromedioRanking * factor;
      if (premio <= 0) continue;
      const transaccion = TransaccionSchema.parse({
        id: new ObjectId().toString(),
        usuarioId: ganador.usuarioId,
        tipo: "credito",
        monto: premio,
        moneda: config.moneda.codigo,
        motivo: `premio_ranking_examen:${examen.id}:${index + 1}`,
        referenciaId: examen.id,
        createdAt: now
      });
      await db.collection("economia_transacciones").insertOne(transaccion);
      const saldoDoc = await db
        .collection("economia_saldos")
        .findOne({ usuarioId: ganador.usuarioId });
      const saldoActual = saldoDoc?.saldo ?? 0;
      await db.collection("economia_saldos").updateOne(
        { usuarioId: ganador.usuarioId },
        {
          $set: {
            usuarioId: ganador.usuarioId,
            saldo: saldoActual + premio,
            moneda: transaccion.moneda,
            updatedAt: now
          }
        },
        { upsert: true }
      );
    }
    await db.collection("economia_examenes").updateOne(
      { id: req.params.id },
      {
        $set: {
          estado: "cerrado",
          subastaActiva: false,
          precioPromedio: precioPromedioActual,
          updatedAt: now
        }
      }
    );
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
