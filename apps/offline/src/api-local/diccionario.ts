/**
 * `/api/dictionary/*` sin conexión, sobre los diccionarios instalados (un paquete por idioma). Mismas respuestas
 * que `api/src/routes/dictionary.ts`; un idioma sin instalar responde como una palabra que no está, con
 * `code: "DICCIONARIO_NO_INSTALADO"` para que se pueda ofrecer la descarga.
 */
import type { Contexto } from "./contexto";
import { error, json } from "./http";

const COLUMNAS = "word, definitions, synonyms, translations";

// Igual que `nextPrefixEnd` de api/src/db/sqliteDictionary.ts: el primer texto que ya no empieza con el prefijo.
export const finDelPrefijo = (prefijo: string) => {
  const letras = Array.from(prefijo);
  const ultima = letras.pop();
  const cp = ultima?.codePointAt(0);
  if (cp === undefined || cp >= 0x10ffff) return `${prefijo}￿`;
  return `${letras.join("")}${String.fromCodePoint(cp + 1)}`;
};

const idioma = (v: string | null) => {
  const l = (v ?? "").trim().toLowerCase();
  return l.length >= 2 && l.length <= 10 && /^[a-z0-9_-]+$/.test(l) ? l : null;
};

async function instalados(ctx: Contexto): Promise<string[]> {
  const filas = await ctx.almacen.consulta<{ idioma: string }>(
    "contenido",
    "SELECT idioma FROM paquetes_instalados WHERE tipo = 'diccionario' AND idioma IS NOT NULL ORDER BY idioma",
  );
  return filas.map((f) => f.idioma);
}

export async function idiomas(ctx: Contexto) {
  return json({ languages: await instalados(ctx) });
}

export async function salud(ctx: Contexto) {
  return json({ ok: true, kind: "sin-conexion", languages: await instalados(ctx) });
}

const noInstalado = (l: string, vacio: Record<string, unknown>) =>
  json({ ...vacio, code: "DICCIONARIO_NO_INSTALADO", error: `El diccionario de «${l}» no está descargado en este dispositivo.` });

export async function buscar(ctx: Contexto, req: Request) {
  const q = new URL(req.url).searchParams;
  const l = idioma(q.get("lang"));
  const palabra = (q.get("word") ?? "").trim();
  if (!l) return error(400, "invalid lang (expected 2-10 chars)");
  if (!palabra || palabra.length > 128) return error(400, "invalid word (expected 1-128 chars)");
  if (!(await instalados(ctx)).includes(l)) return noInstalado(l, { found: false });
  const [entry] = await ctx.almacen.consultaDiccionario(l, `SELECT ${COLUMNAS} FROM words WHERE lang = ? AND word = ? LIMIT 1`, [l, palabra]);
  return json(entry ? { found: true, entry } : { found: false });
}

export async function prefijo(ctx: Contexto, req: Request) {
  const q = new URL(req.url).searchParams;
  const l = idioma(q.get("lang"));
  const p = (q.get("q") ?? "").trim();
  const n = Number.parseInt(q.get("limit") ?? "", 10);
  const limite = Number.isFinite(n) ? Math.min(2000, Math.max(1, n)) : 50;
  if (!l) return error(400, "invalid lang (expected 2-10 chars)");
  if (!p || p.length > 64) return error(400, "invalid q (expected 1-64 chars)");
  if (!(await instalados(ctx)).includes(l)) return noInstalado(l, { count: 0, entries: [] });
  const entries = await ctx.almacen.consultaDiccionario(
    l,
    `SELECT ${COLUMNAS} FROM words WHERE lang = ? AND word >= ? AND word < ? ORDER BY word LIMIT ?`,
    [l, p, finDelPrefijo(p), limite],
  );
  return json({ count: entries.length, entries });
}
