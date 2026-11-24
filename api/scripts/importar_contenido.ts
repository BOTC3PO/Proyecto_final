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
import { filasDelTemario, type Manifiesto } from "../src/lib/temario-filas";
export { preguntasDeExamen } from "../src/lib/temario-filas";

const CHUNK = 1000;

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
const trozos = <T,>(a: T[], n: number) => Array.from({ length: Math.ceil(a.length / n) }, (_, i) => a.slice(i * n, (i + 1) * n));

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
  const f = filasDelTemario(manifiesto, { owner, now, materias });
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
