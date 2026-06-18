import { apiGet, apiPost } from "../lib/api";

export type Publication = {
  id: string;
  authorInitials: string;
  title: string;
  body: string;
  links?: { label: string; href: string }[];
  publishedAtLabel: string;
  archivos?: PublicationAttachment[];
};

export type PublicationAttachment = {
  name: string;
  size: number;
  type?: string;
};

type PublicationsResponse = {
  items: Publication[];
};

// FIX-TEST4-PUBLICACIONES-404 — el back expone el POST canónico en
// `/api/aulas/:id/publicaciones` (api/src/routes/publicaciones.ts:79).
// `/api/aula/publicaciones?classroomId=…` solo tiene GET
// (api/src/routes/aula-feed.ts:54). Antes el POST tiraba 404. Ahora
// se usa la ruta con `:id` en el path.
const publicationsPath = (classroomId: string) =>
  `/api/aulas/${encodeURIComponent(classroomId)}/publicaciones`;

export async function fetchPublications(classroomId?: string): Promise<Publication[]> {
  if (!classroomId) return [];
  const response = await apiGet<PublicationsResponse>(publicationsPath(classroomId));
  return response.items;
}

type CreatePublicationPayload = {
  contenido: string;
  authorInitials?: string;
  title?: string;
  archivos?: PublicationAttachment[];
};

export async function createPublication(classroomId: string, payload: CreatePublicationPayload): Promise<Publication> {
  return apiPost<Publication>(publicationsPath(classroomId), payload);
}
