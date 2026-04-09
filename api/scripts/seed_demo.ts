#!/usr/bin/env ts-node
/**
 * seed_demo.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Genera datos de demostración completos para probar todas las páginas.
 * Idempotente: usa INSERT OR IGNORE para no romper datos existentes.
 *
 * Uso:
 *   cd api && npm run seed:demo
 *   SQLITE_CORE_PATH=./src/base/core_schema.sqlite npm run seed:demo
 *
 * Credenciales:
 *   admin@plataforma.com          / Password123!  (ADMIN)
 *   directivo@epnorte.edu.ar      / Password123!  (DIRECTIVO)
 *   garcia@epnorte.edu.ar         / Password123!  (TEACHER)
 *   perez.alumno@epnorte.edu.ar   / Password123!  (USER)
 *   lopez.alumno@epnorte.edu.ar   / Password123!  (USER)
 *   perez.padre@gmail.com         / Password123!  (PARENT)
 */

import Database from "better-sqlite3";
import { pbkdf2Sync, randomBytes, createHash } from "crypto";
import path from "path";

try { require("dotenv").config(); } catch { /* dotenv is optional */ }

// ── Config ────────────────────────────────────────────────────────────────────

const SQLITE_PATH =
  process.env.SQLITE_CORE_PATH ??
  path.resolve(__dirname, "../src/base/core_schema.sqlite");

const PASSWORD = "Password123!";

// ── Password hash (mirrors api/src/lib/passwords.ts) ─────────────────────────

function hashPassword(password: string): string {
  const saltBuffer = randomBytes(16);
  const salt = saltBuffer.toString("hex");
  const derived = pbkdf2Sync(password, saltBuffer, 100_000, 64, "sha256").toString("hex");
  return `pbkdf2$100000$${salt}$${derived}`;
}

function sha256(s: string): string {
  return createHash("sha256").update(s).digest("hex");
}

// ── Helpers ───────────────────────────────────────────────────────────────────

const now = new Date().toISOString();

const hoy = new Date();
const d = (offsetDays: number) => {
  const dt = new Date(hoy);
  dt.setDate(hoy.getDate() + offsetDays);
  return dt.toISOString().slice(0, 10);
};

function genId(prefix: string): string {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
}

// ── Main ──────────────────────────────────────────────────────────────────────

