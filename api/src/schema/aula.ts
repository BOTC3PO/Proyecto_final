import { z } from "zod";

export const ClassroomAccessSchema = z.enum(["publica", "privada"]);
export const ClassroomStatusSchema = z.enum(["activa", "archivada"]);
export const ClassroomRoleSchema = z.enum(["ADMIN", "TEACHER", "STUDENT"]);

const ClassroomMemberSchema = z.object({
  userId: z.string().min(1),
  roleInClass: ClassroomRoleSchema,
  schoolId: z.string().min(1)
});

const ClassroomBaseSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  description: z.string().min(1),
  institutionId: z.string().min(1).optional(),
  schoolId: z.string().min(1).optional(),
  category: z.string().min(1).optional(),
  accessType: ClassroomAccessSchema,
  status: ClassroomStatusSchema,
  createdBy: z.string().min(1),
  members: z.array(ClassroomMemberSchema).min(1),
  teacherOfRecord: z.string().min(1).optional(),
  teacherId: z.string().min(1).optional(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
});

export const ClassroomCreateSchema = ClassroomBaseSchema.superRefine((data, ctx) => {
  const adminCount = data.members.filter((member) => member.roleInClass === "ADMIN").length;
  if (adminCount < 1) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["members"],
      message: "members must include at least one ADMIN"
    });
  }
  const teacherCount = data.members.filter((member) => member.roleInClass === "TEACHER").length;
  if (teacherCount < 1) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["members"],
      message: "members must include at least one TEACHER"
    });
  }
  const classroomSchoolId = data.schoolId ?? data.institutionId;
  if (classroomSchoolId) {
    const invalidMember = data.members.find((member) => member.schoolId !== classroomSchoolId);
    if (invalidMember) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["members"],
        message: "members must match the classroom schoolId"
      });
    }
  }
  const teacherRecordId = data.teacherOfRecord ?? data.teacherId;
  if (teacherRecordId) {
    const hasTeacherRecord = data.members.some(
      (member) => member.userId === teacherRecordId && member.roleInClass === "TEACHER"
    );
    if (!hasTeacherRecord) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["teacherOfRecord"],
        message: "teacherOfRecord/teacherId must match a TEACHER member"
      });
    }
  }
});

export const ClassroomPatchSchema = ClassroomBaseSchema.partial().superRefine((data, ctx) => {
  if (data.members) {
    const adminCount = data.members.filter((member) => member.roleInClass === "ADMIN").length;
    if (adminCount < 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["members"],
        message: "members must include at least one ADMIN"
      });
    }
    const teacherCount = data.members.filter((member) => member.roleInClass === "TEACHER").length;
    if (teacherCount < 1) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["members"],
        message: "members must include at least one TEACHER"
      });
    }
  }
  const classroomSchoolId = data.schoolId ?? data.institutionId;
  if (classroomSchoolId && data.members) {
    const invalidMember = data.members.find((member) => member.schoolId !== classroomSchoolId);
    if (invalidMember) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["members"],
        message: "members must match the classroom schoolId"
      });
    }
  }
  const teacherRecordId = data.teacherOfRecord ?? data.teacherId;
  if (teacherRecordId && data.members) {
    const hasTeacherRecord = data.members.some(
      (member) => member.userId === teacherRecordId && member.roleInClass === "TEACHER"
    );
    if (!hasTeacherRecord) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["teacherOfRecord"],
        message: "teacherOfRecord/teacherId must match a TEACHER member"
      });
    }
  }
});

export const ClassroomSchema = ClassroomCreateSchema;

export type Classroom = z.infer<typeof ClassroomSchema>;
