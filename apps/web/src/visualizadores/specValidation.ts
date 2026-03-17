import { z } from "zod";
import type { VisualSpec } from "./types";

// ─── Zod schemas for the most common VisualSpec kinds ────────────────────────

const timelineEventSchema = z.object({
  id: z.string(),
  title: z.string().min(1),
  date: z.string().min(1),
  description: z.string().optional(),
  tags: z.array(z.string()).optional(),
});

const timelineSchema = z.object({
  kind: z.literal("timeline"),
  title: z.string().optional(),
  events: z.array(timelineEventSchema),
});

const conceptNodeSchema = z.object({
  id: z.string(),
  label: z.string().min(1),
  description: z.string().optional(),
  group: z.string().optional(),
});

const conceptLinkSchema = z.object({
  id: z.string(),
  sourceId: z.string(),
  targetId: z.string(),
  relation: z.string().min(1),
});

const conceptMapSchema = z.object({
  kind: z.literal("concept-map"),
  title: z.string().optional(),
  nodes: z.array(conceptNodeSchema),
  links: z.array(conceptLinkSchema),
});

const chartSeriesSchema = z.object({
  id: z.string(),
  label: z.string(),
  data: z.array(z.object({ x: z.union([z.string(), z.number()]), y: z.number() })),
  color: z.string().optional(),
});

const chartSchema = z.object({
  kind: z.literal("chart"),
  chartType: z.enum(["bar", "line", "pie", "area", "scatter"]),
  title: z.string().optional(),
  series: z.array(chartSeriesSchema).min(1),
});

const flowStepSchema = z.object({
  id: z.string(),
  label: z.string().min(1),
  description: z.string().optional(),
  type: z.enum(["start", "process", "decision", "end"]).optional(),
});

const flowConnectionSchema = z.object({
  id: z.string(),
  fromId: z.string(),
  toId: z.string(),
  label: z.string().optional(),
});

const flowSchema = z.object({
  kind: z.literal("flow"),
  title: z.string().optional(),
  steps: z.array(flowStepSchema),
  connections: z.array(flowConnectionSchema),
});

const mapMarkerSchema = z.object({
  id: z.string(),
  label: z.string(),
  coordinates: z.tuple([z.number(), z.number()]),
  description: z.string().optional(),
  category: z.string().optional(),
});

const mapSchema = z.object({
  kind: z.literal("map"),
  title: z.string().optional(),
  markers: z.array(mapMarkerSchema),
});

const statDistributionSchema = z.object({
  kind: z.literal("stat-distribution"),
  title: z.string().optional(),
  distributionType: z.enum(["normal", "binomial", "uniform"]),
  parameters: z.record(z.string(), z.number()),
  samples: z.number().int().min(1),
  curve: z.array(z.object({ x: z.number(), y: z.number() })),
});

const statRegressionSchema = z.object({
  kind: z.literal("stat-regression"),
  title: z.string().optional(),
  points: z.array(z.object({ x: z.number(), y: z.number(), label: z.string().optional() })),
  regression: z.object({
    type: z.enum(["linear", "quadratic"]),
    coefficients: z.array(z.number()),
    r2: z.number(),
    line: z.array(z.object({ x: z.number(), y: z.number() })),
  }),
  axes: z.object({
    x: z.object({ label: z.string().optional(), min: z.number(), max: z.number() }),
    y: z.object({ label: z.string().optional(), min: z.number(), max: z.number() }),
  }),
});

// ─── Known schema registry ────────────────────────────────────────────────────

const SCHEMAS: Record<string, z.ZodTypeAny> = {
  timeline: timelineSchema,
  "concept-map": conceptMapSchema,
  chart: chartSchema,
  flow: flowSchema,
  map: mapSchema,
  "stat-distribution": statDistributionSchema,
  "stat-regression": statRegressionSchema,
};

// ─── Public API ───────────────────────────────────────────────────────────────

export type ValidationResult = {
  valid: boolean;
  errors: string[];
  warnings: string[];
};

/**
 * Validates a VisualSpec against its Zod schema (if one exists).
 * - Known kinds with schema violations → `valid: false` with error list.
 * - Unknown kinds → `valid: true` but with a warning message.
 * - Never throws.
 */
export function validateSpec(spec: VisualSpec): ValidationResult {
  const schema = SCHEMAS[spec.kind];

  if (!schema) {
    return {
      valid: true,
      errors: [],
      warnings: [`Unknown spec kind: "${spec.kind}" — no validation schema available`],
    };
  }

  const result = schema.safeParse(spec);
  if (result.success) {
    return { valid: true, errors: [], warnings: [] };
  }

  const errors = result.error.issues.map(
    (issue) => `${issue.path.join(".") || "root"}: ${issue.message}`,
  );
  return { valid: false, errors, warnings: [] };
}
