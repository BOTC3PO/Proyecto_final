import { LexError } from "./errors.js";

export interface IndentEvent {
  kind: "INDENT" | "DEDENT" | "SAME";
  count: number;
}

export function classifyIndent(
  spaces: number,
  stack: number[],
  line: number,
): IndentEvent {
  if (spaces % 2 !== 0) {
    throw new LexError(
      `Indentación de ${spaces} espacios; debe ser múltiplo de 2.`,
      line,
      1,
    );
  }
  const top = stack[stack.length - 1];
  if (spaces > top) {
    stack.push(spaces);
    return { kind: "INDENT", count: 1 };
  }
  if (spaces === top) {
    return { kind: "SAME", count: 0 };
  }
  let dedents = 0;
  while (stack.length > 0 && stack[stack.length - 1] > spaces) {
    stack.pop();
    dedents++;
  }
  if (stack[stack.length - 1] !== spaces) {
    throw new LexError("Indentación inconsistente.", line, 1);
  }
  return { kind: "DEDENT", count: dedents };
}
