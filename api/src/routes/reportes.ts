import { Router } from "express";
import { z } from "zod";
import { getDb } from "../lib/db";
import { ENTERPRISE_FEATURES, requireEnterpriseFeature } from "../lib/entitlements";
import { toObjectId } from "../lib/ids";
import { requireUser } from "../lib/user-auth";

export const reportes = Router();

const objectIdString = z.string().regex(/^[a-fA-F0-9]{24}$/);

const SolicitudVinculoSchema = z.object({
  childId: objectIdString
});

const AprobacionVinculoSchema = z.object({
  parentId: objectIdString
});

const daysBetween = (start: Date, end: Date) => (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);

const isMinor = (birthdate?: Date | null) => {
  if (!birthdate) return false;
  return daysBetween(birthdate, new Date()) < 365.25 * 18;
};

const findParentInvite = async (
  db: Awaited<ReturnType<typeof getDb>>,
  parentId: ReturnType<typeof toObjectId>,
  childId: ReturnType<typeof toObjectId>
) => {
  const invite = await db.collection("parent_invites").findOne({
    parentId,
    childId,
    estado: { $ne: "revocada" }
  });
  if (!invite) return null;
  if (invite.expiresAt instanceof Date && invite.expiresAt.getTime() < Date.now()) return null;
  return invite;
};

const logReportePadre = async (params: {
  parentId: ReturnType<typeof toObjectId>;
  childId: ReturnType<typeof toObjectId>;
  tipo: "estadisticas" | "informe";
  acceso: "menor" | "aprobado";
}) => {
  const db = await getDb();
  await db.collection("eventos_reportes_padres").insertOne({
    parentId: params.parentId,
    childId: params.childId,
    tipo: params.tipo,
    acceso: params.acceso,
    createdAt: new Date()
  });
};

type AccesoPadreOk = {
  ok: true;
  acceso: "menor" | "aprobado";
};

type AccesoPadreError = {
  ok: false;
  status: number;
  error: string;
};

const validarAccesoPadre = async (
  parentId: ReturnType<typeof toObjectId>,
  childId: ReturnType<typeof toObjectId>
): Promise<AccesoPadreOk | AccesoPadreError> => {
  if (!parentId || !childId) {
    return { ok: false, status: 400, error: "parentId and childId are required" as const };
  }
  const db = await getDb();
  const child = await db
    .collection("usuarios")
    .findOne({ _id: childId, isDeleted: { $ne: true } }, { projection: { birthdate: 1 } });
  if (!child) return { ok: false, status: 404, error: "child not found" as const };
  const vinculo = await db.collection("vinculos_padre_hijo").findOne({
    parentId,
    childId,
    estado: { $ne: "revocado" }
  });
  if (!vinculo) return { ok: false, status: 403, error: "no link" as const };
  const menor = isMinor(child.birthdate instanceof Date ? child.birthdate : null);
  if (menor) {
    return { ok: true, acceso: "menor" as const };
  }
  if (vinculo.estado === "aprobado") {
    return { ok: true, acceso: "aprobado" as const };
  }
  return { ok: false, status: 403, error: "approval required" as const };
};

