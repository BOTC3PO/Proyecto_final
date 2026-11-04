/**
 * Convierte el manifiesto del temario (el que arma `content/material/_qa_tools/exportar_manifiesto.py`) en las filas
 * que se cargan en la base: módulos, plantillas de preguntas, cuestionarios con su versión y libros.
 *
 * No toca ninguna base ni depende de Node: lo usan `scripts/importar_contenido.ts` (servidor) y la app sin conexión
 * (`apps/offline`), para que los dos guarden el temario igual.
 */
import { parseCuestionarioPreguntas, validarCuestionarioPreguntas } from "./quiz-preguntas";

const POR_INTENTO_MODULO = 10;
const EXAMEN_MIN = 20;
const EXAMEN_MAX = 50;

/** Preguntas por intento de un examen jefe: un cuarto del pool, entre 20 y 50 (y nunca más que el pool). */
export const preguntasDeExamen = (pool: number) => Math.min(pool, Math.max(EXAMEN_MIN, Math.min(EXAMEN_MAX, Math.ceil(pool / 4))));

export type Pregunta = { titulo: string; dsl: string };
export type Tema = {
  id: string; materia: string; ruta: string; titulo: string; teoria: string; nivel: string | null;
  dependencias: string[]; preguntas: Pregunta[];
  /** Ítems "Herramienta" (imágenes enlazadas y diagramas): `doc` es un BlockDocument de la web. */
  herramientas?: { title: string; doc?: unknown; standalone?: unknown }[];
};
export type Examen = { id: string; logro: number | null; materia: string; titulo: string; descripcion: string; temas: string[]; preguntas: Pregunta[] };
export type Libro = { id: string; materia: string; titulo: string; libro: string };
export type Manifiesto = { temas: Tema[]; examenes?: Examen[]; libros?: Libro[] };

