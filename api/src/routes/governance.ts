import { Router } from "express";
import { randomUUID } from "crypto";
import { prisma } from "../lib/prisma";
import {
  CastVoteInputSchema,
  CreateProposalInputSchema,
  GovernanceLevelSchema,
  PromptSchema,
  ProposalSchema,
  VoteSchema
} from "../schema/governance";
import {
  applyApprovedGovernanceChange,
  canActorCreateProposal,
  canActorVoteOnLevel,
  evaluateGovernanceLevel,
  evaluateProposalOutcome,
  validateGovernancePermissions
} from "../lib/governance";

export const governance = Router();

const resolveActorId = (req: { header: (name: string) => string | undefined; body?: unknown }) => {
  const fromHeader = req.header("x-user-id");
  if (fromHeader) return fromHeader;
  if (req.body && typeof req.body === "object" && "actorId" in req.body) {
    const actorId = (req.body as { actorId?: unknown }).actorId;
    if (typeof actorId === "string" && actorId.trim()) return actorId;
  }
  return "";
};

governance.get("/api/prompts", async (req, res) => {
  try {
    const targetType = String(req.query.targetType ?? "").trim();
    const targetId = String(req.query.targetId ?? "").trim();

    if (!targetType || !targetId) {
      return res.status(400).json({ error: "targetType and targetId are required" });
    }

    const prompts = await prisma.prompt.findMany({
      where: { targetType, targetId, status: "ACTIVE" },
      orderBy: { createdAt: "desc" }
    });

    const items = prompts.map((prompt) =>
      PromptSchema.parse({
        id: String(prompt.id ?? ""),
        targetType: String(prompt.targetType ?? ""),
        targetId: String(prompt.targetId ?? ""),
        kind: String(prompt.kind ?? "QUESTION"),
        title: String(prompt.title ?? ""),
        bodyText: String(prompt.bodyText ?? ""),
        paramsSchema:
          prompt.paramsSchema && typeof prompt.paramsSchema === "object"
            ? (prompt.paramsSchema as Record<string, unknown>)
            : {},
        status: String(prompt.status ?? "ACTIVE"),
        createdBy: String(prompt.createdBy ?? ""),
        createdAt: new Date(String(prompt.createdAt ?? new Date())).toISOString(),
        source: String(prompt.source ?? "governance")
      })
    );

    return res.json({ items });
  } catch (error: any) {
    return res.status(400).json({ error: error?.message ?? "failed to list prompts" });
  }
});

governance.get("/api/proposals", async (req, res) => {
  try {
    const statusFilter = typeof req.query.status === "string" ? req.query.status.toUpperCase() : "";
    const targetType = typeof req.query.targetType === "string" ? req.query.targetType.trim() : "";
    const targetId = typeof req.query.targetId === "string" ? req.query.targetId.trim() : "";

    const filter: Record<string, unknown> = {};
    if (statusFilter) filter.status = statusFilter;
    if (targetType) filter.targetType = targetType;
    if (targetId) filter.targetId = targetId;

    const proposals = await prisma.proposal.findMany({
      where: filter,
      orderBy: { createdAt: "desc" },
      take: 100
    });

    return res.json({ items: proposals });
  } catch (error: any) {
    return res.status(500).json({ error: error?.message ?? "failed to list proposals" });
  }
});

governance.get("/api/proposals/:id", async (req, res) => {
  try {
    const proposalId = String(req.params.id ?? "").trim();
    const proposal = await prisma.proposal.findFirst({ where: { id: proposalId } });
    if (!proposal) return res.status(404).json({ error: "proposal not found" });
    return res.json(proposal);
  } catch (error: any) {
    return res.status(500).json({ error: error?.message ?? "failed to get proposal" });
  }
});

governance.post("/api/proposals", async (req, res) => {
  try {
    const parsed = CreateProposalInputSchema.parse(req.body ?? {});
    const level = evaluateGovernanceLevel(parsed.targetType, parsed.proposalType);
    const allowed = await canActorCreateProposal(parsed.createdBy);

    if (!allowed) return res.status(403).json({ error: "permission denied" });

    const proposal = ProposalSchema.parse({
      id: randomUUID(),
      targetType: parsed.targetType,
      targetId: parsed.targetId,
      proposalType: parsed.proposalType,
      payload: parsed.payload,
      level,
      createdBy: parsed.createdBy,
      createdAt: new Date().toISOString(),
      status: "OPEN",
      rationale: parsed.rationale
    });

    await prisma.proposal.create({ data: { ...proposal, payload: JSON.stringify(proposal.payload) } });
    return res.status(201).json(proposal);
  } catch (error: any) {
    return res.status(400).json({ error: error?.message ?? "invalid proposal" });
  }
});

governance.post("/api/proposals/:id/vote", async (req, res) => {
  try {
    const proposalId = String(req.params.id ?? "").trim();
    const proposal = await prisma.proposal.findFirst({ where: { id: proposalId } });
    if (!proposal) return res.status(404).json({ error: "proposal not found" });
    if (proposal.status !== "OPEN") return res.status(409).json({ error: "proposal is not open" });

    const parsed = CastVoteInputSchema.parse(req.body ?? {});
    const canVote = await canActorVoteOnLevel(parsed.voterId, GovernanceLevelSchema.parse(proposal.level));
    if (!canVote) return res.status(403).json({ error: "permission denied" });

    const vote = VoteSchema.parse({
      id: randomUUID(),
      proposalId,
      voterId: parsed.voterId,
      vote: parsed.vote,
      createdAt: new Date().toISOString()
    });

    const existing = await prisma.vote.findFirst({ where: { proposalId, voterId: vote.voterId } });
    if (existing) {
      await prisma.vote.updateMany({ where: { proposalId, voterId: vote.voterId }, data: vote });
    } else {
      await prisma.vote.create({ data: { ...vote, value: vote.vote } });
    }

    return res.status(201).json(vote);
  } catch (error: any) {
    return res.status(400).json({ error: error?.message ?? "invalid vote" });
  }
});

