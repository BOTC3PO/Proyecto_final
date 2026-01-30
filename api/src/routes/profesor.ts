import { Router } from "express";
import { ObjectId } from "mongodb";
import { getDb } from "../lib/db";
import { requireUser } from "../lib/user-auth";

type AuthUser = {
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
  _id?: ObjectId | string;
  id?: string;
  name?: string;
  enrollments?: { userId?: string }[];
  isDeleted?: boolean;
  status?: string;
};

type AsistenciaDocente = {
  _id?: ObjectId | string;
  id?: string;
  curso?: string;
  nombreCurso?: string;
  presente?: number;
  presentes?: number;
  total?: number;
  totalEstudiantes?: number;
};

type CalificacionDocente = {
  _id?: ObjectId | string;
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
  if (!user?._id) return null;
  if (typeof user._id === "string") return user._id;
  return user._id.toString?.() ?? null;
};

const buildTeacherFilter = (teacherId: string, fields: string[]) => {
  const values: Array<string | ObjectId> = [teacherId];
  if (ObjectId.isValid(teacherId)) {
    values.push(new ObjectId(teacherId));
  }
  return {
    $or: fields.map((field) => ({ [field]: { $in: values } }))
  };
};

const getDocumentId = (doc?: { _id?: ObjectId | string; id?: string }) => {
  if (doc?.id) return doc.id;
  if (!doc?._id) return "";
  if (typeof doc._id === "string") return doc._id;
  return doc._id.toString();
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

  const db = await getDb();
  const aulas = (await db
    .collection("aulas")
    .find({
      $or: [
        { createdBy: teacherId },
        { teacherId: teacherId },
        { teacherOfRecord: teacherId },
        { members: { $elemMatch: { roleInClass: "TEACHER", userId: teacherId } } }
      ]
    })
    .toArray()) as AulaDocente[];

  const aulaIds = aulas.map((aula) => aula.id).filter((id): id is string => Boolean(id));
  const moduleFilters: Record<string, unknown>[] = [{ createdBy: teacherId }];
  if (aulaIds.length > 0) {
    moduleFilters.push({ aulaId: { $in: aulaIds } });
  }

  const modules = (await db
    .collection("modulos")
    .find({ $or: moduleFilters })
    .toArray()) as ModuloDocente[];

  const activeStudents = new Set<string>();
  aulas.forEach((aula) => {
    (aula.members ?? []).forEach((member) => {
      if (member.roleInClass === "STUDENT" && member.userId) {
        activeStudents.add(member.userId);
      }
    });
  });

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
    weeklyPlan: sortedAulas.slice(0, 3).map((aula, index) => {
      const studentCount = (aula.members ?? []).filter(
        (member) => member.roleInClass === "STUDENT"
      ).length;
      return {
        id: aula.id ?? `aula-${index}`,
        title: aula.name ?? `Clase ${index + 1}`,
        detail: `${studentCount} estudiantes en el aula`,
        status: aula.status ?? "Programada"
      };
    }),
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

profesor.get("/api/profesor/asistencia", async (req, res) => {
  const user = (req as { user?: AuthUser }).user;
  const teacherId = getTeacherId(user);
  if (!teacherId) {
    res.status(403).json({ error: "forbidden" });
    return;
  }

  const db = await getDb();
  const asistencias = (await db
    .collection("asistencias")
    .find(buildTeacherFilter(teacherId, ["teacherId", "createdBy"]))
    .toArray()) as AsistenciaDocente[];

  // Nota: si la colección aún no tiene datos reales, devolvemos [] para evitar errores en UI.
  const resumen = asistencias.map((item, index) => ({
    id: getDocumentId(item) || `asistencia-${index}`,
    curso: item.curso ?? item.nombreCurso ?? "Curso sin nombre",
    presente: item.presente ?? item.presentes ?? 0,
    total: item.total ?? item.totalEstudiantes ?? 0
  }));

  res.status(200).json(resumen);
});

profesor.get("/api/profesor/cursos", async (req, res) => {
  const user = (req as { user?: AuthUser }).user;
  const teacherId = getTeacherId(user);
  if (!teacherId) {
    res.status(403).json({ error: "forbidden" });
    return;
  }

  const db = await getDb();
  const cursos = (await db
    .collection("cursos")
    .find(buildTeacherFilter(teacherId, ["teacherId", "createdBy"]))
    .toArray()) as CursoDocente[];

  // Nota: si la colección aún no tiene datos reales, devolvemos [] para evitar errores en UI.
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

  const db = await getDb();
  const calificaciones = (await db
    .collection("calificaciones")
    .find(buildTeacherFilter(teacherId, ["teacherId", "createdBy"]))
    .toArray()) as CalificacionDocente[];

  // Nota: si la colección aún no tiene datos reales, devolvemos [] para evitar errores en UI.
  const resumen = calificaciones.map((item, index) => ({
    id: getDocumentId(item) || `calificacion-${index}`,
    grupo: item.grupo ?? item.curso ?? "Grupo sin nombre",
    pendientes: item.pendientes ?? item.pending ?? 0,
    ultimaEntrega: item.ultimaEntrega ?? item.lastSubmissionAt ?? "Sin datos"
  }));

  res.status(200).json(resumen);
});
