/**
 * Almacén en Node, con better-sqlite3 (el mismo SQLite que la app). Lo usan las pruebas (bases en memoria) y el
 * generador de paquetes (bases en archivos).
 *
 * La instalación de paquetes repite, en chico, lo que hace `nucleo/src/paquetes.rs`; las reglas de verdad están
 * allá y tienen sus propias pruebas.
 */
import crypto from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import zlib from "node:zlib";
import Database from "better-sqlite3";
import type { Almacen, Base, Instalado, Valor } from "../api-local/almacen";

const normalizar = (params: Valor[] = []) => params.map((v) => (typeof v === "boolean" ? Number(v) : v));
const TABLAS = ["modulos", "modulos_contenido", "plantillas", "quizzes", "libros"];

export function almacenNode(rutas: Partial<Record<Base, string>> = {}): Almacen & { bases: Record<Base, Database.Database> } {
  const bases: Record<Base, Database.Database> = {
    contenido: new Database(rutas.contenido ?? ":memory:"),
    progreso: new Database(rutas.progreso ?? ":memory:"),
  };
  for (const b of Object.values(bases)) b.pragma("foreign_keys = ON");
  const carpeta = fs.mkdtempSync(path.join(os.tmpdir(), "vb-almacen-"));
  const recibidos = new Map<string, Buffer[]>();
  const diccionarios = new Map<string, Database.Database>();

  return {
    bases,
    async consulta(base, sql, params) {
      return bases[base].prepare(sql).all(...normalizar(params)) as never;
    },
    async ejecutar(base, sql, params) {
      const st = bases[base].prepare(sql);
      return { cambios: st.reader ? (st.all(...normalizar(params)), 0) : st.run(...normalizar(params)).changes };
    },
    async lote(base, sentencias) {
      const db = bases[base];
      return db.transaction(() => sentencias.reduce((n, s) => n + db.prepare(s.sql).run(...normalizar(s.params)).changes, 0))();
    },
    async recibirParte(recibido, datos, primera) {
      const partes = primera ? [] : (recibidos.get(recibido) ?? []);
      partes.push(Buffer.from(datos));
      recibidos.set(recibido, partes);
      return partes.reduce((n, p) => n + p.length, 0);
    },
    async instalarPaquete(recibido, o = {}) {
      const comprimido = Buffer.concat(recibidos.get(recibido) ?? []);
      recibidos.delete(recibido);
      const sha256 = crypto.createHash("sha256").update(comprimido).digest("hex");
      if (o.sha256 && o.sha256.toLowerCase() !== sha256) throw new Error("el paquete llegó dañado (el hash no coincide)");
      const archivo = path.join(carpeta, `${recibido}.sqlite`);
      fs.writeFileSync(archivo, zlib.gunzipSync(comprimido));
      const p = new Database(archivo, { readonly: true });
      const meta = Object.fromEntries((p.prepare("SELECT clave, valor FROM paquete").all() as { clave: string; valor: string }[]).map((f) => [f.clave, f.valor]));
      p.close();
      if (meta.formato !== "1") throw new Error("formato de paquete desconocido");
      if (o.esperado && o.esperado !== meta.id) throw new Error("el paquete no es el que se pidió");
      const r: Instalado = {
        id: meta.id, tipo: meta.tipo as Instalado["tipo"], version: meta.version, titulo: meta.titulo, idioma: meta.idioma ?? null,
        origen: meta.origen ?? null, sha256, bytes: comprimido.length, modulos: null,
      };
      if (r.tipo === "diccionario") {
        diccionarios.get(meta.idioma)?.close();
        diccionarios.set(meta.idioma, new Database(archivo, { readonly: true }));
        return r;
      }
      const c = bases.contenido;
      c.prepare("ATTACH DATABASE ? AS p").run(archivo);
      try {
        c.transaction(() => {
          const del = "SELECT id FROM main.modulos WHERE paquete = ?";
          for (const t of ["plantillas", "quizzes"]) c.prepare(`DELETE FROM main.${t} WHERE modulo_id IN (${del})`).run(r.id);
          c.prepare(`DELETE FROM main.modulos_contenido WHERE id IN (${del})`).run(r.id);
          c.prepare("DELETE FROM main.modulos WHERE paquete = ?").run(r.id);
          for (const t of TABLAS) {
            const cols = (esq: string) => (c.prepare("SELECT name FROM pragma_table_info(?, ?)").all(t, esq) as { name: string }[]).map((x) => x.name);
            const desde = cols("p");
            const comunes = cols("main").filter((x) => desde.includes(x)).map((x) => `"${x}"`).join(", ");
            if (comunes) c.prepare(`INSERT OR REPLACE INTO main.${t} (${comunes}) SELECT ${comunes} FROM p.${t}`).run();
          }
          c.prepare("UPDATE main.modulos SET paquete = ?, origen = ? WHERE id IN (SELECT id FROM p.modulos)").run(r.id, r.origen ?? "oficial");
          r.modulos = (c.prepare("SELECT COUNT(*) AS n FROM main.modulos WHERE paquete = ?").get(r.id) as { n: number }).n;
        })();
      } finally {
        c.prepare("DETACH DATABASE p").run();
      }
      return r;
    },
    async consultaDiccionario(idioma, sql, params) {
      const d = diccionarios.get(idioma);
      if (!d) throw new Error(`el diccionario de «${idioma}» no está instalado`);
      return d.prepare(sql).all(...normalizar(params)) as never;
    },
    async borrarDiccionario(idioma) {
      diccionarios.get(idioma)?.close();
      diccionarios.delete(idioma);
    },
  };
}
