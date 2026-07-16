import { apiGet, apiPost, apiPatch, apiDelete } from "../lib/api";

export type Publication = {
  id: string;
  authorId: string;
  // FIX-PUBLICACIONES-AUTOR — resueltos por el back (GET) desde
  // authorId; ya no se aceptan del cliente al crear (se descartaban
  // en silencio, la columna no existe en Publicacion).
  authorName: string | null;
  authorInitials: string;
  isOwn: boolean;
  title: string;
  body: string;
  links?: { label: string; href: string }[];
  publishedAt: string;
  publishedAtLabel: string;
  archivos?: PublicationAttachment[];
};

export type PublicationAttachment = {
  name: string;
  size: number;
  type?: string;
};

type PublicationsResponse = {
  items: Omit<Publication, "publishedAtLabel">[];
};

const formatPublishedAt = (iso: string, lang: string): string => {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleString(lang, { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
};

// FIX-TEST4-PUBLICACIONES-404 — el back expone el POST canónico en
// `/api/aulas/:id/publicaciones` (api/src/routes/publicaciones.ts:79).
// `/api/aula/publicaciones?classroomId=…` solo tiene GET
// (api/src/routes/aula-feed.ts:54). Antes el POST tiraba 404. Ahora
// se usa la ruta con `:id` en el path.
const publicationsPath = (classroomId: string) =>
  `/api/aulas/${encodeURIComponent(classroomId)}/publicaciones`;

export async function fetchPublications(classroomId?: string, lang = "es-AR"): Promise<Publication[]> {
  if (!classroomId) return [];
  const response = await apiGet<PublicationsResponse>(publicationsPath(classroomId));
  return response.items.map((item) => ({ ...item, publishedAtLabel: formatPublishedAt(item.publishedAt, lang) }));
}

type CreatePublicationPayload = {
  contenido: string;
  title?: string;
  archivos?: PublicationAttachment[];
};

export async function createPublication(classroomId: string, payload: CreatePublicationPayload): Promise<Publication> {
  return apiPost<Publication>(publicationsPath(classroomId), payload);
}

export async function updatePublication(classroomId: string, publicationId: string, contenido: string): Promise<Publication> {
  return apiPatch<Publication>(`${publicationsPath(classroomId)}/${encodeURIComponent(publicationId)}`, { contenido });
}

export async function deletePublication(classroomId: string, publicationId: string): Promise<void> {
  await apiDelete<{ ok: boolean }>(`${publicationsPath(classroomId)}/${encodeURIComponent(publicationId)}`);
}
