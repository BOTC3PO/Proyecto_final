/**
 * Importa el temario (`content/material/`) a la base como módulos de la plataforma.
 *
 * Entrada: el manifiesto que genera `content/material/_qa_tools/exportar_manifiesto.py`.
 *
 * Crea:
 *   - por cada TEMA: un `Modulo` (teoría como `theoryItems` tipo "Texto", prerrequisitos en `dependencies`, visibilidad "publico"),
 *     una `PlantillaEjercicio` por pregunta VBLang (visibilidad "privada": no aparece en la biblioteca de los docentes) y un
 *     `Quiz` de práctica que sortea hasta 10 preguntas por intento.
 *   - por cada EXAMEN JEFE: un `Modulo` de tipo evaluación (categoría "Evaluación", quiz `formal`) que depende de los temas que
 *     evalúa. Sortea de 20 a 50 preguntas según el tamaño de su pool. Los de materia reutilizan las plantillas de sus temas; los de
 *     idiomas traen preguntas propias.
 *   - por cada LIBRO de teoría extendida: un `Libro` público y un `Modulo` sin evaluación (categoría "Libro") que lo abre.
 * Todo queda a nombre del administrador. Los logros se implementan después de los exámenes jefe (no se importan acá).
 *
 * Los módulos con prerrequisitos se abren solos al completarlos; un directivo o docente puede habilitar uno a mano.
 *
 * Seguridad: sin `--aplicar` es un ensayo (no escribe). Con `--aplicar` exige `IMPORT_DB_ESPERADA=<nombre de la base>` y
 * lo compara con `select current_database()`. Es idempotente: ids determinísticos (`cont-...`), lo existente se omite; con
 * `--actualizar` se reemplaza lo importado antes (salvo cuestionarios con intentos).
 *
 *   tsx scripts/importar_contenido.ts MANIFIESTO.json [--materia=x,y] [--dueno=<usuarioId>] [--aplicar] [--actualizar]
 */
import "dotenv/config";
import { readFileSync } from "node:fs";
import { prisma } from "../src/lib/prisma";
import { parseCuestionarioPreguntas, validarCuestionarioPreguntas } from "../src/lib/quiz-preguntas";

const POR_INTENTO_MODULO = 10;
const EXAMEN_MIN = 20;
const EXAMEN_MAX = 50;
const CHUNK = 1000;

/** Preguntas por intento de un examen jefe: un cuarto del pool, entre 20 y 50 (y nunca más que el pool). */
export const preguntasDeExamen = (pool: number) => Math.min(pool, Math.max(EXAMEN_MIN, Math.min(EXAMEN_MAX, Math.ceil(pool / 4))));

type Pregunta = { titulo: string; dsl: string };
type Tema = {
  id: string; materia: string; ruta: string; titulo: string; teoria: string; nivel: string | null;
  dependencias: string[]; preguntas: Pregunta[];
};
type Examen = { id: string; logro: number | null; materia: string; titulo: string; descripcion: string; temas: string[]; preguntas: Pregunta[] };
type Libro = { id: string; materia: string; titulo: string; libro: string };
type Manifiesto = { temas: Tema[]; examenes?: Examen[]; libros?: Libro[] };

const args = process.argv.slice(2);
const archivo = args.find((a) => !a.startsWith("--"));
const flag = (n: string) => args.includes(`--${n}`);
const valor = (n: string) => args.find((a) => a.startsWith(`--${n}=`))?.split("=")[1];
if (!archivo) { console.error("Uso: tsx scripts/importar_contenido.ts MANIFIESTO.json [--materia=x,y] [--dueno=<usuarioId>] [--aplicar] [--actualizar]"); process.exit(2); }

