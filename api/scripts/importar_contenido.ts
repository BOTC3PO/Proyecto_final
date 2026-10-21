/**
 * Importa el temario (`content/material/`) a la base como módulos de la plataforma.
 *
 * Entrada: el manifiesto que genera `content/material/_qa_tools/exportar_manifiesto.py`.
 * Por cada tema crea:
 *   - un `Modulo` (teoría como `theoryItems` tipo "Texto", prerrequisitos en `dependencies`, visibilidad "publico"),
 *   - una `PlantillaEjercicio` por pregunta VBLang (dueño `system`, visibilidad "privada": no aparece en la biblioteca
 *     de plantillas de los docentes; las usa el cuestionario),
 *   - un `Quiz` + `QuizVersion` con un pool de relleno que sortea hasta 10 preguntas por intento.
 * Los exámenes jefe no se importan: no existe modelo para ellos. Los libros de teoría extendida van aparte (--libros).
 *
 * Seguridad: sin `--aplicar` es un ensayo (no escribe). Con `--aplicar` exige `IMPORT_DB_ESPERADA=<nombre de la base>` y
 * lo compara con `select current_database()`, para no escribir en la base equivocada. Es idempotente: los ids son
 * determinísticos (`cont:<materia>/<ruta>`) y lo ya existente se omite; con `--actualizar` se reemplaza lo importado
 * antes (solo si el quiz no tiene intentos).
 *
 *   tsx scripts/importar_contenido.ts MANIFIESTO.json [--materia=x,y] [--aplicar] [--actualizar]
 */
import "dotenv/config";
import { readFileSync } from "node:fs";
import { prisma } from "../src/lib/prisma";
import { parseCuestionarioPreguntas, validarCuestionarioPreguntas } from "../src/lib/quiz-preguntas";

const OWNER = "system";
const POR_INTENTO = 10;
const CHUNK = 1000;

type Pregunta = { titulo: string; dsl: string };
type Tema = {
  id: string; materia: string; ruta: string; titulo: string; teoria: string; nivel: string | null;
  dependencias: string[]; preguntas: Pregunta[];
};

const args = process.argv.slice(2);
const archivo = args.find((a) => !a.startsWith("--"));
const flag = (n: string) => args.includes(`--${n}`);
const valor = (n: string) => args.find((a) => a.startsWith(`--${n}=`))?.split("=")[1];
if (!archivo) { console.error("Uso: tsx scripts/importar_contenido.ts MANIFIESTO.json [--materia=x,y] [--aplicar] [--actualizar]"); process.exit(2); }

const materias = valor("materia")?.split(",");
const manifiesto = JSON.parse(readFileSync(archivo, "utf-8")) as { temas: Tema[] };
const temas = manifiesto.temas.filter((t) => !materias || materias.includes(t.materia));
const now = new Date().toISOString();
const slugDe = (id: string) => id.replace(/^cont:/, "").replace(/[^a-z0-9]+/gi, "--").toLowerCase().slice(0, 190);
const trozos = <T,>(a: T[], n: number) => Array.from({ length: Math.ceil(a.length / n) }, (_, i) => a.slice(i * n, (i + 1) * n));

function filas() {
  const ids = new Set(manifiesto.temas.map((t) => t.id));
  const modulos: any[] = [], plantillas: any[] = [], quizzes: any[] = [], versiones: any[] = [];
  const errores: string[] = [];
  for (const t of temas) {
    modulos.push({
      id: t.id, slug: slugDe(t.id), titulo: t.titulo, descripcion: null, subject: t.materia, level: t.nivel,
      theoryItems: t.teoria ? JSON.stringify([{ id: `${t.id}#teoria`, title: t.titulo, type: "Texto", detail: t.teoria }]) : JSON.stringify([]),
      dependencies: JSON.stringify(t.dependencias.filter((d) => ids.has(d)).map((id) => ({ id, type: "required" }))),
      visibility: "publico", ownerUserId: OWNER, descatalogado: false, isDeleted: false, createdAt: now, updatedAt: now,
    });
    if (t.preguntas.length === 0) continue;
    const pids: string[] = [];
    t.preguntas.forEach((p, i) => {
      const pid = `${t.id}#p${i + 1}`; pids.push(pid);
      plantillas.push({
        id: pid, ownerUserId: OWNER, schoolId: null, visibility: "privada", nombre: `${t.titulo} — ${p.titulo || `pregunta ${i + 1}`}`.slice(0, 200),
        descripcion: null, materia: t.materia, tags: JSON.stringify([t.ruta.split("/").pop(), t.nivel].filter(Boolean)),
        codigoDsl: p.dsl, version: 1, publicAprobado: false, isDeleted: false, createdAt: now, updatedAt: now,
      });
    });
    const cuestionario = parseCuestionarioPreguntas({
      cantidadGlobal: Math.min(POR_INTENTO, pids.length),
      preguntas: pids.map((plantillaId) => ({ plantillaId, tipo: "relleno", poolId: "pool-tema", maxRepeticiones: 1 })),
    });
    const v = validarCuestionarioPreguntas(cuestionario);
    if (!v.ok) { errores.push(`${t.id}: ${v.errores.join("; ")}`); continue; }
    const qid = `${t.id}#quiz`, vid = `${t.id}#v1`;
    quizzes.push({ id: qid, moduleId: t.id, title: `Práctica — ${t.titulo}`.slice(0, 200), isActive: true, currentVersionId: vid, createdAt: now, updatedAt: now });
    versiones.push({
      id: vid, quizId: qid, versionNumber: 1, schemaVersion: 1, questions: JSON.stringify([]), seedPolicy: 1,
      settings: JSON.stringify({ type: "practica", preguntas: cuestionario }), createdAt: now, createdBy: OWNER,
    });
  }
  return { modulos, plantillas, quizzes, versiones, errores };
}

