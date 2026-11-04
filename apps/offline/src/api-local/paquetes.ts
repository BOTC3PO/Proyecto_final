/**
 * Paquetes del dispositivo: una materia del temario oficial o el diccionario de un idioma (ver
 * `nucleo/src/paquetes.rs` para el formato).
 *
 * - Con red se bajan de la plataforma (`GET /api/offline/paquetes` y sus archivos, que son públicos).
 * - Sin red se importan desde un archivo (por ejemplo, copiado de un pendrive): la web manda el archivo como cuerpo
 *   de `POST /api/offline/paquetes/importar`.
 *
 * El archivo pasa a Rust por partes, así un diccionario grande no tiene que entrar entero en la memoria del WebView.
 */
import type { Instalado } from "./almacen";
import { aleatorio } from "./claves";
import type { Contexto } from "./contexto";
import { perfilDeSesion } from "./cuentas";
import { actualizarEscuela } from "./escuela";
import { error, json } from "./http";
import { remoto } from "./plataforma";

// 2 MB por parte: en base64 son unos 2,7 MB por llamada a Rust, cómodo también en un celular.
const PARTE = 2 << 20;

export type Disponible = {
  id: string;
  tipo: "contenido" | "diccionario";
  titulo: string;
  version: string;
  archivo: string;
  bytes: number;
  sha256: string;
  materia?: string;
  idioma?: string;
  modulos?: number;
  palabras?: number;
};

/** Descargas en curso: bytes recibidos y total, para la barra de avance. */
const enCurso = new Map<string, { recibidos: number; total: number }>();

async function recibir(ctx: Contexto, recibido: string, cuerpo: ReadableStream<Uint8Array>, avance?: (n: number) => void) {
  const lector = cuerpo.getReader();
  let pendiente: Uint8Array[] = [];
  let enEspera = 0;
  let primera = true;
  let total = 0;
  const mandar = async () => {
    const parte = new Uint8Array(enEspera);
    let i = 0;
    for (const p of pendiente) {
      parte.set(p, i);
      i += p.length;
    }
    await ctx.almacen.recibirParte(recibido, parte, primera);
    primera = false;
    pendiente = [];
    enEspera = 0;
  };
  for (;;) {
    const { done, value } = await lector.read();
    if (done) break;
    pendiente.push(value);
    enEspera += value.length;
    total += value.length;
    avance?.(total);
    if (enEspera >= PARTE) await mandar();
  }
  if (enEspera > 0 || primera) await mandar();
  return total;
}

