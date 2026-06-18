import express, { Router } from "express";
import { checkModoAula } from "../lib/modo-aula-middleware";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { generateId } from "../lib/ids";
import { ENV } from "../lib/env";
import { requirePolicy } from "../lib/authorization";
import { assertClassroomWritable } from "../lib/classroom";
import { requireAdmin as requireAdminAuth } from "../lib/admin-auth";
import { createRateLimiter } from "../lib/rate-limit";
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
import {
  getCicloActivo,
  getProximosCiclos,
  getAjusteEconomico,
} from "../lib/calendario-economico";

export const economia = Router();

const economiaMutationLimiter = createRateLimiter({
  windowMs: 10 * 60 * 1000,
  limit: 60
});

const economiaHighRiskMutationLimiter = createRateLimiter({
  windowMs: 10 * 60 * 1000,
  limit: 20
});

const isMutationMethod = (method: string) =>
  method === "POST" || method === "PUT" || method === "PATCH" || method === "DELETE";

economia.use("/api/economia", (req, res, next) => {
  if (!isMutationMethod(req.method)) return next();
  return economiaMutationLimiter(req, res, next);
});

economia.use("/api/admin/economia", (req, res, next) => {
  if (!isMutationMethod(req.method)) return next();
  return economiaMutationLimiter(req, res, next);
});

economia.use("/api/economia/intercambios", (req, res, next) => {
  if (!isMutationMethod(req.method)) return next();
  return economiaHighRiskMutationLimiter(req, res, next);
});

economia.use("/api/economia/examenes", (req, res, next) => {
  if (!isMutationMethod(req.method)) return next();
  return economiaHighRiskMutationLimiter(req, res, next);
});

type AulaDoc = {
  status?: unknown;
  schoolId?: string;
  institutionId?: string;
  members?: Array<{ userId?: string }>;
};

type IntercambioDoc = {
  _id?: string;
  id?: string;
  estado?: string;
  moderacion?: { estado?: string };
  creadorId?: string;
  receptorId?: string;
  schoolId?: string;
  aulaId?: string;
  monto?: number;
  moneda?: string;
  tipo?: string;
  createdAt?: string;
  updatedAt?: string;
};

type ExamenDoc = {
  _id?: string;
  id?: string;
  estado?: string;
  subastaActiva?: boolean;
  maxCompra?: number;
  impuestoTasa?: number;
  fechaExamen?: string;
  aulaId?: string;
  precioPromedio?: number | null;
};

type PujaDoc = {
  _id?: string;
  id?: string;
  estado?: string;
  usuarioId?: string;
  puntos?: number;
  montoPorPunto?: number;
  examenId?: string;
};

type SaldoDoc = {
  _id?: string;
  usuarioId?: string;
  saldo?: number;
  moneda?: string;
  updatedAt?: string;
};

economia.use(
  ["/api/economia", "/api/admin/economia"],
  requireUser
);

const bodyLimitMB = (maxMb: number) => [express.json({ limit: `${maxMb}mb` })];

const clampLimit = (value: string | undefined) => {
  const parsed = Number(value ?? 20);
  if (Number.isNaN(parsed) || parsed <= 0) return 20;
  return Math.min(parsed, 100);
};

const normalizeUsuarioId = (value: unknown) => (typeof value === "string" ? value.trim() : "");

const buildUsuarioObjectId = (usuarioId: string): string | null => usuarioId || null;

const resolveAulaSchoolId = (aula?: AulaDoc) => {
  const schoolId = aula?.schoolId ?? aula?.institutionId;
  return typeof schoolId === "string" && schoolId.trim() ? schoolId : null;
};

const resolveMotivoTipoEducativo = (motivo: string) => {
  const base = motivo.trim().split(":")[0]?.toLowerCase();
  if (base === "modulo" || base === "quiz" || base === "tarea") return base;
  return null;
};

const buildReferenciaMatch = (referenciaId: string) => {
  // ID is already a string, just search by id field
  return { id: referenciaId };
};

const verifyEventoEducativo = async (
  tipo: "modulo" | "quiz" | "tarea",
  referenciaId: string,
  aulaId: string,
  schoolId: string
) => {
  if (tipo === "modulo") {
    const modulo = await prisma.modulo.findFirst({ where: { id: referenciaId } });
    if (!modulo) return false;
    const moduloData = modulo as unknown as Record<string, unknown>;
    if (moduloData.aulaId && moduloData.aulaId !== aulaId) return false;
    if (moduloData.schoolId && moduloData.schoolId !== schoolId) return false;
    return true;
  }
  if (tipo === "quiz") {
    // quizzes are nested inside modulo JSON; search by raw SQL or skip deep field search
    const modulos = await prisma.modulo.findMany({ where: {} });
    const found = modulos.find((m: unknown) => {
      const modulo = m as Record<string, unknown>;
      const quizzes = Array.isArray(modulo.quizzes) ? modulo.quizzes as Array<{ id: string }> : [];
      const levels = Array.isArray(modulo.levels) ? modulo.levels as Array<{ quizzes?: Array<{ id: string }> }> : [];
      if (quizzes.some((q) => q.id === referenciaId)) return true;
      return levels.some((level) => Array.isArray(level.quizzes) && level.quizzes.some((q) => q.id === referenciaId));
    });
    if (!found) return false;
    const foundData = found as unknown as Record<string, unknown>;
    if (foundData.aulaId && foundData.aulaId !== aulaId) return false;
    if (foundData.schoolId && foundData.schoolId !== schoolId) return false;
    return true;
  }
  const tarea = await prisma.modulo.findFirst({ where: buildReferenciaMatch(referenciaId) });
  if (!tarea) return false;
  const tareaData = tarea as unknown as Record<string, unknown>;
  if (tareaData.aulaId && tareaData.aulaId !== aulaId) return false;
  if (tareaData.schoolId && tareaData.schoolId !== schoolId) return false;
  return true;
};

