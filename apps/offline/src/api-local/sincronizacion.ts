/**
 * Sincronización con la plataforma (fase 5), en las dos direcciones, con `POST /api/offline/sync`.
 *
 * - Subida: los eventos de la cola, en orden y de a tandas. Cada intento viaja con su semilla, su versión, sus
 *   respuestas y lo que vio la persona; el servidor lo vuelve a corregir y vale su nota. Si no coincide con la del
 *   dispositivo, el intento queda marcado para revisión (acá también se ve).
 * - Bajada: el progreso de la cuenta (se queda el mayor avance) y los intentos hechos en la web.
 * - Renovación: el permiso por otros 3 meses, con los roles de hoy. Si la contraseña cambió en la web, el perfil pide la
 *   nueva; si la cuenta está suspendida o dada de baja, se bloquea (los intentos se suben antes).
 *
 * Se autentica con el permiso firmado: la app no guarda tokens de la web.
 */
import type { Contexto } from "./contexto";
import { perfilDeSesion } from "./cuentas";
import { error, json } from "./http";
import { rolPrincipal, verificarPermiso } from "./permiso";
import { remoto } from "./plataforma";

const EVENTOS_POR_TANDA = 50;
const VUELTAS = 40;

type FilaPerfil = {
  id: string; tipo: string; estado: string; permiso: string | null; firma: string | null; sync_cursor: string | null;
};
type FilaEvento = { id: string; perfil_id: string; tipo: string; datos: string; creado: string };
type FilaIntento = {
  id: string; perfil_id: string; quiz_id: string; version_id: string; semilla: string | null; numero: number; estado: string;
  respuestas: string; grading: string | null; entrega: string | null; score: number; max_score: number; inicio: string;
  fin: string | null; sorteo_id: string | null;
};
type Resultado = { estado?: string; score?: number; maxScore?: number; revisar?: boolean; motivo?: string };
type IntentoDeLaWeb = {
  id: string; quizId: string; quizVersionId: string; moduleId: string | null; status: string; score: number; maxScore: number;
  startedAt: string; submittedAt: string | null; attemptNo: number | null; seed: string | null; answers: string | null;
  feedback: string | null; grading: string | null;
};
type Respuesta = {
  resultados?: Record<string, Resultado>;
  permiso?: { permiso: string; firma: string; vence: string } | null;
  progreso?: { moduloId: string; status: string; updatedAt: string }[];
  intentos?: IntentoDeLaWeb[];
  cursor?: string | null;
  mas?: boolean;
  code?: string;
  error?: string;
};

export type Resumen =
  | { estado: "ok"; subidos: number; bajados: number; paraRevisar: number; pendientes: number }
  | { estado: "sin-red" | "no-aplica" | "permiso-vencido" | "contrasena" | "bloqueado" | "en-curso"; pendientes: number; mensaje?: string };

const parse = <T>(s: string | null | undefined, porDefecto: T): T => {
  try {
    return s ? (JSON.parse(s) as T) : porDefecto;
  } catch {
    return porDefecto;
  }
};

const enCurso = new Set<string>();

async function pendientes(ctx: Contexto, perfilId: string) {
  const [{ n }] = await ctx.almacen.consulta<{ n: number }>(
    "progreso", "SELECT COUNT(*) AS n FROM eventos WHERE perfil_id = ? AND enviado = 0", [perfilId],
  );
  return n;
}

/** Lo que viaja de cada evento: un intento va completo, con lo que hace falta para volver a corregirlo. */
async function paraSubir(ctx: Contexto, e: FilaEvento) {
  if (e.tipo !== "intento") return { id: e.id, tipo: e.tipo, datos: parse(e.datos, {}) };
  const { intentoId } = parse<{ intentoId?: string }>(e.datos, {});
  const [i] = await ctx.almacen.consulta<FilaIntento>("progreso", "SELECT * FROM intentos WHERE id = ?", [intentoId ?? ""]);
  if (!i || !i.fin) return null;
  const entrega = parse<{ presentedIds?: string[]; generatedQuestions?: unknown[] }>(i.entrega, {});
  const grading = parse<{ events?: Record<string, unknown> }>(i.grading, {});
  return {
    id: e.id, tipo: "intento",
    datos: {
      id: i.id, quizId: i.quiz_id, quizVersionId: i.version_id, seed: i.semilla, attemptNo: i.numero,
      sorteo: i.sorteo_id ?? i.perfil_id, startedAt: i.inicio, submittedAt: i.fin, answers: parse(i.respuestas, {}),
      presentedIds: entrega.presentedIds, generatedQuestions: entrega.generatedQuestions, score: i.score, maxScore: i.max_score,
      ...(grading.events ? { events: grading.events } : {}),
    },
  };
}

