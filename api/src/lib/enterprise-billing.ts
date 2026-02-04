import type { Db } from "mongodb";
import { CLASSROOM_ACTIVE_STATUS_VALUES } from "../schema/aula";

export type ActiveStudentBreakdown = {
  userId: string;
  classroomIds: string[];
  classroomCount: number;
};

export type ActiveStudentSummary = {
  activeStudentCount: number;
  students: ActiveStudentBreakdown[];
};

const buildClassroomMatch = (schoolId: string) => ({
  status: { $in: CLASSROOM_ACTIVE_STATUS_VALUES },
  $or: [{ institutionId: schoolId }, { schoolId }]
});

export const fetchActiveStudentSummary = async (db: Db, schoolId: string): Promise<ActiveStudentSummary> => {
  const students = await db
    .collection("aulas")
    .aggregate<ActiveStudentBreakdown>([
      { $match: buildClassroomMatch(schoolId) },
      { $unwind: "$members" },
      { $match: { "members.roleInClass": "STUDENT" } },
      {
        $group: {
          _id: "$members.userId",
          classroomIds: { $addToSet: "$id" }
        }
      },
      {
        $project: {
          _id: 0,
          userId: "$_id",
          classroomIds: 1,
          classroomCount: { $size: "$classroomIds" }
        }
      },
      { $sort: { userId: 1 } }
    ])
    .toArray();

  return {
    activeStudentCount: students.length,
    students
  };
};