const ensureUsuarioEnAula = (aula: AulaDoc | null, usuarioId: string, schoolId: string) => {
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
  payload: {
    actor: string;
    motivo: string;
    verificacion: Record<string, unknown>;
  }
) => {
  await prisma.economiaAuditoria.create({
    data: {
      id: generateId(),
      json: JSON.stringify({
        actor: payload.actor,
        timestamp: new Date().toISOString(),
        motivo: payload.motivo,
        verificacion: payload.verificacion
      }),
      createdAt: new Date().toISOString()
    }
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

const parseBoolean = (value: unknown) => {
  if (typeof value !== "string") return false;
  const normalized = value.trim().toLowerCase();
  return normalized === "true" || normalized === "1" || normalized === "si" || normalized === "yes";
};

const buildSaldoKey = (usuarioId: string, moneda: string) => `${usuarioId}::${moneda}`;

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

const normalizeUsuarioKey = (value: unknown) => {
  if (typeof value === "string" && value.trim()) return value.trim();
  if (value && typeof (value as { toString?: () => string }).toString === "function") {
    const candidate = (value as { toString?: () => string }).toString?.();
    return typeof candidate === "string" ? candidate : "";
  }
  return "";
};

const getRequesterId = (req: express.Request) =>
  (req as { user?: { _id?: { toString?: () => string }; id?: string } }).user?._id?.toString?.() ??
  (req as { user?: { _id?: { toString?: () => string }; id?: string } }).user?.id ??
  null;

const getRequesterSchoolId = (req: express.Request) => {
  const user = (req as { user?: { schoolId?: string | null } }).user;
  if (typeof user?.schoolId === "string" && user.schoolId.trim()) return user.schoolId;
  return null;
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
const getMacroAjuste = async () => {
  const config = await getEconomiaConfig();
  const macroIds = Object.values(MACRO_MODULOS);
  const modulos = await prisma.economiaModulo.findMany({ where: { moduloId: { in: macroIds } } });
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

// FIX-TEST4-ADMIN-01 — alias exportable de `getMacroAjuste` para
// usarlo como override de `getAjusteEconomico` en las rutas
// donde el panel admin debe ganar sobre el JSON hardcodeado.
export const getOverrideActivo = getMacroAjuste;

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

const getEconomiaConfig = async () => {
  const item = await prisma.economiaConfig.findFirst({ where: { id: "default" } });
  if (item) {
    const stored = JSON.parse(item.json);
    return { ...defaultConfig(), ...stored };
  }
  return defaultConfig();
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

economia.get("/api/economia/config", requireUser, async (_req, res) => {
  const config = await getEconomiaConfig();
  res.json(config);
});

economia.patch("/api/economia/config", requireAdminAuth, ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    const parsed = ConfigUpdateSchema.parse(req.body ?? {});
    const current = await getEconomiaConfig();
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
    await prisma.economiaConfig.upsert({
      where: { id: "default" },
      update: { json: JSON.stringify(validated), updatedAt: new Date().toISOString() },
      create: { id: "default", json: JSON.stringify(validated), updatedAt: new Date().toISOString() }
    });
    res.json(validated);
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

economia.get("/api/economia/recompensas", async (req, res) => {
  const tipo = req.query.tipo;
  const filtro: Record<string, unknown> =
    typeof tipo === "string" && ["modulo", "tarea", "bonus"].includes(tipo)
      ? { tipo, isDeleted: { not: true } }
      : { isDeleted: { not: true } };
  const ajuste = await getMacroAjuste();
  const items = await prisma.economiaRecompensa.findMany({
    where: filtro as any,
    orderBy: { updatedAt: "desc" }
  });
  const adjustedItems = items.map((item) => ({
    ...item,
    montoAjustado: roundMoney((item.monto as number) * (ajuste.recompensaFactor as number))
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

economia.post(
  "/api/economia/recompensas",
  requirePolicy("economia/mint"),
  ...bodyLimitMB(ENV.MAX_PAGE_MB),
  async (req, res) => {
    try {
      const payload = {
        ...req.body,
        id: req.body?.id ?? generateId(),
        updatedAt: new Date().toISOString()
      };
      const parsed = RecompensaSchema.parse(payload);
      await prisma.economiaRecompensa.create({
        data: {
          ...parsed,
          isDeleted: false,
          deletedAt: null,
          deletedBy: null
        }
      });
      res.status(201).json({ id: parsed.id });
    } catch (e: any) {
      res.status(400).json({ error: e?.message ?? "invalid payload" });
    }
  }
);

economia.put(
  "/api/economia/recompensas/:id",
  requirePolicy("economia/mint"),
  ...bodyLimitMB(ENV.MAX_PAGE_MB),
  async (req, res) => {
    try {
      const parsed = RecompensaUpdateSchema.parse(req.body ?? {});
      const result = await prisma.economiaRecompensa.updateMany({
        where: { id: req.params.id as string, isDeleted: { not: true } },
        data: { ...parsed, updatedAt: new Date().toISOString() }
      });
      if (!result.count) return res.status(404).json({ error: "not found" });
      res.json({ ok: true });
    } catch (e: any) {
      res.status(400).json({ error: e?.message ?? "invalid payload" });
    }
  }
);

economia.patch(
  "/api/economia/recompensas/:id",
  requirePolicy("economia/mint"),
  ...bodyLimitMB(ENV.MAX_PAGE_MB),
  async (req, res) => {
    try {
      const parsed = RecompensaUpdateSchema.parse(req.body ?? {});
      const result = await prisma.economiaRecompensa.updateMany({
        where: { id: req.params.id as string, isDeleted: { not: true } },
        data: { ...parsed, updatedAt: new Date().toISOString() }
      });
      if (!result.count) return res.status(404).json({ error: "not found" });
      res.json({ ok: true });
    } catch (e: any) {
      res.status(400).json({ error: e?.message ?? "invalid payload" });
    }
  }
);

economia.delete(
  "/api/economia/recompensas/:id",
  requireUser,
  requirePolicy("economia/mint"),
  async (req, res) => {
    const now = new Date().toISOString();
    const deletedBy = getRequesterId(req) ?? "desconocido";
    const result = await prisma.economiaRecompensa.updateMany({
      where: { id: req.params.id as string, isDeleted: { not: true } },
      data: {
        isDeleted: true,
        deletedAt: now,
        deletedBy,
        updatedAt: now
      }
    });
    if (!result.count) return res.status(404).json({ error: "not found" });
    res.status(204).send();
  }
);

economia.get("/api/economia/saldos", checkModoAula("economia"), async (req, res) => {
  const usuarioId = normalizeUsuarioId(req.query.usuarioId);
  if (!usuarioId) {
    return res.status(400).json({ error: "usuarioId is required" });
  }
  const usuarioObjectId = buildUsuarioObjectId(usuarioId);
  if (!usuarioObjectId) {
    return res.status(400).json({ error: "usuarioId is required" });
  }
  const saldo = await prisma.economiaSaldo.findFirst({ where: { usuarioId: usuarioObjectId } });
  // FIX-TEST4-ADMIN-01 — leer el override del panel admin
  // primero. Si no hay override (modo "normal"), cae al JSON
  // del calendario económico.
  const macro = await getOverrideActivo();
  const override = macro.modo !== "normal" ? {
    modo: macro.modo,
    precioFactor: macro.precioFactor,
    recompensaFactor: macro.recompensaFactor,
    tasa: macro.tasaAplicada,
  } : null;
  const ajuste = getAjusteEconomico(undefined, override);
  const ajustePayload = {
    tipo: ajuste.tipo,
    recompensaFactor: ajuste.recompensaFactor,
    precioFactor: ajuste.precioFactor,
  };
  if (saldo) return res.json({ ...saldo, usuarioId, ajuste: ajustePayload });
  const config = await getEconomiaConfig();
  res.json({
    usuarioId,
    saldo: 0,
    moneda: config.moneda.codigo,
    updatedAt: new Date().toISOString(),
    ajuste: ajustePayload,
  });
});

economia.patch(
  "/api/economia/saldos/:usuarioId",
  requireAdminAuth,
  requirePolicy("economia/mint"),
  ...bodyLimitMB(ENV.MAX_PAGE_MB),
  async (req, res) => {
    const actorId = getRequesterId(req) ?? "desconocido";
    const usuarioId = normalizeUsuarioId(req.params.usuarioId);
    if (!usuarioId) {
      return res.status(400).json({ error: "usuarioId is required" });
    }
    const usuarioObjectId = buildUsuarioObjectId(usuarioId);
    if (!usuarioObjectId) {
      return res.status(400).json({ error: "usuarioId is required" });
    }
    const parsedResult = SaldoManualUpdateSchema.safeParse(req.body ?? {});
    if (!parsedResult.success) {
      await registerEconomiaAuditoria({
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
      await registerEconomiaAuditoria({
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
    const aula = await prisma.clase.findFirst({ where: { id: parsed.aulaId } }) as unknown as AulaDoc | null;
    if (!assertClassroomWritable(res, aula)) {
      return;
    }
    const aulaCheck = ensureUsuarioEnAula(aula, usuarioId, parsed.schoolId);
    if (!aulaCheck.ok) {
      await registerEconomiaAuditoria({
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
      tipoEvento,
      parsed.referenciaId,
      parsed.aulaId,
      parsed.schoolId
    );
    if (!referenciaValida) {
      await registerEconomiaAuditoria({
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
    const saldoDoc = await prisma.economiaSaldo.findFirst({
      where: { usuarioId: usuarioObjectId }
    });
    const saldoActual = saldoDoc?.saldo ?? 0;
    const nuevoSaldo = parsed.saldo;
    const config = await getEconomiaConfig();
    const moneda =
      parsed.moneda ?? saldoDoc?.moneda ?? config.moneda.codigo;
    const now = new Date().toISOString();
    const existing = await prisma.economiaSaldo.findFirst({ where: { usuarioId: usuarioObjectId } });
    let isNew = false;
    if (existing) {
      await prisma.economiaSaldo.updateMany({
        where: { usuarioId: usuarioObjectId },
        data: { saldo: nuevoSaldo, moneda, updatedAt: now }
      });
    } else {
      await prisma.economiaSaldo.create({
        data: { id: generateId(), usuarioId: usuarioObjectId, saldo: nuevoSaldo, moneda, updatedAt: now }
      });
      isNew = true;
    }
    await registerEconomiaAuditoria({
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
    res.status(isNew ? 201 : 200).json({ ok: true });
  }
);

economia.get("/api/economia/transacciones", async (req, res) => {
  const usuarioId = req.query.usuarioId;
  if (typeof usuarioId !== "string" || !usuarioId.trim()) {
    return res.status(400).json({ error: "usuarioId is required" });
  }
  const limit = clampLimit(req.query.limit as string | undefined);
  const offset = Number(req.query.offset ?? 0);
  const items = await prisma.economiaTransaccion.findMany({
    where: { usuarioId },
    skip: Number.isNaN(offset) || offset < 0 ? 0 : offset,
    take: limit,
    orderBy: { createdAt: "desc" }
  });
  res.json({ items, limit, offset });
});

economia.post(
  "/api/economia/transacciones",
  requirePolicy("economia/mint"),
  ...bodyLimitMB(ENV.MAX_PAGE_MB),
  async (req, res) => {
    try {
      const config = await getEconomiaConfig();
      const limites = config.limites ?? defaultConfig().limites;
      const monedaConfig = config.moneda.codigo;
      const monedaSolicitada = req.body?.moneda ?? monedaConfig;
      if (monedaSolicitada !== monedaConfig) {
        return res.status(400).json({ error: "moneda invalida" });
      }
      const payload = {
        ...req.body,
        id: req.body?.id ?? generateId(),
        moneda: monedaSolicitada,
        createdAt: new Date().toISOString()
      };
      const parsed = TransaccionSchema.parse(payload);
      const actorId =
        (req as { user?: { _id?: { toString?: () => string }; id?: string } }).user?._id?.toString?.() ??
        (req as { user?: { _id?: { toString?: () => string }; id?: string } }).user?.id ??
        "desconocido";
      const usuarioObjectId = buildUsuarioObjectId(parsed.usuarioId);
      if (!usuarioObjectId) {
        return res.status(400).json({ error: "usuarioId is required" });
      }
      const aula = await prisma.clase.findFirst({ where: { id: parsed.aulaId } }) as unknown as AulaDoc | null;
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
        const baseWhere = {
          tipo: "credito",
          createdAt: { gte: rangoDia.desde, lte: rangoDia.hasta },
          ...aulaFiltro
        };
        if (limites.emisionDiaria > 0) {
          const totalEmisionRows = await prisma.economiaTransaccion.findMany({
            where: baseWhere as any,
            select: { monto: true }
          });
          const emisionActual = totalEmisionRows.reduce((acc, row) => acc + (row.monto as number), 0);
          if (emisionActual + parsed.monto > limites.emisionDiaria) {
            return res.status(400).json({ error: "limite de emision diaria excedido" });
          }
        }
        if (limites.recompensaDiaria > 0) {
          const totalUsuarioRows = await prisma.economiaTransaccion.findMany({
            where: { ...baseWhere, usuarioId: parsed.usuarioId } as any,
            select: { monto: true }
          });
          const recompensaActual = totalUsuarioRows.reduce((acc, row) => acc + (row.monto as number), 0);
          if (recompensaActual + parsed.monto > limites.recompensaDiaria) {
            return res.status(400).json({ error: "limite de recompensa diaria excedido" });
          }
        }
      }
      const saldoDoc = await prisma.economiaSaldo.findFirst({
        where: { usuarioId: usuarioObjectId }
      });
      const saldoActual = (saldoDoc?.saldo as number) ?? 0;
      const nuevoSaldo =
        parsed.tipo === "credito" ? saldoActual + parsed.monto : saldoActual - parsed.monto;
      if (nuevoSaldo < 0) {
        return res.status(400).json({ error: "saldo insuficiente" });
      }
      await prisma.economiaTransaccion.create({ data: parsed });
      const now = new Date().toISOString();
      const existingSaldo = await prisma.economiaSaldo.findFirst({ where: { usuarioId: usuarioObjectId } });
      if (existingSaldo) {
        await prisma.economiaSaldo.updateMany({
          where: { usuarioId: usuarioObjectId },
          data: { usuarioId: usuarioObjectId, saldo: nuevoSaldo, moneda: parsed.moneda, updatedAt: now }
        });
      } else {
        await prisma.economiaSaldo.create({
          data: { id: generateId(), usuarioId: usuarioObjectId, saldo: nuevoSaldo, moneda: parsed.moneda, updatedAt: now }
        });
      }
      if (parsed.tipo === "credito") {
        const verificacion = {
          usuarioId: parsed.usuarioId,
          aulaId: parsed.aulaId,
          schoolId: parsed.schoolId,
          referenciaId: parsed.referenciaId,
          tipoEvento: resolveMotivoTipoEducativo(parsed.motivo),
          valido: true
        };
        await registerEconomiaAuditoria({
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
    const config = await getEconomiaConfig();
    const aula = await prisma.clase.findFirst({ where: { id: payload.aulaId } }) as unknown as AulaDoc | null;
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
    const saldoDoc = await prisma.economiaSaldo.findFirst({
      where: { usuarioId: usuarioObjectId }
    });
    const saldoActual = saldoDoc?.saldo ?? 0;
    if (saldoActual < payload.monto) {
      return res.status(400).json({ error: "saldo insuficiente" });
    }
    const rangoDia = buildDayRange();
    const totalHoy = await prisma.economiaIntercambio.count({
      where: {
        // intercambios are JSON blobs; use raw query approach via findMany+count
        id: { not: "" }
      }
    });
    // For JSON blob models, count by parsing; re-implemented below using findMany
    const todayIntercambiosRaw = await prisma.economiaIntercambio.findMany({
      where: {}
    });
    const todayIntercambios = todayIntercambiosRaw
      .map((row) => {
        try { return JSON.parse(row.json); } catch { return null; }
      })
      .filter((doc): doc is IntercambioDoc => doc !== null);
    const totalHoyCount = todayIntercambios.filter(
      (doc) => doc.creadorId === payload.creadorId &&
        doc.createdAt && doc.createdAt >= rangoDia.desde && doc.createdAt <= rangoDia.hasta
    ).length;
    if (totalHoyCount >= INTERCAMBIO_LIMITS.maxDiario) {
      return res.status(429).json({ error: "limite diario de intercambios excedido" });
    }
    const creadorIntercambios = todayIntercambios
      .filter((doc) => doc.creadorId === payload.creadorId)
      .sort((a, b) => (b.createdAt ?? "").localeCompare(a.createdAt ?? ""));
    const ultimo = creadorIntercambios[0] ?? null;
    if (ultimo?.createdAt) {
      const diffMs = Date.now() - new Date(ultimo.createdAt).getTime();
      if (diffMs < INTERCAMBIO_LIMITS.cooldownMinutos * 60 * 1000) {
        return res.status(429).json({ error: "cooldown activo para crear intercambios" });
      }
    }
    const inicioCancelaciones = new Date();
    inicioCancelaciones.setDate(inicioCancelaciones.getDate() - INTERCAMBIO_LIMITS.ventanaCancelacionesDias);
    const ventanaStr = inicioCancelaciones.toISOString();
    const allIntercambiosRaw = await prisma.economiaIntercambio.findMany({ where: {} });
    const allIntercambios = allIntercambiosRaw
      .map((row) => { try { return JSON.parse(row.json); } catch { return null; } })
      .filter((doc): doc is IntercambioDoc => doc !== null);
    const ventanaIntercambios = allIntercambios.filter(
      (doc) => doc.creadorId === payload.creadorId && doc.createdAt && doc.createdAt >= ventanaStr
    );
    const totalVentana = ventanaIntercambios.length;
    const canceladosVentana = ventanaIntercambios.filter((doc) => doc.estado === "cancelado").length;
    const score = buildIntercambioScore({
      diarios: totalHoyCount,
      cancelRatio: totalVentana ? canceladosVentana / totalVentana : 0,
      monto: payload.monto
    });
    const moderacionEstado = score >= INTERCAMBIO_LIMITS.scoreThreshold ? "pendiente" : "aprobado";
    const now = new Date().toISOString();
    const intercambio = IntercambioSchema.parse({
      id: generateId(),
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
    await prisma.economiaIntercambio.create({
      data: { id: intercambio.id, json: JSON.stringify(intercambio), createdAt: now }
    });
    res.status(201).json({ id: intercambio.id, moderacion: intercambio.moderacion });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

economia.post("/api/economia/intercambios/:id/aceptar", requirePolicy("economia/mint"), async (req, res) => {
  try {
    const intercambioRow = await prisma.economiaIntercambio.findFirst({ where: { id: req.params.id as string } });
    if (!intercambioRow) return res.status(404).json({ error: "intercambio not found" });
    const intercambio: IntercambioDoc = JSON.parse(intercambioRow.json);
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
    const aula = await prisma.clase.findFirst({ where: { id: intercambio.aulaId } }) as unknown as AulaDoc | null;
    if (!assertClassroomWritable(res, aula)) {
      return;
    }
    const creadorCheck = ensureUsuarioEnAula(aula, intercambio.creadorId ?? "", intercambio.schoolId ?? "");
    if (!creadorCheck.ok) {
      return res.status(creadorCheck.status).json({ error: creadorCheck.error });
    }
    const receptorCheck = ensureUsuarioEnAula(aula, intercambio.receptorId ?? "", intercambio.schoolId ?? "");
    if (!receptorCheck.ok) {
      return res.status(receptorCheck.status).json({ error: receptorCheck.error });
    }
    const creadorObjectId = buildUsuarioObjectId(intercambio.creadorId ?? "");
    const receptorObjectId = buildUsuarioObjectId(intercambio.receptorId ?? "");
    if (!creadorObjectId || !receptorObjectId) {
      return res.status(400).json({ error: "usuarioId is required" });
    }
    const saldoCreador = await prisma.economiaSaldo.findFirst({
      where: { usuarioId: creadorObjectId }
    });
    const saldoActual = saldoCreador?.saldo ?? 0;
    const intercambioMonto = intercambio.monto ?? 0;
    if (saldoActual < intercambioMonto) {
      return res.status(400).json({ error: "saldo insuficiente en creador" });
    }
    const config = await getEconomiaConfig();
    const now = new Date().toISOString();
    const transaccionDebito = TransaccionSchema.parse({
      id: generateId(),
      usuarioId: intercambio.creadorId,
      aulaId: intercambio.aulaId,
      schoolId: intercambio.schoolId,
      tipo: "debito",
      monto: intercambioMonto,
      moneda: intercambio.moneda ?? config.moneda.codigo,
      motivo: `intercambio:${intercambio.id}:debito`,
      referenciaId: intercambio.id,
      createdAt: now
    });
    const transaccionCredito = TransaccionSchema.parse({
      id: generateId(),
      usuarioId: intercambio.receptorId,
      aulaId: intercambio.aulaId,
      schoolId: intercambio.schoolId,
      tipo: "credito",
      monto: intercambioMonto,
      moneda: intercambio.moneda ?? config.moneda.codigo,
      motivo: `intercambio:${intercambio.id}:credito`,
      referenciaId: intercambio.id,
      createdAt: now
    });
    await prisma.economiaTransaccion.create({ data: transaccionDebito });
    await prisma.economiaTransaccion.create({ data: transaccionCredito });
    const existingCreador = await prisma.economiaSaldo.findFirst({ where: { usuarioId: creadorObjectId } });
    if (existingCreador) {
      await prisma.economiaSaldo.updateMany({
        where: { usuarioId: creadorObjectId },
        data: { usuarioId: creadorObjectId, saldo: saldoActual - intercambioMonto, moneda: transaccionDebito.moneda, updatedAt: now }
      });
    } else {
      await prisma.economiaSaldo.create({
        data: { id: generateId(), usuarioId: creadorObjectId, saldo: saldoActual - intercambioMonto, moneda: transaccionDebito.moneda, updatedAt: now }
      });
    }
    const saldoReceptorDoc = await prisma.economiaSaldo.findFirst({ where: { usuarioId: receptorObjectId } });
    const existingReceptor = await prisma.economiaSaldo.findFirst({ where: { usuarioId: receptorObjectId } });
    if (existingReceptor) {
      await prisma.economiaSaldo.updateMany({
        where: { usuarioId: receptorObjectId },
        data: { usuarioId: receptorObjectId, saldo: (saldoReceptorDoc?.saldo ?? 0) + intercambioMonto, moneda: transaccionCredito.moneda, updatedAt: now }
      });
    } else {
      await prisma.economiaSaldo.create({
        data: { id: generateId(), usuarioId: receptorObjectId, saldo: (saldoReceptorDoc?.saldo ?? 0) + intercambioMonto, moneda: transaccionCredito.moneda, updatedAt: now }
      });
    }
    const updatedIntercambio = { ...intercambio, estado: "aceptado", updatedAt: now, resolvedAt: now };
    await prisma.economiaIntercambio.updateMany({
      where: { id: intercambio.id },
      data: { json: JSON.stringify(updatedIntercambio) }
    });
    res.json({ ok: true });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

economia.post("/api/economia/intercambios/:id/cancelar", async (req, res) => {
  try {
    const intercambioRow = await prisma.economiaIntercambio.findFirst({ where: { id: req.params.id as string } });
    if (!intercambioRow) return res.status(404).json({ error: "intercambio not found" });
    const intercambio: IntercambioDoc = JSON.parse(intercambioRow.json);
    if (intercambio.estado !== "pendiente") {
      return res.status(400).json({ error: "intercambio no disponible" });
    }
    const requesterId = getRequesterId(req);
    if (!requesterId || (requesterId !== intercambio.creadorId && requesterId !== intercambio.receptorId)) {
      return res.status(403).json({ error: "no autorizado a cancelar" });
    }
    const aula = await prisma.clase.findFirst({ where: { id: intercambio.aulaId } }) as unknown as AulaDoc | null;
    if (aula && !assertClassroomWritable(res, aula)) {
      return;
    }
    const now = new Date().toISOString();
    const updatedIntercambio = { ...intercambio, estado: "cancelado", updatedAt: now, resolvedAt: now };
    await prisma.economiaIntercambio.updateMany({
      where: { id: intercambio.id },
      data: { json: JSON.stringify(updatedIntercambio) }
    });
    res.json({ ok: true });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

economia.post(
  "/api/economia/intercambios/:id/moderar",
  requirePolicy("economia/moderate-intercambios"),
  ...bodyLimitMB(ENV.MAX_PAGE_MB),
  async (req, res) => {
    try {
      const parsed = z
        .object({
          estado: z.enum(["aprobado", "bloqueado"]),
          motivo: z.string().min(1).optional()
        })
        .parse(req.body ?? {});
      const intercambioRow = await prisma.economiaIntercambio.findFirst({ where: { id: req.params.id as string } });
      if (!intercambioRow) return res.status(404).json({ error: "intercambio not found" });
      const intercambio: IntercambioDoc = JSON.parse(intercambioRow.json);
      const aula = await prisma.clase.findFirst({ where: { id: intercambio.aulaId } }) as unknown as AulaDoc | null;
      if (aula && !assertClassroomWritable(res, aula)) {
        return;
      }
      const authorization = res.locals.authorization as { data?: { isAdmin?: boolean } } | undefined;
      const isAdmin = authorization?.data?.isAdmin === true;
      if (!isAdmin) {
        const requesterSchoolId = getRequesterSchoolId(req);
        if (!requesterSchoolId || requesterSchoolId !== intercambio.schoolId) {
          return res.status(403).json({ error: "forbidden" });
        }
      }
      const requesterId = getRequesterId(req) ?? "desconocido";
      const now = new Date().toISOString();
      const updatedIntercambio: IntercambioDoc = {
        ...intercambio,
        moderacion: {
          estado: parsed.estado,
          moderadorId: requesterId,
          motivo: parsed.motivo,
          updatedAt: now
        } as any,
        updatedAt: now
      };
      if (parsed.estado === "bloqueado") {
        updatedIntercambio.estado = "bloqueado";
        (updatedIntercambio as any).resolvedAt = now;
      }
      await prisma.economiaIntercambio.updateMany({
        where: { id: req.params.id as string },
        data: { json: JSON.stringify(updatedIntercambio) }
      });
      res.json({ ok: true });
    } catch (e: any) {
      res.status(400).json({ error: e?.message ?? "invalid payload" });
    }
  }
);

economia.post(
  "/api/economia/compras",
  ...bodyLimitMB(ENV.MAX_PAGE_MB),
  requirePolicy("economia/compras"),
  async (req, res) => {
    try {
      const payload = CompraCreateSchema.parse(req.body ?? {});
      const config = await getEconomiaConfig();
      const aula = await prisma.clase.findFirst({ where: { id: payload.aulaId } }) as unknown as AulaDoc | null;
      if (!assertClassroomWritable(res, aula)) {
        return;
      }
      const aulaCheck = ensureUsuarioEnAula(aula, payload.usuarioId, payload.schoolId);
      if (!aulaCheck.ok) {
        return res.status(aulaCheck.status).json({ error: aulaCheck.error });
      }
      const usuarioObjectId = buildUsuarioObjectId(payload.usuarioId);
      if (!usuarioObjectId) {
        return res.status(400).json({ error: "usuarioId is required" });
      }
      const saldoDoc = await prisma.economiaSaldo.findFirst({
        where: { usuarioId: usuarioObjectId }
      });
      const saldoActual = saldoDoc?.saldo ?? 0;
      if (saldoActual < payload.monto) {
        return res.status(400).json({ error: "saldo insuficiente" });
      }
      const now = new Date().toISOString();
      const compra = CompraSchema.parse({
        id: generateId(),
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
        id: generateId(),
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
      await prisma.economiaCompra.create({
        data: { id: compra.id, json: JSON.stringify(compra), createdAt: now }
      });
      await prisma.economiaTransaccion.create({ data: transaccion });
      const existingSaldo = await prisma.economiaSaldo.findFirst({ where: { usuarioId: usuarioObjectId } });
      if (existingSaldo) {
        await prisma.economiaSaldo.updateMany({
          where: { usuarioId: usuarioObjectId },
          data: { usuarioId: usuarioObjectId, saldo: saldoActual - payload.monto, moneda: compra.moneda, updatedAt: now }
        });
      } else {
        await prisma.economiaSaldo.create({
          data: { id: generateId(), usuarioId: usuarioObjectId, saldo: saldoActual - payload.monto, moneda: compra.moneda, updatedAt: now }
        });
      }
      res.status(201).json({ id: compra.id, saldo: saldoActual - payload.monto });
    } catch (e: any) {
      res.status(400).json({ error: e?.message ?? "invalid payload" });
    }
  }
);

economia.get("/api/economia/modulos", async (req, res) => {
  const moduloId = req.query.moduloId;
  const filtro = typeof moduloId === "string" && moduloId.trim() ? { moduloId } : {};
  const items = await prisma.economiaModulo.findMany({ where: filtro });
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
    await prisma.economiaModulo.upsert({
      where: { moduloId: req.params.moduloId },
      update: { activo: validated.activo, updatedAt: validated.updatedAt },
      create: { moduloId: validated.moduloId, activo: validated.activo, updatedAt: validated.updatedAt }
    });
    res.json({ ok: true });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

economia.get("/api/economia/examenes", async (req, res) => {
  const estado = req.query.estado;
  const ajuste = await getMacroAjuste();
  const allRows = await prisma.economiaExamen.findMany({ orderBy: { createdAt: "desc" } });
  const allDocs = allRows.map((row) => { try { return JSON.parse(row.json); } catch { return null; } }).filter(Boolean) as ExamenDoc[];
  const items = typeof estado === "string" && estado.trim()
    ? allDocs.filter((doc) => doc.estado === estado)
    : allDocs;
  const adjustedItems = items.map((item) => ({
    ...item,
    precioPromedioAjustado:
      item.precioPromedio != null
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
      id: req.body?.id ?? generateId(),
      aulaId: req.body?.aulaId,
      estado: "anunciado",
      subastaActiva: true,
      maxCompra: req.body?.maxCompra ?? 2,
      impuestoTasa: req.body?.impuestoTasa ?? 0.1,
      updatedAt: new Date().toISOString()
    };
    const parsed = ExamenEconomiaSchema.parse(payload);
    if (parsed.aulaId) {
      const aula = await prisma.clase.findFirst({ where: { id: parsed.aulaId } }) as unknown as AulaDoc | null;
      if (aula && !assertClassroomWritable(res, aula)) {
        return;
      }
    }
    await prisma.economiaExamen.create({
      data: { id: parsed.id, json: JSON.stringify(parsed), createdAt: new Date().toISOString() }
    });
    res.status(201).json({ id: parsed.id });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

economia.patch("/api/economia/examenes/:id", ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    const parsed = ExamenEconomiaUpdateSchema.parse(req.body ?? {});
    const existingRow = await prisma.economiaExamen.findFirst({ where: { id: req.params.id as string } });
    if (!existingRow) return res.status(404).json({ error: "not found" });
    const existing: ExamenDoc = JSON.parse(existingRow.json);
    if (existing.aulaId) {
      const aula = await prisma.clase.findFirst({ where: { id: existing.aulaId } }) as unknown as AulaDoc | null;
      if (aula && !assertClassroomWritable(res, aula)) {
        return;
      }
    }
    const updatedDoc = { ...existing, ...parsed, updatedAt: new Date().toISOString() };
    await prisma.economiaExamen.updateMany({
      where: { id: req.params.id as string },
      data: { json: JSON.stringify(updatedDoc) }
    });
    res.json({ ok: true });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

economia.get("/api/economia/examenes/:id/pujas", async (req, res) => {
  const usuarioId = req.query.usuarioId;
  const allRows = await prisma.economiaExamenPuja.findMany({ orderBy: { createdAt: "desc" } });
  const allDocs = allRows.map((row) => { try { return JSON.parse(row.json); } catch { return null; } }).filter(Boolean) as PujaDoc[];
  const items = allDocs.filter((doc) => {
    if (doc.examenId !== req.params.id) return false;
    if (typeof usuarioId === "string" && usuarioId.trim() && doc.usuarioId !== usuarioId) return false;
    return true;
  });
  res.json({ items });
});

economia.post("/api/economia/examenes/:id/pujas", ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    const parsed = PujaExamenCreateSchema.parse({ ...req.body, examenId: req.params.id });
    const examenRow = await prisma.economiaExamen.findFirst({ where: { id: req.params.id as string } });
    if (!examenRow) return res.status(404).json({ error: "examen not found" });
    const examen: ExamenDoc = JSON.parse(examenRow.json);
    const aulaId = parsed.aulaId ?? examen.aulaId;
    if (aulaId) {
      const aula = await prisma.clase.findFirst({ where: { id: aulaId } }) as unknown as AulaDoc | null;
      if (aula && !assertClassroomWritable(res, aula)) {
        return;
      }
    }
    if (!examen.subastaActiva || examen.estado !== "anunciado") {
      return res.status(400).json({ error: "subasta inactiva" });
    }
    if (new Date(examen.fechaExamen ?? "") <= new Date()) {
      return res.status(400).json({ error: "examen vencido" });
    }
    const allPujaRows = await prisma.economiaExamenPuja.findMany({ where: {} });
    const allPujaDocs = allPujaRows.map((row) => { try { return JSON.parse(row.json); } catch { return null; } }).filter(Boolean) as PujaDoc[];
    const totalActual = allPujaDocs
      .filter((doc) => doc.examenId === req.params.id && doc.usuarioId === parsed.usuarioId && (doc.estado === "pendiente" || doc.estado === "aceptada"))
      .reduce((acc, doc) => acc + (doc.puntos ?? 0), 0);
    if (totalActual + parsed.puntos > (examen.maxCompra ?? Infinity)) {
      return res.status(400).json({ error: "limite de compra excedido" });
    }
    const usuarioObjectId = buildUsuarioObjectId(parsed.usuarioId);
    if (!usuarioObjectId) {
      return res.status(400).json({ error: "usuarioId is required" });
    }
    const saldoDoc = await prisma.economiaSaldo.findFirst({
      where: { usuarioId: usuarioObjectId }
    });
    const saldoActual = saldoDoc?.saldo ?? 0;
    const costoTotal = parsed.puntos * parsed.montoPorPunto;
    if (saldoActual < costoTotal) {
      return res.status(400).json({ error: "saldo insuficiente" });
    }
    const payload = {
      ...parsed,
      id: generateId(),
      aulaId: parsed.aulaId ?? examen.aulaId,
      estado: "pendiente",
      createdAt: new Date().toISOString()
    };
    const validated = PujaExamenSchema.parse(payload);
    await prisma.economiaExamenPuja.create({
      data: { id: validated.id, examenId: validated.examenId as string, json: JSON.stringify(validated), createdAt: validated.createdAt as string }
    });
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
  const allRows = await prisma.economiaExamenPunto.findMany({ where: {} });
  const puntos = allRows
    .map((row) => { try { return JSON.parse(row.json); } catch { return null; } })
    .filter(Boolean)
    .find((doc: any) => doc.usuarioId === usuarioId);
  if (puntos) return res.json(puntos);
  res.json({
    usuarioId,
    puntos: 0,
    updatedAt: new Date().toISOString()
  });
});

economia.post("/api/economia/examenes/:id/cerrar", requirePolicy("economia/mint"), async (req, res) => {
  try {
    const examenRow = await prisma.economiaExamen.findFirst({ where: { id: req.params.id as string } });
    if (!examenRow) return res.status(404).json({ error: "examen not found" });
    const examen: ExamenDoc = JSON.parse(examenRow.json);
    if (!examen.aulaId) return res.status(400).json({ error: "aulaId is required" });
    if (examen.estado === "cerrado") {
      return res.status(200).json({ ok: true, message: "examen ya cerrado" });
    }
    const config = await getEconomiaConfig();
    const aula = await prisma.clase.findFirst({ where: { id: examen.aulaId } }) as unknown as AulaDoc | null;
    if (aula && !assertClassroomWritable(res, aula)) {
      return;
    }
    const schoolId = resolveAulaSchoolId(aula ?? undefined);
    if (!schoolId) return res.status(400).json({ error: "classroom schoolId missing" });
    const actorId =
      (req as { user?: { _id?: { toString?: () => string }; id?: string } }).user?._id?.toString?.() ??
      (req as { user?: { _id?: { toString?: () => string }; id?: string } }).user?.id ??
      "desconocido";
    const now = new Date().toISOString();
    const allPujaRows = await prisma.economiaExamenPuja.findMany({ where: {} });
    const pujas = allPujaRows
      .map((row) => { try { return JSON.parse(row.json); } catch { return null; } })
      .filter((doc): doc is PujaDoc => doc !== null && doc.examenId === req.params.id && doc.estado === "pendiente");
    const rankingPuntos = new Map<string, number>();
    let precioTotal = 0;
    let precioCount = 0;

    // ── batch-fetch to avoid N+1 per puja ────────────────────────────────────
    const batchUsuarioIds = pujas
      .map(p => buildUsuarioObjectId(p.usuarioId ?? ""))
      .filter((id): id is string => Boolean(id));
    const [batchSaldoRows, batchPuntosRows] = await Promise.all([
      prisma.economiaSaldo.findMany({ where: { usuarioId: { in: batchUsuarioIds } } }),
      prisma.economiaExamenPunto.findMany({ where: {} }),
    ]);
    // saldo map: usuarioId → { saldo, exists } — kept fresh inside the loop
    const saldoByUser = new Map(
      batchSaldoRows.map(s => [s.usuarioId, { saldo: s.saldo as number, exists: true as boolean }])
    );
    // puntos map: usuarioId → DB row (json blob updated in-memory as we go)
    const puntosRowByUser = new Map<string, (typeof batchPuntosRows)[0]>();
    for (const row of batchPuntosRows) {
      try { const doc = JSON.parse(row.json) as { usuarioId?: string }; if (doc.usuarioId) puntosRowByUser.set(doc.usuarioId, row); } catch { /* skip */ }
    }
    // ─────────────────────────────────────────────────────────────────────────

    for (const puja of pujas) {
      const usuarioObjectId = buildUsuarioObjectId(puja.usuarioId ?? "");
      if (!usuarioObjectId) {
        return res.status(400).json({ error: "usuarioId is required" });
      }
      const userSaldo = saldoByUser.get(usuarioObjectId) ?? { saldo: 0, exists: false };
      const saldoActual = userSaldo.saldo;
      const costoTotal = (puja.puntos ?? 0) * (puja.montoPorPunto ?? 0);
      if (saldoActual < costoTotal) {
        await prisma.economiaExamenPuja.updateMany({
          where: { id: puja.id },
          data: { json: JSON.stringify({ ...puja, estado: "rechazada", resolvedAt: now }) }
        });
        continue;
      }
      const nuevoSaldo = saldoActual - costoTotal;
      const transaccion = TransaccionSchema.parse({
        id: generateId(),
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
      await prisma.economiaTransaccion.create({ data: transaccion });
      // Upsert saldo — existence already known from batch fetch, no re-query needed
      if (userSaldo.exists) {
        await prisma.economiaSaldo.updateMany({
          where: { usuarioId: usuarioObjectId },
          data: { usuarioId: usuarioObjectId, saldo: nuevoSaldo, moneda: transaccion.moneda, updatedAt: now }
        });
      } else {
        await prisma.economiaSaldo.create({
          data: { id: generateId(), usuarioId: usuarioObjectId, saldo: nuevoSaldo, moneda: transaccion.moneda, updatedAt: now }
        });
      }
      // Keep in-memory balance fresh for any subsequent puja from the same user
      saldoByUser.set(usuarioObjectId, { saldo: nuevoSaldo, exists: true });
      const puntosNetos = Math.max(0, (puja.puntos ?? 0) * (1 - (examen.impuestoTasa ?? 0)));
      PuntosExamenSchema.parse({
        usuarioId: puja.usuarioId,
        puntos: puntosNetos,
        updatedAt: now
      });
      // Update puntos using pre-fetched map — no full-table scan per iteration
      const puntosRow = puntosRowByUser.get(puja.usuarioId ?? "");
      if (puntosRow) {
        const puntosDoc = JSON.parse(puntosRow.json);
        const updatedPuntos = { ...puntosDoc, puntos: (puntosDoc.puntos ?? 0) + puntosNetos, updatedAt: now };
        await prisma.economiaExamenPunto.updateMany({
          where: { id: puntosRow.id },
          data: { json: JSON.stringify(updatedPuntos) }
        });
        puntosRowByUser.set(puja.usuarioId ?? "", { ...puntosRow, json: JSON.stringify(updatedPuntos) });
      } else {
        const newJson = JSON.stringify({ usuarioId: puja.usuarioId, puntos: puntosNetos, updatedAt: now });
        const newRow = { id: generateId(), examenId: examen.id as string, json: newJson, updatedAt: now as string };
        await prisma.economiaExamenPunto.create({ data: newRow });
        puntosRowByUser.set(puja.usuarioId ?? "", newRow);
      }
      rankingPuntos.set(puja.usuarioId ?? "", (rankingPuntos.get(puja.usuarioId ?? "") ?? 0) + puntosNetos);
      precioTotal += (puja.montoPorPunto ?? 0);
      precioCount += 1;
      // Update puja state — no re-fetch needed, updateMany targets by id directly
      await prisma.economiaExamenPuja.updateMany({
        where: { id: puja.id },
        data: { json: JSON.stringify({ ...puja, estado: "aceptada", resolvedAt: now }) }
      });
    }
    const precioPromedioActual = precioCount ? precioTotal / precioCount : 0;
    const preciosPreviosRows = await prisma.economiaExamen.findMany({ orderBy: { createdAt: "desc" }, take: 5 });
    const preciosPrevios = preciosPreviosRows
      .map((row) => { try { return JSON.parse(row.json); } catch { return null; } })
      .filter((doc): doc is ExamenDoc => doc !== null && doc.estado === "cerrado" && doc.id !== req.params.id)
      .slice(0, 4);
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
        id: generateId(),
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
      await prisma.economiaTransaccion.create({ data: transaccion });
      const usuarioObjectId = buildUsuarioObjectId(ganador.usuarioId);
      if (!usuarioObjectId) {
        return res.status(400).json({ error: "usuarioId is required" });
      }
      // Reuse saldoByUser populated above — ranking winners were already processed in the pujas loop
      const rankingSaldo = saldoByUser.get(usuarioObjectId) ?? { saldo: 0, exists: false };
      const saldoActual = rankingSaldo.saldo;
      if (rankingSaldo.exists) {
        await prisma.economiaSaldo.updateMany({
          where: { usuarioId: usuarioObjectId },
          data: { usuarioId: usuarioObjectId, saldo: saldoActual + premio, moneda: transaccion.moneda, updatedAt: now }
        });
      } else {
        await prisma.economiaSaldo.create({
          data: { id: generateId(), usuarioId: usuarioObjectId, saldo: saldoActual + premio, moneda: transaccion.moneda, updatedAt: now }
        });
      }
      saldoByUser.set(usuarioObjectId, { saldo: saldoActual + premio, exists: true });
      await registerEconomiaAuditoria({
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
    const updatedExamen = { ...examen, estado: "cerrado", subastaActiva: false, precioPromedio: precioPromedioActual, updatedAt: now };
    await prisma.economiaExamen.updateMany({
      where: { id: req.params.id as string },
      data: { json: JSON.stringify(updatedExamen) }
    });
    res.json({ ok: true });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

economia.get("/api/economia/eventos", requireUser, async (_req, res) => {
  const items = await prisma.economiaEvento.findMany({
    where: { isDeleted: { not: true } },
    orderBy: { updatedAt: "desc" }
  });
  res.json({ items });
});

economia.post("/api/economia/eventos", ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    const payload = {
      ...req.body,
      id: req.body?.id ?? generateId(),
      updatedAt: new Date().toISOString()
    };
    const parsed = EventoEconomicoSchema.parse(payload);
    await prisma.economiaEvento.create({
      data: {
        ...parsed,
        isDeleted: false,
        deletedAt: null,
        deletedBy: null
      }
    });
    res.status(201).json({ id: parsed.id });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

economia.patch("/api/economia/eventos/:id", ...bodyLimitMB(ENV.MAX_PAGE_MB), async (req, res) => {
  try {
    const parsed = EventoEconomicoUpdateSchema.parse(req.body ?? {});
    const result = await prisma.economiaEvento.updateMany({
      where: { id: req.params.id as string, isDeleted: { not: true } },
      data: { ...parsed, updatedAt: new Date().toISOString() }
    });
    if (!result.count) return res.status(404).json({ error: "not found" });
    res.json({ ok: true });
  } catch (e: any) {
    res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

economia.delete("/api/economia/eventos/:id", requireAdminAuth, async (req, res) => {
  const now = new Date().toISOString();
  const deletedBy = getRequesterId(req) ?? "desconocido";
  const result = await prisma.economiaEvento.updateMany({
    where: { id: req.params.id as string, isDeleted: { not: true } },
    data: {
      isDeleted: true,
      deletedAt: now,
      deletedBy,
      updatedAt: now
    }
  });
  if (!result.count) return res.status(404).json({ error: "not found" });
  res.status(204).send();
});

economia.get("/api/admin/economia/recompensas", requireAdminAuth, async (req, res) => {
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
    filtro.isDeleted = { not: true };
  }
  const items = await prisma.economiaRecompensa.findMany({
    where: filtro as any,
    orderBy: { updatedAt: "desc" }
  });
  res.json({ items });
});

economia.delete("/api/admin/economia/recompensas/:id", requireAdminAuth, async (req, res) => {
  const now = new Date().toISOString();
  const deletedBy = getRequesterId(req) ?? "desconocido";
  const result = await prisma.economiaRecompensa.updateMany({
    where: { id: req.params.id as string, isDeleted: { not: true } },
    data: {
      isDeleted: true,
      deletedAt: now,
      deletedBy,
      updatedAt: now
    }
  });
  if (!result.count) return res.status(404).json({ error: "not found" });
  res.status(204).send();
});

economia.get("/api/admin/economia/eventos", requireAdminAuth, async (_req, res) => {
  const includeDeleted = _req.query.includeDeleted === "true";
  const onlyDeleted = _req.query.onlyDeleted === "true";
  const filtro: Record<string, unknown> = {};
  if (onlyDeleted) {
    filtro.isDeleted = true;
  } else if (!includeDeleted) {
    filtro.isDeleted = { not: true };
  }
  const items = await prisma.economiaEvento.findMany({
    where: filtro as any,
    orderBy: { updatedAt: "desc" }
  });
  res.json({ items });
});

economia.delete("/api/admin/economia/eventos/:id", requireAdminAuth, async (req, res) => {
  const now = new Date().toISOString();
  const deletedBy = getRequesterId(req) ?? "desconocido";
  const result = await prisma.economiaEvento.updateMany({
    where: { id: req.params.id as string, isDeleted: { not: true } },
    data: {
      isDeleted: true,
      deletedAt: now,
      deletedBy,
      updatedAt: now
    }
  });
  if (!result.count) return res.status(404).json({ error: "not found" });
  res.status(204).send();
});

economia.get("/api/admin/economia/validacion", requireAdminAuth, async (req, res) => {
  const applyDefaults = parseBoolean(req.query.applyDefaults);
  const now = new Date().toISOString();
  const inconsistencias: Array<Record<string, unknown>> = [];
  const defaultsApplied = {
    billeteras: 0,
    economia_saldos: 0
  };

  const billeteraRows = await prisma.billetera.findMany({ where: {} });
  const billeteras = billeteraRows.map((row) => { try { return { _id: row.id, ...JSON.parse(row.json) }; } catch { return null; } }).filter(Boolean) as Array<Record<string, unknown>>;
  const billeteraIds = billeteraRows.map((row) => row.id).filter(Boolean);
  const billeteraSet = new Set(billeteraIds);

  if (applyDefaults) {
    const missingUpdated = billeteraRows.filter((row) => {
      try { const doc = JSON.parse(row.json); return !doc.updatedAt; } catch { return false; }
    });
    if (missingUpdated.length) {
      for (const row of missingUpdated) {
        try {
          const doc = JSON.parse(row.json);
          await prisma.billetera.updateMany({
            where: { id: row.id },
            data: { json: JSON.stringify({ ...doc, updatedAt: now }), updatedAt: now }
          });
        } catch { /* skip */ }
      }
      defaultsApplied.billeteras = missingUpdated.length;
    }
  }

  // movimientos_billetera is not in Prisma schema — skip this validation section
  const movimientos: Array<Record<string, unknown>> = [];
  const totalPorBilletera = new Map<string, number>();

  for (const movimiento of movimientos) {
    const billeteraId = String(movimiento.billeteraId ?? "");
    const monto = typeof movimiento.monto === "number" ? movimiento.monto : 0;
    const factor = movimiento.tipo === "debito" ? -1 : 1;
    if (!billeteraId || !billeteraSet.has(billeteraId)) {
      inconsistencias.push({
        tipo: "movimiento_billetera_sin_billetera",
        movimientoId: String(movimiento._id ?? null),
        billeteraId: billeteraId || null,
        monto,
        fecha: movimiento.fecha ?? null
      });
      continue;
    }
    totalPorBilletera.set(
      billeteraId,
      (totalPorBilletera.get(billeteraId) ?? 0) + factor * monto
    );
  }

  for (const billetera of billeteras) {
    const billeteraId = String(billetera._id ?? "");
    if (!billeteraId) continue;
    const saldo = typeof billetera.saldo === "number" ? billetera.saldo : 0;
    const total = totalPorBilletera.get(billeteraId) ?? 0;
    if (roundMoney(saldo) !== roundMoney(total)) {
      inconsistencias.push({
        tipo: "billetera_saldo_inconsistente",
        billeteraId,
        usuarioId: billetera.usuarioId ? String(billetera.usuarioId) : null,
        moneda: billetera.moneda ?? null,
        saldo: roundMoney(saldo),
        totalMovimientos: roundMoney(total)
      });
    }
  }

  const economiaSaldosRows = await prisma.economiaSaldo.findMany({ where: {} });

  if (applyDefaults) {
    const missingUpdated = economiaSaldosRows.filter((row) => !row.updatedAt);
    if (missingUpdated.length) {
      for (const row of missingUpdated) {
        await prisma.economiaSaldo.updateMany({
          where: { id: row.id },
          data: { updatedAt: now }
        });
      }
      defaultsApplied.economia_saldos = missingUpdated.length;
    }
  }

  const transaccionesRows = await prisma.economiaTransaccion.findMany({ where: {} });
  const totalPorSaldo = new Map<string, number>();

  for (const transaccion of transaccionesRows) {
    const usuarioId = normalizeUsuarioKey(transaccion.usuarioId);
    if (!usuarioId) continue;
    const moneda =
      typeof transaccion.moneda === "string" && transaccion.moneda.trim()
        ? transaccion.moneda
        : "desconocida";
    const key = buildSaldoKey(usuarioId, moneda);
    const monto = typeof transaccion.monto === "number" ? transaccion.monto : 0;
    const factor = transaccion.tipo === "debito" ? -1 : 1;
    totalPorSaldo.set(key, (totalPorSaldo.get(key) ?? 0) + factor * monto);
  }

  for (const saldo of economiaSaldosRows) {
    const usuarioId = normalizeUsuarioKey(saldo.usuarioId);
    if (!usuarioId) continue;
    const moneda =
      typeof saldo.moneda === "string" && saldo.moneda.trim() ? saldo.moneda : "desconocida";
    const key = buildSaldoKey(usuarioId, moneda);
    const total = totalPorSaldo.get(key) ?? 0;
    const saldoActual = typeof saldo.saldo === "number" ? saldo.saldo : 0;
    if (roundMoney(saldoActual) !== roundMoney(total)) {
      inconsistencias.push({
        tipo: "economia_saldo_inconsistente",
        usuarioId,
        moneda,
        saldo: roundMoney(saldoActual),
        totalTransacciones: roundMoney(total)
      });
    }
  }

  res.json({
    generadoEn: now,
    applyDefaults,
    resumen: {
      billeteras: billeteras.length,
      movimientos: movimientos.length,
      economiaSaldos: economiaSaldosRows.length,
      economiaTransacciones: transaccionesRows.length
    },
    defaultsApplied,
    totalInconsistencias: inconsistencias.length,
    inconsistencias
  });
});

economia.get("/api/economia/riesgo", async (req, res) => {
  const aulaId = req.query.aulaId;
  if (typeof aulaId !== "string" || !aulaId.trim()) {
    return res.status(400).json({ error: "aulaId is required" });
  }
  const item = await prisma.economiaRiesgoCurso.findFirst({ where: { aulaId } });
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
    const aula = await prisma.clase.findFirst({ where: { id: req.params.aulaId } }) as unknown as AulaDoc | null;
    if (aula && !assertClassroomWritable(res, aula)) {
      return;
    }
    await prisma.economiaRiesgoCurso.upsert({
      where: { aulaId: req.params.aulaId },
      update: { riesgoBase: validated.riesgoBase, riesgoMercado: validated.riesgoMercado, riesgoCredito: validated.riesgoCredito, updatedAt: validated.updatedAt },
      create: { aulaId: validated.aulaId, riesgoBase: validated.riesgoBase, riesgoMercado: validated.riesgoMercado, riesgoCredito: validated.riesgoCredito, updatedAt: validated.updatedAt }
    });
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
      const aula = await prisma.clase.findFirst({ where: { id: req.params.aulaId } }) as unknown as AulaDoc | null;
      if (aula && !assertClassroomWritable(res, aula)) {
        return;
      }
      const existing = await prisma.economiaRiesgoCurso.findFirst({ where: { aulaId: req.params.aulaId } });
      let isNew = false;
      if (existing) {
        await prisma.economiaRiesgoCurso.updateMany({
          where: { aulaId: req.params.aulaId },
          data: update
        });
      } else {
        await prisma.economiaRiesgoCurso.create({
          data: {
            aulaId: req.params.aulaId,
            riesgoBase: update.riesgoBase ?? 0.2,
            riesgoMercado: update.riesgoMercado ?? 0.3,
            riesgoCredito: update.riesgoCredito ?? 0.25,
            updatedAt: update.updatedAt
          }
        });
        isNew = true;
      }
      res.status(isNew ? 201 : 200).json({ ok: true });
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
  const ajuste = await getMacroAjuste();
  // Calculate volumen subastas from examen pujas (JSON blobs)
  const allPujaRows = await prisma.economiaExamenPuja.findMany({ where: {} });
  const allPujaDocs = allPujaRows
    .map((row) => { try { return JSON.parse(row.json); } catch { return null; } })
    .filter((doc): doc is PujaDoc & { createdAt?: string; aulaId?: string } => doc !== null);
  const filteredPujas = allPujaDocs.filter((doc) => {
    if (doc.createdAt && (doc.createdAt < desde || doc.createdAt > hasta)) return false;
    if (aulaId && (doc as any).aulaId !== aulaId) return false;
    return true;
  });
  const volumenSubastas = filteredPujas.reduce((acc, doc) => acc + (doc.puntos ?? 0) * (doc.montoPorPunto ?? 0), 0);

  // Calculate dinero quemado from transacciones
  const transaccionesRows = await prisma.economiaTransaccion.findMany({
    where: {
      tipo: "debito",
      createdAt: { gte: desde, lte: hasta },
      ...(aulaId ? { aulaId } : {})
    }
  });
  const dineroQuemado = transaccionesRows
    .filter((t) => /subasta_examen|penalizacion|quemado|burn/.test(t.motivo ?? ""))
    .reduce((acc, t) => acc + (t.monto as number), 0);

  res.json({
    periodo: { desde, hasta },
    aulaId: aulaId ?? "general",
    inflacion: {
      modo: ajuste.modo,
      tasaAplicada: ajuste.tasaAplicada,
      precioFactor: ajuste.precioFactor,
      recompensaFactor: ajuste.recompensaFactor
    },
    volumenSubastas: roundMoney(volumenSubastas),
    dineroQuemado: roundMoney(dineroQuemado)
  });
});

// GET /api/economia/ciclo-activo
// FIX-TEST4-ADMIN-01 — leer el override del panel admin primero.
// Si el panel no tiene inflación/deflación/hiperinflación activa,
// el `override` queda en `null` y caemos al JSON del calendario
// económico (comportamiento histórico).
economia.get("/api/economia/ciclo-activo", async (_req, res) => {
  try {
    const ciclo = getCicloActivo();
    const macro = await getOverrideActivo();
    const override = macro.modo !== "normal" ? {
      modo: macro.modo,
      precioFactor: macro.precioFactor,
      recompensaFactor: macro.recompensaFactor,
      tasa: macro.tasaAplicada,
    } : null;
    const ajuste = getAjusteEconomico(undefined, override);
    return res.json({ ciclo, ajuste });
  } catch (err) {
    return res.status(500).json({
      error: err instanceof Error ? err.message : "error"
    });
  }
});

// GET /api/economia/proximos-ciclos
economia.get("/api/economia/proximos-ciclos", (_req, res) => {
  try {
    const ciclos = getProximosCiclos(10);
    return res.json({ ciclos });
  } catch (err) {
    return res.status(500).json({
      error: err instanceof Error ? err.message : "error"
    });
  }
});
