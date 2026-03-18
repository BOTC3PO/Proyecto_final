import type { VisualSpec, StatDistributionSpec, StatRegressionSpec } from "./types";
import {
  enrichStatDistributionSpec,
  enrichStatRegressionSpec,
} from "./estadistica/statComputations";

// Memoization cache: same object reference → same result
const cache = new WeakMap<object, VisualSpec>();

/**
 * Normalizes a VisualSpec by running enrichment for kinds that require
 * pre-computed derived data (curves, histograms, regression lines, etc.).
 *
 * This is the SINGLE point of normalization. Call it only in ToolPreview,
 * never in ToolParamEditor or other editing components.
 *
 * For kinds with no enrichment, returns the spec unchanged.
 * On any error, returns the original spec unchanged.
 */
export function normalizeSpec(spec: VisualSpec): VisualSpec {
  if (cache.has(spec)) {
    return cache.get(spec)!;
  }

  let normalized: VisualSpec;
  try {
    switch (spec.kind) {
      case "stat-distribution":
        normalized = enrichStatDistributionSpec(spec as StatDistributionSpec);
        break;
      case "stat-regression":
        normalized = enrichStatRegressionSpec(spec as StatRegressionSpec);
        break;
      default:
        normalized = spec;
        break;
    }
  } catch {
    normalized = spec;
  }

  // Only cache if a new object was produced (avoids polluting WeakMap for pass-through)
  if (normalized !== spec) {
    cache.set(spec, normalized);
  }

  return normalized;
}
