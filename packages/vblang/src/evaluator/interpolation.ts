import type { TextoOInterpolacion } from "../parser/ast.js";
import { evaluateExpr, type EvalContext } from "./evaluator.js";
import type { Scope } from "./scope.js";

/**
 * PLAN casos-limite §10 — un entero grande salía en notación exponencial
 * (`1e21` → `"1e+21"`), que en el enunciado de un ejercicio no se lee como un
 * número. `BigInt` lo escribe completo. Ojo: para enteros por encima de
 * `Number.MAX_SAFE_INTEGER` el valor YA perdió precisión al parsearse como
 * float64 (`123456789012345678901` es `123456789012345680000` desde el lexer);
 * esto arregla la presentación, no la precisión, que necesitaría bigint en
 * todo el pipeline.
 */
function enteroSinExponente(valor: number): string {
  const s = String(valor);
  if (!s.includes("e") && !s.includes("E")) return s;
  try {
    return BigInt(valor).toString();
  } catch {
    return s;
  }
}

export function formatoDefault(valor: unknown): string {
  if (typeof valor === "number") {
    if (!Number.isFinite(valor)) return String(valor);
    if (Number.isInteger(valor)) return enteroSinExponente(valor);
    const redondeado = parseFloat(valor.toFixed(4));
    // PLAN casos-limite §10 — `toFixed(4)` aplastaba a `"0"` cualquier valor
    // menor a 0.00005: `1e-7` se interpolaba como `0`, así que el enunciado
    // mostraba "0?" y el número real desaparecía del ejercicio. Si el redondeo
    // borra un valor que no era cero, se muestran cifras significativas.
    if (redondeado === 0) return String(parseFloat(valor.toPrecision(4)));
    return String(redondeado);
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

/**
 * PLAN casos-limite §9 — `"{a} + {b}"` con `b = -3` salía `"4 + -3"`, que es
 * notación incorrecta: debería ser `4 + (-3)`.
 *
 * El paréntesis se pone SÓLO si el texto que viene inmediatamente antes termina
 * en un operador aritmético, porque parentizar siempre sería peor: `"La
 * temperatura es {t}"` tiene que seguir dando `"La temperatura es -3"` y no
 * `"... es (-3)"`. Se exige además que el operador esté suelto (precedido por
 * espacio o al principio) para no tocar guiones internos de palabra:
 * `"anti-{x}"` no se parentiza.
 */
function pideParentesis(textoPrevio: string): boolean {
  return /(^|\s)[+\-*/×·÷^]\s*$/.test(textoPrevio);
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
      const texto = aplicarModificador(valor, parte.modificador);
      if (typeof valor === "number" && valor < 0 && pideParentesis(result)) {
        result += `(${texto})`;
        continue;
      }
      result += texto;
    }
  }
  return result;
}
