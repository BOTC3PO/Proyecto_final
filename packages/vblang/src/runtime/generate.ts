import { createBuiltins } from "../evaluator/builtins.js";
import { CONSTANTES_GLOBALES } from "../evaluator/constants.js";
import {
  EvalError,
  RestriccionesNoSatisfechasError,
} from "../evaluator/errors.js";
import {
  deepEqual,
  evaluateExpr,
  type EvalContext,
} from "../evaluator/evaluator.js";
import {
  formatoDefault,
  interpolar,
} from "../evaluator/interpolation.js";
import { createIsolatedMath } from "../evaluator/math-setup.js";
import { Scope } from "../evaluator/scope.js";
import { createPrng, type PRNG } from "./prng.js";
import type {
  CompiledPlantilla,
  GenerationOptions,
  GenerationResult,
  OpcionGenerada,
} from "./types.js";

export function generate(
  compiled: CompiledPlantilla,
  options: GenerationOptions,
): GenerationResult {
  const maxRetries = options.maxRetries ?? 100;
  const prng = createPrng(options.seed);
  const math = createIsolatedMath();
  const builtins = createBuiltins(prng, math);
  const ctx: EvalContext = { prng, math, builtins };

  let ultimosValores: Record<string, unknown> = {};

  for (let intento = 1; intento <= maxRetries; intento++) {
    const scope = new Scope({ ...CONSTANTES_GLOBALES });

    // Placeholders para dataset/mapa (Sprint 9 los cablea con datos reales).
    if (compiled.dataset) scope.set("dataset", []);
    if (compiled.mapa) scope.set("mapa", []);

    // Declarar variables en orden, con loc para errores.
    for (const decl of compiled.declaracionesVariables) {
      try {
        const valor = evaluateExpr(decl.expr, scope, ctx);
        scope.set(decl.nombre, valor);
      } catch (e) {
        if (e instanceof EvalError) {
          if (e.line === undefined) {
            e.line = decl.loc.line;
            e.col = decl.loc.col;
          }
          throw e;
        }
        throw e;
      }
    }

    ultimosValores = scope.toRecord();

    // Verificar restricciones.
    let todasOk = true;
    for (const cond of compiled.restricciones) {
      const ok = evaluateExpr(cond, scope, ctx);
      if (typeof ok !== "boolean") {
        throw new EvalError(
          `cada restricción debe evaluar a boolean, recibió ${typeof ok}`,
          cond.loc,
        );
      }
      if (!ok) {
        todasOk = false;
        break;
      }
    }
    if (!todasOk) continue;

    // Evaluar respuesta (si la hay).
    let respuestaVal: unknown;
    if (compiled.respuesta) {
      respuestaVal = evaluateExpr(compiled.respuesta, scope, ctx);
      if (
        typeof respuestaVal === "number" &&
        (Number.isNaN(respuestaVal) || !Number.isFinite(respuestaVal))
      ) {
        throw new EvalError(
          `respuesta evaluó a un número no finito (${respuestaVal})`,
          compiled.respuesta.loc,
        );
      }
    }

    let respuestasValidasVals: unknown[] | undefined;
    if (compiled.respuestasValidas) {
      respuestasValidasVals = compiled.respuestasValidas.map((e) => {
        const v = evaluateExpr(e, scope, ctx);
        if (
          typeof v === "number" &&
          (Number.isNaN(v) || !Number.isFinite(v))
        ) {
          throw new EvalError(
            `respuesta_valida evaluó a un número no finito (${v})`,
            e.loc,
          );
        }
        return v;
      });
    }

    // Interpolación.
    const enunciadoTexto = interpolar(compiled.enunciado, scope, ctx);
    const pasosTexto = compiled.pasos
      ? compiled.pasos.map((p) => interpolar(p.partes, scope, ctx))
      : undefined;

    // Opciones para mc/vf.
    const opciones = construirOpciones(compiled, respuestaVal, scope, ctx);

    return {
      tipo: compiled.tipoInferido,
      enunciado: enunciadoTexto,
      pasos: pasosTexto,
      respuesta: respuestaVal,
      respuestasValidas: respuestasValidasVals,
      unidad: compiled.unidad,
      tolerancia: compiled.tolerancia,
      opciones,
      variables: scope.toRecord(),
      seed: options.seed,
      intentos: intento,
    };
  }

  throw new RestriccionesNoSatisfechasError(maxRetries, ultimosValores);
}

function construirOpciones(
  compiled: CompiledPlantilla,
  respuestaVal: unknown,
  scope: Scope,
  ctx: EvalContext,
): OpcionGenerada[] | undefined {
  if (compiled.tipoInferido === "vf") {
    if (typeof respuestaVal !== "boolean") {
      throw new EvalError(
        `tipo vf requiere que la respuesta evalúe a verdadero/falso, recibió ${typeof respuestaVal}`,
      );
    }
    return [
      { texto: "Verdadero", correcta: respuestaVal === true },
      { texto: "Falso", correcta: respuestaVal === false },
    ];
  }

  if (compiled.tipoInferido === "mc") {
    if (compiled.opcionesExplicitas) {
      let textos: unknown[];
      if (compiled.opcionesExplicitas.length === 1) {
        const single = evaluateExpr(
          compiled.opcionesExplicitas[0],
          scope,
          ctx,
        );
        if (Array.isArray(single)) {
          textos = single;
        } else {
          textos = [single];
        }
      } else {
        textos = compiled.opcionesExplicitas.map((e) =>
          evaluateExpr(e, scope, ctx),
        );
      }

      const opciones: OpcionGenerada[] = textos.map((t) => ({
        texto: formatoDefault(t),
        correcta: deepEqual(t, respuestaVal),
      }));
      if (!opciones.some((o) => o.correcta)) {
        throw new EvalError(
          `la respuesta no aparece en opciones_explicitas`,
        );
      }
      return ctx.prng.shuffle(opciones);
    }

    if (compiled.opciones !== undefined) {
      const N = compiled.opciones;
      if (typeof respuestaVal !== "number") {
        throw new EvalError(
          `para tipo mc con respuesta no numérica use opciones_explicitas`,
        );
      }
      const distractores = generateNumericDistractors(
        respuestaVal,
        N - 1,
        ctx.prng,
      );
      const allOpts: OpcionGenerada[] = [
        { texto: formatoDefault(respuestaVal), correcta: true },
        ...distractores.map((d) => ({
          texto: formatoDefault(d),
          correcta: false,
        })),
      ];
      return ctx.prng.shuffle(allOpts);
    }
  }

  return undefined;
}

function generateNumericDistractors(
  respuesta: number,
  n: number,
  prng: PRNG,
): number[] {
  const magnitude = Math.max(1, Math.abs(respuesta) * 0.1);
  const set = new Set<number>();
  let attempts = 0;
  while (set.size < n && attempts < 100) {
    const d = respuesta + prng.int(-5, 5) * magnitude;
    if (d !== respuesta) set.add(d);
    attempts++;
  }
  attempts = 0;
  while (set.size < n && attempts < 100) {
    const d = respuesta * (1 + (prng.next() - 0.5));
    if (d !== respuesta) set.add(d);
    attempts++;
  }
  return [...set].slice(0, n);
}
