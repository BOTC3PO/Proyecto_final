#!/usr/bin/env ts-node
/**
 * seed_demo.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * Genera datos de demostración completos para probar todas las páginas.
 * Idempotente: usa skipDuplicates / upsert para no romper datos existentes.
 *
 * Uso:
 *   cd api && npx ts-node scripts/seed_demo.ts
 *
 * Credenciales (contraseña: Password123!):
 *   admin@plataforma.com          ADMIN
 *   directivo@epnorte.edu.ar      DIRECTIVO
 *   garcia@epnorte.edu.ar         TEACHER
 *   perez.alumno@epnorte.edu.ar   USER
 *   lopez.alumno@epnorte.edu.ar   USER
 *   perez.padre@gmail.com         PARENT
 */

import "dotenv/config";
import { prisma } from "../src/lib/prisma";
import { hashPassword } from "../src/lib/passwords";
import { createHash } from "crypto";
import { SYSTEM_OWNER_ID } from "../src/lib/vblang-types";
import { provisionarEspejosParaStaffExistente } from "../src/lib/provisionar-espejo";
import { resolveCuentaVinculada } from "../src/lib/cuenta-vinculada";
import { seedTienda } from "./seed_tienda";
import {
  TABLA_PERIODICA_COLUMNAS,
  TABLA_PERIODICA_FILAS,
  TABLA_PERIODICA_NOMBRE,
} from "../src/lib/tabla-periodica-dataset";

// FIX: alinear el hash con el verificador de la app (PBKDF2 via
// `hashPassword`). Antes usaba `bcrypt.hashSync` y producía un hash
// que `isPasswordHashUsable` rechaza, dejando el login roto en DBs
// pobladas solo por este script. `init_db.ts` ya usaba `hashPassword`
// — este cambio deja una sola fuente de verdad.
const hash = (pw: string) => hashPassword(pw);
const sha256 = (s: string) => createHash("sha256").update(s).digest("hex");
const now = new Date().toISOString();

const hoy = new Date();
const d = (offsetDays: number) => {
  const dt = new Date(hoy);
  dt.setDate(hoy.getDate() + offsetDays);
  return dt.toISOString().slice(0, 10);
};

