import { randomUUID } from "crypto";
import { z } from "zod";
import { ENV } from "./env";
import { prisma } from "./prisma";
import {
  canProposeGovernanceChange,
  canVoteContent,
  canVoteGovernance
} from "./authorization";
import { GovernanceLevelSchema, ProposalSchema } from "../schema/governance";
import { hasRole } from "./roles";

type GovernanceLevel = z.infer<typeof GovernanceLevelSchema>;
type ProposalDocument = z.infer<typeof ProposalSchema>;

const GOVERNANCE_TARGET_TYPES = new Set(["GOVERNANCE", "POLICY", "SYSTEM_CONFIG"]);
const GOVERNANCE_RULES = new Set(["MAJORITY", "SUPERMAJORITY_2_3", "UNANIMOUS"]);
const ADMIN_ONLY_PROPOSAL_TYPES = new Set([
  "ADD_PROMPT",
  "UPDATE_PROMPT",
  "REMOVE_PROMPT",
  "SET_PROMPT_STATUS",
  "SYSTEM_CHANGE",
  "UPDATE_CONFIG",
]);

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

const getActorRole = async (actorId: string) => {
  const user = await prisma.usuario.findFirst({ where: { id: actorId } });
  // MULTIROL-01: devolvemos un shape `RoleUser` con `roles` preferido
  // y `role` como fallback. Los helpers de authorization.ts aceptan
  // este shape y miran primero el array.
  const userRoles = Array.isArray((user as { roles?: string[] } | null)?.roles)
    ? ((user as { roles: string[] }).roles as string[])
    : [];
  const role = typeof user?.role === "string" ? toAuthorizationRole(user.role) : "";
  if (userRoles.length > 0) {
    return {
      roles: userRoles.map((r) => toAuthorizationRole(r)),
      role: role || undefined
    };
  }
  return { role: role || undefined };
};

export const canActorCreateProposal = async (actorId: string) => {
  if (!actorId) return false;
  const role = await getActorRole(actorId);
  return canProposeGovernanceChange(role);
};

export const canActorVoteOnLevel = async (actorId: string, level: GovernanceLevel) => {
  if (!actorId) return false;
  const role = await getActorRole(actorId);
  if (level === "GOVERNANCE") return canVoteGovernance(role);
  return canVoteContent(role);
};

export const validateGovernancePermissions = async (params: {
  actorId: string;
  level: GovernanceLevel;
  targetType: string;
  targetId: string;
}) => {
  const { actorId, level, targetType, targetId } = params;
  if (!actorId) return false;

  const role = await getActorRole(actorId);
  if (canVoteGovernance(role)) return true;

  if (level === "CONTENT") return canVoteContent(role);

  // Check school membership with admin/teacher roles
  const membership = await prisma.membresia.findFirst({
    where: {
      usuarioId: actorId,
      rol: { in: ["owner", "admin", "TEACHER", "DIRECTIVO"] }
    }
  });

  if (membership) return true;

  // Also check classroom membership for class-level targets
  const classMember = await prisma.claseMiembro.findFirst({
    where: {
      usuarioId: actorId,
      claseId: targetId,
      rolEnClase: { in: ["TEACHER", "DIRECTIVO", "admin", "owner"] }
    }
  });

  return Boolean(classMember);
};

