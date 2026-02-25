import { apiGet, apiPost } from "../lib/api";

export type ProposalStatus = "OPEN" | "APPROVED" | "REJECTED" | "CLOSED";
export type ProposalLevel = "CONTENT" | "GOVERNANCE";
export type VoteValue = "APPROVE" | "REJECT" | "ABSTAIN";
export type PromptKind = "QUESTION" | "TASK" | "ANNOUNCEMENT";
export type PromptStatus = "ACTIVE" | "INACTIVE" | "ARCHIVED" | "DEPRECATED" | "REMOVED";

export type Proposal = {
  id: string;
  targetType: string;
  targetId: string;
  proposalType: string;
  payload: Record<string, unknown>;
  level: ProposalLevel;
  createdBy: string;
  createdAt: string;
  status: ProposalStatus;
  rationale?: string;
  closedAt?: string;
  closedBy?: string;
  voteSummary?: { approve: number; reject: number; abstain: number };
  applyResult?: { applied: boolean; reason?: string };
  closeRule?: string;
};

export type Prompt = {
  id: string;
  targetType: string;
  targetId: string;
  kind: PromptKind;
  title: string;
  bodyText: string;
  paramsSchema?: Record<string, unknown>;
  status: PromptStatus;
  createdBy: string;
  createdAt: string;
  source: string;
};

export type Vote = {
  id: string;
  proposalId: string;
  voterId: string;
  vote: VoteValue;
  createdAt: string;
};

export type CreateProposalInput = {
  targetType: string;
  targetId: string;
  proposalType: string;
  payload: Record<string, unknown>;
  createdBy: string;
  rationale?: string;
};

export type CloseProposalResult = {
  id: string;
  status: ProposalStatus;
  summary: { approve: number; reject: number; abstain: number };
  applyResult: { applied: boolean; reason?: string };
  closeRule: string;
};

export const fetchProposals = (params?: {
  status?: string;
  targetType?: string;
  targetId?: string;
}) => {
  const qs = new URLSearchParams();
  if (params?.status) qs.set("status", params.status);
  if (params?.targetType) qs.set("targetType", params.targetType);
  if (params?.targetId) qs.set("targetId", params.targetId);
  const query = qs.toString();
  return apiGet<{ items: Proposal[] }>(`/api/proposals${query ? `?${query}` : ""}`);
};

export const fetchProposal = (id: string) =>
  apiGet<Proposal>(`/api/proposals/${id}`);

export const createProposal = (input: CreateProposalInput) =>
  apiPost<Proposal>("/api/proposals", input);

export const castVote = (proposalId: string, voterId: string, vote: VoteValue) =>
  apiPost<Vote>(`/api/proposals/${proposalId}/vote`, { voterId, vote });

export const closeProposal = (proposalId: string, actorId: string) =>
  apiPost<CloseProposalResult>(`/api/proposals/${proposalId}/close`, { actorId });

export const fetchPrompts = (targetType: string, targetId: string) =>
  apiGet<{ items: Prompt[] }>(`/api/prompts?targetType=${encodeURIComponent(targetType)}&targetId=${encodeURIComponent(targetId)}`);

export const PROPOSAL_TYPE_LABELS: Record<string, string> = {
  ADD_PROMPT: "Agregar enunciado",
  UPDATE_PROMPT: "Modificar enunciado",
  REMOVE_PROMPT: "Eliminar enunciado",
  SET_PROMPT_STATUS: "Cambiar estado de enunciado",
  CREATE_GENERATOR: "Crear generador",
  UPDATE_GENERATOR: "Modificar generador",
  SET_GENERATOR_STATUS: "Activar/desactivar generador",
  UPDATE_CONFIG: "Actualizar configuración",
  SYSTEM_CHANGE: "Cambio de sistema",
};

export const STATUS_LABELS: Record<string, string> = {
  OPEN: "Abierta",
  APPROVED: "Aprobada",
  REJECTED: "Rechazada",
  CLOSED: "Cerrada",
};

export const LEVEL_LABELS: Record<string, string> = {
  CONTENT: "Contenido",
  GOVERNANCE: "Gobernanza",
};
