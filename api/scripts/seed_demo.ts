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
import bcrypt from "bcryptjs";
import { createHash } from "crypto";

const hash = (pw: string) => bcrypt.hashSync(pw, 10);
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
      { usuarioId: "usr-stude-001", moduloId: "mod-demo-presupuesto", aulaId: "cls-demo-eco-4b", status: "completado", score: 78, attempts: 1, updatedAt: now },
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
