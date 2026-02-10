import { randomUUID } from "crypto";
import { Db } from "mongodb";
import { z } from "zod";
import { ENV } from "./env";
import { GovernanceLevelSchema, ProposalSchema } from "../schema/governance";

type GovernanceLevel = z.infer<typeof GovernanceLevelSchema>;
type ProposalDocument = z.infer<typeof ProposalSchema>;

const GOVERNANCE_TARGET_TYPES = new Set(["GOVERNANCE", "POLICY", "SYSTEM_CONFIG"]);
const GOVERNANCE_RULES = new Set(["MAJORITY", "SUPERMAJORITY_2_3", "UNANIMOUS"]);

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

export const evaluateProposalOutcome = (params: {
  level: GovernanceLevel;
  approve: number;
  reject: number;
}) => {
  const { level, approve, reject } = params;

  if (level === "CONTENT") {
    const meetsMinYes = approve >= Math.max(0, ENV.GOV_CONTENT_MIN_YES);
    const meetsComparison = ENV.GOV_CONTENT_YES_GT_NO ? approve > reject : approve >= reject;
    return {
      approved: meetsMinYes && meetsComparison,
      rule: `CONTENT(minYes=${ENV.GOV_CONTENT_MIN_YES}, yesGtNo=${String(ENV.GOV_CONTENT_YES_GT_NO)})`
    };
  }

  const configuredRule = ENV.GOV_GOVERNANCE_RULE.toUpperCase();
  const governanceRule = GOVERNANCE_RULES.has(configuredRule)
    ? configuredRule
    : "SUPERMAJORITY_2_3";

  if (governanceRule === "UNANIMOUS") {
    return {
      approved: approve > 0 && reject === 0,
      rule: "GOVERNANCE(UNANIMOUS)"
    };
  }

  if (governanceRule === "MAJORITY") {
    return {
      approved: approve > reject,
      rule: "GOVERNANCE(MAJORITY)"
    };
  }

  const decisiveVotes = approve + reject;
  const ratio = decisiveVotes > 0 ? approve / decisiveVotes : 0;
  return {
    approved: approve > reject && ratio >= 2 / 3,
    rule: "GOVERNANCE(SUPERMAJORITY_2_3)"
  };
};

const toIsoNow = () => new Date().toISOString();

