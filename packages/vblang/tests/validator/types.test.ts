import { describe, expect, it } from "vitest";
import {
  isAssignable,
  simplifyUnion,
  T,
  typeToString,
} from "../../src/validator/types.js";

describe("types / isAssignable", () => {
  it("mismo primitivo", () => {
    expect(isAssignable(T.number, T.number)).toBe(true);
    expect(isAssignable(T.string, T.string)).toBe(true);
  });

  it("primitivos distintos", () => {
    expect(isAssignable(T.number, T.string)).toBe(false);
    expect(isAssignable(T.boolean, T.number)).toBe(false);
  });

  it("unknown es comodín bidireccional", () => {
    expect(isAssignable(T.unknown, T.number)).toBe(true);
    expect(isAssignable(T.number, T.unknown)).toBe(true);
    expect(isAssignable(T.unknown, T.unknown)).toBe(true);
  });

  it("array covariante en el elemento", () => {
    expect(isAssignable(T.array(T.number), T.array(T.unknown))).toBe(true);
    expect(isAssignable(T.array(T.number), T.array(T.number))).toBe(true);
    expect(isAssignable(T.array(T.number), T.array(T.string))).toBe(false);
  });

  it("union actual: todas las opciones asignables a esperado", () => {
    expect(
      isAssignable(T.union(T.number, T.string), T.union(T.number, T.string)),
    ).toBe(true);
    expect(isAssignable(T.union(T.number, T.string), T.number)).toBe(false);
  });

  it("union esperado: actual asignable a alguna opción", () => {
    expect(isAssignable(T.number, T.union(T.number, T.string))).toBe(true);
    expect(isAssignable(T.boolean, T.union(T.number, T.string))).toBe(false);
  });

  it("never no es asignable salvo a unknown", () => {
    expect(isAssignable(T.never, T.unknown)).toBe(true);
    expect(isAssignable(T.never, T.number)).toBe(false);
    expect(isAssignable(T.number, T.never)).toBe(false);
  });

  it("object: subtipo estructural", () => {
    const concrete = T.object({ a: T.number, b: T.string });
    const expected = T.object({ a: T.number });
    expect(isAssignable(concrete, expected)).toBe(true);
    expect(
      isAssignable(T.object({ a: T.number }), T.object({ a: T.string })),
    ).toBe(false);
    expect(isAssignable(T.object({}), T.object({ a: T.number }))).toBe(false);
  });
});

describe("types / simplifyUnion", () => {
  it("una sola opción → la misma", () => {
    expect(simplifyUnion([T.number])).toEqual(T.number);
  });

  it("con unknown colapsa a unknown", () => {
    expect(simplifyUnion([T.number, T.unknown])).toEqual(T.unknown);
  });

  it("duplicados se eliminan", () => {
    expect(simplifyUnion([T.number, T.number])).toEqual(T.number);
  });

  it("dos tipos distintos → union", () => {
    const u = simplifyUnion([T.number, T.string]);
    expect(u.kind).toBe("union");
  });

  it("aplana unions anidadas", () => {
    const inner = T.union(T.number, T.string);
    const u = simplifyUnion([inner, T.boolean]);
    expect(u.kind).toBe("union");
    if (u.kind === "union") {
      expect(u.options).toHaveLength(3);
    }
  });
});

describe("types / typeToString", () => {
  it("primitivos", () => {
    expect(typeToString(T.number)).toBe("number");
    expect(typeToString(T.string)).toBe("string");
    expect(typeToString(T.boolean)).toBe("boolean");
    expect(typeToString(T.null)).toBe("null");
    expect(typeToString(T.unknown)).toBe("unknown");
    expect(typeToString(T.never)).toBe("never");
  });

  it("array", () => {
    expect(typeToString(T.array(T.number))).toBe("array<number>");
    expect(typeToString(T.array(T.array(T.string)))).toBe(
      "array<array<string>>",
    );
  });

  it("union", () => {
    expect(typeToString(T.union(T.number, T.string))).toBe("number | string");
  });

  it("object", () => {
    expect(typeToString(T.object({ a: T.number, b: T.string }))).toBe(
      "{a: number, b: string}",
    );
  });
});