reportes.post("/api/vinculos/solicitar", async (req, res) => {
  const parentIdParam = req.header("x-usuario-id");
  const parentId = typeof parentIdParam === "string" ? toObjectId(parentIdParam) : null;
  try {
    const parsed = SolicitudVinculoSchema.parse(req.body);
    const childId = toObjectId(parsed.childId);
    if (!parentId || !childId) return res.status(400).json({ error: "invalid parent or child id" });
    const db = await getDb();
    const existing = await db.collection("vinculos_padre_hijo").findOne({ parentId, childId });
    const invite = await findParentInvite(db, parentId, childId);
    if (!invite) {
      return res.status(403).json({ error: "institutional invite required" });
    }
    const activeCount = await db.collection("vinculos_padre_hijo").countDocuments({
      childId,
      estado: { $ne: "revocado" },
      ...(existing ? { _id: { $ne: existing._id } } : {})
    });
    const overrideRequested = invite?.overrideParentLimit === true;
    if (activeCount >= 2 && !overrideRequested) {
      return res.status(409).json({ error: "child already has max parents" });
    }
    const now = new Date();
    if (existing) {
      await db.collection("vinculos_padre_hijo").updateOne(
        { _id: existing._id },
        {
          $set: {
            estado: existing.estado === "aprobado" ? "aprobado" : "pendiente",
            solicitadoAt: existing.solicitadoAt ?? now,
            updatedAt: now,
            ...(overrideRequested
              ? { overrideApprovedBy: invite?.overrideApprovedBy ?? invite?.createdBy ?? null }
              : {})
          }
        }
      );
      return res.json({ ok: true, estado: existing.estado === "aprobado" ? "aprobado" : "pendiente" });
    }
    await db.collection("vinculos_padre_hijo").insertOne({
      parentId,
      childId,
      estado: "pendiente",
      solicitadoAt: now,
      createdAt: now,
      updatedAt: now,
      ...(overrideRequested ? { overrideApprovedBy: invite?.overrideApprovedBy ?? invite?.createdBy ?? null } : {})
    });
    return res.status(201).json({ ok: true, estado: "pendiente" });
  } catch (e: any) {
    return res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

reportes.post("/api/vinculos/aprobar", async (req, res) => {
  const childIdParam = req.header("x-usuario-id");
  const childId = typeof childIdParam === "string" ? toObjectId(childIdParam) : null;
  try {
    const parsed = AprobacionVinculoSchema.parse(req.body);
    const parentId = toObjectId(parsed.parentId);
    if (!parentId || !childId) return res.status(400).json({ error: "invalid parent or child id" });
    const db = await getDb();
    const existing = await db.collection("vinculos_padre_hijo").findOne({ parentId, childId });
    const invite = await findParentInvite(db, parentId, childId);
    if (!invite) {
      return res.status(403).json({ error: "institutional invite required" });
    }
    const activeCount = await db.collection("vinculos_padre_hijo").countDocuments({
      childId,
      estado: { $ne: "revocado" },
      ...(existing ? { _id: { $ne: existing._id } } : {})
    });
    const overrideRequested = invite?.overrideParentLimit === true;
    if (activeCount >= 2 && !overrideRequested) {
      return res.status(409).json({ error: "child already has max parents" });
    }
    const result = await db.collection("vinculos_padre_hijo").updateOne(
      { parentId, childId, estado: { $ne: "revocado" } },
      {
        $set: {
          estado: "aprobado",
          aprobadoAt: new Date(),
          updatedAt: new Date(),
          ...(overrideRequested
            ? { overrideApprovedBy: invite?.overrideApprovedBy ?? invite?.createdBy ?? null }
            : {})
        },
        $setOnInsert: {
          parentId,
          childId,
          solicitadoAt: new Date(),
          createdAt: new Date(),
          ...(overrideRequested
            ? { overrideApprovedBy: invite?.overrideApprovedBy ?? invite?.createdBy ?? null }
            : {})
        }
      },
      { upsert: true }
    );
    return res.json({ ok: true, updated: result.modifiedCount });
  } catch (e: any) {
    return res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

reportes.get("/api/vinculos/validar", async (req, res) => {
  const parentIdParam = req.header("x-usuario-id");
  const parentId = typeof parentIdParam === "string" ? toObjectId(parentIdParam) : null;
  const childIdParam = req.query.childId;
  const childId = typeof childIdParam === "string" ? toObjectId(childIdParam) : null;
  const result = await validarAccesoPadre(parentId, childId);
  if (!result.ok) return res.status(result.status).json({ ok: false, error: result.error });
  return res.json({ ok: true, acceso: result.acceso });
});

reportes.get("/api/estadisticas/hijos/:hijoId", async (req, res) => {
  const parentIdParam = req.header("x-usuario-id");
  const parentId = typeof parentIdParam === "string" ? toObjectId(parentIdParam) : null;
  const childId = toObjectId(req.params.hijoId);
  const acceso = await validarAccesoPadre(parentId, childId);
  if (!acceso.ok) return res.status(acceso.status).json({ error: acceso.error });
  const db = await getDb();
  const items = await db.collection("progreso_modulos").find({ usuarioId: req.params.hijoId }).toArray();
  const completados = items.filter((item) => item.status === "completado").length;
  const progreso = items.length ? Math.round((completados / items.length) * 100) : 0;
  await logReportePadre({ parentId, childId, tipo: "estadisticas", acceso: acceso.acceso });
  return res.json({ items, resumen: { completados, total: items.length, progreso } });
});

reportes.get("/api/informes/hijos/:hijoId", async (req, res) => {
  const parentIdParam = req.header("x-usuario-id");
  const parentId = typeof parentIdParam === "string" ? toObjectId(parentIdParam) : null;
  const childId = toObjectId(req.params.hijoId);
  const acceso = await validarAccesoPadre(parentId, childId);
  if (!acceso.ok) return res.status(acceso.status).json({ error: acceso.error });
  const db = await getDb();
  const items = await db.collection("progreso_modulos").find({ usuarioId: req.params.hijoId }).toArray();
  await logReportePadre({ parentId, childId, tipo: "informe", acceso: acceso.acceso });
  return res.json({ generatedAt: new Date().toISOString(), items });
});

type ReporteFilters = {
  aula?: string;
  grupo?: string;
  institucion?: string;
  periodo?: string;
  roles?: string[];
  tipoActividad?: string;
};

type ReporteFormato = "pdf" | "excel" | "json";

type ReporteConfig = {
  encabezado: {
    titulo: string;
    subtitulo: string;
    logoUrl: string;
  };
  piePagina: {
    texto: string;
    generadoPor: string;
  };
};

type Boletin = {
  estudiante: string;
  promedio: number;
  comentarios: string;
};

type ReporteResponse = {
  rol: "profesor" | "admin";
  filtros: ReporteFilters;
  configuracion: ReporteConfig;
  comparativo: {
    promedioGrupo: number;
    asistenciaPromedio: number;
    actividadesEvaluadas: number;
  };
  boletines: Boletin[];
  generacionLotes?: {
    total: number;
    ids: string[];
  };
  generadoEn: string;
};

const LOGO_INSTITUCIONAL =
  "https://storage.googleapis.com/educaai-public/assets/logo-institucional.png";

const toStringValue = (value: unknown): string | undefined => {
  if (typeof value === "string" && value.trim()) return value.trim();
  if (Array.isArray(value) && typeof value[0] === "string") return value[0].trim();
  return undefined;
};

const toStringList = (value: unknown): string[] | undefined => {
  if (Array.isArray(value)) {
    const items = value
      .filter((item): item is string => typeof item === "string")
      .map((item) => item.trim())
      .filter(Boolean);
    return items.length ? items : undefined;
  }
  const raw = toStringValue(value);
  if (!raw) return undefined;
  const items = raw
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
  return items.length ? items : undefined;
};

const parseFilters = (query: Record<string, unknown>): ReporteFilters => ({
  aula: toStringValue(query.aula),
  grupo: toStringValue(query.grupo),
  institucion: toStringValue(query.institucion) ?? toStringValue(query.institution),
  periodo: toStringValue(query.periodo),
  roles: toStringList(query.roles ?? query.rol ?? query.role)?.map((role) => role.toUpperCase()),
  tipoActividad: toStringValue(query.tipoActividad)
});

const parseFormato = (value: unknown): ReporteFormato => {
  const format = toStringValue(value)?.toLowerCase();
  if (format === "pdf" || format === "excel") return format;
  return "json";
};

const parseLote = (query: Record<string, unknown>) => {
  const lote = toStringValue(query.lote);
  const loteIds = toStringValue(query.loteIds);
  const ids = loteIds ? loteIds.split(",").map((id) => id.trim()).filter(Boolean) : [];
  return {
    enabled: lote === "true" || lote === "1" || ids.length > 0,
    ids
  };
};

const buildSchoolFilter = (schoolId?: string) => {
  if (!schoolId) return {};
  const escuelaObjectId = toObjectId(schoolId);
  return escuelaObjectId ? { escuelaId: escuelaObjectId } : { escuelaId: schoolId };
};

const buildAulaFilter = (filtros: ReporteFilters, schoolId?: string) => {
  if (filtros.aula) return { id: filtros.aula };
  if (!schoolId) return {};
  return { $or: [{ institutionId: schoolId }, { schoolId }] };
};

const uniqueIds = (values: string[]) => Array.from(new Set(values.filter(Boolean)));

const buildUserIdMatch = (values: string[]) => {
  const objectIds = values.map((id) => toObjectId(id)).filter(Boolean);
  const stringIds = values.filter((id) => !toObjectId(id));
  const matchParts: Record<string, unknown>[] = [];
  if (objectIds.length) matchParts.push({ _id: { $in: objectIds } });
  if (stringIds.length) matchParts.push({ _id: { $in: stringIds } });
  if (matchParts.length === 0) return {};
  if (matchParts.length === 1) return matchParts[0];
  return { $or: matchParts };
};

const buildComentario = (promedio: number, completadas: number, total: number) => {
  if (total === 0) return "Sin actividad registrada en el periodo.";
  const avance = total > 0 ? completadas / total : 0;
  if (promedio >= 4.5 && avance >= 0.8) return "Excelente desempeño y constancia destacada.";
  if (promedio >= 4.0) return "Buen avance, mantener la participación y el ritmo.";
  if (avance >= 0.6) return "Avance constante, reforzar temas con puntajes bajos.";
  return "Se recomienda acompañamiento para mejorar resultados.";
};

const roundNumber = (value: number, precision = 2) => {
  const factor = Math.pow(10, precision);
  return Math.round(value * factor) / factor;
};

const buildReporteData = async (
  rol: "profesor" | "admin",
  filtros: ReporteFilters,
  loteIds: string[],
  scopeSchoolId?: string
) => {
  const db = await getDb();
  const scopedSchoolId = filtros.institucion ?? scopeSchoolId;
  const aulas = await db
    .collection("aulas")
    .find(buildAulaFilter(filtros, scopedSchoolId), { projection: { id: 1, name: 1, members: 1 } })
    .toArray();
  const aulaIds = aulas.map((aula) => aula.id).filter(Boolean);
  const rawMembers = aulas.flatMap((aula) => (Array.isArray(aula.members) ? aula.members : []));
  const roleFilter = filtros.roles?.length ? new Set(filtros.roles) : null;
  const scopedMembers = roleFilter
    ? rawMembers.filter((member) => roleFilter.has(String(member.roleInClass).toUpperCase()))
    : rawMembers;
  const memberUserIds = uniqueIds(scopedMembers.map((member) => String(member.userId)));

  const userFilter: Record<string, unknown> = {
    ...buildSchoolFilter(scopedSchoolId),
    isDeleted: { $ne: true }
  };
  if (filtros.roles?.length) {
    userFilter.role = { $in: filtros.roles };
  }
  if (memberUserIds.length) {
    Object.assign(userFilter, buildUserIdMatch(memberUserIds));
  }

  const usuarios = await db
    .collection("usuarios")
    .find(userFilter)
    .project({ fullName: 1, username: 1, role: 1 })
    .toArray();
  const usuarioIds = uniqueIds(
    usuarios.map((user) => user._id?.toString?.() ?? "").filter(Boolean)
  );
  const scopedUsuarioIds = memberUserIds.length ? memberUserIds : usuarioIds;

  const progresoMatch: Record<string, unknown> = {};
  if (aulaIds.length) progresoMatch.aulaId = aulaIds.length === 1 ? aulaIds[0] : { $in: aulaIds };
  if (scopedUsuarioIds.length) progresoMatch.usuarioId = { $in: scopedUsuarioIds };

  const progresoResumen = await db
    .collection("progreso_modulos")
    .aggregate([
      { $match: progresoMatch },
      {
        $group: {
          _id: null,
          actividades: { $sum: 1 },
          completadas: {
            $sum: { $cond: [{ $eq: ["$status", "completado"] }, 1, 0] }
          },
          promedioScore: { $avg: { $ifNull: ["$score", 0] } }
        }
      }
    ])
    .toArray();

  const usuariosConActividad = await db
    .collection("progreso_modulos")
    .aggregate([
      { $match: progresoMatch },
      { $group: { _id: "$usuarioId" } },
      { $count: "total" }
    ])
    .toArray();

  const boletinesRaw = await db
    .collection("progreso_modulos")
    .aggregate([
      { $match: progresoMatch },
      {
        $group: {
          _id: "$usuarioId",
          promedioScore: { $avg: { $ifNull: ["$score", 0] } },
          completadas: {
            $sum: { $cond: [{ $eq: ["$status", "completado"] }, 1, 0] }
          },
          total: { $sum: 1 }
        }
      },
      { $sort: { promedioScore: -1 } },
      { $limit: 6 }
    ])
    .toArray();

  const usuariosMap = new Map(
    usuarios.map((user) => [user._id?.toString?.() ?? "", user])
  );
  const boletines: Boletin[] = boletinesRaw.map((item) => {
    const usuario = usuariosMap.get(String(item._id));
    const nombre = usuario?.fullName ?? usuario?.username ?? `Usuario ${String(item._id).slice(-6)}`;
    const promedio = roundNumber(item.promedioScore ?? 0, 2);
    const completadas = item.completadas ?? 0;
    const total = item.total ?? 0;
    return {
      estudiante: nombre,
      promedio,
      comentarios: buildComentario(promedio, completadas, total)
    };
  });

  const resumen = progresoResumen[0];
  const totalActividades = resumen?.actividades ?? 0;
  const totalCompletadas = resumen?.completadas ?? 0;
  const promedioGrupo = roundNumber(resumen?.promedioScore ?? 0, 2);
  const totalMiembros = scopedUsuarioIds.length;
  const asistentes = usuariosConActividad[0]?.total ?? 0;
  const asistenciaPromedio = totalMiembros ? roundNumber(asistentes / totalMiembros, 2) : 0;

  const configuracion: ReporteConfig = {
    encabezado: {
      titulo: `Reporte comparativo - ${rol === "profesor" ? "Profesor" : "Administrador"}`,
      subtitulo: `Periodo ${filtros.periodo ?? "actual"} · Aula ${filtros.aula ?? "general"}`,
      logoUrl: LOGO_INSTITUCIONAL
    },
    piePagina: {
      texto: "Documento confidencial para uso institucional.",
      generadoPor: "Plataforma EducaAI"
    }
  };

  return {
    rol,
    filtros,
    configuracion,
    comparativo: {
      promedioGrupo,
      asistenciaPromedio,
      actividadesEvaluadas: totalActividades
    },
    boletines,
    generacionLotes: loteIds.length
      ? {
          total: loteIds.length,
          ids: loteIds
        }
      : undefined,
    generadoEn: new Date().toISOString()
  } satisfies ReporteResponse;
};

const buildFilePayload = (data: ReporteResponse, formato: ReporteFormato) => {
  const header = `${data.configuracion.encabezado.titulo}\n${data.configuracion.encabezado.subtitulo}\nLogo: ${data.configuracion.encabezado.logoUrl}\n`;
  const footer = `\n${data.configuracion.piePagina.texto}\nGenerado por: ${data.configuracion.piePagina.generadoPor}\n`;
  const body = [
    `Filtros: ${JSON.stringify(data.filtros)}`,
    `Comparativo: ${JSON.stringify(data.comparativo)}`,
    `Boletines: ${JSON.stringify(data.boletines)}`,
    data.generacionLotes ? `Lotes: ${JSON.stringify(data.generacionLotes)}` : "Lotes: n/a",
    `Generado: ${data.generadoEn}`
  ].join("\n");

  const content = `${header}${body}${footer}`;
  const buffer = Buffer.from(content, "utf-8");

  return {
    buffer,
    contentType:
      formato === "pdf"
        ? "application/pdf"
        : "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    extension: formato === "pdf" ? "pdf" : "xlsx"
  };
};

const handleReporte = (rol: "profesor" | "admin") => async (req: any, res: any) => {
  const filtros = parseFilters(req.query);
  const formato = parseFormato(req.query.formato);
  const lote = parseLote(req.query);
  const scopeSchoolId = typeof req.user?.schoolId === "string" ? req.user.schoolId : undefined;
  const data = await buildReporteData(rol, filtros, lote.ids, scopeSchoolId);

  if (formato !== "json") {
    const payload = buildFilePayload(data, formato);
    res.setHeader("Content-Type", payload.contentType);
    res.setHeader("Content-Disposition", `attachment; filename=\"reporte-${rol}.${payload.extension}\"`);
    return res.send(payload.buffer);
  }

  return res.json(data);
};

reportes.get(
  "/api/reportes/profesor",
  requireUser,
  requireEnterpriseFeature(ENTERPRISE_FEATURES.REPORTS),
  handleReporte("profesor")
);
reportes.get(
  "/api/reportes/admin",
  requireUser,
  requireEnterpriseFeature(ENTERPRISE_FEATURES.REPORTS),
  handleReporte("admin")
);

reportes.get(
  "/api/reportes/economia",
  requireUser,
  requireEnterpriseFeature(ENTERPRISE_FEATURES.ECONOMY),
  async (req, res) => {
    const filtros = parseFilters(req.query);
    const scopeSchoolId = typeof req.user?.schoolId === "string" ? req.user.schoolId : undefined;
    const scopedSchoolId = filtros.institucion ?? scopeSchoolId;
    const db = await getDb();
    const aulas = await db
      .collection("aulas")
      .find(buildAulaFilter(filtros, scopedSchoolId), { projection: { id: 1 } })
      .toArray();
    const aulaIds = aulas.map((aula) => aula.id).filter(Boolean);
    const match: Record<string, unknown> = {};
    if (scopedSchoolId) match.schoolId = scopedSchoolId;
    if (aulaIds.length) match.aulaId = aulaIds.length === 1 ? aulaIds[0] : { $in: aulaIds };

    if (filtros.roles?.length) {
      const userFilter: Record<string, unknown> = {
        ...buildSchoolFilter(scopedSchoolId),
        role: { $in: filtros.roles },
        isDeleted: { $ne: true }
      };
      const usuarios = await db
        .collection("usuarios")
        .find(userFilter)
        .project({ _id: 1 })
        .toArray();
      const usuarioIds = uniqueIds(
        usuarios.map((user) => user._id?.toString?.() ?? "").filter(Boolean)
      );
      if (usuarioIds.length) {
        match.usuarioId = { $in: usuarioIds };
      }
    }

    const resumen = await db
      .collection("economia_transacciones")
      .aggregate([
        { $match: match },
        {
          $group: {
            _id: "$tipo",
            total: { $sum: "$monto" },
            transacciones: { $sum: 1 }
          }
        }
      ])
      .toArray();

    const detalleMotivos = await db
      .collection("economia_transacciones")
      .aggregate([
        { $match: match },
        { $group: { _id: "$motivo", total: { $sum: "$monto" }, transacciones: { $sum: 1 } } },
        { $sort: { total: -1 } },
        { $limit: 5 }
      ])
      .toArray();

    const credito = resumen.find((item) => item._id === "credito");
    const debito = resumen.find((item) => item._id === "debito");
    const totalCreditos = roundNumber(credito?.total ?? 0, 2);
    const totalDebitos = roundNumber(debito?.total ?? 0, 2);
    const totalTransacciones = resumen.reduce((acc, item) => acc + (item.transacciones ?? 0), 0);

    res.json({
      filtros,
      periodo: filtros.periodo ?? "actual",
      aulas: aulaIds.length ? aulaIds : "general",
      totales: {
        creditos: totalCreditos,
        debitos: totalDebitos,
        neto: roundNumber(totalCreditos - totalDebitos, 2),
        transacciones: totalTransacciones
      },
      detallePorTipo: resumen.map((item) => ({
        tipo: item._id,
        total: roundNumber(item.total ?? 0, 2),
        transacciones: item.transacciones ?? 0
      })),
      topMotivos: detalleMotivos.map((item) => ({
        motivo: item._id,
        total: roundNumber(item.total ?? 0, 2),
        transacciones: item.transacciones ?? 0
      })),
      generadoEn: new Date().toISOString()
    });
  }
);
