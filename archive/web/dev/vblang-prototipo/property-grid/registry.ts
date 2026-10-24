/**
 * Registro de editores del property grid.
 *
 * El property grid es un contenedor que recibe un "elemento" (pregunta,
 * variable, o add-on) y monta el editor correspondiente. La pieza que decide
 * qué componente instanciar es ESTE archivo: un mapa plano de clave →
 * componente.
 *
 * Convención de claves:
 *   `question:<tipo>`     → editor dedicado para el tipo de pregunta <tipo>
 *   `question:default`    → fallback para tipos sin editor dedicado
 *   `variable`            → editor único para variables
 *   `addOn:<kind>`        → editor dedicado para add-ons de un kind
 *   `addOn:default`       → fallback para add-ons sin editor propio
 *
 * Para agregar un tipo nuevo:
 *   1. Definir el componente en `editors.tsx`.
 *   2. Sumarlo al mapa REGISTRY de este archivo.
 *   3. Si entra en "esencial", agregarlo a `developedQuestionTypes`.
 *   4. Listo. El property grid lo monta sin tocar un solo switch.
 *
 * Esto es exactamente el patrón que la versión 2.0 del editor real va a
 * heredar. La diferencia con el editor actual (que tiene un `switch` por
 * tipo en `FieldControl`) es que acá CADA tipo vive en su propio archivo y
 * se compone desde afuera.
 */
import type { ComponentType } from "react";
import type { AddOnKind, QuestionTypeId } from "../state";
import {
  NumericEditor,
  MultipleChoiceEditor,
  TrueFalseEditor,
  OpenTextEditor,
  CompleteEditor,
  FallbackQuestionEditor,
  VariableEditor,
  FallbackAddOnEditor,
} from "./editors";

/** Props que recibe cualquier editor del registro. */
export interface EditorProps<TKind extends string = string> {
  element: { kind: TKind; [k: string]: unknown };
}

type EditorComponent = ComponentType<{ element: unknown }>;

const developedQuestionTypes: ReadonlyArray<QuestionTypeId> = [
  "input",
  "mc",
  "vf",
  "completar",
  "abierta",
];

const REGISTRY: ReadonlyMap<string, EditorComponent> = new Map<string, EditorComponent>([
  ["question:input", NumericEditor as unknown as EditorComponent],
  ["question:mc", MultipleChoiceEditor as unknown as EditorComponent],
  ["question:vf", TrueFalseEditor as unknown as EditorComponent],
  ["question:completar", CompleteEditor as unknown as EditorComponent],
  ["question:abierta", OpenTextEditor as unknown as EditorComponent],
  ["question:default", FallbackQuestionEditor as unknown as EditorComponent],
  ["variable", VariableEditor as unknown as EditorComponent],
  ["addOn:default", FallbackAddOnEditor as unknown as EditorComponent],
]);

export function resolveQuestionEditor(type: QuestionTypeId): EditorComponent {
  const key = developedQuestionTypes.includes(type) ? `question:${type}` : "question:default";
  return REGISTRY.get(key) ?? (REGISTRY.get("question:default") as EditorComponent);
}

export function resolveVariableEditor(): EditorComponent {
  return REGISTRY.get("variable") as EditorComponent;
}

export function resolveAddOnEditor(kind: AddOnKind): EditorComponent {
  // Por ahora todos los add-ons caen en default. Cuando se sumen editores
  // dedicados (pistas con lista, explicación con textarea, etc.), agregar
  // `addOn:${kind}` acá.
  void kind;
  return REGISTRY.get("addOn:default") as EditorComponent;
}
