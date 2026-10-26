import { prisma } from "./prisma";

// Extraído de aulas.ts (createdByName/teacherName) para reusar en
// publicaciones.ts (authorName) sin duplicar la query. Mapea IDs a
// `fullName` (cae a `username` si no hay nombre, o al ID si no se
// encuentra el user).
export const resolveUserNames = async (userIds: Array<string | null | undefined>) => {
  const unique = Array.from(new Set(userIds.filter((v): v is string => !!v && typeof v === "string")));
  if (unique.length === 0) return new Map<string, string>();
  const users = await prisma.usuario.findMany({
    where: { id: { in: unique } },
    select: { id: true, fullName: true, username: true },
  });
  const map = new Map<string, string>();
  for (const u of users) {
    map.set(u.id, u.fullName || u.username || u.id);
  }
  return map;
};

export const initialsFromName = (name: string): string =>
  name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase() || "?";