/** Sin sesiones abiertas y con el estado que corresponda: para entrar hay que conectarse otra vez. */
async function cerrarPerfil(ctx: Contexto, perfilId: string, estado: "bloqueado" | "contrasena") {
  await ctx.almacen.lote("progreso", [
    { sql: "DELETE FROM sesiones WHERE perfil_id = ?", params: [perfilId] },
    { sql: "UPDATE perfiles SET estado = ? WHERE id = ?", params: [estado, perfilId] },
  ]);
}

async function aplicarResultados(ctx: Contexto, eventos: FilaEvento[], resultados: Record<string, Resultado>) {
  const s = [];
  for (const e of eventos) {
    const r = resultados[e.id];
    // Un error del servidor queda en la cola para la próxima vez.
    if (!r || r.estado === "error") continue;
    s.push({ sql: "UPDATE eventos SET enviado = 1, resultado = ? WHERE id = ?", params: [JSON.stringify(r), e.id] });
    if (e.tipo === "intento") {
      const { intentoId } = parse<{ intentoId?: string }>(e.datos, {});
      s.push({ sql: "UPDATE intentos SET sincronizado = 1, servidor = ? WHERE id = ?", params: [JSON.stringify(r), intentoId ?? ""] });
    }
  }
  if (s.length) await ctx.almacen.lote("progreso", s);
}

/** El permiso nuevo, si lo firmó el servidor para esta cuenta y este dispositivo. En el perfil gana el servidor. */
async function renovarPermiso(ctx: Contexto, perfilId: string, p: Respuesta["permiso"]) {
  if (!p) return;
  const datos = await verificarPermiso(ctx.config.clavePublica, p.permiso, p.firma);
  const [{ valor: dispositivo } = { valor: "" }] = await ctx.almacen.consulta<{ valor: string }>(
    "progreso", "SELECT valor FROM meta WHERE clave = 'dispositivo'",
  );
  if (!datos || datos.sub !== perfilId || datos.dispositivo !== dispositivo) return;
  await ctx.almacen.ejecutar(
    "progreso",
    `UPDATE perfiles SET permiso = ?, firma = ?, vence = ?, roles = ?, rol = ?, nombre = ?, email = ?, school_id = ?, menor = ?
     WHERE id = ?`,
    [p.permiso, p.firma, datos.vence, JSON.stringify(datos.roles), rolPrincipal(datos.roles),
      datos.nombre || datos.username || perfilId, datos.email, datos.schoolId, datos.menor ? 1 : 0, perfilId],
  );
}

/** El progreso de la web: se queda el mayor avance (un módulo completado no vuelve atrás). */
async function bajarProgreso(ctx: Contexto, perfilId: string, progreso: Respuesta["progreso"]) {
  if (!progreso?.length) return;
  await ctx.almacen.lote("progreso", progreso.flatMap((p) => {
    const estado = p.status === "completado" ? "completado" : "en_progreso";
    return [{
      sql: `INSERT INTO progreso_modulos (perfil_id, modulo_id, estado, progreso, actualizado) VALUES (?, ?, ?, ?, ?)
            ON CONFLICT(perfil_id, modulo_id) DO UPDATE SET estado = excluded.estado, progreso = excluded.progreso,
              actualizado = excluded.actualizado
            WHERE excluded.estado = 'completado' AND progreso_modulos.estado != 'completado'`,
      params: [perfilId, p.moduloId, estado, estado === "completado" ? 100 : 0, p.updatedAt || ctx.ahora().toISOString()],
    }];
  }));
}

