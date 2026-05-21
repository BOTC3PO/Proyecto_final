import type { TextoOInterpolacion } from "../parser/ast.js";
import { evaluateExpr, type EvalContext } from "./evaluator.js";
import type { Scope } from "./scope.js";

export function formatoDefault(valor: unknown): string {
  if (typeof valor === "number") {
    if (Number.isInteger(valor)) return String(valor);
    return parseFloat(valor.toFixed(4)).toString();
  }
  if (typeof valor === "boolean") return valor ? "verdadero" : "falso";
  if (valor === null || valor === undefined) return "";
  if (Array.isArray(valor)) return valor.map((v) => formatoDefault(v)).join(",");
  return String(valor);
}

function aplicarModificador(
  valor: unknown,
  modificador: string | undefined,
): string {
  if (modificador === undefined) return formatoDefault(valor);

  const mod = modificador.trim();

  if (/^\d+$/.test(mod)) {
    const n = parseInt(mod, 10);
    if (typeof valor !== "number") return String(valor);
    return valor.toFixed(n);
  }

  if (mod === "capitalizar") {
    const s = String(valor);
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
  if (mod === "mayusculas") return String(valor).toUpperCase();
  if (mod === "minusculas") return String(valor).toLowerCase();

  return `${formatoDefault(valor)} ${mod}`;
}

export function interpolar(
  partes: TextoOInterpolacion[],
  scope: Scope,
  ctx: EvalContext,
): string {
  let result = "";
  for (const parte of partes) {
    if (parte.kind === "texto") {
      result += parte.value;
    } else {
      const valor = evaluateExpr(parte.expr, scope, ctx);
      result += aplicarModificador(valor, parte.modificador);
    }
  }
  return result;
}