async function main() {
  console.log("🌱 Iniciando seed de demostración...\n");

  // ── 1. Usuarios ──────────────────────────────────────────────────────────────
  console.log("👤 Creando usuarios...");
  await prisma.usuario.createMany({
    skipDuplicates: true,
    data: [
      {
        id: "usr-admin-001",
        username: "admin.plataforma",
        email: "admin@plataforma.com",
        fullName: "Administrador Demo",
        role: "ADMIN",
        passwordHash: hash("Password123!"),
        isDeleted: false,
        createdAt: now,
        updatedAt: now,
      },
      {
        id: "usr-direc-001",
        username: "directivo.norte",
        email: "directivo@epnorte.edu.ar",
        fullName: "María González",
        role: "DIRECTIVO",
        passwordHash: hash("Password123!"),
        isDeleted: false,
        createdAt: now,
        updatedAt: now,
      },
      {
        id: "usr-teach-001",
        username: "prof.garcia",
        email: "garcia@epnorte.edu.ar",
        fullName: "Prof. Carlos García",
        role: "TEACHER",
        passwordHash: hash("Password123!"),
        isDeleted: false,
        createdAt: now,
        updatedAt: now,
      },
      {
        id: "usr-stude-001",
        username: "alumno.perez",
        email: "perez.alumno@epnorte.edu.ar",
        fullName: "Juan Pérez",
        role: "USER",
        passwordHash: hash("Password123!"),
        isDeleted: false,
        createdAt: now,
        updatedAt: now,
      },
      {
        id: "usr-stude-002",
        username: "alumno.lopez",
        email: "lopez.alumno@epnorte.edu.ar",
        fullName: "Ana López",
        role: "USER",
        passwordHash: hash("Password123!"),
        isDeleted: false,
        createdAt: now,
        updatedAt: now,
      },
      {
        id: "usr-paren-001",
        username: "padre.perez",
        email: "perez.padre@gmail.com",
        fullName: "Roberto Pérez",
        role: "PARENT",
        passwordHash: hash("Password123!"),
        isDeleted: false,
        createdAt: now,
        updatedAt: now,
      },
    ],
  });
  console.log("  ✓ 6 usuarios");

  // ── 2. Escuela ───────────────────────────────────────────────────────────────
  console.log("🏫 Creando escuela...");
  await prisma.escuela.createMany({
    skipDuplicates: true,
    data: [
      {
        id: "esc-0001",
        name: "EP Norte Demo",
        code: "EPN-001",
        address: "Av. Corrientes 1234, Buenos Aires",
        subscriptionStatus: "ACTIVE",
        plan: "escuela",
        isDeleted: false,
        createdAt: now,
        updatedAt: now,
      },
    ],
  });

  await prisma.membresia.createMany({
    skipDuplicates: true,
    data: [
      { usuarioId: "usr-direc-001", escuelaId: "esc-0001", rol: "directivo", estado: "activa", fechaAlta: now },
      { usuarioId: "usr-teach-001", escuelaId: "esc-0001", rol: "docente",   estado: "activa", fechaAlta: now },
      { usuarioId: "usr-stude-001", escuelaId: "esc-0001", rol: "alumno",    estado: "activa", fechaAlta: now },
      { usuarioId: "usr-stude-002", escuelaId: "esc-0001", rol: "alumno",    estado: "activa", fechaAlta: now },
    ],
  });
  console.log("  ✓ Escuela + membresías");

  // FASE 1 — backfill idempotente de espejos alumno para el staff.
  // Se ejecuta DESPUÉS de crear las membresías para que el provision
  // pueda resolver la escuela del principal a partir de la membresia
  // activa (caso típico: `seed_demo` no setea `usuarios.escuelaId`
  // porque la membresia es la fuente de verdad canónica de la
  // escuela). El backfill es no-op si el espejo ya existía.
  const espejosBackfill = await provisionarEspejosParaStaffExistente();
  console.log(
    `  ✓ espejos-alumno: revisados=${espejosBackfill.revisados} ` +
      `creados=${espejosBackfill.creados} omitidos=${espejosBackfill.omitidos}`
  );

  // ── 3. Aulas ─────────────────────────────────────────────────────────────────
  console.log("🏛️  Creando aulas...");
  await prisma.clase.createMany({
    skipDuplicates: true,
    data: [
      {
        id: "cls-demo-mat-3a",
        escuelaId: "esc-0001",
        name: "3° A — Matemática",
        grade: "3° Año",
        code: "MAT-3A",
        isDeleted: false,
        status: "ACTIVE",
        createdAt: now,
      },
      {
        id: "cls-demo-eco-4b",
        escuelaId: "esc-0001",
        name: "4° B — Economía",
        grade: "4° Año",
        code: "ECO-4B",
        isDeleted: false,
        status: "ACTIVE",
        createdAt: now,
      },
    ],
  });

  await prisma.claseMiembro.createMany({
    skipDuplicates: true,
    data: [
      { claseId: "cls-demo-mat-3a", usuarioId: "usr-teach-001", rolEnClase: "TEACHER" },
      { claseId: "cls-demo-mat-3a", usuarioId: "usr-stude-001", rolEnClase: "STUDENT" },
      { claseId: "cls-demo-mat-3a", usuarioId: "usr-stude-002", rolEnClase: "STUDENT" },
      { claseId: "cls-demo-eco-4b", usuarioId: "usr-teach-001", rolEnClase: "TEACHER" },
      { claseId: "cls-demo-eco-4b", usuarioId: "usr-stude-001", rolEnClase: "STUDENT" },
    ],
  });
  console.log("  ✓ 2 aulas con miembros");

  // ── 4. Módulos con teoría ────────────────────────────────────────────────────
  console.log("📚 Creando módulos...");

  const teoriaEnteros = JSON.stringify([
    {
      id: "tb-e1",
      type: "text",
      title: "¿Qué son los números enteros?",
      detail:
        "Los números enteros incluyen positivos, negativos y el cero. Se usan para contar, medir temperaturas, pisos de edificios y saldos bancarios.",
    },
    {
      id: "tb-e2",
      type: "text",
      title: "Operaciones básicas",
      detail:
        "Las cuatro operaciones son suma (+), resta (-), multiplicación (×) y división (÷). Cada una tiene propiedades que simplifican cálculos complejos.",
    },
    {
      id: "tb-e3",
      type: "image",
      title: "La recta numérica",
      detail: "Recta que muestra números enteros del -5 al 5, con el cero al centro.",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Simple_number_line.svg/800px-Simple_number_line.svg.png",
      alt: "Recta numérica del -5 al 5",
      caption: "Los números se ordenan de menor a mayor de izquierda a derecha",
      width: "full",
    },
  ]);

  const teoriaFracciones = JSON.stringify([
    {
      id: "tb-f1",
      type: "text",
      title: "¿Qué es una fracción?",
      detail:
        "Una fracción representa una parte de un todo. Se escribe como a/b: 'a' es el numerador (partes tomadas) y 'b' el denominador (total de partes).",
    },
    {
      id: "tb-f2",
      type: "text",
      title: "Suma y resta de fracciones",
      detail:
        "Con igual denominador sumamos los numeradores. Con denominadores distintos buscamos el mínimo común múltiplo (mcm) antes de operar.",
    },
  ]);

  const teoriaPresupuesto = JSON.stringify([
    {
      id: "tb-p1",
      type: "text",
      title: "¿Qué es un presupuesto?",
      detail:
        "Un presupuesto es un plan de ingresos y gastos. Ayuda a saber cuánto dinero entra, cuánto sale y si podemos ahorrar.",
    },
    {
      id: "tb-p2",
      type: "text",
      title: "Gastos fijos y variables",
      detail:
        "Gastos fijos: siempre iguales (alquiler, cuotas). Gastos variables: cambian cada mes (comida, transporte). Identificarlos es el primer paso para ahorrar.",
    },
  ]);

  await prisma.teoriaJson.createMany({
    skipDuplicates: true,
    data: [
      { id: "teoria-demo-enteros",     schemaVersion: 1, content: teoriaEnteros,     contentHash: sha256(teoriaEnteros),     createdAt: now, updatedAt: now },
      { id: "teoria-demo-fracciones",  schemaVersion: 1, content: teoriaFracciones,  contentHash: sha256(teoriaFracciones),  createdAt: now, updatedAt: now },
      { id: "teoria-demo-presupuesto", schemaVersion: 1, content: teoriaPresupuesto, contentHash: sha256(teoriaPresupuesto), createdAt: now, updatedAt: now },
    ],
  });

  await prisma.modulo.createMany({
    skipDuplicates: true,
    data: [
      {
        id: "mod-demo-enteros",
        slug: "numeros-enteros",
        titulo: "Números enteros y operaciones básicas",
        descripcion: "Aprendé a sumar, restar, multiplicar y dividir números enteros con ejemplos reales.",
        visibility: "public",
        schoolId: "esc-0001",
        ownerUserId: "usr-teach-001",
        teoriaId: "teoria-demo-enteros",
        isDeleted: false,
        createdAt: now,
        updatedAt: now,
      },
      {
        id: "mod-demo-fracciones",
        slug: "fracciones-decimales",
        titulo: "Fracciones y números decimales",
        descripcion: "Entendé qué son las fracciones, cómo se operan y su relación con los decimales.",
        visibility: "public",
        schoolId: "esc-0001",
        ownerUserId: "usr-teach-001",
        teoriaId: "teoria-demo-fracciones",
        isDeleted: false,
        createdAt: now,
        updatedAt: now,
      },
      {
        id: "mod-demo-presupuesto",
        slug: "presupuesto-familiar",
        titulo: "Presupuesto familiar y ahorro",
        descripcion: "Aprendé a planificar gastos e identificar necesidades para tomar decisiones financieras.",
        visibility: "public",
        schoolId: "esc-0001",
        ownerUserId: "usr-teach-001",
        teoriaId: "teoria-demo-presupuesto",
        isDeleted: false,
        createdAt: now,
        updatedAt: now,
      },
    ],
  });

  await prisma.claseModulo.createMany({
    skipDuplicates: true,
    data: [
      { claseId: "cls-demo-mat-3a", moduloId: "mod-demo-enteros",    assignedAt: now, required: true },
      { claseId: "cls-demo-mat-3a", moduloId: "mod-demo-fracciones", assignedAt: now, required: true },
      { claseId: "cls-demo-eco-4b", moduloId: "mod-demo-presupuesto", assignedAt: now, required: true },
    ],
  });

  // Quizzes — patrón: insertar sin current_version_id, luego versión, luego actualizar
  const questionsEnteros = JSON.stringify([
    {
      id: "q1",
      prompt: "¿Cuánto es 15 + 28?",
      questionType: "mc",
      options: ["41", "43", "45", "38"],
      answerKey: "43",
      explanation: "15 + 28 = 43.",
    },
    {
      id: "q2",
      prompt: "¿Cuánto es 100 − 37?",
      questionType: "mc",
      options: ["63", "67", "73", "57"],
      answerKey: "63",
      explanation: "100 - 37 = 63.",
    },
    {
      id: "q3",
      prompt: "¿Verdadero o falso? 6 × 7 = 42",
      questionType: "vf",
      options: ["Verdadero", "Falso"],
      answerKey: "Verdadero",
      explanation: "6 × 7 = 42. Correcto.",
    },
    {
      id: "q4",
      prompt: "¿Cuánto es 48 ÷ 6?",
      questionType: "mc",
      options: ["6", "7", "8", "9"],
      answerKey: "8",
      explanation: "48 ÷ 6 = 8, porque 6 × 8 = 48.",
    },
    {
      id: "q5",
      prompt: "Tenés $250 y gastás $87. ¿Cuánto queda?",
      questionType: "mc",
      options: ["$153", "$163", "$173", "$143"],
      answerKey: "$163",
      explanation: "250 - 87 = 163.",
    },
  ]);

  const questionsFormal = JSON.stringify([
    {
      id: "eq1",
      prompt: "¿Cuál es el resultado de −5 + 12?",
      questionType: "mc",
      options: ["7", "-7", "17", "-17"],
      answerKey: "7",
      explanation: "−5 + 12 = 7.",
    },
    {
      id: "eq2",
      prompt: "¿Verdadero o falso? El producto de dos negativos es negativo.",
      questionType: "vf",
      options: ["Verdadero", "Falso"],
      answerKey: "Falso",
      explanation: "Neg × Neg = Positivo. Ej.: (−3) × (−4) = 12.",
    },
    {
      id: "eq3",
      prompt: "¿Cuánto es (−8) × 5?",
      questionType: "mc",
      options: ["-40", "40", "-13", "13"],
      answerKey: "-40",
      explanation: "Neg × Pos = Neg. (−8) × 5 = −40.",
    },
  ]);

  for (const [qid, vid, moduloId, title, questions] of [
    ["quiz-demo-001", "qv-demo-001", "mod-demo-enteros", "Práctica de operaciones", questionsEnteros],
    ["quiz-demo-002", "qv-demo-002", "mod-demo-enteros", "Evaluación de enteros",   questionsFormal],
  ] as [string, string, string, string, string][]) {
    await prisma.quiz.upsert({
      where: { id: qid },
      create: { id: qid, moduleId: moduloId, title, isActive: true, createdAt: now, updatedAt: now },
      update: {},
    });
    await prisma.quizVersion.upsert({
      where: { quizId_versionNumber: { quizId: qid, versionNumber: 1 } },
      create: { id: vid, quizId: qid, versionNumber: 1, schemaVersion: 1, questions, seedPolicy: 0, createdAt: now, createdBy: "usr-teach-001" },
      update: {},
    });
    await prisma.quiz.update({
      where: { id: qid },
      data: { currentVersionId: vid },
    });
  }

  console.log("  ✓ 3 módulos con teoría — 2 quizzes");

  // ── 5. Progreso ──────────────────────────────────────────────────────────────
  console.log("📊 Creando progreso...");
  await prisma.progresoModulo.createMany({
    skipDuplicates: true,
    data: [
      { usuarioId: "usr-stude-001", moduloId: "mod-demo-enteros",    aulaId: "cls-demo-mat-3a", status: "completado",  score: 85, attempts: 2, updatedAt: now },
      { usuarioId: "usr-stude-001", moduloId: "mod-demo-fracciones", aulaId: "cls-demo-mat-3a", status: "en_progreso", score: null, attempts: 1, updatedAt: now },
      { usuarioId: "usr-stude-001", moduloId: "mod-demo-presupuesto", aulaId: "cls-demo-eco-4b", status: "completado",  score: 78, attempts: 1, updatedAt: now },
      { usuarioId: "usr-stude-002", moduloId: "mod-demo-enteros",    aulaId: "cls-demo-mat-3a", status: "completado",  score: 92, attempts: 1, updatedAt: now },
    ],
  });
  console.log("  ✓ Progreso de alumnos");

  // ── 6. Saldos + ledger ───────────────────────────────────────────────────────
  console.log("💰 Creando saldos...");
  await prisma.economiaSaldo.createMany({
    skipDuplicates: true,
    data: [
      { usuarioId: "usr-stude-001", saldo: 340, moneda: "PF", updatedAt: now },
      { usuarioId: "usr-stude-002", saldo: 120, moneda: "PF", updatedAt: now },
    ],
  });

  await prisma.ledgerMovimiento.createMany({
    skipDuplicates: true,
    data: [
      { id: "ledger-demo-al1-1", usuarioId: "usr-stude-001", tipo: "credito", monto: 200, moneda: "PF", motivo: "quiz_completado",   createdAt: now },
      { id: "ledger-demo-al1-2", usuarioId: "usr-stude-001", tipo: "credito", monto: 140, moneda: "PF", motivo: "modulo_completado", createdAt: now },
      { id: "ledger-demo-al2-1", usuarioId: "usr-stude-002", tipo: "credito", monto: 120, moneda: "PF", motivo: "quiz_completado",   createdAt: now },
    ],
  });
  console.log("  ✓ Saldos + movimientos de ledger");

  // ── 7. Calendario ────────────────────────────────────────────────────────────
  console.log("📅 Creando eventos...");
  await prisma.calendarioEscuela.createMany({
    skipDuplicates: true,
    data: [
      {
        id: "cal-demo-1",
        escuelaId: "esc-0001",
        tipo: "acto_escolar",
        titulo: "Acto por el Día del Maestro",
        descripcion: "Acto institucional en el patio principal. Asistencia obligatoria.",
        fechaInicio: d(7),
        fechaFin: d(7),
        createdBy: "usr-direc-001",
        createdAt: now,
        isDeleted: false,
      },
      {
        id: "cal-demo-2",
        escuelaId: "esc-0001",
        tipo: "vacaciones",
        titulo: "Receso de invierno",
        descripcion: "Período de vacaciones de invierno para todos los niveles.",
        fechaInicio: d(20),
        fechaFin: d(34),
        createdBy: "usr-direc-001",
        createdAt: now,
        isDeleted: false,
      },
      {
        id: "cal-demo-3",
        escuelaId: "esc-0001",
        tipo: "feriado",
        titulo: "Feriado Nacional",
        descripcion: "Día feriado inamovible.",
        fechaInicio: d(3),
        fechaFin: d(3),
        createdBy: "usr-direc-001",
        createdAt: now,
        isDeleted: false,
      },
    ],
  });

  await prisma.actividadAula.createMany({
    skipDuplicates: true,
    data: [
      {
        id: "act-demo-1",
        aulaId: "cls-demo-mat-3a",
        tipo: "evaluacion",
        titulo: "Evaluación de números enteros",
        descripcion: "Evaluación formal del módulo 1. Traer calculadora.",
        fecha: d(7),
        createdBy: "usr-teach-001",
        createdAt: now,
        isDeleted: false,
      },
      {
        id: "act-demo-2",
        aulaId: "cls-demo-mat-3a",
        tipo: "clase",
        titulo: "Clase de fracciones",
        descripcion: "Introducción a fracciones propias e impropias.",
        fecha: d(0),
        createdBy: "usr-teach-001",
        createdAt: now,
        isDeleted: false,
      },
      {
        id: "act-demo-3",
        aulaId: "cls-demo-eco-4b",
        tipo: "evento",
        titulo: "Taller de presupuesto familiar",
        descripcion: "Ejercicio práctico grupal de planificación financiera.",
        fecha: d(14),
        createdBy: "usr-teach-001",
        createdAt: now,
        isDeleted: false,
      },
    ],
  });
  console.log("  ✓ 3 eventos institucionales + 3 actividades de aula");

  // ── 8. Vínculo padre-hijo ────────────────────────────────────────────────────
  console.log("👨‍👦 Creando vínculo padre-hijo...");
  await prisma.progresoModuloVinculo.createMany({
    skipDuplicates: true,
    data: [
      {
        parentId: "usr-paren-001",
        childId: "usr-stude-001",
        estado: "aprobado",
        nombre: "Juan Pérez",
        usuario: "@alumno.perez",
        permisos: JSON.stringify({ tareas: true, mensajes: true }),
        createdAt: now,
        updatedAt: now,
      },
    ],
  });
  console.log("  ✓ Roberto Pérez → Juan Pérez");

  // ── 9. Publicación fijada en aula ────────────────────────────────────────────
  console.log("📌 Creando publicación de aula...");
  await prisma.clasePublicacion.createMany({
    skipDuplicates: true,
    data: [
      {
        id: "pub-demo-001",
        claseId: "cls-demo-mat-3a",
        authorId: "usr-teach-001",
        title: "Bienvenidos al aula de Matemática",
        body: "Este espacio es para compartir materiales, resolver dudas y seguir el progreso del curso. ¡Arranquemos con todo!",
        isPinned: true,
        publishedAt: now,
      },
    ],
  });
  console.log("  ✓ Publicación fijada en aula 3° A");

  // ── Resumen ──────────────────────────────────────────────────────────────────
  console.log("\n✅ Seed de demostración completado.\n");
  console.log("Usuarios (contraseña: Password123!):");
  console.log("  admin@plataforma.com          ADMIN");
  console.log("  directivo@epnorte.edu.ar      DIRECTIVO");
  console.log("  garcia@epnorte.edu.ar         TEACHER");
  console.log("  perez.alumno@epnorte.edu.ar   USER");
  console.log("  lopez.alumno@epnorte.edu.ar   USER");
  console.log("  perez.padre@gmail.com         PARENT");
  console.log("\nAulas:   cls-demo-mat-3a (3° A — Matemática), cls-demo-eco-4b (4° B — Economía)");
  console.log("Módulos: mod-demo-enteros, mod-demo-fracciones, mod-demo-presupuesto");
  console.log("Saldos:  Juan Pérez 340 PF, Ana López 120 PF");

  // ── 10. Datasets VBLang con coordenadas (M6) ────────────────────────────────
  // Columnas lat/lon/nombre: el editor las detecta con
  // `datasetTieneCoordenadas` (filtra por `lat`, `latitud`, `latitude`, `y`
  // combinado con `lon`, `lng`, `long`, `longitud`, `longitude`, `x`).
  // Etiqueta usa `nombre` (matchea con la lista de label keys del editor).
  // Visibilidad "publica" para que cualquier usuario las pueda conectar.
  console.log("🗺️  Creando datasets de mapas con coordenadas...");
  await seedDatasetsMapa();
  console.log("  ✓ 2 datasets de mapas (Capitales de América, Ciudades de Argentina)");

  // ── 11. Dataset oficial "tabla periódica" (F6-06) ───────────────────────────
  console.log("🧪 Creando dataset oficial 'tabla_periodica'...");
  await seedDatasetTablaPeriodica();
  console.log(`  ✓ dataset "${TABLA_PERIODICA_NOMBRE}" (${TABLA_PERIODICA_FILAS.length} elementos)`);

  // ── 12. Catálogo de tienda (temas + avatares) ──────────────────────────────
  console.log("🛒 Sembrando catálogo de tienda...");
  await seedTienda();

  // ── 13. Enriquecer el espejo-alumno del TEACHER demo ────────────────────────
  // Sin esto el espejo queda con membresía STUDENT a nivel escuela pero sin
  // inscripción en aulas → dashboard de alumno vacío. Acá lo inscribimos en
  // las aulas del docente y le damos saldo, para que "Ver como alumno"
  // muestre una experiencia realista.
  console.log("🪞 Enriqueciendo el espejo-alumno del docente demo...");
  await seedEspejoTeacherDemo();
}