// GET /api/proposals/:id/apoyos
governance.get("/api/proposals/:id/apoyos", async (req, res) => {
  try {
    const proposalId = String(req.params.id ?? "").trim();

    const proposal = await prisma.proposal.findFirst({ where: { id: proposalId } });
    if (!proposal) return res.status(404).json({ error: "not found" });

    const totalStaff = await prisma.usuario.count({
      where: {
        role: { in: ["TEACHER", "DIRECTIVO", "ADMIN"] },
        isBanned: { not: true }
      }
    });

    const umbral = Math.max(1, Math.ceil(totalStaff * 0.1));

    const apoyos = await prisma.vote.count({
      where: { proposalId, value: "APPROVE" }
    });
    const noApoyos = await prisma.vote.count({
      where: { proposalId, value: "REJECT" }
    });

    const voterId = req.header("x-user-id") ?? "";
    let miVoto: "APPROVE" | "REJECT" | null = null;
    if (voterId) {
      const voto = await prisma.vote.findFirst({ where: { proposalId, voterId } });
      if (voto?.value === "APPROVE") miVoto = "APPROVE";
      else if (voto?.value === "REJECT") miVoto = "REJECT";
    }

    const alcanzado = apoyos >= umbral;

    // Si alcanzó el umbral y sigue OPEN → crear suggestion PINNED
    if (alcanzado && proposal.status === "OPEN") {
      const existingSuggestion = await (prisma as any).suggestionPinned?.findFirst?.({ where: { proposalId } }).catch(() => null);

      if (!existingSuggestion) {
        const suggId = `sug-${Date.now()}-${Math.random().toString(16).slice(2)}`;
        await prisma.suggestion.createMany({
          data: [{
            id: suggId,
            suggestionType: "GOVERNANCE",
            targetType: (proposal as any).targetType ?? "MODULE_GENERATOR",
            targetId: (proposal as any).targetId ?? "",
            title: ((proposal as any).payload as Record<string, unknown>)?.subject as string ?? "Propuesta de gobernanza",
            body: ((proposal as any).payload as Record<string, unknown>)?.description as string ?? "",
            createdBy: (proposal as any).createdBy ?? "system",
            createdAt: new Date().toISOString(),
            status: "PINNED",
          }],
          skipDuplicates: true,
        });
        await (prisma as any).suggestionPinned?.create?.({ data: { proposalId, suggestionId: suggId } }).catch(() => null);
      }
    }

    res.json({ apoyos, noApoyos, umbral, miVoto, alcanzado });
  } catch (error: any) {
    res.status(500).json({ error: error?.message ?? "error" });
  }
});

governance.post("/api/proposals/:id/close", async (req, res) => {
  try {
    const proposalId = String(req.params.id ?? "").trim();
    const proposalRaw = await prisma.proposal.findFirst({ where: { id: proposalId } });
    if (!proposalRaw) return res.status(404).json({ error: "proposal not found" });

    const proposal = ProposalSchema.parse({
      ...proposalRaw,
      id: String(proposalRaw.id ?? ""),
      createdAt: new Date(String(proposalRaw.createdAt ?? new Date())).toISOString()
    });

    if (proposal.status !== "OPEN") {
      return res.status(409).json({ error: "proposal already closed" });
    }

    const actorId = resolveActorId(req);
    const canClose = await validateGovernancePermissions({
      actorId,
      level: proposal.level,
      targetType: proposal.targetType,
      targetId: proposal.targetId
    });

    if (!canClose) return res.status(403).json({ error: "permission denied" });

    const votes = await prisma.vote.findMany({ where: { proposalId } });
    const summary = votes.reduce(
      (acc: { approve: number; reject: number; abstain: number }, vote) => {
        const value = String((vote as any).vote ?? vote.value ?? "").toUpperCase();
        if (value === "APPROVE") acc.approve += 1;
        if (value === "REJECT") acc.reject += 1;
        if (value === "ABSTAIN") acc.abstain += 1;
        return acc;
      },
      { approve: 0, reject: 0, abstain: 0 }
    );

    const outcome = evaluateProposalOutcome({
      level: proposal.level,
      approve: summary.approve,
      reject: summary.reject
    });
    const nextStatus = outcome.approved ? "APPROVED" : "REJECTED";

    let applyResult: { applied: boolean; reason?: string } = { applied: false };
    if (outcome.approved) {
      applyResult = await applyApprovedGovernanceChange(proposal);
    }

    await prisma.proposal.updateMany({
      where: { id: proposalId },
      data: {
        status: nextStatus,
        rationale: `${outcome.rule ?? ""} | closedBy:${actorId} | closedAt:${new Date().toISOString()}`
      }
    });

    return res.json({
      id: proposalId,
      status: nextStatus,
      summary,
      applyResult,
      closeRule: outcome.rule
    });
  } catch (error: any) {
    return res.status(400).json({ error: error?.message ?? "unable to close proposal" });
  }
});
