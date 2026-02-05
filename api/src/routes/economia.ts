import express, { Router } from "express";
import { z } from "zod";
import { ObjectId } from "mongodb";
import { getDb } from "../lib/db";
import { ENV } from "../lib/env";
import { canMintCurrency, canModerateIntercambios } from "../lib/authorization";
import { assertClassroomWritable } from "../lib/classroom";
import {
  ENTERPRISE_FEATURES,
  requireActiveInstitutionBenefit,
  requireEnterpriseFeature
} from "../lib/entitlements";
import { requireAdmin as requireAdminAuth } from "../lib/admin-auth";
import {
  EconomiaConfigSchema,
  EconomiaRiesgoCursoSchema,
  ExamenEconomiaSchema,
  EventoEconomicoSchema,
  IntercambioSchema,
  ModuloEconomiaSchema,
  PujaExamenSchema,
  PuntosExamenSchema,
  CompraSchema,
  RecompensaSchema,
  TransaccionSchema
} from "../schema/economia";
import { requireUser } from "../lib/user-auth";

export const economia = Router();

economia.use(
  requireUser,
  requireEnterpriseFeature(ENTERPRISE_FEATURES.ECONOMY),
  requireActiveInstitutionBenefit
);

const bodyLimitMB = (maxMb: number) => [express.json({ limit: `${maxMb}mb` })];

const clampLimit = (value: string | undefined) => {
  const parsed = Number(value ?? 20);
  if (Number.isNaN(parsed) || parsed <= 0) return 20;
  return Math.min(parsed, 100);
};

const normalizeUsuarioId = (value: unknown) => (typeof value === "string" ? value.trim() : "");

const buildUsuarioObjectId = (usuarioId: string) => {
  if (!ObjectId.isValid(usuarioId)) return null;
  return new ObjectId(usuarioId);
};

const resolveAulaSchoolId = (aula?: { schoolId?: string; institutionId?: string }) => {
  const schoolId = aula?.schoolId ?? aula?.institutionId;
  return typeof schoolId === "string" && schoolId.trim() ? schoolId : null;
};

const resolveMotivoTipoEducativo = (motivo: string) => {
  const base = motivo.trim().split(":")[0]?.toLowerCase();
  if (base === "modulo" || base === "quiz" || base === "tarea") return base;
  return null;
};

const buildReferenciaMatch = (referenciaId: string) => {
  if (ObjectId.isValid(referenciaId)) {
    return { $or: [{ id: referenciaId }, { _id: new ObjectId(referenciaId) }] };
  }
  return { id: referenciaId };
};

const verifyEventoEducativo = async (
  db: Awaited<ReturnType<typeof getDb>>,
  tipo: "modulo" | "quiz" | "tarea",
  referenciaId: string,
  aulaId: string,
  schoolId: string
) => {
  if (tipo === "modulo") {
    const modulo = await db.collection("modulos").findOne({ id: referenciaId });
    if (!modulo) return false;
    if (modulo.aulaId && modulo.aulaId !== aulaId) return false;
    if (modulo.schoolId && modulo.schoolId !== schoolId) return false;
    return true;
  }
  if (tipo === "quiz") {
    const modulo = await db.collection("modulos").findOne({
      $or: [{ "quizzes.id": referenciaId }, { "levels.quizzes.id": referenciaId }]
    });
    if (!modulo) return false;
    if (modulo.aulaId && modulo.aulaId !== aulaId) return false;
    if (modulo.schoolId && modulo.schoolId !== schoolId) return false;
    return true;
  }
  const tarea = await db.collection("tareas").findOne(buildReferenciaMatch(referenciaId));
  if (!tarea) return false;
  if (tarea.aulaId && tarea.aulaId !== aulaId) return false;
  if (tarea.schoolId && tarea.schoolId !== schoolId) return false;
  return true;
};

const ensureUsuarioEnAula = (
  aula: { members?: Array<{ userId?: string }>; schoolId?: string; institutionId?: string } | null,
  usuarioId: string,
  schoolId: string
) => {
  if (!aula) return { ok: false, error: "aula not found" as const, status: 404 };
  const aulaSchoolId = resolveAulaSchoolId(aula);
  if (!aulaSchoolId) return { ok: false, error: "classroom schoolId missing" as const, status: 400 };
  if (aulaSchoolId !== schoolId) return { ok: false, error: "schoolId mismatch" as const, status: 403 };
  const members = Array.isArray(aula.members) ? aula.members : [];
  const isMember = members.some((member) => member.userId === usuarioId);
  if (!isMember) return { ok: false, error: "usuario no pertenece al aula" as const, status: 403 };
  return { ok: true as const, aulaSchoolId };
};

const buildPrecioPromedio = (values: number[]) => {
  const valid = values.filter((value) => value > 0);
  if (!valid.length) return 100;
  return valid.reduce((acc, value) => acc + value, 0) / valid.length;
};

const registerEconomiaAuditoria = async (
  db: Awaited<ReturnType<typeof getDb>>,
  payload: {
    actor: string;
    motivo: string;
    verificacion: Record<string, unknown>;
  }
) => {
  await db.collection("economia_auditoria").insertOne({
    actor: payload.actor,
    timestamp: new Date().toISOString(),
    motivo: payload.motivo,
    verificacion: payload.verificacion
  });
};

const MACRO_MODULOS = {
  inflacion: "economia_inflacion",
  deflacion: "economia_deflacion",
  hiperinflacion: "economia_hiperinflacion"
} as const;

type MacroModo = "normal" | "inflacion" | "deflacion" | "hiperinflacion";

const roundMoney = (value: number) => Number(value.toFixed(2));

const INTERCAMBIO_LIMITS = {
  maxDiario: 5,
  cooldownMinutos: 15,
  scoreThreshold: 0.7,
  montoAlto: 500,
  ventanaCancelacionesDias: 7
};

const clampScore = (value: number) => Math.max(0, Math.min(1, value));

const buildIsoRange = (desde?: string, hasta?: string) => {
  const now = new Date();
  const defaultDesde = new Date(now);
  defaultDesde.setDate(defaultDesde.getDate() - 30);
  const parsedDesde = desde ? new Date(desde) : defaultDesde;
  const parsedHasta = hasta ? new Date(hasta) : now;
  const safeDesde = Number.isNaN(parsedDesde.getTime()) ? defaultDesde : parsedDesde;
  const safeHasta = Number.isNaN(parsedHasta.getTime()) ? now : parsedHasta;
  return {
    desde: safeDesde.toISOString(),
    hasta: safeHasta.toISOString()
  };
};

