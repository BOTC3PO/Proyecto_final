import { Db } from "mongodb";
import { z } from "zod";
import {
  canProposeGovernanceChange,
  canVoteContent,
  canVoteGovernance
} from "./authorization";
import { GovernanceLevelSchema, ProposalSchema } from "../schema/governance";

type GovernanceLevel = z.infer<typeof GovernanceLevelSchema>;
type ProposalDocument = z.infer<typeof ProposalSchema>;

const GOVERNANCE_TARGET_TYPES = new Set(["GOVERNANCE", "POLICY", "SYSTEM_CONFIG"]);

const normalizeRole = (role?: unknown) => {
  if (typeof role !== "string") return "";
  return role.trim().toUpperCase();
};

const toAuthorizationRole = (role?: unknown) => {
  const normalized = normalizeRole(role);
  if (normalized === "USER") return "STUDENT";
  return normalized;
};

export const evaluateGovernanceLevel = (
  targetType: string,
  proposalType: string,
  _explicitLevel?: GovernanceLevel
): GovernanceLevel => {
  if (GOVERNANCE_TARGET_TYPES.has(targetType.toUpperCase())) return "GOVERNANCE";
  if (proposalType.toUpperCase().startsWith("GOVERNANCE_")) return "GOVERNANCE";
  return "CONTENT";
};

const getActorRole = async (db: Db, actorId: string) => {
  const user = await db.collection("usuarios").findOne({ id: actorId });
  return toAuthorizationRole(user?.rol ?? user?.role ?? "");
};

export const canActorCreateProposal = async (db: Db, actorId: string) => {
  if (!actorId) return false;
  const role = await getActorRole(db, actorId);
  return canProposeGovernanceChange(role);
};

export const canActorVoteOnLevel = async (db: Db, actorId: string, level: GovernanceLevel) => {
  if (!actorId) return false;
  const role = await getActorRole(db, actorId);
  if (level === "GOVERNANCE") return canVoteGovernance(role);
  return canVoteContent(role);
};

export const validateGovernancePermissions = async (params: {
  db: Db;
  actorId: string;
  level: GovernanceLevel;
  targetType: string;
  targetId: string;
}) => {
  const { db, actorId, level, targetType, targetId } = params;
  if (!actorId) return false;

  const role = await getActorRole(db, actorId);
  if (canVoteGovernance(role)) return true;

  if (level === "CONTENT") return canVoteContent(role);

  const membership = await db.collection("membresias").findOne({
    userId: actorId,
    targetType,
    targetId,
    role: { $in: ["owner", "admin"] }
  });

  return Boolean(membership);
};

export const applyApprovedGovernanceChange = async (db: Db, proposal: ProposalDocument) => {
  const type = proposal.proposalType.toUpperCase();
  const payload = proposal.payload as Record<string, unknown>;

  if (type === "UPDATE_CONFIG") {
    const id = typeof payload.id === "string" ? payload.id : "";
    const items = Array.isArray(payload.items) ? payload.items : [];
    if (!id || items.length === 0) return { applied: false, reason: "invalid UPDATE_CONFIG payload" };

    await db.collection("config_modulos").updateOne(
      { id },
      { $set: { id, items, updatedAt: new Date().toISOString() } },
      { upsert: true }
    );

    return { applied: true };
  }

  if (type === "SET_PROMPT_STATUS") {
    const promptId = typeof payload.promptId === "string" ? payload.promptId : "";
    const status = typeof payload.status === "string" ? payload.status : "";
    if (!promptId || !status) return { applied: false, reason: "invalid SET_PROMPT_STATUS payload" };

    await db.collection("prompts").updateOne({ id: promptId }, { $set: { status } });
    return { applied: true };
  }

  return {
    applied: false,
    reason: `unsupported proposalType: ${proposal.proposalType}`
  };
};