export const evaluateProposalOutcome = (params: {
  level: GovernanceLevel;
  approve: number;
  reject: number;
  abstain?: number;
}) => {
  const { level, approve, reject, abstain = 0 } = params;

  // PLAN-C §7 (gap #1 de docs/gobernanza-diseno.md): sin esto, una
  // propuesta con 1 voto a favor se aprobaba igual que una con 100.
  // GOV_MIN_QUORUM=0 (default) preserva el comportamiento previo.
  const minQuorum = Math.max(0, ENV.GOV_MIN_QUORUM);
  const totalVotes = approve + reject + abstain;
  if (minQuorum > 0 && totalVotes < minQuorum) {
    return {
      approved: false,
      rule: `QUORUM_NOT_MET(min=${minQuorum}, got=${totalVotes})`
    };
  }

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

export const applyApprovedGovernanceChange = async (proposal: ProposalDocument) => {
  const type = proposal.proposalType.toUpperCase();
  const createdBy = typeof proposal.createdBy === "string"
    ? proposal.createdBy : "";
  if (ADMIN_ONLY_PROPOSAL_TYPES.has(type)) {
    // MULTIROL-01: leemos roles desde la DB y caemos a `role` para
    // compat. Un admin puro (`roles: ["ADMIN"]`) sigue aplicando
    // exactamente como antes; un multi-rol `["ADMIN", "TEACHER"]`
    // también puede aplicar cambios de governance.
    const actorRole = createdBy ? await getActorRole(createdBy) : { role: undefined };
    if (!hasRole(actorRole, "ADMIN")) {
      return { applied: false, reason: "proposal type restricted to admin" };
    }
  }
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

    const promptId = randomUUID();
    await prisma.prompt.create({
      data: {
        id: promptId,
        targetType: proposal.targetType,
        targetId: proposal.targetId,
        kind,
        title,
        bodyText,
        paramsSchema: JSON.stringify(paramsSchema),
        status: "ACTIVE",
        createdBy: typeof proposal.createdBy === "string" ? proposal.createdBy : "",
        createdAt: toIsoNow(),
        source: "GOVERNANCE"
      }
    });

    return { applied: true, action: "ADD_PROMPT", promptId };
  }

  if (type === "UPDATE_PROMPT") {
    const promptId = typeof payload.promptId === "string" ? payload.promptId : "";
    const existingPrompt = promptId
      ? await prisma.prompt.findFirst({ where: { id: promptId } })
      : await prisma.prompt.findFirst({
          where: {
            targetType: proposal.targetType,
            targetId: proposal.targetId,
            status: "ACTIVE"
          }
        });

    if (!existingPrompt) return { applied: false, reason: "prompt not found for UPDATE_PROMPT" };

    const updates = payload.updates && typeof payload.updates === "object"
      ? (payload.updates as Record<string, unknown>)
      : payload;
    const nextId = randomUUID();
    const now = toIsoNow();

    // Mark old prompt as INACTIVE
    await prisma.prompt.updateMany({
      where: { id: existingPrompt.id },
      data: { status: "INACTIVE" }
    });

    // Create the updated version
    await prisma.prompt.create({
      data: {
        id: nextId,
        targetType: existingPrompt.targetType,
        targetId: existingPrompt.targetId,
        kind: typeof updates.kind === "string" ? updates.kind : existingPrompt.kind,
        title: typeof updates.title === "string" ? updates.title : existingPrompt.title,
        bodyText: typeof updates.bodyText === "string" ? updates.bodyText : existingPrompt.bodyText,
        paramsSchema:
          updates.paramsSchema && typeof updates.paramsSchema === "object"
            ? JSON.stringify(updates.paramsSchema)
            : existingPrompt.paramsSchema,
        status: "ACTIVE",
        source: "GOVERNANCE",
        createdAt: now,
        createdBy: typeof proposal.createdBy === "string" ? proposal.createdBy : ""
      }
    });

    return {
      applied: true,
      action: "UPDATE_PROMPT",
      previousPromptId: existingPrompt.id,
      promptId: nextId
    };
  }

  if (type === "REMOVE_PROMPT") {
    const promptId = typeof payload.promptId === "string" ? payload.promptId : "";
    const status = String(payload.status ?? "DEPRECATED").toUpperCase();
    const nextStatus = status === "REMOVED" ? "REMOVED" : "DEPRECATED";

    if (!promptId) return { applied: false, reason: "invalid REMOVE_PROMPT payload" };

    const result = await prisma.prompt.updateMany({
      where: { id: promptId },
      data: { status: nextStatus }
    });

    if (result.count === 0) return { applied: false, reason: "prompt not found for REMOVE_PROMPT" };

    return { applied: true, action: "REMOVE_PROMPT", promptId, status: nextStatus };
  }

  if (type === "SYSTEM_CHANGE") {
    // TODO: No Prisma model for "system_config" yet – SYSTEM_CHANGE is a no-op.
    console.warn("[governance] SYSTEM_CHANGE: no Prisma model for system_config – change not applied", payload);
    return { applied: true, action: "SYSTEM_CHANGE", note: "system_config not persisted (no model)" };
  }

  if (type === "UPDATE_CONFIG") {
    const id = typeof payload.id === "string" ? payload.id : "";
    const items = Array.isArray(payload.items) ? payload.items : [];
    if (!id || items.length === 0) return { applied: false, reason: "invalid UPDATE_CONFIG payload" };

    await prisma.configModulo.upsert({
      where: { id },
      update: { items: JSON.stringify(items), updatedAt: toIsoNow() },
      create: { id, items: JSON.stringify(items), updatedAt: toIsoNow() }
    });

    return { applied: true };
  }

  if (type === "SET_PROMPT_STATUS") {
    const promptId = typeof payload.promptId === "string" ? payload.promptId : "";
    const status = typeof payload.status === "string" ? payload.status : "";
    if (!promptId || !status) return { applied: false, reason: "invalid SET_PROMPT_STATUS payload" };

    await prisma.prompt.updateMany({ where: { id: promptId }, data: { status } });
    return { applied: true };
  }

  if (type === "SET_GENERATOR_STATUS") {
    const subject = typeof payload.subject === "string" ? payload.subject.trim() : "";
    const topic = typeof payload.topic === "string" ? payload.topic.trim() : "";
    const status = typeof payload.status === "string" ? payload.status.toUpperCase().trim() : "";

    if (!subject || !topic) return { applied: false, reason: "invalid SET_GENERATOR_STATUS payload: subject and topic required" };
    if (!["ACTIVE", "INACTIVE"].includes(status)) return { applied: false, reason: "invalid SET_GENERATOR_STATUS payload: status must be ACTIVE or INACTIVE" };

    const now = toIsoNow();
    await prisma.generadorAdmin.upsert({
      where: { subject_topic: { subject, topic } },
      update: { status, updatedAt: now },
      create: { subject, topic, status, updatedAt: now, createdAt: now }
    });

    return { applied: true, action: "SET_GENERATOR_STATUS", subject, topic, status };
  }

  if (type === "UPDATE_GENERATOR") {
    const subject = typeof payload.subject === "string" ? payload.subject.trim() : "";
    const topic = typeof payload.topic === "string" ? payload.topic.trim() : "";

    if (!subject || !topic) return { applied: false, reason: "invalid UPDATE_GENERATOR payload: subject and topic required" };

    const now = toIsoNow();
    await prisma.generadorAdmin.upsert({
      where: { subject_topic: { subject, topic } },
      update: { status: "ACTIVE", updatedAt: now },
      create: { subject, topic, status: "ACTIVE", updatedAt: now, createdAt: now }
    });

    return { applied: true, action: "UPDATE_GENERATOR", subject, topic };
  }

  if (type === "CREATE_GENERATOR") {
    const subject = typeof payload.subject === "string" ? payload.subject.trim() : "";
    const topic = typeof payload.topic === "string" ? payload.topic.trim() : "";

    if (!subject || !topic) return { applied: false, reason: "invalid CREATE_GENERATOR payload: subject and topic required" };
    if (!payload.enunciado) return { applied: false, reason: "invalid CREATE_GENERATOR payload: enunciado is required" };

    const now = toIsoNow();
    await prisma.generadorAdmin.upsert({
      where: { subject_topic: { subject, topic } },
      update: { status: "ACTIVE", updatedAt: now },
      create: { subject, topic, status: "ACTIVE", updatedAt: now, createdAt: now }
    });

    return { applied: true, action: "CREATE_GENERATOR", subject, topic };
  }

  return {
    applied: false,
    reason: `unsupported proposalType: ${proposal.proposalType}`
  };
};