async function main() {
  const f = filas();
  console.log(`Manifiesto: ${temas.length} temas${materias ? ` (${materias.join(", ")})` : ""} -> ${f.modulos.length} módulos, ${f.plantillas.length} plantillas, ${f.quizzes.length} cuestionarios.`);
  if (f.errores.length) { console.error(`${f.errores.length} cuestionarios inválidos:\n  ${f.errores.slice(0, 10).join("\n  ")}`); process.exit(1); }
  const db = (await prisma.$queryRawUnsafe<{ current_database: string }[]>("select current_database()"))[0].current_database;
  console.log(`Base de datos: ${db}`);
  if (!flag("aplicar")) { console.log("Ensayo: no se escribió nada. Agregá --aplicar (y IMPORT_DB_ESPERADA) para cargar."); return; }
  if (process.env.IMPORT_DB_ESPERADA !== db) { console.error(`Abortado: IMPORT_DB_ESPERADA (${process.env.IMPORT_DB_ESPERADA ?? "sin definir"}) no coincide con la base actual (${db}).`); process.exit(1); }

  if (flag("actualizar")) {
    const prefijo = { startsWith: "cont:" };
    const conIntentos = await prisma.quizAttempt.findMany({ where: { quizId: prefijo }, select: { quizId: true }, distinct: ["quizId"] });
    const protegidos = new Set(conIntentos.map((a) => a.quizId));
    if (protegidos.size) console.warn(`${protegidos.size} cuestionarios tienen intentos y no se reemplazan.`);
    const qs = f.quizzes.map((q) => q.id).filter((id) => !protegidos.has(id));
    const mids = new Set(f.quizzes.filter((q) => qs.includes(q.id)).map((q) => q.moduleId));
    for (const ch of trozos(qs, CHUNK)) {
      await prisma.quizVersion.deleteMany({ where: { quizId: { in: ch } } });
      await prisma.quiz.deleteMany({ where: { id: { in: ch } } });
    }
    for (const ch of trozos([...mids], CHUNK)) await prisma.modulo.deleteMany({ where: { id: { in: ch } } });
    const pids = f.plantillas.filter((p) => mids.has(p.id.replace(/#p\d+$/, ""))).map((p) => p.id);
    for (const ch of trozos(pids, CHUNK)) await prisma.plantillaEjercicio.deleteMany({ where: { id: { in: ch } } });
  }
  let n = 0;
  for (const ch of trozos(f.modulos, CHUNK)) n += (await prisma.modulo.createMany({ data: ch, skipDuplicates: true })).count;
  console.log(`  módulos nuevos: ${n}`); n = 0;
  for (const ch of trozos(f.plantillas, CHUNK)) n += (await prisma.plantillaEjercicio.createMany({ data: ch, skipDuplicates: true })).count;
  console.log(`  plantillas nuevas: ${n}`); n = 0;
  for (const ch of trozos(f.quizzes, CHUNK)) n += (await prisma.quiz.createMany({ data: ch.map((q) => ({ ...q, currentVersionId: null })), skipDuplicates: true })).count;
  console.log(`  cuestionarios nuevos: ${n}`); n = 0;
  for (const ch of trozos(f.versiones, CHUNK)) n += (await prisma.quizVersion.createMany({ data: ch, skipDuplicates: true })).count;
  console.log(`  versiones nuevas: ${n}`);
  for (const q of f.quizzes) await prisma.quiz.updateMany({ where: { id: q.id, currentVersionId: null }, data: { currentVersionId: q.currentVersionId } });
  console.log("Listo.");
}
main().catch((e) => { console.error(e); process.exit(1); }).finally(() => prisma.$disconnect());
