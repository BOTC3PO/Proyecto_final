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

export async function fetchPublications(classroomId?: string): Promise<Publication[]> {
  if (!classroomId) return [];
  const response = await apiGet<PublicationsResponse>(`/api/aulas/${encodeURIComponent(classroomId)}/publicaciones`);
  return response.items;
}

type CreatePublicationPayload = {
  contenido: string;
  authorInitials?: string;
  title?: string;
  archivos?: PublicationAttachment[];
};

export async function createPublication(classroomId: string, payload: CreatePublicationPayload): Promise<Publication> {
  return apiPost<Publication>(`/api/aulas/${encodeURIComponent(classroomId)}/publicaciones`, payload);
}
