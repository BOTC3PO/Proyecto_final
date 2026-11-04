/**
 * Genera los paquetes de la app sin conexión (formato en `nucleo/src/paquetes.rs`) y su índice.
 *
 *   pnpm paquetes --salida DIR [--temario ~/proyectos/temario-oficial] [--materias fisica,quimica]
 *                 [--diccionario RUTA/Diccionario.sqlite] [--idiomas es,en] [--sin-temario]
 *
 * - Temario: un paquete por materia, armado con la misma carga que usa la app (`cargarManifiesto`), así lo que se
 *   instala queda igual que si se hubiera cargado en el dispositivo. Sin `--temario` usa `content/material` de
 *   este repositorio. La versión sale del archivo `VERSION` del temario y las fechas de los módulos, de su último
 *   commit: con el mismo temario, el mismo paquete (y el mismo hash).
 * - Diccionario: un paquete por idioma con la tabla `words` del diccionario de la plataforma. El original se abre
 *   en modo de solo lectura.
 *
 * El índice (`indice.json`) se actualiza: lo que no se regenera queda como estaba.
 */
import { execFileSync } from "node:child_process";
import crypto from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { pipeline } from "node:stream/promises";
import zlib from "node:zlib";
import Database from "better-sqlite3";
import { nombreMateria } from "../../web/src/lib/nombreMateria";
import { crearContexto } from "../src/api-local/contexto";
import { prepararBase } from "../src/api-local/esquema";
import type { Disponible } from "../src/api-local/paquetes";
import { cargarManifiesto } from "../src/api-local/temario";
import { almacenNode } from "../src/node/almacen-node";

const aqui = path.dirname(new URL(import.meta.url).pathname);
const REPO = path.resolve(aqui, "../../..");

const IDIOMAS: Record<string, string> = {
  ar: "Árabe", de: "Alemán", en: "Inglés", eo: "Esperanto", es: "Español", fr: "Francés", hi: "Hindi", it: "Italiano",
  ja: "Japonés", ko: "Coreano", la: "Latín", pt: "Portugués", ru: "Ruso", zh: "Chino",
};

function argumentos() {
  const a = process.argv.slice(2);
  const valor = (n: string) => {
    const i = a.indexOf(`--${n}`);
    return i >= 0 ? a[i + 1] : undefined;
  };
  const salida = valor("salida");
  if (!salida) {
    console.error("Falta --salida DIR");
    process.exit(1);
  }
  const lista = (n: string) => valor(n)?.split(",").map((x) => x.trim()).filter(Boolean);
  return {
    salida: path.resolve(salida),
    temario: valor("temario") ? path.resolve(valor("temario")!.replace(/^~/, os.homedir())) : null,
    materias: lista("materias"),
    diccionario: valor("diccionario") ? path.resolve(valor("diccionario")!.replace(/^~/, os.homedir())) : null,
    idiomas: lista("idiomas"),
    sinTemario: a.includes("--sin-temario"),
  };
}

/** Sin tildes ni eñes, para el nombre del archivo: «diseño» → «diseno». */
const slug = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9-]+/g, "-");

async function comprimir(origen: string, destino: string) {
  await pipeline(fs.createReadStream(origen), zlib.createGzip({ level: 9 }), fs.createWriteStream(destino));
  const datos = fs.readFileSync(destino);
  return { bytes: datos.length, sha256: crypto.createHash("sha256").update(datos).digest("hex") };
}

function sellar(ruta: string, meta: Record<string, string>) {
  const db = new Database(ruta);
  db.exec("CREATE TABLE paquete (clave TEXT PRIMARY KEY, valor TEXT NOT NULL)");
  const ins = db.prepare("INSERT INTO paquete (clave, valor) VALUES (?, ?)");
  for (const [k, v] of Object.entries({ formato: "1", ...meta })) ins.run(k, v);
  db.exec("VACUUM");
  db.close();
}

