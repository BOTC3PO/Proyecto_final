import { z } from "zod";

export const ClassroomAccessSchema = z.enum(["publica", "privada"]);
export const ClassroomStatusSchema = z.enum(["activa", "archivada"]);

export const ClassroomSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  description: z.string().min(1),
  institutionId: z.string().min(1).optional(),
  category: z.string().min(1).optional(),
  accessType: ClassroomAccessSchema,
  status: ClassroomStatusSchema,
  createdBy: z.string().min(1),
  teacherIds: z.array(z.string().min(1)).optional(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime()
});

export type Classroom = z.infer<typeof ClassroomSchema>;