async function registrar(ctx: Contexto, i: Instalado) {
  await ctx.almacen.ejecutar(
    "contenido",
    `INSERT OR REPLACE INTO paquetes_instalados (id, tipo, version, titulo, idioma, origen, sha256, bytes, modulos, instalado)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [i.id, i.tipo, i.version, i.titulo, i.idioma, i.origen, i.sha256, i.bytes, i.modulos, ctx.ahora().toISOString()],
  );
}

async function indiceRemoto(ctx: Contexto): Promise<Disponible[] | null> {
  const r = await remoto(ctx, "/api/offline/paquetes");
  if (!r?.ok) return null;
  const d = (await r.json().catch(() => null)) as { paquetes?: Disponible[] } | null;
  return Array.isArray(d?.paquetes) ? d.paquetes : null;
}

/** Recibe un archivo de paquete e instala lo que trae. Lo usan la descarga, la importación y el arranque. */
export async function instalarDesde(ctx: Contexto, recibido: string, cuerpo: ReadableStream<Uint8Array>, opciones: { esperado?: string; sha256?: string } = {}, avance?: (n: number) => void) {
  await recibir(ctx, recibido, cuerpo, avance);
  const inst = await ctx.almacen.instalarPaquete(recibido, opciones);
  await registrar(ctx, inst);
  return inst;
}

const mensaje = (e: unknown) => (e instanceof Error ? e.message : String(e));

/** GET /api/offline/paquetes — los instalados y, con red, los que se pueden bajar. */
export async function listarPaquetes(ctx: Contexto, req: Request) {
  if (!(await perfilDeSesion(ctx, req))) return error(401, "No autenticado");
  const instalados = await ctx.almacen.consulta<{ id: string; sha256: string | null }>(
    "contenido",
    "SELECT * FROM paquetes_instalados ORDER BY tipo, titulo",
  );
  const porId = new Map(instalados.map((i) => [i.id, i]));
  const indice = await indiceRemoto(ctx);
  const disponibles = indice?.map((p) => {
    const ya = porId.get(p.id);
    return { ...p, estado: !ya ? "disponible" : ya.sha256 === p.sha256 ? "instalado" : "actualizable" };
  });
  return json({ instalados, disponibles: disponibles ?? null, conexion: indice !== null, enCurso: Object.fromEntries(enCurso) });
}

/** POST /api/offline/paquetes/:id/descargar */
export async function descargarPaquete(ctx: Contexto, req: Request, id: string) {
  if (!(await perfilDeSesion(ctx, req))) return error(401, "No autenticado");
  if (enCurso.has(id)) return error(409, "Ese paquete ya se está descargando.");
  const indice = await indiceRemoto(ctx);
  if (!indice) return error(503, "Para bajar paquetes hace falta conexión. Sin red, importalos desde un archivo.", { code: "SIN_CONEXION" });
  const p = indice.find((x) => x.id === id);
  if (!p) return error(404, "Ese paquete no existe.");
  enCurso.set(id, { recibidos: 0, total: p.bytes });
  try {
    const r = await remoto(ctx, `/api/offline/paquetes/archivo/${encodeURIComponent(p.archivo)}`);
    if (!r?.ok || !r.body) return error(503, "No se pudo bajar el paquete. Probá de nuevo.", { code: "SIN_CONEXION" });
    return json(await instalarDesde(ctx, id, r.body, { esperado: id, sha256: p.sha256 }, (n) => enCurso.set(id, { recibidos: n, total: p.bytes })));
  } catch (e) {
    return error(400, mensaje(e));
  } finally {
    enCurso.delete(id);
  }
}

/** POST /api/offline/paquetes/importar — el cuerpo es el archivo del paquete. */
export async function importarPaquete(ctx: Contexto, req: Request) {
  if (!(await perfilDeSesion(ctx, req))) return error(401, "No autenticado");
  if (!req.body) return error(400, "Falta el archivo del paquete.");
  try {
    return json(await instalarDesde(ctx, `importado-${aleatorio(4)}`, req.body));
  } catch (e) {
    return error(400, mensaje(e));
  }
}

/** DELETE /api/offline/paquetes/:id — el progreso de esos módulos no se borra. */
export async function quitarPaquete(ctx: Contexto, req: Request, id: string) {
  if (!(await perfilDeSesion(ctx, req))) return error(401, "No autenticado");
  const [p] = await ctx.almacen.consulta<{ tipo: string; idioma: string | null }>("contenido", "SELECT tipo, idioma FROM paquetes_instalados WHERE id = ?", [id]);
  if (!p) return error(404, "Ese paquete no está instalado.");
  if (p.tipo === "diccionario" && p.idioma) await ctx.almacen.borrarDiccionario(p.idioma);
  const del = "SELECT id FROM modulos WHERE paquete = ?";
  await ctx.almacen.lote("contenido", [
    { sql: `DELETE FROM plantillas WHERE modulo_id IN (${del})`, params: [id] },
    { sql: `DELETE FROM quizzes WHERE modulo_id IN (${del})`, params: [id] },
    { sql: `DELETE FROM modulos_contenido WHERE id IN (${del})`, params: [id] },
    { sql: "DELETE FROM modulos WHERE paquete = ?", params: [id] },
    { sql: "DELETE FROM paquetes_instalados WHERE id = ?", params: [id] },
  ]);
  return json({ ok: true });
}

/** POST /api/offline/escuela/actualizar — baja de nuevo los módulos de la escuela de la cuenta. */
export async function actualizarMiEscuela(ctx: Contexto, req: Request) {
  const p = await perfilDeSesion(ctx, req);
  if (!p) return error(401, "No autenticado");
  return actualizarEscuela(ctx, p.id);
}