/**
 * Inscribe el espejo-alumno de `usr-teach-001` como STUDENT en sus aulas y
 * le asigna un saldo demo. Idempotente. No-op si el espejo aún no existe
 * (el backfill de espejos corre antes en main(), así que normalmente sí).
 */
async function seedEspejoTeacherDemo() {
  const vinc = await resolveCuentaVinculada("usr-teach-001");
  if (!vinc || vinc.tipoDestino !== "ALUMNO") {
    console.log("  ⚠ espejo del docente no encontrado; salteo enriquecimiento");
    return;
  }
  const espejoId = vinc.destinoUsuarioId;

  await prisma.claseMiembro.createMany({
    skipDuplicates: true,
    data: [
      { claseId: "cls-demo-mat-3a", usuarioId: espejoId, rolEnClase: "STUDENT" },
      { claseId: "cls-demo-eco-4b", usuarioId: espejoId, rolEnClase: "STUDENT" },
    ],
  });

  await prisma.economiaSaldo.upsert({
    where: { usuarioId: espejoId },
    update: {},
    create: { usuarioId: espejoId, saldo: 200, moneda: "PF", updatedAt: now },
  });

  console.log("  ✓ espejo inscripto en 2 aulas + saldo 200 PF");
}

/**
 * Crea dos datasets demo de mapas con columnas `lat`, `lon` y `nombre`.
 * Idempotente: si ya existe un dataset con el mismo `nombre` para el owner,
 * lo borra y lo reemplaza (así también es seguro re-sembrar si cambian las
 * filas). Usa `usr-teach-001` como owner para mantener consistencia con el
 * resto del seed.
 */
