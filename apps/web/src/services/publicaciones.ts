import { apiGet } from "../lib/api";

export type Publication = {
  id: string;
  authorInitials: string;
  title: string;
  body: string;
  links?: { label: string; href: string }[];
  publishedAtLabel: string;
};

type PublicationsResponse = {
  items: Publication[];
};

export async function fetchPublications(classroomId?: string): Promise<Publication[]> {
  const query = classroomId ? `?classroomId=${encodeURIComponent(classroomId)}` : "";
  const response = await apiGet<PublicationsResponse>(`/api/aula/publicaciones${query}`);
  return response.items;
}
