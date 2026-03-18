// Motor estadístico — funciones puras con pasos intermedios en español

export type StepResult = { result: number; steps: string[] }
export type FrequencyTable = {
  value: number
  frequency: number
  relativeFreq: number
  cumulativeFreq: number
}[]
export type BinResult = {
  range: string
  min: number
  max: number
  frequency: number
  relativeFreq: number
}[]

function fmt(n: number): string {
  return parseFloat(n.toFixed(10)).toString()
}

export function mean(data: number[]): StepResult {
  const n = data.length
  const sum = data.reduce((a, b) => a + b, 0)
  const result = sum / n
  return {
    result,
    steps: [
      `Datos: ${data.join(", ")}`,
      `Suma: ${data.join(" + ")} = ${fmt(sum)}`,
      `n = ${n}`,
      `Media = ${fmt(sum)} / ${n} = ${fmt(result)}`,
    ],
  }
}

export function median(data: number[]): StepResult {
  const sorted = [...data].sort((a, b) => a - b)
  const n = sorted.length
  let result: number
  let steps: string[]

  if (n % 2 === 1) {
    const mid = Math.floor(n / 2)
    result = sorted[mid]
    steps = [
      `Datos ordenados: ${sorted.join(", ")}`,
      `n = ${n} (impar)`,
      `Posición central = (${n} + 1) / 2 = ${mid + 1}`,
      `Mediana = ${fmt(result)}`,
    ]
  } else {
    const mid1 = n / 2 - 1
    const mid2 = n / 2
    result = (sorted[mid1] + sorted[mid2]) / 2
    steps = [
      `Datos ordenados: ${sorted.join(", ")}`,
      `n = ${n} (par)`,
      `Posiciones centrales = ${mid1 + 1} y ${mid2 + 1}`,
      `Mediana = (${sorted[mid1]} + ${sorted[mid2]}) / 2 = ${fmt(result)}`,
    ]
  }

  return { result, steps }
}

export function mode(data: number[]): { result: number[]; steps: string[] } {
  const freq: Record<number, number> = {}
  data.forEach((v) => {
    freq[v] = (freq[v] ?? 0) + 1
  })
  const maxFreq = Math.max(...Object.values(freq))
  const modes = Object.entries(freq)
    .filter(([, f]) => f === maxFreq)
    .map(([v]) => Number(v))
    .sort((a, b) => a - b)

  const freqStr = Object.entries(freq)
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(([v, f]) => `${v}: ${f} vez${f > 1 ? "es" : ""}`)
    .join(", ")

  return {
    result: modes,
    steps: [
      `Datos: ${data.join(", ")}`,
      `Frecuencias: ${freqStr}`,
      `Frecuencia máxima = ${maxFreq}`,
      `Moda(s) = ${modes.join(", ")}`,
    ],
  }
}

export function range(data: number[]): StepResult {
  const min = Math.min(...data)
  const max = Math.max(...data)
  const result = max - min
  return {
    result,
    steps: [
      `Datos: ${data.join(", ")}`,
      `Máximo = ${max}`,
      `Mínimo = ${min}`,
      `Rango = ${max} − ${min} = ${fmt(result)}`,
    ],
  }
}

export function variance(data: number[], population = false): StepResult {
  const m = mean(data).result
  const n = data.length
  const diffs = data.map((v) => v - m)
  const squaredDiffs = diffs.map((d) => d * d)
  const sumSq = squaredDiffs.reduce((a, b) => a + b, 0)
  const divisor = population ? n : n - 1
  const result = sumSq / divisor

  return {
    result,
    steps: [
      `Media = ${fmt(m)}`,
      `Diferencias al cuadrado: ${diffs
        .map((_, i) => `(${data[i]} − ${fmt(m)})² = ${fmt(squaredDiffs[i])}`)
        .join(", ")}`,
      `Suma de cuadrados = ${fmt(sumSq)}`,
      `Divisor = ${divisor} (${population ? "población" : "muestra"})`,
      `Varianza = ${fmt(sumSq)} / ${divisor} = ${fmt(result)}`,
    ],
  }
}

