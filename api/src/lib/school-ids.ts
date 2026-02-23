export const normalizeSchoolId = (escuelaId: unknown): string | null => {
  if (!escuelaId) return null;
  if (typeof escuelaId === "string") return escuelaId;
  const maybeToString = escuelaId as { toString?: () => string };
  if (typeof maybeToString.toString === "function") return maybeToString.toString();
  return null;
};