/** Los intentos hechos en la web, para el historial. Los que salieron de este dispositivo ya están. Devuelve los nuevos. */
async function bajarIntentos(ctx: Contexto, perfilId: string, intentos: IntentoDeLaWeb[]) {
  if (!intentos.length) return 0;
  const ya = new Set((await ctx.almacen.consulta<{ id: string }>(
    "progreso", `SELECT id FROM intentos WHERE id IN (${intentos.map(() => "?").join(",")})`, intentos.map((a) => a.id),
  )).map((f) => f.id));
  await ctx.almacen.lote("progreso", intentos.map((a) => ({
    sql: `INSERT INTO intentos (id, perfil_id, modulo_id, quiz_id, version_id, semilla, numero, estado, respuestas, feedback, grading,
            score, max_score, inicio, fin, sincronizado, origen)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, 'web')
          ON CONFLICT(id) DO UPDATE SET estado = excluded.estado, feedback = excluded.feedback, grading = excluded.grading,
            score = excluded.score, max_score = excluded.max_score, fin = excluded.fin
          WHERE intentos.origen = 'web' AND intentos.perfil_id = excluded.perfil_id`,
    params: [a.id, perfilId, a.moduleId, a.quizId, a.quizVersionId, a.seed, a.attemptNo ?? 1, a.status, a.answers || "{}",
      a.feedback || "{}", a.grading, a.score ?? 0, a.maxScore ?? 0, a.startedAt, a.submittedAt],
  })));
  return intentos.filter((a) => !ya.has(a.id)).length;
}

/**
 * Sincroniza un perfil de la plataforma. Sin red no hace nada (los eventos siguen en la cola). Nunca corre dos veces a
 * la vez para el mismo perfil.
 */
export async function sincronizarPerfil(ctx: Contexto, perfilId: string): Promise<Resumen> {
  const [perfil] = await ctx.almacen.consulta<FilaPerfil>(
    "progreso", "SELECT id, tipo, estado, permiso, firma, sync_cursor FROM perfiles WHERE id = ?", [perfilId],
  );
  if (!perfil || perfil.tipo !== "plataforma" || !perfil.permiso || !perfil.firma) return { estado: "no-aplica", pendientes: 0 };
  if (perfil.estado !== "activo") return { estado: perfil.estado === "contrasena" ? "contrasena" : "bloqueado", pendientes: await pendientes(ctx, perfilId) };
  if (enCurso.has(perfilId)) return { estado: "en-curso", pendientes: await pendientes(ctx, perfilId) };
  enCurso.add(perfilId);
  try {
    let cursor = perfil.sync_cursor;
    let subidos = 0, bajados = 0, paraRevisar = 0;
    // El permiso puede renovarse en una vuelta: se lee de nuevo antes de cada pedido.
    let autorizacion = `Permiso ${perfil.permiso}.${perfil.firma}`;
    for (let vuelta = 0; vuelta < VUELTAS; vuelta++) {
      const eventos = await ctx.almacen.consulta<FilaEvento>(
        "progreso", "SELECT id, perfil_id, tipo, datos, creado FROM eventos WHERE perfil_id = ? AND enviado = 0 ORDER BY creado, rowid LIMIT ?",
        [perfilId, EVENTOS_POR_TANDA],
      );
      const subir = [];
      let avanzo = 0;
      for (const e of eventos) {
        const x = await paraSubir(ctx, e);
        if (x) subir.push(x);
        // Un intento que ya no está (se borró el perfil, por ejemplo) no tiene nada que subir.
        else {
          await ctx.almacen.ejecutar("progreso", "UPDATE eventos SET enviado = 1, resultado = '{\"estado\":\"ignorado\"}' WHERE id = ?", [e.id]);
          avanzo++;
        }
      }
      const r = await remoto(ctx, "/api/offline/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: autorizacion },
        body: JSON.stringify({ eventos: subir, desde: cursor }),
      });
      if (!r) return { estado: "sin-red", pendientes: await pendientes(ctx, perfilId) };
      const body = (await r.json().catch(() => ({}))) as Respuesta;
      if (body.resultados) {
        await aplicarResultados(ctx, eventos, body.resultados);
        for (const e of subir) {
          const res = body.resultados[e.id];
          if (res && res.estado !== "error") {
            subidos++;
            avanzo++;
          }
          if (res?.revisar) paraRevisar++;
        }
      }
      if (r.status === 401 && body.code === "CONTRASENA_CAMBIADA") {
        await cerrarPerfil(ctx, perfilId, "contrasena");
        return { estado: "contrasena", pendientes: await pendientes(ctx, perfilId), mensaje: "La contraseña cambió en la plataforma. Entrá con la nueva." };
      }
      if (r.status === 401) {
        return { estado: "permiso-vencido", pendientes: await pendientes(ctx, perfilId), mensaje: "Volvé a entrar con tu contraseña para sincronizar." };
      }
      if (r.status === 403) {
        await cerrarPerfil(ctx, perfilId, "bloqueado");
        return { estado: "bloqueado", pendientes: await pendientes(ctx, perfilId), mensaje: body.error ?? "La cuenta está suspendida o fue dada de baja." };
      }
      if (r.status !== 200) {
        await ctx.almacen.ejecutar("progreso", "UPDATE perfiles SET sync_error = ? WHERE id = ?", [`${r.status} ${body.error ?? ""}`.trim(), perfilId]);
        return { estado: "sin-red", pendientes: await pendientes(ctx, perfilId), mensaje: body.error ?? "La plataforma no respondió bien. Probá más tarde." };
      }

      await renovarPermiso(ctx, perfilId, body.permiso);
      if (body.permiso) autorizacion = `Permiso ${body.permiso.permiso}.${body.permiso.firma}`;
      await bajarProgreso(ctx, perfilId, body.progreso);
      bajados += await bajarIntentos(ctx, perfilId, body.intentos ?? []);
      cursor = body.cursor ?? cursor;
      await ctx.almacen.ejecutar("progreso", "UPDATE perfiles SET sync_cursor = ?, sync_ultima = ?, sync_error = NULL WHERE id = ?", [
        cursor, ctx.ahora().toISOString(), perfilId,
      ]);
      const quedan = await pendientes(ctx, perfilId);
      // Si en una vuelta no avanzó la cola (todo dio error), se sigue la próxima vez.
      if (!body.mas && (quedan === 0 || avanzo === 0)) return { estado: "ok", subidos, bajados, paraRevisar, pendientes: quedan };
    }
    return { estado: "ok", subidos, bajados, paraRevisar, pendientes: await pendientes(ctx, perfilId) };
  } finally {
    enCurso.delete(perfilId);
  }
}