async function paquetesDelTemario(o: ReturnType<typeof argumentos>, tmp: string): Promise<Disponible[]> {
  const exportador = o.temario
    ? path.join(o.temario, "temario/_herramientas/exportar_manifiesto.py")
    : path.join(REPO, "content/material/_qa_tools/exportar_manifiesto.py");
  const json = path.join(tmp, "manifiesto.json");
  // Siempre el temario entero: filtrado por materia, el exportador deja afuera los exámenes jefe y los libros.
  execFileSync("python3", ["-I", exportador, json], { stdio: ["ignore", "ignore", "inherit"] });
  const manifiesto = JSON.parse(fs.readFileSync(json, "utf8"));
  const raiz = o.temario ?? REPO;
  const version = o.temario ? fs.readFileSync(path.join(o.temario, "VERSION"), "utf8").trim() : "dev";
  const fecha = new Date(execFileSync("git", ["-C", raiz, "log", "-1", "--format=%cI"], { encoding: "utf8" }).trim());
  const materias = [...new Set((manifiesto.temas as { materia: string }[]).map((t) => t.materia))]
    .filter((m) => !o.materias || o.materias.includes(m))
    .sort();

  const salida: Disponible[] = [];
  for (const materia of materias) {
    const id = `temario-${slug(materia)}`;
    const base = path.join(tmp, `${id}.sqlite`);
    const almacen = almacenNode({ contenido: base });
    await prepararBase(almacen, "contenido");
    const ctx = crearContexto(almacen, { ahora: () => fecha });
    const r = await cargarManifiesto(ctx, manifiesto, { origen: "oficial", paquete: id, materias: [materia] });
    if (r.errores.length) console.warn(`${materia}: ${r.errores.length} errores en el cuestionario`, r.errores.slice(0, 3));
    almacen.bases.contenido.close();
    almacen.bases.progreso.close();
    const titulo = nombreMateria(materia);
    sellar(base, { id, tipo: "contenido", origen: "oficial", version, titulo, materia });
    const archivo = `${id}-${version}.sqlite.gz`;
    const { bytes, sha256 } = await comprimir(base, path.join(o.salida, archivo));
    salida.push({ id, tipo: "contenido", titulo, version, archivo, bytes, sha256, materia, modulos: r.modulos });
    console.log(`${archivo}: ${r.modulos} módulos, ${(bytes / 1e6).toFixed(1)} MB`);
  }
  return salida;
}

async function paquetesDelDiccionario(o: ReturnType<typeof argumentos>, tmp: string): Promise<Disponible[]> {
  if (!o.diccionario) return [];
  const origen = new Database(o.diccionario, { readonly: true, fileMustExist: true });
  const version = fs.statSync(o.diccionario).mtime.toISOString().slice(0, 10);
  const idiomas = o.idiomas ?? (origen.prepare("SELECT DISTINCT lang FROM words ORDER BY lang").all() as { lang: string }[]).map((f) => f.lang);
  const salida: Disponible[] = [];
  for (const idioma of idiomas) {
    const id = `diccionario-${slug(idioma)}`;
    const base = path.join(tmp, `${id}.sqlite`);
    const db = new Database(base);
    db.exec(`CREATE TABLE words (
      lang TEXT NOT NULL, word TEXT NOT NULL, definitions TEXT, synonyms TEXT, translations TEXT, PRIMARY KEY (lang, word)
    )`);
    const ins = db.prepare("INSERT INTO words (lang, word, definitions, synonyms, translations) VALUES (?, ?, ?, ?, ?)");
    let palabras = 0;
    db.exec("BEGIN");
    for (const f of origen.prepare("SELECT lang, word, definitions, synonyms, translations FROM words WHERE lang = ?").iterate(idioma) as Iterable<Record<string, string | null>>) {
      ins.run(f.lang, f.word, f.definitions, f.synonyms, f.translations);
      palabras++;
    }
    db.exec("COMMIT");
    db.close();
    const titulo = `Diccionario: ${IDIOMAS[idioma] ?? idioma}`;
    sellar(base, { id, tipo: "diccionario", idioma, version, titulo });
    const archivo = `${id}-${version}.sqlite.gz`;
    const { bytes, sha256 } = await comprimir(base, path.join(o.salida, archivo));
    fs.rmSync(base);
    salida.push({ id, tipo: "diccionario", titulo, version, archivo, bytes, sha256, idioma, palabras });
    console.log(`${archivo}: ${palabras} palabras, ${(bytes / 1e6).toFixed(1)} MB`);
  }
  origen.close();
  return salida;
}

async function main() {
  const o = argumentos();
  fs.mkdirSync(o.salida, { recursive: true });
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "vb-paquetes-"));
  try {
    const nuevos = [...(o.sinTemario ? [] : await paquetesDelTemario(o, tmp)), ...(await paquetesDelDiccionario(o, tmp))];
    const rutaIndice = path.join(o.salida, "indice.json");
    const anterior: { paquetes: Disponible[] } = fs.existsSync(rutaIndice) ? JSON.parse(fs.readFileSync(rutaIndice, "utf8")) : { paquetes: [] };
    const ids = new Set(nuevos.map((p) => p.id));
    for (const viejo of anterior.paquetes) {
      const reemplazo = nuevos.find((p) => p.id === viejo.id);
      if (reemplazo && reemplazo.archivo !== viejo.archivo) fs.rmSync(path.join(o.salida, viejo.archivo), { force: true });
    }
    const paquetes = [...anterior.paquetes.filter((p) => !ids.has(p.id)), ...nuevos].sort((a, b) => a.id.localeCompare(b.id));
    fs.writeFileSync(rutaIndice, `${JSON.stringify({ formato: 1, generado: new Date().toISOString(), paquetes }, null, 1)}\n`);
    console.log(`${nuevos.length} paquetes generados; el índice tiene ${paquetes.length}.`);
  } finally {
    fs.rmSync(tmp, { recursive: true, force: true });
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
