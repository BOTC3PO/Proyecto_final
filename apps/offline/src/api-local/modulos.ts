/**
 * Módulos guardados en el dispositivo, con el formato de `GET /api/modulos` y `GET /api/modulos/:id` del servidor.
 */
import { perfilDeSesion } from "./cuentas";
import type { Contexto, Perfil } from "./contexto";
import { aplicaCandado, candadosDe, type Candados } from "./desbloqueo";
import { nombreMateria } from "../../../web/src/lib/nombreMateria";
import { error, json } from "./http";

type FilaModulo = {
  id: string; origen: string; titulo: string; subject: string | null; level: string | null; category: string | null;
  slug: string | null; dependencies: string; owner_user_id: string | null; school_id: string | null; visibility: string;
  created_at: string; updated_at: string;
};
const COLUMNAS = "id, origen, titulo, subject, level, category, slug, dependencies, owner_user_id, school_id, visibility, created_at, updated_at";

const parse = <T>(s: string | null | undefined, porDefecto: T): T => {
  try { return s ? (JSON.parse(s) as T) : porDefecto; } catch { return porDefecto; }
};

function base(m: FilaModulo) {
  return {
    id: m.id, slug: m.slug ?? undefined, title: m.titulo, subject: m.subject, level: m.level, category: m.category ?? undefined,
    dependencies: parse(m.dependencies, [] as unknown[]), visibility: m.visibility, descatalogado: false,
    schoolId: m.school_id ?? undefined, createdBy: m.owner_user_id ?? "", createdAt: m.created_at, updatedAt: m.updated_at,
    origen: m.origen,
  };
}

async function contenidoDe(ctx: Contexto, ids: string[]) {
  if (!ids.length) return new Map<string, { descripcion: string | null; theory_items: string }>();
  const filas = await ctx.almacen.consulta<{ id: string; descripcion: string | null; theory_items: string }>(
    "contenido", `SELECT id, descripcion, theory_items FROM modulos_contenido WHERE id IN (${ids.map(() => "?").join(",")})`, ids,
  );
  return new Map(filas.map((f) => [f.id, f]));
}

/** Prerrequisito de otra materia, como lo anota el generador de paquetes. */
export type Externo = { id: string; titulo: string; materia: string; paquete: string };

async function prerrequisitosExternos(ctx: Contexto) {
  const filas = await ctx.almacen.consulta<{ requiere: string | null }>("contenido", "SELECT requiere FROM paquetes_instalados WHERE requiere IS NOT NULL");
  return new Map(filas.flatMap((f) => parse(f.requiere, [] as Externo[])).map((e) => [e.id, e]));
}

const bloqueado = (p: Perfil, c: Candados, id: string) => aplicaCandado(p) && c.de(id).isLocked;

/** GET /api/modulos — `?mine=true` devuelve los del perfil. Los bloqueados van sin teoría. */
export async function listarModulos(ctx: Contexto, req: Request) {
  const p = await perfilDeSesion(ctx, req);
  if (!p) return error(401, "No autenticado");
  const url = new URL(req.url);
  const limit = Math.min(Math.max(Number(url.searchParams.get("limit") ?? 50) || 50, 1), 500);
  const offset = Math.max(Number(url.searchParams.get("offset") ?? 0) || 0, 0);
  const mine = url.searchParams.get("mine") === "true";
  const filas = await ctx.almacen.consulta<FilaModulo>(
    "contenido",
    `SELECT ${COLUMNAS} FROM modulos ${mine ? "WHERE owner_user_id = ?" : ""} ORDER BY updated_at DESC, titulo LIMIT ? OFFSET ?`,
    mine ? [p.id, limit, offset] : [limit, offset],
  );
  const c = await candadosDe(ctx, p.id);
  const abiertos = filas.filter((m) => !bloqueado(p, c, m.id)).map((m) => m.id);
  const contenido = await contenidoDe(ctx, abiertos);
  const items = filas.map((m) => {
    const cont = contenido.get(m.id);
    return {
      ...base(m),
      description: cont?.descripcion ?? "",
      theoryItems: cont ? parse(cont.theory_items, [] as unknown[]) : [],
      isLocked: bloqueado(p, c, m.id),
      status: c.estados.get(m.id)?.estado ?? "publicado",
    };
  });
  return json({ items, limit, offset });
}