/**
 * Antes de bloquear un perfil (el servidor dijo que la cuenta está suspendida), se suben sus intentos: el servidor
 * los aplica igual y responde 403.
 */
export async function subirAntesDeBloquear(ctx: Contexto, identificador: string) {
  const [p] = await ctx.almacen.consulta<{ id: string }>(
    "progreso", "SELECT id FROM perfiles WHERE tipo = 'plataforma' AND estado = 'activo' AND (username = ? OR email = ? COLLATE NOCASE)",
    [identificador, identificador],
  );
  if (p) await sincronizarPerfil(ctx, p.id).catch(() => undefined);
}

/** POST /api/offline/sincronizar — «Sincronizar ahora». */
export async function sincronizarAhora(ctx: Contexto, req: Request) {
  const p = await perfilDeSesion(ctx, req);
  if (!p) return error(401, "No autenticado");
  if (p.tipo === "local") {
    return error(400, "Los datos de un usuario local no salen del dispositivo. Para subirlos, vinculalo a una cuenta de la plataforma.");
  }
  const r = await sincronizarPerfil(ctx, p.id);
  if (r.estado === "sin-red") return error(503, r.mensaje ?? "Sin conexión: se sincroniza la próxima vez que haya internet.", { code: "SIN_CONEXION", ...r });
  return json(r);
}

/** GET /api/offline/sincronizacion — cómo está la sincronización del perfil. */
export async function estadoDeSincronizacion(ctx: Contexto, req: Request) {
  const p = await perfilDeSesion(ctx, req);
  if (!p) return error(401, "No autenticado");
  const [f] = await ctx.almacen.consulta<{ sync_ultima: string | null; sync_error: string | null; vence: string | null }>(
    "progreso", "SELECT sync_ultima, sync_error, vence FROM perfiles WHERE id = ?", [p.id],
  );
  const [{ n: paraRevisar }] = await ctx.almacen.consulta<{ n: number }>(
    "progreso", "SELECT COUNT(*) AS n FROM intentos WHERE perfil_id = ? AND servidor LIKE '%\"revisar\":true%'", [p.id],
  );
  const [{ n: intentosSinSubir }] = await ctx.almacen.consulta<{ n: number }>(
    "progreso", "SELECT COUNT(*) AS n FROM intentos WHERE perfil_id = ? AND origen = 'app' AND fin IS NOT NULL AND sincronizado = 0", [p.id],
  );
  return json({
    tipo: p.tipo, pendientes: await pendientes(ctx, p.id), intentosSinSubir, paraRevisar,
    ultima: f?.sync_ultima ?? null, error: f?.sync_error ?? null, permisoVence: p.tipo === "plataforma" ? (f?.vence ?? null) : null,
  });
}