const slugDe = (id: string) => id.replace(/^cont-/, "").replace(/[^a-z0-9]+/gi, "--").toLowerCase().slice(0, 190);
/** Etiquetas de la metadata de una pregunta (`tags: ["gramatica", "examen-jefe"]`). */
const tagsDelDsl = (dsl: string): string[] => {
  const m = dsl.match(/^\s*tags:\s*\[([^\]]*)\]/m);
  return m ? m[1].split(",").map((t) => t.trim().replace(/^["']|["']$/g, "")).filter(Boolean) : [];
};

export function filasDelTemario(
  manifiesto: Manifiesto,
  { owner, now, materias }: { owner: string; now: string; materias?: string[] },
) {
  const temas = manifiesto.temas.filter((t) => !materias || materias.includes(t.materia));
  const examenes = (manifiesto.examenes ?? []).filter((e) => !materias || materias.includes(e.materia));
  const libros = (manifiesto.libros ?? []).filter((l) => !materias || materias.includes(l.materia));
  const ids = new Set([...manifiesto.temas.map((t) => t.id)]);
  const modulos: any[] = [], plantillas: any[] = [], quizzes: any[] = [], versiones: any[] = [], librosFilas: any[] = [];
  const moduloDePlantilla = new Map<string, string>();
  const errores: string[] = [];
  const poolDeTema = new Map<string, string[]>();

  const modulo = (m: Record<string, unknown>) => modulos.push({
    descripcion: null, subject: null, level: null, category: null, visibility: "publico", ownerUserId: owner,
    descatalogado: false, isDeleted: false, createdAt: now, updatedAt: now, ...m,
  });
  const plantilla = (id: string, moduloId: string, nombre: string, materia: string, tags: (string | null)[], dsl: string) => {
    plantillas.push({
      id, ownerUserId: owner, schoolId: null, visibility: "privada", nombre: nombre.slice(0, 200), descripcion: null, materia,
      tags: JSON.stringify(tags.filter(Boolean)), codigoDsl: dsl, version: 1, publicAprobado: false, isDeleted: false, createdAt: now, updatedAt: now,
    });
    moduloDePlantilla.set(id, moduloId);
  };
  const cuestionario = (moduloId: string, titulo: string, pids: string[], cantidad: number, tipo: "practica" | "formal") => {
    const c = parseCuestionarioPreguntas({
      cantidadGlobal: cantidad,
      preguntas: pids.map((plantillaId) => ({ plantillaId, tipo: "relleno", poolId: "pool-tema", maxRepeticiones: 1 })),
    });
    const v = validarCuestionarioPreguntas(c);
    if (!v.ok) { errores.push(`${moduloId}: ${v.errores.join("; ")}`); return; }
    const qid = `${moduloId}.quiz`, vid = `${moduloId}.v1`;
    quizzes.push({ id: qid, moduleId: moduloId, title: titulo.slice(0, 200), isActive: true, currentVersionId: vid, createdAt: now, updatedAt: now });
    versiones.push({
      id: vid, quizId: qid, versionNumber: 1, schemaVersion: 1, questions: JSON.stringify([]), seedPolicy: 1,
      settings: JSON.stringify({ type: tipo, preguntas: c }), createdAt: now, createdBy: owner,
    });
  };

  for (const t of temas) {
    modulo({
      id: t.id, slug: slugDe(t.id), titulo: t.titulo, subject: t.materia, level: t.nivel,
      theoryItems: JSON.stringify([
        ...(t.teoria ? [{ id: `${t.id}.teoria`, title: t.titulo, type: "Texto", detail: t.teoria }] : []),
        ...(t.herramientas ?? []).map((h, i) => (h.standalone
          ? { id: `${t.id}.h${i + 1}`, title: h.title, type: "HerramientaStandalone", detail: JSON.stringify(h.standalone) }
          : { id: `${t.id}.h${i + 1}`, title: h.title, type: "Herramienta", detail: JSON.stringify(h.doc) })),
      ]),
      dependencies: JSON.stringify(t.dependencias.filter((d) => ids.has(d)).map((id) => ({ id, type: "required" }))),
    });
    const pids = t.preguntas.map((p, i) => {
      const pid = `${t.id}.p${i + 1}`;
      plantilla(pid, t.id, `${t.titulo} — ${p.titulo || `pregunta ${i + 1}`}`, t.materia, [t.ruta.split("/").pop() ?? null, t.nivel], p.dsl);
      return pid;
    });
    poolDeTema.set(t.id, pids);
    // Formal: es el tipo de cuestionario que, al aprobarse, marca el módulo como completado (quiz-attempts.ts) y desbloquea los siguientes.
    if (pids.length) cuestionario(t.id, `Cuestionario — ${t.titulo}`, pids, Math.min(POR_INTENTO_MODULO, pids.length), "formal");
  }

  for (const e of examenes) {
    const propias = e.preguntas.map((p, i) => {
      const pid = `${e.id}.p${i + 1}`;
      plantilla(pid, e.id, `${e.titulo} — ${p.titulo || `pregunta ${i + 1}`}`, e.materia, [...new Set([...tagsDelDsl(p.dsl), "examen-jefe"])], p.dsl);
      return pid;
    });
    const pool = propias.length ? propias : e.temas.flatMap((tid) => poolDeTema.get(tid) ?? []);
    const faltan = e.temas.filter((tid) => !ids.has(tid));
    if (faltan.length) { errores.push(`${e.id}: temas que no están en el manifiesto: ${faltan.join(", ")}`); continue; }
    modulo({
      id: e.id, slug: slugDe(e.id), titulo: `Examen jefe — ${e.titulo}`, subject: e.materia, category: "Evaluación",
      theoryItems: JSON.stringify(e.descripcion ? [{ id: `${e.id}.intro`, title: e.titulo, type: "Texto", detail: e.descripcion }] : []),
      dependencies: JSON.stringify(e.temas.map((id) => ({ id, type: "required" }))),
    });
    if (pool.length) cuestionario(e.id, `Examen jefe — ${e.titulo}`, pool, preguntasDeExamen(pool.length), "formal");
  }

  for (const l of libros) {
    librosFilas.push({ id: l.id, json: l.libro, updatedAt: now, ownerUserId: owner, visibility: "publica" });
    modulo({
      id: l.id, slug: slugDe(l.id), titulo: l.titulo, subject: l.materia, category: "Libro", libroId: l.id,
      theoryItems: JSON.stringify([{ id: `${l.id}.libro`, title: l.titulo, type: "Libro", detail: l.id }]),
      dependencies: JSON.stringify([]),
    });
  }
  return { modulos, plantillas, quizzes, versiones, librosFilas, moduloDePlantilla, errores };
}