async function seedDatasetsMapa() {
  // Borrar versiones previas de los datasets demo (idempotencia "limpia"):
  // si el docente re-corre el seed, queremos las coordenadas actualizadas.
  const datasetsViejos = await prisma.vblangDataset.findMany({
    where: { ownerUserId: "usr-teach-001", nombre: { in: ["Capitales de América", "Ciudades de Argentina"] } },
    select: { id: true },
  });
  if (datasetsViejos.length > 0) {
    const idsViejos = datasetsViejos.map((d) => d.id);
    await prisma.vblangDatasetFila.deleteMany({ where: { datasetId: { in: idsViejos } } });
    await prisma.vblangDataset.deleteMany({ where: { id: { in: idsViejos } } });
  }

  const datasets = [
    {
      id: "ds-demo-capitales-america",
      nombre: "Capitales de América",
      descripcion: "Capitales de los países de América con coordenadas geográficas.",
      filas: [
        { nombre: "Buenos Aires", lat: -34.61, lon: -58.38 },
        { nombre: "Brasilia", lat: -15.79, lon: -47.88 },
        { nombre: "Santiago", lat: -33.45, lon: -70.66 },
        { nombre: "Lima", lat: -12.05, lon: -77.04 },
        { nombre: "Bogotá", lat: 4.71, lon: -74.07 },
        { nombre: "Quito", lat: -0.18, lon: -78.47 },
        { nombre: "Caracas", lat: 10.5, lon: -66.92 },
        { nombre: "Georgetown", lat: 6.8, lon: -58.16 },
        { nombre: "Paramaribo", lat: 5.85, lon: -55.2 },
        { nombre: "Cayena", lat: 4.93, lon: -52.33 },
        { nombre: "La Paz", lat: -16.49, lon: -68.15 },
        { nombre: "Asunción", lat: -25.27, lon: -57.63 },
        { nombre: "Montevideo", lat: -34.9, lon: -56.16 },
        { nombre: "Ciudad de México", lat: 19.43, lon: -99.13 },
        { nombre: "Washington D. C.", lat: 38.9, lon: -77.04 },
        { nombre: "Ottawa", lat: 45.42, lon: -75.7 },
        { nombre: "La Habana", lat: 23.13, lon: -82.38 },
        { nombre: "Kingston", lat: 17.98, lon: -76.79 },
        { nombre: "Santo Domingo", lat: 18.49, lon: -69.93 },
        { nombre: "San Salvador", lat: 13.69, lon: -89.22 },
      ],
    },
    {
      id: "ds-demo-ciudades-argentina",
      nombre: "Ciudades de Argentina",
      descripcion: "Ciudades principales de Argentina con coordenadas geográficas.",
      filas: [
        { nombre: "Ciudad Autónoma de Buenos Aires", lat: -34.61, lon: -58.38 },
        { nombre: "Córdoba", lat: -31.42, lon: -64.18 },
        { nombre: "Rosario", lat: -32.95, lon: -60.66 },
        { nombre: "Mendoza", lat: -32.89, lon: -68.84 },
        { nombre: "La Plata", lat: -34.92, lon: -57.95 },
        { nombre: "San Miguel de Tucumán", lat: -26.82, lon: -65.22 },
        { nombre: "Mar del Plata", lat: -38.0, lon: -57.55 },
        { nombre: "Salta", lat: -24.79, lon: -65.41 },
        { nombre: "Santa Fe", lat: -31.63, lon: -60.7 },
        { nombre: "San Juan", lat: -31.54, lon: -68.53 },
        { nombre: "Resistencia", lat: -27.45, lon: -59.0 },
        { nombre: "Neuquén", lat: -38.95, lon: -68.06 },
        { nombre: "Bahía Blanca", lat: -38.71, lon: -62.27 },
        { nombre: "Posadas", lat: -27.37, lon: -55.9 },
        { nombre: "Bariloche", lat: -41.13, lon: -71.31 },
      ],
    },
  ];

  for (const ds of datasets) {
    await prisma.vblangDataset.create({
      data: {
        id: ds.id,
        ownerUserId: "usr-teach-001",
        schoolId: "esc-0001",
        visibility: "publica",
        nombre: ds.nombre,
        descripcion: ds.descripcion,
        // El formato de `columnas` y `datos` es JSON string (ver vblang-datasets.ts).
        columnas: JSON.stringify({
          lat: "number",
          lon: "number",
          nombre: "string",
        }),
        isDeleted: false,
        createdAt: now,
        updatedAt: now,
      },
    });
    await prisma.vblangDatasetFila.createMany({
      data: ds.filas.map((datos, i) => ({
        id: `${ds.id}-fila-${i}`,
        datasetId: ds.id,
        orden: i,
        datos: JSON.stringify(datos),
        createdAt: now,
      })),
    });
  }
}

