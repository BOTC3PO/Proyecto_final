/**
 * WO-4 — Conversión del bloque `visual:` (campos kv del DSL) a un `VisualSpec`
 * discriminado por `kind`, para el path NO-generador.
 *
 * El compilador deja el bloque crudo en `compiled.visual` (un `CampoKV[]`, es
 * decir pares `clave: Expr`). Acá cada campo se EVALÚA contra el scope/ctx de la
 * simulación —igual que el enunciado— de modo que un visual hand-authored pueda
 * usar variables (ej. puntos calculados). El resultado, agrupado por `kind`, es
 * un `VisualSpec` que `generate()` adjunta al `GenerationResult` exactamente
 * como el path generador propaga `ejercicio.visual`. El adapter lo copia a
 * `ModuleQuizQuestion.visualSpec` y el `VisualizerRenderer` lo dibuja.
 *
 * Defensivo: devuelve `undefined` si no hay visual, si el `kind` no es uno de
 * los 7 soportados, o si falta el campo requerido del kind (no emite un spec
 * roto que reventaría el renderer).
 */
import type { CampoKV } from "../parser/ast.js";
import { evaluateExpr, type EvalContext } from "../evaluator/evaluator.js";
import type { Scope } from "../evaluator/scope.js";
import type { VisualSpec } from "../types/visual.js";

export function camposToVisualSpec(
  campos: CampoKV[] | undefined,
  scope: Scope,
  ctx: EvalContext,
): VisualSpec | undefined {
  if (!campos || campos.length === 0) return undefined;

  const raw: Record<string, unknown> = {};
  for (const c of campos) {
    raw[c.key] = evaluateExpr(c.value, scope, ctx);
  }

  // Discriminado por `kind`; cada caso valida su campo obligatorio.
  switch (raw.kind) {
    case "line-chart":
      return Array.isArray(raw.series) ? (raw as unknown as VisualSpec) : undefined;
    case "static-image":
      return typeof raw.src === "string" ? (raw as unknown as VisualSpec) : undefined;
    case "timeline":
      return Array.isArray(raw.events) ? (raw as unknown as VisualSpec) : undefined;
    case "latex":
      return typeof raw.content === "string" ? (raw as unknown as VisualSpec) : undefined;
    case "vector-diagram":
      return Array.isArray(raw.vectors) ? (raw as unknown as VisualSpec) : undefined;
    case "circuit":
      return Array.isArray(raw.elements) ? (raw as unknown as VisualSpec) : undefined;
    case "audio":
      return typeof raw.url === "string" && typeof raw.alt === "string"
        ? (raw as unknown as VisualSpec)
        : undefined;
    default:
      return undefined;
  }
}