export function stdDev(data: number[], population = false): StepResult {
  const v = variance(data, population)
  const result = Math.sqrt(v.result)
  return {
    result,
    steps: [
      ...v.steps,
      `Desviación estándar = √${fmt(v.result)} = ${fmt(result)}`,
    ],
  }
}

export function frequencyTable(data: number[]): FrequencyTable {
  const freq: Record<number, number> = {}
  data.forEach((v) => {
    freq[v] = (freq[v] ?? 0) + 1
  })
  const n = data.length
  const sorted = Object.keys(freq)
    .map(Number)
    .sort((a, b) => a - b)

  let cumulative = 0
  return sorted.map((value) => {
    const frequency = freq[value]
    const relativeFreq = frequency / n
    cumulative += relativeFreq
    return { value, frequency, relativeFreq, cumulativeFreq: cumulative }
  })
}

export function histogram(data: number[], bins = 10): BinResult {
  const min = Math.min(...data)
  const max = Math.max(...data)
  const binWidth = (max - min) / bins
  const n = data.length

  const result: BinResult = []
  for (let i = 0; i < bins; i++) {
    const binMin = min + i * binWidth
    const binMax = min + (i + 1) * binWidth
    const isLast = i === bins - 1
    const frequency = data.filter((v) =>
      isLast ? v >= binMin && v <= binMax : v >= binMin && v < binMax
    ).length
    result.push({
      range: `[${fmt(parseFloat(binMin.toFixed(4)))}, ${fmt(parseFloat(binMax.toFixed(4)))}${isLast ? "]" : ")"}`,
      min: binMin,
      max: binMax,
      frequency,
      relativeFreq: frequency / n,
    })
  }
  return result
}

export function percentile(data: number[], p: number): StepResult {
  const sorted = [...data].sort((a, b) => a - b)
  const n = sorted.length
  const index = (p / 100) * (n - 1)
  const lower = Math.floor(index)
  const upper = Math.ceil(index)
  const fraction = index - lower
  const result =
    lower === upper
      ? sorted[lower]
      : sorted[lower] + fraction * (sorted[upper] - sorted[lower])

  return {
    result,
    steps: [
      `Datos ordenados: ${sorted.join(", ")}`,
      `n = ${n}`,
      `Índice = (${p} / 100) × (${n} − 1) = ${fmt(index)}`,
      lower === upper
        ? `Percentil ${p} = ${fmt(result)}`
        : `Valores en posiciones ${lower + 1} y ${upper + 1}: ${sorted[lower]} y ${sorted[upper]}`,
      lower === upper
        ? ""
        : `Percentil ${p} = ${sorted[lower]} + ${fmt(fraction)} × (${sorted[upper]} − ${sorted[lower]}) = ${fmt(result)}`,
    ].filter(Boolean),
  }
}

export function quartiles(data: number[]): {
  q1: number
  q2: number
  q3: number
  iqr: number
  steps: string[]
} {
  const q1Res = percentile(data, 25)
  const q2Res = percentile(data, 50)
  const q3Res = percentile(data, 75)
  const iqr = q3Res.result - q1Res.result

  return {
    q1: q1Res.result,
    q2: q2Res.result,
    q3: q3Res.result,
    iqr,
    steps: [
      `Datos ordenados: ${[...data].sort((a, b) => a - b).join(", ")}`,
      `Q1 (percentil 25) = ${fmt(q1Res.result)}`,
      `Q2 (mediana, percentil 50) = ${fmt(q2Res.result)}`,
      `Q3 (percentil 75) = ${fmt(q3Res.result)}`,
      `IQR = Q3 − Q1 = ${fmt(q3Res.result)} − ${fmt(q1Res.result)} = ${fmt(iqr)}`,
    ],
  }
}

