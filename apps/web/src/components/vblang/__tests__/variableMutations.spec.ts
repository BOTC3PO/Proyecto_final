/**
 * VB-B6 — tests de los helpers de variables en `plantillaFields.ts`.
 *
 * Cubre:
 *  (v1) `readVariable` lee por índice; null si fuera de rango.
 *  (v2) `addVariable` agrega al final si no hay `atIndex`.
 *  (v3) `addVariable` inserta en `atIndex` específico.
 *  (v4) `addVariable` crea el bloque `variables:` si no existía.
 *  (v5) `addVariable` desduplica nombres automáticamente.
 *  (v6) `updateVariable` reemplaza en el índice, conserva el orden.
 *  (v7) `removeVariable` quita del índice; elimina el bloque si queda vacío.
 *  (v8) `classifyVariable` mapea expresiones a `VariableKind`.
 *  (v9) Round-trip DSL: agregar + serializar + parsear conserva
 *      el contenido.
 */

import { describe, expect, it } from "vitest";
import { parse, serialize, type Plantilla, type VariableDecl } from "@vb/vblang";
import { DUMMY_LOC, numLit } from "../plantillaAst";
import {
  addVariable,
  classifyVariable,
  makeListExpr,
  makeRandomFloatExpr,
  makeRandomIntExpr,
  makeRangeExpr,
  readVariable,
  removeVariable,
  updateVariable,
} from "../plantillaFields";

function dslToPlantilla(src: string): Plantilla {
  return parse(src);
}

function decl(nombre: string, value: number = 1): VariableDecl {
  return { nombre, expr: numLit(value), loc: DUMMY_LOC };
}

describe("VB-B6: helpers de variables", () => {
  it("(v1) readVariable lee por índice; null fuera de rango", () => {
    const p = dslToPlantilla(
      'variables:\n  a: 1\n  b: 2\nenunciado: "x"\nrespuesta: 1\n',
    );
    expect(readVariable(p, 0)?.nombre).toBe("a");
    expect(readVariable(p, 1)?.nombre).toBe("b");
    expect(readVariable(p, 2)).toBeNull();
    expect(readVariable(p, -1)).toBeNull();
  });

  it("(v2) addVariable agrega al final si no hay atIndex", () => {
    const p = dslToPlantilla(
      'variables:\n  a: 1\nenunciado: "x"\nrespuesta: 1\n',
    );
    const next = addVariable(p, decl("b", 2));
    const decls = (next.bloques.find((b) => b.kind === "variables") as { declaraciones: VariableDecl[] }).declaraciones;
    expect(decls).toHaveLength(2);
    expect(decls[1]?.nombre).toBe("b");
  });

  it("(v3) addVariable inserta en atIndex específico", () => {
    const p = dslToPlantilla(
      'variables:\n  a: 1\n  c: 3\nenunciado: "x"\nrespuesta: 1\n',
    );
    const next = addVariable(p, decl("b", 2), 1);
    const decls = (next.bloques.find((b) => b.kind === "variables") as { declaraciones: VariableDecl[] }).declaraciones;
    expect(decls.map((d) => d.nombre)).toEqual(["a", "b", "c"]);
  });

  it("(v4) addVariable crea el bloque variables: si no existía", () => {
    const p = dslToPlantilla('enunciado: "x"\nrespuesta: 1\n');
    expect(p.bloques.find((b) => b.kind === "variables")).toBeUndefined();
    const next = addVariable(p, decl("a", 1));
    const v = next.bloques.find((b) => b.kind === "variables");
    expect(v).toBeDefined();
    if (v && v.kind === "variables") {
      expect(v.declaraciones).toHaveLength(1);
      expect(v.declaraciones[0]?.nombre).toBe("a");
    }
  });

  it("(v5) addVariable desduplica nombres (no choca con var-duplicada del linter)", () => {
    const p = dslToPlantilla(
      'variables:\n  v: 1\nenunciado: "x"\nrespuesta: 1\n',
    );
    const next = addVariable(p, decl("v", 2));
    const decls = (next.bloques.find((b) => b.kind === "variables") as { declaraciones: VariableDecl[] }).declaraciones;
    expect(decls.map((d) => d.nombre)).toEqual(["v", "v_2"]);
  });

  it("(v6) updateVariable reemplaza en el índice, conserva el orden", () => {
    const p = dslToPlantilla(
      'variables:\n  a: 1\n  b: 2\n  c: 3\nenunciado: "x"\nrespuesta: 1\n',
    );
    const next = updateVariable(p, 1, decl("B", 99));
    const decls = (next.bloques.find((b) => b.kind === "variables") as { declaraciones: VariableDecl[] }).declaraciones;
    expect(decls[0]?.nombre).toBe("a");
    expect(decls[1]?.nombre).toBe("B");
    expect(decls[1]?.expr).toMatchObject({ kind: "num", value: 99 });
    expect(decls[2]?.nombre).toBe("c");
  });

  it("(v7) removeVariable quita del índice; elimina el bloque si queda vacío", () => {
    const p = dslToPlantilla(
      'variables:\n  a: 1\nenunciado: "x"\nrespuesta: 1\n',
    );
    const next = removeVariable(p, 0);
    expect(next.bloques.find((b) => b.kind === "variables")).toBeUndefined();
  });

  it("(v7b) removeVariable deja el bloque con el resto si quedan más", () => {
    const p = dslToPlantilla(
      'variables:\n  a: 1\n  b: 2\nenunciado: "x"\nrespuesta: 1\n',
    );
    const next = removeVariable(p, 0);
    const decls = (next.bloques.find((b) => b.kind === "variables") as { declaraciones: VariableDecl[] }).declaraciones;
    expect(decls).toHaveLength(1);
    expect(decls[0]?.nombre).toBe("b");
  });

  it("(v8) classifyVariable mapea expresiones a kinds", () => {
    expect(classifyVariable(makeRandomIntExpr(1, 10))).toBe("random-int");
    expect(classifyVariable(makeRandomFloatExpr(0, 1))).toBe("random-float");
    expect(classifyVariable(makeListExpr(["a", "b"]))).toBe("list");
    expect(classifyVariable(makeRangeExpr(0, 10))).toBe("range");
    expect(classifyVariable(numLit(42))).toBe("expr");
  });

  it("(v9) round-trip DSL: agregar y serializar conserva el contenido", () => {
    const p = dslToPlantilla('enunciado: "x"\nrespuesta: 1\n');
    const next = addVariable(p, decl("a", 1));
    const round = parse(serialize(next));
    const v = round.bloques.find((b) => b.kind === "variables");
    expect(v).toBeDefined();
    if (v && v.kind === "variables") {
      expect(v.declaraciones[0]?.nombre).toBe("a");
    }
  });
});
