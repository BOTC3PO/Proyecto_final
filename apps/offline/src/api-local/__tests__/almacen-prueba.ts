/** Almacén para las pruebas: las mismas dos bases, en memoria, con better-sqlite3 (mismo SQLite que la app). */
import Database from "better-sqlite3";
import type { Almacen, Base, Valor } from "../almacen";

const normalizar = (params: Valor[] = []) => params.map((v) => (typeof v === "boolean" ? Number(v) : v));

export function almacenPrueba(): Almacen {
  const bases: Record<Base, Database.Database> = { contenido: new Database(":memory:"), progreso: new Database(":memory:") };
  for (const b of Object.values(bases)) b.pragma("foreign_keys = ON");
  return {
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
  };
}
