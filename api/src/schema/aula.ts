import { z } from "zod";

export const ClassroomAccessSchema = z.enum(["publica", "privada"]);

export const normalizeClassroomStatus = (status: unknown) => {
  if (typeof status !== "string") return null;
  const trimmed = status.trim();
  if (!trimmed) return null;
  const upper = trimmed.toUpperCase();
  if (upper === "ACTIVA") return "ACTIVE";
  if (upper === "ARCHIVADA") return "ARCHIVED";
  if (upper === "ACTIVE" || upper === "ARCHIVED" || upper === "LOCKED") return upper;
  return null;
};

export const CLASSROOM_ACTIVE_STATUS_VALUES = ["ACTIVE", "activa"] as const;
export const CLASSROOM_READONLY_STATUS_VALUES = ["ARCHIVED", "archivada", "LOCKED"] as const;

export const isClassroomActiveStatus = (status: unknown) => normalizeClassroomStatus(status) === "ACTIVE";
export const isClassroomReadOnlyStatus = (status: unknown) => {
  const normalized = normalizeClassroomStatus(status);
  return normalized === "ARCHIVED" || normalized === "LOCKED";
};

export const ClassroomStatusSchema = z.preprocess(
  (status) => normalizeClassroomStatus(status) ?? status,
  z.enum(["ACTIVE", "ARCHIVED", "LOCKED"])
);
export const ClassroomRoleSchema = z.enum(["ADMIN", "TEACHER", "STUDENT"]);

const ClassroomMemberSchema = z.object({
  userId: z.string().min(1),
  roleInClass: ClassroomRoleSchema,
  schoolId: z.string().min(1)
});

export const ClassroomBaseSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  description: z.string().min(1),
  institutionId: z.string().min(1).optional(),
  schoolId: z.string().min(1).optional(),
  category: z.string().min(1).optional(),
  accessType: ClassroomAccessSchema,
  status: ClassroomStatusSchema,
  classCode: z.string().min(1).optional(),
  createdBy: z.string().min(1),
  members: z.array(ClassroomMemberSchema).min(1),
  teacherOfRecord: z.string().min(1).optional(),
  teacherId: z.string().min(1).optional(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
});

const applyClassroomMemberRules = (
  data: {
    members?: z.infer<typeof ClassroomMemberSchema>[];
    schoolId?: string;
    institutionId?: string;
    teacherOfRecord?: string;
    teacherId?: string;
  },
  ctx: z.RefinementCtx
) => {
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
};

export const ClassroomCreateSchema = ClassroomBaseSchema.superRefine(applyClassroomMemberRules);

export const ClassroomUpdateSchema = ClassroomBaseSchema.omit({
  id: true,
  createdAt: true,
  createdBy: true
}).superRefine(applyClassroomMemberRules);

export const ClassroomPatchSchema = ClassroomBaseSchema.partial().superRefine(applyClassroomMemberRules);

export const ClassroomSchema = ClassroomCreateSchema;

export type Classroom = z.infer<typeof ClassroomSchema>;
