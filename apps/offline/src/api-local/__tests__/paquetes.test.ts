/**
 * Fase 3: paquetes (descarga, importación, quitar), diccionario sin conexión y módulos de la escuela.
 */
import crypto from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import zlib from "node:zlib";
import Database from "better-sqlite3";
import { beforeEach, describe, expect, it } from "vitest";
import { crearContexto, type Contexto } from "../contexto";
import { prepararBase, prepararBases } from "../esquema";
import { crearServidorLocal } from "../servidor";
import { cargarManifiesto } from "../temario";
import { almacenNode } from "../../node/almacen-node";

const BASE = "https://api.virtualbook.local";
const REMOTA = "https://plataforma.prueba/api";
const dsl = `tipo: multiple-choice\nenunciado: "¿2 + 2?"\nopciones: ["4", "5"]\nrespuesta: "4"`;
const tema = (id: string, deps: string[] = []) => ({ id, materia: "matematica", ruta: id, titulo: id, teoria: `Teoría ${id}`, nivel: "1", dependencias: deps, preguntas: [{ titulo: "p", dsl }] });

/** Arma un paquete igual que `scripts/generar-paquetes.ts`. */
async function paqueteDeTemario(id: string, temas: ReturnType<typeof tema>[]) {
  const archivo = path.join(fs.mkdtempSync(path.join(os.tmpdir(), "vb-paq-")), "p.sqlite");
  const a = almacenNode({ contenido: archivo });
  await prepararBase(a, "contenido");
  await cargarManifiesto(crearContexto(a), { temas } as never, { origen: "oficial", paquete: id });
  const db = a.bases.contenido;
  db.exec("CREATE TABLE paquete (clave TEXT PRIMARY KEY, valor TEXT NOT NULL)");
  for (const [k, v] of Object.entries({ formato: "1", id, tipo: "contenido", origen: "oficial", version: "1.0", titulo: "Matemática" })) {
    db.prepare("INSERT INTO paquete VALUES (?, ?)").run(k, v);
  }
  db.close();
  return zlib.gzipSync(fs.readFileSync(archivo));
}

function paqueteDeDiccionario(idioma: string, palabras: [string, string][]) {
  const archivo = path.join(fs.mkdtempSync(path.join(os.tmpdir(), "vb-dic-")), "d.sqlite");
  const db = new Database(archivo);
  db.exec("CREATE TABLE words (lang TEXT NOT NULL, word TEXT NOT NULL, definitions TEXT, synonyms TEXT, translations TEXT, PRIMARY KEY (lang, word))");
  for (const [w, d] of palabras) db.prepare("INSERT INTO words VALUES (?, ?, ?, NULL, NULL)").run(idioma, w, d);
  db.exec("CREATE TABLE paquete (clave TEXT PRIMARY KEY, valor TEXT NOT NULL)");
  for (const [k, v] of Object.entries({ formato: "1", id: `diccionario-${idioma}`, tipo: "diccionario", idioma, version: "2026-11-04", titulo: "Esperanto" })) {
    db.prepare("INSERT INTO paquete VALUES (?, ?)").run(k, v);
  }
  db.close();
  return zlib.gzipSync(fs.readFileSync(archivo));
}

const sha = (b: Buffer) => crypto.createHash("sha256").update(b).digest("hex");

let ctx: Contexto;
let atender: (r: Request) => Promise<Response>;
let archivos: Record<string, Buffer>;
let red: boolean;
let escuela: { status: number; cuerpo: unknown };
let token: string;
/** Si está, el servidor manda estos bytes en lugar del archivo del índice. */
let dañado: Buffer | null;

const pedir = async (metodo: string, ruta: string, cuerpo?: unknown, crudo?: BodyInit) => {
  const r = await atender(new Request(`${BASE}${ruta}`, {
    method: metodo,
    headers: { Authorization: `Bearer ${token}`, ...(crudo ? {} : { "Content-Type": "application/json" }) },
    body: crudo ?? (cuerpo === undefined ? undefined : JSON.stringify(cuerpo)),
  }));
  return { status: r.status, datos: await r.json() };
};

