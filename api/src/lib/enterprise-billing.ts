import { prisma } from "./prisma";
import { CLASSROOM_ACTIVE_STATUS_VALUES } from "../schema/aula";
import { excluirEspejos } from "./espejo-filtro";

export type ActiveStudentBreakdown = {
  userId: string;
  classroomIds: string[];
  classroomCount: number;
};

export type ActiveStudentSummary = {
  activeStudentCount: number;
  students: ActiveStudentBreakdown[];
};

export const fetchActiveStudentSummary = async (schoolId: string): Promise<ActiveStudentSummary> => {
  // Fetch active classrooms for the school
  const classes = await prisma.clase.findMany({
    where: {
      escuelaId: schoolId,
      isDeleted: false,
      status: { in: CLASSROOM_ACTIVE_STATUS_VALUES as unknown as string[] }
    },
    select: { id: true }
  });

  const classIds = classes.map((c) => c.id);
  if (classIds.length === 0) {
    return { activeStudentCount: 0, students: [] };
  }

  // Fetch student members across those classrooms
  const membersRaw = await prisma.claseMiembro.findMany({
    where: {
      claseId: { in: classIds },
      rolEnClase: "STUDENT"
    },
    select: { usuarioId: true, claseId: true }
  });

  // FASE 4 — los espejos-alumno NO se facturan: se excluyen del
  // conteo de alumnos activos (este resultado alimenta
  // `pricePerStudent * activeStudentCount` en enterprise.ts).
  const members = await excluirEspejos(membersRaw);

  // Group by student to match the original aggregate output
  const studentMap = new Map<string, Set<string>>();
  for (const m of members) {
    const set = studentMap.get(m.usuarioId) ?? new Set<string>();
    set.add(m.claseId);
    studentMap.set(m.usuarioId, set);
  }

  const students: ActiveStudentBreakdown[] = Array.from(studentMap.entries())
    .map(([userId, classroomSet]) => {
      const classroomIds = Array.from(classroomSet);
      return { userId, classroomIds, classroomCount: classroomIds.length };
    })
    .sort((a, b) => a.userId.localeCompare(b.userId));

  return {
    activeStudentCount: students.length,
    students
  };
};
