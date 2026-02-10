import { apiGet } from "../lib/api";

export type PromptRecord = {
  id: string;
  targetType: string;
  targetId: string;
  kind: string;
  title: string;
  bodyText: string;
  paramsSchema: Record<string, unknown>;
  status: string;
  createdBy: string;
  createdAt: string;
  source: string;
};

export type ListPromptsResponse = {
  items: PromptRecord[];
};

export async function fetchActivePrompts(targetType: string, targetId: string): Promise<PromptRecord[]> {
  const query = new URLSearchParams({ targetType, targetId }).toString();
  const response = await apiGet<ListPromptsResponse>(`/api/prompts?${query}`);
  return response.items ?? [];
}
