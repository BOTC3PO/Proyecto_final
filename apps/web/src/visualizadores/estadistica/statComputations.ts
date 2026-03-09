import type { StatDistributionSpec, StatRegressionSpec } from "../types";

// ─── Distribution curve computation ───────────────────────────────────────────

function normalPDF(x: number, mean: number, stdDev: number): number {
  const sigma = Math.max(stdDev, 0.001);
  return (
    (1 / (sigma * Math.sqrt(2 * Math.PI))) *
    Math.exp(-0.5 * Math.pow((x - mean) / sigma, 2))
  );
}

function binomialCoeff(n: number, k: number): number {
  if (k < 0 || k > n) return 0;
  if (k === 0 || k === n) return 1;
  let result = 1;
  for (let i = 0; i < Math.min(k, n - k); i++) {
    result = (result * (n - i)) / (i + 1);
  }
  return result;
}

function binomialPMF(k: number, n: number, p: number): number {
  return binomialCoeff(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
}

function buildNormalCurveAndHistogram(
  mean: number,
  stdDev: number,
  samples: number,
): Pick<StatDistributionSpec, "curve" | "histogram"> {
  const sigma = Math.max(stdDev, 0.001);
  const xMin = mean - 4 * sigma;
  const xMax = mean + 4 * sigma;
  const steps = 120;
  const curve: Array<{ x: number; y: number }> = [];
  for (let i = 0; i <= steps; i++) {
    const x = xMin + (i / steps) * (xMax - xMin);
    curve.push({ x, y: normalPDF(x, mean, sigma) });
  }

  // Histogram: simulate binned counts
  const binCount = Math.max(10, Math.min(30, Math.round(Math.sqrt(samples))));
  const binWidth = (xMax - xMin) / binCount;
  const histogram: Array<{ x: number; count: number }> = [];
  const maxPDF = normalPDF(mean, mean, sigma);
  for (let i = 0; i < binCount; i++) {
    const x = xMin + i * binWidth + binWidth / 2;
    const density = normalPDF(x, mean, sigma);
    // count = density * samples * binWidth (normalized to approximate frequency)
    const count = (density / maxPDF) * samples * binWidth;
    histogram.push({ x, count });
  }
  return { curve, histogram };
}

function buildBinomialCurveAndHistogram(
  n: number,
  p: number,
  samples: number,
): Pick<StatDistributionSpec, "curve" | "histogram"> {
  const safeN = Math.max(1, Math.min(50, Math.round(n)));
  const safeP = Math.max(0.001, Math.min(0.999, p));
  const curve: Array<{ x: number; y: number }> = [];
  const histogram: Array<{ x: number; count: number }> = [];
  for (let k = 0; k <= safeN; k++) {
    const y = binomialPMF(k, safeN, safeP);
    curve.push({ x: k, y });
    histogram.push({ x: k, count: y * samples });
  }
  return { curve, histogram };
}

function buildUniformCurveAndHistogram(
  min: number,
  max: number,
  samples: number,
): Pick<StatDistributionSpec, "curve" | "histogram"> {
  const safeMin = min;
  const safeMax = max > min ? max : min + 1;
  const range = safeMax - safeMin;
  const density = 1 / range;
  const padding = range * 0.15;
  const xMin = safeMin - padding;
  const xMax = safeMax + padding;
  const steps = 80;
  const curve: Array<{ x: number; y: number }> = [];

  // Build flat-top curve with steep edges (step function approximation)
  curve.push({ x: xMin, y: 0 });
  curve.push({ x: safeMin - 0.001 * range, y: 0 });
  curve.push({ x: safeMin, y: density });
  for (let i = 1; i <= steps; i++) {
    const x = safeMin + (i / steps) * range;
    curve.push({ x, y: density });
  }
  curve.push({ x: safeMax, y: density });
  curve.push({ x: safeMax + 0.001 * range, y: 0 });
  curve.push({ x: xMax, y: 0 });

  const binCount = Math.max(5, Math.min(20, Math.round(Math.sqrt(samples))));
  const binWidth = range / binCount;
  const histogram: Array<{ x: number; count: number }> = [];
  for (let i = 0; i < binCount; i++) {
    const x = safeMin + i * binWidth + binWidth / 2;
    histogram.push({ x, count: samples / binCount });
  }
  return { curve, histogram };
}

/**
 * Returns a copy of the spec with `curve` and `histogram` recomputed from
 * current parameters. Safe to call on any StatDistributionSpec.
 */
export function enrichStatDistributionSpec(
  spec: StatDistributionSpec,
): StatDistributionSpec {
  const { distributionType, parameters, samples } = spec;
  const safeSamples = Math.max(10, samples ?? 100);

  let computed: Pick<StatDistributionSpec, "curve" | "histogram">;

  if (distributionType === "binomial") {
    const n = parameters.n ?? 10;
    const p = parameters.p ?? 0.5;
    computed = buildBinomialCurveAndHistogram(n, p, safeSamples);
  } else if (distributionType === "uniform") {
    const min = parameters.min ?? 0;
    const max = parameters.max ?? 10;
    computed = buildUniformCurveAndHistogram(min, max, safeSamples);
  } else {
    // normal (default)
    const mean = parameters.mean ?? 0;
    const stdDev = parameters.stdDev ?? 1;
    computed = buildNormalCurveAndHistogram(mean, stdDev, safeSamples);
  }

  return { ...spec, curve: computed.curve, histogram: computed.histogram };
}

// ─── Regression computation ───────────────────────────────────────────────────

function linearLeastSquares(
  points: Array<{ x: number; y: number }>,
): { coefficients: [number, number]; r2: number } {
  const n = points.length;
  if (n < 2) return { coefficients: [0, 1], r2: 0 };

  const sumX = points.reduce((s, p) => s + p.x, 0);
  const sumY = points.reduce((s, p) => s + p.y, 0);
  const sumXX = points.reduce((s, p) => s + p.x * p.x, 0);
  const sumXY = points.reduce((s, p) => s + p.x * p.y, 0);

  const denom = n * sumXX - sumX * sumX;
  if (Math.abs(denom) < 1e-10) return { coefficients: [sumY / n, 0], r2: 0 };

  const b = (n * sumXY - sumX * sumY) / denom;
  const a = (sumY - b * sumX) / n;

  const meanY = sumY / n;
  const ssTot = points.reduce((s, p) => s + Math.pow(p.y - meanY, 2), 0);
  const ssRes = points.reduce((s, p) => s + Math.pow(p.y - (a + b * p.x), 2), 0);
  const r2 = ssTot < 1e-10 ? 1 : Math.max(0, 1 - ssRes / ssTot);

  return { coefficients: [a, b], r2 };
}

function quadraticLeastSquares(
  points: Array<{ x: number; y: number }>,
): { coefficients: [number, number, number]; r2: number } {
  const n = points.length;
  if (n < 3) {
    const lin = linearLeastSquares(points);
    return { coefficients: [lin.coefficients[0], lin.coefficients[1], 0], r2: lin.r2 };
  }

  // Build normal equations for y = a + b*x + c*x²
  let s0 = n, s1 = 0, s2 = 0, s3 = 0, s4 = 0;
  let t0 = 0, t1 = 0, t2 = 0;
  for (const p of points) {
    const x = p.x, y = p.y;
    s1 += x; s2 += x * x; s3 += x * x * x; s4 += x * x * x * x;
    t0 += y; t1 += x * y; t2 += x * x * y;
  }
  // Solve 3×3 system using Cramer's rule (simplified)
  const A = [
    [s0, s1, s2],
    [s1, s2, s3],
    [s2, s3, s4],
  ];
  const B = [t0, t1, t2];

  // Gaussian elimination
  for (let col = 0; col < 3; col++) {
    let maxRow = col;
    for (let row = col + 1; row < 3; row++) {
      if (Math.abs(A[row][col]) > Math.abs(A[maxRow][col])) maxRow = row;
    }
    [A[col], A[maxRow]] = [A[maxRow], A[col]];
    [B[col], B[maxRow]] = [B[maxRow], B[col]];
    if (Math.abs(A[col][col]) < 1e-10) continue;
    for (let row = col + 1; row < 3; row++) {
      const factor = A[row][col] / A[col][col];
      B[row] -= factor * B[col];
      for (let k = col; k < 3; k++) A[row][k] -= factor * A[col][k];
    }
  }

  const c = Math.abs(A[2][2]) < 1e-10 ? 0 : B[2] / A[2][2];
  const b = Math.abs(A[1][1]) < 1e-10 ? 0 : (B[1] - A[1][2] * c) / A[1][1];
  const a = Math.abs(A[0][0]) < 1e-10 ? 0 : (B[0] - A[0][1] * b - A[0][2] * c) / A[0][0];

  const meanY = t0 / n;
  const ssTot = points.reduce((s, p) => s + Math.pow(p.y - meanY, 2), 0);
  const ssRes = points.reduce(
    (s, p) => s + Math.pow(p.y - (a + b * p.x + c * p.x * p.x), 2),
    0,
  );
  const r2 = ssTot < 1e-10 ? 1 : Math.max(0, 1 - ssRes / ssTot);

  return { coefficients: [a, b, c], r2 };
}

/**
 * Returns a copy of the spec with regression line, R², and axes recomputed
 * from current points and regression type.
 */
export function enrichStatRegressionSpec(
  spec: StatRegressionSpec,
): StatRegressionSpec {
  const { points, regression, axes } = spec;
  if (!points || points.length < 2) return spec;

  const type = regression.type ?? "linear";
  let coefficients: number[];
  let r2: number;

  if (type === "quadratic") {
    const result = quadraticLeastSquares(points);
    coefficients = result.coefficients;
    r2 = result.r2;
  } else {
    const result = linearLeastSquares(points);
    coefficients = result.coefficients;
    r2 = result.r2;
  }

  const xs = points.map((p) => p.x);
  const ys = points.map((p) => p.y);
  const xMin = Math.min(...xs);
  const xMax = Math.max(...xs);
  const xPad = (xMax - xMin) * 0.1 || 1;

  // Build regression line
  const lineSteps = 60;
  const lineXMin = xMin - xPad;
  const lineXMax = xMax + xPad;
  const line: Array<{ x: number; y: number }> = [];
  for (let i = 0; i <= lineSteps; i++) {
    const x = lineXMin + (i / lineSteps) * (lineXMax - lineXMin);
    let y: number;
    if (type === "quadratic") {
      y = coefficients[0] + coefficients[1] * x + coefficients[2] * x * x;
    } else {
      y = coefficients[0] + coefficients[1] * x;
    }
    line.push({ x, y });
  }

  // Recompute residuals
  const residuals = points.map((p) => {
    let predicted: number;
    if (type === "quadratic") {
      predicted = coefficients[0] + coefficients[1] * p.x + coefficients[2] * p.x * p.x;
    } else {
      predicted = coefficients[0] + coefficients[1] * p.x;
    }
    return { x: p.x, observed: p.y, predicted };
  });

  // Auto-fit axes
  const lineYs = line.map((pt) => pt.y);
  const allYs = [...ys, ...lineYs];
  const yMin = Math.min(...allYs);
  const yMax = Math.max(...allYs);
  const yPad = (yMax - yMin) * 0.15 || 1;

  return {
    ...spec,
    regression: {
      ...regression,
      coefficients,
      r2,
      line,
    },
    axes: {
      x: {
        ...axes.x,
        min: Math.floor(lineXMin - xPad * 0.5),
        max: Math.ceil(lineXMax + xPad * 0.5),
      },
      y: {
        ...axes.y,
        min: Math.floor(yMin - yPad),
        max: Math.ceil(yMax + yPad),
      },
    },
    residuals,
  };
}