const buildDayRange = (date = new Date()) => {
  const start = new Date(date);
  start.setHours(0, 0, 0, 0);
  const end = new Date(date);
  end.setHours(23, 59, 59, 999);
  return {
    desde: start.toISOString(),
    hasta: end.toISOString()
  };
};

const getRequesterId = (req: express.Request) =>
  (req as { user?: { _id?: { toString?: () => string }; id?: string } }).user?._id?.toString?.() ??
  (req as { user?: { _id?: { toString?: () => string }; id?: string } }).user?.id ??
  null;

const getRequesterRole = (req: express.Request) =>
  (req as { user?: { role?: string } }).user?.role ?? null;

const getRequesterSchoolId = (req: express.Request) => {
  const user = (req as { user?: { schoolId?: string | null; escuelaId?: unknown } }).user;
  if (typeof user?.schoolId === "string" && user.schoolId.trim()) return user.schoolId;
  const escuelaId = user?.escuelaId;
  if (typeof escuelaId === "string" && escuelaId.trim()) return escuelaId;
  const escuelaObj = escuelaId as { toString?: () => string };
  if (escuelaObj?.toString) return escuelaObj.toString();
  return null;
};

const ensureCanMintCurrency = (req: express.Request, res: express.Response) => {
  const role = getRequesterRole(req);
  if (!canMintCurrency(role)) {
    res.status(403).json({ error: "forbidden" });
    return false;
  }
  return true;
};

const buildIntercambioScore = (params: {
  diarios: number;
  cancelRatio: number;
  monto: number;
}) => {
  const diarioScore = Math.min(params.diarios / INTERCAMBIO_LIMITS.maxDiario, 1);
  const cancelScore = clampScore(params.cancelRatio);
  const montoScore = Math.min(params.monto / INTERCAMBIO_LIMITS.montoAlto, 1);
  return clampScore(diarioScore * 0.4 + cancelScore * 0.4 + montoScore * 0.2);
};

