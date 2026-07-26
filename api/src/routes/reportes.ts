import { Router } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma";
import { isStaffRole, requirePolicy } from "../lib/authorization";
import { ENTERPRISE_FEATURES, requireEnterpriseFeature } from "../lib/entitlements";
import { toObjectId } from "../lib/ids";
import { buildSimplePdf } from "../lib/pdf";
import { getQueryString } from "../lib/query";
import { requireUser } from "../lib/user-auth";
import { soloAlumnosReales } from "../lib/inscripcion-prueba";

export const reportes = Router();

const objectIdString = z.string().regex(/^[a-fA-F0-9]{24}$/);

const SolicitudVinculoSchema = z.object({
  childId: objectIdString
});

const AprobacionVinculoSchema = z.object({
  parentId: objectIdString
});

const getAuthenticatedUserId = (req: any) => {
  const userId = req.user?._id;
  if (!userId) return null;
  if (typeof userId === "string") return userId;
  return String(userId);
};

const daysBetween = (start: Date, end: Date) => (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24);

const isMinor = (birthdate?: Date | null) => {
  if (!birthdate) return false;
  return daysBetween(birthdate, new Date()) < 365.25 * 18;
};

// NOTE: vinculos_padre_hijo, parent_invites, eventos_reportes_padres and
// economia_transacciones are not yet in the Prisma schema. Their operations
// are stubbed as no-ops until those models are added.

const findParentInvite = async (
  parentId: string,
  childId: string
) => {
  // TODO: migrate to prisma.parentInvite once model is defined
  return null as null | {
    _id?: string | null;
    overrideParentLimit?: boolean;
    overrideApprovedBy?: string;
    createdBy?: string;
    expiresAt?: Date;
  };
};

const resolveOverrideApprovedBy = (invite: Awaited<ReturnType<typeof findParentInvite>>): string | null => {
  if (!invite) return null;
  const candidate = invite.overrideApprovedBy ?? invite.createdBy ?? null;
  if (!candidate) return null;
  return String(candidate);
};

const logOverrideParentLimit = async (params: {
  parentId: string;
  childId: string;
  inviteId: unknown;
  overrideApprovedBy: string;
  requestedBy: string;
}) => {
  // TODO: migrate to prisma.eventoReportePadre once model is defined
};

const logReportePadre = async (params: {
  parentId: string;
  childId: string;
  tipo: "estadisticas" | "informe";
  acceso: "menor" | "aprobado";
}) => {
  // TODO: migrate to prisma.eventoReportePadre once model is defined
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
  parentId: string | null,
  childId: string | null
): Promise<AccesoPadreOk | AccesoPadreError> => {
  if (!parentId || !childId) {
    return { ok: false, status: 400, error: "parentId and childId are required" as const };
  }
  const child = await prisma.usuario.findFirst({
    where: { id: childId, isDeleted: { not: true } },
    select: { id: true }
  });
  if (!child) return { ok: false, status: 404, error: "child not found" as const };

  // TODO: migrate vinculos_padre_hijo to Prisma — returning 403 until model exists
  return { ok: false, status: 403, error: "no link" as const };
};