/** GET /api/modulos/:id — si está bloqueado, vuelve el candado y los prerrequisitos que faltan, sin contenido. */
export async function verModulo(ctx: Contexto, req: Request, id: string) {
  const p = await perfilDeSesion(ctx, req);
  if (!p) return error(401, "No autenticado");
  const [m] = await ctx.almacen.consulta<FilaModulo>("contenido", `SELECT ${COLUMNAS} FROM modulos WHERE id = ?`, [id]);
  if (!m) return error(404, "not found");
  const c = await candadosDe(ctx, p.id);
  const candado = c.de(id);
  const isLocked = aplicaCandado(p) && candado.isLocked;
  const faltan = candado.missingDependencyIds.length
    ? await ctx.almacen.consulta<{ id: string; titulo: string }>(
        "contenido", `SELECT id, titulo FROM modulos WHERE id IN (${candado.missingDependencyIds.map(() => "?").join(",")})`, candado.missingDependencyIds,
      )
    : [];
  const enDispositivo = new Set(faltan.map((f) => f.id));
  const externos = candado.missingDependencyIds.some((d) => !enDispositivo.has(d)) ? await prerrequisitosExternos(ctx) : new Map<string, Externo>();
  const missingDependencies = aplicaCandado(p)
    ? candado.missingDependencyIds.map((d) => {
        const f = faltan.find((x) => x.id === d);
        if (f) return { id: f.id, title: f.titulo };
        const e = externos.get(d);
        // De otra materia que no está en el dispositivo: hay que bajarla desde «Contenido sin conexión».
        return { id: d, title: e ? `${e.titulo} (${nombreMateria(e.materia)}, sin bajar)` : d, sinInstalar: true, paquete: e?.paquete };
      })
    : [];
  if (isLocked) {
    return json({ ...base(m), description: "", theoryItems: [], quizzes: [], isLocked, missingDependencies });
  }
  const [cont] = await ctx.almacen.consulta<{ descripcion: string | null; theory_items: string; scoring_config: string | null }>(
    "contenido", "SELECT descripcion, theory_items, scoring_config FROM modulos_contenido WHERE id = ?", [id],
  );
  const quizzes = await ctx.almacen.consulta<{ id: string; titulo: string; settings: string; questions: string; seed_policy: number | null }>(
    "contenido", "SELECT id, titulo, settings, questions, seed_policy FROM quizzes WHERE modulo_id = ?", [id],
  );
  // Resoluciones: solo para el profesor dueño del módulo (los usuarios locales de profesor los crea cualquiera).
  const veRespuestas = p.rol === "TEACHER" && m.owner_user_id === p.id;
  return json({
    ...base(m),
    description: cont?.descripcion ?? "",
    theoryItems: parse(cont?.theory_items, [] as unknown[]),
    scoringConfig: parse(cont?.scoring_config, undefined as unknown),
    isLocked: false,
    missingDependencies,
    quizzes: quizzes.map((q) => {
      const s = parse(q.settings, {} as Record<string, unknown>);
      const preguntas = parse(q.questions, [] as Record<string, unknown>[]);
      return {
        id: q.id, title: q.titulo, type: s.type ?? "practica", mode: s.mode, visibility: s.visibility ?? "publico",
        questions: veRespuestas ? preguntas : preguntas.map(({ answerKey: _a, explanation: _e, ...resto }) => resto),
        seedPolicy: q.seed_policy ?? undefined,
        maxIntentos: s.maxIntentos ?? undefined, politicaNota: s.politicaNota, timerSegundos: s.timerSegundos ?? null,
        ocultarPuntos: s.ocultarPuntos === true,
      };
    }),
  });
}

/**
 * GET /api/plantillas/:id — la usan los cuestionarios que generan las preguntas en la web. El código de la plantilla
 * permite deducir las respuestas: se entrega solo si el módulo está desbloqueado, y a un profesor solo si el módulo
 * es suyo (igual que las resoluciones).
 */
export async function verPlantilla(ctx: Contexto, req: Request, id: string) {
  const p = await perfilDeSesion(ctx, req);
  if (!p) return error(401, "No autenticado");
  const [pl] = await ctx.almacen.consulta<{ id: string; modulo_id: string; nombre: string; materia: string | null; tags: string; codigo_dsl: string }>(
    "contenido", "SELECT id, modulo_id, nombre, materia, tags, codigo_dsl FROM plantillas WHERE id = ?", [id],
  );
  if (!pl) return error(404, "Plantilla no encontrada");
  const [m] = await ctx.almacen.consulta<FilaModulo>("contenido", `SELECT ${COLUMNAS} FROM modulos WHERE id = ?`, [pl.modulo_id]);
  const permitido = m && (p.rol === "TEACHER" ? m.owner_user_id === p.id : !(await candadosDe(ctx, p.id)).de(m.id).isLocked);
  if (!permitido) return error(403, "Sin permisos para ver esta plantilla");
  return json({
    id: pl.id, nombre: pl.nombre, materia: pl.materia ?? undefined, tags: parse(pl.tags, [] as string[]), codigoDsl: pl.codigo_dsl,
    visibility: "publica", publicAprobado: true, esOficial: m.origen === "oficial", ownerUserId: m.owner_user_id ?? "",
    version: 1, createdAt: m.created_at, updatedAt: m.updated_at,
  });
}
