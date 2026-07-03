import type { Prisma } from "@prisma/client";
import { Router } from "express";
import { prisma } from "../lib/prisma";
import { requireUser } from "../lib/user-auth";
import { excluirEspejos, whereExcluirEspejos } from "../lib/espejo-filtro";

type AuthUser = {
  id?: string;
  _id?: { toString?: () => string } | string;
  fullName?: string;
  username?: string;
  email?: string;
  role?: string;
};

type ClassroomMember = {
  userId?: string;
  roleInClass?: string;
};

type AulaDocente = {
  id?: string;
  name?: string;
  createdBy?: string;
  teacherId?: string;
  teacherOfRecord?: string;
  members?: ClassroomMember[];
  updatedAt?: string;
  status?: string;
};

type ModuloDocente = {
  id?: string;
  title?: string;
  createdBy?: string;
  aulaId?: string;
  updatedAt?: string;
};

type CursoDocente = {
  _id?: string;
  id?: string;
  name?: string;
  enrollments?: { userId?: string }[];
  isDeleted?: boolean;
  status?: string;
};

type CalificacionDocente = {
  _id?: string;
  id?: string;
  grupo?: string;
  curso?: string;
  pendientes?: number;
  pending?: number;
  ultimaEntrega?: string;
  lastSubmissionAt?: string;
};

export const profesor = Router();

profesor.use(requireUser);

const getTeacherId = (user?: AuthUser) => {
  const raw = user?.id ?? user?._id;
  if (!raw) return null;
  if (typeof raw === "string") return raw;
  return (raw as { toString?: () => string }).toString?.() ?? null;
};

const getDocumentId = (doc?: { _id?: string; id?: string }) => {
  if (doc?.id) return doc.id;
  if (!doc?._id) return "";
  return doc._id ?? "";
};

const getDisplayName = (user?: AuthUser) =>
  user?.fullName || user?.username || user?.email || "Docente";

const getInitials = (name: string) => {
  const parts = name
    .split(" ")
    .map((part) => part.trim())
    .filter(Boolean);
  if (parts.length === 0) return "--";
  const initials = parts
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
  return initials || "--";
};

const sortByUpdatedAt = (items: AulaDocente[]) =>
  [...items].sort((a, b) => {
    const aDate = a.updatedAt ? Date.parse(a.updatedAt) : 0;
    const bDate = b.updatedAt ? Date.parse(b.updatedAt) : 0;
    return bDate - aDate;
  });

