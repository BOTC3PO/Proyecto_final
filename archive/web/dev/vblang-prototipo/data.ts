/**
 * Mock data del prototipo.
 *
 * Hardcodeada — no hay red, no hay localStorage, no hay Prisma. El prototipo
 * arranca con una pregunta numérica (la del enunciado del proyecto), 2
 * variables y un add-on de "pistas" plegado, para mostrar el patrón visual
 * desde el primer render.
 *
 * La idea es que cualquier visitante vea el producto en su estado "vivo":
 * enunciado + variables con valores resueltos + add-on visible como bloque
 * plegable con resumen, todo clickeable.
 */
import type { AddOn, PrototypeState, ProtoVariable } from "./state";

const now = (min: number, max: number, salt: number) => {
  // Determinístico a partir de `seed` para que "regenerar" cambie el valor
  // sin volverlo aleatorio total. Mismo algoritmo que el DSL usa: random(2,9).
  const r = Math.sin(salt * 9301 + 49297) * 233280;
  return min + Math.floor((r - Math.floor(r)) * (max - min + 1));
};

export function buildInitialState(seed = 1): PrototypeState {
  const a: ProtoVariable = {
    id: "v-a",
    name: "a",
    type: "int",
    min: 2,
    max: 9,
    expression: "random(2, 9)",
    currentValue: now(2, 9, seed),
  };
  const b: ProtoVariable = {
    id: "v-b",
    name: "b",
    type: "int",
    min: 2,
    max: 9,
    expression: "random(2, 9)",
    currentValue: now(2, 9, seed + 7),
  };

  const pistas: AddOn = {
    id: "add-hints",
    kind: "hints",
    summary: "Pistas (2)",
    expanded: false,
    data: {
      kind: "hints",
      items: [
        "Pensá en la tabla del {a}.",
        "Si te trabás, probá con los dedos.",
      ],
    },
  };

  return {
    question: {
      type: "input",
      enunciado: "¿Cuánto es {a} × {b}?",
      respuesta: "a * b",
      tolerancia: 0,
    },
    variables: [a, b],
    addOns: [pistas],
    selected: { kind: "question" },
    seed,
    showCode: false,
    addMenuOpen: false,
  };
}

/**
 * Genera el DSL mock que muestra el panel "Código generado". No se compila:
 * es solo un string con formato que se actualiza desde el state. Se mantiene
 * como función pura para que cambiar el enunciado / respuesta / variables
 * refresque el panel en vivo sin lógica de serialización real.
 */
export function buildMockDsl(s: PrototypeState): string {
  const varsBlock = s.variables
    .map((v) => `  ${v.name} = ${v.expression}`)
    .join("\n");

  const lines: string[] = [];
  if (s.variables.length > 0) {
    lines.push("variables:");
    lines.push(varsBlock);
  }
  lines.push(`enunciado: "${s.question.enunciado}"`);
  lines.push(`tipo: ${s.question.type}`);

  if (s.question.type === "input") {
    lines.push(`respuesta: ${s.question.respuesta ?? ""}`);
    lines.push(`tolerancia_abs: ${s.question.tolerancia ?? 0}`);
  }
  if (s.question.type === "mc" && s.question.opciones) {
    lines.push("opciones:");
    s.question.opciones.forEach((o, idx) => {
      lines.push(`  - id: ${o.id}`);
      lines.push(`    texto: "${o.label}"`);
      if (o.correct) lines.push("    correcta: true");
      if (idx < s.question.opciones!.length - 1) lines.push("");
    });
  }
  if (s.question.type === "vf") {
    lines.push(`respuesta: ${s.question.vfAnswer ? "verdadero" : "falso"}`);
  }
  for (const a of s.addOns) {
    if (a.kind === "hints" && a.data.kind === "hints") {
      lines.push("pistas:");
      a.data.items.forEach((h) => lines.push(`  - "${h}"`));
    }
    if (a.kind === "explanation" && a.data.kind === "explanation") {
      lines.push(`explicacion: "${a.data.text}"`);
    }
  }
  return lines.join("\n");
}

/**
 * Genera el enunciado "renderizado" (con variables sustituidas) para el
 * preview. Solo numérica / mc / vf están resueltos; el resto cae en un
 * placeholder. No es el motor real: es un mock visible.
 */
export function buildRenderedEnunciado(s: PrototypeState): string {
  let out = s.question.enunciado;
  for (const v of s.variables) {
    const value = Array.isArray(v.currentValue)
      ? v.currentValue.join(", ")
      : String(v.currentValue);
    out = out.replaceAll(`{${v.name}}`, value);
  }
  return out;
}