function main() {
  console.log("🌱 Iniciando seed de demostración...\n");

  const sqlite = new Database(SQLITE_PATH);
  sqlite.pragma("journal_mode = WAL");
  sqlite.pragma("foreign_keys = ON");

  // ── 1. Usuarios ─────────────────────────────────────────────────────────────
  console.log("👤 Creando usuarios...");

  const seedPassword = hashPassword(PASSWORD);

  const usersToSeed = [
    {
      id: "usr-admin-001",
      username: "admin.plataforma",
      email: "admin@plataforma.com",
      full_name: "Administrador Demo",
      role: "ADMIN",
      escuela_id: "esc-0001",
    },
    {
      id: "usr-direc-001",
      username: "directivo.norte",
      email: "directivo@epnorte.edu.ar",
      full_name: "María González",
      role: "DIRECTIVO",
      escuela_id: "esc-0001",
    },
    {
      id: "usr-teach-001",
      username: "prof.garcia",
      email: "garcia@epnorte.edu.ar",
      full_name: "Prof. Carlos García",
      role: "TEACHER",
      escuela_id: "esc-0001",
    },
    {
      id: "usr-stude-001",
      username: "alumno.perez",
      email: "perez.alumno@epnorte.edu.ar",
      full_name: "Juan Pérez",
      role: "USER",
      escuela_id: "esc-0001",
    },
    {
      id: "usr-stude-002",
      username: "alumno.lopez",
      email: "lopez.alumno@epnorte.edu.ar",
      full_name: "Ana López",
      role: "USER",
      escuela_id: "esc-0001",
    },
    {
      id: "usr-paren-001",
      username: "padre.perez",
      email: "perez.padre@gmail.com",
      full_name: "Roberto Pérez",
      role: "PARENT",
      escuela_id: null,
    },
  ];

  const insertUser = sqlite.prepare(`
    INSERT OR IGNORE INTO usuarios
      (id, username, email, full_name, role, escuela_id,
       password_hash, is_deleted, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, ?, 0, ?, ?)
  `);

  for (const u of usersToSeed) {
    insertUser.run(
      u.id, u.username, u.email, u.full_name,
      u.role, u.escuela_id, seedPassword, now, now
    );
  }

  // Resolve actual IDs by email (handles pre-existing data)
  const uid = (email: string, fallback: string): string => {
    const row = sqlite.prepare(
      "SELECT id FROM usuarios WHERE email = ? LIMIT 1"
    ).get(email) as { id: string } | undefined;
    return row?.id ?? fallback;
  };

  const IDS = {
    admin:     uid("admin@plataforma.com",          "usr-admin-001"),
    directivo: uid("directivo@epnorte.edu.ar",      "usr-direc-001"),
    profesor:  uid("garcia@epnorte.edu.ar",          "usr-teach-001"),
    alumno1:   uid("perez.alumno@epnorte.edu.ar",   "usr-stude-001"),
    alumno2:   uid("lopez.alumno@epnorte.edu.ar",   "usr-stude-002"),
    padre:     uid("perez.padre@gmail.com",          "usr-paren-001"),
    escuela:   "esc-0001",
    aula1:     "cls-demo-mat-3a",
    aula2:     "cls-demo-eco-4b",
    modulo1:   "mod-demo-enteros",
    modulo2:   "mod-demo-fracciones",
    modulo3:   "mod-demo-presupuesto",
  };

  console.log(`  ✓ ${usersToSeed.length} usuarios (INSERT OR IGNORE)`);

  // ── 2. Escuela ───────────────────────────────────────────────────────────────
  console.log("🏫 Creando escuela...");

  sqlite.prepare(`
    INSERT OR IGNORE INTO escuelas
      (id, name, code, address, subscription_status, plan, is_deleted, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, 0, ?, ?)
  `).run(
    IDS.escuela,
    "EP Norte Demo",
    "EPN-001",
    "Av. Corrientes 1234, Buenos Aires",
    "ACTIVE",
    "escuela",
    now, now
  );

  // Membresías (PK: usuario_id + escuela_id — sin columna id)
  const insertMem = sqlite.prepare(`
    INSERT OR IGNORE INTO membresias
      (usuario_id, escuela_id, rol, estado, fecha_alta)
    VALUES (?, ?, ?, 'activa', ?)
  `);
  insertMem.run(IDS.directivo, IDS.escuela, "directivo", now);
  insertMem.run(IDS.profesor,  IDS.escuela, "docente",   now);
  insertMem.run(IDS.alumno1,   IDS.escuela, "alumno",    now);
  insertMem.run(IDS.alumno2,   IDS.escuela, "alumno",    now);

  // Límites de escuela
  sqlite.prepare(`
    INSERT OR IGNORE INTO limites_escuela
      (escuela_id, max_profesores, max_directivos, max_aulas,
       max_alumnos_por_aula, updated_at)
    VALUES (?, 20, 5, 20, 40, ?)
  `).run(IDS.escuela, now);

  console.log("  ✓ Escuela + membresías + límites");

  // ── 3. Aulas (clases) ────────────────────────────────────────────────────────
  console.log("🏛️  Creando aulas...");

  const insertClase = sqlite.prepare(`
    INSERT OR IGNORE INTO clases
      (id, escuela_id, name, grade, code, is_deleted, created_at)
    VALUES (?, ?, ?, ?, ?, 0, ?)
  `);
  insertClase.run(IDS.aula1, IDS.escuela, "3° A — Matemática",  "3° Año", "MAT-3A", now);
  insertClase.run(IDS.aula2, IDS.escuela, "4° B — Economía",    "4° Año", "ECO-4B", now);

  // Miembros (rol_en_clase: TEACHER | ADMIN | STUDENT)
  const insertMiembro = sqlite.prepare(`
    INSERT OR IGNORE INTO clase_miembros
      (clase_id, usuario_id, rol_en_clase)
    VALUES (?, ?, ?)
  `);
  // Aula 1
  insertMiembro.run(IDS.aula1, IDS.profesor, "TEACHER");
  insertMiembro.run(IDS.aula1, IDS.alumno1,  "STUDENT");
  insertMiembro.run(IDS.aula1, IDS.alumno2,  "STUDENT");
  // Aula 2
  insertMiembro.run(IDS.aula2, IDS.profesor, "TEACHER");
  insertMiembro.run(IDS.aula2, IDS.alumno1,  "STUDENT");

  console.log("  ✓ 2 aulas con miembros");

  // ── 4. Módulos con teoría y quizzes ──────────────────────────────────────────
  console.log("📚 Creando módulos...");

  // Teoría como JSON (content = array de bloques)
  const teoriaEnteros = [
    {
      id: "tb-e1", type: "text",
      title: "¿Qué son los números enteros?",
      detail: "Los números enteros incluyen positivos, negativos y el cero. Se usan para contar, medir temperaturas, pisos de edificios y saldos bancarios.",
    },
    {
      id: "tb-e2", type: "text",
      title: "Operaciones básicas",
      detail: "Las cuatro operaciones son suma (+), resta (-), multiplicación (×) y división (÷). Cada una tiene propiedades que simplifican cálculos complejos.",
    },
    {
      id: "tb-e3", type: "image",
      title: "La recta numérica",
      detail: "Recta que muestra números enteros del -5 al 5, con el cero al centro.",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Simple_number_line.svg/800px-Simple_number_line.svg.png",
      alt: "Recta numérica del -5 al 5",
      caption: "Los números se ordenan de menor a mayor de izquierda a derecha",
      width: "full",
    },
  ];

  const teoriaFracciones = [
    {
      id: "tb-f1", type: "text",
      title: "¿Qué es una fracción?",
      detail: "Una fracción representa una parte de un todo. Se escribe como a/b: 'a' es el numerador (partes tomadas) y 'b' el denominador (total de partes).",
    },
    {
      id: "tb-f2", type: "text",
      title: "Suma y resta de fracciones",
      detail: "Con igual denominador sumamos los numeradores. Con denominadores distintos buscamos el mínimo común múltiplo (mcm) antes de operar.",
    },
  ];

  const teoriaPresupuesto = [
    {
      id: "tb-p1", type: "text",
      title: "¿Qué es un presupuesto?",
      detail: "Un presupuesto es un plan de ingresos y gastos. Ayuda a saber cuánto dinero entra, cuánto sale y si podemos ahorrar.",
    },
    {
      id: "tb-p2", type: "text",
      title: "Gastos fijos y variables",
      detail: "Gastos fijos: siempre iguales (alquiler, cuotas). Gastos variables: cambian cada mes (comida, transporte). Identificarlos es el primer paso para ahorrar.",
    },
  ];

  // Insertar teoria_json
  const insertTeoria = sqlite.prepare(`
    INSERT OR IGNORE INTO teoria_json
      (id, schema_version, content, content_hash, created_at, updated_at)
    VALUES (?, 1, ?, ?, ?, ?)
  `);

  const teoriaEnterosJson   = JSON.stringify(teoriaEnteros);
  const teoriaFraccionesJson = JSON.stringify(teoriaFracciones);
  const teoriaPresupuestoJson = JSON.stringify(teoriaPresupuesto);

  const tid1 = "teoria-demo-enteros";
  const tid2 = "teoria-demo-fracciones";
  const tid3 = "teoria-demo-presupuesto";

  insertTeoria.run(tid1, teoriaEnterosJson,    sha256(teoriaEnterosJson),    now, now);
  insertTeoria.run(tid2, teoriaFraccionesJson,  sha256(teoriaFraccionesJson),  now, now);
  insertTeoria.run(tid3, teoriaPresupuestoJson, sha256(teoriaPresupuestoJson), now, now);

  // Insertar modulos (título en columna española 'titulo')
  const insertModulo = sqlite.prepare(`
    INSERT OR IGNORE INTO modulos
      (id, slug, titulo, descripcion, visibility,
       school_id, owner_user_id, teoria_id, created_at, updated_at)
    VALUES (?, ?, ?, ?, 'public', ?, ?, ?, ?, ?)
  `);

  insertModulo.run(
    IDS.modulo1, "numeros-enteros",
    "Números enteros y operaciones básicas",
    "Aprendé a sumar, restar, multiplicar y dividir números enteros con ejemplos reales.",
    IDS.escuela, IDS.profesor, tid1, now, now
  );
  insertModulo.run(
    IDS.modulo2, "fracciones-decimales",
    "Fracciones y números decimales",
    "Entendé qué son las fracciones, cómo se operan y su relación con los decimales.",
    IDS.escuela, IDS.profesor, tid2, now, now
  );
  insertModulo.run(
    IDS.modulo3, "presupuesto-familiar",
    "Presupuesto familiar y ahorro",
    "Aprendé a planificar gastos e identificar necesidades para tomar decisiones financieras.",
    IDS.escuela, IDS.profesor, tid3, now, now
  );

  // Asignar módulos a aulas (PK: clase_id + modulo_id — sin columna id)
  const insertClaseModulo = sqlite.prepare(`
    INSERT OR IGNORE INTO clase_modulos
      (clase_id, modulo_id, assigned_at, required)
    VALUES (?, ?, ?, 1)
  `);
  insertClaseModulo.run(IDS.aula1, IDS.modulo1, now);
  insertClaseModulo.run(IDS.aula1, IDS.modulo2, now);
  insertClaseModulo.run(IDS.aula2, IDS.modulo3, now);

  // Quizzes — preguntas embebidas directamente en quiz_versions
  const questionsEnteros = JSON.stringify([
    {
      id: "q1", prompt: "¿Cuánto es 15 + 28?",
      questionType: "mc", options: ["41", "43", "45", "38"],
      answerKey: "43",
      explanation: "15 + 28 = 43. Unidades: 5+8=13 (escribimos 3, llevamos 1). Decenas: 1+2+1=4.",
    },
    {
      id: "q2", prompt: "¿Cuánto es 100 − 37?",
      questionType: "mc", options: ["63", "67", "73", "57"],
      answerKey: "63", explanation: "100 - 37 = 63.",
    },
    {
      id: "q3", prompt: "¿Verdadero o falso? 6 × 7 = 42",
      questionType: "vf", options: ["Verdadero", "Falso"],
      answerKey: "Verdadero", explanation: "6 × 7 = 42. Correcto.",
    },
    {
      id: "q4", prompt: "¿Cuánto es 48 ÷ 6?",
      questionType: "mc", options: ["6", "7", "8", "9"],
      answerKey: "8", explanation: "48 ÷ 6 = 8, porque 6 × 8 = 48.",
    },
    {
      id: "q5", prompt: "Tenés $250 y gastás $87. ¿Cuánto queda?",
      questionType: "mc", options: ["$153", "$163", "$173", "$143"],
      answerKey: "$163", explanation: "250 - 87 = 163.",
    },
  ]);

  const questionsFormal = JSON.stringify([
    {
      id: "eq1", prompt: "¿Cuál es el resultado de −5 + 12?",
      questionType: "mc", options: ["7", "-7", "17", "-17"],
      answerKey: "7", explanation: "−5 + 12 = 7. Como 12 > 5, el resultado es positivo.",
    },
    {
      id: "eq2", prompt: "¿Verdadero o falso? El producto de dos negativos es negativo.",
      questionType: "vf", options: ["Verdadero", "Falso"],
      answerKey: "Falso", explanation: "Neg × Neg = Positivo. Ej.: (−3) × (−4) = 12.",
    },
    {
      id: "eq3", prompt: "¿Cuánto es (−8) × 5?",
      questionType: "mc", options: ["-40", "40", "-13", "13"],
      answerKey: "-40", explanation: "Neg × Pos = Neg. (−8) × 5 = −40.",
    },
  ]);

  interface QuizDef {
    qid: string;
    vid: string;
    moduloId: string;
    title: string;
    questions: string;
  }

  const quizDefs: QuizDef[] = [
    { qid: "quiz-demo-001", vid: "qv-demo-001", moduloId: IDS.modulo1,
      title: "Práctica de operaciones",   questions: questionsEnteros },
    { qid: "quiz-demo-002", vid: "qv-demo-002", moduloId: IDS.modulo1,
      title: "Evaluación de enteros",     questions: questionsFormal  },
  ];

  // Insertar quiz sin current_version_id primero (FK circular)
  const insertQuiz = sqlite.prepare(`
    INSERT OR IGNORE INTO quizzes
      (id, module_id, title, is_active, created_at, updated_at)
    VALUES (?, ?, ?, 1, ?, ?)
  `);

  const insertQV = sqlite.prepare(`
    INSERT OR IGNORE INTO quiz_versions
      (id, quiz_id, version_number, schema_version,
       questions, seed_policy, created_at, created_by)
    VALUES (?, ?, 1, 1, ?, 0, ?, ?)
  `);

  const updateQuizVersion = sqlite.prepare(`
    UPDATE quizzes SET current_version_id = ?, updated_at = ?
    WHERE id = ? AND current_version_id IS NULL
  `);

  for (const qd of quizDefs) {
    insertQuiz.run(qd.qid, qd.moduloId, qd.title, now, now);
    insertQV.run(qd.vid, qd.qid, qd.questions, now, IDS.profesor);
    updateQuizVersion.run(qd.vid, now, qd.qid);
  }

  console.log("  ✓ 3 módulos con teoría — 2 quizzes con preguntas");

  // ── 5. Progreso del alumno (JsonDocCollection: _id, doc) ─────────────────────
  console.log("📊 Creando progreso...");

  sqlite.exec(`
    CREATE TABLE IF NOT EXISTS "progreso_modulos"
      (_id TEXT PRIMARY KEY, doc TEXT NOT NULL)
  `);

  const insertProgreso = sqlite.prepare(`
    INSERT OR IGNORE INTO "progreso_modulos" (_id, doc) VALUES (?, ?)
  `);

  const progresos = [
    { usuarioId: IDS.alumno1, moduloId: IDS.modulo1, status: "completado", aulaId: IDS.aula1 },
    { usuarioId: IDS.alumno1, moduloId: IDS.modulo2, status: "en_progreso", aulaId: IDS.aula1 },
    { usuarioId: IDS.alumno2, moduloId: IDS.modulo1, status: "en_progreso", aulaId: IDS.aula1 },
    { usuarioId: IDS.alumno1, moduloId: IDS.modulo3, status: "completado",  aulaId: IDS.aula2 },
  ];

  for (const p of progresos) {
    const docId = `prog-${p.usuarioId}-${p.moduloId}`;
    insertProgreso.run(
      docId,
      JSON.stringify({ ...p, updatedAt: now })
    );
  }

  console.log("  ✓ Progreso de alumnos");

  // ── 6. Economía — saldos ─────────────────────────────────────────────────────
  console.log("💰 Creando saldos...");

  // saldos_usuario: PK (usuario_id, moneda) — sin columna id
  const insertSaldo = sqlite.prepare(`
    INSERT OR IGNORE INTO saldos_usuario
      (usuario_id, moneda, saldo, updated_at)
    VALUES (?, 'PF', ?, ?)
  `);
  insertSaldo.run(IDS.alumno1, 340, now);
  insertSaldo.run(IDS.alumno2, 120, now);

  // Movimientos de ledger
  const insertLedger = sqlite.prepare(`
    INSERT OR IGNORE INTO ledger_movimientos
      (id, usuario_id, tipo, monto, moneda, motivo, created_at)
    VALUES (?, ?, 'credito', ?, 'PF', ?, ?)
  `);
  insertLedger.run("ledger-demo-al1-1", IDS.alumno1, 200, "quiz_completado",     now);
  insertLedger.run("ledger-demo-al1-2", IDS.alumno1, 140, "modulo_completado",   now);
  insertLedger.run("ledger-demo-al2-1", IDS.alumno2, 120, "quiz_completado",     now);

  console.log("  ✓ Saldos + movimientos de ledger");

  // ── 7. Calendario ────────────────────────────────────────────────────────────
  console.log("📅 Creando eventos de calendario...");

  const insertCalEscuela = sqlite.prepare(`
    INSERT OR IGNORE INTO calendario_escuela
      (id, escuela_id, tipo, titulo, descripcion,
       fecha_inicio, fecha_fin, created_by, created_at, is_deleted)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 0)
  `);

  insertCalEscuela.run(
    "cal-demo-1", IDS.escuela,
    "acto_escolar",
    "Acto por el Día del Maestro",
    "Acto institucional en el patio principal. Asistencia obligatoria.",
    d(7), d(7), IDS.directivo, now
  );
  insertCalEscuela.run(
    "cal-demo-2", IDS.escuela,
    "vacaciones",
    "Receso de invierno",
    "Período de vacaciones de invierno para todos los niveles.",
    d(20), d(34), IDS.directivo, now
  );
  insertCalEscuela.run(
    "cal-demo-3", IDS.escuela,
    "feriado",
    "Feriado Nacional",
    "Día feriado inamovible.",
    d(3), d(3), IDS.directivo, now
  );

  // Actividades de aula
  const insertActAula = sqlite.prepare(`
    INSERT OR IGNORE INTO actividades_aula
      (id, aula_id, tipo, titulo, descripcion,
       fecha, fecha_fin, created_by, created_at, is_deleted)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 0)
  `);

  insertActAula.run(
    "act-demo-1", IDS.aula1,
    "evaluacion",
    "Evaluación de números enteros",
    "Evaluación formal del módulo 1. Traer calculadora.",
    d(7), null, IDS.profesor, now
  );
  insertActAula.run(
    "act-demo-2", IDS.aula1,
    "clase",
    "Clase de fracciones",
    "Introducción a fracciones propias e impropias.",
    d(0), null, IDS.profesor, now
  );
  insertActAula.run(
    "act-demo-3", IDS.aula2,
    "evento",
    "Taller de presupuesto familiar",
    "Ejercicio práctico grupal de planificación financiera.",
    d(14), null, IDS.profesor, now
  );

  console.log("  ✓ 3 eventos institucionales + 3 actividades de aula");

  // ── 8. Vínculo padre-hijo (JsonDocCollection: _id, doc) ──────────────────────
  console.log("👨‍👦 Creando vínculo padre-hijo...");

  sqlite.exec(`
    CREATE TABLE IF NOT EXISTS "vinculos_padre_hijo"
      (_id TEXT PRIMARY KEY, doc TEXT NOT NULL)
  `);

  sqlite.prepare(`
    INSERT OR IGNORE INTO "vinculos_padre_hijo" (_id, doc) VALUES (?, ?)
  `).run(
    `vinculo-${IDS.padre}-${IDS.alumno1}`,
    JSON.stringify({
      parentId: IDS.padre,
      childId:  IDS.alumno1,
      estado:   "aprobado",
      nombre:   "Juan Pérez",
      usuario:  "@alumno.perez",
      permisos: { tareas: true, mensajes: true },
      createdAt: now,
      updatedAt: now,
    })
  );

  console.log("  ✓ Roberto Pérez → Juan Pérez");

  // ── 9. Publicación de aula ────────────────────────────────────────────────────
  console.log("📌 Creando publicación de aula...");

  sqlite.prepare(`
    INSERT OR IGNORE INTO clase_publicaciones
      (id, clase_id, author_id, title, body, is_pinned, published_at)
    VALUES (?, ?, ?, ?, ?, 1, ?)
  `).run(
    "pub-demo-001",
    IDS.aula1,
    IDS.profesor,
    "Bienvenidos al aula de Matemática",
    "Este espacio es para compartir materiales, resolver dudas y seguir el progreso del curso. ¡Arranquemos con todo!",
    now
  );

  console.log("  ✓ Publicación fijada en aula 3° A");

  // ── 10. Resumen ───────────────────────────────────────────────────────────────
  console.log("\n✅ Seed de demostración completado.\n");
  console.log("Usuarios (contraseña: Password123!):");
  console.log(`  ${IDS.admin.padEnd(16)} admin@plataforma.com          ADMIN`);
  console.log(`  ${IDS.directivo.padEnd(16)} directivo@epnorte.edu.ar      DIRECTIVO`);
  console.log(`  ${IDS.profesor.padEnd(16)} garcia@epnorte.edu.ar          TEACHER`);
  console.log(`  ${IDS.alumno1.padEnd(16)} perez.alumno@epnorte.edu.ar   USER`);
  console.log(`  ${IDS.alumno2.padEnd(16)} lopez.alumno@epnorte.edu.ar   USER`);
  console.log(`  ${IDS.padre.padEnd(16)} perez.padre@gmail.com          PARENT`);
  console.log("\nAulas creadas:");
  console.log(`  ${IDS.aula1}  →  3° A — Matemática`);
  console.log(`  ${IDS.aula2}  →  4° B — Economía`);
  console.log("\nMódulos creados:");
  console.log(`  ${IDS.modulo1}  →  Números enteros`);
  console.log(`  ${IDS.modulo2}  →  Fracciones`);
  console.log(`  ${IDS.modulo3}  →  Presupuesto familiar`);
  console.log("\nCalendario: 3 eventos institucionales + 3 actividades de aula");
  console.log("Saldos: Juan Pérez 340 PF, Ana López 120 PF");

  sqlite.close();
}

main();