const materias = valor("materia")?.split(",");
const manifiesto = JSON.parse(readFileSync(archivo, "utf-8")) as Manifiesto;
const temas = manifiesto.temas.filter((t) => !materias || materias.includes(t.materia));
const examenes = (manifiesto.examenes ?? []).filter((e) => !materias || materias.includes(e.materia));
const libros = (manifiesto.libros ?? []).filter((l) => !materias || materias.includes(l.materia));
const now = new Date().toISOString();
const slugDe = (id: string) => id.replace(/^cont-/, "").replace(/[^a-z0-9]+/gi, "--").toLowerCase().slice(0, 190);
/** Etiquetas de la metadata de una pregunta (`tags: ["gramatica", "examen-jefe"]`). */
const tagsDelDsl = (dsl: string): string[] => {
  const m = dsl.match(/^\s*tags:\s*\[([^\]]*)\]/m);
  return m ? m[1].split(",").map((t) => t.trim().replace(/^["']|["']$/g, "")).filter(Boolean) : [];
};
const trozos = <T,>(a: T[], n: number) => Array.from({ length: Math.ceil(a.length / n) }, (_, i) => a.slice(i * n, (i + 1) * n));

function filas(owner: string) {
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
      theoryItems: JSON.stringify(t.teoria ? [{ id: `${t.id}.teoria`, title: t.titulo, type: "Texto", detail: t.teoria }] : []),
      dependencies: JSON.stringify(t.dependencias.filter((d) => ids.has(d)).map((id) => ({ id, type: "required" }))),
    });
    const pids = t.preguntas.map((p, i) => {
      const pid = `${t.id}.p${i + 1}`;
      plantilla(pid, t.id, `${t.titulo} — ${p.titulo || `pregunta ${i + 1}`}`, t.materia, [t.ruta.split("/").pop() ?? null, t.nivel], p.dsl);
      return pid;
    });
    poolDeTema.set(t.id, pids);
    if (pids.length) cuestionario(t.id, `Práctica — ${t.titulo}`, pids, Math.min(POR_INTENTO_MODULO, pids.length), "practica");
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

async function resolverDueno(): Promise<string> {
  const pedido = valor("dueno");
  if (pedido) {
    if (!(await prisma.usuario.findUnique({ where: { id: pedido }, select: { id: true } }))) throw new Error(`--dueno=${pedido}: no existe ese usuario`);
    return pedido;
  }
  const admins = await prisma.usuario.findMany({ where: { OR: [{ esAdminPrincipal: true }, { roles: { has: "ADMIN" } }] }, select: { id: true, esAdminPrincipal: true } });
  const principal = admins.filter((a) => a.esAdminPrincipal);
  if (principal.length === 1) return principal[0].id;
  if (admins.length === 1) return admins[0].id;
  throw new Error(`No pude elegir al administrador dueño (${admins.length} candidatos): pasá --dueno=<usuarioId>`);
}

async function main() {
  const db = (await prisma.$queryRawUnsafe<{ current_database: string }[]>("select current_database()"))[0].current_database;
  const owner = flag("aplicar") || valor("dueno") ? await resolverDueno() : "<admin>";
  const f = filas(owner);
  console.log(`Manifiesto: ${temas.length} temas, ${examenes.length} exámenes jefe, ${libros.length} libros${materias ? ` (${materias.join(", ")})` : ""}`);
  console.log(`  -> ${f.modulos.length} módulos, ${f.plantillas.length} plantillas, ${f.quizzes.length} cuestionarios, ${f.librosFilas.length} libros.`);
  if (f.errores.length) { console.error(`${f.errores.length} errores:\n  ${f.errores.slice(0, 10).join("\n  ")}`); process.exit(1); }
  console.log(`Base de datos: ${db}${owner !== "<admin>" ? ` · dueño: ${owner}` : ""}`);
  if (!flag("aplicar")) { console.log("Ensayo: no se escribió nada. Agregá --aplicar (y IMPORT_DB_ESPERADA) para cargar."); return; }
  if (process.env.IMPORT_DB_ESPERADA !== db) { console.error(`Abortado: IMPORT_DB_ESPERADA (${process.env.IMPORT_DB_ESPERADA ?? "sin definir"}) no coincide con la base actual (${db}).`); process.exit(1); }

  if (flag("actualizar")) {
    const conIntentos = await prisma.quizAttempt.findMany({ where: { quizId: { startsWith: "cont-" } }, select: { quizId: true }, distinct: ["quizId"] });
    const protegidos = new Set(conIntentos.map((a) => a.quizId));
    if (protegidos.size) console.warn(`${protegidos.size} cuestionarios tienen intentos y no se reemplazan.`);
    const qs = f.quizzes.map((q) => q.id).filter((id) => !protegidos.has(id));
    const mods = new Set([...f.modulos.filter((m) => !f.quizzes.some((q) => q.moduleId === m.id)).map((m) => m.id), ...f.quizzes.filter((q) => qs.includes(q.id)).map((q) => q.moduleId)]);
    for (const ch of trozos(qs, CHUNK)) {
      await prisma.quizVersion.deleteMany({ where: { quizId: { in: ch } } });
      await prisma.quiz.deleteMany({ where: { id: { in: ch } } });
    }
    for (const ch of trozos([...mods], CHUNK)) await prisma.modulo.deleteMany({ where: { id: { in: ch } } });
    const pids = [...f.moduloDePlantilla].filter(([, m]) => mods.has(m)).map(([p]) => p);
    for (const ch of trozos(pids, CHUNK)) await prisma.plantillaEjercicio.deleteMany({ where: { id: { in: ch } } });
    for (const ch of trozos(f.librosFilas.map((l) => l.id), CHUNK)) await prisma.libro.deleteMany({ where: { id: { in: ch } } });
  }
  const cargar = async (nombre: string, filas: any[], insertar: (d: any[]) => Promise<{ count: number }>) => {
    let n = 0;
    for (const ch of trozos(filas, CHUNK)) n += (await insertar(ch)).count;
    console.log(`  ${nombre} nuevos: ${n}`);
  };
  await cargar("libros", f.librosFilas, (d) => prisma.libro.createMany({ data: d, skipDuplicates: true }));
  await cargar("módulos", f.modulos, (d) => prisma.modulo.createMany({ data: d, skipDuplicates: true }));
  await cargar("plantillas", f.plantillas, (d) => prisma.plantillaEjercicio.createMany({ data: d, skipDuplicates: true }));
  await cargar("cuestionarios", f.quizzes, (d) => prisma.quiz.createMany({ data: d.map((q) => ({ ...q, currentVersionId: null })), skipDuplicates: true }));
  await cargar("versiones", f.versiones, (d) => prisma.quizVersion.createMany({ data: d, skipDuplicates: true }));
  for (const q of f.quizzes) await prisma.quiz.updateMany({ where: { id: q.id, currentVersionId: null }, data: { currentVersionId: q.currentVersionId } });
  console.log("Listo.");
}
main().catch((e) => { console.error(e instanceof Error ? e.message : e); process.exit(1); }).finally(() => prisma.$disconnect());