beforeEach(async () => {
  red = true;
  dañado = null;
  archivos = {
    "temario-matematica-1.0.sqlite.gz": await paqueteDeTemario("temario-matematica", [tema("cont-mat--a"), tema("cont-mat--b", ["cont-mat--a"])]),
    "diccionario-eo-2026-11-04.sqlite.gz": paqueteDeDiccionario("eo", [["hundo", '["perro"]'], ["hundino", '["perra"]'], ["kato", '["gato"]']]),
  };
  escuela = { status: 200, cuerpo: { modulos: [] } };
  const indice = () => ({
    formato: 1,
    paquetes: [
      { id: "temario-matematica", tipo: "contenido", titulo: "Matemática", version: "1.0", archivo: "temario-matematica-1.0.sqlite.gz",
        bytes: archivos["temario-matematica-1.0.sqlite.gz"].length, sha256: sha(archivos["temario-matematica-1.0.sqlite.gz"]) },
      { id: "diccionario-eo", tipo: "diccionario", titulo: "Esperanto", version: "2026-11-04", archivo: "diccionario-eo-2026-11-04.sqlite.gz",
        bytes: archivos["diccionario-eo-2026-11-04.sqlite.gz"].length, sha256: sha(archivos["diccionario-eo-2026-11-04.sqlite.gz"]), idioma: "eo" },
    ],
  });
  const servidor = async (url: RequestInfo | URL) => {
    if (!red) throw new TypeError("Failed to fetch");
    const ruta = String(url).replace(REMOTA, "");
    if (ruta === "/api/offline/paquetes") return Response.json(indice());
    const m = /^\/api\/offline\/paquetes\/archivo\/(.+)$/.exec(ruta);
    if (m && archivos[decodeURIComponent(m[1])]) return new Response(new Uint8Array(dañado ?? archivos[decodeURIComponent(m[1])]));
    if (ruta === "/api/offline/escuela") return Response.json(escuela.cuerpo, { status: escuela.status });
    return Response.json({ error: "not found" }, { status: 404 });
  };
  ctx = crearContexto(almacenNode(), { iteraciones: 1000, remoto: { base: REMOTA, fetch: servidor as typeof fetch } });
  await prepararBases(ctx.almacen);
  atender = crearServidorLocal(ctx);
  token = (await pedir("POST", "/api/auth/register", { username: "ana", password: "contraseña-larga" })).datos.accessToken;
});

describe("paquetes", () => {
  it("con red lista lo disponible y descarga una materia", async () => {
    const antes = await pedir("GET", "/api/offline/paquetes");
    expect(antes.datos.conexion).toBe(true);
    expect(antes.datos.disponibles.map((p: { estado: string }) => p.estado)).toEqual(["disponible", "disponible"]);

    const d = await pedir("POST", "/api/offline/paquetes/temario-matematica/descargar");
    expect(d.status).toBe(200);
    expect(d.datos).toMatchObject({ id: "temario-matematica", tipo: "contenido", modulos: 2 });
    const mods = await pedir("GET", "/api/modulos");
    expect(mods.datos.items.map((m: { id: string; isLocked: boolean }) => [m.id, m.isLocked])).toEqual(
      expect.arrayContaining([["cont-mat--a", false], ["cont-mat--b", true]]),
    );
    const despues = await pedir("GET", "/api/offline/paquetes");
    expect(despues.datos.disponibles[0].estado).toBe("instalado");
  });

  it("si el archivo llega distinto del índice (hash), no se instala", async () => {
    dañado = Buffer.from(archivos["temario-matematica-1.0.sqlite.gz"]);
    dañado[dañado.length - 5] ^= 0xff;
    const r = await pedir("POST", "/api/offline/paquetes/temario-matematica/descargar");
    expect(r.status).toBe(400);
    expect(r.datos.error).toMatch(/hash/);
    expect((await pedir("GET", "/api/modulos")).datos.items).toHaveLength(0);
  });

  it("sin red se importa desde un archivo y se puede quitar", async () => {
    red = false;
    expect((await pedir("GET", "/api/offline/paquetes")).datos).toMatchObject({ conexion: false, disponibles: null });
    expect((await pedir("POST", "/api/offline/paquetes/temario-matematica/descargar")).status).toBe(503);
    const imp = await pedir("POST", "/api/offline/paquetes/importar", undefined, new Blob([new Uint8Array(archivos["temario-matematica-1.0.sqlite.gz"])]));
    expect(imp.datos).toMatchObject({ id: "temario-matematica", modulos: 2 });
    expect((await pedir("GET", "/api/modulos")).datos.items).toHaveLength(2);
    expect((await pedir("DELETE", "/api/offline/paquetes/temario-matematica")).status).toBe(200);
    expect((await pedir("GET", "/api/modulos")).datos.items).toHaveLength(0);
    expect((await pedir("GET", "/api/offline/paquetes")).datos.instalados).toEqual([]);
  });

  it("un archivo que no es un paquete se rechaza", async () => {
    const r = await pedir("POST", "/api/offline/paquetes/importar", undefined, new Blob(["hola"]));
    expect(r.status).toBe(400);
  });

  it("hace falta iniciar sesión", async () => {
    token = "otro";
    expect((await pedir("GET", "/api/offline/paquetes")).status).toBe(401);
  });
});

