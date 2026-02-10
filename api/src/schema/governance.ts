import { z } from "zod";

export const GovernanceTargetTypeSchema = z.string().min(1);

export const PromptKindSchema = z.enum(["QUESTION", "TASK", "ANNOUNCEMENT"]);
export const PromptStatusSchema = z.enum(["ACTIVE", "INACTIVE", "ARCHIVED"]);

export const PromptSchema = z.object({
  id: z.string().min(1),
  targetType: GovernanceTargetTypeSchema,
  targetId: z.string().min(1),
  kind: PromptKindSchema,
  title: z.string().min(1),
  bodyText: z.string().min(1),
  paramsSchema: z.record(z.string(), z.unknown()).optional().default({}),
  status: PromptStatusSchema,
  createdBy: z.string().min(1),
  createdAt: z.string().datetime(),
  source: z.string().min(1)
});

export const ProposalStatusSchema = z.enum(["OPEN", "APPROVED", "REJECTED", "CLOSED"]);
export const ProposalTypeSchema = z.string().min(1);
export const GovernanceLevelSchema = z.enum(["CONTENT", "GOVERNANCE"]);

export const ProposalSchema = z.object({
  id: z.string().min(1),
  targetType: GovernanceTargetTypeSchema,
  targetId: z.string().min(1),
  proposalType: ProposalTypeSchema,
  payload: z.record(z.string(), z.unknown()),
  level: GovernanceLevelSchema,
  createdBy: z.string().min(1),
  createdAt: z.string().datetime(),
  status: ProposalStatusSchema,
  rationale: z.string().min(1).optional()
});

export const VoteValueSchema = z.enum(["APPROVE", "REJECT", "ABSTAIN"]);

export const VoteSchema = z.object({
  id: z.string().min(1),
  proposalId: z.string().min(1),
  voterId: z.string().min(1),
  vote: VoteValueSchema,
  createdAt: z.string().datetime()
});

export const CreateProposalInputSchema = ProposalSchema.pick({
  targetType: true,
  targetId: true,
  proposalType: true,
  payload: true,
  createdBy: true,
  rationale: true
}).extend({
  level: GovernanceLevelSchema.optional()
});

export const CastVoteInputSchema = VoteSchema.pick({
  voterId: true,
  vote: true
});

export type Prompt = z.infer<typeof PromptSchema>;
export type Proposal = z.infer<typeof ProposalSchema>;
export type Vote = z.infer<typeof VoteSchema>;