export const applyApprovedGovernanceChange = async (db: Db, proposal: ProposalDocument) => {
  const type = proposal.proposalType.toUpperCase();
  const payload = proposal.payload as Record<string, unknown>;

  if (type === "ADD_PROMPT") {
    const kind = typeof payload.kind === "string" ? payload.kind : "QUESTION";
    const title = typeof payload.title === "string" ? payload.title.trim() : "";
    const bodyText = typeof payload.bodyText === "string" ? payload.bodyText.trim() : "";
    const paramsSchema =
      payload.paramsSchema && typeof payload.paramsSchema === "object"
        ? (payload.paramsSchema as Record<string, unknown>)
        : {};

    if (!title || !bodyText) return { applied: false, reason: "invalid ADD_PROMPT payload" };

    const now = toIsoNow();
    const promptId = randomUUID();
    await db.collection("prompts").insertOne({
      id: promptId,
      targetType: proposal.targetType,
      targetId: proposal.targetId,
      kind,
      title,
      bodyText,
      paramsSchema,
      status: "ACTIVE",
      createdBy: proposal.createdBy,
      createdAt: now,
      source: "GOVERNANCE",
      proposalId: proposal.id,
      version: 1
    });

    return { applied: true, action: "ADD_PROMPT", promptId };
  }

  if (type === "UPDATE_PROMPT") {
    const promptId = typeof payload.promptId === "string" ? payload.promptId : "";
    const existingPrompt = promptId
      ? await db.collection("prompts").findOne({ id: promptId })
      : await db.collection("prompts").findOne({
          targetType: proposal.targetType,
          targetId: proposal.targetId,
          status: "ACTIVE"
        });

    if (!existingPrompt) return { applied: false, reason: "prompt not found for UPDATE_PROMPT" };

    const updates = payload.updates && typeof payload.updates === "object" ? payload.updates : payload;
    const nextId = randomUUID();
    const nextVersion = Number(existingPrompt.version ?? 1) + 1;
    const now = toIsoNow();

    await db.collection("prompts").updateOne(
      { id: String(existingPrompt.id) },
      {
        $set: {
          status: "INACTIVE",
          supersededBy: nextId,
          supersededAt: now
        }
      }
    );

    const { _id, ...existingWithoutId } = existingPrompt;

    await db.collection("prompts").insertOne({
      ...existingWithoutId,
      id: nextId,
      title:
        typeof (updates as Record<string, unknown>).title === "string"
          ? (updates as Record<string, string>).title
          : existingPrompt.title,
      bodyText:
        typeof (updates as Record<string, unknown>).bodyText === "string"
          ? (updates as Record<string, string>).bodyText
          : existingPrompt.bodyText,
      kind:
        typeof (updates as Record<string, unknown>).kind === "string"
          ? (updates as Record<string, string>).kind
          : existingPrompt.kind,
      paramsSchema:
        (updates as Record<string, unknown>).paramsSchema &&
        typeof (updates as Record<string, unknown>).paramsSchema === "object"
          ? ((updates as Record<string, unknown>).paramsSchema as Record<string, unknown>)
          : existingPrompt.paramsSchema,
      status: "ACTIVE",
      source: "GOVERNANCE",
      proposalId: proposal.id,
      previousVersionId: String(existingPrompt.id),
      version: nextVersion,
      createdAt: now,
      createdBy: proposal.createdBy
    });

    return {
      applied: true,
      action: "UPDATE_PROMPT",
      previousPromptId: String(existingPrompt.id),
      promptId: nextId,
      version: nextVersion
    };
  }

  if (type === "REMOVE_PROMPT") {
    const promptId = typeof payload.promptId === "string" ? payload.promptId : "";
    const status = String(payload.status ?? "DEPRECATED").toUpperCase();
    const nextStatus = status === "REMOVED" ? "REMOVED" : "DEPRECATED";

    if (!promptId) return { applied: false, reason: "invalid REMOVE_PROMPT payload" };

    const result = await db.collection("prompts").updateOne(
      { id: promptId },
      {
        $set: {
          status: nextStatus,
          removedByProposalId: proposal.id,
          removedAt: toIsoNow(),
          source: "GOVERNANCE"
        }
      }
    );

    if (!result.matchedCount) return { applied: false, reason: "prompt not found for REMOVE_PROMPT" };

    return { applied: true, action: "REMOVE_PROMPT", promptId, status: nextStatus };
  }

  if (type === "SYSTEM_CHANGE") {
    const key = typeof payload.key === "string" ? payload.key : "";
    const patch = payload.patch && typeof payload.patch === "object" ? payload.patch : null;
    const value = "value" in payload ? payload.value : undefined;

    if (!key && !patch) return { applied: false, reason: "invalid SYSTEM_CHANGE payload" };

    if (patch) {
      await db.collection("system_config").updateOne(
        { id: proposal.targetId || "critical" },
        {
          $set: {
            ...(patch as Record<string, unknown>),
            updatedAt: toIsoNow(),
            updatedByProposalId: proposal.id
          }
        },
        { upsert: true }
      );
      return { applied: true, action: "SYSTEM_CHANGE", mode: "PATCH" };
    }

    await db.collection("system_config").updateOne(
      { id: proposal.targetId || "critical" },
      {
        $set: {
          [key]: value,
          updatedAt: toIsoNow(),
          updatedByProposalId: proposal.id
        }
      },
      { upsert: true }
    );

    return { applied: true, action: "SYSTEM_CHANGE", mode: "KEY_VALUE", key };
  }

  if (type === "UPDATE_CONFIG") {
    const id = typeof payload.id === "string" ? payload.id : "";
    const items = Array.isArray(payload.items) ? payload.items : [];
    if (!id || items.length === 0) return { applied: false, reason: "invalid UPDATE_CONFIG payload" };

    await db.collection("config_modulos").updateOne(
      { id },
      { $set: { id, items, updatedAt: toIsoNow() } },
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