profesor.get("/api/profesor/menu", async (req, res) => {
  const user = (req as { user?: AuthUser }).user;
  const teacherId = getTeacherId(user);
  if (!teacherId) {
    res.status(403).json({ error: "forbidden" });
    return;
  }

  // Fetch aulas where teacher is creator, primary teacher, teacher of record,
  // or a TEACHER member via clase_miembros
  const teacherMemberships = await prisma.claseMiembro.findMany({
    where: { usuarioId: teacherId, rolEnClase: "TEACHER" },
    select: { claseId: true },
  });
  const memberClaseIds = teacherMemberships.map((m) => m.claseId);

  const clasesRaw = await prisma.clase.findMany({
    where: {
      OR: [
        { createdBy: teacherId },
        { teacherId: teacherId },
        { teacherOfRecord: teacherId },
        ...(memberClaseIds.length > 0 ? [{ id: { in: memberClaseIds } }] : []),
      ],
    },
    select: {
      id: true,
      name: true,
      createdBy: true,
      teacherId: true,
      teacherOfRecord: true,
      updatedAt: true,
      status: true,
    },
  });

  // Shape into AulaDocente for compatibility with existing logic
  const aulas: AulaDocente[] = clasesRaw.map((c) => ({
    id: c.id,
    name: c.name,
    createdBy: c.createdBy ?? undefined,
    teacherId: c.teacherId ?? undefined,
    teacherOfRecord: c.teacherOfRecord ?? undefined,
    updatedAt: c.updatedAt ?? undefined,
    status: c.status,
    members: [],
  }));

  const aulaIds = aulas.map((aula) => aula.id).filter((id): id is string => Boolean(id));

  // Fetch modulos
  const moduloFilters: Prisma.ModuloWhereInput[] = [
    { ownerUserId: teacherId },
  ];
  if (aulaIds.length > 0) {
    // Also fetch modulos assigned to teacher's classes via ClaseModulo
    const claseModulos = await prisma.claseModulo.findMany({
      where: { claseId: { in: aulaIds } },
      select: { moduloId: true },
    });
    const assignedModuloIds = claseModulos.map((cm) => cm.moduloId);
    if (assignedModuloIds.length > 0) {
      moduloFilters.push({ id: { in: assignedModuloIds } });
    }
  }

  const modulosRaw = await prisma.modulo.findMany({
    where: { OR: moduloFilters, isDeleted: { not: true } },
    select: { id: true, titulo: true, ownerUserId: true },
  });

  const modules: ModuloDocente[] = modulosRaw.map((m) => ({
    id: m.id,
    title: m.titulo,
    createdBy: m.ownerUserId ?? undefined,
  }));

  // FIX-PANEL-EVALUACIONES — la sección "Evaluaciones recientes" del
  // panel del profesor mostraba módulos (no evaluaciones) y no tenía
  // materia asociada. El docente veía títulos sin contexto y la UX
  // quedaba inconsistente. Ahora consultamos los QuizAttempt reales
  // del modelo nuevo (no la colección legacy "ejercicios" que ya no
  // existe) y devolvemos el `title` del quiz + el `subject` (materia)
  // del módulo dueño. Esto cubre simultáneamente:
  //   - bug 1.1: el título es ahora siempre visible (viene del Quiz).
  //   - bug 1.2: la materia/categoría se incluye como campo
  //     `category` derivado del módulo (módulo.subject ?? módulo.titulo).
  // Los intentos se ordenan por `startedAt desc` (campo canónico del
  // modelo) y se limitan a 4 para mantener paridad visual con la
  // sección anterior.
  type RecentEvaluation = {
    id: string;
    title: string;
    category: string;
    moduleId: string;
    quizId: string;
    status: string;
    startedAt: string;
  };
  const recentEvaluations: RecentEvaluation[] = [];
  if (aulaIds.length > 0 || moduloFilters.length > 0) {
    // 1) Traemos los módulos del docente (dueño o asignado a un aula
    //    suya) — los mismos que ya usamos arriba.
    const teacherModuloIds = modulosRaw.map((m) => m.id);
    if (teacherModuloIds.length > 0) {
      // 2) Buscamos los quizzes de esos módulos.
      const quizzes = await prisma.quiz.findMany({
        where: { moduleId: { in: teacherModuloIds } },
        select: { id: true, moduleId: true, title: true },
      });
      const quizById = new Map(quizzes.map((q) => [q.id, q]));
      const moduleSubject = new Map(
        (await prisma.modulo.findMany({
          where: { id: { in: teacherModuloIds } },
          select: { id: true, subject: true, titulo: true },
        })).map((m) => [m.id, m]),
      );
      const quizIds = quizzes.map((q) => q.id);
      if (quizIds.length > 0) {
        const attempts = await prisma.quizAttempt.findMany({
          where: { quizId: { in: quizIds } },
          select: { id: true, quizId: true, status: true, startedAt: true },
        });
        const sorted = [...attempts].sort((a, b) =>
          String(b.startedAt ?? "").localeCompare(String(a.startedAt ?? ""))
        );
        for (const attempt of sorted.slice(0, 4)) {
          const quiz = quizById.get(attempt.quizId);
          if (!quiz) continue;
          const mod = moduleSubject.get(quiz.moduleId);
          recentEvaluations.push({
            id: attempt.id,
            title: quiz.title ?? "(sin título)",
            category: mod?.subject ?? mod?.titulo ?? "Sin materia",
            moduleId: quiz.moduleId,
            quizId: quiz.id,
            status: attempt.status,
            startedAt: attempt.startedAt,
          });
        }
      }
    }
  }

  // Count active students via clase_miembros.
  // FASE 4 — excluimos los espejos-alumno para no inflar el KPI de
  // "estudiantes activos" del panel docente.
  const allStudentMembershipsRaw = await prisma.claseMiembro.findMany({
    where: { claseId: { in: aulaIds }, rolEnClase: "STUDENT" },
    select: { usuarioId: true },
  });
  const allStudentMemberships = await excluirEspejos(allStudentMembershipsRaw);
  const activeStudents = new Set(allStudentMemberships.map((m) => m.usuarioId));

  const sortedAulas = sortByUpdatedAt(aulas);
  const nextClassroom = sortedAulas[0];
  const nextClassDetail = nextClassroom?.name || "Sin clases asignadas";
  const nextClassModules = nextClassroom?.id
    ? modules.filter((module) => module.aulaId === nextClassroom.id)
    : [];
  const progressNextClass =
    modules.length === 0
      ? 0
      : Math.min(100, Math.round((nextClassModules.length / modules.length) * 100));

  const modulesCreatedByTeacher = modules.filter(
    (module) => module.createdBy === teacherId
  ).length;

  const profileName = getDisplayName(user);

  res.json({
    profile: {
      name: profileName,
      role: user?.role === "TEACHER" ? "Docente" : user?.role ?? "Docente",
      initials: getInitials(profileName)
    },
    nextClass: {
      label: "Próxima clase",
      detail: nextClassDetail
    },
    activeStudents: activeStudents.size,
    progressNextClass,
    recentEvaluations,
    kpiCards: [
      {
        id: "aulas",
        label: "Aulas activas",
        value: aulas.length,
        helper: "Clases en las que estás asignado",
        href: "/profesor/aulas",
        icon: "🏫"
      },
      {
        id: "modulos",
        label: "Módulos creados",
        value: modulesCreatedByTeacher,
        helper: "Contenido disponible para tus cursos",
        href: "/modulos",
        icon: "📚"
      },
      {
        id: "asistencia",
        label: "Estudiantes activos",
        value: activeStudents.size,
        helper: "Alumnos únicos en tus aulas",
        href: "/profesor/asistencia",
        icon: "👥"
      }
    ],
    weeklyPlan: await (async () => {
      const top3 = sortedAulas.slice(0, 3);
      const top3Ids = top3.map((a) => a.id ?? "").filter(Boolean);
      // FASE 4 — excluimos espejos del conteo por aula del plan semanal.
      const memberCounts = top3Ids.length
        ? await prisma.claseMiembro.groupBy({
            by: ["claseId"],
            where: { claseId: { in: top3Ids }, rolEnClase: "STUDENT", ...(await whereExcluirEspejos()) },
            _count: { usuarioId: true },
          })
        : [];
      const countMap = new Map(memberCounts.map((m) => [m.claseId, m._count.usuarioId]));
      return top3.map((aula, index) => ({
        id: aula.id ?? `aula-${index}`,
        title: aula.name ?? `Clase ${index + 1}`,
        detail: `${countMap.get(aula.id ?? "") ?? 0} estudiantes en el aula`,
        status: aula.status ?? "Programada",
      }));
    })(),
    quickLinks: {
      academico: [
        { id: "aulas", label: "Aulas", href: "/profesor/aulas" },
        { id: "cursos", label: "Cursos", href: "/profesor/cursos" },
        { id: "calificaciones", label: "Calificaciones", href: "/profesor/calificaciones" },
        { id: "materiales", label: "Materiales", href: "/profesor/materiales" },
        { id: "evaluaciones", label: "Evaluaciones", href: "/profesor/evaluaciones" },
        { id: "modulos", label: "Módulos", href: "/modulos" }
      ],
      gestion: [
        { id: "asistencia", label: "Asistencia", href: "/profesor/asistencia" },
        { id: "reportes", label: "Reportes", href: "/profesor/reportes" },
        { id: "mensajes", label: "Mensajes", href: "/profesor/mensajes" },
        { id: "configuracion", label: "Configuración", href: "/profesor/configuracion" }
      ]
    }
  });
});

