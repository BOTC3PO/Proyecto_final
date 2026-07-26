/**
 * Guard de raíz para el subtipo "Rango" retirado (2026-07-26).
 *
 * El editor clásico ofrecía un subtipo que escribía `rango(lo, hi)`, una
 * función que VBLang nunca tuvo: `generate` moría con "función desconocida:
 * rango. ¿Quisiste decir random?" en CADA intento del alumno, y nada en la
 * interfaz lo avisaba. Nadie había verificado que las factories de variables
 * emitieran funciones que el runtime conoce.
 *
 * Esto lo verifica: toda `fun_call` que las factories puedan producir tiene
 * que estar en `BUILTIN_NAMES`. Si alguien agrega una factory con un nombre
 * inventado, este test falla antes de que llegue a una plantilla.
 */
import { describe, expect, it } from "vitest";
import { BUILTIN_NAMES, type Expr } from "@vb/vblang";
import {
  classifyVariable,
  makeListExpr,
  makeRandomFloatExpr,
  makeRandomIntExpr,
  type VariableKind,
} from "../plantillaFields";

/** Todos los nombres de función que aparecen en una expresión, recursivo. */
function funNames(expr: Expr): string[] {
  switch (expr.kind) {
    case "fun_call":
      return [expr.name, ...expr.args.flatMap(funNames)];
    case "array":
      return expr.items.flatMap(funNames);
    case "unary":
      return funNames(expr.arg);
    case "binop":
      return [...funNames(expr.left), ...funNames(expr.right)];
    default:
      return [];
  }
}

describe("factories de variables · sólo funciones que el runtime conoce", () => {
  const factories: Record<string, Expr> = {
    "random-int": makeRandomIntExpr(1, 10),
    "random-float": makeRandomFloatExpr(0, 1),
    list: makeListExpr(["opcion_a", "opcion_b"]),
  };

  for (const [nombre, expr] of Object.entries(factories)) {
    it(`${nombre} usa builtins reales`, () => {
      const desconocidas = funNames(expr).filter((n) => !BUILTIN_NAMES.includes(n));
      expect(desconocidas).toEqual([]);
    });
  }

  it("los subtipos editables coinciden con las factories (ninguno quedó huérfano)", () => {
    const kinds: VariableKind[] = ["random-int", "random-float", "list", "expr"];
    // "expr" no tiene factory de función (es un literal/expresión libre).
    expect(Object.keys(factories).sort()).toEqual(
      kinds.filter((k) => k !== "expr").sort(),
    );
  });

  it("`rango` no vuelve: no es builtin y ningún subtipo lo produce", () => {
    expect(BUILTIN_NAMES).not.toContain("rango");
    expect(classifyVariable({
      kind: "fun_call",
      name: "rango",
      args: [],
      loc: { line: 1, col: 1 },
    })).toBe("expr");
  });
});
