import {
  EvalError,
  RestriccionesNoSatisfechasError,
} from "../evaluator/errors.js";
import { ParseError } from "../parser/errors.js";
import { generate } from "../runtime/generate.js";
import type {
  CompiledPlantilla,
  GenerationResult,
} from "../runtime/types.js";
import type { GeneradorAsistidoProvider } from "../runtime/provider.js";

export interface ValidationError {
  severity: "error" | "warning";
  code: string;
  message: string;
  count: number;
  sampleSeed: string;
  line?: number;
  col?: number;
}

export interface ValidationReport {
  pass: boolean;
  passedSimulations: number;
  totalSimulations: number;
  errors: ValidationError[];
  warnings: ValidationError[];
  generationTimeMs: number;
  threshold: number;
}

export interface ValidateOptions {
  iterations?: number;
  seedPrefix?: string;
  threshold?: number;
  /**
   * Provider de generadores asistidos. Obligatorio para validar plantillas que
   * usan `generador:` — sin él, `generate()` lanza y todas las simulaciones
   * fallan. Para plantillas sin generador es irrelevante.
   */
  provider?: GeneradorAsistidoProvider;
}

export function validate(
  compiled: CompiledPlantilla,
  opts?: ValidateOptions,
): ValidationReport {
  const iterations = opts?.iterations ?? 100;
  const prefix = opts?.seedPrefix ?? "validate";
  const threshold = opts?.threshold ?? 0.95;

  const errorBucket = new Map<string, ValidationError>();
  const warningBucket = new Map<string, ValidationError>();
  let passed = 0;
  let totalTime = 0;

  // Tarea 06: si la plantilla declara `enunciados:`, garantizar cobertura de
  // TODAS las variantes. En las primeras `min(items.length, iterations)`
  // simulaciones forzamos la variante i % items.length (determinista) para
  // que una interpolacion rota en cualquier variante falle. El resto
  // mantiene la seleccion aleatoria.
  const varianteCount = compiled.enunciados?.length ?? 0;
  const forceWindow = Math.min(varianteCount, iterations);

  for (let i = 0; i < iterations; i++) {
    const seed = `${prefix}-${i}`;
    const forceVariant = i < forceWindow ? i % varianteCount : undefined;
    const t0 = performance.now();
    try {
      const result = generate(compiled, {
        seed,
        provider: opts?.provider,
        ...(forceVariant !== undefined ? { forceVariant } : {}),
      });
      verifyResultIntegrity(result, compiled, seed, warningBucket);
      passed++;
    } catch (e) {
      const err = toValidationError(e as Error, seed);
      const key = errorKey(err);
      const existing = errorBucket.get(key);
      if (existing) {
        existing.count++;
      } else {
        errorBucket.set(key, err);
      }
    }
    totalTime += performance.now() - t0;
  }

  const errors = [...errorBucket.values()];
  const warnings = [...warningBucket.values()];
  const pass = passed / iterations >= threshold;

  return {
    pass,
    passedSimulations: passed,
    totalSimulations: iterations,
    errors,
    warnings,
    generationTimeMs: totalTime / iterations,
    threshold,
  };
}

function errorKey(e: ValidationError): string {
  return `${e.code}|${e.line ?? "?"}|${e.col ?? "?"}|${e.message}`;
}

function toValidationError(e: Error, seed: string): ValidationError {
  let code = "eval-error";
  let line: number | undefined;
  let col: number | undefined;
  const message = e.message;

  if (e instanceof RestriccionesNoSatisfechasError) {
    code = "restricciones-fallaron";
  } else if (e instanceof EvalError) {
    line = e.line;
    col = e.col;
    if (/división por cero|módulo por cero/i.test(message)) {
      code = "div-zero";
    } else if (/no es real/i.test(message)) {
      code = "raiz-negativa";
    } else if (/variable indefinida/i.test(message)) {
      code = "var-undef";
    } else if (/función desconocida/i.test(message)) {
      code = "fun-undef";
    } else if (/no finito/i.test(message)) {
      code = "no-finito";
    }
  } else if (e instanceof ParseError) {
    code = "parse-error";
    line = e.line;
    col = e.col;
  }

  return {
    severity: "error",
    code,
    message,
    count: 1,
    sampleSeed: seed,
    line,
    col,
  };
}

function verifyResultIntegrity(
  result: GenerationResult,
  compiled: CompiledPlantilla,
  seed: string,
  warnings: Map<string, ValidationError>,
): void {
  // Opciones repetidas en mc
  if (compiled.tipoInferido === "mc" && result.opciones) {
    const uniqueTextos = new Set(result.opciones.map((o) => o.texto));
    if (uniqueTextos.size < result.opciones.length) {
      addWarning(warnings, {
        severity: "warning",
        code: "opciones-no-unicas",
        message: "algunas opciones de mc están repetidas",
        count: 1,
        sampleSeed: seed,
      });
    }
  }

  // Tolerancia inválida
  if (result.tolerancia && result.tolerancia.valor <= 0) {
    addWarning(warnings, {
      severity: "warning",
      code: "tolerancia-invalida",
      message: "tolerancia debe ser positiva",
      count: 1,
      sampleSeed: seed,
    });
  }

  // F2-04: tolerancia_abs inválida. Default ausente = 0 (preserva el
  // comportamiento previo). Si está presente, debe ser ≥ 0.
  if (result.toleranciaAbs !== undefined && result.toleranciaAbs < 0) {
    addWarning(warnings, {
      severity: "warning",
      code: "tolerancia-abs-invalida",
      message: "tolerancia_abs debe ser ≥ 0",
      count: 1,
      sampleSeed: seed,
    });
  }

  // Intentos altos (usamos un umbral implícito de 50 sin tener acceso a maxRetries)
  if (result.intentos >= 50) {
    addWarning(warnings, {
      severity: "warning",
      code: "intentos-altos",
      message: `la semilla ${seed} necesitó ${result.intentos} intentos para satisfacer las restricciones`,
      count: 1,
      sampleSeed: seed,
    });
  }
}

function addWarning(
  bucket: Map<string, ValidationError>,
  w: ValidationError,
): void {
  const key = `${w.code}|${w.message}`;
  const existing = bucket.get(key);
  if (existing) {
    existing.count++;
  } else {
    bucket.set(key, w);
  }
}