describe("diccionario sin conexión", () => {
  it("responde como el servidor con el idioma descargado", async () => {
    const sin = await pedir("GET", "/api/dictionary/lookup?lang=eo&word=hundo");
    expect(sin.datos).toMatchObject({ found: false, code: "DICCIONARIO_NO_INSTALADO" });
    await pedir("POST", "/api/offline/paquetes/diccionario-eo/descargar");
    red = false;
    expect((await pedir("GET", "/api/dictionary/languages")).datos).toEqual({ languages: ["eo"] });
    const r = await pedir("GET", "/api/dictionary/lookup?lang=eo&word=hundo");
    expect(r.datos).toEqual({ found: true, entry: { word: "hundo", definitions: '["perro"]', synonyms: null, translations: null } });
    const p = await pedir("GET", "/api/dictionary/prefix?lang=eo&q=hund");
    expect(p.datos.entries.map((e: { word: string }) => e.word)).toEqual(["hundino", "hundo"]);
    expect((await pedir("GET", "/api/dictionary/lookup?lang=eo&word=nenio")).datos).toEqual({ found: false });
    await pedir("DELETE", "/api/offline/paquetes/diccionario-eo");
    expect((await pedir("GET", "/api/dictionary/languages")).datos).toEqual({ languages: [] });
  });
});

describe("módulos de la escuela", () => {
  const fila = (id: string) => ({ id, titulo: `Módulo ${id}`, theoryItems: '[{"title":"Teoría"}]', visibility: "escuela", schoolId: "esc-1", createdAt: "2026-11-01", updatedAt: "2026-11-02" });

  async function cuentaDePlataforma() {
    // Perfil de la plataforma ya activado (la activación se prueba en plataforma.test.ts).
    await ctx.almacen.ejecutar("progreso", "UPDATE perfiles SET tipo = 'plataforma', permiso = 'p', firma = 'f' WHERE username = 'ana'");
  }

  it("se bajan con la cuenta de la plataforma, sin pisar el temario oficial, y se reemplazan al actualizar", async () => {
    expect((await pedir("POST", "/api/offline/escuela/actualizar")).status).toBe(400); // usuario local
    await cuentaDePlataforma();
    escuela.cuerpo = { actualizado: "2026-11-02", modulos: [fila("esc-a"), fila("esc-b"), fila("cont-mat--a")] };
    const r = await pedir("POST", "/api/offline/escuela/actualizar");
    expect(r.datos).toEqual({ ok: true, modulos: 2 });
    const [m] = await ctx.almacen.consulta("contenido", "SELECT origen, paquete FROM modulos WHERE id = 'esc-a'");
    expect(m.origen).toBe("escuela");

    escuela.cuerpo = { actualizado: "2026-11-03", modulos: [fila("esc-b")] };
    await pedir("POST", "/api/offline/escuela/actualizar");
    const ids = (await ctx.almacen.consulta<{ id: string }>("contenido", "SELECT id FROM modulos")).map((x) => x.id);
    expect(ids).toEqual(["esc-b"]);
  });

  it("si la cuenta fue suspendida, el perfil se bloquea", async () => {
    await cuentaDePlataforma();
    escuela = { status: 403, cuerpo: { error: "Account suspended", code: "BANNED" } };
    expect((await pedir("POST", "/api/offline/escuela/actualizar")).status).toBe(403);
    const [p] = await ctx.almacen.consulta("progreso", "SELECT estado FROM perfiles WHERE username = 'ana'");
    expect(p.estado).toBe("bloqueado");
    expect((await pedir("GET", "/api/auth/me")).status).toBe(401);
  });
});

describe("partes en base64", () => {
  it("codifica igual que Node, también partes grandes", async () => {
    const { aBase64 } = await import("../almacen");
    const datos = crypto.randomBytes(3 * 0x8000 + 17);
    expect(aBase64(new Uint8Array(datos))).toBe(datos.toString("base64"));
  });
});