// PLAN-A §3 — antes esto devolvía `[]` hardcodeado porque el modelo
// `Asistencia` no existía. Resumen del día de hoy por aula del
// profesor (presentes marcados / total de alumnos del aula).
profesor.get("/api/profesor/asistencia", async (req, res) => {
  const user = (req as { user?: AuthUser }).user;
  const teacherId = getTeacherId(user);
  if (!teacherId) {
    res.status(403).json({ error: "forbidden" });
    return;
  }

  const teacherMemberships = await prisma.claseMiembro.findMany({
    where: { usuarioId: teacherId, rolEnClase: "TEACHER" },
    select: { claseId: true }
  });
  const memberClaseIds = teacherMemberships.map((m) => m.claseId);

  const aulas = await prisma.clase.findMany({
    where: {
      isDeleted: { not: true },
      OR: [
        { createdBy: teacherId },
        { teacherId },
        { teacherOfRecord: teacherId },
        ...(memberClaseIds.length > 0 ? [{ id: { in: memberClaseIds } }] : [])
      ]
    },
    select: { id: true, name: true }
  });

  const hoy = new Date().toISOString().slice(0, 10);
  const resumen = await Promise.all(
    aulas.map(async (aula) => {
      const [totalAlumnos, presentesHoy] = await Promise.all([
        prisma.claseMiembro.count({
          where: { claseId: aula.id, rolEnClase: "STUDENT", ...(await whereExcluirEspejos()) }
        }),
        prisma.asistencia.count({
          where: { claseId: aula.id, fecha: hoy, estado: "presente" }
        })
      ]);
      return {
        id: aula.id,
        curso: aula.name ?? "Curso sin nombre",
        presente: presentesHoy,
        total: totalAlumnos
      };
    })
  );

  res.status(200).json(resumen);
});

