/**
 * Sistema de tipos del DSL para el linter.
 * Sin relación con los tipos de TS — esto es runtime data.
 */

export type VBType =
  | { kind: "number" }
  | { kind: "string" }
  | { kind: "boolean" }
  | { kind: "null" }
  | { kind: "array"; element: VBType }
  | { kind: "object"; fields: Record<string, VBType> }
  | { kind: "union"; options: VBType[] }
  | { kind: "unknown" }
  | { kind: "never" };

const NUMBER: VBType = { kind: "number" };
const STRING: VBType = { kind: "string" };
const BOOLEAN: VBType = { kind: "boolean" };
const NULL: VBType = { kind: "null" };
const UNKNOWN: VBType = { kind: "unknown" };
const NEVER: VBType = { kind: "never" };

export const T = {
  number: NUMBER,
  string: STRING,
  boolean: BOOLEAN,
  null: NULL,
  unknown: UNKNOWN,
  never: NEVER,
  array(element: VBType): VBType {
    return { kind: "array", element };
  },
  object(fields: Record<string, VBType>): VBType {
    return { kind: "object", fields };
  },
  union(...options: VBType[]): VBType {
    return simplifyUnion(options);
  },
};

export function typesEqual(a: VBType, b: VBType): boolean {
  if (a.kind !== b.kind) return false;
  switch (a.kind) {
    case "number":
    case "string":
    case "boolean":
    case "null":
    case "unknown":
    case "never":
      return true;
    case "array":
      return typesEqual(
        a.element,
        (b as Extract<VBType, { kind: "array" }>).element,
      );
    case "object": {
      const bo = b as Extract<VBType, { kind: "object" }>;
      const ak = Object.keys(a.fields);
      const bk = Object.keys(bo.fields);
      if (ak.length !== bk.length) return false;
      return ak.every(
        (k) => k in bo.fields && typesEqual(a.fields[k], bo.fields[k]),
      );
    }
    case "union": {
      const bu = b as Extract<VBType, { kind: "union" }>;
      if (a.options.length !== bu.options.length) return false;
      return a.options.every((o) =>
        bu.options.some((o2) => typesEqual(o, o2)),
      );
    }
  }
}

export function simplifyUnion(options: VBType[]): VBType {
  if (options.length === 0) return NEVER;
  if (options.some((o) => o.kind === "unknown")) return UNKNOWN;

  // Flatten nested unions
  const flat: VBType[] = [];
  for (const o of options) {
    if (o.kind === "union") flat.push(...o.options);
    else flat.push(o);
  }

  // Dedupe
  const unique: VBType[] = [];
  for (const t of flat) {
    if (!unique.some((u) => typesEqual(u, t))) unique.push(t);
  }

  if (unique.length === 0) return NEVER;
  if (unique.length === 1) return unique[0];
  return { kind: "union", options: unique };
}

export function isAssignable(actual: VBType, expected: VBType): boolean {
  if (actual.kind === "unknown" || expected.kind === "unknown") return true;
  if (actual.kind === "never") return false;
  if (expected.kind === "never") return false;

  if (actual.kind === "union") {
    return actual.options.every((o) => isAssignable(o, expected));
  }
  if (expected.kind === "union") {
    return expected.options.some((o) => isAssignable(actual, o));
  }

  if (actual.kind !== expected.kind) return false;

  switch (actual.kind) {
    case "number":
    case "string":
    case "boolean":
    case "null":
      return true;
    case "array":
      return isAssignable(
        actual.element,
        (expected as Extract<VBType, { kind: "array" }>).element,
      );
    case "object": {
      const eo = expected as Extract<VBType, { kind: "object" }>;
      // Structural subtyping: actual debe tener todos los campos esperados.
      for (const [k, t] of Object.entries(eo.fields)) {
        if (!(k in actual.fields)) return false;
        if (!isAssignable(actual.fields[k], t)) return false;
      }
      return true;
    }
  }
  return false;
}

export function typeToString(t: VBType): string {
  switch (t.kind) {
    case "number":
      return "number";
    case "string":
      return "string";
    case "boolean":
      return "boolean";
    case "null":
      return "null";
    case "unknown":
      return "unknown";
    case "never":
      return "never";
    case "array":
      return `array<${typeToString(t.element)}>`;
    case "object": {
      const fs = Object.entries(t.fields)
        .map(([k, v]) => `${k}: ${typeToString(v)}`)
        .join(", ");
      return `{${fs}}`;
    }
    case "union":
      return t.options.map(typeToString).join(" | ");
  }
}

/* ---------- Tipos del linter (acá para evitar circular imports) ---------- */

export interface LintIssue {
  severity: "error" | "warning";
  code: string;
  message: string;
  line: number;
  col: number;
  suggestion?: string;
}

export interface LintReport {
  issues: LintIssue[];
  errors: LintIssue[];
  warnings: LintIssue[];
  variableTypes: Record<string, VBType>;
}
