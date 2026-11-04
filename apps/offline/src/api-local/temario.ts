/**
 * Carga del temario en el dispositivo. Usa la misma conversión que el importador del servidor
 * (`api/src/lib/temario-filas.ts`), así un módulo queda igual en la app que en la plataforma.
 */
import { filasDelTemario, type Manifiesto } from "../../../../api/src/lib/temario-filas";
import type { Sentencia } from "./almacen";
import type { Contexto } from "./contexto";

export type Origen = "oficial" | "escuela" | "propio" | "importado";

export async function cargarManifiesto(
  ctx: Contexto,
  manifiesto: Manifiesto,
  { origen, paquete, dueno = "plataforma", materias }: { origen: Origen; paquete: string; dueno?: string; materias?: string[] },
) {
  const f = filasDelTemario(manifiesto, { owner: dueno, now: ctx.ahora().toISOString(), materias });
  const s: Sentencia[] = [];
  for (const m of f.modulos) {
    s.push({
      sql: `INSERT OR REPLACE INTO modulos (id, origen, paquete, titulo, subject, level, category, slug, libro_id, dependencies, owner_user_id, school_id, visibility, created_at, updated_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      params: [m.id, origen, paquete, m.titulo, m.subject ?? null, m.level ?? null, m.category ?? null, m.slug ?? null, m.libroId ?? null,
        m.dependencies ?? "[]", m.ownerUserId ?? null, m.schoolId ?? null, m.visibility ?? "publico", m.createdAt, m.updatedAt],
    });
    s.push({ sql: "INSERT OR REPLACE INTO modulos_contenido (id, descripcion, theory_items) VALUES (?, ?, ?)", params: [m.id, m.descripcion ?? null, m.theoryItems ?? "[]"] });
  }
  for (const p of f.plantillas) {
    s.push({
      sql: "INSERT OR REPLACE INTO plantillas (id, modulo_id, nombre, materia, tags, codigo_dsl) VALUES (?, ?, ?, ?, ?, ?)",
      params: [p.id, f.moduloDePlantilla.get(p.id) ?? "", p.nombre, p.materia ?? null, p.tags, p.codigoDsl],
    });
  }
  const versiones = new Map(f.versiones.map((v) => [v.quizId, v]));
  for (const q of f.quizzes) {
    const v = versiones.get(q.id);
    s.push({
      sql: "INSERT OR REPLACE INTO quizzes (id, modulo_id, titulo, version_id, settings, questions, seed_policy) VALUES (?, ?, ?, ?, ?, ?, ?)",
      params: [q.id, q.moduleId, q.title, q.currentVersionId, v?.settings ?? "{}", v?.questions ?? "[]", v?.seedPolicy ?? null],
    });
  }
  for (const l of f.librosFilas) {
    s.push({ sql: "INSERT OR REPLACE INTO libros (id, json, updated_at) VALUES (?, ?, ?)", params: [l.id, l.json, l.updatedAt] });
  }
  await ctx.almacen.lote("contenido", s);
  return { modulos: f.modulos.length, plantillas: f.plantillas.length, cuestionarios: f.quizzes.length, libros: f.librosFilas.length, errores: f.errores };
}