profesor.get("/api/profesor/cursos", async (req, res) => {
  const user = (req as { user?: AuthUser }).user;
  const teacherId = getTeacherId(user);
  if (!teacherId) {
    res.status(403).json({ error: "forbidden" });
    return;
  }

  // Nota: la colección "cursos" no existe aún en Prisma — devolvemos [] para evitar errores en UI.
  const cursos: CursoDocente[] = [];
  const resumen = cursos.map((curso, index) => ({
    id: getDocumentId(curso) || `curso-${index}`,
    nombre: curso.name ?? "Curso sin nombre",
    alumnos: curso.enrollments?.length ?? 0,
    estado: curso.isDeleted ? "Inactivo" : curso.status ?? "Activo"
  }));

  res.status(200).json(resumen);
});

profesor.get("/api/profesor/calificaciones", async (req, res) => {
  const user = (req as { user?: AuthUser }).user;
  const teacherId = getTeacherId(user);
  if (!teacherId) {
    res.status(403).json({ error: "forbidden" });
    return;
  }

  // Nota: la colección "calificaciones" no existe aún en Prisma — devolvemos [] para evitar errores en UI.
  const calificaciones: CalificacionDocente[] = [];
  const resumen = calificaciones.map((item, index) => ({
    id: getDocumentId(item) || `calificacion-${index}`,
    grupo: item.grupo ?? item.curso ?? "Grupo sin nombre",
    pendientes: item.pendientes ?? item.pending ?? 0,
    ultimaEntrega: item.ultimaEntrega ?? item.lastSubmissionAt ?? "Sin datos"
  }));

  res.status(200).json(resumen);
});