reportes.post("/api/vinculos/solicitar", requireUser, async (req, res) => {
  const parentId = getAuthenticatedUserId(req);
  try {
    const parsed = SolicitudVinculoSchema.parse(req.body);
    const childId = parsed.childId;
    if (!parentId || !childId) return res.status(400).json({ error: "invalid parent or child id" });

    const invite = await findParentInvite(parentId, childId);
    if (!invite) {
      return res.status(403).json({ error: "institutional invite required" });
    }
    // TODO: full vinculos_padre_hijo logic requires that model in Prisma
    return res.status(501).json({ error: "vinculos not yet migrated to Prisma" });
  } catch (e: any) {
    return res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

reportes.post("/api/vinculos/aprobar", requireUser, async (req, res) => {
  const childId = getAuthenticatedUserId(req);
  try {
    const parsed = AprobacionVinculoSchema.parse(req.body);
    const parentId = parsed.parentId;
    if (!parentId || !childId) return res.status(400).json({ error: "invalid parent or child id" });

    const invite = await findParentInvite(parentId, childId);
    if (!invite) {
      return res.status(403).json({ error: "institutional invite required" });
    }
    // TODO: full vinculos_padre_hijo logic requires that model in Prisma
    return res.status(501).json({ error: "vinculos not yet migrated to Prisma" });
  } catch (e: any) {
    return res.status(400).json({ error: e?.message ?? "invalid payload" });
  }
});

reportes.get("/api/vinculos/validar", requireUser, async (req, res) => {
  const parentId = getAuthenticatedUserId(req);
  const childIdParam = getQueryString(req.query.childId);
  const childId = childIdParam ?? null;
  const result = await validarAccesoPadre(parentId, childId);
  if (!result.ok) return res.status(result.status).json({ ok: false, error: result.error });
  return res.json({ ok: true, acceso: result.acceso });
});

reportes.get("/api/estadisticas/hijos/:hijoId", requireUser, async (req, res) => {
  const parentId = getAuthenticatedUserId(req);
  const rawHijoId = Array.isArray(req.params.hijoId) ? req.params.hijoId[0] : req.params.hijoId;
  if (typeof rawHijoId !== "string" || !rawHijoId) {
    return res.status(400).json({ error: "invalid hijoId" });
  }
  const acceso = await validarAccesoPadre(parentId, rawHijoId);
  if (!acceso.ok) return res.status(acceso.status).json({ error: acceso.error });
  const items = await prisma.progresoModulo.findMany({ where: { usuarioId: rawHijoId } });
  const completados = items.filter((item) => item.status === "completado").length;
  const progreso = items.length ? Math.round((completados / items.length) * 100) : 0;
  await logReportePadre({ parentId: parentId!, childId: rawHijoId, tipo: "estadisticas", acceso: acceso.acceso });
  return res.json({ items, resumen: { completados, total: items.length, progreso } });
});

reportes.get("/api/informes/hijos/:hijoId", requireUser, async (req, res) => {
  const parentId = getAuthenticatedUserId(req);
  const rawHijoId = Array.isArray(req.params.hijoId) ? req.params.hijoId[0] : req.params.hijoId;
  if (typeof rawHijoId !== "string" || !rawHijoId) {
    return res.status(400).json({ error: "invalid hijoId" });
  }
  const acceso = await validarAccesoPadre(parentId, rawHijoId);
  if (!acceso.ok) return res.status(acceso.status).json({ error: acceso.error });
  const items = await prisma.progresoModulo.findMany({ where: { usuarioId: rawHijoId } });
  await logReportePadre({ parentId: parentId!, childId: rawHijoId, tipo: "informe", acceso: acceso.acceso });
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

type ReporteFormato = "pdf" | "excel" | "csv" | "json";

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
  paginacion?: {
    limit: number;
    offset: number;
    totalAulas: number;
    totalUsuarios: number;
  };
  generadoEn: string;
};

const LOGO_INSTITUCIONAL =
  "https://storage.googleapis.com/educaai-public/assets/logo-institucional.png";

const toStringValue = (value: unknown): string | undefined => {
  const raw = getQueryString(value);
  if (typeof raw === "string" && raw.trim()) return raw.trim();
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
  if (format === "pdf" || format === "excel" || format === "csv") return format;
  return "json";
};

const parsePagination = (query: Record<string, unknown>) => {
  const limitRaw = Number(toStringValue(query.limit));
  const offsetRaw = Number(toStringValue(query.offset));
  const limit = Number.isFinite(limitRaw) ? Math.min(Math.max(limitRaw, 1), 500) : 100;
  const offset = Number.isFinite(offsetRaw) && offsetRaw > 0 ? Math.floor(offsetRaw) : 0;
  return { limit, offset };
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
  return { escuelaId: schoolId };
};

const buildAulaWhere = (filtros: ReporteFilters, schoolId?: string) => {
  if (filtros.aula) return { id: filtros.aula };
  if (!schoolId) return {};
  return { escuelaId: schoolId };
};

const uniqueIds = (values: string[]) => Array.from(new Set(values.filter(Boolean)));

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
  pagination: { limit: number; offset: number },
  scopeSchoolId?: string
) => {
  const scopedSchoolId = filtros.institucion ?? scopeSchoolId;
  const aulaWhere = buildAulaWhere(filtros, scopedSchoolId);

  const totalAulas = await prisma.clase.count({ where: aulaWhere });
  const aulas = await prisma.clase.findMany({
    where: aulaWhere,
    select: { id: true, name: true },
    skip: pagination.offset,
    take: pagination.limit
  });
  const aulaIds = aulas.map((aula) => aula.id).filter(Boolean);

  // Fetch classroom members to get role-filtered user IDs
  const claseMiembros = aulaIds.length
    ? await prisma.claseMiembro.findMany({ where: { claseId: { in: aulaIds } } })
    : [];
  const roleFilter = filtros.roles?.length ? new Set(filtros.roles) : null;
  const scopedMiembros = roleFilter
    ? claseMiembros.filter((m) => roleFilter.has(String(m.rolEnClase).toUpperCase()))
    : claseMiembros;
  // PLAN-multirol Fase 3 — choke point: las inscripciones de prueba
  // quedan fuera de TODAS las agregaciones aguas abajo (listado de
  // usuarios, promedios, asistencia, boletines).
  const memberUserIds = uniqueIds(soloAlumnosReales(scopedMiembros).map((m) => m.usuarioId));

  const userWhere: Record<string, unknown> = {
    ...buildSchoolFilter(scopedSchoolId),
    isDeleted: { not: true }
  };
  if (filtros.roles?.length) {
    (userWhere as any).role = { in: filtros.roles };
  }
  if (memberUserIds.length) {
    // `memberUserIds` ya viene sin espejos (choke point de arriba).
    (userWhere as any).id = { in: memberUserIds };
  }
  // PLAN-multirol Fase 3 — antes acá se excluían las cuentas espejo del
  // listado sin scope de aula. Ya no hace falta: no hay cuentas de más que
  // filtrar, la persona es una sola y lo "de prueba" es su inscripción.

  const totalUsuarios = await prisma.usuario.count({ where: userWhere as any });
  const usuarios = await prisma.usuario.findMany({
    where: userWhere as any,
    select: { id: true, fullName: true, username: true, role: true },
    skip: pagination.offset,
    take: pagination.limit
  });
  const usuarioIds = uniqueIds(usuarios.map((user) => user.id));
  const scopedUsuarioIds = memberUserIds.length ? memberUserIds : usuarioIds;

  const progresoWhere: Record<string, unknown> = {};
  if (aulaIds.length) progresoWhere.aulaId = aulaIds.length === 1 ? aulaIds[0] : { in: aulaIds };
  if (scopedUsuarioIds.length) progresoWhere.usuarioId = { in: scopedUsuarioIds };

  // Aggregate progreso_modulos in JavaScript
  const allProgreso = await prisma.progresoModulo.findMany({ where: progresoWhere as any });

  const totalActividades = allProgreso.length;
  const totalCompletadas = allProgreso.filter((p) => p.status === "completado").length;
  const scores = allProgreso.map((p) => (typeof p.score === "number" ? p.score : 0));
  const promedioGrupo = roundNumber(
    scores.length ? scores.reduce((a, b) => a + b, 0) / scores.length : 0,
    2
  );

  const uniqueActiveUsers = new Set(
    allProgreso.map((p) => p.usuarioId).filter(Boolean)
  );
  const asistentes = uniqueActiveUsers.size;
  const totalMiembros = scopedUsuarioIds.length;
  const asistenciaPromedio = totalMiembros ? roundNumber(asistentes / totalMiembros, 2) : 0;

  // Group by usuarioId for boletines
  const byUser = new Map<string, { scores: number[]; completadas: number; total: number }>();
  for (const p of allProgreso) {
    const uid = p.usuarioId;
    if (!uid) continue;
    if (!byUser.has(uid)) byUser.set(uid, { scores: [], completadas: 0, total: 0 });
    const entry = byUser.get(uid)!;
    entry.total += 1;
    if (p.status === "completado") entry.completadas += 1;
    if (typeof p.score === "number") entry.scores.push(p.score);
  }
  const usuariosMap = new Map(usuarios.map((u) => [u.id, u]));
  const boletinesRaw = Array.from(byUser.entries())
    .map(([uid, data]) => ({
      uid,
      promedioScore: data.scores.length
        ? data.scores.reduce((a, b) => a + b, 0) / data.scores.length
        : 0,
      completadas: data.completadas,
      total: data.total
    }))
    .sort((a, b) => b.promedioScore - a.promedioScore)
    .slice(0, 6);

  const boletines: Boletin[] = boletinesRaw.map((item) => {
    const usuario = usuariosMap.get(item.uid);
    const nombre = String(usuario?.fullName ?? usuario?.username ?? `Usuario ${item.uid.slice(-6)}`);
    const promedio = roundNumber(item.promedioScore, 2);
    return {
      estudiante: nombre,
      promedio,
      comentarios: buildComentario(promedio, item.completadas, item.total)
    };
  });

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
    paginacion: {
      limit: pagination.limit,
      offset: pagination.offset,
      totalAulas,
      totalUsuarios
    },
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

const escapeCsvValue = (value: string | number) => {
  const raw = String(value ?? "");
  if (raw.includes("\"") || raw.includes(",") || raw.includes("\n")) {
    return `"${raw.replace(/\"/g, "\"\"")}"`;
  }
  return raw;
};

const buildReporteCsv = (data: ReporteResponse) => {
  const rows = [
    ["Titulo", data.configuracion.encabezado.titulo],
    ["Subtitulo", data.configuracion.encabezado.subtitulo],
    ["Logo", data.configuracion.encabezado.logoUrl],
    ["Generado", data.generadoEn],
    [],
    ["Promedio grupo", data.comparativo.promedioGrupo],
    ["Asistencia promedio", data.comparativo.asistenciaPromedio],
    ["Actividades evaluadas", data.comparativo.actividadesEvaluadas],
    [],
    ["Estudiante", "Promedio", "Comentarios"],
    ...data.boletines.map((item) => [item.estudiante, item.promedio, item.comentarios])
  ];
  return rows
    .map((row) =>
      row
        .map((value) => (value === undefined ? "" : escapeCsvValue(value)))
        .join(",")
    )
    .join("\n");
};

const buildFilePayload = async (data: ReporteResponse, formato: ReporteFormato) => {
  if (formato === "pdf") {
    return {
      buffer: buildSimplePdf([
        data.configuracion.encabezado.titulo,
        data.configuracion.encabezado.subtitulo,
        `Logo: ${data.configuracion.encabezado.logoUrl}`,
        "",
        "Comparativo",
        `Promedio grupo: ${data.comparativo.promedioGrupo}`,
        `Asistencia promedio: ${data.comparativo.asistenciaPromedio}`,
        `Actividades evaluadas: ${data.comparativo.actividadesEvaluadas}`,
        "",
        "Boletines destacados",
        ...data.boletines.flatMap((item) => [
          `${item.estudiante} · ${item.promedio}`,
          `Comentarios: ${item.comentarios}`
        ]),
        "",
        data.configuracion.piePagina.texto,
        `Generado por: ${data.configuracion.piePagina.generadoPor}`,
        `Generado: ${data.generadoEn}`
      ]),
      contentType: "application/pdf",
      extension: "pdf"
    };
  }
  if (formato === "csv" || formato === "excel") {
    return {
      buffer: Buffer.from(buildReporteCsv(data), "utf-8"),
      contentType: "text/csv",
      extension: "csv"
    };
  }
  return {
    buffer: Buffer.from(buildReporteCsv(data), "utf-8"),
    contentType: "text/csv",
    extension: "csv"
  };
};

const handleReporte = (rol: "profesor" | "admin") => async (req: any, res: any) => {
  const filtros = parseFilters(req.query);
  const formato = parseFormato(req.query.formato);
  const lote = parseLote(req.query);
  const pagination = parsePagination(req.query);
  const requesterRole = typeof req.user?.role === "string" ? req.user.role : null;
  if (formato !== "json" && !isStaffRole(requesterRole)) {
    return res.status(403).json({ error: "report export requires staff role" });
  }
  const scopeSchoolId = typeof req.user?.schoolId === "string" ? req.user.schoolId : undefined;
  const data = await buildReporteData(rol, filtros, lote.ids, pagination, scopeSchoolId);

  if (formato !== "json") {
    const payload = await buildFilePayload(data, formato);
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
  requirePolicy("reportes/read"),
  handleReporte("profesor")
);
reportes.get(
  "/api/reportes/admin",
  requireUser,
  requireEnterpriseFeature(ENTERPRISE_FEATURES.REPORTS),
  requirePolicy("reportes/read"),
  handleReporte("admin")
);

reportes.get(
  "/api/reportes/economia",
  requireUser,
  requireEnterpriseFeature(ENTERPRISE_FEATURES.ECONOMY),
  requirePolicy("reportes/read"),
  async (req, res) => {
    const filtros = parseFilters(req.query);
    const pagination = parsePagination(req.query);
    const scopeSchoolId = typeof req.user?.schoolId === "string" ? req.user.schoolId : undefined;
    const scopedSchoolId = filtros.institucion ?? scopeSchoolId;
    const aulaWhere = buildAulaWhere(filtros, scopedSchoolId);

    const totalAulas = await prisma.clase.count({ where: aulaWhere });
    const aulas = await prisma.clase.findMany({
      where: aulaWhere,
      select: { id: true },
      skip: pagination.offset,
      take: pagination.limit
    });
    const aulaIds = aulas.map((aula) => aula.id).filter(Boolean);

    let totalUsuarios = 0;
    let filteredUserIds: string[] = [];

    if (filtros.roles?.length) {
      const userWhere: Record<string, unknown> = {
        ...buildSchoolFilter(scopedSchoolId),
        role: { in: filtros.roles },
        isDeleted: { not: true }
      };
      totalUsuarios = await prisma.usuario.count({ where: userWhere as any });
      const usuarios = await prisma.usuario.findMany({
        where: userWhere as any,
        select: { id: true },
        skip: pagination.offset,
        take: pagination.limit
      });
      filteredUserIds = uniqueIds(usuarios.map((u) => u.id));
    }

    // TODO: economia_transacciones is not yet in the Prisma schema.
    // Returning zeroed-out totals until the model is added.
    const totalCreditos = 0;
    const totalDebitos = 0;
    const totalTransacciones = 0;

    res.json({
      filtros,
      periodo: filtros.periodo ?? "actual",
      aulas: aulaIds.length ? aulaIds : "general",
      paginacion: {
        limit: pagination.limit,
        offset: pagination.offset,
        totalAulas,
        totalUsuarios
      },
      totales: {
        creditos: totalCreditos,
        debitos: totalDebitos,
        neto: roundNumber(totalCreditos - totalDebitos, 2),
        transacciones: totalTransacciones
      },
      detallePorTipo: [],
      topMotivos: [],
      generadoEn: new Date().toISOString()
    });
  }
);