/**
 * Crea el dataset oficial "tabla_periodica" (F6-06): 16 elementos con Z,
 * símbolo, config electrónica, electronegatividad y radio atómico (pm).
 * Owner `SYSTEM_OWNER_ID`, `visibility: "publica"` — mismo patrón que las
 * plantillas oficiales de F6-01. Idempotente: borra la versión previa antes
 * de re-sembrar.
 */
async function seedDatasetTablaPeriodica() {
  const id = "ds-oficial-tabla-periodica";

  await prisma.vblangDatasetFila.deleteMany({ where: { datasetId: id } });
  await prisma.vblangDataset.deleteMany({ where: { id } });

  await prisma.vblangDataset.create({
    data: {
      id,
      ownerUserId: SYSTEM_OWNER_ID,
      schoolId: null,
      visibility: "publica",
      nombre: TABLA_PERIODICA_NOMBRE,
      descripcion: "Tabla periódica (Z, símbolo, configuración electrónica, electronegatividad, radio atómico).",
      columnas: JSON.stringify(TABLA_PERIODICA_COLUMNAS),
      isDeleted: false,
      createdAt: now,
      updatedAt: now,
    },
  });
  await prisma.vblangDatasetFila.createMany({
    data: TABLA_PERIODICA_FILAS.map((datos, i) => ({
      id: `${id}-fila-${i}`,
      datasetId: id,
      orden: i,
      datos: JSON.stringify(datos),
      createdAt: now,
    })),
  });
}

export { main as runSeedDemo };

if (require.main === module) {
  main()
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(() => prisma.$disconnect());
}