export function zScore(data: number[]): { scores: number[]; steps: string[] } {
  const m = mean(data).result
  const s = stdDev(data).result
  const scores = data.map((v) => (v - m) / s)

  return {
    scores,
    steps: [
      `Media = ${fmt(m)}`,
      `Desviación estándar = ${fmt(s)}`,
      `Fórmula: z = (x − media) / desviación estándar`,
      ...data.map(
        (v, i) =>
          `z(${v}) = (${v} − ${fmt(m)}) / ${fmt(s)} = ${fmt(scores[i])}`
      ),
    ],
  }
}

export function covariance(x: number[], y: number[]): StepResult {
  const mx = mean(x).result
  const my = mean(y).result
  const n = x.length
  const products = x.map((xi, i) => (xi - mx) * (y[i] - my))
  const sum = products.reduce((a, b) => a + b, 0)
  const result = sum / (n - 1)

  return {
    result,
    steps: [
      `Media X = ${fmt(mx)}, Media Y = ${fmt(my)}`,
      `Productos (xi − x̄)(yi − ȳ): ${products.map((p) => fmt(p)).join(", ")}`,
      `Suma = ${fmt(sum)}`,
      `Covarianza = ${fmt(sum)} / ${n - 1} = ${fmt(result)}`,
    ],
  }
}

export function correlation(x: number[], y: number[]): StepResult {
  const cov = covariance(x, y).result
  const sx = stdDev(x).result
  const sy = stdDev(y).result
  const result = cov / (sx * sy)

  return {
    result,
    steps: [
      `Covarianza = ${fmt(cov)}`,
      `Desviación estándar X = ${fmt(sx)}`,
      `Desviación estándar Y = ${fmt(sy)}`,
      `Correlación de Pearson = ${fmt(cov)} / (${fmt(sx)} × ${fmt(sy)}) = ${fmt(result)}`,
    ],
  }
}

export function linearRegression(
  x: number[],
  y: number[]
): { slope: number; intercept: number; r2: number; steps: string[] } {
  const n = x.length
  const mx = mean(x).result
  const my = mean(y).result
  const ssxy = x.reduce((sum, xi, i) => sum + (xi - mx) * (y[i] - my), 0)
  const ssxx = x.reduce((sum, xi) => sum + (xi - mx) ** 2, 0)
  const slope = ssxy / ssxx
  const intercept = my - slope * mx

  const yHat = x.map((xi) => slope * xi + intercept)
  const ssTot = y.reduce((sum, yi) => sum + (yi - my) ** 2, 0)
  const ssRes = y.reduce((sum, yi, i) => sum + (yi - yHat[i]) ** 2, 0)
  const r2 = ssTot === 0 ? 1 : 1 - ssRes / ssTot

  return {
    slope,
    intercept,
    r2,
    steps: [
      `n = ${n}`,
      `Media X = ${fmt(mx)}, Media Y = ${fmt(my)}`,
      `Σ(xi − x̄)(yi − ȳ) = ${fmt(ssxy)}`,
      `Σ(xi − x̄)² = ${fmt(ssxx)}`,
      `Pendiente (b₁) = ${fmt(ssxy)} / ${fmt(ssxx)} = ${fmt(slope)}`,
      `Intercepto (b₀) = ${fmt(my)} − ${fmt(slope)} × ${fmt(mx)} = ${fmt(intercept)}`,
      `Ecuación: ŷ = ${fmt(slope)}x + (${fmt(intercept)})`,
      `R² = ${fmt(r2)}`,
    ],
  }
}

export function summaryStats(data: number[]): {
  mean: number
  median: number
  mode: number[]
  stdDev: number
  variance: number
  min: number
  max: number
  range: number
  q1: number
  q3: number
  iqr: number
} {
  const q = quartiles(data)
  return {
    mean: mean(data).result,
    median: median(data).result,
    mode: mode(data).result,
    stdDev: stdDev(data).result,
    variance: variance(data).result,
    min: Math.min(...data),
    max: Math.max(...data),
    range: range(data).result,
    q1: q.q1,
    q3: q.q3,
    iqr: q.iqr,
  }
}
