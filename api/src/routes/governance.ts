import { Router } from "express";
import { randomUUID } from "crypto";
import { getDb } from "../lib/db";
import {
  CastVoteInputSchema,
  CreateProposalInputSchema,
  PromptSchema,
  ProposalSchema,
  VoteSchema
} from "../schema/governance";
import {
  applyApprovedGovernanceChange,
  evaluateGovernanceLevel,
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

    const db = await getDb();
    const prompts = await db
      .collection("prompts")
      .find({ targetType, targetId, status: "ACTIVE" })
      .sort({ createdAt: -1 })
      .toArray();

    const items = prompts.map((prompt) =>
      PromptSchema.parse({
        id: String(prompt.id ?? prompt._id ?? ""),
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
        createdAt: new Date(prompt.createdAt ?? new Date()).toISOString(),
        source: String(prompt.source ?? "governance")
      })
    );

    return res.json({ items });
  } catch (error: any) {
    return res.status(400).json({ error: error?.message ?? "failed to list prompts" });
  }
});

governance.post("/api/proposals", async (req, res) => {
  try {
    const db = await getDb();
    const parsed = CreateProposalInputSchema.parse(req.body ?? {});
    const level = evaluateGovernanceLevel(parsed.targetType, parsed.proposalType, parsed.level);
    const allowed = await validateGovernancePermissions({
      db,
      actorId: parsed.createdBy,
      level,
      targetType: parsed.targetType,
      targetId: parsed.targetId
    });

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

    await db.collection("proposals").insertOne(proposal);
    return res.status(201).json(proposal);
  } catch (error: any) {
    return res.status(400).json({ error: error?.message ?? "invalid proposal" });
  }
});

governance.post("/api/proposals/:id/vote", async (req, res) => {
  try {
    const db = await getDb();
    const proposalId = String(req.params.id ?? "").trim();
    const proposal = await db.collection("proposals").findOne({ id: proposalId });
    if (!proposal) return res.status(404).json({ error: "proposal not found" });
    if (proposal.status !== "OPEN") return res.status(409).json({ error: "proposal is not open" });

    const parsed = CastVoteInputSchema.parse(req.body ?? {});
    const vote = VoteSchema.parse({
      id: randomUUID(),
      proposalId,
      voterId: parsed.voterId,
      vote: parsed.vote,
      createdAt: new Date().toISOString()
    });

    await db.collection("votes").updateOne(
      { proposalId, voterId: vote.voterId },
      { $set: vote },
      { upsert: true }
    );

    return res.status(201).json(vote);
  } catch (error: any) {
    return res.status(400).json({ error: error?.message ?? "invalid vote" });
  }
});

governance.post("/api/proposals/:id/close", async (req, res) => {
  try {
    const db = await getDb();
    const proposalId = String(req.params.id ?? "").trim();
    const proposalRaw = await db.collection("proposals").findOne({ id: proposalId });
    if (!proposalRaw) return res.status(404).json({ error: "proposal not found" });

    const proposal = ProposalSchema.parse({
      ...proposalRaw,
      id: String(proposalRaw.id ?? proposalRaw._id ?? ""),
      createdAt: new Date(proposalRaw.createdAt ?? new Date()).toISOString()
    });

    if (proposal.status !== "OPEN") {
      return res.status(409).json({ error: "proposal already closed" });
    }

    const actorId = resolveActorId(req);
    const canClose = await validateGovernancePermissions({
      db,
      actorId,
      level: proposal.level,
      targetType: proposal.targetType,
      targetId: proposal.targetId
    });

    if (!canClose) return res.status(403).json({ error: "permission denied" });

    const votes = await db.collection("votes").find({ proposalId }).toArray();
    const summary = votes.reduce(
      (acc, vote) => {
        const value = String(vote.vote ?? "").toUpperCase();
        if (value === "APPROVE") acc.approve += 1;
        if (value === "REJECT") acc.reject += 1;
        if (value === "ABSTAIN") acc.abstain += 1;
        return acc;
      },
      { approve: 0, reject: 0, abstain: 0 }
    );

    const approved = summary.approve > summary.reject;
    const nextStatus = approved ? "APPROVED" : "REJECTED";

    let applyResult: { applied: boolean; reason?: string } = { applied: false };
    if (approved) {
      applyResult = await applyApprovedGovernanceChange(db, proposal);
    }

    await db.collection("proposals").updateOne(
      { id: proposalId },
      {
        $set: {
          status: nextStatus,
          closedAt: new Date().toISOString(),
          closedBy: actorId,
          voteSummary: summary,
          applyResult
        }
      }
    );

    return res.json({
      id: proposalId,
      status: nextStatus,
      summary,
      applyResult
    });
  } catch (error: any) {
    return res.status(400).json({ error: error?.message ?? "unable to close proposal" });
  }
});
