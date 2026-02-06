import { ObjectId } from "mongodb";

export const normalizeSchoolId = (escuelaId: unknown) => {
  if (!escuelaId) return null;
  if (typeof escuelaId === "string") return escuelaId;
  if (escuelaId instanceof ObjectId) return escuelaId.toString();
  const maybeToString = escuelaId as { toString?: () => string };
  if (typeof maybeToString.toString === "function") return maybeToString.toString();
  return null;
};
