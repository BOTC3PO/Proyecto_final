import { Db } from "mongodb";
import { z } from "zod";
import { GovernanceLevelSchema, ProposalSchema } from "../schema/governance";

type GovernanceLevel = z.infer<typeof GovernanceLevelSchema>;
type ProposalDocument = z.infer<typeof ProposalSchema>;

const GOVERNANCE_TARGET_TYPES = new Set(["GOVERNANCE", "POLICY", "SYSTEM_CONFIG"]);

export const evaluateGovernanceLevel = (
  targetType: string,
  proposalType: string,
  explicitLevel?: GovernanceLevel
): GovernanceLevel => {
  if (explicitLevel) return explicitLevel;
  if (GOVERNANCE_TARGET_TYPES.has(targetType.toUpperCase())) return "GOVERNANCE";
  if (proposalType.toUpperCase().startsWith("GOVERNANCE_")) return "GOVERNANCE";
  return "CONTENT";
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

  const user = await db.collection("usuarios").findOne({ id: actorId });
  const globalRole = String(user?.rol ?? "").toLowerCase();
  if (globalRole === "admin" || globalRole === "superadmin") return true;

  if (level === "CONTENT") return true;

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
