import { apiGet } from "../lib/api";

export type ResourceLinkType = "drive" | "youtube" | "externo";
export type ResourceLinkVisibility = "publico" | "privado";

export type ResourceLink = {
  id: string;
  type: ResourceLinkType;
  url: string;
  visibility: ResourceLinkVisibility;
  createdBy: string;
  schoolId: string;
  aulaId: string;
  createdAt: string;
  updatedAt: string;
};

export type ResourceLinkListResponse = {
  items: ResourceLink[];
};

export async function fetchResourceLinks(aulaId: string): Promise<ResourceLinkListResponse> {
  return apiGet<ResourceLinkListResponse>(`/api/aulas/${encodeURIComponent(aulaId)}/resource-links`);
}
