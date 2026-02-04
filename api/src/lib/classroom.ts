import { Response } from "express";
import { isClassroomReadOnlyStatus, normalizeClassroomStatus } from "../schema/aula";

export const assertClassroomWritable = (
  res: Response,
  classroom?: { status?: unknown } | null
) => {
  const normalizedStatus = normalizeClassroomStatus(classroom?.status);
  if (isClassroomReadOnlyStatus(normalizedStatus ?? classroom?.status)) {
    res.status(403).json({ error: "classroom is read-only" });
    return false;
  }
  return true;
};