const getMacroAjuste = async (db: Awaited<ReturnType<typeof getDb>>) => {
  const config = await getEconomiaConfig(db);
  const macroIds = Object.values(MACRO_MODULOS);
  const modulos = await db
    .collection("economia_modulos")
    .find({ moduloId: { $in: macroIds } })
    .toArray();
  const activos = new Set(modulos.filter((modulo) => modulo.activo).map((modulo) => modulo.moduloId));
  const hiperinflacionActiva =
    config.hiperinflacion.activa && activos.has(MACRO_MODULOS.hiperinflacion);
  const inflacionActiva = config.inflacion.activa && activos.has(MACRO_MODULOS.inflacion);
  const deflacionActiva = config.deflacion.activa && activos.has(MACRO_MODULOS.deflacion);
  let modo: MacroModo = "normal";
  let precioFactor = 1;
  let recompensaFactor = 1;
  let tasaAplicada = 0;
  let aceleracionAplicada = 1;
  if (hiperinflacionActiva) {
    modo = "hiperinflacion";
    tasaAplicada = config.hiperinflacion.tasa;
    aceleracionAplicada = config.hiperinflacion.aceleracion;
    const ajuste = tasaAplicada * aceleracionAplicada;
    precioFactor = 1 + ajuste;
    recompensaFactor = Math.max(0, 1 - ajuste);
  } else if (inflacionActiva) {
    modo = "inflacion";
    tasaAplicada = config.inflacion.tasa;
    precioFactor = 1 + tasaAplicada;
    recompensaFactor = Math.max(0, 1 - tasaAplicada);
  } else if (deflacionActiva) {
    modo = "deflacion";
    tasaAplicada = config.deflacion.tasa;
    precioFactor = Math.max(0, 1 - tasaAplicada);
    recompensaFactor = 1 + tasaAplicada;
  }
  return {
    modo,
    precioFactor,
    recompensaFactor,
    tasaAplicada,
    aceleracionAplicada
  };
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
  limites: {
    emisionDiaria: 5000,
    recompensaMaxima: 200,
    recompensaDiaria: 500
  },
  inflacion: {
    tasa: 0,
    activa: false
  },
  hiperinflacion: {
    tasa: 0,
    activa: false,
    aceleracion: 2
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
const SaldoManualUpdateSchema = z.object({
  saldo: z.number().min(0),
  moneda: z.string().min(1).optional(),
  motivo: z.string().min(1),
  referenciaId: z.string().min(1),
  aulaId: z.string().min(1),
  schoolId: z.string().min(1)
});
const ModuloEconomiaUpdateSchema = ModuloEconomiaSchema.omit({ moduloId: true, updatedAt: true }).partial();
const EventoEconomicoUpdateSchema = EventoEconomicoSchema.omit({ id: true, updatedAt: true }).partial();
const ExamenEconomiaUpdateSchema = ExamenEconomiaSchema.omit({ id: true, updatedAt: true }).partial();
const PujaExamenCreateSchema = PujaExamenSchema.omit({
  id: true,
  createdAt: true,
  resolvedAt: true,
  estado: true
});
const EconomiaRiesgoCursoUpdateSchema = EconomiaRiesgoCursoSchema.omit({ updatedAt: true }).partial();
const IntercambioCreateSchema = z.object({
  aulaId: z.string().min(1),
  schoolId: z.string().min(1),
  creadorId: z.string().min(1),
  receptorId: z.string().min(1),
  monto: z.number().positive(),
  moneda: z.string().min(1).optional()
});
const CompraCreateSchema = z.object({
  usuarioId: z.string().min(1),
  aulaId: z.string().min(1),
  schoolId: z.string().min(1),
  concepto: z.string().min(1),
  monto: z.number().positive(),
  moneda: z.string().min(1).optional()
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
      limites: { ...current.limites, ...parsed.limites },
      inflacion: { ...current.inflacion, ...parsed.inflacion },
      hiperinflacion: { ...current.hiperinflacion, ...parsed.hiperinflacion },
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
  const filtro: Record<string, unknown> =
    typeof tipo === "string" && ["modulo", "tarea", "bonus"].includes(tipo)
      ? { tipo, isDeleted: { $ne: true } }
      : { isDeleted: { $ne: true } };
  const ajuste = await getMacroAjuste(db);
  const items = await db
    .collection("economia_recompensas")
    .find(filtro)
    .sort({ updatedAt: -1 })
    .toArray();
  const adjustedItems = items.map((item) => ({
    ...item,
    montoAjustado: roundMoney(item.monto * ajuste.recompensaFactor)
  }));
  res.json({
    items: adjustedItems,
    ajuste: {
      modo: ajuste.modo,
      recompensaFactor: ajuste.recompensaFactor,
      precioFactor: ajuste.precioFactor,
      tasaAplicada: ajuste.tasaAplicada,
      aceleracionAplicada: ajuste.aceleracionAplicada
    }
  });
});

economia.post("/api/economia/recompensas", ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    if (!ensureCanMintCurrency(req, res)) return;
    const payload = {
      ...req.body,
      id: req.body?.id ?? new ObjectId().toString(),
      updatedAt: new Date().toISOString()
    };
    const parsed = RecompensaSchema.parse(payload);
    const db = await getDb();
    await db.collection("economia_recompensas").insertOne({
      ...parsed,
      isDeleted: false,
      deletedAt: null,
      deletedBy: null
    });
    res.status(201).json({ id: parsed.id });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

economia.put("/api/economia/recompensas/:id", ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    if (!ensureCanMintCurrency(req, res)) return;
    const parsed = RecompensaUpdateSchema.parse(req.body ?? {});
    const db = await getDb();
    const result = await db
      .collection("economia_recompensas")
      .updateOne(
        { id: req.params.id, isDeleted: { $ne: true } },
        { $set: { ...parsed, updatedAt: new Date().toISOString() } }
      );
    if (!result.matchedCount) return res.status(404).json({ error: "not found" });
    res.json({ ok: true });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

economia.patch("/api/economia/recompensas/:id", ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    if (!ensureCanMintCurrency(req, res)) return;
    const parsed = RecompensaUpdateSchema.parse(req.body ?? {});
    const db = await getDb();
    const result = await db
      .collection("economia_recompensas")
      .updateOne(
        { id: req.params.id, isDeleted: { $ne: true } },
        { $set: { ...parsed, updatedAt: new Date().toISOString() } }
      );
    if (!result.matchedCount) return res.status(404).json({ error: "not found" });
    res.json({ ok: true });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

economia.delete("/api/economia/recompensas/:id", async (req, res) => {
  if (!ensureCanMintCurrency(req, res)) return;
  const db = await getDb();
  const now = new Date().toISOString();
  const deletedBy = getRequesterId(req) ?? "desconocido";
  const result = await db.collection("economia_recompensas").updateOne(
    { id: req.params.id, isDeleted: { $ne: true } },
    {
      $set: {
        isDeleted: true,
        deletedAt: now,
        deletedBy,
        updatedAt: now
      }
    }
  );
  if (!result.matchedCount) return res.status(404).json({ error: "not found" });
  res.status(204).send();
});

economia.get("/api/economia/saldos", async (req, res) => {
  const usuarioId = normalizeUsuarioId(req.query.usuarioId);
  if (!usuarioId) {
    return res.status(400).json({ error: "usuarioId is required" });
  }
  const usuarioObjectId = buildUsuarioObjectId(usuarioId);
  if (!usuarioObjectId) {
    return res.status(400).json({ error: "usuarioId must be a valid ObjectId" });
  }
  const db = await getDb();
  const saldo = await db.collection("economia_saldos").findOne({ usuarioId: usuarioObjectId });
  if (saldo) return res.json({ ...saldo, usuarioId });
  const config = await getEconomiaConfig(db);
  res.json({
    usuarioId,
    saldo: 0,
    moneda: config.moneda.codigo,
    updatedAt: new Date().toISOString()
  });
});

economia.patch(
  "/api/economia/saldos/:usuarioId",
  requireAdminAuth,
  ...bodyLimitMB(ENV.MAX_PAGE_MB),
  async (req, res) => {
    const actorId = getRequesterId(req) ?? "desconocido";
    const usuarioId = normalizeUsuarioId(req.params.usuarioId);
    if (!usuarioId) {
      return res.status(400).json({ error: "usuarioId is required" });
    }
    const usuarioObjectId = buildUsuarioObjectId(usuarioId);
    if (!usuarioObjectId) {
      return res.status(400).json({ error: "usuarioId must be a valid ObjectId" });
    }
    if (!ensureCanMintCurrency(req, res)) return;
    const db = await getDb();
    const parsedResult = SaldoManualUpdateSchema.safeParse(req.body ?? {});
    if (!parsedResult.success) {
      await registerEconomiaAuditoria(db, {
        actor: actorId,
        motivo: typeof req.body?.motivo === "string" ? req.body.motivo : "desconocido",
        verificacion: {
          usuarioId,
          referenciaId: req.body?.referenciaId ?? null,
          resultado: "payload_invalido"
        }
      });
      return res.status(400).json({ error: "invalid payload" });
    }
    const parsed = parsedResult.data;
    const tipoEvento = resolveMotivoTipoEducativo(parsed.motivo);
    if (!tipoEvento) {
      await registerEconomiaAuditoria(db, {
        actor: actorId,
        motivo: parsed.motivo,
        verificacion: {
          usuarioId,
          referenciaId: parsed.referenciaId,
          resultado: "motivo_invalido",
          valido: false
        }
      });
      return res.status(400).json({ error: "motivo debe indicar modulo, quiz o tarea" });
    }
    const aula = await db.collection("aulas").findOne({ id: parsed.aulaId });
    if (!assertClassroomWritable(res, aula)) {
      return;
    }
    const aulaCheck = ensureUsuarioEnAula(aula, usuarioId, parsed.schoolId);
    if (!aulaCheck.ok) {
      await registerEconomiaAuditoria(db, {
        actor: actorId,
        motivo: parsed.motivo,
        verificacion: {
          usuarioId,
          referenciaId: parsed.referenciaId,
          resultado: "aula_invalida",
          detalle: aulaCheck.error,
          valido: false
        }
      });
      return res.status(aulaCheck.status).json({ error: aulaCheck.error });
    }
    const referenciaValida = await verifyEventoEducativo(
      db,
      tipoEvento,
      parsed.referenciaId,
      parsed.aulaId,
      parsed.schoolId
    );
    if (!referenciaValida) {
      await registerEconomiaAuditoria(db, {
        actor: actorId,
        motivo: parsed.motivo,
        verificacion: {
          usuarioId,
          referenciaId: parsed.referenciaId,
          resultado: "referencia_invalida",
          valido: false
        }
      });
      return res
        .status(400)
        .json({ error: "referencia educativa invalida para el aula/escuela" });
    }
    const saldoDoc = await db.collection("economia_saldos").findOne({
      usuarioId: usuarioObjectId
    });
    const saldoActual = saldoDoc?.saldo ?? 0;
    const nuevoSaldo = parsed.saldo;
    const config = await getEconomiaConfig(db);
    const moneda =
      parsed.moneda ?? saldoDoc?.moneda ?? config.moneda.codigo;
    const update = {
      usuarioId: usuarioObjectId,
      saldo: nuevoSaldo,
      moneda,
      updatedAt: new Date().toISOString()
    };
    const result = await db
      .collection("economia_saldos")
      .updateOne({ usuarioId: usuarioObjectId }, { $set: update }, { upsert: true });
    await registerEconomiaAuditoria(db, {
      actor: actorId,
      motivo: parsed.motivo,
      verificacion: {
        usuarioId,
        referenciaId: parsed.referenciaId,
        aulaId: parsed.aulaId,
        schoolId: parsed.schoolId,
        saldoAnterior: saldoActual,
        saldoNuevo: nuevoSaldo,
        incremento: nuevoSaldo > saldoActual,
        resultado: "aprobado",
        valido: true
      }
    });
    res.status(result.upsertedCount ? 201 : 200).json({ ok: true });
  }
);

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
      if (!ensureCanMintCurrency(req, res)) return;
      const db = await getDb();
      const config = await getEconomiaConfig(db);
      const limites = config.limites ?? defaultConfig().limites;
      const payload = {
        ...req.body,
        id: req.body?.id ?? new ObjectId().toString(),
        moneda: req.body?.moneda ?? config.moneda.codigo,
        createdAt: new Date().toISOString()
      };
      const parsed = TransaccionSchema.parse(payload);
      const actorId =
        (req as { user?: { _id?: { toString?: () => string }; id?: string } }).user?._id?.toString?.() ??
        (req as { user?: { _id?: { toString?: () => string }; id?: string } }).user?.id ??
        "desconocido";
      const usuarioObjectId = buildUsuarioObjectId(parsed.usuarioId);
      if (!usuarioObjectId) {
        return res.status(400).json({ error: "usuarioId must be a valid ObjectId" });
      }
      const aula = await db.collection("aulas").findOne({ id: parsed.aulaId });
      if (!assertClassroomWritable(res, aula)) {
        return;
      }
      const aulaCheck = ensureUsuarioEnAula(aula, parsed.usuarioId, parsed.schoolId);
      if (!aulaCheck.ok) {
        return res.status(aulaCheck.status).json({ error: aulaCheck.error });
      }
      if (parsed.tipo === "credito") {
        if (!parsed.referenciaId || !parsed.referenciaId.trim()) {
          return res.status(400).json({ error: "referenciaId is required for creditos" });
        }
        const tipoEvento = resolveMotivoTipoEducativo(parsed.motivo);
        if (!tipoEvento) {
          return res
            .status(400)
            .json({ error: "motivo debe indicar modulo, quiz o tarea" });
        }
        const referenciaValida = await verifyEventoEducativo(
          db,
          tipoEvento,
          parsed.referenciaId,
          parsed.aulaId,
          parsed.schoolId
        );
        if (!referenciaValida) {
          return res
            .status(400)
            .json({ error: "referencia educativa invalida para el aula/escuela" });
        }
        if (limites.recompensaMaxima > 0 && parsed.monto > limites.recompensaMaxima) {
          return res.status(400).json({ error: "limite de recompensa excedido" });
        }
        const rangoDia = buildDayRange();
        const aulaFiltro = { aulaId: parsed.aulaId, schoolId: parsed.schoolId };
        const baseMatch = {
          tipo: "credito",
          createdAt: { $gte: rangoDia.desde, $lte: rangoDia.hasta },
          ...aulaFiltro
        };
        if (limites.emisionDiaria > 0) {
          const totalEmision = await db
            .collection("economia_transacciones")
            .aggregate([
              { $match: baseMatch },
              { $group: { _id: null, total: { $sum: "$monto" } } }
            ])
            .toArray();
          const emisionActual = totalEmision[0]?.total ?? 0;
          if (emisionActual + parsed.monto > limites.emisionDiaria) {
            return res.status(400).json({ error: "limite de emision diaria excedido" });
          }
        }
        if (limites.recompensaDiaria > 0) {
          const totalUsuario = await db
            .collection("economia_transacciones")
            .aggregate([
              {
                $match: {
                  ...baseMatch,
                  usuarioId: parsed.usuarioId
                }
              },
              { $group: { _id: null, total: { $sum: "$monto" } } }
            ])
            .toArray();
          const recompensaActual = totalUsuario[0]?.total ?? 0;
          if (recompensaActual + parsed.monto > limites.recompensaDiaria) {
            return res.status(400).json({ error: "limite de recompensa diaria excedido" });
          }
        }
      }
      const saldoDoc = await db.collection("economia_saldos").findOne({
        usuarioId: usuarioObjectId
      });
      const saldoActual = saldoDoc?.saldo ?? 0;
      const nuevoSaldo =
        parsed.tipo === "credito" ? saldoActual + parsed.monto : saldoActual - parsed.monto;
      if (nuevoSaldo < 0) {
        return res.status(400).json({ error: "saldo insuficiente" });
      }
      await db.collection("economia_transacciones").insertOne(parsed);
      await db.collection("economia_saldos").updateOne(
        { usuarioId: usuarioObjectId },
        {
          $set: {
            usuarioId: usuarioObjectId,
            saldo: nuevoSaldo,
            moneda: parsed.moneda,
            updatedAt: new Date().toISOString()
          }
        },
        { upsert: true }
      );
      if (parsed.tipo === "credito") {
        const verificacion = {
          usuarioId: parsed.usuarioId,
          aulaId: parsed.aulaId,
          schoolId: parsed.schoolId,
          referenciaId: parsed.referenciaId,
          tipoEvento: resolveMotivoTipoEducativo(parsed.motivo),
          valido: true
        };
        await registerEconomiaAuditoria(db, {
          actor: actorId,
          motivo: parsed.motivo,
          verificacion
        });
      }
      res.status(201).json({ id: parsed.id, saldo: nuevoSaldo });
    } catch (e: any) {
      res.status(400).json({ error: e?.message ?? "invalid payload" });
    }
  }
);

economia.post("/api/economia/intercambios", ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    const payload = IntercambioCreateSchema.parse(req.body ?? {});
    const requesterId = getRequesterId(req);
    if (!requesterId || requesterId !== payload.creadorId) {
      return res.status(403).json({ error: "creadorId no coincide con el usuario autenticado" });
    }
    if (payload.creadorId === payload.receptorId) {
      return res.status(400).json({ error: "receptorId debe ser distinto al creador" });
    }
    const db = await getDb();
    const config = await getEconomiaConfig(db);
    const aula = await db.collection("aulas").findOne({ id: payload.aulaId });
    if (!assertClassroomWritable(res, aula)) {
      return;
    }
    const aulaCheck = ensureUsuarioEnAula(aula, payload.creadorId, payload.schoolId);
    if (!aulaCheck.ok) {
      return res.status(aulaCheck.status).json({ error: aulaCheck.error });
    }
    const receptorCheck = ensureUsuarioEnAula(aula, payload.receptorId, payload.schoolId);
    if (!receptorCheck.ok) {
      return res.status(receptorCheck.status).json({ error: receptorCheck.error });
    }
    const usuarioObjectId = buildUsuarioObjectId(payload.creadorId);
    if (!usuarioObjectId) {
      return res.status(400).json({ error: "creadorId must be a valid ObjectId" });
    }
    const saldoDoc = await db.collection("economia_saldos").findOne({
      usuarioId: usuarioObjectId
    });
    const saldoActual = saldoDoc?.saldo ?? 0;
    if (saldoActual < payload.monto) {
      return res.status(400).json({ error: "saldo insuficiente" });
    }
    const rangoDia = buildDayRange();
    const totalHoy = await db.collection("economia_intercambios").countDocuments({
      creadorId: payload.creadorId,
      createdAt: { $gte: rangoDia.desde, $lte: rangoDia.hasta }
    });
    if (totalHoy >= INTERCAMBIO_LIMITS.maxDiario) {
      return res.status(429).json({ error: "limite diario de intercambios excedido" });
    }
    const ultimo = await db.collection("economia_intercambios").findOne(
      { creadorId: payload.creadorId },
      { sort: { createdAt: -1 } }
    );
    if (ultimo?.createdAt) {
      const diffMs = Date.now() - new Date(ultimo.createdAt).getTime();
      if (diffMs < INTERCAMBIO_LIMITS.cooldownMinutos * 60 * 1000) {
        return res.status(429).json({ error: "cooldown activo para crear intercambios" });
      }
    }
    const inicioCancelaciones = new Date();
    inicioCancelaciones.setDate(inicioCancelaciones.getDate() - INTERCAMBIO_LIMITS.ventanaCancelacionesDias);
    const totalVentana = await db.collection("economia_intercambios").countDocuments({
      creadorId: payload.creadorId,
      createdAt: { $gte: inicioCancelaciones.toISOString() }
    });
    const canceladosVentana = await db.collection("economia_intercambios").countDocuments({
      creadorId: payload.creadorId,
      estado: "cancelado",
      createdAt: { $gte: inicioCancelaciones.toISOString() }
    });
    const score = buildIntercambioScore({
      diarios: totalHoy,
      cancelRatio: totalVentana ? canceladosVentana / totalVentana : 0,
      monto: payload.monto
    });
    const moderacionEstado = score >= INTERCAMBIO_LIMITS.scoreThreshold ? "pendiente" : "aprobado";
    const now = new Date().toISOString();
    const intercambio = IntercambioSchema.parse({
      id: new ObjectId().toString(),
      aulaId: payload.aulaId,
      schoolId: payload.schoolId,
      creadorId: payload.creadorId,
      receptorId: payload.receptorId,
      monto: payload.monto,
      moneda: payload.moneda ?? config.moneda.codigo,
      estado: "pendiente",
      moderacion: {
        estado: moderacionEstado,
        updatedAt: now
      },
      riesgoScore: score,
      createdAt: now,
      updatedAt: now
    });
    await db.collection("economia_intercambios").insertOne(intercambio);
    res.status(201).json({ id: intercambio.id, moderacion: intercambio.moderacion });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

economia.post("/api/economia/intercambios/:id/aceptar", async (req, res) => {
  try {
    if (!ensureCanMintCurrency(req, res)) return;
    const db = await getDb();
    const intercambio = await db.collection("economia_intercambios").findOne({ id: req.params.id });
    if (!intercambio) return res.status(404).json({ error: "intercambio not found" });
    if (intercambio.estado !== "pendiente") {
      return res.status(400).json({ error: "intercambio no disponible" });
    }
    if (intercambio.moderacion?.estado !== "aprobado") {
      return res.status(403).json({ error: "intercambio pendiente de moderacion" });
    }
    const requesterId = getRequesterId(req);
    if (!requesterId || requesterId !== intercambio.receptorId) {
      return res.status(403).json({ error: "solo el receptor puede aceptar" });
    }
    const aula = await db.collection("aulas").findOne({ id: intercambio.aulaId });
    if (!assertClassroomWritable(res, aula)) {
      return;
    }
    const creadorCheck = ensureUsuarioEnAula(aula, intercambio.creadorId, intercambio.schoolId);
    if (!creadorCheck.ok) {
      return res.status(creadorCheck.status).json({ error: creadorCheck.error });
    }
    const receptorCheck = ensureUsuarioEnAula(aula, intercambio.receptorId, intercambio.schoolId);
    if (!receptorCheck.ok) {
      return res.status(receptorCheck.status).json({ error: receptorCheck.error });
    }
    const creadorObjectId = buildUsuarioObjectId(intercambio.creadorId);
    const receptorObjectId = buildUsuarioObjectId(intercambio.receptorId);
    if (!creadorObjectId || !receptorObjectId) {
      return res.status(400).json({ error: "usuarioId must be a valid ObjectId" });
    }
    const saldoCreador = await db.collection("economia_saldos").findOne({
      usuarioId: creadorObjectId
    });
    const saldoActual = saldoCreador?.saldo ?? 0;
    if (saldoActual < intercambio.monto) {
      return res.status(400).json({ error: "saldo insuficiente en creador" });
    }
    const config = await getEconomiaConfig(db);
    const now = new Date().toISOString();
    const transaccionDebito = TransaccionSchema.parse({
      id: new ObjectId().toString(),
      usuarioId: intercambio.creadorId,
      aulaId: intercambio.aulaId,
      schoolId: intercambio.schoolId,
      tipo: "debito",
      monto: intercambio.monto,
      moneda: intercambio.moneda ?? config.moneda.codigo,
      motivo: `intercambio:${intercambio.id}:debito`,
      referenciaId: intercambio.id,
      createdAt: now
    });
    const transaccionCredito = TransaccionSchema.parse({
      id: new ObjectId().toString(),
      usuarioId: intercambio.receptorId,
      aulaId: intercambio.aulaId,
      schoolId: intercambio.schoolId,
      tipo: "credito",
      monto: intercambio.monto,
      moneda: intercambio.moneda ?? config.moneda.codigo,
      motivo: `intercambio:${intercambio.id}:credito`,
      referenciaId: intercambio.id,
      createdAt: now
    });
    await db.collection("economia_transacciones").insertMany([transaccionDebito, transaccionCredito]);
    await db.collection("economia_saldos").updateOne(
      { usuarioId: creadorObjectId },
      {
        $set: {
          usuarioId: creadorObjectId,
          saldo: saldoActual - intercambio.monto,
          moneda: transaccionDebito.moneda,
          updatedAt: now
        }
      },
      { upsert: true }
    );
    const saldoReceptor = await db
      .collection("economia_saldos")
      .findOne({ usuarioId: receptorObjectId });
    await db.collection("economia_saldos").updateOne(
      { usuarioId: receptorObjectId },
      {
        $set: {
          usuarioId: receptorObjectId,
          saldo: (saldoReceptor?.saldo ?? 0) + intercambio.monto,
          moneda: transaccionCredito.moneda,
          updatedAt: now
        }
      },
      { upsert: true }
    );
    await db.collection("economia_intercambios").updateOne(
      { id: intercambio.id },
      { $set: { estado: "aceptado", updatedAt: now, resolvedAt: now } }
    );
    res.json({ ok: true });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

economia.post("/api/economia/intercambios/:id/cancelar", async (req, res) => {
  try {
    const db = await getDb();
    const intercambio = await db.collection("economia_intercambios").findOne({ id: req.params.id });
    if (!intercambio) return res.status(404).json({ error: "intercambio not found" });
    if (intercambio.estado !== "pendiente") {
      return res.status(400).json({ error: "intercambio no disponible" });
    }
    const requesterId = getRequesterId(req);
    if (!requesterId || (requesterId !== intercambio.creadorId && requesterId !== intercambio.receptorId)) {
      return res.status(403).json({ error: "no autorizado a cancelar" });
    }
    const aula = await db.collection("aulas").findOne({ id: intercambio.aulaId });
    if (aula && !assertClassroomWritable(res, aula)) {
      return;
    }
    const now = new Date().toISOString();
    await db.collection("economia_intercambios").updateOne(
      { id: intercambio.id },
      { $set: { estado: "cancelado", updatedAt: now, resolvedAt: now } }
    );
    res.json({ ok: true });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

economia.post(
  "/api/economia/intercambios/:id/moderar",
  ...bodyLimitMB(ENV.MAX_PAGE_MB),
  async (req, res) => {
    try {
      const role = getRequesterRole(req);
      if (!canModerateIntercambios(role)) {
        return res.status(403).json({ error: "forbidden" });
      }
      const parsed = z
        .object({
          estado: z.enum(["aprobado", "bloqueado"]),
          motivo: z.string().min(1).optional()
        })
        .parse(req.body ?? {});
      const db = await getDb();
      const intercambio = await db.collection("economia_intercambios").findOne({ id: req.params.id });
      if (!intercambio) return res.status(404).json({ error: "intercambio not found" });
      const aula = await db.collection("aulas").findOne({ id: intercambio.aulaId });
      if (aula && !assertClassroomWritable(res, aula)) {
        return;
      }
      if (role !== "ADMIN") {
        const requesterSchoolId = getRequesterSchoolId(req);
        if (!requesterSchoolId || requesterSchoolId !== intercambio.schoolId) {
          return res.status(403).json({ error: "forbidden" });
        }
      }
      const requesterId = getRequesterId(req) ?? "desconocido";
      const now = new Date().toISOString();
      const update: Record<string, unknown> = {
        moderacion: {
          estado: parsed.estado,
          moderadorId: requesterId,
          motivo: parsed.motivo,
          updatedAt: now
        },
        updatedAt: now
      };
      if (parsed.estado === "bloqueado") {
        update.estado = "bloqueado";
        update.resolvedAt = now;
      }
      await db.collection("economia_intercambios").updateOne({ id: req.params.id }, { $set: update });
      res.json({ ok: true });
    } catch (e: any) {
      res.status(400).json({ error: e?.message ?? "invalid payload" });
    }
  }
);

economia.post("/api/economia/compras", ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    if (!ensureCanMintCurrency(req, res)) return;
    const payload = CompraCreateSchema.parse(req.body ?? {});
    const requesterId = getRequesterId(req);
    const requesterRole = getRequesterRole(req);
    const isOwner = requesterId && requesterId === payload.usuarioId;
    if (!isOwner && !canModerateIntercambios(requesterRole)) {
      return res.status(403).json({ error: "usuario no autorizado" });
    }
    const db = await getDb();
    const config = await getEconomiaConfig(db);
    const aula = await db.collection("aulas").findOne({ id: payload.aulaId });
    if (!assertClassroomWritable(res, aula)) {
      return;
    }
    const aulaCheck = ensureUsuarioEnAula(aula, payload.usuarioId, payload.schoolId);
    if (!aulaCheck.ok) {
      return res.status(aulaCheck.status).json({ error: aulaCheck.error });
    }
    const usuarioObjectId = buildUsuarioObjectId(payload.usuarioId);
    if (!usuarioObjectId) {
      return res.status(400).json({ error: "usuarioId must be a valid ObjectId" });
    }
    const saldoDoc = await db.collection("economia_saldos").findOne({
      usuarioId: usuarioObjectId
    });
    const saldoActual = saldoDoc?.saldo ?? 0;
    if (saldoActual < payload.monto) {
      return res.status(400).json({ error: "saldo insuficiente" });
    }
    const now = new Date().toISOString();
    const compra = CompraSchema.parse({
      id: new ObjectId().toString(),
      usuarioId: payload.usuarioId,
      aulaId: payload.aulaId,
      schoolId: payload.schoolId,
      concepto: payload.concepto,
      monto: payload.monto,
      moneda: payload.moneda ?? config.moneda.codigo,
      estado: "completada",
      createdAt: now,
      updatedAt: now
    });
    const transaccion = TransaccionSchema.parse({
      id: new ObjectId().toString(),
      usuarioId: payload.usuarioId,
      aulaId: payload.aulaId,
      schoolId: payload.schoolId,
      tipo: "debito",
      monto: payload.monto,
      moneda: compra.moneda,
      motivo: `compra:${compra.concepto}`,
      referenciaId: compra.id,
      createdAt: now
    });
    await db.collection("economia_compras").insertOne(compra);
    await db.collection("economia_transacciones").insertOne(transaccion);
    await db.collection("economia_saldos").updateOne(
      { usuarioId: usuarioObjectId },
      {
        $set: {
          usuarioId: usuarioObjectId,
          saldo: saldoActual - payload.monto,
          moneda: compra.moneda,
          updatedAt: now
        }
      },
      { upsert: true }
    );
    res.status(201).json({ id: compra.id, saldo: saldoActual - payload.monto });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

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
  const ajuste = await getMacroAjuste(db);
  const items = await db.collection("economia_examenes").find(filtro).sort({ updatedAt: -1 }).toArray();
  const adjustedItems = items.map((item) => ({
    ...item,
    precioPromedioAjustado:
      item.precioPromedio !== undefined
        ? roundMoney(item.precioPromedio * ajuste.precioFactor)
        : undefined
  }));
  res.json({
    items: adjustedItems,
    ajuste: {
      modo: ajuste.modo,
      recompensaFactor: ajuste.recompensaFactor,
      precioFactor: ajuste.precioFactor,
      tasaAplicada: ajuste.tasaAplicada,
      aceleracionAplicada: ajuste.aceleracionAplicada
    }
  });
});

economia.post("/api/economia/examenes", ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    const payload = {
      ...req.body,
      id: req.body?.id ?? new ObjectId().toString(),
      aulaId: req.body?.aulaId,
      estado: "anunciado",
      subastaActiva: true,
      maxCompra: req.body?.maxCompra ?? 2,
      impuestoTasa: req.body?.impuestoTasa ?? 0.1,
      updatedAt: new Date().toISOString()
    };
    const parsed = ExamenEconomiaSchema.parse(payload);
    const db = await getDb();
    if (parsed.aulaId) {
      const aula = await db.collection("aulas").findOne({ id: parsed.aulaId });
      if (aula && !assertClassroomWritable(res, aula)) {
        return;
      }
    }
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
    const existing = await db.collection("economia_examenes").findOne({ id: req.params.id });
    if (!existing) return res.status(404).json({ error: "not found" });
    if (existing.aulaId) {
      const aula = await db.collection("aulas").findOne({ id: existing.aulaId });
      if (aula && !assertClassroomWritable(res, aula)) {
        return;
      }
    }
    await db.collection("economia_examenes").updateOne(
      { id: req.params.id },
      { $set: { ...parsed, updatedAt: new Date().toISOString() } }
    );
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
    const aulaId = parsed.aulaId ?? examen.aulaId;
    if (aulaId) {
      const aula = await db.collection("aulas").findOne({ id: aulaId });
      if (aula && !assertClassroomWritable(res, aula)) {
        return;
      }
    }
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
    const usuarioObjectId = buildUsuarioObjectId(parsed.usuarioId);
    if (!usuarioObjectId) {
      return res.status(400).json({ error: "usuarioId must be a valid ObjectId" });
    }
    const saldoDoc = await db.collection("economia_saldos").findOne({
      usuarioId: usuarioObjectId
    });
    const saldoActual = saldoDoc?.saldo ?? 0;
    const costoTotal = parsed.puntos * parsed.montoPorPunto;
    if (saldoActual < costoTotal) {
      return res.status(400).json({ error: "saldo insuficiente" });
    }
    const payload = {
      ...parsed,
      id: new ObjectId().toString(),
      aulaId: parsed.aulaId ?? examen.aulaId,
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
    if (!ensureCanMintCurrency(req, res)) return;
    const db = await getDb();
    const examen = await db.collection("economia_examenes").findOne({ id: req.params.id });
    if (!examen) return res.status(404).json({ error: "examen not found" });
    if (!examen.aulaId) return res.status(400).json({ error: "aulaId is required" });
    if (examen.estado === "cerrado") {
      return res.status(200).json({ ok: true, message: "examen ya cerrado" });
    }
    const config = await getEconomiaConfig(db);
    const aula = await db.collection("aulas").findOne({ id: examen.aulaId });
    if (aula && !assertClassroomWritable(res, aula)) {
      return;
    }
    const schoolId = resolveAulaSchoolId(aula);
    if (!schoolId) return res.status(400).json({ error: "classroom schoolId missing" });
    const actorId =
      (req as { user?: { _id?: { toString?: () => string }; id?: string } }).user?._id?.toString?.() ??
      (req as { user?: { _id?: { toString?: () => string }; id?: string } }).user?.id ??
      "desconocido";
    const now = new Date().toISOString();
    const pujas = await db
      .collection("economia_examen_pujas")
      .find({ examenId: req.params.id, estado: "pendiente" })
      .toArray();
    const rankingPuntos = new Map<string, number>();
    let precioTotal = 0;
    let precioCount = 0;
    for (const puja of pujas) {
      const usuarioObjectId = buildUsuarioObjectId(puja.usuarioId);
      if (!usuarioObjectId) {
        return res.status(400).json({ error: "usuarioId must be a valid ObjectId" });
      }
      const saldoDoc = await db.collection("economia_saldos").findOne({
        usuarioId: usuarioObjectId
      });
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
        aulaId: examen.aulaId,
        schoolId,
        tipo: "debito",
        monto: costoTotal,
        moneda: config.moneda.codigo,
        motivo: `subasta_examen:${examen.id}`,
        referenciaId: examen.id,
        createdAt: now
      });
      await db.collection("economia_transacciones").insertOne(transaccion);
      await db.collection("economia_saldos").updateOne(
        { usuarioId: usuarioObjectId },
        {
          $set: {
            usuarioId: usuarioObjectId,
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
        aulaId: examen.aulaId,
        schoolId,
        tipo: "credito",
        monto: premio,
        moneda: config.moneda.codigo,
        motivo: `premio_ranking_examen:${examen.id}:${index + 1}`,
        referenciaId: examen.id,
        createdAt: now
      });
      await db.collection("economia_transacciones").insertOne(transaccion);
      const usuarioObjectId = buildUsuarioObjectId(ganador.usuarioId);
      if (!usuarioObjectId) {
        return res.status(400).json({ error: "usuarioId must be a valid ObjectId" });
      }
      const saldoDoc = await db
        .collection("economia_saldos")
        .findOne({ usuarioId: usuarioObjectId });
      const saldoActual = saldoDoc?.saldo ?? 0;
      await db.collection("economia_saldos").updateOne(
        { usuarioId: usuarioObjectId },
        {
          $set: {
            usuarioId: usuarioObjectId,
            saldo: saldoActual + premio,
            moneda: transaccion.moneda,
            updatedAt: now
          }
        },
        { upsert: true }
      );
      await registerEconomiaAuditoria(db, {
        actor: actorId,
        motivo: transaccion.motivo,
        verificacion: {
          usuarioId: transaccion.usuarioId,
          aulaId: transaccion.aulaId,
          schoolId: transaccion.schoolId,
          referenciaId: transaccion.referenciaId,
          tipoEvento: "quiz",
          valido: true
        }
      });
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
  const items = await db
    .collection("economia_eventos")
    .find({ isDeleted: { $ne: true } })
    .sort({ updatedAt: -1 })
    .toArray();
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
    await db.collection("economia_eventos").insertOne({
      ...parsed,
      isDeleted: false,
      deletedAt: null,
      deletedBy: null
    });
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
      .updateOne(
        { id: req.params.id, isDeleted: { $ne: true } },
        { $set: { ...parsed, updatedAt: new Date().toISOString() } }
      );
    if (!result.matchedCount) return res.status(404).json({ error: "not found" });
    res.json({ ok: true });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

economia.delete("/api/economia/eventos/:id", async (req, res) => {
  const db = await getDb();
  const now = new Date().toISOString();
  const deletedBy = getRequesterId(req) ?? "desconocido";
  const result = await db.collection("economia_eventos").updateOne(
    { id: req.params.id, isDeleted: { $ne: true } },
    {
      $set: {
        isDeleted: true,
        deletedAt: now,
        deletedBy,
        updatedAt: now
      }
    }
  );
  if (!result.matchedCount) return res.status(404).json({ error: "not found" });
  res.status(204).send();
});

economia.get("/api/admin/economia/recompensas", requireAdminAuth, async (req, res) => {
  const db = await getDb();
  const tipo = req.query.tipo;
  const includeDeleted = req.query.includeDeleted === "true";
  const onlyDeleted = req.query.onlyDeleted === "true";
  const filtro: Record<string, unknown> =
    typeof tipo === "string" && ["modulo", "tarea", "bonus"].includes(tipo)
      ? { tipo }
      : {};
  if (onlyDeleted) {
    filtro.isDeleted = true;
  } else if (!includeDeleted) {
    filtro.isDeleted = { $ne: true };
  }
  const items = await db
    .collection("economia_recompensas")
    .find(filtro)
    .sort({ updatedAt: -1 })
    .toArray();
  res.json({ items });
});

economia.delete("/api/admin/economia/recompensas/:id", requireAdminAuth, async (req, res) => {
  const db = await getDb();
  const now = new Date().toISOString();
  const deletedBy = getRequesterId(req) ?? "desconocido";
  const result = await db.collection("economia_recompensas").updateOne(
    { id: req.params.id, isDeleted: { $ne: true } },
    {
      $set: {
        isDeleted: true,
        deletedAt: now,
        deletedBy,
        updatedAt: now
      }
    }
  );
  if (!result.matchedCount) return res.status(404).json({ error: "not found" });
  res.status(204).send();
});

economia.get("/api/admin/economia/eventos", requireAdminAuth, async (_req, res) => {
  const db = await getDb();
  const includeDeleted = _req.query.includeDeleted === "true";
  const onlyDeleted = _req.query.onlyDeleted === "true";
  const filtro: Record<string, unknown> = {};
  if (onlyDeleted) {
    filtro.isDeleted = true;
  } else if (!includeDeleted) {
    filtro.isDeleted = { $ne: true };
  }
  const items = await db
    .collection("economia_eventos")
    .find(filtro)
    .sort({ updatedAt: -1 })
    .toArray();
  res.json({ items });
});

economia.delete("/api/admin/economia/eventos/:id", requireAdminAuth, async (req, res) => {
  const db = await getDb();
  const result = await db.collection("economia_eventos").deleteOne({ id: req.params.id });
  if (!result.deletedCount) return res.status(404).json({ error: "not found" });
  res.status(204).send();
});

economia.get("/api/economia/riesgo", async (req, res) => {
  const aulaId = req.query.aulaId;
  if (typeof aulaId !== "string" || !aulaId.trim()) {
    return res.status(400).json({ error: "aulaId is required" });
  }
  const db = await getDb();
  const item = await db.collection("economia_riesgo_cursos").findOne({ aulaId });
  if (item) return res.json(item);
  res.json({
    aulaId,
    riesgoBase: 0.2,
    riesgoMercado: 0.3,
    riesgoCredito: 0.25,
    updatedAt: new Date().toISOString()
  });
});

economia.put("/api/economia/riesgo/:aulaId", ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    const update = {
      ...req.body,
      aulaId: req.params.aulaId,
      updatedAt: new Date().toISOString()
    };
    const validated = EconomiaRiesgoCursoSchema.parse(update);
    const db = await getDb();
    const aula = await db.collection("aulas").findOne({ id: req.params.aulaId });
    if (aula && !assertClassroomWritable(res, aula)) {
      return;
    }
    await db
      .collection("economia_riesgo_cursos")
      .updateOne({ aulaId: req.params.aulaId }, { $set: validated }, { upsert: true });
    res.json({ ok: true });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

economia.patch(
  "/api/economia/riesgo/:aulaId",
  ...bodyLimitMB(ENV.MAX_PAGE_MB),
  async (req, res) => {
    try {
      const parsed = EconomiaRiesgoCursoUpdateSchema.parse(req.body ?? {});
    const update = {
      ...parsed,
      updatedAt: new Date().toISOString()
    };
    const db = await getDb();
    const aula = await db.collection("aulas").findOne({ id: req.params.aulaId });
    if (aula && !assertClassroomWritable(res, aula)) {
      return;
    }
    const result = await db
      .collection("economia_riesgo_cursos")
      .updateOne({ aulaId: req.params.aulaId }, { $set: update }, { upsert: true });
      res.status(result.upsertedCount ? 201 : 200).json({ ok: true });
    } catch (e: any) {
      res.status(400).json({ error: e?.message ?? "invalid payload" });
    }
  }
);

economia.get("/api/economia/metricas", async (req, res) => {
  const aulaId = typeof req.query.aulaId === "string" ? req.query.aulaId : undefined;
  const { desde, hasta } = buildIsoRange(
    typeof req.query.desde === "string" ? req.query.desde : undefined,
    typeof req.query.hasta === "string" ? req.query.hasta : undefined
  );
  const db = await getDb();
  const ajuste = await getMacroAjuste(db);
  const rango = { createdAt: { $gte: desde, $lte: hasta } };
  const filtroAula = aulaId ? { aulaId } : {};
  const volumenSubastasResult = await db
    .collection("economia_examen_pujas")
    .aggregate([
      { $match: { ...rango, ...filtroAula } },
      { $group: { _id: null, total: { $sum: { $multiply: ["$puntos", "$montoPorPunto"] } } } }
    ])
    .toArray();
  const dineroQuemadoResult = await db
    .collection("economia_transacciones")
    .aggregate([
      {
        $match: {
          ...rango,
          ...filtroAula,
          tipo: "debito",
          motivo: { $regex: /(subasta_examen|penalizacion|quemado|burn)/ }
        }
      },
      { $group: { _id: null, total: { $sum: "$monto" } } }
    ])
    .toArray();
  res.json({
    periodo: { desde, hasta },
    aulaId: aulaId ?? "general",
    inflacion: {
      modo: ajuste.modo,
      tasaAplicada: ajuste.tasaAplicada,
      precioFactor: ajuste.precioFactor,
      recompensaFactor: ajuste.recompensaFactor
    },
    volumenSubastas: roundMoney(volumenSubastasResult[0]?.total ?? 0),
    dineroQuemado: roundMoney(dineroQuemadoResult[0]?.total ?? 0)
  });
});
